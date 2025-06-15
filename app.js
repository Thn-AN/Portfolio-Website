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
