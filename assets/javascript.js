const sidebar = document.querySelector(".sidebar")
function showNav() {
    if(sidebar.style.display === 'none'){
        sidebar.style.display = 'block'
        sidebar.style.transition = "all 5s";
    }
    else{
        sidebar.style.display = 'none'
    }
}