document.addEventListener('DOMContentLoaded', function(){
   document.querySelectorAll('button').forEach(function(button) {
      button.onclick = function (){
          document.querySelector('#color').style.color = button.dataset.color;
      }  
   });
});

