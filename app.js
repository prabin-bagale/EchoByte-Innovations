// Scroll to top
const scrolltp = document.querySelector("#scrollup");
scrolltp.addEventListener('click',function(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
});
window.addEventListener('scroll',function(){
    if (window.scrollY >=900 ) {
        scrolltp.style.opacity =1;
    }else{
        scrolltp.style.opacity =0;
    }
});
// theme toggle
const toggle =document.querySelector('.checkbox');
const body = document.querySelector('body');
const darkmode =localStorage.getItem("dark");
if (darkmode) {
    body.classList.add("dark"); 
    toggle.checked = true; 
}
toggle.addEventListener('change',function(){
    body.classList.toggle("dark");
    if (body.classList.contains('dark')) {
        localStorage.setItem("dark","active")
    }else{
        localStorage.removeItem("dark")
    }
})