
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); 
    // set duration in brackets    
});



  /* Home Slideshow Vegas
  -----------------------------------------------*/
  
   /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })
      

  /* wow
  -------------------------------*/
  new WOW({ mobile: true }).init();

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      var $navLink = $(".nav-link");
      var $bar1 = $(".bar1");
      var $bar2 = $(".bar2");
      var $bar3 = $(".bar3"); 
      
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $navLink.toggleClass('scrolle', $(this).scrollTop() > $nav.height());
      $bar1.toggleClass('scroll1', $(this).scrollTop() > $nav.height());
      $bar2.toggleClass('scroll2', $(this).scrollTop() > $nav.height());
      $bar3.toggleClass('scroll3', $(this).scrollTop() > $nav.height());
      ;
    });
  });

  function myFunction(x) {
    x.classList.toggle("change");
    }

function douple(x) {
  x.classList.toggle("up");
}
   $(".links ul li a").click(function () {
     $('html , body').animate({
       scrollTop: $('#' + $(this).data('value')).offset().top
     }, 1000)
   })
   $(".contact-btn").click(function () {
    $('html , body').animate({
      scrollTop: $('#' + $(this).data('value')).offset().top
    }, 1000)
  })

// language code

    const langEl = document.querySelector('.langWrap');
    const langEl1 = document.querySelector('.social-icon-up-div');
		const link = document.querySelectorAll('.lang');
		const homehEl = document.querySelector('.homeh');
   
    const whohEl = document.querySelector('.whoh');
    const whopEl = document.querySelector('.whop');
    const whotEl = document.querySelector('.whot');
    const navaEl = document.querySelector('.nava');
    const navcEl = document.querySelector('.navc');
    const navtEl = document.querySelector('.navt');
    const navhEl = document.querySelector('.navh');
    const teamhEl = document.querySelector('.teamh');
    const gethEl = document.querySelector('.geth');
    const getbEl = document.querySelector('.getb');
    const foothEl = document.querySelector('.footh');
    const footsEl = document.querySelector('.foots');
  

		link.forEach(el => {
			el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');
        

        const attr = el.getAttribute('language');
        
      
      
				homehEl.textContent = data[attr].homeh;
     
        whohEl.textContent = data[attr].whoh;
        whotEl.textContent = data[attr].whot;
        whopEl.textContent = data[attr].whop;
        navaEl.textContent = data[attr].nava;
        navcEl.textContent = data[attr].navc;
        navtEl.textContent = data[attr].navt;
        navhEl.textContent = data[attr].navh;
        teamhEl.textContent = data[attr].teamh;
        gethEl.textContent = data[attr].geth;
        getbEl.textContent = data[attr].getb;
        foothEl.textContent = data[attr].footh;
        footsEl.textContent = data[attr].foots;


			});
		});
		
		var data = {
			  "english": 
			  {
			    "homeh": "WE ARE SHOW STUDIO",
			    "homep": "Website is Under Implementation  our new creative website , Will Coming Soon!",
            "whoh": " WHO WE ARE !",
            "whot": "Company Info",
            "whop": "ShowMediaProduction Top-level production company in in Egypt We have produced commercials and supported roughly 100 production services, We’ve gained an exlent reputation for delivering exeptional service, that works around the clock with precision and punctuality, maximizing resources to support efficiency of your budget. And also one of our main rules that we do commit to the agreed times, with the best quality you can ever have, We are an Egyptian top tier production house that provides high-end production services and support for commercials, movies, Tv series, and video clips. And the upcoming showreal will present some of our projects",  
            "navh":"Home",
            "nava":"About",
            "navt":"Clients",
            "navc":"Contact Us",
            "teamh" : "Clients",
            "geth" : "Get in touch",
            "getb" : "SEND MESSAGE",
            "footh":"Show Media Production",
            "foots":"Our Studio",
            "footp":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus lacus nulla, eget varius justo tristique ut. Etiam a tellus magna.",
            
			  },
			  "arabic": 
			  {
			    "homeh":"WE ARE SHOW STUDIO",
			    "homep": "!الموقع تحت الانشاء , موقعنا المذهل يأتي قريبا ",
            "whoh": "من نحن !",
            "whot": "معلومات الشركه",
            "whop": "ShowMediaProduction شركة إنتاج عالية المستوى في مصر ،  لقد أنتجنا إعلانات تجارية ودعمنا ما يقرب من 100 خدمة إنتاج ، واكتسبنا سمعة ممتازة في تقديم خدمة استثنائية ، تعمل على مدار الساعة بدقة ودقة في المواعيد ، وتعظيم الموارد لدعم كفاءة ميزانيتك. وأيضًا من قواعدنا الرئيسية التي نلتزم بها في الأوقات المتفق عليها ، بأفضل جودة يمكنك الحصول عليها على الإطلاق ،  نحن شركة إنتاج مصرية من الدرجة الأولى تقدم خدمات إنتاج عالية الجودة ودعمًا للإعلانات التجارية والأفلام والمسلسلات التلفزيونية ومقاطع الفيديو.  وسيقدم Showreal القادم بعض مشاريعنا:",
            "navh":"الرئيسيه",
            "nava":"عنا",
            "navt":"عملاؤنا",
            "navc":"اتصل بنا",
            "teamh" : "عملاؤنا",
            "geth" : "ابقي علي تواصل",
            "getb" : "أرسل",
            "footh":"Show Media Production",
            "foots":"الاستوديو",
            "footp":"لموقع تحت الانشاء , موقعنا المذهل يأتي قريبا لموقع تحت الانشاء , موقعنا المذهل يأتي قريبا لموقع تحت الانشاء , موقعنا المذهل يأتي قريبا",
			  }
			
      }
      

      $(function() {
        $('body').vegas({
            slides: [
              { src: './images/3_4.jpg' ,  delay:7000 , transition: 'zoomOut'},
                { src: './images/tiktok2.jpg' , delay:7000, transition: 'zoomOut'},
                { src: './images/ramadan.jpg' , delay:7000 ,transition: 'zoomOut' },
                { src: './images/30years.jpg'   , delay:7000 ,transition: 'zoomOut'},
                { src: './images/d286d378599593.5d63cfac43c29.png'  , delay:7000 , transition: 'zoomOut' },
                { src: './images/badla.jpeg' , delay:7000, transition: 'zoomOut'},
                { src: './images/morgan.jpg' , delay:7000 , transition: 'zoomOut' },
                { src: './images/awnta.jpg' , delay:7000 , transition: 'zoomOut' },
                { src: './images/KHER.jpg'  , delay:7000 , transition: 'zoomOut'},
                
            ],
            overlay: '/js/vegas/dist/overlays/05.png',
            transitionDuration: 8000,
            delay:5000,
            animation: [ 'kenburnsLeft'],
            transition: [ 'fade']

        }  );
    } );
    
    $(document).ready(function(){
      $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 520,
          settings: {
            slidesToShow: 3
          }
        }]
      });
    });

    function sendFunAlert() {
      // Get the snackbar DIV
      var x = document.getElementById("snackbar");
    
      // Add the "show" class to DIV
      x.className = "show";
    
      // After 3 seconds, remove the show class from DIV
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }