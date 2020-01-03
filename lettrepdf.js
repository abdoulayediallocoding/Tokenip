function lettrePdf() {

    let pronom;
    if (informationsTemplate.reparerRemplacer == "remplacement") {
        pronom = "son";
    } else {
        pronom = "sa";
    }


    let docDefinition = {


        content: [

            {
                text: [{
                        text: informationsTemplate.nom,
                        alignment: 'left'
                    },
                    "\n",
                    {
                        text: informationsTemplate.votreAdresse,
                        alignment: 'left'
                    },
                    "\n",
                    {
                        text: "Destinataire",
                        alignment: 'right',
                        bold: true
                    },
                    "\n",
                    {
                        text: informationsTemplate.nomVendeur,
                        alignment: 'right'
                    },
                    "\n",
                    {
                        text: informationsTemplate.adresseVendeur,
                        alignment: 'right'
                    },
                    "\n\n",
                    {
                        text: "Objet : ",
                        bold: true
                    },
                    {
                        text: "Garantie légale de défaut de conformité - demande de "
                    },
                    {
                        text: [informationsTemplate.reparerRemplacer,
                            "\n\n",
                            "Madame, Monsieur \n\n",
                            "J’ai acheté auprès de vos services le produit suivant : ",
                            informationsTemplate.nomProduit,
                            ". Ce bien présente ces anomalies  : ",
                            informationsTemplate.anomalie,
                            ".",
                            "\n\n",
                            "En tant que vendeur professionnel, vous êtes tenu, aux termes des articles L. 217-4 et suivants du code de la consommation, de le garantir contre ses défauts de conformité. \n\n",
                            " Ces derniers sont présumés être de votre fait lorsqu'ils apparaissent dans un délai de vingt-quatre mois à partir de la délivrance du bien. \n\n",
                            "Ainsi que l'indique la facture ci-jointe à cette lettre, le bien m'a été délivré il y a moins de deux ans ; je vous mets ainsi en demeure de procéder à ",
                            pronom,
                            " ",
                            informationsTemplate.reparerRemplacer,
                            " comme l'impose l'article L217-9 du code de la consommation.\n\n",
                            "En l’absence de réponse positive à ma demande dans un délai d’un mois, l’article L. 217-10 du code de la consommation m'autorise à obtenir la réduction du prix du produit ou l'annulation complète de la vente, avec remboursement des sommes versées. \n\n",
                            "Je vous remercie donc de procéder sans délai à ",
                            pronom,
                            " ",
                            informationsTemplate.reparerRemplacer,
                            ".",
                            "\n\n",
                            "Dans cette attente, je vous prie de croire, Madame, Monsieur, en l’expression de mes sentiments les meilleurs. \n\n"
                        ],
                                           
                            alignment: "justify"
                            
                        

                    },
                    {
                        text: informationsTemplate.nom,
                        alignment: 'center'
                    }




                ],



            }


        ]

    };




    const pdf = pdfMake.createPdf(docDefinition);




    document.getElementById("lePdf").addEventListener('click', function() {

        pdf.download();

    })



}