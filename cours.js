fetch("cours.json")
.then(r => r.json())
.then(data => {

    const container = document.getElementById("listeCours");

    data.forEach(cours => {

        let html = `
        <div class="carte-cours">
            <h3>${cours.icone} ${cours.titre}</h3>
            <p>${cours.description}</p>

            <a href="${cours.page}" class="btn-principal">
                Voir les leçons
            </a>

            <ul>
        `;

        cours.cours.forEach(pdf => {
            html += `
            <li>
                <a href="${pdf.pdf}" class="btn-secondaire">
                    📥 ${pdf.nom}
                </a>
            </li>`;
        });

        html += `
            </ul>
        </div>`;

        container.innerHTML += html;
    });

});