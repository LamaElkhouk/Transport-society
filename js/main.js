function BurgerToggle() {
    /*Désactiver le overflow*/
    var body = document.querySelector("body");
    body.classList.toggle("no-overflow");
    
    /*changer la hauteur du header*/
    var header = document.querySelector("header");
    header.classList.toggle("fullHeight");

    /* changer le symbole du menu burger en croix*/
    var element = document.getElementById("burger-inner");
    element.classList.toggle("burger-inner-open");

    /*menu-burger, afficher le menu lors du clique sur le l'icone burger*/
    var menu = document.querySelectorAll(".element-menu");
    menu.forEach((el) => el.classList.toggle("showDesktop"));
}

