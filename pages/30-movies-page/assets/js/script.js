// API configuration
const API_KEY = '1ec64cd65bdbfd8d4d7cf29ac5652940'; // Replace with your TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// DOM elements
const moviesGrid = document.getElementById('movies-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const movieModal = document.getElementById('movie-modal');
const modalClose = document.getElementById('modal-close');

// State variables
let currentFilter = 'popular';
let currentMovies = [];

// Initialize the app
function init() {
    fetchMovies(currentFilter);
    setupEventListeners();
}

// Set up event listeners
function setupEventListeners() {
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            setActiveFilter(btn);
            fetchMovies(filter);
        });
    });

    // Search functionality with debouncing
    let debounceTimer;
    searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            if (searchInput.value.trim() !== '') {
                searchMovies(searchInput.value);
            } else {
                fetchMovies(currentFilter);
            }
        }, 500);
    });

    searchBtn.addEventListener('click', () => {
        if (searchInput.value.trim() !== '') {
            searchMovies(searchInput.value);
        }
    });

    // Modal close
    modalClose.addEventListener('click', () => {
        movieModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === movieModal) {
            movieModal.style.display = 'none';
        }
    });
}

// Set active filter
function setActiveFilter(activeBtn) {
    filterBtns.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
    currentFilter = activeBtn.dataset.filter;
}

// Fetch movies based on filter
async function fetchMovies(filter) {
    try {
        moviesGrid.innerHTML = '<div class="loading"><i class="fas fa-spinner"></i>Loading movies...</div>';
        
        const response = await fetch(`${BASE_URL}/movie/${filter}?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await response.json();
        
        currentMovies = data.results;
        displayMovies(currentMovies);
    } catch (error) {
        console.error('Error fetching movies:', error);
        moviesGrid.innerHTML = '<div class="loading">Error loading movies. Please try again later.</div>';
    }
}

// Search movies
async function searchMovies(query) {
    try {
        moviesGrid.innerHTML = '<div class="loading"><i class="fas fa-spinner"></i>Searching movies...</div>';
        
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
        const data = await response.json();
        
        currentMovies = data.results;
        displayMovies(currentMovies);
    } catch (error) {
        console.error('Error searching movies:', error);
        moviesGrid.innerHTML = '<div class="loading">Error searching movies. Please try again later.</div>';
    }
}

// Display movies in grid
function displayMovies(movies) {
    if (movies.length === 0) {
        moviesGrid.innerHTML = '<div class="loading">No movies found. Try a different search.</div>';
        return;
    }

    moviesGrid.innerHTML = '';
    
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img class="movie-poster" src="${movie.poster_path ? IMG_BASE_URL + movie.poster_path : 'https://via.placeholder.com/500x750/1e293b/94a3b8?text=No+Image'}" alt="${movie.title}">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-details">
                    <span class="rating"><i class="fas fa-star"></i> ${movie.vote_average.toFixed(1)}</span>
                    <span>${new Date(movie.release_date).getFullYear()}</span>
                </div>
            </div>
        `;
        
        movieCard.addEventListener('click', () => {
            showMovieDetails(movie);
        });
        
        moviesGrid.appendChild(movieCard);
    });
}

// Show movie details in modal
async function showMovieDetails(movie) {
    try {
        // Fetch additional movie details
        const response = await fetch(`${BASE_URL}/movie/${movie.id}?api_key=${API_KEY}&language=en-US`);
        const movieDetails = await response.json();
        
        // Update modal content
        document.getElementById('modal-poster').src = movie.poster_path ? IMG_BASE_URL + movie.poster_path : 'https://via.placeholder.com/500x750/1e293b/94a3b8?text=No+Image';
        document.getElementById('modal-title').textContent = movie.title;
        document.getElementById('modal-rating').innerHTML = `<i class="fas fa-star"></i> ${movie.vote_average.toFixed(1)}`;
        document.getElementById('modal-release-date').textContent = new Date(movie.release_date).toLocaleDateString();
        document.getElementById('modal-runtime').textContent = `${movieDetails.runtime} mins`;
        document.getElementById('modal-overview').textContent = movie.overview || 'No overview available.';
        
        // Show modal
        movieModal.style.display = 'block';
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);