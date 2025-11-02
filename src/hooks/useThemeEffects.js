import { useEffect } from 'react';

const useThemeEffects = (currentTheme) => {
  useEffect(() => {
    console.log('Theme effects hook called with theme:', currentTheme);
    // Clean up previous theme effects
    cleanupThemeEffects();
    
    // Apply theme-specific effects
    switch (currentTheme) {
      case 'rainy-thunderbolt':
        createRaindrops();
        createLightningFlashes();
        break;
      case 'winter-wonderland':
        createSnowflakes();
        break;
      case 'autumn-season':
        createFallingLeaves();
        break;
      case 'summer-on-beach':
        createSummerSun();
        break;
      case 'spring-bloom':
        createFallingPetals();
        break;
      case 'starry-night':
        createStarryNight();
        break;
      default:
        // No special effects for other themes
        break;
    }
    
    // Clean up on unmount or theme change
    return () => {
      cleanupThemeEffects();
    };
  }, [currentTheme]);
};

// Clean up all theme effects
function cleanupThemeEffects() {
  // Clean up rainy theme effects
  const rainContainer = document.getElementById('rain-container');
  const lightningFlash = document.getElementById('lightning-flash');
  
  if (rainContainer) {
    rainContainer.remove();
  }
  
  if (lightningFlash) {
    lightningFlash.remove();
  }
  
  // Clean up winter theme effects
  const snowContainer = document.getElementById('snow-container');
  if (snowContainer) {
    snowContainer.remove();
  }
  
  // Clean up autumn theme effects
  const leavesContainer = document.getElementById('leaves-container');
  if (leavesContainer) {
    leavesContainer.remove();
  }
  
  // Clean up summer theme effects
  const sunRaysContainer = document.getElementById('sun-rays-container');
  if (sunRaysContainer) {
    sunRaysContainer.remove();
  }
  
  // Clean up spring theme effects
  const petalsContainer = document.getElementById('petals-container');
  if (petalsContainer) {
    petalsContainer.remove();
  }
  
  // Clean up starry night theme effects
  const starsContainer = document.getElementById('stars-container');
  if (starsContainer) {
    starsContainer.remove();
  }
  
  // Clean up moon element
  const moonElement = document.querySelector('.moon');
  if (moonElement && moonElement.parentNode) {
    moonElement.parentNode.removeChild(moonElement);
  }
}

// Create raindrops for rainy theme
function createRaindrops() {
  // Remove existing rain container if it exists
  const existingRainContainer = document.getElementById('rain-container');
  if (existingRainContainer) {
    existingRainContainer.remove();
  }
  
  // Create rain container
  const rainContainer = document.createElement('div');
  rainContainer.id = 'rain-container';
  rainContainer.className = 'rain-container';
  document.body.appendChild(rainContainer);
  
  // Create raindrops
  const raindropCount = 150;
  for (let i = 0; i < raindropCount; i++) {
    const raindrop = document.createElement('div');
    raindrop.className = 'rain-drop';
    
    // Random position and animation
    const leftPos = Math.random() * 100;
    const animationDuration = 0.5 + Math.random() * 1.5;
    const animationDelay = Math.random() * 5;
    const opacity = 0.3 + Math.random() * 0.7;
    
    raindrop.style.left = `${leftPos}%`;
    raindrop.style.animationDuration = `${animationDuration}s`;
    raindrop.style.animationDelay = `${animationDelay}s`;
    raindrop.style.opacity = opacity;
    
    rainContainer.appendChild(raindrop);
  }
}

// Create lightning flashes for rainy theme
function createLightningFlashes() {
  // Remove existing lightning container if it exists
  const existingLightning = document.getElementById('lightning-flash');
  if (existingLightning) {
    existingLightning.remove();
  }
  
  // Create lightning flash element
  const lightning = document.createElement('div');
  lightning.id = 'lightning-flash';
  lightning.className = 'lightning-flash';
  document.body.appendChild(lightning);
  
  // Function to trigger lightning flash
  function triggerLightning() {
    lightning.style.animation = 'none';
    setTimeout(() => {
      lightning.style.animation = 'lightning 0.6s ease-out';
    }, 10);
    
    // Schedule next lightning (between 5-20 seconds)
    const nextFlash = 5000 + Math.random() * 15000;
    setTimeout(triggerLightning, nextFlash);
  }
  
  // Start first lightning after a delay
  setTimeout(triggerLightning, 3000);
}

// Create snowflakes for winter theme
function createSnowflakes() {
  // Remove existing snow container if it exists
  const existingSnowContainer = document.getElementById('snow-container');
  if (existingSnowContainer) {
    existingSnowContainer.remove();
  }
  
  // Create snow container
  const snowContainer = document.createElement('div');
  snowContainer.id = 'snow-container';
  snowContainer.className = 'snow-container';
  document.body.appendChild(snowContainer);
  
  // Create snowflakes
  const snowflakeCount = 100;
  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    
    // Random position and animation
    const leftPos = Math.random() * 100;
    const animationDuration = 5 + Math.random() * 10;
    const animationDelay = Math.random() * 5;
    const opacity = 0.3 + Math.random() * 0.7;
    const size = 3 + Math.random() * 6;
    
    snowflake.style.left = `${leftPos}%`;
    snowflake.style.animationDuration = `${animationDuration}s`;
    snowflake.style.animationDelay = `${animationDelay}s`;
    snowflake.style.opacity = opacity;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    
    snowContainer.appendChild(snowflake);
  }
}

