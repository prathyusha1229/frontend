document.addEventListener('DOMContentLoaded', function () {
    const turnPageLink = document.getElementById('turnPage');

    // Page-turning effect when clicking the arrow
    turnPageLink.addEventListener('click', function (e) {
        e.preventDefault();

        const nextPageUrl = turnPageLink.getAttribute('href');

        // Adding a class to the body for a smooth transition
        document.body.classList.add('page-turn');

        setTimeout(function () {
            window.location.href = nextPageUrl;
        }, 1000);
    });
});
