document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("go-to-blog").addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = 'sec-index.html';
    });
  });