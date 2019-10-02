let oldValue = 0;
let navbar = document.getElementById('main-nav')

// navbar scroll down up function
window.addEventListener('scroll', function(e){
    // Get the new Value
    newValue = window.pageYOffset;

    //Subtract the two and conclude
    if(oldValue - newValue < 0){
        navbar.style.top='-100px'
        navbar.style.opacity='0'
        
    } else if(oldValue - newValue > 0){
        navbar.style.top='0px'
        navbar.style.opacity='1'
    }

    // Update the old value
    oldValue = newValue;
});