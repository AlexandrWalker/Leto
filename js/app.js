(() => {
  document.addEventListener('DOMContentLoaded', () => {

    /**
     * Фиксация шапки.
     */
    if ((window.innerWidth <= 600) || (~['Android', 'iPhone', 'iPod', 'iPad', 'BlackBerry'].indexOf(navigator.platform))) {
      window.onscroll = function () {
        let header = document.querySelector('.hero__header');
        let stickyOffset = 10;

        if (window.pageYOffset > stickyOffset) {
          header.classList.add('fixed'); // Теперь он зафиксирован
        } else {
          header.classList.remove('fixed'); // Обратно в исходное положение
        }
      };
    }

    /**
     * Активация бургер кнопки.
     */
    (function () {
      let burger = document.querySelector('.burger');
      let header = document.querySelector('.header');

      burger.addEventListener('click', function (e) {
        burger.classList.toggle('burger--active');
        header.classList.toggle('header--show');
        document.body.classList.toggle('no-scroll');
        e.stopPropagation();
      });
    })();


  });
})();