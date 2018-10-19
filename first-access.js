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
        url: 'https://api-5s.herokuapp.com/firstAccess',
        success(data){
            swal("", data.message, data.type)
                .then((value) => {
                window.location.href = 'https://login-5s.herokuapp.com';
            });
        },
        error(data){
            swal("", data.message, data.type);
        }
    });
});
