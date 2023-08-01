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
const $knowledge_card = document.querySelectorAll('.card');
const scrollTopButton = document.getElementById('ScrollUpBtn');



//Block Main e Shadow remover mouse over delimitador



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

  if (btn_nav_hamburger.classList.contains('is-active')) {
    document.body.style.overflowY = 'hidden '
    console.log('is hidden')
  }else {
    document.body.style.overflowY = 'scroll'

  }


 
})


// SuggestClickKnowledgeInMobile 

anime({
  targets: '#clickSuggestIcon',
  delay: 250,
  scale: 5,
  loop: true,
  easing: 'easeInOutSine'
});


for(var i = 0; i < $knowledge_card.length; i++) {
  $knowledge_card[i].addEventListener("click", bindClick(i));
}

function bindClick() {
return function() {
       anime({
      targets: '#clickSuggestIcon',
      delay: 0,
      scale: 0.5,
      loop: false,
      duration: 50,
      opacity: 0
    });
   


   
};
}






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
  let progressWidth = (scrollDistance / ($main.getBoundingClientRect().height - document.documentElement.clientHeight))*4.2 ;

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



function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Add smooth scrolling animation
  });
}

// Add click event listener to the button
scrollTopButton.addEventListener('click', scrollToTop);