function createHome() {
    const homeDiv = document.createElement('div');
    homeDiv.id = 'home';
    homeDiv.innerHTML = 'Content coming soon';
    console.log('test');
    if (!document.getElementById('home')) {
        return homeDiv;
    } else {
        const div = document.getElementById('home');
        div.removeChild(div.firstChild);
        div.innerHTML = 'Content coming soon';
    }
}

export default createHome;