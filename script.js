document.addEventListener("DOMContentLoaded", function () {
    let contentContainer = document.getElementById("auto-load-content");

    function loadMoreArticles() {
        let newArticle = document.createElement("article");
        newArticle.classList.add("blog-post");
        newArticle.innerHTML = `
            <h2>New Article Loaded</h2>
            <p class="meta">Published: March 4, 2025 - by Jane Doe</p>
            <img class="article-image" src="images/article2.jpg" alt="New Article">
            <p>This is an auto-loaded article about the latest tech trends...</p>
        `;
        contentContainer.appendChild(newArticle);
    }

    window.addEventListener("scroll", function () {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
            loadMoreArticles();
        }
    });
});
