



jQuery("#carousel2").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
    /*
   animateOut: 'fadeOut',
   animateIn: 'fadeIn',
   */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    // navText: ["<div class='nav-btn prev-slide'><i class='fa fa-arrow-left' aria-hidden='true'></i></div>", "<div class='nav-btn next-slide'><i class='fa fa-arrow-right' aria-hidden='true'></i></div>"],
    // nav: true,
    responsive: {
        0: {
            items: 1
        },

        400: {
            items: 2
        },

        600: {
            items: 3
        },

        1000: {
            items: 4
        },

        1200: {
            items: 5
        }
    }
});







jQuery("#carousel3").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800, 
    responsive: {
        0: {
            items: 1
        },

        400: {
            items: 1
        },

        600: {
            items: 1
        },

        1000: {
            items: 2
        },

        1200: {
            items: 2
        }
    }
});






var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
