import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

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


    return [ homeBtn, menuBtn, contactBtn ];
}

function addButtonFunctionality() {
    const buttons = prepareButtons();


    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            callFunction: if (e.target.classList.contains('active')) {
                break callFunction;
            }
            else { 
                buttons.forEach((btn) => {
                    if (btn.classList.contains('active')) {
                        btn.classList.remove('active');
                    }
                });
                if (button === buttons[0]) {
                    createHome();
                }
                else if (button === buttons[1]) {
                    createMenu();
                } else {
                    createContact();
                }
                e.target.classList.add('active');
            }
        });
        
    });

    return buttons;
}

export default addButtonFunctionality;