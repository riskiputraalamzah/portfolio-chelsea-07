// 1. Smooth scroll untuk semua link internal (anchor)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))
              .scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // 2. Membuat tombol "Back to Top"
  const backToTop = document.createElement('button');
  backToTop.id = 'backToTop';
  backToTop.textContent = '🔝';  // Emoji untuk tombol back to top
  document.body.appendChild(backToTop);
  
  // Styling dasar tombol "Back to Top" via JS
  backToTop.style.position = 'fixed';
  backToTop.style.bottom = '20px';
  backToTop.style.right = '20px';
  backToTop.style.padding = '10px';
  backToTop.style.border = 'none';
  backToTop.style.borderRadius = '5px';
  backToTop.style.cursor = 'pointer';
  backToTop.style.display = 'none'; // Mulai sembunyikan tombol
  
  // Event listener untuk klik tombol "Back to Top"
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Munculkan tombol jika scroll lebih dari 300px
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
  