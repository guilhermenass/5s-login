$('.form-first-access').submit(function( event ){
    event.preventDefault();

    let params = new URLSearchParams(document.location.search.substring(1));
    let id = params.get('id');

    var password = $('.password').val();
    if($(".password").val() != $(".password-confirm").val()){
        alert("As senhas não conferem!");
        return false;
    }
    var user = {
        id: id,
        password: password,
    }
    $.ajax({
        method: 'post',
        data: user,
        url: 'http://localhost:4000/firstAccess',
        success(data){
            swal("", data.message, data.type)
                .then((value) => {
                window.location.href = 'http://localhost:8080';
            });
            //swal("", data.message, data.type),
        },
        error(data){
            swal("", data.message, data.type);
        }
    });
});
