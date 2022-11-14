  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      });
  }
  $(document).ready(function() {
      $("a.scrollLink").click(function(event) {
          event.preventDefault();
          $("html, body").animate({
              scrollTop: $($(this).attr("href")).offset().top
            }, 1500);
        });
    })