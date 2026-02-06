/----script----/
const campuses = document.querySelectorAll('[data-doc]');
  const modal = document.getElementById('docModal');
  const frame = document.getElementById('docFrame');
  const closeBtn = document.querySelector('.close');
  const downloadBtn = document.getElementById('downloadBtn');
  campuses.forEach(item => {
    item.addEventListener('click', () => {
      const doc = item.getAttribute('data-doc');
      frame.src = doc;
      downloadBtn.href = doc;
      modal.style.display = 'flex';
    });
  });
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    frame.src = '';
  });
/----click----/
document.addEventListener("click", e => {
  const ripple = document.createElement("div");
  ripple.className = "click-ripple";
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  document.body.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
});
/----constant nav----/
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 50);
});
/----reveal----/

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));