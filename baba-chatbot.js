const botui = new BotUI('baba-chatbot'); // instanciation du chatbot

let informationsTemplate = {}; // objet recueillant les réponses de l'utilisateur pour remplir template

//supprime lla div contenant la présentation du chatbot pour les versions mobiles (écran < 400px)

let divPres = document.getElementsByClassName("presentation")[0];
if (window.screen.width <= 400) {

    divPres.remove();
}

// introduction du chat
function init() {
    botui.message.add({
            type: 'html',
            content: "Bonjour, je suis Baba, un robot juridique qui vous aide à faire jouer votre garantie légale de conformité. Comment vous appelez-vous ?"
        })
        .then(function() { // 
            botui.action.text({
                    action: {
                        delay: 1000,
                        placeholder: "Entrez votre prénom et votre nom de famille",
                        size: 100
                    }
                })
                .then(function(res) { 
				
                    informationsTemplate.nom = res.value; 
					
                    botui.message.add({
                            delay: 1000,
                            type: 'html',
                            content: "Enchanté " + res.value + " !"

                        })
                        .then(function(res) { // 
                            botui.message.add({
                                    delay: 1000,
                                    content: "Dites-moi, avez-vous acheté votre bien neuf ou d'occasion ?"

                                })
                                .then(function() {
                                    botui.action.button({
                                            delay: 1000,
                                            action: [{
                                                    text: 'neuf',
                                                    value: 'neuf'
                                                },
                                                {
                                                    text: 'occasion',
                                                    value: 'occasion'
                                                }
                                            ]
                                        })
                                        .then(function(res) {

                                            informationsTemplate.etatBien = res.value;
											
											// selon que value = neuf ou occasion, démarre la fonction siNeuf ou siOccasion
                                            if (res.value == 'neuf') {
                                                siNeuf();
                                            } else {
                                                siOccasion();
                                            }
                                        })
                                })
                        })
                })
        })
}

function siNeuf() {
    botui.message.add({
            delay: 1000,
            content: "D'accord, depuis combien de temps avez-vous ce produit ?"
        })
        .then(function() {
            botui.action.button({
                    delay: 1000,
                    action: [{
                            text: 'plus de deux ans ',
                            value: 'plus-deux-ans'
                        },
                        {
                            text: 'moins de deux ans',
                            value: "moins-deux-ans"
                        }
                    ]
                })
                .then(function(res) {
                    if (res.value == "moins-deux-ans") {
                        nomProduit();
                    } else {
                        pasGarantie();
                    }
                })
        })
}

//path si value = occasion

function siOccasion() {
    botui.message.add({
            delay: 1000,
            content: "D'accord, depuis combien de temps avez-vous ce produit ?"
        })
        .then(function() {
            botui.action.button({
                    delay: 1000,
                    action: [{
                            text: 'plus de deux ans ',
                            value: 'plus-deux-ans'
                        },
                        {
                            text: 'moins de deux ans',
                            value: "moins-deux-ans"
                        }
                    ]
                })
                .then(function(res) {
                    if (res.value == "moins-deux-ans") {
						
                        apparitionProblemeOccasion();
                    } else {
						// si détention du bien > 2 ans, garantie ne joue pas
                        pasGarantie();
                    }
                })
        })
}

// fonction unique au path occasion :a quel moment l'utilisateur a rencontré un problème avec son bien d'occasion
function apparitionProblemeOccasion() {

    botui.message.add({
            delay: 1000,
            content: "Quand avez-vous rencontré un problème avec votre produit ?"
        })
        .then(function() {
            botui.action.button({

                    delay: 1000,
                    action: [{
                            text: "dans les 6 mois après l'avoir eu",
                            value: 'dans-six-mois'
                        },
                        {
                            text: "plus de 6 mois après l'avoir eu",
                            value: "six-mois-apres"
                        }
                    ]
                })
                .then(function(res) {

                    if (res.value == "dans-six-mois") {
                        nomProduit();
                    } else {
						// si probleme avec bien est apparru > 6 mois, garantie ne joue pas
                        pasGarantie();
                    }
                })
        })


}

function nomProduit() {

    botui.message.add({
            delay: 1000,
            content: "Comment s'appelle ce produit ?"
        })
        .then(function() {
            botui.action.text({
                    delay: 1000,
                    action: {
                        placeholder: "Décrivez précisément le nom du produit",
                        sub_type: 'textarea',
                        size: '100'
                    }
                })
                .then(function(res) {
                    informationsTemplate.nomProduit = res.value;
                    defautConformite();
                })

        })



}


