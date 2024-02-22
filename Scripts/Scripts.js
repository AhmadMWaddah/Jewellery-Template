/* ----------- Load Document ------ */
window.addEventListener("load", function() {

    /* ----------- Variables ------ */
    let mainHeader = document.querySelector(".header__main");
    let modal = document.querySelector("#modal");
    let closeBtn = document.querySelector("#close");
    let mainNavBar = document.querySelector("#navbar-list");
    let navBarIcon = document.querySelector("#menu-bars");


    /* ----------- Open Mobile NavBar ------ */
    navBarIcon.addEventListener("click", () => {
        mainNavBar.classList.toggle("active");
    });


    /* ----------- Main Header Scroll Fixing ------ */
    window.addEventListener("scroll", () => {
        mainNavBar.classList.remove("active");
        if (!isModalOpen()) {
            if (window.scrollY > 120) {
                mainHeader.classList.add("active");
            } else {
                mainHeader.classList.remove("active");
            };
        };
    });


    /* ----------- Show Modal ------ */
    function showModal () {
        modal.style.display = "block";
        mainHeader.classList.remove("active");
    };
    setTimeout(() => { showModal(); }, 1000);
    
    closeBtn.addEventListener("click", () => {        
        modal.style.display = "none";
    });

    function isModalOpen() {
        return modal.style.display === "block";
    };

});