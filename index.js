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
                    window.location.href = 'http://localhost:4200/auth?token=' + data.token;
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
            url: 'http://localhost:4000/validateFirstAccess',
            success(data){
                if(data.isFirstAccess)
                    window.location.href = 'http://localhost:8080/first-access.html?id='+data.id;
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
