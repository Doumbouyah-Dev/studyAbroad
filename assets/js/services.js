
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.onscroll = () => {
    backToTopBtn.style.display = (document.documentElement.scrollTop > 200) ? "block" : "none";
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

