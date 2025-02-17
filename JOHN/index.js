const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('toggle');
});
const slide = document.querySelector('.hero');

// Array of images and text
const slides = [
  { image: 'image1.jpg', title: 'Help Create Smiles, Support Cleft Treatment', description: 'Empowering lives through awareness and support.' },
  { image: 'image2.jpg', title: 'Every Child Deserves a Smile', description: 'Join us in raising awareness for cleft conditions.' },
  { image: 'image3.jpg', title: 'Transforming Lives, One Surgery at a Time', description: 'Support our mission to fund cleft surgeries.' },
  { image: 'image4.jpg', title: 'Spread Hope and Joy', description: 'Your donation makes a difference.' },
  { image: 'image5.jpg', title: 'Together for a Better Future', description: 'Create a lasting impact with your support.' },
  { image: 'image6.jpg', title: 'Cleft Awareness Saves Lives', description: 'Share knowledge and empower communities.' },
  { image: 'image7.jpg', title: 'A Journey to Confidence', description: 'Help children regain their smiles.' },
  { image: 'image8.jpg', title: 'Hope Through Surgery', description: 'Make dreams possible with your generosity.' },
  { image: 'image9.jpg', title: 'Give the Gift of a Smile', description: 'Your kindness creates miracles.' },
  { image: 'image10.jpg', title: 'Stand With Us Against Cleft Stigma', description: 'Support awareness and education programs.' },
];

// Function to cycle through slides
let currentSlide = 0;

function changeSlide() {
  const { image, title, description } = slides[currentSlide];
  slide.style.backgroundImage = `url(${image})`;
  document.querySelector('.slide-title').textContent = title;
  document.querySelector('.slide-description').textContent = description;

  currentSlide = (currentSlide + 1) % slides.length;
}

// Automatically change slides every 10 seconds
changeSlide(); // Show the first slide immediately
setInterval(changeSlide, 10000);
// Scroll Animation
// Reveal team members on scroll
function revealTeamMembers() {
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
      const memberTop = member.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (memberTop < windowHeight - 100) {
        member.classList.add('reveal');
      }
    });
  }
  
  window.addEventListener('scroll', revealTeamMembers);