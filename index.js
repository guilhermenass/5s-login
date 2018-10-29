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
            url: 'https://api-5s.herokuapp.com/authenticate',
            success(data){
                if(data.isAuth)
                    window.location.href = 'https://web-5s.herokuapp.com/auth?token=' + data.token;
            },
            error(data){
                swal('', data.responseText, 'error');
            }
        });
    }
});
