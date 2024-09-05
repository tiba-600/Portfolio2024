document.addEventListener('scroll',() => {
    const navscroll = document.getElementById('nav-scroll');
    console.log('Scrolled');
    if(window.scrollY > 0) 
        
    {
        console.log('Add scroll class');
        navscroll.classList.add('scrolls');
    }else {
        console.log('Remove scroll class');
        navscroll.classList.remove('scrolls');
    }
})