// ============================================
// MINING EQUIPMENT WEBSITE - ULTIMATE EDITION
// Complete JavaScript Application
// ============================================

// ============== EQUIPMENT DATABASE - EXPANDED ==============
// Equipment Data with Local Images
const equipmentData = [
    {
        id: 1,
        name: "CAT 797F Mining Truck",
        category: "haul-trucks",
        price: "$5,200,000",
        description: "Ultra-class haul truck with 400-ton payload capacity for efficient material transport.",
        image: "images/equipment/haul-truck.jpg",
        features: [
            "400-ton payload capacity",
            "Advanced suspension system",
            "Fuel-efficient engine",
            "Enhanced safety features"
        ]
    },
    {
        id: 2,
        name: "Komatsu PC8000 Excavator",
        category: "excavators",
        price: "$6,500,000",
        description: "High-performance hydraulic excavator for large-scale mining operations.",
        image: "images/equipment/excavator.jpg",
        features: [
            "80-ton operating weight",
            "Advanced hydraulic system",
            "Intelligent machine control",
            "Low maintenance design"
        ]
    },
    {
        id: 3,
        name: "Atlas Copco Drill Rig",
        category: "drilling",
        price: "$1,800,000",
        description: "Advanced drilling equipment for exploration and blast hole drilling.",
        image: "images/equipment/drilling-rig.jpg",
        features: [
            "Automated drilling system",
            "High drilling precision",
            "Remote monitoring capability",
            "Low noise operation"
        ]
    },
    {
        id: 4,
        name: "Sandvik Underground Loader",
        category: "underground",
        price: "$2,300,000",
        description: "Heavy-duty loader designed for underground mining operations.",
        image: "images/equipment/underground-loader.jpg",
        features: [
            "Compact design for tight spaces",
            "High breakout force",
            "Enhanced ventilation system",
            "Low emission engine"
        ]
    },
    {
        id: 5,
        name: "Liebherr R 9800 Excavator",
        category: "excavators",
        price: "$7,200,000",
        description: "Massive mining excavator with exceptional digging force and efficiency.",
        image: "images/equipment/mining-excavator.jpg",
        features: [
            "800-ton operating weight",
            "Two-engine configuration",
            "Advanced load sensing system",
            "Comfortable operator cabin"
        ]
    },
    {
        id: 6,
        name: "CAT AD45B Underground Truck",
        category: "underground",
        price: "$1,900,000",
        description: "Articulated underground truck for efficient material haulage.",
        image: "images/equipment/underground-truck.jpg",
        features: [
            "45-ton payload capacity",
            "Articulated steering",
            "Durable construction",
            "Excellent ground clearance"
        ]
    }
];

// ============== TESTIMONIAL DATABASE ==============
const testimonialData = [
    {
        id: 1,
        name: "Michael Chen",
        position: "Operations Director",
        company: "Global Mining Corp",
        content: "MiningPro provided exceptional service and top-quality equipment. Their support team is available 24/7 and resolved our issues immediately.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id: 2,
        name: "Sarah Williams",
        position: "Fleet Manager",
        company: "Rocky Mountain Mining",
        content: "The best investment we made for our mining operation. The equipment reliability and fuel efficiency exceeded our expectations.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        id: 3,
        name: "Robert Thompson",
        position: "CEO",
        company: "Thompson Mining",
        content: "Their training program transformed our operator efficiency and safety record. Highly recommended for any mining operation.",
        rating: 4.5,
        image: "https://randomuser.me/api/portraits/men/2.jpg"
    }
];

// ============== USER PREFERENCES ==============
let userPreferences = {
    currency: 'USD',
    theme: 'dark',
    notifications: true,
    recentSearches: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    compareList: []
};

// ============== APPLICATION STATE ==============
const AppState = {
    currentPage: 1,
    itemsPerPage: 6,
    currentFilter: 'all',
    currentSort: 'featured',
    searchQuery: '',
    selectedEquipment: null,
    isLoading: false,
    cart: [],
    wishlist: []
};

