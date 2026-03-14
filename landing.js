const openBtn = document.getElementById("openBtn")
const hero = document.querySelector(".hero")
const sparkleLayer = document.querySelector(".sparkle-layer")

if (sparkleLayer) {
    const sparkleConfig = [
        { x: "8%", y: "10%", size: "10px", dur: "6.4s", delay: "0.1s" },
        { x: "16%", y: "22%", size: "12px", dur: "5.8s", delay: "0.8s" },
        { x: "24%", y: "36%", size: "11px", dur: "6.1s", delay: "1.5s" },
        { x: "10%", y: "54%", size: "13px", dur: "6.7s", delay: "2.3s" },
        { x: "18%", y: "74%", size: "10px", dur: "5.9s", delay: "0.5s" },
        { x: "28%", y: "14%", size: "11px", dur: "5.5s", delay: "1.1s" },
        { x: "36%", y: "26%", size: "13px", dur: "6.0s", delay: "0.4s" },
        { x: "44%", y: "40%", size: "12px", dur: "5.7s", delay: "1.9s" },
        { x: "32%", y: "62%", size: "14px", dur: "6.5s", delay: "0.9s" },
        { x: "40%", y: "82%", size: "11px", dur: "6.2s", delay: "2.5s" },
        { x: "52%", y: "12%", size: "12px", dur: "5.6s", delay: "0.7s" },
        { x: "60%", y: "24%", size: "14px", dur: "6.1s", delay: "1.4s" },
        { x: "50%", y: "48%", size: "11px", dur: "5.8s", delay: "2.0s" },
        { x: "58%", y: "66%", size: "13px", dur: "6.6s", delay: "0.3s" },
        { x: "54%", y: "86%", size: "10px", dur: "6.0s", delay: "1.7s" },
        { x: "68%", y: "16%", size: "12px", dur: "5.7s", delay: "1.2s" },
        { x: "76%", y: "30%", size: "13px", dur: "6.3s", delay: "2.2s" },
        { x: "84%", y: "44%", size: "11px", dur: "5.5s", delay: "0.6s" },
        { x: "72%", y: "64%", size: "14px", dur: "6.8s", delay: "1.6s" },
        { x: "88%", y: "80%", size: "10px", dur: "6.1s", delay: "2.6s" },
        { x: "92%", y: "18%", size: "11px", dur: "5.9s", delay: "0.9s" },
        { x: "82%", y: "90%", size: "12px", dur: "6.4s", delay: "1.3s" }
    ]

    sparkleConfig.forEach((config) => {
        const sparkle = document.createElement("span")
        sparkle.className = "sparkle"
        sparkle.style.setProperty("--x", config.x)
        sparkle.style.setProperty("--y", config.y)
        sparkle.style.setProperty("--size", config.size)
        sparkle.style.setProperty("--dur", config.dur)
        sparkle.style.setProperty("--delay", config.delay)
        sparkleLayer.appendChild(sparkle)
    })
}

if (openBtn && hero) {
    openBtn.addEventListener("click", function() {
        sessionStorage.setItem("autoplayWeddingMusic", "true")
        hero.classList.add("animate-open")
        openBtn.disabled = true

        setTimeout(() => {
            window.location.href = "invite.html"
        }, 1000)
    })
}

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
        }, 200); /* Start animation faster */
    }
});
