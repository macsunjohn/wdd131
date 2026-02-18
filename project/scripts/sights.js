// ===============================
// Sight & Sound Data Array
// ===============================
const sights = [
  {
    sightName: "Yankari National Park",
    location: "Bauchi State, Nigeria",
    category: "Park",
    imageUrl: "images/yankari.jpg"
  },
  {
    sightName: "Olumo Rock",
    location: "Abeokuta, Ogun State, Nigeria",
    category: "Rock",
    imageUrl: "images/olumo_rock.jpg"
  },
  {
    sightName: "Obudu Mountain Resort",
    location: "Cross River State, Nigeria",
    category: "Resort",
    imageUrl: "images/obudu_ranch.jpg"
  },
  {
    sightName: "Erin Ijesha Waterfall",
    location: "Osun State, Nigeria",
    category: "Waterfall",
    imageUrl: "images/erin_ijesha.jpg"
  },
  {
    sightName: "Zuma Rock",
    location: "Niger State, Nigeria",
    category: "Rock",
    imageUrl: "images/zuma_rock.jpg"
  },
  {
    sightName: "Nike Art Gallery",
    location: "Lagos State, Nigeria",
    category: "Cultural",
    imageUrl: "images/nike_gallery.jpg"
  },
  {
    sightName: "Lekki Conservation Centre",
    location: "Lagos State, Nigeria",
    category: "Park",
    imageUrl: "images/lekki_conservation.jpeg"
  },
  {
    sightName: "Kajuru Castle",
    location: "Kaduna State, Nigeria",
    category: "Resort",
    imageUrl: "images/kajuru_castle.jpg"
  },
  {
    sightName: "Aso Rock",
    location: "Abuja, FCT, Nigeria",
    category: "Rock",
    imageUrl: "images/aso_rock.jpg"
  },
  {
    sightName: "Idanre Hills",
    location: "Ondo State, Nigeria",
    category: "Rock",
    imageUrl: "images/idanre_hills.jpg"
  },
  {
    sightName: "Tarkwa Bay Beach",
    location: "Lagos State, Nigeria",
    category: "Beach",
    imageUrl: "images/tarkwa_bay.jpg"
  },
  {
    sightName: "Ogbunike Caves",
    location: "Anambra State, Nigeria",
    category: "Cultural",
    imageUrl: "images/ogbunike_caves.jpg"
  }
];

// ===============================
// DOM Reference
// ===============================
const sightsElement = document.querySelector("#sights");
const filterButtons = document.querySelectorAll(".filter-buttons button");


// ===============================
// Display Function
// ===============================
function displaySights(sightList) {
  sightsElement.innerHTML = "";

  sightList.forEach((sight) => {
    const card = document.createElement("section");

    card.innerHTML = `
      <img src="${sight.imageUrl}" alt="${sight.sightName}" loading="lazy">
      <h3>${sight.sightName}</h3>
      <p><strong>Location:</strong> ${sight.location}</p>
      <p><strong>Category:</strong> ${sight.category}</p>
    `;

    sightsElement.appendChild(card);
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
      displaySights(sights);
    } else {
      const filtered = sights.filter(s => s.category === filter);
      displaySights(filtered);
    }
  });
});


// ===============================
// Initial Load
// ===============================
displaySights(sights);

// Last modified date
document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;