document.addEventListener("DOMContentLoaded", function() {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const testimonials = document.querySelectorAll(".customer");

  let currentIndex = 0;

  // Function to show the current testimonial
  const showTestimonial = () => {
    testimonials.forEach((testimonial, index) => {
      if (index === currentIndex) {
        testimonial.classList.add("unhide");
      } else {
        testimonial.classList.remove("unhide");
      }
    });
  };

  // Previous button functionality
  prevButton.addEventListener("click", function() {
    if (currentIndex > 0) {
      currentIndex--;
      showTestimonial();
    }
  });

  // Next button functionality
  nextButton.addEventListener("click", function() {
    if (currentIndex < testimonials.length - 1) {
      currentIndex++;
      showTestimonial();
    }
  });
});