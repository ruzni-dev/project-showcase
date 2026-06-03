// Sample cryptocurrency data (in a real app, this would come from an API)
        const cryptoData = [
            {
                id: "bitcoin",
                symbol: "btc",
                name: "Bitcoin",
                image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
                current_price: 54280,
                market_cap: 1045284978952,
                market_cap_rank: 1,
                price_change_percentage_24h: 2.45,
            },
            {
                id: "ethereum",
                symbol: "eth",
                name: "Ethereum",
                image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
                current_price: 2895.42,
                market_cap: 347628495832,
                market_cap_rank: 2,
                price_change_percentage_24h: 1.87,
            },
            {
                id: "tether",
                symbol: "usdt",
                name: "Tether",
                image: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
                current_price: 1.00,
                market_cap: 83216820902,
                market_cap_rank: 3,
                price_change_percentage_24h: 0.01,
            },
            {
                id: "binancecoin",
                symbol: "bnb",
                name: "BNB",
                image: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
                current_price: 352.18,
                market_cap: 53987654321,
                market_cap_rank: 4,
                price_change_percentage_24h: -0.32,
            },
            {
                id: "solana",
                symbol: "sol",
                name: "Solana",
                image: "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422",
                current_price: 126.35,
                market_cap: 53876543210,
                market_cap_rank: 5,
                price_change_percentage_24h: 5.62,
            },
            {
                id: "ripple",
                symbol: "xrp",
                name: "XRP",
                image: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
                current_price: 0.5732,
                market_cap: 30987654321,
                market_cap_rank: 6,
                price_change_percentage_24h: -1.24,
            },
            {
                id: "cardano",
                symbol: "ada",
                name: "Cardano",
                image: "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
                current_price: 0.4583,
                market_cap: 15987654321,
                market_cap_rank: 7,
                price_change_percentage_24h: 3.15,
            },
            {
                id: "dogecoin",
                symbol: "doge",
                name: "Dogecoin",
                image: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
                current_price: 0.1234,
                market_cap: 16987654321,
                market_cap_rank: 8,
                price_change_percentage_24h: -2.11,
            }
        ];

        // Format currency function
        function formatCurrency(value) {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: value < 1 ? 4 : 2,
                maximumFractionDigits: value < 1 ? 4 : 2
            }).format(value);
        }

        // Format market cap function
        function formatMarketCap(value) {
            if (value >= 1e12) {
                return '$' + (value / 1e12).toFixed(2) + 'T';
            } else if (value >= 1e9) {
                return '$' + (value / 1e9).toFixed(2) + 'B';
            } else if (value >= 1e6) {
                return '$' + (value / 1e6).toFixed(2) + 'M';
            } else {
                return '$' + value.toFixed(2);
            }
        }

        // Render crypto cards
        function renderCryptoCards(data) {
            const cryptoGrid = document.getElementById('crypto-grid');
            cryptoGrid.innerHTML = '';
            
            data.forEach((crypto, index) => {
                const card = document.createElement('div');
                card.className = 'crypto-card';
                card.style.setProperty('--delay', index);
                
                const changeClass = crypto.price_change_percentage_24h >= 0 ? 'change-positive' : 'change-negative';
                const changeIcon = crypto.price_change_percentage_24h >= 0 ? '▲' : '▼';
                
                card.innerHTML = `
                    <div class="crypto-header">
                        <div class="crypto-name">
                            <div class="crypto-icon">
                                <i class="fab fa-${crypto.symbol}"></i>
                            </div>
                            <div class="crypto-symbol">${crypto.symbol.toUpperCase()}</div>
                        </div>
                        <div class="crypto-rank">#${crypto.market_cap_rank}</div>
                    </div>
                    <div class="crypto-price">${formatCurrency(crypto.current_price)}</div>
                    <div class="crypto-change ${changeClass}">${changeIcon} ${Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%</div>
                    <div class="crypto-stats">
                        <div class="stat">
                            <div class="stat-value">${formatMarketCap(crypto.market_cap)}</div>
                            <div class="stat-label">Market Cap</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${crypto.symbol.toUpperCase()}</div>
                            <div class="stat-label">Symbol</div>
                        </div>
                    </div>
                `;
                
                card.addEventListener('click', () => showChart(crypto));
                cryptoGrid.appendChild(card);
            });
        }

        // Show chart for selected crypto
        function showChart(crypto) {
            const chartContainer = document.getElementById('chart-container');
            const chartCryptoIcon = document.getElementById('chart-crypto-icon');
            const chartCryptoName = document.getElementById('chart-crypto-name');
            const chartCryptoSymbol = document.getElementById('chart-crypto-symbol');
            
            chartCryptoIcon.innerHTML = `<i class="fab fa-${crypto.symbol}"></i>`;
            chartCryptoName.textContent = crypto.name;
            chartCryptoSymbol.textContent = `(${crypto.symbol.toUpperCase()})`;
            
            // Show chart container with animation
            chartContainer.style.display = 'block';
            chartContainer.scrollIntoView({ behavior: 'smooth' });
            
            // Render chart (in a real app, this would use actual historical data)
            renderChart(crypto);
        }

        // Render chart
        function renderChart(crypto) {
            const ctx = document.getElementById('price-chart').getContext('2d');
            
            // Generate sample data (in a real app, this would come from an API)
            const generateData = (timeframe) => {
                const data = [];
                let value = crypto.current_price;
                const volatility = timeframe === 1 ? 0.02 : (timeframe === 7 ? 0.05 : (timeframe === 30 ? 0.1 : 0.2));
                
                for (let i = 0; i < 24; i++) {
                    value = value * (1 + (Math.random() - 0.5) * volatility);
                    data.push(value);
                }
                
                return data;
            };
            
            // Sample labels based on timeframe
            const generateLabels = (timeframe) => {
                const labels = [];
                const now = new Date();
                
                if (timeframe === 1) {
                    // 24 hours
                    for (let i = 23; i >= 0; i--) {
                        const time = new Date(now);
                        time.setHours(now.getHours() - i);
                        labels.push(time.getHours() + ':00');
                    }
                } else if (timeframe === 7) {
                    // 7 days
                    for (let i = 6; i >= 0; i--) {
                        const date = new Date(now);
                        date.setDate(now.getDate() - i);
                        labels.push(date.toLocaleDateString('en-US', { weekday: 'short' }));
                    }
                } else if (timeframe === 30) {
                    // 30 days
                    for (let i = 29; i >= 0; i--) {
                        const date = new Date(now);
                        date.setDate(now.getDate() - i);
                        labels.push(date.getDate());
                    }
                } else {
                    // 1 year
                    for (let i = 11; i >= 0; i--) {
                        const date = new Date(now);
                        date.setMonth(now.getMonth() - i);
                        labels.push(date.toLocaleDateString('en-US', { month: 'short' }));
                    }
                }
                
                return labels;
            };
            
            // Create chart
            if (window.priceChart) {
                window.priceChart.destroy();
            }
            
            window.priceChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: generateLabels(1),
                    datasets: [{
                        label: 'Price',
                        data: generateData(1),
                        borderColor: '#d4af37',
                        backgroundColor: 'rgba(212, 175, 55, 0.1)',
                        borderWidth: 2,
                        pointRadius: 0,
                        pointHoverRadius: 5,
                        fill: true,
                        tension: 0.2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                            backgroundColor: 'rgba(13, 18, 33, 0.9)',
                            titleColor: '#d4af37',
                            bodyColor: '#ffffff',
                            borderColor: 'rgba(212, 175, 55, 0.3)',
                            borderWidth: 1,
                            callbacks: {
                                label: function(context) {
                                    return formatCurrency(context.parsed.y);
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.05)'
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.7)'
                            }
                        },
                        y: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.05)'
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.7)',
                                callback: function(value) {
                                    return formatCurrency(value);
                                }
                            }
                        }
                    },
                    interaction: {
                        mode: 'index',
                        intersect: false
                    }
                }
            });
            
            // Add event listeners to timeframe buttons
            document.querySelectorAll('.timeframe-btn').forEach(button => {
                button.addEventListener('click', function() {
                    document.querySelectorAll('.timeframe-btn').forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    const timeframe = parseInt(this.dataset.timeframe);
                    window.priceChart.data.labels = generateLabels(timeframe);
                    window.priceChart.data.datasets[0].data = generateData(timeframe);
                    window.priceChart.update();
                });
            });
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Render initial crypto cards
            renderCryptoCards(cryptoData);
            
            // Add event listeners to filter buttons
            document.querySelectorAll('.filter-btn').forEach(button => {
                button.addEventListener('click', function() {
                    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    const filter = this.dataset.filter;
                    let filteredData = [...cryptoData];
                    
                    if (filter === 'gainers') {
                        filteredData = filteredData.filter(crypto => crypto.price_change_percentage_24h > 0);
                    } else if (filter === 'losers') {
                        filteredData = filteredData.filter(crypto => crypto.price_change_percentage_24h < 0);
                    } else if (filter === 'top10') {
                        filteredData = filteredData.filter(crypto => crypto.market_cap_rank <= 10);
                    }
                    
                    renderCryptoCards(filteredData);
                });
            });
            
            // Add event listener to search input
            document.getElementById('search-input').addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const filteredData = cryptoData.filter(crypto => 
                    crypto.name.toLowerCase().includes(searchTerm) || 
                    crypto.symbol.toLowerCase().includes(searchTerm)
                );
                
                renderCryptoCards(filteredData);
            });
            
            // Simulate auto-refresh every 60 seconds
            setInterval(() => {
                // In a real app, this would fetch new data from the API
                const now = new Date();
                document.getElementById('update-time').textContent = now.toLocaleTimeString();
                
                // Simulate price changes
                cryptoData.forEach(crypto => {
                    const change = (Math.random() - 0.5) * 2;
                    crypto.current_price = crypto.current_price * (1 + change / 100);
                    crypto.price_change_percentage_24h = change;
                });
                
                renderCryptoCards(cryptoData);
            }, 60000);
        });