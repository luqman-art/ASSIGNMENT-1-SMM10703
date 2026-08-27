/* =========================================
   BULAN BINTANG E-PORTFOLIO JAVASCRIPT
========================================= */


/* =========================================
   SCROLL PROGRESS BAR
========================================= */

const progress = document.getElementById("progress");


window.addEventListener("scroll", () => {

  const scrollTop = window.scrollY;

  const documentHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const scrollPercentage =
    (scrollTop / documentHeight) * 100;

  progress.style.width =
    `${scrollPercentage}%`;

});



/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
  document.getElementById("menuToggle");

const nav =
  document.getElementById("nav");


menuToggle.addEventListener("click", () => {

  nav.classList.toggle("open");


  if (nav.classList.contains("open")) {

    menuToggle.textContent = "CLOSE";

  } else {

    menuToggle.textContent = "MENU";

  }

});



/* =========================================
   CLOSE MOBILE MENU AFTER CLICKING LINK
========================================= */

document
  .querySelectorAll("nav a")
  .forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("open");

      menuToggle.textContent = "MENU";

    });

  });



/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const observer = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);



/* Observe all reveal elements */

document
  .querySelectorAll(".reveal")
  .forEach(element => {

    observer.observe(element);

  });



/* =========================================
   SMOOTH INTERNAL NAVIGATION
========================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(anchor => {

    anchor.addEventListener("click", function(event) {

      const target =
        document.querySelector(
          this.getAttribute("href")
        );


      if (target) {

        event.preventDefault();


        target.scrollIntoView({

          behavior: "smooth",

          block: "start"

        });

      }

    });

  });



/* =========================================
   ACTIVE NAVIGATION SECTION
========================================= */

const sections =
  document.querySelectorAll("main section[id]");

const navigationLinks =
  document.querySelectorAll("nav a");


const sectionObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          navigationLinks.forEach(link => {

            link.classList.remove("active");

          });


          const activeLink =
            document.querySelector(
              `nav a[href="#${entry.target.id}"]`
            );


          if (activeLink) {

            activeLink.classList.add("active");

          }

        }

      });

    },

    {
      rootMargin: "-30% 0px -60% 0px"
    }

  );


sections.forEach(section => {

  sectionObserver.observe(section);

});