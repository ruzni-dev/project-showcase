// Recipe Data - Fixed to show different recipes
const recipes = [
    {
        id: 1,
        title: "Homemade Margherita Pizza",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        time: 30,
        rating: 4.8,
        reviews: 120,
        calories: 420,
        cuisine: "Italian",
        ingredients: [
            "2 1/2 cups all-purpose flour",
            "1 teaspoon salt",
            "1 teaspoon sugar",
            "1 tablespoon active dry yeast",
            "1 cup warm water",
            "2 tablespoons olive oil",
            "1/2 cup tomato sauce",
            "2 cups shredded mozzarella",
            "Fresh basil leaves",
            "Salt and pepper to taste"
        ],
        instructions: [
            "In a large bowl, combine flour, salt, sugar, and yeast. Mix well.",
            "Add warm water and olive oil to the dry ingredients. Stir until a dough forms.",
            "Knead the dough on a floured surface for about 5 minutes until smooth and elastic.",
            "Place dough in a greased bowl, cover, and let rise in a warm place for 1 hour.",
            "Preheat oven to 475°F (245°C). Punch down dough and divide into two balls.",
            "Roll out each ball on a floured surface to form a 12-inch circle.",
            "Transfer dough to a pizza stone or baking sheet. Spread tomato sauce over the dough, leaving a border for the crust.",
            "Sprinkle mozzarella evenly over the sauce. Top with fresh basil leaves.",
            "Bake for 12-15 minutes until crust is golden and cheese is bubbly.",
            "Remove from oven, let cool for 5 minutes, slice, and serve."
        ]
    },
    {
        id: 2,
        title: "Grilled Garlic Butter Steak",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        time: 45,
        rating: 4.9,
        reviews: 95,
        calories: 550,
        cuisine: "American",
        ingredients: [
            "2 ribeye steaks (1.5 inches thick)",
            "4 tablespoons butter, softened",
            "4 garlic cloves, minced",
            "1 tablespoon fresh rosemary, chopped",
            "1 tablespoon olive oil",
            "Salt and freshly ground black pepper",
            "1 teaspoon smoked paprika"
        ],
        instructions: [
            "Remove steaks from refrigerator 30 minutes before cooking.",
            "In a small bowl, mix butter, minced garlic, and rosemary. Set aside.",
            "Pat steaks dry and season generously with salt, pepper, and smoked paprika.",
            "Preheat grill to high heat (about 450-500°F).",
            "Brush steaks with olive oil and place on hot grill.",
            "Grill for 4-5 minutes per side for medium-rare, or until desired doneness.",
            "During last minute of cooking, top each steak with garlic butter.",
            "Remove steaks from grill and let rest for 5-10 minutes before slicing.",
            "Serve with grilled vegetables or your favorite side dish."
        ]
    },
    {
        id: 3,
        title: "Creamy Mushroom Pasta",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        time: 25,
        rating: 4.7,
        reviews: 85,
        calories: 380,
        cuisine: "Italian",
        ingredients: [
            "12 oz fettuccine pasta",
            "2 tablespoons olive oil",
            "3 garlic cloves, minced",
            "1 lb mixed mushrooms, sliced",
            "1 cup heavy cream",
            "1/2 cup grated parmesan cheese",
            "2 tablespoons fresh parsley, chopped",
            "Salt and pepper to taste",
            "Red pepper flakes (optional)"
        ],
        instructions: [
            "Cook pasta according to package directions until al dente. Reserve 1 cup pasta water.",
            "Heat olive oil in a large skillet over medium-high heat.",
            "Add garlic and sauté for 30 seconds until fragrant.",
            "Add mushrooms and cook for 6-8 minutes until golden brown and tender.",
            "Reduce heat to medium and add heavy cream and parmesan cheese. Stir until cheese melts.",
            "Season with salt, pepper, and red pepper flakes if using.",
            "Add cooked pasta to the skillet and toss to coat. Add pasta water as needed to reach desired consistency.",
            "Garnish with fresh parsley and extra parmesan before serving."
        ]
    },
    {
        id: 4,
        title: "California Sushi Rolls",
        image: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        time: 60,
        rating: 4.8,
        reviews: 110,
        calories: 320,
        cuisine: "Japanese",
        ingredients: [
            "2 cups sushi rice, cooked",
            "4 nori sheets",
            "1 avocado, sliced",
            "1 cucumber, julienned",
            "8 imitation crab sticks",
            "1 tablespoon rice vinegar",
            "1 teaspoon sugar",
            "1/2 teaspoon salt",
            "Sesame seeds for garnish",
            "Soy sauce for serving",
            "Pickled ginger and wasabi (optional)"
        ],
        instructions: [
            "Mix rice vinegar, sugar, and salt in a small bowl. Fold into cooked rice and let cool.",
            "Place bamboo sushi mat on work surface. Put nori sheet on mat, shiny side down.",
            "Wet hands and spread 1/2 cup rice evenly over nori, leaving 1-inch border at top.",
            "Sprinkle sesame seeds over rice. Carefully flip nori so rice is facing down.",
            "Arrange crab sticks, avocado, and cucumber horizontally across the center.",
            "Using the mat, roll nori tightly away from you, applying gentle pressure.",
            "Moisten the top border with water to seal the roll.",
            "Repeat with remaining ingredients. Slice each roll into 8 pieces with a sharp knife.",
            "Serve with soy sauce, pickled ginger, and wasabi."
        ]
    },
    {
        id: 5,
        title: "Chocolate Lava Cake",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        time: 35,
        rating: 4.9,
        reviews: 150,
        calories: 480,
        cuisine: "French",
        ingredients: [
            "6 oz dark chocolate (70% cacao)",
            "1/2 cup unsalted butter",
            "2 large eggs",
            "2 large egg yolks",
            "1/4 cup granulated sugar",
            "Pinch of salt",
            "2 tablespoons all-purpose flour",
            "Powdered sugar for dusting",
            "Vanilla ice cream for serving"
        ],
        instructions: [
            "Preheat oven to 425°F (220°C). Butter and flour four 6-oz ramekins.",
            "Melt chocolate and butter in a double boiler, stirring until smooth.",
            "In a medium bowl, whisk eggs, egg yolks, sugar, and salt until pale and thick.",
            "Gradually whisk the melted chocolate mixture into the egg mixture.",
            "Fold in flour until just combined. Divide batter among prepared ramekins.",
            "Bake for 12-14 minutes until edges are firm but centers are soft.",
            "Let cakes cool for 1 minute, then invert onto plates.",
            "Dust with powdered sugar and serve immediately with ice cream."
        ]
    },
    {
        id: 6,
        title: "Mediterranean Salad Bowl",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        time: 20,
        rating: 4.6,
        reviews: 90,
        calories: 320,
        cuisine: "Mediterranean",
        ingredients: [
            "4 cups mixed greens",
            "1 cup cherry tomatoes, halved",
            "1 cucumber, diced",
            "1/2 red onion, thinly sliced",
            "1/2 cup Kalamata olives",
            "1/2 cup feta cheese, crumbled",
            "1/4 cup fresh parsley, chopped",
            "1/4 cup olive oil",
            "2 tablespoons lemon juice",
            "1 teaspoon dried oregano",
            "Salt and pepper to taste"
        ],
        instructions: [
            "In a large bowl, combine mixed greens, tomatoes, cucumber, red onion, and olives.",
            "In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.",
            "Pour dressing over salad and toss to combine.",
            "Top with crumbled feta cheese and fresh parsley.",
            "Serve immediately with grilled pita bread on the side."
        ]
    },
    {
        id: 7,
        title: "Coconut Chickpea Curry",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        time: 35,
        rating: 4.8,
        reviews: 104,
        calories: 390,
        cuisine: "Indian",
        ingredients: [
            "2 tablespoons coconut oil",
            "1 onion, diced",
            "3 garlic cloves, minced",
            "1 tablespoon grated ginger",
            "2 tablespoons curry paste",
            "2 cans chickpeas, drained and rinsed",
            "1 can coconut milk",
            "1 cup diced tomatoes",
            "2 cups baby spinach",
            "Salt and lime juice to taste",
            "Fresh cilantro for garnish"
        ],
        instructions: [
            "Heat coconut oil in a large skillet over medium heat.",
            "Add onion and cook until softened, then stir in garlic and ginger.",
            "Add curry paste and cook for 1 minute to bloom the spices.",
            "Stir in chickpeas, coconut milk, and diced tomatoes.",
            "Simmer for 15 minutes until the sauce thickens slightly.",
            "Fold in spinach and cook until just wilted.",
            "Season with salt and a squeeze of lime juice.",
            "Serve with rice or warm flatbread and garnish with cilantro."
        ]
    }
];

