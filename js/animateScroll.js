function animeScroll() {
    
    const skillCardSection = document.querySelector('.block-skills-flex')
    const skillCards = document.querySelectorAll('.skill-card')
    const targets = document.querySelectorAll('[data-anime]')
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
    targets.forEach(function (e) {
      if ((windowTop) > e.offsetTop) {
        e.classList.add('animate') 
       
        
      }
  
      else {
        e.classList.remove('animate') 
       
        
  
      }

    })

    

    
    
  
  }

 
  
  window.addEventListener('scroll', () => {
    animeScroll();
  })