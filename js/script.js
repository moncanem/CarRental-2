let btnCreate = document.querySelector("#create");
let login = document.querySelector("#login");
let sign = document.querySelector("#sign")
let btnSign = document.querySelector("#btnSign");
let loginForm = document.querySelector("#loginForm")
let SignForm = document.querySelector("#signForm")
let password = document.querySelector("#password");
let email = document.querySelector("#email");



// Function to show and hide the password
$('.show').click((e)=>{
    e.preventDefault();
    if($(e.target).text()=="Show Password"){
        $("#password").attr("type","text");
        $("#1-password").attr("type","text");
        $("#2-password").attr("type","text");

        $(e.target).text("Hide Password");
    }else{
        $("#password").attr("type","password");
        $("#1-password").attr("type","password");
        $("#2-password").attr("type","password");
        $(e.target).text("Show Password");
    }
});


// functions to show and hide the sections when clicked the button
btnCreate.addEventListener("click", (e)=>{
    e.preventDefault();
    $(login).hide();
    $(sign).show();
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

    if (emailInfo == "" && passwordInfo == "") {
        email.classList.add("inputRed");
        password.classList.add("inputRed");
    } else {
        email.classList.remove("inputRed");
        password.classList.remove("inputRed");
    }
});

// for(let inpt of inputElements) {
    
// }   

SignForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    if($("#infoName").val() == "" && $("#infoEmail").val() == "" && $("#1-password").val() == "" && $("#2-password").val() == ""){
        $("#infoName").addClass("inputRed");
        $("#infoEmail").addClass("inputRed");
        $("#1-password").addClass("inputRed");
        $("#2-password").addClass("inputRed");
    }else{
        $("#infoName").removeClass("inputRed");
        $("#infoEmail").removeClass("inputRed");
        $("#1-password").removeClass("inputRed");
        $("#2-password").removeClass("inputRed");

    if($("#1-password").val() != $("#2-password").val()){
        console.log("no");
        $("#1-password").addClass("inputRed");
        $("#2-password").addClass("inputRed");
    }else{
        console.log("yes");
        $("#1-password").removeClass("inputRed");
        $("#2-password").removeClass("inputRed");

    }


        // btnSign.innerHTML="Continue";
        // $(login).show();
        // $(sign).hide();
        // btnSign.addEventListener("click",(e)=>{
        //     e.preventDefault();
        //     // $(login).show();
        //     // $(sign).hide();
        // });
    }
})
