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