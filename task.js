import galleryItems from "./gallery-items.js";
console.log(galleryItems[0].original);

const refs = {
  gallery: document.querySelector(".js-gallery"),
  modalWindow: document.querySelector(".js-lightbox"),
  image: document.querySelector(".lightbox__image")
};
console.log(refs.image);

const creatGalleryItems = galleryItems
  .map(({ preview, description, original }) => {
    const creatGalleryMarkup = `<li class="gallery__item">
    <a class = "gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source= "${original}" alt="${description}">
      <span class="gallery__icon">
      <i class="material-icons">zoom_out_map</i>
      </span>
    </a>
    </li>`;
    return creatGalleryMarkup;
  })
  .join(" ");
refs.gallery.insertAdjacentHTML("afterbegin", creatGalleryItems);

function openModalWindow({target}) {
  refs.modalWindow.classList.add("is-open");
  if (target.tagName !== "IMG") return;
}

refs.gallery.addEventListener("click", openModalWindow);
