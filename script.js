let currentPage = 0;
const pages = document.querySelectorAll('.page');
const music = document.getElementById('bg-music');

const animations = ['fade', 'slideLeft', 'zoom', 'rotate', 'fade', 'flip', 'zoom', 'fade'];

function showPage(index) {
  pages.forEach((page, i) => {
    page.style.display = 'none';
    page.classList.remove('animate');
  });

  const current = pages[index];
  current.style.display = 'flex';
  current.classList.add('animate');
  current.style.animationName = animations[index];

  if (index === 0) {
    music.pause();
    music.currentTime = 0;
  } else if (index === 1 && music.paused) {
    music.play();
  }
}

function nextPage() {
  currentPage++;
  if (currentPage >= pages.length) currentPage = pages.length - 1;
  showPage(currentPage);
}

function restart() {
  currentPage = 0;
  showPage(currentPage);
}

document.addEventListener('DOMContentLoaded', () => {
  showPage(currentPage);
});
function createFlower() {
  const container = document.querySelector('.flowers-container');
  const flower = document.createElement('div');
  flower.classList.add('flower');

  // Random position & delay
  flower.style.left = `${Math.random() * 100}%`;
  flower.style.animationDuration = `${4 + Math.random() * 3}s`;
  flower.style.animationDelay = `${Math.random() * 2}s`;

  container.appendChild(flower);

  // Remove after animation
  setTimeout(() => {
    flower.remove();
  }, 8000);
}

// Generate flowers continuously
setInterval(createFlower, 500);
