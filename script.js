/* =========================================
   MLO PORTFOLIO
   JAVASCRIPT
========================================= */


/* =========================================
   LOADING SCREEN
========================================= */

const loadingScreen =
    document.getElementById("loadingScreen");

const loadingProgressBar =
    document.getElementById("loadingProgressBar");

const loadingPercent =
    document.getElementById("loadingPercent");

const loadingStatus =
    document.querySelector(".loading-status");


let progress = 0;


/*
   Progress loading
*/

const loadingInterval = setInterval(() => {

    /*
       Kecepatan loading dibuat
       sedikit tidak beraturan agar
       terasa lebih natural.
    */

    let speed;

    if (progress < 50) {
        speed = Math.floor(Math.random() * 5) + 2;
    } else if (progress < 85) {
        speed = Math.floor(Math.random() * 4) + 1;
    } else {
        speed = 1;
    }


    progress += speed;


    if (progress >= 100) {
        progress = 100;
        clearInterval(loadingInterval);

        loadingStatus.textContent =
            "SYSTEM READY";
    }


    if (loadingProgressBar) {
        loadingProgressBar.style.width =
            progress + "%";
    }


    if (loadingPercent) {
        loadingPercent.textContent =
            progress + "%";
    }


    /*
       Status berubah sesuai progress
    */

    if (loadingStatus && progress < 25) {

        loadingStatus.textContent =
            "INITIALIZING...";

    } else if (
        loadingStatus &&
        progress < 50
    ) {

        loadingStatus.textContent =
            "LOADING INTERFACE...";

    } else if (
        loadingStatus &&
        progress < 75
    ) {

        loadingStatus.textContent =
            "LOADING PROJECTS...";

    } else if (
        loadingStatus &&
        progress < 95
    ) {

        loadingStatus.textContent =
            "ESTABLISHING CONNECTION...";

    } else if (
        loadingStatus &&
        progress < 100
    ) {

        loadingStatus.textContent =
            "FINALIZING SYSTEM...";

    }

}, 90);


/*
   Setelah loading selesai,
   buka website utama.
*/

setTimeout(() => {

    if (loadingScreen) {

        loadingScreen.classList.add("hide");

    }

}, 4300);



/* =========================================
   SCROLL REVEAL
   Muncul ketika elemen memasuki
   sekitar 30% bagian bawah viewport.
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0,

            rootMargin:
                "0px 0px -30% 0px"
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =========================================
   NAVBAR ACTIVE SECTION
========================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


const sectionObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.getAttribute(
                            "id"
                        );


                    navLinks.forEach((link) => {

                        link.classList.remove(
                            "active"
                        );


                        const href =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            href ===
                            "#" + currentId
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                }

            });

        },

        {
            threshold: 0.25,

            rootMargin:
                "-15% 0px -55% 0px"
        }

    );


sections.forEach((section) => {

    sectionObserver.observe(section);

});



/* =========================================
   SMOOTH NAVIGATION
========================================= */

navLinks.forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                !targetId.startsWith("#")
            ) {
                return;
            }


            const target =
                document.querySelector(
                    targetId
                );


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});



/* =========================================
   TERMINAL CURSOR EFFECT
========================================= */

const terminalCode =
    document.querySelector(
        ".terminal-code"
    );


if (terminalCode) {

    const cursor =
        document.createElement("span");


    cursor.className =
        "terminal-cursor";


    cursor.textContent =
        "▋";


    terminalCode.appendChild(cursor);


    let cursorVisible = true;


    setInterval(() => {

        cursorVisible =
            !cursorVisible;


        cursor.style.opacity =
            cursorVisible ? "1" : "0";

    }, 500);

}



/* =========================================
   MOUSE GLOW
   Hanya aktif pada perangkat
   yang mempunyai mouse.
========================================= */

if (
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    const mouseGlow =
        document.createElement("div");


    mouseGlow.className =
        "mouse-glow";


    document.body.appendChild(
        mouseGlow
    );


    document.addEventListener(
        "mousemove",
        (event) => {

            mouseGlow.style.left =
                event.clientX + "px";


            mouseGlow.style.top =
                event.clientY + "px";

        }
    );

}



/* =========================================
   PAGE LOADED
========================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);
const musicToggle = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");

if (musicToggle && bgMusic) {

    const musicText = musicToggle.querySelector(".music-text");

    function updateMusicButton() {

        if (!bgMusic.paused) {
            musicToggle.classList.add("active");
            musicText.textContent = "MUSIC ON";
        } else {
            musicToggle.classList.remove("active");
            musicText.textContent = "MUSIC OFF";
        }

    }

    musicToggle.addEventListener("click", () => {

        if (bgMusic.paused) {

            bgMusic.play()
                .then(() => {
                    updateMusicButton();
                })
                .catch(() => {
                    console.log("Music playback was blocked.");
                });

        } else {

            bgMusic.pause();
            updateMusicButton();

        }

    });

    bgMusic.addEventListener("play", updateMusicButton);
    bgMusic.addEventListener("pause", updateMusicButton);

}
