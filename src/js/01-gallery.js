// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector(".gallery");
const render = galleryItems
  .map(item => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
    `)
    .join("");
console.log(render);
gallery.insertAdjacentHTML("afterbegin", render);
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});
console.log(galleryItems);