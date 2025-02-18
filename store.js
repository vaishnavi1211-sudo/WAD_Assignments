$(document).ready(function(){
    $("#submit").click(function(){

        const user={
            name:$("#name").val(),
            email:$("#email").val(),
            pass:$("#password").val()
        }

        let users=JSON.parse(localStorage.getItem('users')) || [];

        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));

        alert("user Register Successfully");
        $("#myForm")[0].reset();

    })
})