let sb = document.getElementById('sidebar');
let pages = [
    ["ajalugu", "Ajalugu"],
    ["beginners_method", "Algaja meetod"],
    ["meetodid", "Lahendamismeetodid"]
];
let out = '';
for(let [link,name] of pages) {
    let line = `<a href="${link}.html">${name}</a></li>`;
    if(current_page == link) {
        line = `<b>${name}</b>`;
    }
    out += `<li>${line}</li>`;
}
sb.innerHTML = `<ul>${out}</ul>`;
