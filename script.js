const openBtn = document.getElementById("openBtn")

if(openBtn){

openBtn.addEventListener("click", function(){

    document.querySelector('.hero').classList.add('animate-open');
    
    setTimeout(() => {
        window.location.href = "invite.html"
    }, 800);

})

}

// MUSIC

const music = document.getElementById("weddingMusic")

if(music){
    const btn = document.createElement("button")
    
    const icon = document.createElement("span")
    icon.textContent = "🎵"
    icon.style.display = "inline-block"
    btn.appendChild(icon)

    Object.assign(btn.style, {
        position: "fixed", right: "20px", bottom: "20px",
        width: "50px", height: "50px", borderRadius: "50%",
        border: "none", backgroundColor: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        fontSize: "24px", cursor: "pointer", zIndex: "1000",
        display: "flex", justifyContent: "center", alignItems: "center",
        transition: "transform 0.2s"
    })

    const spinAnim = icon.animate(
        [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
        { duration: 3000, iterations: Infinity }
    );
    spinAnim.pause();

    btn.onmouseover = () => btn.style.transform = "scale(1.1)"
    btn.onmouseout = () => btn.style.transform = "scale(1)"

    btn.onclick = () => {
        if(music.paused){ music.play(); spinAnim.play(); }
        else { music.pause(); spinAnim.pause(); }
    }
    document.body.appendChild(btn)
}


// LANTERN ANIMATION

function createLantern(){

const container = document.querySelector(".lantern-container")
if(!container) return

const lantern = document.createElement("img")

lantern.src = "images/lantern.png"
lantern.className = "lantern"

lantern.style.left = Math.random()*100 + "vw"

const duration = 8 + Math.random() * 6
lantern.style.animationDuration = duration + "s"

container.appendChild(lantern)

setTimeout(()=>{
lantern.remove()
}, duration * 1000)

}

setInterval(createLantern,1500)

// FIREFLY ANIMATION

function createFirefly(){
    if(!document.querySelector(".invitePage")) return

    const firefly = document.createElement("div")
    firefly.className = "firefly"

    firefly.style.left = Math.random() * 100 + "vw"
    firefly.style.top = Math.random() * 100 + "vh"

    const moveX = (Math.random() - 0.5) * 100 + "px"
    const moveY = (Math.random() - 0.5) * 100 + "px"
    firefly.style.setProperty("--moveX", moveX)
    firefly.style.setProperty("--moveY", moveY)

    const duration = 5 + Math.random() * 5
    firefly.style.animationDuration = duration + "s"

    document.body.appendChild(firefly)
    setTimeout(() => firefly.remove(), duration * 1000)
}

setInterval(createFirefly, 500)

// FLOWER START

window.addEventListener('load', () => {
    const body = document.body;
    if (body.classList.contains("landing-page")) {

        // Populate flower containers from template
        const flowerTemplate = document.getElementById('flower-container-content');
        if (flowerTemplate) {
            const flowerHTML = flowerTemplate.innerHTML;
            const wrappers = document.querySelectorAll('.flower-wrapper');
            wrappers.forEach(wrapper => {
                wrapper.innerHTML = flowerHTML;
            });
        }

        setTimeout(() => {
            body.classList.remove("not-loaded");
        }, 1000);
    }
});