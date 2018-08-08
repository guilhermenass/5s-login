function verifyEmail(event) {
    event.preventDefault();
    let email = $(".form-email").val();

    if(email){
        $.ajax({
            method: 'get',
            data: {email: email},
            url: 'https://api-senai5s.herokuapp.com/verifyEmail',
            success(data){
                if(data)
                    swal("", data.msg, "success");
            },
            error(data){
                if(data.status === 404)
                    swal("", data.responseJSON.msg, "error");
            }
        })
    } else 
        swal("", "Preencha o campo e-mail!", "error");
}
