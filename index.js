// Some people think arrow functions suck, me personally i like them 
window.onscroll = () => {
    if (this.innerHeight + this.scrollY >= document.body.offsetHeight){
        // Generate some more maybe
        // change amount of things generated when scrolled
        var AMOUNT = 50;
        for (let i = 0; i < AMOUNT; i++){
            new_elem = document.createElement('p');
            new_elem.innerHTML =  '1';
            document.querySelector('body').appendChild(new_elem);
        }
    }

} 