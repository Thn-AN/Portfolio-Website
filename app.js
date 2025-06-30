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
        <li>
        <span style="color: var(--accent-clr)">Python,</span> HTML, CSS, JavaScript, SQL</li>
        <li>Data Structures & <span style="color: var(--accent-clr)">Algorithms</span></li>
        <li>Certificate III in <span style="color: var(--accent-clr)">Information, Communications Technology </span> </li>
      </ul>
    `,

    commerce: `
      <h3>Commerce (Business Analytics)</h3>
      <ul>
        <li>
        <span style="color: var(--accent-clr)">Excel,</span> MYOB </li>
        <li><span style="color: var(--accent-clr)">Accounting</span> for Sustainability and Financials</li>
        <li>Analytics in <span style="color: var(--accent-clr)">Business and Data</span></li>
      </ul>
    `,

    tetris: `
      <h3>Tetris</h3>
      <ul>
        <li>Former <span style="color: var(--accent-clr)">Top 38</span> Global</li>
        <li>Former <span style="color: var(--accent-clr)">No 2</span> Australia</li>
        <li>I'm washed <span style="color: var(--accent-clr)">(Not sped up btw)</span></li>
      </ul>
      <img src="images/tetrisRanking.jpg" alt="Tetris Ranking" class="tetris-image" />
    `,

    aboutMe: `
      <h3>About Me</h3>
      <ul>
        <li>
          Passionate about 
          <span style="color: var(--accent-clr)">Classical</span>
          <span style="color: var(--trippleHover-clr); font-weight: bold">
            Music
            <svg class="shake-icon" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="var(--trippleHover-clr)"><path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z"/></svg>, 
          </span> 
          <span style="color: var(--accent-clr)">Coding random useless</span>
          <span style="color: var(--trippleHover-clr); font-weight: bold"> macros
            <svg class="shake-icon" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="var(--trippleHover-clr)"><path d="m384-336 56-57-87-87 87-87-56-57-144 144 144 144Zm192 0 144-144-144-144-56 57 87 87-87 87 56 57ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
          </span>
          &
          <span style="color: var(--accent-clr)"> Video </span>
          <span style="color: var(--trippleHover-clr); font-weight: bold"> 
            games
            <svg class="shake-icon" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="var(--trippleHover-clr)"><path d="M182-200q-51 0-79-35.5T82-322l42-300q9-60 53.5-99T282-760h396q60 0 104.5 39t53.5 99l42 300q7 51-21 86.5T778-200q-21 0-39-7.5T706-230l-90-90H344l-90 90q-15 15-33 22.5t-39 7.5Zm16-86 114-114h336l114 114q2 2 16 6 11 0 17.5-6.5T800-304l-44-308q-4-29-26-48.5T678-680H282q-30 0-52 19.5T204-612l-44 308q-2 11 4.5 17.5T182-280q2 0 16-6Zm482-154q17 0 28.5-11.5T720-480q0-17-11.5-28.5T680-520q-17 0-28.5 11.5T640-480q0 17 11.5 28.5T680-440Zm-80-120q17 0 28.5-11.5T640-600q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600q0 17 11.5 28.5T600-560ZM310-440h60v-70h70v-60h-70v-70h-60v70h-70v60h70v70Zm170-40Z"/></svg>
          </span>
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

document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.getAttribute('data-tab');

    // Update buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    // Update tab content
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.remove('active');
    });
    document.getElementById(tab).classList.add('active');
  });
});