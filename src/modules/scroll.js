/* change background header */
export function changeBgHeader() {
  const header = document.getElementById("header");
  let scrollDistance = 500;

  if (document.documentElement.scrollTop > scrollDistance) {
    header.classList.add("bg");
  } else {
    header.classList.remove("bg");
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY > scrollDistance) {
      header.classList.add('bg');
    } else {
      header.classList.remove('bg');
    }
  });
}

/* плавный скролл для ссылок меню */
export function scrollLink() {
  document.querySelectorAll('.js-scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
        top: elementPosition,
        behavior: 'smooth'
      });
    });
  });

}

/* плавный скролл для логотипа */
export function scrollLogoLink() {
  const logoLink = document.getElementById("logo");
  logoLink.addEventListener('click', function (e) {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
