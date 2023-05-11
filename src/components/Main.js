import { response } from 'express';
import $ from 'jquery';
import { useEffect } from 'react';
export function Main(){
// let btnCreate = document.querySelector("#create");
// let btnCancel = document.querySelector(".cancel")
// let loginForm = document.querySelector("#loginForm")
// let SignForm = document.querySelector("#signForm")
// let password = document.querySelector("#password");
// let email = document.querySelector("#email");


// // Function to show and hide the password
// $('.show').click((e)=>{
//     e.preventDefault();
//     if($(e.target).text()=="Show Password"){
//         $("#password").attr("type","text");
//         $("#1-password").attr("type","text");
//         $("#2-password").attr("type","text");
//         $(e.target).text("Hide Password");
//     }else{
//         $("#password").attr("type","password");
//         $("#1-password").attr("type","password");
//         $("#2-password").attr("type","password");
//         $(e.target).text("Show Password");
//     }
// });


// // functions to show and hide the sections when clicked the button
// $(btnCreate).click((e)=>{
//     e.preventDefault();
//     $("#login").hide();
//     $("#sign").show();
// });

// $(btnCancel).click((e) => {
//     e.preventDefault();
//     $("#login").show();
//     $("#sign").hide();
// });

// const [userList, setUsersList] = useState([]);
//     useEffect(function(){
//         fetch("http//localhost:9000/users-api")
//         .then((response)=>response.json())
//         .then(setUsersList)
//     },[]);

// // function to storage the user information
// $(loginForm).submit((e)=>{
//     e.preventDefault();
//     let info = null;
//     const fd = new FormData(loginForm);
//     for( let info of fd){
//         console.log(info);
//     };
//     let json = JSON.stringify(info);
//     localStorage.setItem('#loginForm', json);

//     let passwordInfo = document.querySelector("#password").value;;
//     let emailInfo = document.querySelector("#email").value;

//     if (emailInfo == "" && passwordInfo == "") {
//         email.classList.add("inputRed");
//         password.classList.add("inputRed");

//     } else {
//         email.classList.remove("inputRed");
//         password.classList.remove("inputRed");
//     }
    
//     // it is going to check if the email and password that users is placing, is in jsonFile;
//     // let userList = $.getJSON();

//     let userExist = false;
//     let passwordExist = false;
//         for(let user of userList){
//             // console.log(user.email);
//             if ($("#email").val() == user.email && $("#password").val() == user.password){
//                 userExist = true;
//                 passwordExist = true;
//             } 
//         }
//         if(userExist){
//             // console.log("yes");
//             $(".warning-2").hide();
//             $("#login").css({"height":"70vh"});
//         } else {
//             // console.log("no");
//             $(".warning-2").show();
//             $("#login").css({"height":"72vh"});

//         }
//         if (passwordExist){
//             // console.log("yes");
//             $(".warning-2").hide();
//             $("#login").css({"height":"70vh"});
//         } else {
//             // console.log("no");
//             $(".warning-2").show();
//             $("#login").css({"height":"72vh"});

//         }
//     });
// ;
// // $(email).on("input",function() {
// //     $(email).hide("inputRed"); 
// // });


// // turn the color of the input to red if there is no info in it.
// $(SignForm).submit((e)=>{
//     e.preventDefault();
//     if($("#infoName").val() === "" || $("#infoEmail").val() === "" || $("#1-password").val() === "" || $("#2-password").val() === ""){
//         $("#infoName").addClass("inputRed");
//         $("#infoEmail").addClass("inputRed");
//         $("#1-password").addClass("inputRed");
//         $("#2-password").addClass("inputRed");
//     }else{
//         $("#infoName").removeClass("inputRed");
//         $("#infoEmail").removeClass("inputRed");
//         $("#1-password").removeClass("inputRed");
//         $("#2-password").removeClass("inputRed");

//     if($("#1-password").val() != $("#2-password").val()){
//         $("#1-password").addClass("inputRed");
//         $("#2-password").addClass("inputRed");
//         $(".warning").show();
//         $("#sign").css({"height":"72vh"});
//     }else{
//         $("#1-password").removeClass("inputRed");
//         $("#2-password").removeClass("inputRed");
//         $(".warning").hide();
//         $("#sign").css({"height":"70vh"});
//     }
//     }
// });
    return(
        <body>
            <main>
                <section className="login" id="login">
                    <h1>Welcome Back</h1>
                    <form action="#" id="loginForm">
                        <input type="email" name="email" placeholder="Enter your Email" autofocus id="email"/>
                        <input type="password" name="password" id="password" placeholder="Enter your Password"/>
                        <small className="warning-2" style={{display: "none"}}>The credentials don't match our system</small>
                        <section>
                            <button className="show">Show Password</button>
                            <button type="submit" className="btnLogin">Login</button>
                        </section>
                    </form>
                    <section className="icons">
                        <h4>Or Login with</h4>
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-google"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </section>
                    <section>
                        <button className="create" id="create">Create Your Account</button>
                    </section>
                </section>

                <section className="sign" id="sign" style={{display: "none"}}>
                    <h1>Sign Up Now </h1>
                    <form action="#" method="get" id="signForm">
                        <input type="text" placeholder="Enter your Name" id="infoName"/>
                        <input type="email" placeholder="Email" id="infoEmail"/>
                        <input type="password" name="password" id="1-password" placeholder="Create your Password"/>
                        <input type="password" name="password" id="2-password" placeholder="Confirm your Password"/>
                        <small className="warning" style={{display: "none"}}>Passwords don't match</small>
                        <section>
                            <button className="show">Show Password</button>
                            <button className="cancel">Cancel</button>
                        </section>
                        <section>
                            <button className="log" id="btnSign" type="submit">Continue</button>
                        </section>
                    </form>
                </section>
            </main>
        </body>
    );

}