function contratPDF(prix, commission) {


    let nom = document.getElementById("nom").value;

    let prenom = document.getElementById("prenom").value;

    let oeuvre = document.getElementById("description").value;

    //let prix = document.getElementById("prix").value;

    //let commission = document.getElementById("royalties").value;
	
    let compteEthereum = accounts[0];
	
	let date =  new Date();
	
	let docDefinition = {

        content: [

            {
                text: [

                    {
                        text: "CONTRAT DE CESSION DE DROITS D’AUTEUR \n\n\n",
                        alignment: 'center',
                        bold: true
                    },
                    
					
                    {
                        text: "Définitions \n\n",
                        alignment: 'left',
                        bold: true
                    },
                    
                    {
                        text: "La Blockchain : désigne le dispositif d'enregistrement électronique partagé test d'Ethereum (Ropsten) ; dans sa version implémentée par le client logiciel go-ethereum.\n\n",
                        alignment: 'left'
                    },
                    
                    {
                        text: "Le Créateur : désigne la personne, physique ou morale, créatrice de l'oeuvre ( la Création) dont les droits sont cédés. Elle est titulaire des droits patrimoniaux et extra-patrimoniaux sur celle-ci et de l'adresse Blockchain suivante: ",
                        alignment: 'left'
                    },

                    {
                        text: compteEthereum
                    },
					
					{
                        text: "\n\n"
                    },
                    
                    {
                        text: "Le Jeton : désigne l'actif numérique, émis, inscrit, et transférable dans la Blockchain. La fonction ownerOf(1) de son registre permet de déterminer l'adresse Blockchain détentrice du Jeton. Le registre indiquant la propriété du Jeton est déployé dans la Blockchain à l'adresse suivante : ",
                        alignment: 'left'
                    },
                    {
                        text: addresseSmartcontract
                    },
					{
                        text: "\n\n", 
                    },
					
                    {
                        text: "La Création : désigne l’œuvre de l'esprit produite par le Créateur. \n\n",
                        alignment: 'left'
                    },
                    
                    {
                        text: "Le Détenteur : désigne la personne, physique ou morale, titulaire de l'adresse Blockchain que la fonction ownerOf(1) du registre indique être détentrice du Jeton.\n\n\n",
                        alignment: 'left',
						pageBreak : "after"
                    },

					{
                        text: "Etant préalablement rappelé que : \n\n",
                        alignment: 'left',
						bold: true
                    },
                    {
                        text: [
                            "Le Créateur, ci-dénommé : ",
                            nom,
							" ",
                            prenom,
                            "\n\n",
                            "A réalisé l'œuvre de l'esprit suivante : ",
                            oeuvre,
                            " (ci-après la « Création »).",
							"\n\n",
							"La Création est identifiée par l'empreinte numérique suivante (hash 256) : ",
							hashOeuvre,
                            "\n\n",
                            "Le Créateur entend permettre la cession de ses droits d'auteurs à travers la Blokchain. Pour cela, il a déployé le Jeton dont la détention constitue la seule forme d'acceptation au présent contrat. \n\n",
							"Ainsi, toute au personne que le Créateur qui est  Détenteur du Jeton, doit être considérée comme le cessionnaire de la présente cession de droits d'auteurs.\n\n\n",
                             
                            
                        ]
                    },

					{
                        text: "Il a été convenu et arrêté ce qui suit : \n\n\n",
                        alignment: 'left',
						bold : true
                    },
                    {
                        text: "1. Objet de la cession \n\n",
                        alignment: 'left',
						bold : true
                    },

                    {
                        text: ["Par les présentes, le Créateur cède au Détenteur, sans restriction ni réserve, les droits d’auteur ci-après énumérés, à savoir : \n\n",

                            "le droit de reproduire sa Création, en totalité ou en partie, en tout format, sur tout support notamment imprimé, magnétique, électronique et numérique, sur tout produit, de quelque nature qu’il soit et par tout procédé matériel ou immatériel, existants ou à venir, prévisibles ou imprévisibles ; \n\n",

                            "le droit de fabriquer ou faire fabriquer, éditer, distribuer, diffuser et commercialiser sa Création, en autant d’exemplaires qu’il plaira au Détenteur, en tout ou en partie et dans tous circuits de commercialisation ;\n\n",

                            "le droit de représenter publiquement sa Création, en totalité ou en partie, en tout lieu physique, à travers tous médias, tous réseaux informatiques et tous moyens de diffusion, de quelque nature qu’ils soient, existants ou à venir, prévisibles ou imprévisibles, tels que, sans que cette liste soit limitative, par internet, téléphonie mobile et télédiffusion; \n\n",

                            "le droit d’adapter, traduire, modifier, arranger, transformer et corriger sa Création, notamment, sans que cette liste soit limitative, à travers la retouche, le recadrage, le changement de format ou de couleurs sa Création ou encore l’apposition sur celles-ci, par le Détenteur, de son nom, de sa marque et de son logo, pour tenir compte en particulier de contraintes techniques, matérielles ou commerciales ou pour tout autre motif légitime, sous réserve du respect du droit moral du Créateur,\n\n",

                            "le droit d’utiliser sa Création, en totalité ou en partie, afin de les associer avec, incorporer dans ou exploiter à travers, sans que cette liste soit limitative, tous éléments visuels, sonores et/ou textuels et tous produits, notamment tous produits multimédia ou audiovisuels, sites internet, jeux, applications ;\n\n",

                            "le droit d’utiliser tout ou partie sa Création aux fins d’exploitations dérivées (communément désignées sous le nom de « merchandising »), notamment en vue de fabriquer et diffuser des produits commerciaux, de quelque nature que ce soit, et de les distribuer, en particulier dans les domaines des jeux, jouets, objets ou œuvres d'art plastique ou arts appliqués, papeterie, bureautique, fonds d’écran, articles de bureau, habillement, ameublement, articles de décoration, arts de la table, toilette, hygiène, alimentation ; \n\n",

                            "Cette cession, consentie à titre exclusif, vaut pour toute la durée légale du droit d'auteur et pour le monde entier.\n\n\n"
                        ]
                    },

                    {
                        text: "2. Objet de la cession \n\n",
                        alignment: 'left',
						bold : true
                    },

                    {
                        text: ["Le Créateur garantit au Détenteur la jouissance entière et paisible des droits cédés contre tous troubles, actions revendications ou évictions quelconques. \n\n",

                            "Il garantit ainsi notamment au Détenteur qu’il dispose de tous les droits et autorisations nécessaires pour consentir la présente cession et que sa Création ne contient rien qui puisse tomber sous le coup des lois et règlements relatifs notamment à la contrefaçon, la concurrence déloyale, la vie privée, le droit à l'image, les droits de la personnalité et plus généralement, contrevenir aux droits des tiers.\n\n",

                            "Le Créateur garantit le Détenteur contre toutes plaintes, réclamations et/ou revendications quelconques de la part d’un tiers que le Détenteur pourrait subir du fait de la violation, par Le Créateur, des garanties ci-dessus. Il s’engage à indemniser le Détenteur de tout préjudice qu’il subirait et à lui payer tous les frais, indemnités, charges et/ou condamnations qu’il pourrait avoir à supporter de ce fait. \n\n\n"
                        ]
                    },


                    {
                        text: "3. Paiement \n\n",
                        alignment: 'left',
						bold : true
                    },

                    {
                        text: ["En contrepartie de la cession des droits d’auteur, le Détenteur verse au Créateur une rémunération forfaitaire d’un montant de ",

                            prix,

                            " euros.\n\n ",

                            "Par la suite, le Détenteur peut revendre ses droits à des tiers au prix auquel il l'entend. Il s'engage toutefois à verser une commission de ",

                            commission,

                            " % au Créateur sur la vente. \n\n",

                            "Modalités de paiement : \n\n",

                            "Le paiement au Créateur est effectué par un transfert d'ethers, unité monétaire virtuelle de la Blockchain, vers son adresse Blockchain. \n\n\n",

                            
                        ]
                    },

                    {
                        text: "4. Cession de contrat à des tiers \n\n",
                        alignment: 'left',
						bold : true
                    },

                    {
                        text: ["Le Créateur autorise à ce que le Détenteur cède sa qualité de partie au présent contrat à un tiers. \n\n",

                            "La détention du Jeton par le tiers vaut acceptation par ce dernier aux stipulations des présentes.\n\n",

                            "Il est alors Détenteur du Jeton et peut à son tour céder sa qualité de Partie au présent contrat. \n\n\n"
                        ]
                    },

                    {
                        text: "5. Loi applicable et juridiction \n\n",
                        alignment: 'left',
						bold : true
                    },

                    {
                        text: ["Le présent contrat est soumis au droit français et sera régi et interprété selon ce droit. \n\n",

                            "Tout litige pouvant naître à l'occasion de sa validité, de son interprétation ou de son exécution sera soumis à la compétence exclusive des Tribunaux de Paris, sauf règle de procédure impérative contraire.\n\n\n"
                        ]
                    },
					
					
					
					{
                        text: "ACTE DE CESSION DE CONTRAT\n\n\n",
                        alignment: 'center',
						bold : true
                    },

                    {
                        text: ["Conformément à l'article 1216 du code civil, le présent acte vaut constatation écrite de la cession de contrat opérant lorsque le Détenteur transfère le Jeton à un tiers. \n\n", 

							"Par cette opération, le Détenteur du Jeton cède au tiers sa qualité de partie au contrat de cession de droits d'auteur ci-dessus mentionné. \n\n",		

							"L'acceptation à cet acte de cession ne peut prendre que la forme suivante : \n\n",

							"-	Pour le tiers cessionnaire, elle consiste à utiliser la fonction buyDA() du Jeton pour l'acheter et en devenir le détenteur.\n\n",

							"-	Pour le Détenteur du Jeton, elle consiste à approuver l'adresse du tiers cessionnaire dans la Blockchain afin qu'il puisse détenir le Jeton.\n\n",

							"Lorsque ces deux conditions sont remplies, le tiers et le Détenteur  sont réputés avoir consenti à la présente cession de contrat.\n\n",

							"Le tiers cessionnaire devient alors partie au contrat de cession de droits d'auteur ci-dessus mentionné en tant que Détenteur du Jeton."	
				
                            
                        ]
                    },
					
					
					
					
					
					
					
					
                ]
            }

        ]



    }


    const pdfDocGenerator = pdfMake.createPdf(docDefinition);

	return new Promise(function (resolve, reject) {

	
	pdfDocGenerator.telecharger().then((blob)=> {
		
		
		blob.lastModifiedDate =  new Date();
		blob.name = "contrat-cession-da"
		
		var reader = new FileReader();
		reader.readAsArrayBuffer(blob);
		
			reader.onload = function () {
				
				
				var file_result = this.result; // this == reader, get the loaded file "result"
				var file_wordArr = CryptoJS.lib.WordArray.create(file_result); //convert blob to WordArray , see https://code.google.com/p/crypto-js/issues/detail?id=67
				var sha256_hash = CryptoJS.SHA256(file_wordArr); //calculate SHA1 hash
				var Hash = sha256_hash.toString(); //output result
				saveAs(blob);
				resolve (Hash);




			};
		
		
	});
	
	


		 
	})

		
		
}


	
	
	

	
	
