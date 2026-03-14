const bellSound = document.getElementById("bellSound")

document.querySelectorAll(".bell").forEach(bell => {

bell.addEventListener("click", () => {

bellSound.currentTime = 0
bellSound.play()

})

})

// MUSIC BUTTON

const music = document.getElementById("weddingMusic")

const btn = document.createElement("button")

btn.innerHTML="🎵"

Object.assign(btn.style,{
position:"fixed",
bottom:"20px",
right:"20px",
width:"50px",
height:"50px",
borderRadius:"50%",
border:"none",
background:"#fff",
fontSize:"24px",
cursor:"pointer",
zIndex:"1000"
})

btn.onclick=()=>{
if(music.paused){music.play()}
else{music.pause()}
}

document.body.appendChild(btn)



// LANTERNS

function createLantern(){

const container=document.querySelector(".lantern-container")

const lantern=document.createElement("img")

lantern.src="images/lantern.png"

lantern.className="lantern"

lantern.style.left=Math.random()*100+"vw"

const duration=8+Math.random()*5

lantern.style.animationDuration=duration+"s"

container.appendChild(lantern)

setTimeout(()=>lantern.remove(),duration*1000)

}

setInterval(createLantern,1200)



// GALLERY SLIDER

const slides = document.querySelectorAll(".slider img")

let current = 0

function showSlide(index){
slides.forEach(img => img.classList.remove("active"))
slides[index].classList.add("active")
}

showSlide(current)

setInterval(()=>{

current++

if(current >= slides.length){
current = 0
}

showSlide(current)

},5000)

setTimeout(()=>{

const text=document.querySelector(".invite-text")
if(text) text.style.opacity="1"

},2500)