// ============== DOM ELEMENTS ==============
const DOM = {
    equipmentGrid: document.getElementById('equipmentGrid'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mainNav: document.getElementById('mainNav'),
    backToTopBtn: document.getElementById('backToTop'),
    contactForm: document.getElementById('contactForm'),
    navLinks: document.querySelectorAll('.nav-link'),
    statNumbers: document.querySelectorAll('.stat-number'),
    searchInput: document.getElementById('searchInput'),
    searchBtn: document.getElementById('searchBtn'),
    sortSelect: document.getElementById('sortSelect'),
    paginationContainer: document.getElementById('pagination'),
    loadingSpinner: document.getElementById('loadingSpinner'),
    toastContainer: document.getElementById('toastContainer'),
    modalContainer: document.getElementById('modalContainer'),
    newsletterForm: document.getElementById('newsletterForm'),
    equipmentModal: document.getElementById('equipmentModal'),
    compareBar: document.getElementById('compareBar'),
    favoritesCount: document.getElementById('favoritesCount'),
    cartCount: document.getElementById('cartCount')
};

// ============== UTILITY FUNCTIONS ==============
const Utils = {
    // Format currency
    formatCurrency: (amount, currency = 'USD') => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    },

    // Format date
    formatDate: (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    },

    // Debounce function
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function
    throttle: (func, limit) => {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Generate unique ID
    generateId: () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    // Local Storage helpers
    storage: {
        set: (key, value) => {
            localStorage.setItem(key, JSON.stringify(value));
        },
        get: (key) => {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        },
        remove: (key) => {
            localStorage.removeItem(key);
        }
    },

    // Animation helpers
    animate: {
        fadeIn: (element, duration = 300) => {
            element.style.opacity = 0;
            element.style.display = 'block';
            let last = +new Date();
            const tick = () => {
                element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
                last = +new Date();
                if (+element.style.opacity < 1) {
                    requestAnimationFrame(tick);
                }
            };
            tick();
        },
        fadeOut: (element, duration = 300) => {
            element.style.opacity = 1;
            let last = +new Date();
            const tick = () => {
                element.style.opacity = +element.style.opacity - (new Date() - last) / duration;
                last = +new Date();
                if (+element.style.opacity > 0) {
                    requestAnimationFrame(tick);
                } else {
                    element.style.display = 'none';
                }
            };
            tick();
        }
    },

    // Error handling
    handleError: (error, context = 'general') => {
        console.error(`Error in ${context}:`, error);
        Notifications.show('An error occurred. Please try again.', 'error');
    },

    // Validation
    validateEmail: (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    validatePhone: (phone) => {
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return re.test(phone);
    }
};

// ============== NOTIFICATION SYSTEM ==============
const Notifications = {
    show: (message, type = 'info', duration = 5000) => {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-icon">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 
                                  type === 'error' ? 'exclamation-circle' : 
                                  type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
            </div>
            <div class="toast-content">
                <p>${message}</p>
            </div>
            <button class="toast-close">
                <i class="fas fa-times"></i>
            </button>
        `;

        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('toast-show');
        }, 10);

        setTimeout(() => {
            toast.classList.remove('toast-show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, duration);

        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.classList.remove('toast-show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        });
    },

    success: (message) => Notifications.show(message, 'success'),
    error: (message) => Notifications.show(message, 'error'),
    warning: (message) => Notifications.show(message, 'warning'),
    info: (message) => Notifications.show(message, 'info')
};

// ============== MODAL SYSTEM ==============
const Modal = {
    show: (title, content, size = 'md') => {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-container modal-${size}">
                <div class="modal-header">
                    <h3 class="modal-title">${title}</h3>
                    <button class="modal-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary modal-cancel">Close</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        
        setTimeout(() => {
            modal.classList.add('modal-show');
        }, 10);

        const closeModal = () => {
            modal.classList.remove('modal-show');
            setTimeout(() => {
                modal.remove();
            }, 300);
        };

        modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
        modal.querySelector('.modal-close').addEventListener('click', closeModal);
        modal.querySelector('.modal-cancel').addEventListener('click', closeModal);

        return modal;
    },

    showEquipment: (equipmentId) => {
        const equipment = equipmentData.find(e => e.id === equipmentId);
        if (!equipment) return;

        const featuresHTML = equipment.features.map(f => 
            `<li class="modal-feature"><i class="fas fa-check"></i> ${f}</li>`
        ).join('');

        const specsHTML = Object.entries(equipment.specifications || {}).map(([key, value]) => 
            `<div class="spec-item">
                <span class="spec-label">${key.replace(/([A-Z])/g, ' $1').trim()}</span>
                <span class="spec-value">${value}</span>
            </div>`
        ).join('');

        const content = `
            <div class="modal-equipment">
                <div class="modal-equipment-gallery">
                    <img src="${equipment.image}" alt="${equipment.name}" class="modal-equipment-image">
                </div>
                <div class="modal-equipment-details">
                    <div class="modal-equipment-header">
                        <span class="modal-equipment-category">${equipment.category}</span>
                        <span class="modal-equipment-brand">${equipment.brand}</span>
                    </div>
                    <h4 class="modal-equipment-title">${equipment.name}</h4>
                    <p class="modal-equipment-description">${equipment.description}</p>
                    
                    <div class="modal-equipment-price">
                        <span class="modal-price-label">Price:</span>
                        <span class="modal-price-value">${equipment.price}</span>
                        <span class="modal-rental">Rental: ${equipment.rentalPrice || 'Call for pricing'}</span>
                    </div>

                    <div class="modal-equipment-specs">
                        <h5>Specifications</h5>
                        ${specsHTML}
                    </div>

                    <div class="modal-equipment-features">
                        <h5>Features</h5>
                        <ul>
                            ${featuresHTML}
                        </ul>
                    </div>

                    <div class="modal-equipment-actions">
                        <button class="btn btn-primary add-to-cart" data-id="${equipment.id}">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                        <button class="btn btn-outline add-to-favorites" data-id="${equipment.id}">
                            <i class="fas fa-heart"></i> Add to Favorites
                        </button>
                        <button class="btn btn-secondary compare-equipment" data-id="${equipment.id}">
                            <i class="fas fa-chart-bar"></i> Compare
                        </button>
                    </div>
                </div>
            </div>
        `;

        const modal = Modal.show(equipment.name, content, 'lg');
        
        // Add event listeners to modal buttons
        setTimeout(() => {
            modal.querySelector('.add-to-cart')?.addEventListener('click', () => {
                Cart.add(equipment.id);
                Notifications.success(`${equipment.name} added to cart`);
            });

            modal.querySelector('.add-to-favorites')?.addEventListener('click', () => {
                Favorites.toggle(equipment.id);
            });

            modal.querySelector('.compare-equipment')?.addEventListener('click', () => {
                Compare.add(equipment.id);
            });
        }, 100);
    }
};

// ============== SEARCH SYSTEM ==============
const Search = {
    index: [],

    buildIndex: () => {
        Search.index = equipmentData.map(item => ({
            id: item.id,
            name: item.name.toLowerCase(),
            description: item.description.toLowerCase(),
            category: item.category.toLowerCase(),
            brand: item.brand?.toLowerCase() || '',
            model: item.model?.toLowerCase() || '',
            keywords: [...item.features.map(f => f.toLowerCase()), item.category, item.brand]
        }));
    },

    query: (searchTerm) => {
        if (!searchTerm) return equipmentData;
        
        searchTerm = searchTerm.toLowerCase();
        
        return equipmentData.filter(item => {
            // Search in name
            if (item.name.toLowerCase().includes(searchTerm)) return true;
            
            // Search in description
            if (item.description.toLowerCase().includes(searchTerm)) return true;
            
            // Search in category
            if (item.category.toLowerCase().includes(searchTerm)) return true;
            
            // Search in brand
            if (item.brand?.toLowerCase().includes(searchTerm)) return true;
            
            // Search in features
            if (item.features.some(f => f.toLowerCase().includes(searchTerm))) return true;
            
            // Search in specifications
            if (item.specifications) {
                for (const [key, value] of Object.entries(item.specifications)) {
                    if (value.toString().toLowerCase().includes(searchTerm)) return true;
                }
            }
            
            return false;
        });
    },

    suggestions: (searchTerm) => {
        if (!searchTerm || searchTerm.length < 2) return [];
        
        searchTerm = searchTerm.toLowerCase();
        const suggestions = new Set();
        
        equipmentData.forEach(item => {
            if (item.name.toLowerCase().includes(searchTerm)) {
                suggestions.add(item.name);
            }
            if (item.brand?.toLowerCase().includes(searchTerm)) {
                suggestions.add(item.brand);
            }
            if (item.category.toLowerCase().includes(searchTerm)) {
                suggestions.add(item.category);
            }
        });
        
        return Array.from(suggestions).slice(0, 5);
    }
};

// Initialize search index
Search.buildIndex();

// ============== FILTER SYSTEM ==============
const Filters = {
    apply: (filter, sort = 'featured', search = '') => {
        let filtered = equipmentData;

        // Apply category filter
        if (filter !== 'all') {
            filtered = filtered.filter(item => item.category === filter);
        }

        // Apply search filter
        if (search) {
            filtered = Search.query(search);
        }

        // Apply sorting
        switch (sort) {
            case 'price-low':
                filtered.sort((a, b) => parseFloat(a.price.replace(/[^0-9.-]+/g, '')) - 
                                         parseFloat(b.price.replace(/[^0-9.-]+/g, '')));
                break;
            case 'price-high':
                filtered.sort((a, b) => parseFloat(b.price.replace(/[^0-9.-]+/g, '')) - 
                                         parseFloat(a.price.replace(/[^0-9.-]+/g, '')));
                break;
            case 'newest':
                filtered.sort((a, b) => (b.year || 0) - (a.year || 0));
                break;
            case 'rating':
                filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
                break;
            case 'featured':
            default:
                filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
                break;
        }

        return filtered;
    },

    getCategories: () => {
        const categories = new Set();
        equipmentData.forEach(item => categories.add(item.category));
        return Array.from(categories);
    },

    getBrands: () => {
        const brands = new Set();
        equipmentData.forEach(item => {
            if (item.brand) brands.add(item.brand);
        });
        return Array.from(brands);
    }
};

// ============== CART SYSTEM ==============
const Cart = {
    items: Utils.storage.get('cart') || [],

    add: (id) => {
        const equipment = equipmentData.find(e => e.id === id);
        if (!equipment) return;

        const existingItem = Cart.items.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            Cart.items.push({
                id: equipment.id,
                name: equipment.name,
                price: equipment.price,
                quantity: 1,
                image: equipment.image
            });
        }

        Cart.save();
        Cart.updateUI();
        Notifications.success(`${equipment.name} added to cart`);
    },

    remove: (id) => {
        Cart.items = Cart.items.filter(item => item.id !== id);
        Cart.save();
        Cart.updateUI();
        Notifications.info('Item removed from cart');
    },

    updateQuantity: (id, quantity) => {
        const item = Cart.items.find(item => item.id === id);
        if (item) {
            item.quantity = Math.max(1, quantity);
            Cart.save();
            Cart.updateUI();
        }
    },

    clear: () => {
        Cart.items = [];
        Cart.save();
        Cart.updateUI();
    },

    save: () => {
        Utils.storage.set('cart', Cart.items);
    },

    updateUI: () => {
        const count = Cart.items.reduce((sum, item) => sum + item.quantity, 0);
        if (DOM.cartCount) {
            DOM.cartCount.textContent = count;
            DOM.cartCount.style.display = count > 0 ? 'flex' : 'none';
        }
    },

    getTotal: () => {
        return Cart.items.reduce((total, item) => {
            const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
            return total + (price * item.quantity);
        }, 0);
    },

    showCart: () => {
        const itemsHTML = Cart.items.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <span class="cart-item-price">${item.price}</span>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn plus">+</button>
                    </div>
                </div>
                <button class="cart-item-remove">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');

        const total = Utils.formatCurrency(Cart.getTotal());

        const content = `
            <div class="cart-container">
                ${Cart.items.length > 0 ? `
                    <div class="cart-items">
                        ${itemsHTML}
                    </div>
                    <div class="cart-total">
                        <span>Total:</span>
                        <span class="cart-total-amount">${total}</span>
                    </div>
                    <div class="cart-actions">
                        <button class="btn btn-primary checkout-btn">
                            <i class="fas fa-credit-card"></i> Checkout
                        </button>
                        <button class="btn btn-secondary clear-cart-btn">
                            <i class="fas fa-trash"></i> Clear Cart
                        </button>
                    </div>
                ` : `
                    <div class="cart-empty">
                        <i class="fas fa-shopping-cart"></i>
                        <p>Your cart is empty</p>
                        <a href="#equipment" class="btn btn-primary">Browse Equipment</a>
                    </div>
                `}
            </div>
        `;

        const modal = Modal.show('Shopping Cart', content, 'lg');

        // Add event listeners
        setTimeout(() => {
            if (Cart.items.length > 0) {
                // Quantity buttons
                modal.querySelectorAll('.quantity-btn.minus').forEach((btn, index) => {
                    btn.addEventListener('click', () => {
                        const item = Cart.items[index];
                        Cart.updateQuantity(item.id, item.quantity - 1);
                        modal.remove();
                        Cart.showCart();
                    });
                });

                modal.querySelectorAll('.quantity-btn.plus').forEach((btn, index) => {
                    btn.addEventListener('click', () => {
                        const item = Cart.items[index];
                        Cart.updateQuantity(item.id, item.quantity + 1);
                        modal.remove();
                        Cart.showCart();
                    });
                });

                // Remove buttons
                modal.querySelectorAll('.cart-item-remove').forEach((btn, index) => {
                    btn.addEventListener('click', () => {
                        const item = Cart.items[index];
                        Cart.remove(item.id);
                        modal.remove();
                        Cart.showCart();
                    });
                });

                // Clear cart button
                modal.querySelector('.clear-cart-btn')?.addEventListener('click', () => {
                    Cart.clear();
                    modal.remove();
                    Cart.showCart();
                });

                // Checkout button
                modal.querySelector('.checkout-btn')?.addEventListener('click', () => {
                    Notifications.success('Redirecting to checkout...');
                    // Implement checkout logic here
                });
            }
        }, 100);
    }
};

// ============== FAVORITES SYSTEM ==============
const Favorites = {
    items: Utils.storage.get('favorites') || [],

    toggle: (id) => {
        const index = Favorites.items.indexOf(id);
        if (index === -1) {
            Favorites.items.push(id);
            Notifications.success('Added to favorites');
        } else {
            Favorites.items.splice(index, 1);
            Notifications.info('Removed from favorites');
        }
        Favorites.save();
        Favorites.updateUI();
    },

    isFavorite: (id) => {
        return Favorites.items.includes(id);
    },

    save: () => {
        Utils.storage.set('favorites', Favorites.items);
    },

    updateUI: () => {
        if (DOM.favoritesCount) {
            DOM.favoritesCount.textContent = Favorites.items.length;
            DOM.favoritesCount.style.display = Favorites.items.length > 0 ? 'flex' : 'none';
        }

        // Update favorite buttons
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            const id = parseInt(btn.dataset.id);
            if (Favorites.isFavorite(id)) {
                btn.classList.add('active');
                btn.querySelector('i').classList.add('fas');
                btn.querySelector('i').classList.remove('far');
            } else {
                btn.classList.remove('active');
                btn.querySelector('i').classList.remove('fas');
                btn.querySelector('i').classList.add('far');
            }
        });
    },

    getFavorites: () => {
        return equipmentData.filter(item => Favorites.items.includes(item.id));
    },

    showFavorites: () => {
        const favorites = Favorites.getFavorites();
        
        const itemsHTML = favorites.map(item => `
            <div class="favorite-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="favorite-item-image">
                <div class="favorite-item-details">
                    <h4 class="favorite-item-title">${item.name}</h4>
                    <span class="favorite-item-price">${item.price}</span>
                    <span class="favorite-item-category">${item.category}</span>
                </div>
                <button class="favorite-item-remove">
                    <i class="fas fa-heart-broken"></i>
                </button>
            </div>
        `).join('');

        const content = `
            <div class="favorites-container">
                ${favorites.length > 0 ? `
                    <div class="favorites-items">
                        ${itemsHTML}
                    </div>
                ` : `
                    <div class="favorites-empty">
                        <i class="fas fa-heart"></i>
                        <p>You haven't added any favorites yet</p>
                        <a href="#equipment" class="btn btn-primary">Browse Equipment</a>
                    </div>
                `}
            </div>
        `;

        const modal = Modal.show('My Favorites', content, 'lg');

        setTimeout(() => {
            modal.querySelectorAll('.favorite-item-remove').forEach((btn, index) => {
                btn.addEventListener('click', () => {
                    const item = favorites[index];
                    Favorites.toggle(item.id);
                    modal.remove();
                    Favorites.showFavorites();
                });
            });
        }, 100);
    }
};

// ============== COMPARE SYSTEM ==============
const Compare = {
    maxItems: 4,
    items: [],

    add: (id) => {
        if (Compare.items.includes(id)) {
            Notifications.info('Item already in comparison');
            return;
        }

        if (Compare.items.length >= Compare.maxItems) {
            Notifications.warning(`Maximum ${Compare.maxItems} items can be compared`);
            return;
        }

        Compare.items.push(id);
        Notifications.success('Added to comparison');
        Compare.updateUI();
    },

    remove: (id) => {
        Compare.items = Compare.items.filter(item => item !== id);
        Notifications.info('Removed from comparison');
        Compare.updateUI();
    },

    clear: () => {
        Compare.items = [];
        Notifications.info('Comparison list cleared');
        Compare.updateUI();
    },

    updateUI: () => {
        // Update compare bar
        if (DOM.compareBar) {
            if (Compare.items.length >= 2) {
                DOM.compareBar.classList.add('active');
                const compareCount = DOM.compareBar.querySelector('.compare-count');
                if (compareCount) {
                    compareCount.textContent = Compare.items.length;
                }
            } else {
                DOM.compareBar.classList.remove('active');
            }
        }

        // Update compare buttons
        document.querySelectorAll('.compare-btn').forEach(btn => {
            const id = parseInt(btn.dataset.id);
            if (Compare.items.includes(id)) {
                btn.classList.add('active');
                btn.innerHTML = '<i class="fas fa-check"></i> Added to Compare';
            } else {
                btn.classList.remove('active');
                btn.innerHTML = '<i class="fas fa-chart-bar"></i> Compare';
            }
        });
    },

    compare: () => {
        if (Compare.items.length < 2) {
            Notifications.warning('Please select at least 2 items to compare');
            return;
        }

        const compareItems = equipmentData.filter(item => Compare.items.includes(item.id));
        
        // Generate comparison table
        let tableHTML = `
            <div class="compare-table-wrapper">
                <table class="compare-table">
                    <thead>
                        <tr>
                            <th>Specifications</th>
                            ${compareItems.map(item => `<th>${item.name}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Image</td>
                            ${compareItems.map(item => `
                                <td><img src="${item.image}" alt="${item.name}" style="width: 100px; height: 80px; object-fit: cover; border-radius: 8px;"></td>
                            `).join('')}
                        </tr>
                        <tr>
                            <td>Brand</td>
                            ${compareItems.map(item => `<td>${item.brand || '-'}</td>`).join('')}
                        </tr>
                        <tr>
                            <td>Model</td>
                            ${compareItems.map(item => `<td>${item.model || '-'}</td>`).join('')}
                        </tr>
                        <tr>
                            <td>Price</td>
                            ${compareItems.map(item => `<td><strong>${item.price}</strong></td>`).join('')}
                        </tr>
                        <tr>
                            <td>Year</td>
                            ${compareItems.map(item => `<td>${item.year || '-'}</td>`).join('')}
                        </tr>
                        <tr>
                            <td>Condition</td>
                            ${compareItems.map(item => `<td>${item.condition || 'New'}</td>`).join('')}
                        </tr>
                        <tr>
                            <td>Rating</td>
                            ${compareItems.map(item => `<td>${item.rating || '-'} ★</td>`).join('')}
                        </tr>
                        <tr>
                            <td>Stock</td>
                            ${compareItems.map(item => `<td>${item.stock || 0} units</td>`).join('')}
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="compare-actions">
                <button class="btn btn-primary clear-compare-btn">
                    <i class="fas fa-times"></i> Clear Comparison
                </button>
            </div>
        `;

        const modal = Modal.show('Compare Equipment', tableHTML, 'xl');

        setTimeout(() => {
            modal.querySelector('.clear-compare-btn')?.addEventListener('click', () => {
                Compare.clear();
                modal.remove();
            });
        }, 100);
    }
};

// ============== EQUIPMENT CARD CREATION ==============
function createEquipmentCard(item) {
    const card = document.createElement('div');
    card.className = 'equipment-card';
    card.setAttribute('data-category', item.category);
    card.setAttribute('data-id', item.id);
    
    const featuresHTML = item.features.slice(0, 3).map(feature => 
        `<li class="equipment-feature"><i class="fas fa-check"></i> ${feature}</li>`
    ).join('');
    
    const isFavorite = Favorites.isFavorite(item.id) ? 'fas' : 'far';
    
    card.innerHTML = `
        <div class="equipment-badges">
            ${item.featured ? '<span class="badge-featured">Featured</span>' : ''}
            ${item.discount ? `<span class="badge-discount">${item.discount} OFF</span>` : ''}
            ${!item.inStock ? '<span class="badge-outstock">Out of Stock</span>' : ''}
        </div>
        <div class="equipment-image-wrapper">
            <img src="${item.image}" alt="${item.name}" class="equipment-img" loading="lazy">
            <div class="equipment-actions">
                <button class="equipment-action-btn favorite-btn ${isFavorite === 'fas' ? 'active' : ''}" data-id="${item.id}" title="Add to Favorites">
                    <i class="${isFavorite} fa-heart"></i>
                </button>
                <button class="equipment-action-btn compare-btn" data-id="${item.id}" title="Compare">
                    <i class="fas fa-chart-bar"></i>
                </button>
                <button class="equipment-action-btn quick-view-btn" data-id="${item.id}" title="Quick View">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
        </div>
        <div class="equipment-content">
            <div class="equipment-category-badge">${item.category.replace('-', ' ')}</div>
            <h3 class="equipment-title">${item.name}</h3>
            <div class="equipment-rating">
                ${generateStarRating(item.rating || 0)}
                <span>(${item.reviews || 0} reviews)</span>
            </div>
            <p class="equipment-description">${item.description.substring(0, 80)}...</p>
            <ul class="equipment-features">
                ${featuresHTML}
            </ul>
            <div class="equipment-footer">
                <div class="equipment-price-wrapper">
                    <span class="equipment-price-label">Price</span>
                    <span class="equipment-price">${item.price}</span>
                    ${item.rentalPrice ? `<span class="equipment-rental">Rent: ${item.rentalPrice}</span>` : ''}
                </div>
                <button class="btn btn-primary enquire-btn" data-id="${item.id}" ${!item.inStock ? 'disabled' : ''}>
                    ${item.inStock ? 'Enquire Now' : 'Out of Stock'}
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners
    setTimeout(() => {
        // Favorite button
        card.querySelector('.favorite-btn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            Favorites.toggle(item.id);
        });

        // Compare button
        card.querySelector('.compare-btn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            Compare.add(item.id);
        });

        // Quick view button
        card.querySelector('.quick-view-btn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            Modal.showEquipment(item.id);
        });

        // Enquire button
        card.querySelector('.enquire-btn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            if (item.inStock) {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                prefillEnquiryForm(item);
            }
        });

        // Card click for quick view
        card.addEventListener('click', () => {
            Modal.showEquipment(item.id);
        });
    }, 0);
    
    return card;
}

// Generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (halfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// ============== LOAD EQUIPMENT WITH PAGINATION ==============
function loadEquipment(filter = 'all', sort = 'featured', search = '', page = 1) {
    if (!DOM.equipmentGrid) return;
    
    // Show loading spinner
    if (DOM.loadingSpinner) {
        DOM.loadingSpinner.style.display = 'flex';
    }
    
    // Simulate loading delay
    setTimeout(() => {
        try {
            const filtered = Filters.apply(filter, sort, search);
            
            // Pagination
            const startIndex = (page - 1) * AppState.itemsPerPage;
            const endIndex = startIndex + AppState.itemsPerPage;
            const paginatedItems = filtered.slice(startIndex, endIndex);
            
            DOM.equipmentGrid.innerHTML = '';
            
            if (paginatedItems.length === 0) {
                DOM.equipmentGrid.innerHTML = `
                    <div class="no-equipment">
                        <i class="fas fa-search"></i>
                        <h3>No Equipment Found</h3>
                        <p>We couldn't find any equipment matching your criteria.</p>
                        <button class="btn btn-primary clear-filters-btn">
                            Clear Filters
                        </button>
                    </div>
                `;
                
                DOM.equipmentGrid.querySelector('.clear-filters-btn')?.addEventListener('click', () => {
                    loadEquipment('all', 'featured', '');
                    
                    // Reset filter buttons
                    DOM.filterButtons.forEach(btn => {
                        btn.classList.toggle('active', btn.dataset.filter === 'all');
                    });
                    
                    // Reset search input
                    if (DOM.searchInput) DOM.searchInput.value = '';
                    
                    // Reset sort select
                    if (DOM.sortSelect) DOM.sortSelect.value = 'featured';
                });
            } else {
                paginatedItems.forEach(item => {
                    const card = createEquipmentCard(item);
                    DOM.equipmentGrid.appendChild(card);
                });
            }
            
            // Update pagination
            updatePagination(filtered.length, page);
            
            // Update favorites UI
            Favorites.updateUI();
            
            // Update compare UI
            Compare.updateUI();
            
        } catch (error) {
            Utils.handleError(error, 'loadEquipment');
        } finally {
            // Hide loading spinner
            if (DOM.loadingSpinner) {
                DOM.loadingSpinner.style.display = 'none';
            }
        }
    }, 300); // Simulate network delay
}

// ============== PAGINATION SYSTEM ==============
function updatePagination(totalItems, currentPage) {
    if (!DOM.paginationContainer) return;
    
    const totalPages = Math.ceil(totalItems / AppState.itemsPerPage);
    
    if (totalPages <= 1) {
        DOM.paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `
        <button class="pagination-btn prev-btn" ${currentPage === 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i>
        </button>
    `;
    
    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    if (startPage > 1) {
        paginationHTML += `<button class="pagination-btn" data-page="1">1</button>`;
        if (startPage > 2) {
            paginationHTML += `<span class="pagination-ellipsis">...</span>`;
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <button class="pagination-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">
                ${i}
            </button>
        `;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += `<span class="pagination-ellipsis">...</span>`;
        }
        paginationHTML += `<button class="pagination-btn" data-page="${totalPages}">${totalPages}</button>`;
    }
    
    // Next button
    paginationHTML += `
        <button class="pagination-btn next-btn" ${currentPage === totalPages ? 'disabled' : ''}>
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    DOM.paginationContainer.innerHTML = paginationHTML;
    
    // Add event listeners
    DOM.paginationContainer.querySelectorAll('.pagination-btn:not([disabled])').forEach(btn => {
        btn.addEventListener('click', () => {
            let page;
            
            if (btn.classList.contains('prev-btn')) {
                page = currentPage - 1;
            } else if (btn.classList.contains('next-btn')) {
                page = currentPage + 1;
            } else {
                page = parseInt(btn.dataset.page);
            }
            
            if (page && page !== currentPage) {
                loadEquipment(
                    AppState.currentFilter,
                    AppState.currentSort,
                    AppState.searchQuery,
                    page
                );
                
                // Scroll to equipment section
                document.querySelector('.equipment-section')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============== PREFILL ENQUIRY FORM ==============
function prefillEnquiryForm(equipment) {
    const equipmentTypeSelect = document.getElementById('equipmentType');
    const subjectInput = document.getElementById('subject');
    const messageTextarea = document.getElementById('message');
    
    if (equipmentTypeSelect) {
        const categoryMap = {
            'excavators': 'excavators',
            'haul-trucks': 'haul-trucks',
            'drilling': 'drilling',
            'underground': 'underground'
        };
        
        const formValue = categoryMap[equipment.category] || 'other';
        equipmentTypeSelect.value = formValue;
    }
    
    if (subjectInput) {
        subjectInput.value = `Enquiry about ${equipment.name} (${equipment.id})`;
    }
    
    if (messageTextarea) {
        messageTextarea.value = `I'm interested in the ${equipment.name} priced at ${equipment.price}.\n\nPlease provide more information about:\n- Availability\n- Delivery timeline\n- Financing options\n\nThank you!`;
        
        // Focus on message field
        setTimeout(() => {
            messageTextarea.focus();
            messageTextarea.setSelectionRange(0, 0);
        }, 500);
    }
}

// ============== STATS COUNTER ==============
function initStatsCounter() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                DOM.statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-count'));
                    const duration = 2000;
                    const step = target / (duration / 16);
                    let current = 0;
                    
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            clearInterval(timer);
                            current = target;
                        }
                        stat.textContent = Math.floor(current);
                    }, 16);
                });
                
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });
    
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
        observer.observe(aboutSection);
    }
}

