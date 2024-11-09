function removeRow() {
    this.parentNode.parentNode.remove();
}

const links = document.querySelectorAll('.remover');

for (let link of links) {
    link.addEventListener('click', removeRow);
}