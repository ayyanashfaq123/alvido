const sidebar_func = document.querySelector('sidebar-func')
function showNav() {
    if(sidebar_func.style.display === 'none'){
        sidebar_func.style.display = 'block'
    }
    else{
        sidebar_func.style.display = 'none'
    }
}