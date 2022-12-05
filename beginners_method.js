//loob nupu tagasi liikumiseks pealehele
let btn = document.createElement("button");
btn.innerHTML = "Tutvu kuubiku ajalooga";
document.body.appendChild(btn);

//vajutades liigub eelmisele lehele
btn.onclick = function () {
    window.location.href ='file:ajalugu.html';
}