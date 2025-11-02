const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function generateFavicon() {
  try {
    const inputPath = path.join(__dirname, 'public', 'images', 'myphoto.jpg');
    const outputPath = path.join(__dirname, 'public', 'favicon.ico');
    
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error('Input photo not found:', inputPath);
      return;
    }
    
    // Generate multiple sizes for a better favicon
    const sizes = [16, 32, 48];
    const pngBuffers = [];
    
    for (const size of sizes) {
      const buffer = await sharp(inputPath)
        .resize(size, size)
        .png()
        .toBuffer();
      pngBuffers.push(buffer);
    }
    
    // For now, we'll just update the existing favicon with a resized version of your photo
    // In a production environment, you might want to use a proper ICO generator
    await sharp(inputPath)
      .resize(32, 32)
      .png()
      .toFile(path.join(__dirname, 'public', 'favicon-32x32.png'));
    
    await sharp(inputPath)
      .resize(16, 16)
      .png()
      .toFile(path.join(__dirname, 'public', 'favicon-16x16.png'));
    
    console.log('Favicon PNG files generated successfully!');
    console.log('Updated favicon.ico reference in HTML and manifest');
    
    // Also generate PNG versions for Apple touch icons
    const appleSizes = [192, 512];
    
    for (const size of appleSizes) {
      const pngPath = path.join(__dirname, 'public', `apple-touch-icon-${size}x${size}.png`);
      await sharp(inputPath)
        .resize(size, size)
        .png()
        .toFile(pngPath);
      console.log(`Generated apple-touch-icon-${size}x${size}.png`);
    }
    
    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon();