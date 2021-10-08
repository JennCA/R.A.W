var acc = document.querySelectorAll('.accordion'); //returns static list of elements with 'accordion' class

function accordion(e) {
    e.stopPropagation(); //prevents propagation of the same event from being called

    if (this.classList.contains('active')) {
        //close currently active accordion
        this.classList.remove('active');
    }
    //sub-accordions (if parent is active)
    else if (this.parentElement.parentElement.classList.contains('active')) {
        for (i = 0; i < acc.length; i++) {
            //if accordion contains the 'sub' class
            if (acc[i].classList.contains('sub')) {
                //close previously opened accordion
                acc[i].classList.remove('active');
            }
        }
        //activate clicked sub-accordion
        this.classList.add('active');   
    }
    //top-accordions
    else {
        for (i = 0; i < acc.length; i++) {
            //close previously opened accordion
            acc[i].classList.remove('active');
        }
        //activate clicked top-accordion
        this.classList.add('active');
    }
}

//execute accordion function when clicked
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', accordion);
}
