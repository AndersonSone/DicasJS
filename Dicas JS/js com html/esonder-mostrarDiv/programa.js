var btn = document.getElementById('btn-div');
var container = document.querySelector('.container');
btn.addEventListener('click', function() {
    
  if(container.style.display === 'block') {
      container.style.display = 'none';
  } else {
      container.style.display = 'block';
  }
});