//loob nupu edasi liikumiseks algaja lahendamismeetodile
let btn = document.createElement("button");
btn.innerHTML = "Tutvu algaja lahendamismeetodiga";
document.body.appendChild(btn);

//vajutades liigub algaja lahendamismeetodi lehele
btn.onclick = function () {
    window.location.href ='file:beginners_method.html';
}

//loob nupu edasi liikumiseks teistele meetodidele
let btn2 = document.createElement("button");
btn2.innerHTML = "Tutvu ka keerulisemate meetoditega";
document.body.appendChild(btn2);

//vajutades liigub teiste meetodite lehele
btn2.onclick = function () {
    window.location.href ='file:meetodid.html';
}