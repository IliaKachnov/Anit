const filterItems = document.querySelectorAll(".case__filter");

filterItems.forEach((item) => {
  item.addEventListener("click", () => {
    filterItems.forEach((filterItem) => {
      filterItem.classList.remove("active");
    });
    
    item.classList.add("active");
  });
});

