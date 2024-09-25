// Function to load the JSON file and generate project cards
fetch('projects.json')
    .then(response => response.json())
    .then(data => generateProjectCards(data));

// Function to generate project cards from JSON data
function generateProjectCards(data) {
    const gallery = document.getElementById("project-gallery");

    data.forEach(project => {
        const card = document.createElement("div");
        card.className = "box";

        const cardHTML = `
            <div class="box-top">
                <div class="title-flex">
                    <h3 class="box-title">${project.title}</h3>
                    <p class="user-follow-info">Finished: ${project.completion_year}</p>
                </div>
                <p class="description">${project.description.join(", ")}</p>
                <p class="created">Created for: ${project.companyName}</p>
            </div>
            <div class="button-group">
                <a href="${project.link}" class="button">View Project</a>
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
    cards = gallery.getElementsByClassName("box");

    for (i = 0; i < cards.length; i++) {
        title = cards[i].getElementsByClassName("box-title")[0];
        txtValue = title.textContent || title.innerText;

        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// Function to animate the document title
// Function to animate the document title
function animateTitle(text) {
    let index = 0;
    let isDeleting = false;
    let currentTitle = "| "; // Start with "| "

    function type() {
        if (!isDeleting && index <= text.length) {
            // Add one letter at a time to "| "
            currentTitle = `| ${text.slice(0, index++)}`;
            document.title = currentTitle;
        } else if (isDeleting && index > 0) {
            // Remove one letter at a time but keep "| "
            currentTitle = `| ${text.slice(0, --index)}`;
            document.title = currentTitle;
        }

        // If we've finished typing "YockerFX" and are not deleting, start deleting
        if (index === text.length && !isDeleting) {
            isDeleting = true;
            setTimeout(type, 3000); // Pause before deleting
        }
        // If we're done deleting but "| " is left, start typing again
        else if (index === 0 && isDeleting) {
            isDeleting = false;
            setTimeout(type, 1000); // Pause before re-typing
        } else {
            // Continue typing or deleting
            setTimeout(type, isDeleting ? 250 : 500);
        }
    }

    // Start the typing effect
    type();
}

// Call the function with the desired text
animateTitle("YockerFX ");


