import Users from "./users.js";

let btnCreate = document.querySelector("#create");
let btnCancel = document.querySelector(".cancel")
// let login = document.querySelector("#login");
// let sign = document.querySelector("#sign")
// let btnSign = document.querySelector("#btnSign");
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
    $("#login").hide();
    $("#sign").show();
});

btnCancel.addEventListener("click",(e)=>{
    e.preventDefault();
    $("#login").show();
    $("#sign").hide();
});

// function to storage the user information
loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let info = null;
    const fd = new FormData(loginForm);
    for( let info of fd){
        // console.log(info);
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
    // it is going to check if the email and password that users is placing, is in jsonFile 
    let userExist = false;
    let passwordExist = false;
        for(let user of userList){
            // console.log(user.password);
            if ($("#email").val() == user.email){
                userExist = true;
            }
            if ($("#password").val() == user.password){
                passwordExist = true;
            
            }
        }
        if(userExist){
            console.log("yes");
            $(".warning").hide();$("#login").css({"height":"70vh"});
        } else {
            console.log("no");
            $(".warning").show();$("#login").css({"height":"72vh"});

        }
        if (passwordExist){
            console.log("yes");
            $(".warning").hide();$("#login").css({"height":"70vh"});
        } else {
            console.log("no");
            $(".warning").show();$("#login").css({"height":"72vh"});

        }
    });
;



// turn the color of the input to red if there is no info in it.
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
        $("#1-password").addClass("inputRed");
        $("#2-password").addClass("inputRed");
        $(".warning").show();
        $("#sign").css({"height":"72vh"});
    }else{
        $("#1-password").removeClass("inputRed");
        $("#2-password").removeClass("inputRed");
        $(".warning").hide();
        $("#sign").css({"height":"70vh"});
    }
    }
});


// get the json File 
const urlCostumer = './data/users.json'

jQuery.extend({
    getJsonData: function(urlFile){
        let result = null;
        $.ajax({
            docType: "json",
            async: false,
            type: "GET",
            url: urlFile,
            success: function(data){
                result = data;
            },
        });
        return result;
    }
});

let userList = $.getJsonData(urlCostumer);
// console.log(userList);