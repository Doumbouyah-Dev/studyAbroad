// JavaScript Placeholder
document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully.");
});

// This is the navaigation behavior for the Services page
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("#serviceTabs .nav-link");
  const serviceSections = document.querySelectorAll(".service-detail");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active from all nav links and service sections
      navLinks.forEach(l => l.classList.remove("active"));
      serviceSections.forEach(s => s.classList.remove("active"));

      // Activate clicked nav
      this.classList.add("active");

      // Show matching section
      const target = this.getAttribute("data-target");
      const targetSection = document.getElementById(target);
      if (targetSection) {
        targetSection.classList.add("active");
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
