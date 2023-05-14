// TODO
function createContact() {
    const mainDiv = document.getElementById('home');
    mainDiv.removeChild(mainDiv.firstChild);
    mainDiv.innerHTML = 'Contact coming soon';
}

export default createContact;