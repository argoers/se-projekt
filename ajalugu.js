//loob nupu edasi liikumiseks algaja lahendamismeetodile
let btn = document.createElement("button");
btn.innerHTML = "Tutvu algaja lahendamismeetodiga";
document.body.appendChild(btn);

//vajutades liigub jargmisele lehele
btn.onclick = function () {
    window.location.href ='file:beginners_method.html';
}