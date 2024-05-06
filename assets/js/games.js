const imageContainer = document.getElementById('image-container');

fetch('./assets/json/g.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(image => {
            const imageElement = document.createElement('a');
            imageElement.href = image.src;

            const img = document.createElement('img');
            img.src = image.logo;
            img.alt = image.title || 'ERROR';
            img.style.width = "150px";
            img.style.height = "150px";
            img.className = "classy";

            imageElement.addEventListener("click", function (event) {
                event.preventDefault();
                if (img.say == null {
                window.location.href = image.src;
                     } else {
                    alert('This game is currently broken, I think a spider did it..')
                }
            });

            imageElement.appendChild(img);
            imageContainer.appendChild(imageElement);
        });

        updateGridLayout();
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });

const searchBox = document.getElementById("search-box");
const imagesContainer = document.getElementById("image-container");

searchBox.addEventListener("keyup", function() {
    const searchTerm = this.value.toLowerCase();
    const images = imagesContainer.querySelectorAll("img");

    images.forEach(function(image) {
        const altText = image.alt.toLowerCase();
        const parentLink = image.parentElement;

        if (altText.includes(searchTerm)) {
            parentLink.style.display = "block";
        } else {
            parentLink.style.display = "none";
        }
    });

    updateGridLayout();
});

function updateGridLayout() {
    const imageElements = Array.from(document.querySelectorAll("#image-container > a"));
    const visibleImageElements = imageElements.filter(imageElement => imageElement.style.display !== "none");
    const containerWidth = imageContainer.clientWidth;
    const imageWidth = 150;
    const numColumns = Math.floor(containerWidth / imageWidth);

    imageContainer.style.gridTemplateColumns = `repeat(auto-fill, minmax(${imageWidth}px, 1fr))`;
}
