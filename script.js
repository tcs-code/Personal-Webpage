document.getElementById('alert-button').addEventListener('click', function() {
    alert('Hello, welcome to my page!');
});

document.getElementById('profile-picture').addEventListener('mouseover', function() {
    document.body.style.backgroundColor = '#d1f0f7';
});

document.getElementById('profile-picture').addEventListener('mouseout', function() {
    document.body.style.backgroundColor = '#f4f4f4';
});

document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("favorite-movie");
    const audio = document.getElementById("favorite-song");

    video.addEventListener("play", function () {
        video.classList.add("expanded");
    });

    video.addEventListener("pause", function () {
        video.classList.remove("expanded");
    });

    audio.addEventListener("play", function () {
        audio.classList.add("expanded");
    });

    audio.addEventListener("pause", function () {
        audio.classList.remove("expanded");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("favorite-song");
    const cdImage = document.getElementById("cd-image");

    audio.addEventListener("play", function () {
        cdImage.classList.add("rotating"); // Start rotation
    });

    audio.addEventListener("pause", function () {
        cdImage.classList.remove("rotating"); // Stop rotation
    });

    audio.addEventListener("ended", function () {
        cdImage.classList.remove("rotating"); // Stop rotation when song ends
    });
});
