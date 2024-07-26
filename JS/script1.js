document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
  });

  // Initial theme check
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
  } else {
    body.classList.add('light-mode');
  }

  // JavaScript for modal functionality
  const modal = document.getElementById('modal');
  const modalClose = document.querySelector('.modal-close');
  const modalRecipeTitle = document.getElementById('modal-recipe-title');
  const modalRecipeDescription = document.getElementById('modal-recipe-description');

  const procedureLinks = document.querySelectorAll('.procedure-link');
  const procedureContentSection = document.getElementById('procedure-content');

  procedureLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const recipe = link.getAttribute('data-recipe');
      const description = link.getAttribute('data-description');

      // Update the modal content
      modalRecipeTitle.textContent = recipe;
      modalRecipeDescription.textContent = description;
      modal.style.display = 'block'; // Show the modal
      body.classList.add('modal-open'); // Add class to apply blur effect

      // Update the procedure content section
      procedureContentSection.innerHTML = `
        <h2 class="text-3xl font-bold mb-4">${recipe} - Procedure</h2>
        <p>${description}</p>
      `;
      procedureContentSection.classList.remove('hidden');
      procedureContentSection.scrollIntoView({ behavior: 'smooth' });

      // Scroll within the procedure content
      const scrollableContent = procedureContentSection.querySelector('p');
      if (scrollableContent) {
        scrollableContent.style.overflowY = 'auto';
        scrollableContent.style.maxHeight = '400px';
      }
    });
  });

  modalClose.addEventListener('click', function() {
    modal.style.display = 'none';
    body.style.overflow = ''; // Enable scrolling
    body.classList.remove('modal-open'); // Remove blur effect class
  });

  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      body.style.overflow = ''; // Enable scrolling
      body.classList.remove('modal-open'); // Remove blur effect class
    }
  });
  

  // Additional modal functionality
  const modal2 = document.getElementById('recipe-modal'); // Adjust ID as needed
  const modalClose2 = document.querySelector('.modal-close2'); // Adjust selector as needed
  const modalRecipeTitle2 = document.getElementById('modal-recipe-title2'); // Adjust ID as needed
  const modalRecipeDescription2 = document.getElementById('modal-recipe-description2'); // Adjust ID as needed

  const procedureLinks2 = document.querySelectorAll('.procedure-link2'); // Adjust selector as needed
  const procedureContentSection2 = document.getElementById('procedure-content2'); // Adjust ID as needed

  procedureLinks2.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const recipe = link.getAttribute('data-recipe');
      const description = link.getAttribute('data-description');

      // Update the modal content
      modalRecipeTitle2.textContent = recipe;
      modalRecipeDescription2.textContent = description;
      modal2.style.display = 'block'; // Show the modal
      body.classList.add('modal-open'); // Add class to apply blur effect

      // Update the procedure content section
      procedureContentSection2.innerHTML = `
        <h2 class="text-3xl font-bold mb-4">${recipe} - Procedure</h2>
        <p>${description}</p>
      `;
      procedureContentSection2.classList.remove('hidden');
      procedureContentSection2.scrollIntoView({ behavior: 'smooth' });

      // Scroll within the procedure content
      const scrollableContent = procedureContentSection2.querySelector('p');
      if (scrollableContent) {
        scrollableContent.style.overflowY = 'auto';
        scrollableContent.style.maxHeight = '400px';
      }
    });
  });

  modalClose2.addEventListener('click', function() {
    modal2.style.display = 'none';
    body.classList.remove('modal-open'); // Remove blur effect class
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal2) {
      modal2.style.display = 'none';
      body.classList.remove('modal-open'); // Remove blur effect class
    }
  });
});