const recipeMeta = {
    1: { dietary: ["Vegetarian"], tags: ["Classic", "Cheesy", "Comfort"], featured: true },
    3: { dietary: ["Vegetarian"], tags: ["Quick", "Weeknight"] },
    5: { dietary: ["Vegetarian"], tags: ["Dessert", "Decadent"] },
    6: { dietary: ["Vegetarian", "Gluten-Free"], tags: ["Fresh", "Light", "Quick"] },
    7: { dietary: ["Vegan", "Vegetarian", "Gluten-Free"], tags: ["Plant-Based", "One-Pan", "Healthy"], featured: true }
};

const favoriteStorageKey = 'recipe-finder-favorites';
const recipeFavorites = new Set(JSON.parse(localStorage.getItem(favoriteStorageKey) || '[]'));
let currentModalRecipe = null;
let currentResults = recipes.slice();

// DOM Elements
const recipesGrid = document.getElementById('recipes-grid');
const featuredStrip = document.getElementById('featured-strip');
const resultsCount = document.getElementById('results-count');
const statRecipes = document.getElementById('stat-recipes');
const statQuick = document.getElementById('stat-quick');
const statFavorites = document.getElementById('stat-favorites');
const recipeModal = document.getElementById('recipe-modal');
const closeModal = document.getElementById('close-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalMeta = document.getElementById('modal-meta');
const ingredientsList = document.getElementById('ingredients-list');
const instructionsList = document.getElementById('instructions-list');
const modalFavoriteBtn = document.getElementById('modal-favorite-btn');
const copyLinkBtn = document.getElementById('copy-link-btn');
const toast = document.getElementById('toast');
const randomBtn = document.getElementById('random-btn');
const clearBtn = document.getElementById('clear-btn');
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');

function getRecipeMeta(recipe) {
    return {
        dietary: recipeMeta[recipe.id]?.dietary || [],
        tags: recipeMeta[recipe.id]?.tags || [],
        featured: Boolean(recipeMeta[recipe.id]?.featured)
    };
}

function saveFavorites() {
    localStorage.setItem(favoriteStorageKey, JSON.stringify([...recipeFavorites]));
}

function isFavorite(recipeId) {
    return recipeFavorites.has(recipeId);
}

function toggleFavorite(recipeId) {
    if (recipeFavorites.has(recipeId)) {
        recipeFavorites.delete(recipeId);
        showToast('Removed from favorites');
    } else {
        recipeFavorites.add(recipeId);
        showToast('Saved to favorites');
    }

    saveFavorites();
    updateStats(currentResults);
    renderRecipeCards(currentResults);
    if (currentModalRecipe && currentModalRecipe.id === recipeId) {
        updateModalFavoriteButton(currentModalRecipe);
    }
}

function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => {
        toast.classList.remove('show');
    }, 2200);
}

