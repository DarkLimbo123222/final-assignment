document.addEventListener("DOMContentLoaded", function() {
    const figures = document.querySelectorAll("figure");
  
    figures.forEach(figure => {
      figure.addEventListener("mouseover", function() {
        this.classList.add("highlight");
      });
  
      figure.addEventListener("mouseout", function() {
        this.classList.remove("highlight");
      });
  
      figure.addEventListener("focus", function() {
        this.classList.add("highlight");
      });
  
      figure.addEventListener("blur", function() {
        this.classList.remove("highlight");
      });
    });
  });
  