function defautConformite() {

	// arrivée cette question, créé une div où sont présentés des exemples de défaut de conformité
    InfoDefautConformite();
  

    botui.message.add({
            delay: 1000,
            content: "Qu'est-ce qui ne va pas avec votre produit ?"
        })


        .then(function() {

            botui.action.text({
                    delay: 1000,
                    action: {
                        placeholder: "Décrivez précisément le défaut de conformité",
                        sub_type: 'textarea',
                        size: '100'
                    }
                })
                .then(function(res) {
                    informationsTemplate.anomalie = res.value;
                    reparerRemplacer();

                })

        })


}


function reparerRemplacer() {


    botui.message.add({
            delay: 1000,
            content: "Souhaitez-vous qu'il soit réparé ou remplacé ?"
        })
        .then(function() {
            botui.action.button({
                    action: [{
                            text: 'réparé',
                            value: 'réparation'
                        },
                        {
                            text: 'remplacé',
                            value: "remplacement"
                        }
                    ]
                })
                .then(function(res) {
                    informationsTemplate.reparerRemplacer = res.value;
                    votreAdresse();
                })

        })
}



function votreAdresse() {

    botui.message.add({
            delay: 1000,
            content: "Quelle est votre adresse ?"
        })
        .then(function() {
            botui.action.text({
                    delay: 1000,
                    action: {
                        placeholder: "Indiquez votre adresse complète : adresse, ville, code postal",
                        sub_type: 'textarea',
                        size: '100'
                    }
                })
                .then(function(res) {
                    informationsTemplate.votreAdresse = res.value;
                    nomVendeur();
                })


        })
}




function nomVendeur() {

    botui.message.add({
            delay: 1000,
            content: "Comment s'appelle l'entreprise qui vous a vendu le produit ?"
        })
        .then(function() {
            botui.action.text({
                    delay: 1000,
                    action: {
                        placeholder: "Indiquez le nom de l'entreprise venderesse",
                        sub_type: 'textarea',
                        size: '50'
                    }
                })
                .then(function(res) {
                    informationsTemplate.nomVendeur = res.value;
                    adresseVendeur();

                })

        })
}





function adresseVendeur() {

    botui.message.add({
            delay: 1000,
            content: "Quelle est l'adresse de l'entreprise ?"
        })
        .then(function() {
            botui.action.text({
                    action: {
                        placeholder: "Indiquez son adresse complète : adresse, ville, code postal",
                        sub_type: 'textarea',
                        size: '100'
                    }
                })
                .then(function(res) {
                    informationsTemplate.adresseVendeur = res.value;
					garantieApplicable();


                })

        })
}


function garantieApplicable (){
	
	 botui.message.add({
                        loading: true,
                        delay: 1000,
                        content: "Vous semlez remplir les conditions pour bénéficier de la garantie légale de conformité ! "
                    }).then(function() {


                        botui.message.add({
                            delay: 1000,
							type :'html',
                            content: "Vous pouvez vous munir de la facture de votre produit, la photocopier, et l'envoyer (en RAR) avec cette <a href='#' id = 'lePdf'>lettre de mise en demeure</a> à l'entreprise venderesse."
                        })
						.then(function() {
								// fonction créant le pdf personnalisé et permettant son téléchargement
                                lettrePdf();
								//fonction indiquant par une div quelles sont les démarches possibles après avoir envoyé la lettre
                                apresLettre();
                            })
							.then (function () {
								botui.message.add({
								loading: true,
								content: "Au revoir ;)"
							});
								
								
							})
      
                    });
	
	
	
}


function pasGarantie() {
	// fonction indiquant quelle autre alternative dispose l'utilisateur si garantie de conf ne s'applique pas
    garantieCommerciale();
    botui.message.add({
            delay: 1000,
            type: "html",
            content: "Navré ! Vous ne pouvez pas faire jouer la garantie légale de conformité !"
        })
        .then(function() {
            botui.message.add({
                delay: 1000,
                type: "html",
                content: "Mais vous bénéficiez peut être d'une garantie commerciale. Pour plus de renseignements, rendez-vous  <a href ='https://www.service-public.fr/particuliers/vosdroits/F11093'> ici.</a>"
            });
        })

}


init();