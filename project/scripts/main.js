// Current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Last modified date
document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;


  // Togglable Vertical Tabs
  function openItem(evt, itemName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(itemName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Contact Page
const form = document.getElementById('contactForm');
    const thankYou = document.getElementById('thankYouMessage');

    form.addEventListener('submit', function(e) {
      e.preventDefault(); 

      // Show thank you card
      thankYou.style.display = 'block';

      // Reset form
      form.reset();
    });