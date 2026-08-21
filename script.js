// Product filtering and temporary cart feedback for the static demo.
const filterButtons = document.querySelectorAll("[data-filter]");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    document.querySelectorAll(".category-link").forEach((categoryButton) => {
      categoryButton.classList.toggle("active", categoryButton === button);
    });

    productCards.forEach((card) => {
      const matchesFilter = selectedFilter === "all" || card.dataset.category === selectedFilter;
      card.classList.toggle("is-hidden", !matchesFilter);
    });
  });
});

document.querySelectorAll(".cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    const originalText = button.textContent;
    button.textContent = "ADDED ✓";
    button.disabled = true;

    window.setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 1000);
  });
});
