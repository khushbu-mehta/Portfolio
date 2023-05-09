// Get the container and wrapper elements
const container = document.querySelector('.container');
const wrapper = document.querySelector('.wrapper');
const images = document.querySelectorAll('.image');

// Add a click event listener to each image
images.forEach((image) => {
  image.addEventListener('click', (event) => {
    event.preventDefault();
    window.open(image.querySelector('a').href, '_blank');
  });
});

// Add a scroll event listener to the container
container.addEventListener('scroll', () => {
  // Get the wrapper height
  const wrapperHeight = wrapper.scrollHeight;

  // Calculate the visible area height
  const visibleAreaHeight = container.offsetHeight;

  // Calculate the current scroll position
  const scrollPosition = container.scrollTop;

  // Calculate the maximum scroll position
  const maxScrollPosition = wrapperHeight - visibleAreaHeight;

  // Calculate the index of the visible image
  const visibleImageIndex = Math.floor(scrollPosition / visibleAreaHeight);

  // Calculate the transform value for the wrapper
  const transformValue = `translateY(-${visibleImageIndex * 100}%)`;

  // Update the wrapper transform style
  wrapper.style.transform = transformValue;

  // Add a visible class to the wrapper to show only the visible image
  wrapper.classList.add('visible');

  // Check if the user has reached the end of the wrapper
  if (scrollPosition >= maxScrollPosition) {
    // Remove the visible class to show all images
    wrapper.classList.remove('visible');
  }
});

// const images = document.querySelectorAll('.portfolio-image');
// const dialogueBoxes = document.querySelectorAll('.dialogue-box');

// images.forEach((image, index) => {
//   image.addEventListener('click', () => {
//     window.open(image.dataset.link, '_blank');
//   });

//   image.addEventListener('load', () => {
//     dialogueBoxes[index].style.width = `${image.offsetWidth}px`;
//   });
// });

// window.addEventListener('scroll', () => {
//   const viewportHeight = window.innerHeight;
//   const imageWrappers = document.querySelectorAll('.image-wrapper');

//   imageWrappers.forEach((wrapper, index) => {
//     const rect = wrapper.getBoundingClientRect();
//     if (rect.bottom >= 0 && rect.top < viewportHeight) {
//       wrapper.classList.add('active');
//     }
//   });
// });