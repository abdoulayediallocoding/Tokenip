window.onload = function () {

   var formu = document.getElementById("formulaire");

   var pristine = new Pristine(formu);

   formu.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = pristine.validate();
      //alert('Form is valid: ' + valid);

   });


};