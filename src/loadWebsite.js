import createHome from './home';
import createNav from './nav';
import HomeImage from './images/home.jpg';

function initPage() {
    const mainDiv = document.createElement('div');
    const footer = document.createElement('footer');
    const image = new Image();
    const documentBody = document.querySelector('body');

    mainDiv.id = 'content';
    image.src = HomeImage;
    footer.innerHTML = '&#169; Image from wallpaperset.com';

    mainDiv.appendChild(image);
    mainDiv.appendChild(createNav());
    mainDiv.appendChild(createHome());
    mainDiv.appendChild(footer);
    documentBody.appendChild(mainDiv);
}

export default initPage;