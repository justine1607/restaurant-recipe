import express from 'express';
import path from 'path';
import fs from 'fs/promises'; // Use promises version of fs for better async support
import { fileURLToPath } from 'url';
import cors from 'cors';


// Convert __dirname to work with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(cors());
// Middleware to serve JSON files
app.use('/data', express.static(path.join(__dirname, 'src/data')));
app.get('/navigation', async (req, res) => {
    try {
        const navigationPath = path.join(__dirname, 'src/data/navigation.json');
        const navigation = await fs.readFile(navigationPath, 'utf-8');
        res.json(JSON.parse(navigation));
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Error reading data');
    }
});
app.get('/header', async (req, res) => {
    try {
        const heroDataPath = path.join(__dirname, 'src/data/block/header.json');
        const heroData = await fs.readFile(heroDataPath, 'utf-8');
        res.json(JSON.parse(heroData));
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Error reading data');
    }
});
app.get('/specialties', async (req, res) => {
    try {
        const specialtiesDataPath = path.join(__dirname, 'src/data/block/specialties.json');
        const specialtiesData = await fs.readFile(specialtiesDataPath, 'utf-8');
        res.json(JSON.parse(specialtiesData));
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Error reading data');
    }
});
app.get('/slider', async (req, res) => {
    try {
        const sliderDataPath = path.join(__dirname, 'src/data/block/slider.json');
        console.log('Slider data path:', sliderDataPath);const sliderData = await fs.readFile(sliderDataPath, 'utf-8');
        res.json(JSON.parse(sliderData));
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Error reading data');
    }
});
app.get('/our_story', async (req, res) => {
    try {
        const storyDataPath = path.join(__dirname, 'src/data/block/our_story.json');
        console.log('Slider data path:', storyDataPath);const storyData = await fs.readFile(storyDataPath, 'utf-8');
        res.json(JSON.parse(storyData));
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Error reading data');
    }
});
app.get('/main_menu', async (req, res) => {
    try {
        const mainMenuDataPath = path.join(__dirname, 'src/data/block/main_menu.json');
        console.log('Slider data path:', mainMenuDataPath);const mainMenuData = await fs.readFile(mainMenuDataPath, 'utf-8');
        res.json(JSON.parse(mainMenuData));
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Error reading data');
    }
});
app.get('/review', async (req, res) => {
    try {
        const reviewDataPath = path.join(__dirname, 'src/data/block/review.json');
        console.log('Slider data path:', reviewDataPath);const reviewData = await fs.readFile(reviewDataPath, 'utf-8');
        res.json(JSON.parse(reviewData));
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Error reading data');
    }
});
app.get('/chefs', async (req, res) => {
    try {
        const chefsDataPath = path.join(__dirname, 'src/data/block/chefs.json');
        console.log('Slider data path:', chefsDataPath);const chefsData = await fs.readFile(chefsDataPath, 'utf-8');
        res.json(JSON.parse(chefsData));
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Error reading data');
    }
});
app.get('/gallery', async (req, res) => {
    try {
        const galleryDataPath = path.join(__dirname, 'src/data/block/gallery.json');
        console.log('Slider data path:', galleryDataPath);const galleryData = await fs.readFile(galleryDataPath, 'utf-8');
        res.json(JSON.parse(galleryData));
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Error reading data');
    }
});
app.get('/form', async (req, res) => {
    try {
        const formDataPath = path.join(__dirname, 'src/data/block/form.json');
        console.log('Slider data path:', formDataPath);const formData = await fs.readFile(formDataPath, 'utf-8');
        res.json(JSON.parse(formData));
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Error reading data');
    }
});

app.get('/recipe', async (req, res) => {
    try {
        const recipeDataPath = path.join(__dirname, 'src/data/view/recipe.json');
        const recipeData = await fs.readFile(recipeDataPath, 'utf-8');
        res.setHeader('Content-Type', 'application/json'); // Ensure JSON response
        res.json(JSON.parse(recipeData));  // Send JSON data
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Error reading data');
    }
});
app.get('/menus', async (req, res) => {
    try {
        const menusDataPath = path.join(__dirname, 'src/data/view/menu.json');
        const menusData = await fs.readFile(menusDataPath, 'utf-8');
        res.setHeader('Content-Type', 'application/json'); // Ensure JSON response
        res.json(JSON.parse(menusData));  // Send JSON data
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Error reading data');
    }
});


// Define more routes as needed
app.use(express.static(path.join(__dirname, 'dist')));

// Serve index.html for other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