// Create falling leaves for autumn theme
function createFallingLeaves() {
  // Remove existing leaves container if it exists
  const existingLeavesContainer = document.getElementById('leaves-container');
  if (existingLeavesContainer) {
    existingLeavesContainer.remove();
  }
  
  // Create leaves container
  const leavesContainer = document.createElement('div');
  leavesContainer.id = 'leaves-container';
  leavesContainer.className = 'leaves-container';
  document.body.appendChild(leavesContainer);
  
  // Create leaves
  const leafCount = 80;
  for (let i = 0; i < leafCount; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    
    // Random position and animation
    const leftPos = Math.random() * 100;
    const animationDuration = 6 + Math.random() * 12;
    const animationDelay = Math.random() * 5;
    const opacity = 0.4 + Math.random() * 0.6;
    const size = 8 + Math.random() * 12;
    
    leaf.style.left = `${leftPos}%`;
    leaf.style.animationDuration = `${animationDuration}s`;
    leaf.style.animationDelay = `${animationDelay}s`;
    leaf.style.opacity = opacity;
    leaf.style.width = `${size}px`;
    leaf.style.height = `${size}px`;
    
    leavesContainer.appendChild(leaf);
  }
}

// Create summer sun for summer theme
function createSummerSun() {
  // Remove existing sun container if it exists
  const existingSunContainer = document.getElementById('sun-rays-container');
  if (existingSunContainer) {
    existingSunContainer.remove();
  }
  
  // Create sun rays container
  const sunRaysContainer = document.createElement('div');
  sunRaysContainer.id = 'sun-rays-container';
  sunRaysContainer.className = 'sun-rays-container';
  document.body.appendChild(sunRaysContainer);
  
  // Create sun element
  const sun = document.createElement('div');
  sun.className = 'sun';
  sunRaysContainer.appendChild(sun);
}

// Create falling petals for spring theme
function createFallingPetals() {
  console.log('Creating falling petals');
  // Remove existing petals container if it exists
  const existingPetalsContainer = document.getElementById('petals-container');
  if (existingPetalsContainer) {
    existingPetalsContainer.remove();
  }
  
  // Create petals container
  const petalsContainer = document.createElement('div');
  petalsContainer.id = 'petals-container';
  petalsContainer.className = 'petals-container';
  document.body.appendChild(petalsContainer);
  console.log('Petals container created');
  
  // Create petals
  const petalCount = 80;
  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    
    // Random position and animation
    const leftPos = Math.random() * 100;
    const animationDuration = 10 + Math.random() * 15;
    const animationDelay = Math.random() * 5;
    const opacity = 0.4 + Math.random() * 0.6;
    const size = 8 + Math.random() * 10;
    
    // Random petal color variations
    const colorVariations = [
      '#ffb6c1', // Light pink
      '#ffc0cb', // Pink
      '#ffb6c1', // Light pink (duplicate for more common color)
      '#ff69b4', // Hot pink
      '#dda0dd'  // Plum
    ];
    const randomColor = colorVariations[Math.floor(Math.random() * colorVariations.length)];
    
    petal.style.left = `${leftPos}%`;
    petal.style.animationDuration = `${animationDuration}s`;
    petal.style.animationDelay = `${animationDelay}s`;
    petal.style.opacity = opacity;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.backgroundColor = randomColor;
    
    // Random horizontal sway amount for more natural movement
    const swayAmount = 10 + Math.random() * 20;
    // This is handled in the CSS animation
    
    petalsContainer.appendChild(petal);
  }
  console.log('Petals created');
}

// Create starry night effects
function createStarryNight() {
  // Remove existing stars container if it exists
  const existingStarsContainer = document.getElementById('stars-container');
  if (existingStarsContainer) {
    existingStarsContainer.remove();
  }
  
  // Create stars container
  const starsContainer = document.createElement('div');
  starsContainer.id = 'stars-container';
  starsContainer.className = 'stars-container';
  document.body.appendChild(starsContainer);
  
  // Create stars
  const starCount = 150;
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star-night';
    
    // Random position and animation
    const leftPos = Math.random() * 100;
    const topPos = Math.random() * 100;
    const animationDelay = Math.random() * 5;
    const opacity = 0.3 + Math.random() * 0.7;
    const size = 1 + Math.random() * 3;
    
    star.style.left = `${leftPos}%`;
    star.style.top = `${topPos}%`;
    star.style.animationDelay = `${animationDelay}s`;
    star.style.opacity = opacity;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    starsContainer.appendChild(star);
  }
  
  // Create moon
  const existingMoon = document.querySelector('.moon');
  if (!existingMoon) {
    const moon = document.createElement('div');
    moon.className = 'moon';
    document.body.appendChild(moon);
  }
}

export default useThemeEffects;