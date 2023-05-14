import createHome from './home';

function prepareButtons() {
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.innerHTML = 'Home';
    menuBtn.innerHTML = 'Menu';
    contactBtn.innerHTML = 'Contact';

    homeBtn.classList.add('btn-nav');
    menuBtn.classList.add('btn-nav');
    contactBtn.classList.add('btn-nav');


    return { homeBtn, menuBtn, contactBtn };
}

function addButtonFunctionality() {
    const buttons = prepareButtons();
    const navButtons = document.querySelectorAll('btn-nav');

    buttons.homeBtn.addEventListener('click', (e) => {
        navButtons.forEach((button) => {
            if (button.classList.contains('active')) {
                button.classList.remove('active');
            }
        });
        e.target.classList.add('active');
        createHome();
    });

    return [buttons.homeBtn, buttons.menuBtn, buttons.contactBtn];
}

export default addButtonFunctionality;