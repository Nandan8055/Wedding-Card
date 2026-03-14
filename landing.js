const openBtn = document.getElementById("openBtn")
const hero = document.querySelector(".hero")

if (openBtn && hero) {
    openBtn.addEventListener("click", function() {
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
