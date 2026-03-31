let words = ["HTML", "CSS", "JAVA SCRIPT", "BOOTSTRAP 5" , "TAILWIND" , "WORDPRESS"];
let i = 0; 
let j = 0; 
let currentWord = "";
let isDeleting = false;
let speed = 150;

function typeEffect() {
    const target = document.getElementById("typewriter");
    if (!target) return

    currentWord = words[i];

    if (isDeleting) {
        
        target.textContent = currentWord.substring(0, j - 1);
        j--;
        speed = 50; 
    } else {
         
        target.textContent = currentWord.substring(0, j + 1);
        j++;
        speed = 150; 
    }

    if (!isDeleting && j === currentWord.length) {
        isDeleting = true;
        speed = 2000; 
    } 
    
    else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length; 
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);


let projects = [
    { title: "STRICT Project", desc: "A Simple Website and the first Website for me.", tags: ["HTML", "CSS" , "JAVA SCRIPT" ] , image: "headerbg.png" ,link: "onsite/index.html" },
    { title: "Resturante Pizza Project", desc: "Productivity Website for resturante menu to sell product with drag-and-drop features .", tags: ["HTML" , "CSS" , "Java script" , "Bootstrap" , "Tailwind"], image: "food12.jpeg" , link: "onsite3 JS/index.html" },
    { title: "APPEXY. project", desc: "ٍThe Website for building a modern landing page.", tags: ["HTML" , "CSS" , "JAVA SCRIPT" , "BOOTSTRAP" , "TAILWIND"] , image: "counter-bg.c036dffcac6e48daa01f.jpg" , link: "task 1/index.html" }
];

// 2. Render Projects
let container = document.getElementById('projectsContainer');
if (container) {
    projects.forEach(p => {
        container.innerHTML += `
            <div class="col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm project-card p-3">
                <img src="${p.image}" class="card-img-top" alt="${p.title}" style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="fw-bold mb-2">${p.title}</h5>
                        <p class="text-muted small">${p.desc}</p>
                        <a href="${p.link}" class="btn btn-outline-primary mt-auto w-75">View Website</a>
                        <div class="mt-3">
                            ${p.tags.map(t => `<span class="badge bg-primary-subtle text-primary me-1">${t}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

// 3. Dark Mode Toggle
let themeBtn = document.getElementById('themeToggle');
let savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-bs-theme', savedTheme);

if (themeBtn) {
    themeBtn.innerText = savedTheme === 'light' ? '🌙' : '☀️';
    themeBtn.addEventListener('click', () => {
        let current = document.documentElement.getAttribute('data-bs-theme');
        let next = current === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-bs-theme', next);
        localStorage.setItem('theme', next);
        themeBtn.innerText = next === 'light' ? '🌙' : '☀️';
    });
}

// 4. Contact Form Validation
let form = document.getElementById('portfolioForm');
if (form) {
    form.addEventListener('submit', (e) => {
        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            alert("Message sent successfully!");
            form.reset();
            form.classList.remove('was-validated');
        }
        form.classList.add('was-validated');
    }, false);
}


document.addEventListener('DOMContentLoaded', () => {
    let contactForm = document.getElementById('contactForm');
    let successMessage = document.getElementById('successMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Check if form is valid based on HTML5 attributes
            if (!contactForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
           
                event.preventDefault();
                
                // Show success UI
                successMessage.classList.remove('d-none');
                contactForm.classList.add('d-none'); 
                
                
                console.log("Form submitted successfully!");
            }

            // Add Bootstrap validation styles
            contactForm.classList.add('was-validated');
        }, false);
    }
});