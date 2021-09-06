



        const menu = document.querySelector('.navbar');
         
        window.addEventListener('scroll' , () =>{
            if(window.scrollY>120){
                menu.style.height = '10%';
                menu.style.transition = '2s';
                // menu.style.box-shadow = '0px 20px 30px 0px rgba(2, 1, 2, 0.48)';

            }
            else
            menu.style.height ='18%';
        })