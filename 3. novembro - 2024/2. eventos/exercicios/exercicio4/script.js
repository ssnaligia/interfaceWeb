function myListener(e) {
    const div = e.target.parentNode;

    const p = document.createElement("p");
    p.textContent = "Oi, mundo!";

    div.appendChild(p);
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', myListener);