const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const app = new App();
app.init().then(app.run);

const carSearch = document.querySelector(".car-search");
const filterBackdrop = document.getElementById("filter-backdrop");

carSearch.addEventListener("click", () => {
    filterBackdrop.classList.add("backdrop");
});

filterBackdrop.addEventListener("click", () => {
    filterBackdrop.removeAttribute("class");
});