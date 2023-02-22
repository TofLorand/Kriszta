/* = = = BURGER SCRIPT = = = = */

function myFunction(x) {
    x.classList.toggle("change");
  }


  const burger = document.getElementById('burger')
  const nav = document.getElementById('nav')

burger.addEventListener('click', function (event) {
    nav.classList.toggle('menu-active')
})  


/* = = = = GALERY ROTATION SCRIPT = = = = */
 
let box = document.querySelector('.box'), 
sides = document.querySelectorAll('.side');

sides.forEach((side, i) => {
  side.addEventListener('click', () => {
    box.style.transform = `rotateX(-10deg) rotateY(-${i*60}deg)`;
  });
});




/* = = = = VIDEO SCRIPT = = = = */

document.querySelectorAll('.video-container video'). forEach(vid => {
  vid.onclick = () =>{
    document.querySelector('.popup-video').style.display = 'block';
    document.querySelector('.popup-video video').src = vid.getAttribute('src');
  }
})

document.querySelector('.popup-video span').onclick = () =>{
  document.querySelector('.popup-video').style.display = 'none';
}

