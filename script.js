document.addEventListener("DOMContentLoaded", function() {
    // Show overlay ad after 10 seconds
    let video = document.getElementById("customVideo");
    video.addEventListener("play", function() {
        setTimeout(() => {
            document.getElementById("overlayAd").style.display = "block";
        }, 10000);
    });

    // Skip Ad button
    document.getElementById("skipAd").addEventListener("click", function() {
        document.getElementById("overlayAd").style.display = "none";
    });

    // Redirect after video ends
    video.addEventListener("ended", function() {
        window.location.href = "https://your-redirect-link.com";
    });

    // Load recommended posts
    let postsContainer = document.querySelector(".carousel-inner");
    for (let i = 1; i <= 20; i++) {
        let post = document.createElement("div");
        post.classList.add("carousel-item");
        post.innerHTML = `<a href="#"><img src="https://via.placeholder.com/150" alt="Post ${i}"><h4>Post Title ${i}</h4></a>`;
        postsContainer.appendChild(post);
    }
});

// Close Ad function
function closeAd(adId) {
    document.getElementById(adId).style.display = "none";
}
