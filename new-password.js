function saveNewPassword(event){

    event.preventDefault();
    let params = new URLSearchParams(document.location.search.substring(1));
    let userId = Number(params.get("id"));
    let token = params.get("token");

    localStorage.clear();
    localStorage.setItem('token', token);

    if($(".form-new-password").val() != $(".form-new-password-confirm").val()){
        swal("", "As senhas não conferem!", "error");
        return false;
    }

    $.ajax({
        method: 'put',
        data: {
            password: $(".form-new-password").val(),
            id: userId
        },
        url: 'http://localhost:4000/updatePassword/' + userId,
        success: function(data, status) {
            swal('', data.message, data.type)
            .then(() => {
                window.location.href = "http://localhost:8080";
            })
        },
        error: function(data, status) {
            if(data.status === 401)
                swal(
                    "",
                    "O tempo para recuperar a senha, expirou. Tente realizar o procedimento novamente!",
                    "error"
                );
        },
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader('Authorization','Bearer ' + token );
        }
    })
}

