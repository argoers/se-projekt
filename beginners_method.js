//loob nupu edasi liikumiseks teistele meetodidele
let btn2 = document.createElement("button");
btn2.innerHTML = "Tutvu ka keerulisemate meetoditega";
document.body.appendChild(btn2);

//vajutades liigub teiste meetodite lehele
btn2.onclick = function () {
    window.location.href ='file:meetodid.html';
}