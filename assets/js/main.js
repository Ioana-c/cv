

/*  Qualification Tabs */
const tabs = document.querySelector('.qualification_container'); 
const tabButton = document.querySelectorAll('.qualification_button');
const contents = document.querySelectorAll(".qualification_content");

tabs.onclick = e => {
   const id = e.target.dataset.id;
   if (id) {
     tabButton.forEach(btn => {
       btn.classList.remove("qualification_active");
     });
     e.target.classList.add("qualification_active");
 
     contents.forEach(content => {
       content.classList.remove("qualification_active");
     });
     
     const element = document.querySelector(id);
   element.classList.add("qualification_active")
   }
 }

/*Scroll sections active*/
const section = document.querySelectorAll('.section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    section.forEach(current => {
        const sectionHeight = current.offsetheight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_item a[href*=' + sectionId + ']').classList.add('active-link')

        }else{
            document.querySelector('.nav_item a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll' , scrollActive)

/* Change background header*/ 
function scrolllHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 80){
        nav.classList.add('scroll-header');
    }else{
        nav.classList.remove('scroll-header');
    }
}window.addEventListener('scroll' , scrolllHeader)

/* Scroll up */ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 560){
        scrollUp.classList.add('show-scroll');
    }else{
        scrollUp.classList.remove('show-scroll');
    }
}window.addEventListener('scroll' , scrollUp)


window.onload = function() {
    var status = document.getElementById('status_msg');
    var status_err = document.getElementById('status_msg_err');
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps

        emailjs.sendForm('service_vaanq8r', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
                status.style.display = 'block';
                setTimeout(function(){
                    status.style.display = 'none';
                    }, 3000);
            }, function(error) {
                console.log('FAILED...', error);
                status_err.style.display = 'block';
                setTimeout(function(){
                    status_err.style.display = 'none';
                    }, 3000);
            });
    });
}