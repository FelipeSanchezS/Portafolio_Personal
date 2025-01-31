const filterContainer = document.querySelector(".gallery__categories");
const galleryItems =  document.querySelectorAll(".project__card");

filterContainer.addEventListener("click", (event) => {
    if(event.target.classList.contains("filter-item")){
        filterContainer.querySelector(".active").classList.remove("active");
        event.target.classList.add("active")
    }
})