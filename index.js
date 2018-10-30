$('.form-login').submit(function( event ){
    event.preventDefault();

    var email = $('.email').val();
    var password = $('.password').val();

    if(email != "" && password != "") {
        var user = {
            email: email,
            password: password
        }
    
        $.ajax({
            method: 'post',
            data: user,
            url: 'http://localhost:4000/authenticate',
            success(data){
                if(data.isAuth)
                    window.location.href = 'http://localhost:4200/auth?token=' + data.token;
            },
            error(data){
                swal('', data.responseText, 'error');
            }
        });
    }
});
