// If you'd like to add some interactivity, such as opening the links in a new tab
document.querySelector('.btn-outline:nth-child(1)').addEventListener('click', function() {
  window.location.href = 'mailto:your-email@example.com';
});

document.querySelector('.btn-outline:nth-child(2)').addEventListener('click', function() {
  window.open('https://github.com/yourusername', '_blank');
});

document.querySelector('.btn-outline:nth-child(3)').addEventListener('click', function() {
  window.open('https://linkedin.com/in/yourusername', '_blank');
});
