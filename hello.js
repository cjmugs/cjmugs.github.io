document.addEventListener('DOMContentLoaded', function(){
   document.querySelectorAll('button').forEach(function(button) {
      button.onclick = function (){
          document.querySelector('#color').style.color = button.dataset.color;
      }  
   });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#form1').onsubmit = function() {
        const name = document.querySelector('#name').value;
        alert(`Thank You for all of your personal information, ${name}!`);
    };
});