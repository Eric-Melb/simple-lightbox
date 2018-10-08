# simple-lightbox
Light weight light box, 30 lines of vanilla JS and 30 lines of CSS suiting a lot of simple use cases

**How to use**
Drop simple-lightbox.js and simple-lightbox.css into your project, edit the ```simpleLightboxClass``` variable at the top of the js file to target whatever image class you want to be lightboxed and you're good to go.

It is very simple, edit as you see fit and use freely. 

`index.html` and `style.css` are just for the simple demo of the simple lightbox, and can be safely ignored

**Limitations**
Simple as this is, limitations abound. Worth talking about, however, is the following one:

As written Simple Lightbox expects that the image you want in the lightbox has the same src as the image the user is clicking on. This is for when you've scalled down a high res image in the browser but already loaded it. This allows the lightbox to load very quickly, but it may cause the page to take some time to load initally. The lightbox's src is set in the spawnSimpleLightbox() function with the line 
 
 ```simpleLightboxImage.src = this.src;```JavaScript

 You can edit this to accommodate loading a different image.


**Misc:**
 Attribution of CERN image used in demo is to Domenico Salvagnin, https://www.flickr.com/photos/61111353@N00/3559233039
 Other images do not require attribution
