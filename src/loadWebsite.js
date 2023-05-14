import createHome from './home';
import createNav from './nav';
import HomeImage from './images/home.jpg';

function initPage() {
    const mainDiv = document.createElement('div');
    const image = new Image();
    const documentBody = document.body;

    mainDiv.id = 'content';
    image.src = HomeImage;
    mainDiv.style.background = image;

    mainDiv.appendChild(createHome());
    mainDiv.appendChild(createNav());
    documentBody.appendChild(mainDiv);
}

export default initPage;