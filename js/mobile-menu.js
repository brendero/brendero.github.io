
var menu = document.getElementById('menu-toggle'),
toggled = false;

var mobileMenu = document.querySelector(".mobile-menu");

  menu.addEventListener( 'click', function() {
    if ( !toggled ) {
      this.className += " toggled";
      mobileMenu.style.display = "block";
      toggled = true;
    } else {
      mobileMenu.style.display = "none";  
      this.className = this.className.replace(/\b\stoggled\b/, "");
      toggled = false;
    }
  }, false );
