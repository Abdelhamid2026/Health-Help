function analyserSymptomes() {

    const texte = document
        .getElementById("symptomes")
        .value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const resultat = document.getElementById("resultat");

    if (texte.trim() === "") {

        resultat.innerHTML = `
            <div class="resultat-box">
                <h2>⚠️ Information</h2>

                <p>
                    Veuillez décrire vos symptômes.
                </p>
            </div>
        `;

        return;
    }


    // ==========================================
    // RECHERCHE DES SYMPTÔMES
    // ==========================================

    let symptomesTrouves = [];


    // FIÈVRE / TEMPÉRATURE
    if (
        texte.includes("fievre") ||
        texte.includes("temperature") ||
        texte.includes("tres chaud") ||
        texte.includes("tres chaude") ||
        texte.includes("chaud") ||
        texte.includes("chaude") ||
        texte.includes("corps chaud") ||
        texte.includes("temperature elevee")
    ) {

        symptomesTrouves.push("temperature élevée");
    }


    // MAL DE TÊTE
    if (
        texte.includes("mal de tete") ||
        texte.includes("douleur a la tete") ||
        texte.includes("douleur tete") ||
        texte.includes("tete qui fait mal") ||
        texte.includes("migraine") ||
        texte.includes("mal au crane") ||
        texte.includes("douleur au crane")
    ) {

        symptomesTrouves.push("mal de tête");
    }


    // TOUX
    if (
        texte.includes("toux") ||
        texte.includes("tousse") ||
        texte.includes("je tousse")
    ) {

        symptomesTrouves.push("toux");
    }


    // MAL DE GORGE
    if (
        texte.includes("mal de gorge") ||
        texte.includes("douleur gorge") ||
        texte.includes("gorge douloureuse") ||
        texte.includes("gorge fait mal")
    ) {

        symptomesTrouves.push("mal de gorge");
    }


    // FATIGUE
    if (
        texte.includes("fatigue") ||
        texte.includes("fatiguee") ||
        texte.includes("fatigue") ||
        texte.includes("epuise") ||
        texte.includes("epuisee") ||
        texte.includes("faible") ||
        texte.includes("manque d energie")
    ) {

        symptomesTrouves.push("fatigue");
    }


    // NAUSÉE
    if (
        texte.includes("nausee") ||
        texte.includes("nausees") ||
        texte.includes("envie de vomir")
    ) {

        symptomesTrouves.push("nausées");
    }


    // VOMISSEMENT
    if (
        texte.includes("vomissement") ||
        texte.includes("vomissements") ||
        texte.includes("vomir") ||
        texte.includes("je vomis")
    ) {

        symptomesTrouves.push("vomissements");
    }


    // DIARRHÉE
    if (
        texte.includes("diarrhee") ||
        texte.includes("selles liquides") ||
        texte.includes("selles tres molles")
    ) {

        symptomesTrouves.push("diarrhée");
    }


    // VERTIGES
    if (
        texte.includes("vertige") ||
        texte.includes("vertiges") ||
        texte.includes("tete qui tourne") ||
        texte.includes("je tourne")
    ) {

        symptomesTrouves.push("vertiges");
    }


    // DOULEUR ABDOMINALE
    if (
        texte.includes("mal au ventre") ||
        texte.includes("douleur ventre") ||
        texte.includes("douleur abdominale") ||
        texte.includes("ventre fait mal")
    ) {

        symptomesTrouves.push("douleur abdominale");
    }


    // DIFFICULTÉ À RESPIRER
    if (
        texte.includes("difficulte a respirer") ||
        texte.includes("mal a respirer") ||
        texte.includes("respire mal") ||
        texte.includes("essouffle") ||
        texte.includes("essoufflement")
    ) {

        symptomesTrouves.push("difficulté à respirer");
    }


    // ==========================================
    // AUCUN SYMPTÔME TROUVÉ
    // ==========================================

    if (symptomesTrouves.length === 0) {

        resultat.innerHTML = `

            <div class="resultat-box">

                <h2>🔎 Aucun symptôme reconnu</h2>

                <p>
                    Je n'ai pas reconnu suffisamment de symptômes
                    dans votre description.
                </p>

                <p>
                    Essayez par exemple :
                </p>

                <ul>

                    <li>
                        J'ai de la fièvre et mal à la tête
                    </li>

                    <li>
                        Je tousse et j'ai mal à la gorge
                    </li>

                    <li>
                        J'ai mal au ventre et je vomis
                    </li>

                    <li>
                        Je suis très fatigué et j'ai des vertiges
                    </li>

                </ul>

            </div>

        `;

        return;
    }


    // ==========================================
    // AFFICHER LES SYMPTÔMES
    // ==========================================

    let listeSymptomes = "";

    symptomesTrouves.forEach(function(symptome) {

        listeSymptomes += `
            <li>${symptome}</li>
        `;

    });


    // ==========================================
    // ANALYSE
    // ==========================================

    let causes = [];
    let conseils = [];
    let urgence = [];


    // FIÈVRE
    if (symptomesTrouves.includes("temperature élevée")) {

        causes.push(
            "Infection virale",
            "Infection bactérienne",
            "Déshydratation",
            "Exposition importante à la chaleur"
        );

        conseils.push(
            "Buvez régulièrement de l'eau.",
            "Reposez-vous.",
            "Restez dans un environnement confortable et suffisamment frais.",
            "Surveillez l'évolution de votre température."
        );

        urgence.push(
            "Difficulté à respirer",
            "Confusion ou perte de connaissance",
            "Convulsions",
            "Aggravation rapide de l'état général"
        );
    }


    // MAL DE TÊTE
    if (symptomesTrouves.includes("mal de tête")) {

        causes.push(
            "Fatigue",
            "Déshydratation",
            "Stress",
            "Manque de sommeil",
            "Certaines infections"
        );

        conseils.push(
            "Reposez-vous dans un endroit calme.",
            "Buvez suffisamment d'eau.",
            "Essayez de dormir suffisamment."
        );

        urgence.push(
            "Mal de tête soudain et extrêmement intense",
            "Confusion",
            "Perte de connaissance",
            "Trouble neurologique"
        );
    }


    // TOUX
    if (symptomesTrouves.includes("toux")) {

        causes.push(
            "Infection respiratoire",
            "Allergie",
            "Irritation des voies respiratoires"
        );

        conseils.push(
            "Buvez suffisamment.",
            "Évitez la fumée et les irritants.",
            "Reposez-vous."
        );

        urgence.push(
            "Difficulté importante à respirer",
            "Coloration bleutée des lèvres",
            "Douleur importante à la poitrine"
        );
    }


    // MAL DE GORGE
    if (symptomesTrouves.includes("mal de gorge")) {

        causes.push(
            "Infection virale",
            "Infection bactérienne",
            "Irritation de la gorge"
        );

        conseils.push(
            "Buvez régulièrement.",
            "Évitez les irritants comme la fumée.",
            "Reposez-vous."
        );
    }


    // FATIGUE
    if (symptomesTrouves.includes("fatigue")) {

        causes.push(
            "Manque de sommeil",
            "Stress",
            "Déshydratation",
            "Infection"
        );

        conseils.push(
            "Dormez suffisamment.",
            "Buvez régulièrement.",
            "Prenez du repos."
        );
    }


    // NAUSÉES
    if (symptomesTrouves.includes("nausées")) {

        causes.push(
            "Trouble digestif",
            "Infection digestive",
            "Déshydratation",
            "Certaines autres affections"
        );

        conseils.push(
            "Buvez régulièrement en petites quantités.",
            "Reposez-vous.",
            "Évitez les repas très lourds si vous vous sentez nauséeux."
        );
    }


    // VOMISSEMENTS
    if (symptomesTrouves.includes("vomissements")) {

        causes.push(
            "Infection digestive",
            "Intoxication alimentaire",
            "Trouble digestif"
        );

        conseils.push(
            "Buvez de petites quantités de liquide régulièrement.",
            "Surveillez les signes de déshydratation."
        );

        urgence.push(
            "Vomissements répétés empêchant de boire",
            "Signes importants de déshydratation",
            "Sang dans les vomissements"
        );
    }


    // DIARRHÉE
    if (symptomesTrouves.includes("diarrhée")) {

        causes.push(
            "Infection digestive",
            "Aliment contaminé",
            "Certains médicaments ou troubles digestifs"
        );

        conseils.push(
            "Buvez régulièrement.",
            "Surveillez les signes de déshydratation."
        );

        urgence.push(
            "Sang dans les selles",
            "Déshydratation importante",
            "Aggravation importante de l'état général"
        );
    }


    // VERTIGES
    if (symptomesTrouves.includes("vertiges")) {

        causes.push(
            "Déshydratation",
            "Fatigue",
            "Baisse de tension",
            "Trouble de l'équilibre"
        );

        conseils.push(
            "Asseyez-vous ou allongez-vous si vous êtes étourdi.",
            "Buvez de l'eau.",
            "Évitez de conduire si vous êtes très étourdi."
        );

        urgence.push(
            "Perte de connaissance",
            "Difficulté à parler",
            "Faiblesse d'un côté du corps",
            "Douleur thoracique"
        );
    }


    // DOULEUR ABDOMINALE
    if (symptomesTrouves.includes("douleur abdominale")) {

        causes.push(
            "Trouble digestif",
            "Infection digestive",
            "Constipation",
            "Autres causes abdominales"
        );

        conseils.push(
            "Reposez-vous.",
            "Buvez suffisamment.",
            "Surveillez l'évolution de la douleur."
        );

        urgence.push(
            "Douleur très intense",
            "Douleur qui s'aggrave rapidement",
            "Sang dans les selles ou vomissements",
            "Perte de connaissance"
        );
    }


    // DIFFICULTÉ À RESPIRER
    if (symptomesTrouves.includes("difficulté à respirer")) {

        causes.push(
            "Infection respiratoire",
            "Asthme",
            "Réaction allergique",
            "Autres problèmes respiratoires"
        );

        urgence.push(
            "Difficulté importante ou soudaine à respirer",
            "Lèvres ou visage bleutés",
            "Douleur thoracique",
            "Perte de connaissance"
        );
    }


    // ==========================================
    // SUPPRIMER LES DOUBLONS
    // ==========================================

    causes = [...new Set(causes)];
    conseils = [...new Set(conseils)];
    urgence = [...new Set(urgence)];


    // ==========================================
    // CRÉER LES LISTES HTML
    // ==========================================

    let listeCauses = "";

    causes.forEach(function(cause) {

        listeCauses += `
            <li>${cause}</li>
        `;

    });


    let listeConseils = "";

    conseils.forEach(function(conseil) {

        listeConseils += `
            <li>${conseil}</li>
        `;

    });


    let listeUrgence = "";

    urgence.forEach(function(element) {

        listeUrgence += `
            <li>${element}</li>
        `;

    });


    // ==========================================
    // AFFICHER LE RESULTAT
    // ==========================================

    resultat.innerHTML = `

        <div class="resultat-box">

            <h2>🔎 Résultat de l'analyse</h2>


            <h3>Symptômes détectés</h3>

            <ul>
                ${listeSymptomes}
            </ul>


            <h3>Causes possibles</h3>

            <ul>
                ${listeCauses}
            </ul>


            <h3>Conseils généraux</h3>

            <ul>
                ${listeConseils}
            </ul>


            ${
                urgence.length > 0
                ?

                `
                <div class="urgence">

                    <h3>
                        ⚠️ Consultez rapidement si vous présentez :
                    </h3>

                    <ul>
                        ${listeUrgence}
                    </ul>

                </div>
                `

                :

                ""
            }


            <h3>💊 Concernant les médicaments</h3>

            <p>
                Cette analyse ne permet pas de déterminer
                quel médicament vous convient. Demandez conseil
                à un médecin ou à un pharmacien avant de prendre
                un médicament, surtout chez l'enfant, pendant
                la grossesse ou en cas de maladie chronique
                ou de traitement en cours.
            </p>


            <p style="margin-top: 20px;">

                <strong>
                    Important :
                </strong>

                Ces informations sont générales et ne constituent
                pas un diagnostic médical.

            </p>

        </div>

    `;
}
