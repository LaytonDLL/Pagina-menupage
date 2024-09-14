function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

function closeMenu() {
    document.getElementById("sidebar").style.width = "0";
}

fetch('sobre')
            .then(response => response.text())
            .then(data => {
                document.getElementById('menu-container').innerHTML = data;
            });
