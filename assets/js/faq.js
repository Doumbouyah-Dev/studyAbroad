const backToTopBtn = document.getElementById("backToTopBtn");
    window.onscroll = () => {
      backToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
    };
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }