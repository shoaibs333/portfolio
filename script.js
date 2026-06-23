const scrollBtn = document.getElementById("scrollBtn");
const scrollIcon = document.getElementById("scrollIcon");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollIcon.innerHTML = `
        <path stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7" />
        `;

        scrollBtn.onclick = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };

    } else {

        scrollIcon.innerHTML = `
        <path stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7" />
        `;

        scrollBtn.onclick = () => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });
        };

    }
});