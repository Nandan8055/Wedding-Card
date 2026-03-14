const bellSound = document.getElementById("bellSound")
const music = document.getElementById("weddingMusic")

document.querySelectorAll(".bell").forEach((bell) => {
bell.addEventListener("click", () => {
bellSound.currentTime = 0
bellSound.play()
})
})

// MUSIC BUTTON

const btn = document.createElement("button")
btn.className = "music-toggle"

function updateMusicButton() {
btn.textContent = music.paused ? "Play Music" : "Pause Music"
btn.setAttribute("aria-pressed", String(!music.paused))
}

async function playWeddingMusic() {
try {
await music.play()
} catch (error) {
// Some browsers may still block autoplay; the button remains available.
}

updateMusicButton()
}

btn.onclick = async () => {
if (music.paused) {
await playWeddingMusic()
} else {
music.pause()
updateMusicButton()
}
}

document.body.appendChild(btn)
updateMusicButton()

if (sessionStorage.getItem("autoplayWeddingMusic") === "true") {
sessionStorage.removeItem("autoplayWeddingMusic")
playWeddingMusic()
}

// LANTERNS

function createLantern() {
const container = document.querySelector(".lantern-container")
const lantern = document.createElement("img")

lantern.src = "images/lantern.png"
lantern.className = "lantern"
lantern.style.left = Math.random() * 100 + "vw"

const duration = 8 + Math.random() * 5
lantern.style.animationDuration = duration + "s"

container.appendChild(lantern)

setTimeout(() => lantern.remove(), duration * 1000)
}

setInterval(createLantern, 1200)

// GALLERY SLIDER

const slides = document.querySelectorAll(".slider img")

let current = 0

function showSlide(index) {
slides.forEach((img) => img.classList.remove("active"))
slides[index].classList.add("active")
}

showSlide(current)

setInterval(() => {
current++

if (current >= slides.length) {
current = 0
}

showSlide(current)
}, 3000)

setTimeout(() => {
const text = document.querySelector(".invite-text")
if (text) text.style.opacity = "1"
}, 2500)
