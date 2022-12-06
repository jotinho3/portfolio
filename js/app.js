const block_main = document.querySelector('.block-main');
const shadow = document.querySelector('.shadow');
const hiddenCircle = document.querySelector('.hiddenCircle');
const containerMain = document.querySelector('.container');
const block_main_flex = document.querySelector('.block-main-flex');
const languageBR = document.querySelectorAll('[language="BR"]');
const languageEN = document.querySelectorAll('[language="EN"]')
const btnLang = document.querySelector('.lang-change');
const progressbar = document.querySelector('#progress-bar');
const $main = document.querySelector('main');
const btn_nav_hamburger = document.getElementById('btn-nav-hamburger');
const hamburger_menu_toggle = document.querySelector('.hamburger-menu-toggle');
const $lang_change = document.querySelector('.lang-change');
const $brand_flex_icon = document.querySelector('.brand-flex-icon');



//Block Main e Shadow remover mouse over delimitador
var timer;
var hoverClass = 'block-main-hover'


  block_main.addEventListener('pointerover', () => {
    timer = setTimeout(function mainEvent () {
      block_main.classList.add('block-main-animated');
      shadow.classList.remove('shadow')
      hoverClass = null; // o valor está como null aqui já que depois dessa função ser executada o valor de block-main-hover nao vai ser passado na função de baixo, assim, depois do bloco ser esticado o hover não pode mais acontecer
      block_main.classList.remove('block-main-hover') // solução feita para remover a classe dentro da propria função 
      hiddenCircle.remove(); // 
      containerMain.style.display = 'none'
      block_main_flex.style.opacity = "1"
      block_main_flex.style.cursor = 'inherit'

      
      

    }, 1200);
   

 })


  block_main.addEventListener('pointerout', () => {

    block_main.classList.remove('block-main-hover')
    hiddenCircle.style.opacity = '0'
    clearTimeout(timer);
   
  });



  block_main.addEventListener('pointerover', () => {

    block_main.classList.add(hoverClass)
    hiddenCircle.style.opacity = '0.6'
    
   
  });


  //Mudança de idioma

  btnLang.addEventListener('click', () => {
    if (btnLang.textContent == 'EN') {
      btnLang.textContent = 'PT'
      languageBR.forEach((e) => {
        e.style.display = "inherit"
       
        languageEN.forEach((e) => {
          e.style.display = "none"
        
          

        })
      })
      

    }

    else { 
      btnLang.textContent = 'EN'
      languageEN.forEach((e) => {
        e.style.display = "inherit"
        
        languageBR.forEach((e) => {
          e.style.display = "none"
       
          

        })
      })

    }
    
  
    
  })

  

function hoverSkillCards() {
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach((e) => {
    e.addEventListener('pointerover', () => {
      anime({
        targets: (e),
        translateY: -50,
        duration: 2000
      });
    })

    e.addEventListener('pointerout', () => {
      anime({
        targets: (e),
        translateY: 0,
        duration: 2000
      });
    })

  })

}

hoverSkillCards();


// NAV BTN TOGGLER
btn_nav_hamburger.addEventListener('click', () => {

 

  btn_nav_hamburger.classList.toggle('is-active');
  $brand_flex_icon.classList.toggle('disabled');
  $lang_change.classList.toggle('disabled');
  hamburger_menu_toggle.classList.toggle('enabled');

  if (hamburger_menu_toggle.classList.contains('enabled')) {
    document.body.style.overflowY = 'hidden'
  }else {
    document.body.style.overflowY = 'scroll'

  }


 
})






//FUNÇÃO DE HOVER NAVBTN
function hoverNavBtn() {
  const navBtn = document.querySelector('.nav-navigationBtn');

  navBtn.addEventListener('pointerover', () => {
    
  anime({
    targets: '#Line_1',
    translateY: -2
  });

  anime({
    targets: '#Line_3',
    translateY: 2
  });

  });

  navBtn.addEventListener('pointerout', () => {
    
    anime({
      targets: '#Line_1',
      translateY: 0
    });
  
    anime({
      targets: '#Line_3',
      translateY: 0
    });
    
    
  
    });

    navBtn.addEventListener('toggle', () => {

      anime({
        targets: '#Line_2',
        opacity
      });

      anime({
        targets: '#Line_1',
        translateY: 0
      });

    })
};

hoverNavBtn();
  



//Importação da particle.js delimitador

 particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('particles.json loaded')
})




function animateProgressBar() {
  let scrollDistance = $main.getBoundingClientRect().top;
  let progressWidth = (scrollDistance / ($main.getBoundingClientRect().height - document.documentElement.clientHeight))*13 ;

  let value = Math.floor(progressWidth);

  progressbar.style.width = value + "%"


}

window.addEventListener('scroll', animateProgressBar);


window.onload = function() {
  anime({
    targets: '#nav-flex',
    opacity: '1',
    duration: '3000',
    easing: 'easeInOutQuad'
  });

}


function smoothScroll() {
  const link_menu_toggle = document.querySelectorAll('.link-menu-toggle')

  link_menu_toggle.forEach((e) => {
    e.addEventListener('click', () => {
      document.body.style.overflowY = 'scroll'
      btn_nav_hamburger.classList.toggle('is-active');
      $brand_flex_icon.classList.toggle('disabled');
      $lang_change.classList.toggle('disabled');
      hamburger_menu_toggle.classList.toggle('enabled');

    
    })
    
  })

}
smoothScroll();