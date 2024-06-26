document.addEventListener("DOMContentLoaded", function(){
    const observer = new IntersectionObserver((entries =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add("fade.in")
            }
        });
    }, {
        threshhold: 1
    }))
})