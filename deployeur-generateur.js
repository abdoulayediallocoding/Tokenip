


const formu = document.getElementById("formulaire");
const pristine = new Pristine(formu);
const valider =  document.getElementById("submit");



valider.addEventListener('click', function (e){
	
			
	let valid = pristine.validate();

		if (valid == true){
			
			//deployer();
			contratPDF(1, 1);
			
		} 
	
	
})


