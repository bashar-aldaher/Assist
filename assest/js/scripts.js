function showMobileNav() {
    var topNav = document.getElementById("topNav");
    if (topNav.className === "top-nav") {
        topNav.className += " nav-menu-mobile";
    } else {
        topNav.className = "top-nav";
    }
  }