// ============== SET CURRENT YEAR ==============
function setCurrentYear() {
    const yearElement = document.querySelector('.copyright');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = yearElement.textContent.replace('2023', currentYear);
    }
}

// ============== EVENT LISTENERS SETUP ==============
function setupEventListeners() {
    // Filter buttons
    DOM.filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            DOM.filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            AppState.currentFilter = filter;
            AppState.currentPage = 1;
            
            loadEquipment(filter, AppState.currentSort, AppState.searchQuery, 1);
        });
    });
    
    // Sort select
    if (DOM.sortSelect) {
        DOM.sortSelect.addEventListener('change', function() {
            AppState.currentSort = this.value;
            AppState.currentPage = 1;
            loadEquipment(AppState.currentFilter, this.value, AppState.searchQuery, 1);
        });
    }
    
    // Search functionality
    if (DOM.searchInput && DOM.searchBtn) {
        const debouncedSearch = Utils.debounce(() => {
            const query = DOM.searchInput.value.trim();
            AppState.searchQuery = query;
            AppState.currentPage = 1;
            loadEquipment(AppState.currentFilter, AppState.currentSort, query, 1);
            
            // Show suggestions
            if (query.length >= 2) {
                const suggestions = Search.suggestions(query);
                // Implement suggestions dropdown here
            }
        }, 500);
        
        DOM.searchInput.addEventListener('input', debouncedSearch);
        
        DOM.searchBtn.addEventListener('click', () => {
            const query = DOM.searchInput.value.trim();
            AppState.searchQuery = query;
            AppState.currentPage = 1;
            loadEquipment(AppState.currentFilter, AppState.currentSort, query, 1);
        });
    }
    
    // Mobile menu toggle
    if (DOM.mobileMenuBtn && DOM.mainNav) {
        DOM.mobileMenuBtn.addEventListener('click', function() {
            DOM.mainNav.classList.toggle('active');
            const icon = this.querySelector('i');
            
            if (DOM.mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                document.body.style.overflow = 'hidden';
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = '';
            }
        });
        
        // Close mobile menu on resize
        window.addEventListener('resize', Utils.throttle(() => {
            if (window.innerWidth > 768 && DOM.mainNav.classList.contains('active')) {
                DOM.mainNav.classList.remove('active');
                document.body.style.overflow = '';
                
                const icon = DOM.mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }, 100));
    }
    
    // Close mobile menu when clicking a link
    DOM.navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && DOM.mainNav?.classList.contains('active')) {
                DOM.mainNav.classList.remove('active');
                document.body.style.overflow = '';
                
                const icon = DOM.mobileMenuBtn?.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
            
            DOM.navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Back to top button
    if (DOM.backToTopBtn) {
        window.addEventListener('scroll', Utils.throttle(() => {
            if (window.scrollY > 300) {
                DOM.backToTopBtn.classList.add('visible');
            } else {
                DOM.backToTopBtn.classList.remove('visible');
            }
        }, 100));
        
        DOM.backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Contact form submission
    if (DOM.contactForm) {
        DOM.contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            
            // Validate email
            if (!Utils.validateEmail(data.email)) {
                Notifications.error('Please enter a valid email address');
                return;
            }
            
            // Validate phone (if present)
            if (data.phone && !Utils.validatePhone(data.phone)) {
                Notifications.error('Please enter a valid phone number');
                return;
            }
            
            // Validate required fields
            if (!data.name || !data.email || !data.message) {
                Notifications.error('Please fill in all required fields');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('.form-submit');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                console.log('Form submitted:', data);
                
                Notifications.success('Thank you for your enquiry! We will contact you shortly.');
                
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (!Utils.validateEmail(email)) {
                Notifications.error('Please enter a valid email address');
                return;
            }
            
            Notifications.success('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.main-header')?.offsetHeight || 80;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Cart button
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            Cart.showCart();
        });
    }
    
    // Favorites button
    const favoritesBtn = document.getElementById('favoritesBtn');
    if (favoritesBtn) {
        favoritesBtn.addEventListener('click', () => {
            Favorites.showFavorites();
        });
    }
    
    // Compare button
    const compareBtn = document.getElementById('compareBtn');
    if (compareBtn) {
        compareBtn.addEventListener('click', () => {
            Compare.compare();
        });
    }
    
    // Clear compare button (in compare bar)
    const clearCompareBtn = document.getElementById('clearCompareBtn');
    if (clearCompareBtn) {
        clearCompareBtn.addEventListener('click', () => {
            Compare.clear();
        });
    }
}

