
    document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
      document.querySelector('nav ul').classList.toggle('active');
      this.innerHTML = document.querySelector('nav ul').classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });
    

    document.querySelectorAll('nav ul li a').forEach(link => {
      link.addEventListener('click', () => {
        document.querySelector('nav ul').classList.remove('active');
        document.querySelector('.mobile-menu-btn').innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
    window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    document.querySelector('header').classList.remove('scrolled');
  