/* environment variables - set these as per your elements to lightbox & style */
const simpleLightboxClass = "article-image";
// if you change these also change the css to match
const simpleLightboxImageId = "simpleLightboxImage";
const simpleLightboxBackgroundId = "simpleLightboxBackground";

/* creates a modal image box that can be removed on click */
function spawnSimpleLightbox()
{
        let simpleLightboxImage = document.createElement("img");
        let simpleLightboxBackground = document.createElement("div");
        let body = document.getElementsByTagName("body")[0];
        let firstElement = body.children[0];
        
        // setup the image        
        simpleLightboxImage.src = this.src;
        simpleLightboxImage.id = simpleLightboxImageId;
        simpleLightboxImage.addEventListener("click", removeSimpleLightbox);

        // setup the background
        simpleLightboxBackground.id = simpleLightboxBackgroundId;
        simpleLightboxBackground.addEventListener("click", removeSimpleLightbox);
        simpleLightboxBackground.appendChild(simpleLightboxImage);

        // insert elements
        body.insertBefore(simpleLightboxBackground, firstElement);
}

/* removes modal elements created by spawnModal() */
function removeSimpleLightbox()
{
        document.getElementById(simpleLightboxBackgroundId).remove();
}


function init()
{
        // add event listener to images
        let images = document.getElementsByClassName(simpleLightboxClass);

        for (image of images)
        {
                image.addEventListener("click", spawnSimpleLightbox);
        }
}

window.onload = init;
