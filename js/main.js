function BurgerToggle() {
    /*Désactiver le overflow*/
    var body = document.querySelector("body");
    body.classList.toggle("no-scroll");

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
//menu map toggle
function MenuMapToggle() {

    var agency = document.querySelectorAll(".agency");
    agency.forEach((el) => el.classList.toggle("showDesktop"));
}

// Initialize and add the map
function initMap() {
    const map_icon = {
        url: "../images/accueil/map_icon.svg",
        scaledSize: new google.maps.Size(40, 40)
    }
    const agencies = [{ lat: -26.194810, lng: 28.279670 }, { lat: -29.761356, lng: 31.026772 }, { lat: -33.878100, lng: 18.698930 }]
    // const Johannesburg = { lat: -26.194810, lng: 28.279670 }
    // const Durban = { lat: -29.761356, lng: 31.026772 }
    // const CapeTown = { lat: -33.878100, lng: 18.698930 }
    const SA = { lat: -30.559483, lng: 22.937506 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: SA,
        mapTypeControl: false,
        streetViewControl: false
    });
    agencies.forEach((agency) => new google.maps.Marker({
        position: agency,
        map: map,
        icon: map_icon
    }))
}

window.initMap = initMap;

