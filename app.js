// Fix toggleSubMenu arrow interaction and rotate
const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
    sidebar.classList.toggle("close");
    toggleButton.classList.toggle("rotate");
    closeAllSubmenus();
}

function toggleSubMenu(button) {
    const submenu = button.closest("li").querySelector(".sub-menu");
    if (!submenu.classList.contains("show")) {
        closeAllSubmenus();
    }
    submenu.classList.toggle("show");
    button.classList.toggle("rotate");

    if (sidebar.classList.contains("close")) {
        sidebar.classList.remove("close");
        toggleButton.classList.remove("rotate");
    }
}

function closeAllSubmenus() {
    Array.from(sidebar.getElementsByClassName("sub-menu")).forEach((ul) => {
        ul.classList.remove("show");
    });

    Array.from(document.getElementsByClassName("arrow-toggle")).forEach((btn) => {
        btn.classList.remove("rotate");
    });
} 
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function copyEmail() {
    const email = 'tnuualuu@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const emailSpan = document.querySelector('.copy-email');
        const originalText = emailSpan.textContent;
        emailSpan.textContent = 'Copied!';
        setTimeout(() => {
            emailSpan.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });
}

const themeSwitch = document.getElementById("theme-switch");

function enableDarkMode() {
  document.documentElement.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
}

function disableDarkMode() {
  document.documentElement.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
}

themeSwitch.addEventListener("click", () => {
  const isDark = document.documentElement.classList.contains("darkmode");
  isDark ? disableDarkMode() : enableDarkMode();
});
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const projectsItem = document.getElementById('projects-item');
    
    if (currentPage.startsWith('Project') || currentPage === 'projects.html') {
        projectsItem.classList.add('active');
    } else {
        projectsItem.classList.remove('active');
    }
});

// profile page
document.addEventListener("DOMContentLoaded", function () {
  const interactiveEls = document.querySelectorAll(".interactive");
  const contentBox = document.getElementById("dynamic-content");
  const contentMap = {
    map: `
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10248.202174947068!2d145.13029125921045!3d-37.91029957505065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66acbf64673b9%3A0xfaf9b169a587104!2sMonash%20University%20Clayton%20Campus!5e1!3m2!1sen!2sau!4v1750090366215!5m2!1sen!2sau" 
        width="100%" 
        height="500em" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    `,
    cs: `
      <h3>Computer Science (Advanced)</h3>
      <ul>
        <li>Python, HTML, CSS, JavaScript, SQL</li>
        <li>Data Structures & Algorithms</li>
        <li>AI, Cybersecurity Interests</li>
      </ul>
    `,
    commerce: `
      <h3>Commerce (Business Analytics)</h3>
      <ul>
        <li>Excel, MYOB, </li>
        <li>Marketing Strategy Simulations</li>
        <li>Business Intelligence Tools</li>
      </ul>
    `,
    tetris: `
      <h3>Tetris</h3>
      <ul>
        <li>Former top 38 World, Aug 2020 </li>
        <li>Former No. 2 Australia, Aug 2020 </li>
        <li>I'm washed </li>
        <img src="images/tetrisRanking">
      </ul>
    `,
    aboutMe: `
      <h3>About Me</h3>
      <ul>
        <li>
          Passionate about 
          <span style="color: var(--accent-clr)">Music, Coding & Games</span>
        </li>
      </ul>

    `
  };

  interactiveEls.forEach(el => {
    el.addEventListener("click", () => {
        const type = el.getAttribute("data-type");
        contentBox.innerHTML = contentMap[type] || "<p>Content not found.</p>";
        contentBox.style.animation = "none";
        void contentBox.offsetWidth;
        contentBox.style.animation = null;
    });
  });
});
