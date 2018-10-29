function saveNewPassword(event){

    event.preventDefault();
    let params = new URLSearchParams(document.location.search.substring(1));
    let userId = Number(params.get("id"));

    localStorage.clear();

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
                    "Ocorreu um erro ao tentar salvar a nova senha!",
                    "error"
                );
        }
    })
}

