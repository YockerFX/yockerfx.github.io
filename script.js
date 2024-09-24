// Function to load the JSON file and generate project cards
fetch('projects.json')
    .then(response => response.json())
    .then(data => generateProjectCards(data));

// Function to generate project cards from JSON data
function generateProjectCards(data) {
    const gallery = document.getElementById("project-gallery");

    data.forEach(project => {
        const card = document.createElement("div");
        card.className = "col-lg-4 project-card";

        const cardHTML = `
            <div class="card card-margin">
                <div class="card-body pt-0">
                    <div class="widget-49">
                        <div class="widget-49-title-wrapper">
                            <div class="widget-49-logo">
                                <img src="${project.companyLogo}" alt="${project.title} logo">
                            </div>
                            <div class="widget-49-project-info">
                                <span class="widget-49-project-title">${project.title}</span>
                                <br>
                                <span class="widget-49-project-time">Completed: ${project.completion_year}</span>
                            </div>
                        </div>
                        <ol class="widget-49-project-description">
                            ${project.description.map(item => `<li class="widget-49-item"><span>${item}</span></li>`).join('')}
                        </ol>
                        <div class="widget-49-project-action">
                            <a href="#" class="company-button">${project.companyName}</a> <!-- Company button first -->
                            <a href="${project.link}" class="btn btn-sm btn-primary">View Project</a> <!-- View Project button second -->
                        </div>
                    </div>
                </div>
            </div>
        `;

        card.innerHTML = cardHTML;
        gallery.appendChild(card);
    });
}

// Search function
function searchProjects() {
    var input, filter, gallery, cards, title, i, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toLowerCase();
    gallery = document.getElementById("project-gallery");
    cards = gallery.getElementsByClassName("project-card");

    for (i = 0; i < cards.length; i++) {
        title = cards[i].getElementsByClassName("widget-49-project-title")[0];
        txtValue = title.textContent || title.innerText;

        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
