// leiame leheküljelt sidebar elemendi
let sb = document.getElementById('sidebar');
// nimekiri kõikidest lehekülgedest, mis sidebar'i peal on
// esimene on lehekülje faili nimi, teine on pealkiri
let pages = [
    ["index", "Avaleht"],
    ["ajalugu", "Ajalugu"],
    ["beginners_method", "Algaja meetod"],
    ["meetodid", "Lahendamismeetodid"]
];
// sidebar html jaoks muutuja
let out = '';
// iga lehekülje kohta
for(let [link,name] of pages) {
    // vormistame lingi
    let line = `<a href="${link}.html">${name}</a></li>`;
    // kui oleme juba praegu sellel leheküljel
    if(current_page == link) {
        // siis paneme lingi asemel boldis pealkirja
        line = `<b>${name}</b>`;
    }
    out += `<li>${line}</li>`;
}
// kirjutame sidebar'i html'i üle
sb.innerHTML = `<ul>${out}</ul>`;
