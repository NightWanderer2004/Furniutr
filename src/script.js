import AOS from 'aos'
import 'aos/dist/aos.css'
import Swiper, { Navigation, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
AOS.init()

new Swiper('.swiper', {
   modules: [Navigation, Autoplay],

   loop: true,
   grabCursor: true,

   navigation: {
      nextEl: '.arrow.next',
      prevEl: '.arrow.prev',
   },
   autoplay: {
      delay: 2475,
      disableOnInteraction: false,
   },

   slidesPerView: 2,
   slidesPerGroup: 2,
   spaceBetween: 15,

   speed: 355,
   breakpoints: {
      768: { spaceBetween: 20 },
      992: { slidesPerView: 4, slidesPerGroup: 2, spaceBetween: 30 },
   },
})

const navBar = document.querySelector('.navBar')
const navBarHeight = navBar.offsetHeight / 2
const burger = document.querySelector('.burger')
const navLinks = navBar.querySelectorAll('.linkItem')

burger.onclick = () => {
   navBar.querySelector('.links').classList.toggle('active')
   document.querySelector('body').classList.toggle('stopScroll')
}

navLinks.forEach(
   el =>
      (el.onclick = () => {
         navBar.querySelector('.links').classList.remove('active')
         document.querySelector('body').classList.remove('stopScroll')
      })
)

window.onscroll = () => {
   document.documentElement.scrollTop > navBarHeight
      ? navBar.classList.add('fixed')
      : navBar.classList.remove('fixed')
}

if (window.matchMedia('(max-width: 768px)').matches) {
   const infoTabs = document.querySelectorAll('.moreImgInfo')
   console.log(infoTabs)
   infoTabs.forEach((el, i) => {
      if (i % 2 === 0) el.dataset.aos = 'fade-right'
      else el.dataset.aos = 'fade-left'
   })
}
