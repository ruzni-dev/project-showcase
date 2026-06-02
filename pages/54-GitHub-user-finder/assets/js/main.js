// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const mainContent = document.getElementById('mainContent');
const chartContainer = document.getElementById('chartContainer');

// Profile elements
const avatar = document.getElementById('avatar');
const username = document.getElementById('username');
const bio = document.getElementById('bio');
const reposCount = document.getElementById('reposCount');
const followersCount = document.getElementById('followersCount');
const followingCount = document.getElementById('followingCount');
const reposList = document.getElementById('reposList');

// Chart
let languageChart = null;

// Event Listeners
searchBtn.addEventListener('click', searchUser);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchUser();
    }
});

// Functions
async function searchUser() {
    const username = searchInput.value.trim();
    if (!username) return;
    
    // Show loading, hide other sections
    loading.classList.remove('hidden');
    error.classList.add('hidden');
    mainContent.classList.add('hidden');
    chartContainer.classList.add('hidden');
    
    try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) {
            throw new Error('User not found');
        }
        const userData = await userResponse.json();
        
        // Fetch repositories
        const reposResponse = await fetch(userData.repos_url);
        if (!reposResponse.ok) {
            throw new Error('Failed to fetch repositories');
        }
        const reposData = await reposResponse.json();
        
        // Update UI with user data
        displayUserData(userData);
        displayRepositories(reposData);
        
        // Analyze languages for chart
        analyzeLanguages(reposData);
        
        // Show content
        loading.classList.add('hidden');
        mainContent.classList.remove('hidden');
        chartContainer.classList.remove('hidden');
        
    } catch (err) {
        loading.classList.add('hidden');
        error.classList.remove('hidden');
        error.textContent = err.message;
    }
}

function displayUserData(user) {
    avatar.src = user.avatar_url;
    username.textContent = user.login;
    bio.textContent = user.bio || 'No bio available';
    reposCount.textContent = user.public_repos;
    followersCount.textContent = user.followers;
    followingCount.textContent = user.following;
}

function displayRepositories(repos) {
    // Sort by stars (descending)
    repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    
    // Clear previous repos
    reposList.innerHTML = '';
    
    // Add repos to list
    repos.forEach(repo => {
        const repoItem = document.createElement('div');
        repoItem.className = 'repo-item';
        
        repoItem.innerHTML = `
            <h3 class="repo-name">${repo.name}</h3>
            <p class="repo-desc">${repo.description || 'No description available'}</p>
            <div class="repo-meta">
                <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                <span><i class="fas fa-circle"></i> ${repo.language || 'N/A'}</span>
            </div>
        `;
        
        reposList.appendChild(repoItem);
    });
}

function analyzeLanguages(repos) {
    const languages = {};
    
    // Count languages
    repos.forEach(repo => {
        const lang = repo.language;
        if (lang) {
            languages[lang] = (languages[lang] || 0) + 1;
        }
    });
    
    // Sort languages by count
    const sortedLanguages = Object.entries(languages)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8); // Top 8 languages
    
    // Prepare chart data
    const chartLabels = sortedLanguages.map(([lang]) => lang);
    const chartData = sortedLanguages.map(([, count]) => count);
    
    // Create or update chart
    if (languageChart) {
        languageChart.destroy();
    }
    
    const ctx = document.getElementById('languageChart').getContext('2d');
    languageChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: chartLabels,
            datasets: [{
                data: chartData,
                backgroundColor: [
                    '#9d4edd', '#4a2cad', '#2d1b69', '#ffd700',
                    '#c0c0c0', '#ff6b6b', '#4ecdc4', '#ff9f1c'
                ],
                borderWidth: 0,
                hoverOffset: 12
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: '#f8f5ff',
                        font: {
                            size: 14
                        }
                    }
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true,
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    });
}


// Initialize with a sample user
window.addEventListener('load', () => {
    searchInput.value = 'github';
    searchUser();
});