function updateStats(filteredRecipes = recipes) {
    statRecipes.textContent = recipes.length;
    statQuick.textContent = recipes.filter(recipe => recipe.time <= 30).length;
    statFavorites.textContent = recipeFavorites.size;

    if (resultsCount) {
        const count = filteredRecipes.length;
        resultsCount.textContent = `${count} recipe${count === 1 ? '' : 's'} shown`;
    }
}

function sortRecipes(recipesToSort) {
    const recipesClone = [...recipesToSort];

    switch (sortSelect.value) {
        case 'rating':
            return recipesClone.sort((left, right) => right.rating - left.rating);
        case 'time':
            return recipesClone.sort((left, right) => left.time - right.time);
        case 'calories':
            return recipesClone.sort((left, right) => left.calories - right.calories);
        case 'title':
            return recipesClone.sort((left, right) => left.title.localeCompare(right.title));
        case 'featured':
        default:
            return recipesClone.sort((left, right) => {
                const leftMeta = getRecipeMeta(left);
                const rightMeta = getRecipeMeta(right);

                if (leftMeta.featured !== rightMeta.featured) {
                    return Number(rightMeta.featured) - Number(leftMeta.featured);
                }

                return right.rating - left.rating;
            });
    }
}

function recipeMatchesFilter(recipe, activeFilter) {
    const meta = getRecipeMeta(recipe);

    if (activeFilter === 'All') {
        return true;
    }

    if (activeFilter === 'Favorites') {
        return isFavorite(recipe.id);
    }

    if (activeFilter === 'Vegetarian') {
        return meta.dietary.includes('Vegetarian');
    }

    if (activeFilter === 'Vegan') {
        return meta.dietary.includes('Vegan');
    }

    if (activeFilter === 'Gluten-Free') {
        return meta.dietary.includes('Gluten-Free');
    }

    if (activeFilter === 'Dessert') {
        return recipe.cuisine === 'French' || meta.tags.includes('Dessert');
    }

    if (activeFilter === 'Quick & Easy') {
        return recipe.time <= 30 || meta.tags.includes('Quick');
    }

    return true;
}

