
const searchInput = document.getElementById("searchInput");
const typeFilter = document.getElementById("typeFilter");
const cards = document.querySelectorAll(".cards");

function filterCards() {
    const searchValue = searchInput.value.toLowerCase();
    const selectedType = typeFilter.value;

    cards.forEach(card => {
        const name = card.getAttribute("data-name")?.toLowerCase() || "";
        const type = card.getAttribute("data-type") || "";

        const matchName = name.includes(searchValue);
        const matchType = selectedType === "all" || type === selectedType;

        if (matchName && matchType) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

searchInput.addEventListener("keyup", filterCards);
typeFilter.addEventListener("change", filterCards);


