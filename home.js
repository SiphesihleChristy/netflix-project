

let userEmailOrPhoneNo;

let userPassword;


document.getElementById("sign-in-btn").onclick = function(){
    userEmailOrPhoneNo = document.getElementById("user-email").value;
    console.log(userEmailOrPhoneNo);
    userPassword = document.getElementById("user-password").value;
    console.log(userPassword);
}

let moreInfo;

document.getElementById("learn-more").onclick = function(){
    moreInfo = document.getElementById("learn-more-text").textContent = 'The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).'
}