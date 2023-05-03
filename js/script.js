let btnCreate = document.querySelector("#create");
let login = document.querySelector("#login");
let sign = document.querySelector("#sign")
let btnSign = document.querySelector("#btnSign");
let loginForm = document.querySelector("#loginForm")
let password = document.querySelector("#password");
let email = document.querySelector("#email");


// console.log(loginForm);

// Function to show and hide the password
$('.show').click((e)=>{
    e.preventDefault();
    if($(e.target).text()=="Show Password"){
        $(password).attr("type","text");
        $(e.target).text("Hide Password");
    }else{
        $(password).attr("type","password");
        $(e.target).text("Show Password");
    }
});


// functions to show and hide the sections when clicked the button
btnCreate.addEventListener("click", (e)=>{
    e.preventDefault();
    $(login).hide();
    $(sign).show();
});

btnSign.addEventListener("click",(e)=>{
    e.preventDefault();
    $(login).show();
    $(sign).hide()
});

// function to storage the user information
loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let info = null;
    const fd = new FormData(loginForm);
    for(info of fd){
        console.log(info);
    };
    let json = JSON.stringify(info)
    localStorage.setItem('#loginForm', json);

    let passwordInfo = document.querySelector("#password").value;;
    let emailInfo = document.querySelector("#email").value;

    if (emailInfo == "") {
        email.classList.add("inputRed");
    } else {
        email.classList.remove("inputRed");
    }

    if (passwordInfo == "") {
        password.classList.add("inputRed");
    } else {
        password.classList.remove("inputRed");
    }
});
