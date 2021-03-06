function btnAddTag(){
    $('#addTag').modal('show');
}
function btnCreateTag(){
    var name = $('#addName').val();
    $.ajax({
        type: 'post',
        url: 'add',
        data: {
            '_token': $('input[name=_token]').val(),
            'name': name,
            'slug': name,
        },
        success: function(data) {
            console.log(data);
            var html = '<tr id="tag_'+data.id+'"><td id="name_"'+data.id+'>'+data.name+'</td><td></td><td><a onclick="btnEditTag('+data.slug+')" class="btn btn-success">Edit</a><a onclick="btnDeleteTag('+data.id+')" class="btn btn-danger">Delete</a></td>';  
            
            $('#menu').append(html);

            $('#addTag').modal('hide');
        }
    });
}
function btnEditTag(id){
    $('#editTag').modal('show');
    $.ajax({
        type: 'get',
        url: 'findTag?title='+id,
        data: {
            
        },
        success: function(data) {
            console.log(data);
            $('#editName').val(data.name);
            $('#editId').val(data.id);

        }
    });
}

function btnUpdateTag(){
    var name = $('#editName').val();
    var id = $('#editId').val();
    $.ajax({
        type: 'post',
        url: 'update',
        data: {
            '_token': $('input[name=_token]').val(),
            'id': id,
            'name': name,
        },
        success: function(data) {
            console.log(data);
            /*for(var i = 0; i < data.)
           
            var html = '<td>'+data.name+'</td><td>'+data.+'</td><td>'+data.type+'</td><td><img src="'+data.thumbnail+'" width="100px" /></td><td>'+data.user_id+'</td><td>'+data.views+'</td><td>'+data.created_at+'</td><td><a href="http://phamhue.dev:8190/admin/post/show/?title='+data.slug+'" class="btn btn-primary" width="100%">Show</a><a onclick="btnEdit(\''+data.slug+'\')" class="btn btn-success" width="100%">Edit</a><a onclick="btnDelete('+data.id+')" class="btn btn-danger" width="100%">Delete</a></td>';  
            
            $('#tag_'+data.id).html(html);*/
            var html = '<td id="name_'+data.id+'">'+data.name+'</td>';
            
            //$('#name_'+data.id).val(data.name);
            document.getElementById('name_'+data.id).innerHTML = data.name;
            //$('#tag_'+data.id).append(html);
            console.log($('#name_'+data.id).val());
            $('#editTag').modal('hide');
        }
    });
}

function btnDeleteTag(id){
    $('#deleteId').val(id);
    $('#deleteTag').modal('show');
}

function DeleteTag(){
    $.ajax({
        type: 'post',
        url: 'deleteTag',
        data: {
            '_token': $('input[name=_token]').val(),
            'id': $('#deleteId').val(),
        },
        success: function(id) {
            console.log(id);
            $('#tag_'+id).remove();
            $('#deleteTag').modal('hide');
        }
    });
}
$(function(){
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
});
