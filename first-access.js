$('.form-first-access').submit(function( event ){
    event.preventDefault();

    let params = new URLSearchParams(document.location.search.substring(1));
    let id = params.get('id');

    var password = $('.password').val();
    var confirmPassword = $(".password-confirm").val();

    if(password == "" || confirmPassword == ""){
        swal("", "Os campos senha e confirmação de senha devem ser preenchidos!", "warning");
        return false;
    }
    if(password != confirmPassword){
        swal("", "As senhas não conferem!", "warning");
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
        },
        error(data){
            swal("", data.message, data.type);
        }
    });
});
