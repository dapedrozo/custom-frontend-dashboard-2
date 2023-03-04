const darkmode = document.querySelector('.brand-flex');


darkmode.addEventListener('click',function(){
    if ( document.getElementById("pim").classList.contains('sidebar-background-color-dark') ){
        document.getElementById("pim").className =document.getElementById("pim").className.replace( /(?:^|\s)sidebar-background-color-dark(?!\S)/g , '' )
    } else{
        document.getElementById("pim").className += " sidebar-background-color-dark";
    }
})