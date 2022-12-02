(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-read-open]"),
      closeModalBtn: document.querySelector("[data-read-close]"),
      modal: document.querySelector("[data-read]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();