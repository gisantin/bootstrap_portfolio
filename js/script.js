let form = $(".form-contact");
console.log(form)

form.validate({
    errorElement: "span",
    rules: {
            name: "required",
            email:{
                required: true,
                email: true,
        },
            phone: "required",
            text: "required",
    },
    messages: {
        name:"Digite seu nome",
        email: {
            required: "Por favor, digite seu e-mail",
            email: "Por favor, digite um e-mail válido"
        },
        phone: "Por favor, digite seu telefone",
        text: "Por favor, digite uma mensagem",
    }

});