const bellSound = document.getElementById("bellSound")
const music = document.getElementById("weddingMusic")
const bellHints = document.querySelectorAll(".bell-hint")

document.querySelectorAll(".bell").forEach((bell) => {
bell.addEventListener("click", () => {
  bellSound.currentTime = 0
  bellSound.play()
  bellHints.forEach((hint) => hint.classList.remove("is-visible"))

  // Reset glow class and re-trigger it
  bell.classList.remove("glow")
  void bell.offsetWidth
  bell.classList.add("glow")

  // Direct JS bounce animation (upwards and back)
  bell.animate(
    [
      { transform: "translateY(0)" },
      { transform: "translateY(-40px)" },
      { transform: "translateY(0)" }
    ],
    {
      duration: 900,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)"
    }
  )

  // Remove glow after animation sheen finishes
  setTimeout(() => {
    bell.classList.remove("glow")
  }, 700)
})
})

if (bellHints.length) {
setTimeout(() => {
bellHints.forEach((hint) => hint.classList.add("is-visible"))
}, 1200)

setTimeout(() => {
bellHints.forEach((hint) => hint.classList.remove("is-visible"))
}, 5200)
}

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

// MOBILE SCROLL CUE

const scrollCue = document.querySelector(".scroll-cue")
const mobileMediaQuery = window.matchMedia("(max-width: 768px)")

function updateScrollCue() {
if (!scrollCue) return

if (!mobileMediaQuery.matches) {
scrollCue.classList.remove("is-visible")
return
}

const scrollBottom = window.scrollY + window.innerHeight
const pageBottom = document.documentElement.scrollHeight
const hideThreshold = 180

scrollCue.classList.toggle("is-visible", scrollBottom < pageBottom - hideThreshold)
}

if (scrollCue) {
scrollCue.addEventListener("click", (event) => {
event.preventDefault()
window.scrollBy({
top: Math.max(window.innerHeight * 0.85, 420),
behavior: "smooth"
})
})

updateScrollCue()
window.addEventListener("scroll", updateScrollCue, { passive: true })
window.addEventListener("resize", updateScrollCue)
if (typeof mobileMediaQuery.addEventListener === "function") {
mobileMediaQuery.addEventListener("change", updateScrollCue)
}
}

// COUNTDOWN

const countdownTarget = new Date("2026-04-22T19:00:00+05:30")
const countdownElements = {
days: document.getElementById("countdown-days"),
hours: document.getElementById("countdown-hours"),
minutes: document.getElementById("countdown-minutes"),
seconds: document.getElementById("countdown-seconds"),
note: document.getElementById("countdown-note")
}

function padCountdown(value) {
return String(value).padStart(2, "0")
}

function renderCountdown() {
const now = new Date()
const difference = countdownTarget.getTime() - now.getTime()

if (difference <= 0) {
countdownElements.days.textContent = "00"
countdownElements.hours.textContent = "00"
countdownElements.minutes.textContent = "00"
countdownElements.seconds.textContent = "00"
countdownElements.note.textContent = "Today is the day. We are getting married."
return
}

const totalSeconds = Math.floor(difference / 1000)
const days = Math.floor(totalSeconds / 86400)
const hours = Math.floor((totalSeconds % 86400) / 3600)
const minutes = Math.floor((totalSeconds % 3600) / 60)
const seconds = totalSeconds % 60

countdownElements.days.textContent = padCountdown(days)
countdownElements.hours.textContent = padCountdown(hours)
countdownElements.minutes.textContent = padCountdown(minutes)
countdownElements.seconds.textContent = padCountdown(seconds)
countdownElements.note.textContent = "Reception on 22 April 2026 at 7:00 PM onwards"
}

renderCountdown()
setInterval(renderCountdown, 1000)
