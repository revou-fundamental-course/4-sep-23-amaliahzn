// VALIDATE NAME
function replaceName() {
    let name = prompt("Please enter your name", "");
    document.getElementById("welcome-name").innerHTML = name;
}

replaceName();

//AUTOSLIDE
var slideIndex =1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imgList =document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    //console.log(slideIndex);

    for(i=0; i < imgList.length ; i++) {
        imgList[i].style.display ='none';
    }//fungsi foor loop untuk pengulangan 

    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1)
}, 2000);


//VALIDATE FORM
function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak Boleh Ada yang Kosong!");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);
    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}