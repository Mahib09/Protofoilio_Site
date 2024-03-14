window.onload = function(){
    const menu_btn=document.querySelector('.hamburger');
    const scroll_menu=document.querySelector('.scroll-nav');
    const ham_link=document.querySelector('.scroll-link')
    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active')
        scroll_menu.classList.toggle('is-active')
    });
document.onclick = function(e){
    if(!menu_btn.contains(e.target)&&!scroll_menu.contains(e.target)){
        menu_btn.classList.remove('is-active')
        scroll_menu.classList.remove('is-active')
    }
}

}
window.onscroll = function(){
    const hamburger = document.querySelector('.hamburger-btn');
    const scroll_menu=document.querySelector('.scroll-nav');
    const menu_btn=document.querySelector('.hamburger');
    var scroll = window.scrollY; 
            
    if(scroll>=700 & scroll<=2400){
        hamburger.classList.add('active')

    }else
    hamburger.classList.remove('active')
    scroll_menu.classList.remove('is-active')
    menu_btn.classList.remove('is-active')


    console.log(scroll)
}


