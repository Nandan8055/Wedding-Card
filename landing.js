const openBtn = document.getElementById("openBtn")

if (openBtn) {
    openBtn.addEventListener("click", function() {
        document.querySelector('.hero').classList.add('animate-open');

        setTimeout(() => {
            window.location.href = "invite.html"
        }, 800);
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