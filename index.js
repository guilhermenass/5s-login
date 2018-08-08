$('.form-login').submit(function( event ){
    event.preventDefault();

    var email = $('.email').val();
    var cbFirstAccess = document.getElementById("cbFirstAccess").checked;
    
    if(!cbFirstAccess)
    {
        var password = $('.password').val();

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
                    window.location.href = 'https://web-senai5s.herokuapp.com/auth?token=' + data.token;
            },
            error(data){
                swal('', data.responseText, 'error');
            }
        });
    } else {
        var user = {
            email: email,
            cbFirstAccess: true
        }

        $.ajax({
            method: 'post',
            data: user,
            url: 'https://api-senai5s.herokuapp.com/validateFirstAccess',
            success(data){
                if(data.isFirstAccess)
                    window.location.href = 'https://login-senai5s.herokuapp.com/first-access.html?id='+data.id;
            },
            error(data){
                alert(data.responseText);
            }
        });
    }
});

function firstAccess(cb) {
    if (cb.checked){
        document.getElementById('password').disabled = true;
        document.getElementById('password').innerText = '';
        
    } else {
        document.getElementById('password').disabled = false;        
    }
}
