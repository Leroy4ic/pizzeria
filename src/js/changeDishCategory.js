let dishCategoryIndex = 1;
showCategory(dishCategoryIndex);

// Next/previous controls
function plusSlides(n) {
    showCategory(dishCategoryIndex += n);
}

// Thumbnail image controls
function currentCategory(n) {
    showCategory(dishCategoryIndex = n);
}

function showCategory(n) {
    let i;
    let dishCategory = document.querySelectorAll(".dish-category");
    let dishBtns = document.querySelectorAll(".dish-btns");
    if (n > dishCategory.length) {dishCategoryIndex = 1}
    if (n < 1) {dishCategoryIndex = dishCategory.length}
    for (i = 0; i < dishCategory.length; i++) {
        dishCategory[i].style.display = "none";
    }
    for (i = 0; i < dishBtns.length; i++) {
        dishBtns[i].className = dishBtns[i].className.replace(" yellowBtn", "");
    }
    dishCategory[dishCategoryIndex-1].style.display = "block";
    dishBtns[dishCategoryIndex-1].classList.add("yellowBtn");
}

document.querySelector(".dish-1").addEventListener("click", () => currentCategory(1));
document.querySelector(".dish-2").addEventListener("click", () => currentCategory(2));
document.querySelector(".dish-3").addEventListener("click", () => currentCategory(3));
document.querySelector(".dish-4").addEventListener("click", () => currentCategory(4));