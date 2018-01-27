<?php
    namespace App\Http\Middleware;
    use Closure;
    use Auth;
    class check
    {
        /**
         * Handle an incoming request.
         *
         * @param  \Illuminate\Http\Request  $request
         * @param  \Closure  $next
         * @return mixed
         */
        public function handle($request, Closure $next)
        {
            if(!Auth::check()) {
                return redirect('/login');
            }
            else if(Auth::check() && Auth::user()->permission != 1) {
                if(Auth::user()->permission == 0)
                    return redirect('/');
                else
                    die("Access denied !!!");
            }
             else {
                return $next($request);
            }
        }
    }
?>