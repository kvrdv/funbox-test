let banner = document.querySelectorAll('.banner');
let circle = document.querySelectorAll('.circle');
let link = document.querySelectorAll('.banner-footer-text-link');
let bannerFooter = document.querySelectorAll('.banner-footer');
let bannerTextline1 = document.querySelectorAll('.banner-textline-1');

// Массив подписей под баннерами, при их выборе:
const bannerFooterTextArray = [
  '<div class="banner-footer-text"> <p class="banner-footer-text">Печень утки разварная с артишоками.</p> </div>',
  '<div class="banner-footer-text"> <p class="banner-footer-text">Головы щучьи с чесноком да свежайшая сёмгушка.</p> </div>',
  '<div class="banner-footer-text"> <p class="banner-footer-text">Филе из цыплят с трюфелями в бульоне.</p> </div>'
];

const bannerFooterText = '<p class="banner-footer-text">Чего сидишь? Порадуй котэ,</p> <p class="banner-footer-text-link"> <a href="https://" style="color: #1698d9">купи</a> </p> <p class="dot-is-not-a-link">.</p>';

// Массив надписей на первой строке баннера:
const bannerTextlineArray = [
  'Сказочное заморское яство',
  'Котэ не одобряет?'
];


for (let i = 0; i < banner.length; i++) {

  // Меняем надпись и цвет первой строки баннера:
  banner[i].addEventListener('mouseleave', function () {
    if (banner[i].classList.contains('banner-selected') === true) {
      bannerTextline1[i].innerHTML = bannerTextlineArray[1];
      bannerTextline1[i].style.color = '#d91667';
    }
  });

  banner[i].addEventListener('mouseenter', function () {
    if (banner[i].classList.contains('banner-selected') === true) {
      bannerTextline1[i].innerHTML = bannerTextlineArray[0];
      bannerTextline1[i].style.color = ' #666666';
    }
  });

  // Подсвечиваем выбор красным при нажатии на баннер:
  banner[i].addEventListener('click', function () {
    banner[i].classList.toggle('banner-selected');
    circle[i].classList.toggle('circle-selected');

    if (banner[i].classList.contains('banner-selected') === true) {
      bannerFooter[i].innerHTML = bannerFooterTextArray[i];
    } else {
      bannerFooter[i].innerHTML = bannerFooterText;
    };

  });
};

// Подсвечиваем выбор красным при нажатии на слово купи:
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('click', function (e) {
    banner[i].classList.toggle('banner-selected');
    circle[i].classList.toggle('circle-selected');

    if (banner[i].classList.contains('banner-selected') === true) {
      bannerFooter[i].innerHTML = bannerFooterTextArray[i];
    } else {
      bannerFooter[i].innerHTML = bannerFooterText;
    };

  });
};

