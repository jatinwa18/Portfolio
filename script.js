document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            name: "🌦️ Forecastly",
            description: "Minimal yet powerful—your personal weather assistant.",
            link: "https://github.com/jatinwa18/weather-app",
            demo: "https://jatinwa18.github.io/weather-app"
        },
        {
            name: "🎯 Bubble Hit Game",
            description: "A fun and interactive game to test your reflexes!",
            link: "https://github.com/jatinwa18/bubbleGameJs",
            demo: "https://jatinwa18.github.io/bubbleGameJs"
        },

        {
            name: "📋 To-Do List",
            description: "A simple task manager with local storage.",
            link: "https://github.com/jatinwa18/to-do",
            demo: "https://jatinwa18.github.io/to-do"
        }  
    ];

    const projectsContainer = document.getElementById("projects-container");

    if (projectsContainer) {
        projects.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");

            projectCard.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">GitHub Repo</a>
                <a href="${project.demo}" target="_blank" class="live-demo-btn">Live Demo</a>
            `;

            projectsContainer.appendChild(projectCard);
        });
    } else {
        console.error("❌ Error: 'projects-container' element not found!");
    }
});

