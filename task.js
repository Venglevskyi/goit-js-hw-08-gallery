import galleryItems from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),
  modalWindow: document.querySelector(".js-lightbox"),
  fullScreenImage: document.querySelector(".lightbox__image"),
  closeBtn: document.querySelector(
    '.lightbox__button[data-action="close-lightbox"]'
  ),
  closeModalWindowWithBg: document.querySelector(".lightbox__content")
};
console.log(refs.closeBtn);

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

function openModalWindow({ target }) {
  event.preventDefault();
  refs.modalWindow.classList.add("is-open");
  if (target.tagName !== "IMG") return;
  refs.fullScreenImage.setAttribute("src", `${target.dataset.source}`);
  refs.fullScreenImage.setAttribute("alt", `${target.getAttribute("alt")}`);
}

function closeModalWindow() {
  refs.modalWindow.classList.remove("is-open");
  refs.fullScreenImage.setAttribute("src", "");
}

function closeOnClickWithBg({ target, currentTarget }) {
  if (target !== currentTarget) return;
  closeModalWindow();
}

function closeWithEscape({ key }) {
  if (key === "Escape") closeModalWindow();
}


function handleNextImage({ key }) {
  if (key === "ArrowLeft" || key === "ArrowRight") {
    const arrItems = Array.from(document.querySelectorAll(".gallery__image"));
    console.log(arrItems);
}
}
refs.gallery.addEventListener("click", openModalWindow);
refs.closeBtn.addEventListener("click", closeModalWindow);
refs.closeModalWindowWithBg.addEventListener("click", closeOnClickWithBg);
window.addEventListener("keydown", closeWithEscape);
window.addEventListener("keydown", handleNextImage);