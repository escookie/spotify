
document.addEventListener("DOMContentLoaded", function() {
    fetch('nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;
    });
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });
});
