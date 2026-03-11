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

/----reveal----/

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
/---cv---/
const cvBtn = document.querySelector('.cv-btn');
cvBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const doc = cvBtn.dataset.doc;
  const modal = document.querySelector('.doc-overlay');
  const iframe = modal.querySelector('iframe');
  iframe.src = doc;
  modal.style.display = 'flex';
});

document.querySelector('.close-doc').addEventListener('click', () => {
  const modal = document.querySelector('.doc-overlay');
  modal.style.display = 'none';
  modal.querySelector('iframe').src = '';
}); 

/----Video controls-----/

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

link.addEventListener("click", function(){

links.forEach(l => l.classList.remove("active"));

this.classList.add("active");

});

});


/*nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-h);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2%;}
nav.scrolled {
  background: rgba(0, 0, 0, 0.6); 
  backdrop-filter: blur(6px);     
}
.nav-links {
  flex: 1;
}
nav a {
  white-space: normal;
}
.nav-links ul li a {
  color: #fff;
  text-decoration: none;
  font-size: clamp(30px, 2vw, 40px);
  font-family: 'Lato', sans-serif;
  position: relative;       
  display: inline-block;
  transition: transform 0.3s ease; 
}


.nav-links ul li a:hover {
  transform: scale(1.1); 
}


.nav-links ul li a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;            
  width: 0%;
  height: 2px;
  background: #e9ecea;
  transition: width 0.3s ease;
}


.nav-links ul li a:hover::after {
  width: 100%;
}


.nav-links ul {
  display: flex;
  flex-wrap: nowrap;    
  align-items: center;
  justify-content: left;
  padding: 0;
  margin: 0;
  gap: 1rem;
}

.nav-links ul li {
  list-style: none;
}
/----constant nav----/
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

*/
