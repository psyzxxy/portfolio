
// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    }
    // Close mobile menu if open
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  });
});

// Typing effect for name
const nameElement = document.getElementById('name');
const name = nameElement.textContent;
nameElement.textContent = '';
let i = 0;
function typeWriter() {
  if (i < name.length) {
    nameElement.textContent += name.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
}
setTimeout(typeWriter, 1000);

// Modal project details
const modal = document.getElementById('project-modal');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');

function showProjectDetails(projectId) {
  const projects = {
    1: {
      title: "sel and buy using laravel",
      description: "A comprehensive RESTful API designed for e-commerce applications...",
      challenges: "Handling high traffic loads and ensuring data consistency...",
      technologies: ["PHP 8.1", "Laravel 9", "MySQL","Javascript"],
      features: [
        "User authentication and authorization with role-based access control",
        "Product catalog with categories, attributes, and inventory management",
        "Shopping cart and wishlist functionality"s,
        "Real-time inventory updates",
        "Comprehensive admin dashboard",
        "Analytics and reporting"
      ],
      outcome: "The API now handles over 500,000 requests daily with an average response time of 120ms."
    }
  };

  const project = projects[projectId];
  if (project) {
    modalTitle.textContent = project.title;
    const content = `
      <div class="space-y-6">
        <div>
          <h4 class="text-lg font-semibold text-sky-400 mb-2">Description</h4>
          <p class="text-gray-300">${project.description}</p>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-sky-400 mb-2">Challenges & Solutions</h4>
          <p class="text-gray-300">${project.challenges}</p>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-sky-400 mb-2">Technologies Used</h4>
          <div class="flex flex-wrap gap-2">
            ${project.technologies.map(tech => `<span class="bg-gray-700 text-sky-400 px-3 py-1 rounded-full text-sm">${tech}</span>`).join('')}
          </div>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-sky-400 mb-2">Key Features</h4>
          <ul class="list-disc list-inside text-gray-300 space-y-1">
            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-sky-400 mb-2">Outcome</h4>
          <p class="text-gray-300">${project.outcome}</p>
        </div>
      </div>`;
    modalContent.innerHTML = content;
    modal.classList.remove('hidden');
  }
}

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});
