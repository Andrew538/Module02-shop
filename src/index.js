import 'normalize.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss'





import Swiper, { Navigation, Pagination } from 'swiper';



  var swiper = new Swiper(".offerSwiper", {
    slidesPerView: 2,
    spaceBetween: 17,
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
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.35,
        slidesPerGroup: 1
      },
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1000: {
        slidesPerView: 3,
        slidesPerGroup: 3
      }
    }
  });


  var swiper = new Swiper(".trendsSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
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
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.35,
        slidesPerGroup: 1
      },
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1001: {
        slidesPerView: 3,
        slidesPerGroup: 3
      }
     

    }
    
  });

  var swiper = new Swiper(".catalogSwiper", {
    
    slidesPerView: 2,
    spaceBetween: 15,
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
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 3,
        slidesPerGroup: 1
      },
      360: {
        slidesPerView: 2.5,
        slidesPerGroup: 2.5
      },
      769: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      1001: {
        slidesPerView: 5,
        slidesPerGroup: 5
      },
      1380: {
        slidesPerView: 6,
        slidesPerGroup: 6
      }

      
     

    }
    
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
    if (document.body.clientWidth  <= 320) {
      for (let i=4;i<item.length;i++) {
        item[i].style.display = "none";
      }
    }
  
    let countD = 8;
    btn.addEventListener('click', function() {
        let item=document.getElementsByClassName('catalog-grid__item');
        countD += 4;
        if (countD <= item.length){
            for(let i=0;i<countD;i++){
              item[i].style.display = "block";                
          }
        }
    })
    
  }




let authorHover = document.querySelector('.footer__author');
let autorLink = document.querySelector('.footer__author-link');


authorHover.addEventListener('mouseenter', function() {
  autorLink.style.color = "#27300f"
})

authorHover.addEventListener('mouseleave', function() {
  autorLink.style.color = "rgba(39, 48, 15, .6)"
})

function app() {
  let buttons = document.querySelectorAll('.category__link')
  let cards = document.querySelectorAll('.catalog-grid__item ')

  function filter (category, items) {
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category)
      if (isItemFiltered  ) {
        item.classList.add('hide')
      } else {
        item.classList.remove('hide')
      } 
    })

  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const currentCategory = button.dataset.filter;
      filter(currentCategory, cards)
      
    })
  })

  // cards.forEach((part) => {
  //   part.ontransitionend = function () {
  //     // console.log('dfjkg')

  //     if (part.classList.contains('anime')) {
  //       part.classList.add('hide')
  //     }
  //   }
  // })

}

app()