// ============== INITIALIZATION ==============
function init() {
    try {
        // Load equipment
        loadEquipment('all');
        
        // Set up event listeners
        setupEventListeners();
        
        // Initialize stats counter
        initStatsCounter();
        
        // Set current year
        setCurrentYear();
        
        // Initialize cart UI
        Cart.updateUI();
        
        // Initialize favorites UI
        Favorites.updateUI();
        
        // Initialize compare UI
        Compare.updateUI();
        
        // Load user preferences
        loadUserPreferences();
        
        // Check for URL parameters
        checkUrlParameters();
        
        console.log('MiningPro Equipment - Application initialized successfully');
        
    } catch (error) {
        Utils.handleError(error, 'init');
    }
}

// ============== LOAD USER PREFERENCES ==============
function loadUserPreferences() {
    const savedPreferences = Utils.storage.get('userPreferences');
    if (savedPreferences) {
        userPreferences = { ...userPreferences, ...savedPreferences };
        
        // Apply theme
        if (userPreferences.theme === 'light') {
            document.body.classList.add('light-theme');
        }
        
        // Apply currency
        // Implement currency conversion here
    }
}

// ============== CHECK URL PARAMETERS ==============
function checkUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    
    const equipmentId = urlParams.get('equipment');
    if (equipmentId) {
        const id = parseInt(equipmentId);
        setTimeout(() => {
            Modal.showEquipment(id);
        }, 500);
    }
    
    const filter = urlParams.get('filter');
    if (filter) {
        setTimeout(() => {
            const filterBtn = Array.from(DOM.filterButtons).find(
                btn => btn.dataset.filter === filter
            );
            if (filterBtn) {
                filterBtn.click();
            }
        }, 500);
    }
    
    const search = urlParams.get('search');
    if (search && DOM.searchInput) {
        DOM.searchInput.value = search;
        setTimeout(() => {
            AppState.searchQuery = search;
            loadEquipment('all', 'featured', search);
        }, 500);
    }
}

// ============== EXPANDED CARD ANIMATIONS ==============
function animateCards() {
    const cards = document.querySelectorAll('.equipment-card, .service-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

// ============== LAZY LOAD IMAGES ==============
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => observer.observe(img));
}

// ============== INITIALIZE ON DOM LOAD ==============
document.addEventListener('DOMContentLoaded', init);

// ============== INITIALIZE ON WINDOW LOAD ==============
window.addEventListener('load', function() {
    // Animate cards
    animateCards();
    
    // Lazy load images
    lazyLoadImages();
    
    // Prefetch related data
    prefetchData();
});

// ============== PREFETCH DATA ==============
function prefetchData() {
    // Prefetch images
    const imagesToPrefetch = equipmentData.slice(0, 3).map(item => item.image);
    imagesToPrefetch.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// ============== SERVICE WORKER REGISTRATION ==============
if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(error => {
            console.error('ServiceWorker registration failed:', error);
        });
    });
}

// ============== EXPORT FOR TESTING ==============
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        equipmentData,
        serviceData,
        blogData,
        testimonialData,
        Cart,
        Favorites,
        Compare,
        Search,
        Filters,
        Utils,
        Notifications,
        Modal
    };
}