import images from './gallery-items.js'


const markup = images.map(({ preview, originl, description }) => {
    return
     `<li class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img class="gallery__image"src="${img.preview}" data-source="${img.original} alt="${img.description}"/>
  </a></li>`;
}
)

h