function recipeMatchesSearch(recipe, searchTerm) {
    if (!searchTerm) {
        return true;
    }

    const meta = getRecipeMeta(recipe);
    const haystack = [
        recipe.title,
        recipe.cuisine,
        recipe.ingredients.join(' '),
        meta.dietary.join(' '),
        meta.tags.join(' '),
        recipe.instructions.join(' ')
    ].join(' ').toLowerCase();

    return haystack.includes(searchTerm);
}

function renderFeaturedStrip(recipe) {
    if (!featuredStrip) {
        return;
    }

    const meta = getRecipeMeta(recipe);
    featuredStrip.innerHTML = `
        <article class="featured-card">
            <div class="featured-image">
                <img decoding="async" src="${recipe.image}" alt="${recipe.title}">
            </div>
            <div class="featured-content">
                <div class="featured-topline">
                    <span class="featured-badge">Featured pick</span>
                    <button class="favorite-btn ${isFavorite(recipe.id) ? 'is-active' : ''}" data-favorite-id="${recipe.id}" type="button" aria-label="Toggle favorite">
                        <i class="${isFavorite(recipe.id) ? 'fas' : 'far'} fa-bookmark"></i>
                    </button>
                </div>
                <h3>${recipe.title}</h3>
                <p>${recipe.cuisine} · ${recipe.time} min · ${recipe.rating} rating</p>
                <div class="featured-tags">
                    ${meta.dietary.map(tag => `<span>${tag}</span>`).join('')}
                    ${meta.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <button class="featured-cta" data-open-id="${recipe.id}" type="button">Open recipe</button>
            </div>
        </article>
    `;
}

function renderRecipeCard(recipe) {
    const meta = getRecipeMeta(recipe);
    const card = document.createElement('article');
    card.className = `recipe-card${isFavorite(recipe.id) ? ' is-favorite' : ''}`;
    card.dataset.id = recipe.id;

    card.innerHTML = `
        <div class="card-image">
            <img decoding="async" src="${recipe.image}" alt="${recipe.title}">
            <div class="card-overlay">
                <span class="card-time"><i class="fas fa-clock"></i> ${recipe.time} min</span>
                <button class="favorite-btn ${isFavorite(recipe.id) ? 'is-active' : ''}" data-favorite-id="${recipe.id}" type="button" aria-label="Toggle favorite">
                    <i class="${isFavorite(recipe.id) ? 'fas' : 'far'} fa-bookmark"></i>
                </button>
            </div>
        </div>
        <div class="card-content">
            <div class="card-tag-row">
                ${meta.dietary.slice(0, 2).map(tag => `<span class="card-tag">${tag}</span>`).join('')}
            </div>
            <h3 class="card-title">${recipe.title}</h3>
            <div class="card-meta">
                <span><i class="fas fa-star"></i> ${recipe.rating} (${recipe.reviews})</span>
                <span><i class="fas fa-fire"></i> ${recipe.calories} cal</span>
            </div>
            <div class="card-footer">
                <span class="card-cuisine">${recipe.cuisine}</span>
                <span class="card-difficulty">${meta.tags.includes('Quick') ? 'Fast' : recipe.time <= 35 ? 'Easy' : 'Classic'}</span>
            </div>
        </div>
    `;

    card.addEventListener('click', (event) => {
        const favoriteButton = event.target.closest('[data-favorite-id]');
        const openButton = event.target.closest('[data-open-id]');

        if (favoriteButton) {
            event.stopPropagation();
            toggleFavorite(Number(favoriteButton.dataset.favoriteId));
            return;
        }

        if (openButton) {
            event.stopPropagation();
            showRecipeModal(recipe);
            return;
        }

        showRecipeModal(recipe);
    });

    return card;
}

// Render recipe cards
function renderRecipeCards(recipesToRender = recipes) {
    recipesGrid.innerHTML = '';

    recipesToRender.forEach(recipe => {
        recipesGrid.appendChild(renderRecipeCard(recipe));
    });
}

