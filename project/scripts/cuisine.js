// ===============================
// Cuisine Data Array
// ===============================
const cuisines = [
  {
    dishName: "Jollof Rice",
    region: "West Nigeria",
    category: "Main",
    imageUrl: "images/jollof_rice.jpg"
  },
  {
    dishName: "Egusi Soup",
    region: "West Nigeria",
    category: "Soup",
    imageUrl: "images/egusi_soup.jpeg"
  },
  {
    dishName: "Ogbono Soup",
    region: "South Nigeria",
    category: "Soup",
    imageUrl: "images/ogbono_soup.jpg"
  },
  {
    dishName: "Suya",
    region: "North Nigeria",
    category: "Snack",
    imageUrl: "images/suya.jpg"
  },
  {
    dishName: "Akara",
    region: "West Nigeria",
    category: "Snack",
    imageUrl: "images/akara.jpg"
  },
  {
    dishName: "Puff-Puff",
    region: "West Nigeria",
    category: "Dessert",
    imageUrl: "images/puff_puff.jpg"
  },
  {
    dishName: "Fried Rice",
    region: "South Nigeria",
    category: "Main",
    imageUrl: "images/fried_rice.jpg"
  },
  {
    dishName: "Moi Moi",
    region: "West Nigeria",
    category: "Snack",
    imageUrl: "images/moi_moi.jpg"
  },
  {
    dishName: "Bitterleaf Soup",
    region: "South Nigeria",
    category: "Soup",
    imageUrl: "images/bitterleaf_soup.jpg"
  }
];

// ===============================
// DOM Reference
// ===============================
const cuisineCardsElement = document.querySelector("#cuisine-cards");
const filterButtons = document.querySelectorAll(".filter-buttons button");

// ===============================
// Display Function
// ===============================
function displayCuisines(cuisineList) {
  cuisineCardsElement.innerHTML = "";

  cuisineList.forEach((cuisine) => {
    const card = document.createElement("section");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${cuisine.imageUrl}" alt="${cuisine.dishName}" loading="lazy">
      <h3>${cuisine.dishName}</h3>
      <p><strong>Region:</strong> ${cuisine.region}</p>
      <p><strong>Category:</strong> ${cuisine.category}</p>
    `;

    cuisineCardsElement.appendChild(card);
  });
}

// ===============================
// Filter Buttons
// ===============================
filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    // Remove active class
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    if (filter === "all") {
      displayCuisines(cuisines);
    } else {
      const filtered = cuisines.filter(c => c.category === filter);
      displayCuisines(filtered);
    }
  });
});

// ===============================
// Initial Load
// ===============================
displayCuisines(cuisines);

// Last modified date
document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;
