import addButtonFunctionality from "./buttons";

function createNav() {
    const navDiv = document.createElement('div');
    const btnDiv = document.createElement('div');
    const paragraph = document.createElement('p');
    const buttons = addButtonFunctionality();

    navDiv.id = 'nav';
    btnDiv.id = 'buttons';

    paragraph.innerHTML = 'Restaurant Page';
    navDiv.appendChild(paragraph);

    buttons.forEach((button) => {
        btnDiv.appendChild(button);
    });

    navDiv.appendChild(btnDiv);

    return navDiv;
}

export default createNav;