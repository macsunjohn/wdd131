// =====================================
// Nigerian Presidents Data (1960–Date)
// =====================================
const presidents = [
  {
    presidentName: "Abubakar Tafawa Balewa",
    title: "Prime Minister",
    type: "civilian",
    status: "deceased",
    ruled: "1960–1966",
    imageUrl: "images/balewa.jpg"
  },
  {
    presidentName: "Nnamdi Azikiwe",
    title: "President",
    type: "civilian",
    status: "deceased",
    ruled: "1963–1966",
    imageUrl: "images/azikiwe.jpeg"
  },
  {
    presidentName: "Johnson Aguiyi-Ironsi",
    title: "Military Head of State",
    type: "military",
    status: "deceased",
    ruled: "Jan 1966–July 1966",
    imageUrl: "images/ironsi.jpg"
  },
  {
    presidentName: "Yakubu Gowon",
    title: "Military Head of State",
    type: "military",
    status: "alive",
    ruled: "1966–1975",
    imageUrl: "images/gowon.jpg"
  },
  {
    presidentName: "Murtala Muhammed",
    title: "Military Head of State",
    type: "military",
    status: "deceased",
    ruled: "1975–1976",
    imageUrl: "images/muhammed.jpg"
  },
  {
    presidentName: "Olusegun Obasanjo",
    title: "Military Head of State",
    type: "military",
    status: "alive",
    ruled: "1976–1979",
    imageUrl: "images/obasanjo.jpg"
  },
  {
    presidentName: "Shehu Shagari",
    title: "President",
    type: "civilian",
    status: "deceased",
    ruled: "1979–1983",
    imageUrl: "images/shagari.jpg"
  },
  {
    presidentName: "Muhammadu Buhari",
    title: "Military Head of State",
    type: "military",
    status: "deceased",
    ruled: "1983–1985",
    imageUrl: "images/buhari.jpg"
  },
  {
    presidentName: "Ibrahim Babangida",
    title: "Military Head of State",
    type: "military",
    status: "alive",
    ruled: "1985–1993",
    imageUrl: "images/babangida.jpg"
  },
  {
    presidentName: "Ernest Shonekan",
    title: "Interim National Government",
    type: "civilian",
    status: "deceased",
    ruled: "Aug 1993–Nov 1993",
    imageUrl: "images/shonekan.jpg"
  },
  {
    presidentName: "Sani Abacha",
    title: "Military Head of State",
    type: "military",
    status: "deceased",
    ruled: "1993–1998",
    imageUrl: "images/abacha.jpg"
  },
  {
    presidentName: "Abdulsalami Abubakar",
    title: "Military Head of State",
    type: "military",
    status: "alive",
    ruled: "1998–1999",
    imageUrl: "images/abubakar.jpg"
  },
  {
    presidentName: "Olusegun Obasanjo",
    title: "President",
    type: "civilian",
    status: "alive",
    ruled: "1999–2007",
    imageUrl: "images/obasanjo2.jpg"
  },
  {
    presidentName: "Umaru Musa Yar'Adua",
    title: "President",
    type: "civilian",
    status: "deceased",
    ruled: "2007–2010",
    imageUrl: "images/yaradua.jpg"
  },
  {
    presidentName: "Goodluck Jonathan",
    title: "President",
    type: "civilian",
    status: "alive",
    ruled: "2010–2015",
    imageUrl: "images/goodluck.jpg"
  },
  {
    presidentName: "Muhammadu Buhari",
    title: "President",
    type: "civilian",
    status: "deceased",
    ruled: "2015–2023",
    imageUrl: "images/buhari2.jpg"
  },
  {
    presidentName: "Bola Ahmed Tinubu",
    title: "President",
    type: "civilian",
    status: "alive",
    ruled: "May 29, 2023–Present",
    imageUrl: "images/tinubu.jpg"
  }
];

// ===============================
// DOM Reference
// ===============================
const presidentsElement = document.querySelector("#presidents");

// ===============================
// Display Function
// ===============================
function displayPresidents(presidentList) {
  presidentsElement.innerHTML = "";

  presidentList.forEach((president) => {
    const card = document.createElement("section");
    card.classList.add("card");

    const name = document.createElement("h3");
    const title = document.createElement("p");
    const years = document.createElement("p");
    const image = document.createElement("img");

    name.textContent = president.presidentName;
    title.textContent = `Title: ${president.title}`;
    years.textContent = `Years in Office: ${president.ruled}`;

    image.src = president.imageUrl;
    image.alt = president.presidentName;
    image.loading = "lazy";

    card.appendChild(name);
    card.appendChild(title);
    card.appendChild(years);
    card.appendChild(image);

    presidentsElement.appendChild(card);
  });
}

// ===============================
// Initial Load
// ===============================
displayPresidents(presidents);

// ===============================
// Footer Date
// ===============================
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// ===============================
// Hamburger Menu
// ===============================
const hamburgerBtn = document.querySelector("#hamburger");
const navMenu = document.querySelector("nav");

if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    hamburgerBtn.textContent =
      hamburgerBtn.textContent === "☰" ? "✖" : "☰";
  });
}

// ===============================
// Active Navigation
// ===============================
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

const homeLink = document.querySelector("#home");
if (homeLink) homeLink.classList.add("active");



// ================================
// Filtering Code
// ===============================

// Show All
document.querySelector("#all").addEventListener("click", (e) => {
  e.preventDefault();
  displayPresidents(presidents);
});

// Military
document.querySelector("#military").addEventListener("click", (e) => {
  e.preventDefault();
  displayPresidents(
    presidents.filter(p => p.type === "military")
  );
});

// Civilian
document.querySelector("#civilian").addEventListener("click", (e) => {
  e.preventDefault();
  displayPresidents(
    presidents.filter(p => p.type === "civilian")
  );
});

// Alive
document.querySelector("#alive").addEventListener("click", (e) => {
  e.preventDefault();
  displayPresidents(
    presidents.filter(p => p.status === "alive")
  );
});

// Deceased
document.querySelector("#deceased").addEventListener("click", (e) => {
  e.preventDefault();
  displayPresidents(
    presidents.filter(p => p.status === "deceased")
  );
});
