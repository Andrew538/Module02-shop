import 'normalize.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss'

// const counters = document.querySelectorAll('[data-counter]');

// if (counters) {
//   counters.forEach(counter => {
//     counter.addEventListener('click', e => {
//       const target = e.target;
//       // console.log('counter')
//       if (target.closest('.counter__btn')) {
//           let value = parseInt(target.closest('.counter').querySelector('input').value);
          
//           if (target.classList.contains('counter__btn_plus')) {
//             value++;
//           } else {
//             --value;
//           }
//           target.closest('.counter').querySelector('input').value = value;
//       }
//     })
//   })
// }




import Swiper, { Navigation, Pagination } from 'swiper';



  var swiper = new Swiper(".offerSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
  });


  var swiper = new Swiper(".trendsSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
  });






  //  COUNTER 
  const counters = document.querySelectorAll('[data-counter]');

  if (counters) {
    counters.forEach(counter => {
      counter.addEventListener('click', e => {
        const target = e.target;

        if (target. closest('.counter__btn')) {
            let value = parseInt(target.closest('.counter').querySelector('input').value);
            
            if (target.classList.contains('counter__btn_plus')) {
              value++;
            } else {
              --value;
            }

            if (value <= 0) {
                value = 0;
                target.closest('.counter').querySelector('.counter__btn_minus').classList.remove('disabled');
            } else {
              target.closest('.counter').querySelector('.counter__btn_minus').classList.add('disabled');

            }

            target.closest('.counter').querySelector('input').value = value;
        }
      })
    })
  }



  // show more

  
  window.onload = function () {
    let item=document.getElementsByClassName('catalog-grid__item');
    let btn=document.querySelector('.catalog__btn');
    for (let i=8;i<item.length;i++) {
        item[i].style.display = "none";
    }
  
    let countD = 8;
    btn.addEventListener('click', function() {
        let item=document.getElementsByClassName('catalog-grid__item');
        countD += 4;
        console.log('btn')
        if (countD <= item.length){
            for(let i=0;i<countD;i++){
                item[i].style.display = "block";
            }
        }
  
    })
  }