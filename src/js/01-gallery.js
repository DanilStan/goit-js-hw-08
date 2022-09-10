import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const allColection = document.querySelector('.gallery');
const createImagesColectionToHtml = createImagesColection(galleryItems);

allColection.insertAdjacentHTML('beforeend', createImagesColectionToHtml);
//  Формуємо HTML
function createImagesColection(values) {
  return values
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}"   />
              </a>`;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  /* options */
});

lightbox.captionPosition = 'bottom';
lightbox.captionDelay = 250;