// Show recipe in modal
function showRecipeModal(recipe) {
    currentModalRecipe = recipe;

    // Set image and title
    modalImage.src = recipe.image;
    modalImage.alt = recipe.title;
    modalTitle.textContent = recipe.title;

    history.replaceState(null, '', `#recipe-${recipe.id}`);

    // Set meta info
    const meta = getRecipeMeta(recipe);
    modalMeta.innerHTML = `
        <div class="meta-item"><i class="fas fa-clock"></i> ${recipe.time} min</div>
        <div class="meta-item"><i class="fas fa-user"></i> 4 servings</div>
        <div class="meta-item"><i class="fas fa-fire"></i> ${recipe.calories} calories</div>
        <div class="meta-item"><i class="fas fa-star"></i> ${recipe.rating} (${recipe.reviews} reviews)</div>
        <div class="meta-item"><i class="fas fa-tag"></i> ${meta.dietary.join(', ') || 'Signature recipe'}</div>
    `;

    // Set ingredients
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle"></i> ${ingredient}`;
        ingredientsList.appendChild(li);
    });

    // Set instructions
    instructionsList.innerHTML = '';
    recipe.instructions.forEach((instruction, index) => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });

    updateModalFavoriteButton(recipe);

    // Show modal
    recipeModal.style.display = 'block';
}

function updateModalFavoriteButton(recipe) {
    if (!modalFavoriteBtn) {
        return;
    }

    const favorite = isFavorite(recipe.id);
    modalFavoriteBtn.classList.toggle('is-active', favorite);
    modalFavoriteBtn.innerHTML = favorite
        ? '<i class="fas fa-bookmark"></i> Saved'
        : '<i class="far fa-bookmark"></i> Save recipe';
}

// Close modal
function closeRecipeModal() {
    recipeModal.style.display = 'none';
    currentModalRecipe = null;
    if (window.location.hash.startsWith('#recipe-')) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
    }
}

// Handle search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const activeFilter = document.querySelector('.filter-btn.active').textContent;
    const filteredRecipes = recipes.filter(recipe => recipeMatchesSearch(recipe, searchTerm) && recipeMatchesFilter(recipe, activeFilter));
    currentResults = sortRecipes(filteredRecipes);

    renderFeaturedStrip(currentResults[0] || recipes[0]);

    if (currentResults.length === 0) {
        recipesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No recipes found</h3>
                <p>Try adjusting your search, sort, or filter settings.</p>
            </div>
        `;
        updateStats(currentResults);
        return;
    }

    renderRecipeCards(currentResults);
    updateStats(currentResults);
}

// Initialize the app
function initApp() {
    // Render initial recipe cards
    currentResults = sortRecipes(recipes);
    renderFeaturedStrip(currentResults[0]);
    renderRecipeCards(currentResults);
    updateStats(currentResults);

    // Add event listeners
    closeModal.addEventListener('click', closeRecipeModal);

    modalFavoriteBtn.addEventListener('click', () => {
        if (currentModalRecipe) {
            toggleFavorite(currentModalRecipe.id);
        }
    });

    copyLinkBtn.addEventListener('click', async () => {
        if (!currentModalRecipe) {
            return;
        }

        try {
            await navigator.clipboard.writeText(window.location.href);
            showToast('Recipe link copied');
        } catch (error) {
            showToast('Copy failed, please try again');
        }
    });

    randomBtn.addEventListener('click', () => {
        const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
        showRecipeModal(randomRecipe);
        showToast(`Opening ${randomRecipe.title}`);
    });

    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        sortSelect.value = 'featured';
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.filter-btn').classList.add('active');
        handleSearch();
        showToast('Filters cleared');
    });

    window.addEventListener('click', (e) => {
        if (e.target === recipeModal) {
            closeRecipeModal();
        }
    });

    if (featuredStrip) {
        featuredStrip.addEventListener('click', (event) => {
            const favoriteButton = event.target.closest('[data-favorite-id]');
            const openButton = event.target.closest('[data-open-id]');

            if (favoriteButton) {
                event.stopPropagation();
                toggleFavorite(Number(favoriteButton.dataset.favoriteId));
                return;
            }

            if (openButton) {
                const recipe = recipes.find(item => item.id === Number(openButton.dataset.openId));
                if (recipe) {
                    showRecipeModal(recipe);
                }
            }
        });
    }

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            handleSearch();
        });
    });

    // Search button and input
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    sortSelect.addEventListener('change', handleSearch);

    const initialMatch = window.location.hash.match(/recipe-(\d+)/);
    if (initialMatch) {
        const recipe = recipes.find(item => item.id === Number(initialMatch[1]));
        if (recipe) {
            showRecipeModal(recipe);
        }
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initApp);