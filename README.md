<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
    <meta name="description" content="MiningPro Equipment - World's leading provider of heavy machinery and mining equipment solutions. New & used excavators, haul trucks, drill rigs, underground loaders.">
    <meta name="keywords" content="mining equipment, excavators, haul trucks, drill rigs, underground loaders, heavy machinery, construction equipment">
    <meta name="author" content="MiningPro Equipment Solutions">
    <meta name="robots" content="index, follow">
    <meta name="theme-color" content="#ff9900">
    <meta property="og:title" content="MiningPro Equipment | Heavy Machinery Solutions">
    <meta property="og:description" content="Premium mining equipment for surface and underground operations worldwide.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80">
    <meta property="og:url" content="https://miningpro.com">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="MiningPro Equipment | Heavy Machinery Solutions">
    <meta name="twitter:description" content="Premium mining equipment for surface and underground operations worldwide.">
    <meta name="twitter:image" content="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80">
    
    <title>MiningPro Equipment | World's Leading Heavy Machinery Solutions</title>
    <link rel="stylesheet" href="style.css">
    <!-- CSS Libraries -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Roboto:wght@300;400;500;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/fontawesome.css">
    <link rel="stylesheet" href="css/responsive.css">

    <script src="js/script.js" defer></script>
    
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff9900">
    <meta name="msapplication-TileColor" content="#ff9900">
    <meta name="theme-color" content="#ff9900">
    
    <!-- Preload critical images -->
    <link rel="preload" href="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" as="image">
</head>
<body>

    <script src="C:\Users\KINGS M LUKALI\Desktop\MININGPRO EQUIP WEB\script.js"></script>

    <!-- ===== LOADING SCREEN ===== -->
    <div class="loading-screen" id="loadingScreen">
        <div class="loading-spinner">
            <i class="fas fa-mountain"></i>
            <div class="loading-bar"></div>
            <p>Loading MiningPro...</p>
        </div>
    </div>

    <!-- ===== HEADER & NAVIGATION - ULTIMATE EDITION ===== -->
    <header class="main-header" id="mainHeader">
        <div class="container">
            <div class="logo-container" data-aos="fade-right" data-aos-duration="800">
                <i class="fas fa-mountain logo-icon"></i>
                <div class="logo-text">
                    <h1 class="logo-title">Mining<span class="text-gradient">Pro</span></h1>
                    <p class="logo-subtitle">Equipment Solutions</p>
                </div>
            </div>
            
            <div class="header-actions" data-aos="fade-left" data-aos-duration="800">
                <button class="header-action-btn" id="searchToggle" aria-label="Search">
                    <i class="fas fa-search"></i>
                </button>
                <button class="header-action-btn" id="cartBtn" aria-label="Cart">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="badge" id="cartCount">0</span>
                </button>
                <button class="header-action-btn" id="favoritesBtn" aria-label="Favorites">
                    <i class="fas fa-heart"></i>
                    <span class="badge" id="favoritesCount">0</span>
                </button>
                <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle mobile menu">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            
            <nav class="main-nav" id="mainNav">
                <ul class="nav-list">
                    <li class="nav-item"><a href="#home" class="nav-link active"><i class="fas fa-home"></i> Home</a></li>
                    <li class="nav-item"><a href="#equipment" class="nav-link"><i class="fas fa-cog"></i> Equipment</a></li>
                    <li class="nav-item"><a href="#services" class="nav-link"><i class="fas fa-tools"></i> Services</a></li>
                    <li class="nav-item"><a href="#about" class="nav-link"><i class="fas fa-info-circle"></i> About</a></li>
                    <li class="nav-item"><a href="#contact" class="nav-link"><i class="fas fa-envelope"></i> Contact</a></li>
                </ul>
            </nav>
        </div>
        
        <!-- Search Bar -->
        <div class="search-bar" id="searchBar">
            <div class="container">
                <div class="search-container">
                    <input type="text" id="searchInput" placeholder="Search equipment by name, brand, category..." class="search-input">
                    <button class="search-btn" id="searchBtn">
                        <i class="fas fa-search"></i>
                    </button>
                    <button class="search-close" id="searchClose">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="search-suggestions" id="searchSuggestions"></div>
            </div>
        </div>
    </header>

    <!-- ===== HERO SECTION - ULTIMATE EDITION ===== -->
    <section class="hero-section" id="home" style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('images/hero/mining-hero.jpg');">
        <div class="hero-overlay">
            <div class="container">
                <div class="hero-content">
                    <span class="hero-badge" data-aos="fade-down" data-aos-duration="800">Since 2022</span>
                    <h2 class="hero-title" data-aos="fade-up" data-aos-duration="1000">
                        Heavy Duty <span class="text-gradient">Mining Equipment</span>
                    </h2>
                    <p class="hero-description" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        Premium machinery for surface and underground mining operations worldwide. 
                        Built for durability, efficiency, and maximum productivity...
                    </p>
                    <div class="hero-buttons" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                        <a href="#equipment" class="btn btn-primary btn-pulse">
                            <i class="fas fa-cog"></i> View Equipment
                        </a>
                        <a href="#contact" class="btn btn-secondary btn-shine">
                            <i class="fas fa-file-invoice"></i> Request Quote
                        </a>
                    </div>
                    
                    <div class="hero-stats" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                        <div class="hero-stat-item">
                            <span class="hero-stat-number">500+</span>
                            <span class="hero-stat-label">Equipment Sold</span>
                        </div>
                        <div class="hero-stat-item">
                            <span class="hero-stat-number">40+</span>
                            <span class="hero-stat-label">Countries</span>
                        </div>
                        <div class="hero-stat-item">
                            <span class="hero-stat-number">24/7</span>
                            <span class="hero-stat-label">Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="hero-scroll-indicator">
            <span>Scroll</span>
            <i class="fas fa-chevron-down"></i>
        </div>
    </section>

    <!-- ===== EQUIPMENT SECTION - ULTIMATE EDITION ===== -->
    <section class="equipment-section" id="equipment">
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <span class="section-tag">Our Fleet</span>
                <h2 class="section-title">Premium Mining <span class="text-gradient">Equipment</span></h2>
                <p class="section-subtitle">High-performance machinery for every mining operation, backed by industry-leading warranties and support.</p>
            </div>
            
            <div class="equipment-toolbar" data-aos="fade-up">
                <div class="equipment-filters">
                    <button class="filter-btn active" data-filter="all">All Equipment</button>
                    <button class="filter-btn" data-filter="excavators">Excavators</button>
                    <img src="mining-escavator.jpg">
                    <button class="filter-btn" data-filter="haul-trucks">Haul Trucks</button>
                    <img src="pexels-parinduan-10006261.jpg">
                    <button class="filter-btn" data-filter="drilling">Drilling</button>
                    <button class="filter-btn" data-filter="underground">Underground</button>
                </div>
                
                <div class="equipment-sort">
                    <select id="sortSelect" class="sort-select">
                        <option value="featured">Featured</option>
                        <option value="newest">Newest</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Highest Rated</option>
                    </select>
                </div>
            </div>
            
            <!-- Loading Spinner -->
            <div class="loading-spinner" id="loadingSpinner">
                <div class="spinner"></div>
                <p>Loading equipment...</p>
            </div>
            
            <!-- Equipment Grid -->
            <div class="equipment-grid" id="equipmentGrid"></div>
            
            <!-- Pagination -->
            <div class="pagination" id="pagination"></div>
        </div>
    </section>

    <!-- ===== SERVICES SECTION - ULTIMATE EDITION ===== -->
    <section class="services-section" id="services">
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <span class="section-tag">What We Offer</span>
                <h2 class="section-title">Comprehensive <span class="text-gradient">Services</span></h2>
                <p class="section-subtitle">End-to-end support for your mining operations, from equipment supply to maintenance and training.</p>
            </div>
            
            <div class="services-grid" id="servicesGrid"></div>
        </div>
    </section>

    <!-- ===== ABOUT SECTION - ULTIMATE EDITION ===== -->
<!-- About Section -->
<section class="about-section" id="about">
    <div class="container">
        <div class="about-content">
            <div class="about-text">
                <h2 class="section-title">About MiningPro Equipment</h2>
                <p class="about-description">With over 25 years of experience in the mining industry, we provide comprehensive equipment solutions for mining operations worldwide. Our expertise spans surface mining, underground operations, and mineral processing.</p>
                
                <div class="about-stats">
                    <div class="stat-item">
                        <span class="stat-number" data-count="250">0</span>
                        <span class="stat-label">Equipment Units</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number" data-count="40">0</span>
                        <span class="stat-label">Countries Served</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number" data-count="150">0</span>
                        <span class="stat-label">Expert Technicians</span>
                    </div>
                </div>
                
                <a href="#contact" class="btn btn-primary">Learn More About Us</a>
            </div>
            
            <div class="about-image">
                <img src="images/about/mining-operation.jpg" alt="Mining operation overview" class="about-img">
            </div>
        </div>
    </div>
</section>

    <!-- ===== TESTIMONIALS SECTION ===== -->
    <section class="testimonials-section">
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <span class="section-tag">Client Feedback</span>
                <h2 class="section-title">What Our <span class="text-gradient">Clients Say</span></h2>
                <p class="section-subtitle">Trusted by mining companies worldwide</p>
            </div>
            
            <div class="testimonials-grid" id="testimonialsGrid"></div>
        </div>
    </section>

    <!-- ===== BLOG/NEWS SECTION ===== -->
    <section class="blog-section">
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <span class="section-tag">Industry Insights</span>
                <h2 class="section-title">Latest <span class="text-gradient">News & Articles</span></h2>
                <p class="section-subtitle">Stay updated with the latest trends in mining technology</p>
            </div>
            
            <div class="blog-grid" id="blogGrid"></div>
        </div>
    </section>

    <!-- ===== CONTACT SECTION - ULTIMATE EDITION ===== -->
    <section class="contact-section" id="contact">
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <span class="section-tag">Get In Touch</span>
                <h2 class="section-title">Contact <span class="text-gradient">Us</span></h2>
                <p class="section-subtitle">Ready to upgrade your mining operation? Contact our team for a personalized consultation.</p>
            </div>
            
            <div class="contact-content">
                <div class="contact-info" data-aos="fade-right">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-details">
                            <h3 class="contact-title">Our Location</h3>
                            <p class="contact-text">123 Mining Avenue, Denver, CO 80202, USA</p>
                            <p class="contact-text">Headquarters: Suite 500</p>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-phone-alt"></i>
                        </div>
                        <div class="contact-details">
                            <h3 class="contact-title">Phone Number</h3>
                            <p class="contact-text">Sales: +1 (555) 123-4567</p>
                            <p class="contact-text">Support: +1 (555) 765-4321</p>
                            <p class="contact-text">Emergency: +1 (555) 999-8888</p>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-details">
                            <h3 class="contact-title">Email Address</h3>
                            <p class="contact-text">sales@miningpro.com</p>
                            <p class="contact-text">support@miningpro.com</p>
                            <p class="contact-text">info@miningpro.com</p>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="contact-details">
                            <h3 class="contact-title">Business Hours</h3>
                            <p class="contact-text">Monday - Friday: 8:00 AM - 6:00 PM</p>
                            <p class="contact-text">Saturday: 9:00 AM - 1:00 PM</p>
                            <p class="contact-text">Sunday: Closed (Emergency Support Available)</p>
                        </div>
                    </div>
                    
                    <div class="contact-social">
                        <h3 class="contact-social-title">Follow Us</h3>
                        <div class="contact-social-icons">
                            <a href="#" class="contact-social-icon" aria-label="Facebook">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="contact-social-icon" aria-label="Twitter">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="contact-social-icon" aria-label="LinkedIn">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" class="contact-social-icon" aria-label="Instagram">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="contact-social-icon" aria-label="YouTube">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="contact-form-wrapper" data-aos="fade-left">
                    <div class="contact-form-header">
                        <h3>Send Us a Message</h3>
                        <p>We'll respond within 24 hours</p>
                    </div>
                    
                    <form id="contactForm" class="contact-form">
                        <div class="form-row">
                            <div class="form-group">
                                <input type="text" id="name" name="name" placeholder="Your Full Name" required class="form-input">
                                <i class="fas fa-user form-icon"></i>
                            </div>
                            
                            <div class="form-group">
                                <input type="email" id="email" name="email" placeholder="Your Email Address" required class="form-input">
                                <i class="fas fa-envelope form-icon"></i>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" class="form-input">
                                <i class="fas fa-phone form-icon"></i>
                            </div>
                            
                            <div class="form-group">
                                <input type="text" id="subject" name="subject" placeholder="Subject" required class="form-input">
                                <i class="fas fa-tag form-icon"></i>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <textarea id="message" name="message" placeholder="Your Message" rows="5" required class="form-textarea"></textarea>
                            <i class="fas fa-comment form-icon textarea-icon"></i>
                        </div>
                        
                        <div class="form-group">
                            <select id="equipmentType" name="equipmentType" class="form-select">
                                <option value="">Select Equipment Interest (Optional)</option>
                                <option value="excavators">Excavators</option>
                                <option value="haul-trucks">Haul Trucks</option>
                                <option value="drilling">Drilling Equipment</option>
                                <option value="underground">Underground Equipment</option>
                                <option value="other">Other Equipment</option>
                            </select>
                        </div>
                        
                        <div class="form-group checkbox-group">
                            <input type="checkbox" id="newsletter" name="newsletter" checked>
                            <label for="newsletter">Subscribe to our newsletter for updates and offers</label>
                        </div>
                        
                        <button type="submit" class="btn btn-primary form-submit btn-3d">
                            <i class="fas fa-paper-plane"></i> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== NEWSLETTER SECTION ===== -->
    <section class="newsletter-section">
        <div class="container">
            <div class="newsletter-content" data-aos="fade-up">
                <div class="newsletter-icon">
                    <i class="fas fa-envelope-open-text"></i>
                </div>
                <h2 class="newsletter-title">Subscribe to Our Newsletter</h2>
                <p class="newsletter-description">Get the latest equipment updates, industry news, and exclusive offers directly in your inbox.</p>
                
                <form id="newsletterForm" class="newsletter-form">
                    <div class="newsletter-input-group">
                        <input type="email" id="newsletterEmail" placeholder="Enter your email address" required>
                        <button type="submit" class="btn btn-primary">Subscribe</button>
                    </div>
                    <div class="newsletter-checkbox">
                        <input type="checkbox" id="privacyConsent" required>
                        <label for="privacyConsent">I agree to the Privacy Policy and consent to receive marketing emails</label>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <!-- ===== FOOTER - ULTIMATE EDITION ===== -->
    <footer class="main-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-about" data-aos="fade-right">
                    <div class="footer-logo">
                        <i class="fas fa-mountain footer-logo-icon"></i>
                        <div>
                            <h3 class="footer-title">Mining<span class="text-gradient">Pro</span></h3>
                            <p class="footer-tagline">Building the future of mining</p>
                        </div>
                    </div>
                    <p class="footer-description">
                        MiningPro Equipment is the world's leading provider of heavy machinery and equipment solutions 
                        for the mining industry. With over 25 years of experience, we deliver excellence in every project.
                    </p>
                    <div class="footer-certifications">
                        <img src="https://via.placeholder.com/80x40?text=ISO+9001" alt="ISO 9001 Certified" loading="lazy">
                        <img src="https://via.placeholder.com/80x40?text=OSHA" alt="OSHA Compliant" loading="lazy">
                        <img src="https://via.placeholder.com/80x40?text=MSHA" alt="MSHA Certified" loading="lazy">
                    </div>
                </div>
                
                <div class="footer-links" data-aos="fade-up">
                    <h4 class="footer-heading">Quick Links</h4>
                    <ul class="footer-list">
                        <li><a href="#home" class="footer-link"><i class="fas fa-chevron-right"></i> Home</a></li>
                        <li><a href="#equipment" class="footer-link"><i class="fas fa-chevron-right"></i> Equipment</a></li>
                        <li><a href="#services" class="footer-link"><i class="fas fa-chevron-right"></i> Services</a></li>
                        <li><a href="#about" class="footer-link"><i class="fas fa-chevron-right"></i> About Us</a></li>
                        <li><a href="#contact" class="footer-link"><i class="fas fa-chevron-right"></i> Contact</a></li>
                        <li><a href="#" class="footer-link"><i class="fas fa-chevron-right"></i> Careers</a></li>
                    </ul>
                </div>
                
                <div class="footer-links" data-aos="fade-up" data-aos-delay="100">
                    <h4 class="footer-heading">Equipment</h4>
                    <ul class="footer-list">
                        <li><a href="#" class="footer-link"><i class="fas fa-chevron-right"></i> Excavators</a></li>
                        <li><a href="#" class="footer-link"><i class="fas fa-chevron-right"></i> Haul Trucks</a></li>
                        <li><a href="#" class="footer-link"><i class="fas fa-chevron-right"></i> Drill Rigs</a></li>
                        <li><a href="#" class="footer-link"><i class="fas fa-chevron-right"></i> Underground Loaders</a></li>
                        <li><a href="#" class="footer-link"><i class="fas fa-chevron-right"></i> Bulldozers</a></li>
                        <li><a href="#" class="footer-link"><i class="fas fa-chevron-right"></i> Graders</a></li>
                    </ul>
                </div>
                
                <div class="footer-links" data-aos="fade-up" data-aos-delay="200">
                    <h4 class="footer-heading">Support</h4>
                    <ul class="footer-list">
                        <li><a href="#" class="footer-link"><i class="fas fa-chevron-right"></i> Help Center</a></li>
                        <li><a href="#" class="footer-link"><i class="fas fa-chevron-right"></i> FAQ</a></li>
                        <li><a href="#" class="footer-link"><i class="fas fa-chevron-right"></i> Shipping & Delivery</a></li>
                        <li><a href="#" class="footer-link"><i class="fas fa-chevron-right"></i> Returns Policy</a></li>
                        <li><a href="#" class="footer-link"><i class="fas fa-chevron-right"></i> Warranty Information</a></li>
                        <li><a href="#" class="footer-link"><i class="fas fa-chevron-right"></i> Financing</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <div class="footer-bottom-left">
                    <p class="copyright">&copy; 2024 MiningPro Equipment Solutions. All rights reserved.</p>
                    <div class="footer-legal">
                        <a href="#" class="legal-link">Privacy Policy</a>
                        <a href="#" class="legal-link">Terms of Service</a>
                        <a href="#" class="legal-link">Cookie Policy</a>
                        <a href="#" class="legal-link">Sitemap</a>
                    </div>
                </div>
                
                <div class="footer-social">
                    <a href="#" class="social-icon" aria-label="Facebook">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="social-icon" aria-label="Twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="social-icon" aria-label="LinkedIn">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" class="social-icon" aria-label="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="social-icon" aria-label="YouTube">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>

    <!-- ===== BACK TO TOP BUTTON ===== -->
    <button class="back-to-top" id="backToTop" aria-label="Back to top">
        <i class="fas fa-arrow-up"></i>
    </button>

    <!-- ===== COMPARE BAR ===== -->
    <div class="compare-bar" id="compareBar">
        <div class="container">
            <div class="compare-bar-content">
                <div class="compare-info">
                    <i class="fas fa-chart-bar"></i>
                    <span>Compare Equipment (<span class="compare-count">0</span>/4)</span>
                </div>
                <div class="compare-actions">
                    <button class="btn btn-sm btn-primary" id="compareBtn">
                        <i class="fas fa-chart-bar"></i> Compare Now
                    </button>
                    <button class="btn btn-sm btn-outline" id="clearCompareBtn">
                        <i class="fas fa-times"></i> Clear
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- ===== TOAST NOTIFICATION CONTAINER ===== -->
    <div class="toast-container" id="toastContainer"></div>

    <!-- ===== MODAL CONTAINER ===== -->
    <div class="modal-container" id="modalContainer"></div>

    <!-- ===== EXTERNAL SCRIPTS ===== -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    
    <!-- ===== CUSTOM JAVASCRIPT - ULTIMATE EDITION ===== -->
    <script src="js/script.js"></script>
    
    <script>
        // Initialize AOS (Animate on Scroll)
        document.addEventListener('DOMContentLoaded', function() {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100,
                easing: 'ease-in-out'
            });
        });
        /* ===== RESET AND BASE STYLES ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Color System - Extended */
    --primary-color: #ff9900;
    --primary-dark: #e68a00;
    --primary-light: #ffb84d;
    --primary-alpha: rgba(255, 153, 0, 0.1);
    --primary-gradient: linear-gradient(135deg, #ff9900, #ffb84d, #ffaa33);
    --secondary-color: #1a1a2e;
    --secondary-light: #252547;
    --secondary-dark: #0f0f1f;
    --secondary-gradient: linear-gradient(135deg, #1a1a2e, #252547);
    
    /* Text Colors - Extended */
    --text-color: #e6e6e6;
    --text-light: #b3b3b3;
    --text-dark: #0d0d1a;
    --text-muted: #808080;
    --text-white: #ffffff;
    
    /* Background Colors - Extended */
    --background-dark: #0d0d1a;
    --background-light: #1a1a2e;
    --background-darker: #080810;
    --background-lighter: #2a2a4a;
    --card-bg: #252547;
    --card-bg-hover: #2f2f5a;
    --overlay-dark: rgba(0, 0, 0, 0.8);
    --overlay-light: rgba(255, 255, 255, 0.1);
    
    /* Border Colors */
    --border-color: #333366;
    --border-light: #40407a;
    --border-primary: rgba(255, 153, 0, 0.3);
    
    /* Status Colors */
    --success-color: #28a745;
    --success-dark: #218838;
    --success-light: #d4edda;
    --danger-color: #dc3545;
    --danger-dark: #c82333;
    --danger-light: #f8d7da;
    --warning-color: #ffc107;
    --warning-dark: #e0a800;
    --warning-light: #fff3cd;
    --info-color: #17a2b8;
    --info-dark: #138496;
    --info-light: #d1ecf1;
    
    /* Spacing System */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-xxl: 48px;
    --spacing-xxxl: 64px;
    --spacing-huge: 80px;
    
    /* Typography */
    --font-primary: 'Montserrat', sans-serif;
    --font-secondary: 'Roboto', sans-serif;
    --font-size-xs: 0.75rem;    /* 12px */
    --font-size-sm: 0.875rem;    /* 14px */
    --font-size-md: 1rem;        /* 16px */
    --font-size-lg: 1.125rem;    /* 18px */
    --font-size-xl: 1.25rem;     /* 20px */
    --font-size-xxl: 1.5rem;     /* 24px */
    --font-size-xxxl: 2rem;      /* 32px */
    --font-size-huge: 2.5rem;    /* 40px */
    --font-size-giant: 3.5rem;   /* 56px */
    --font-size-massive: 4.5rem; /* 72px */
    
    /* Font Weights */
    --font-light: 300;
    --font-regular: 400;
    --font-medium: 500;
    --font-semibold: 600;
    --font-bold: 700;
    --font-extrabold: 800;
    
    /* Shadows - Extended */
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.15);
    --shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.4);
    --shadow-xl: 0 15px 30px rgba(0, 0, 0, 0.5);
    --shadow-hover: 0 20px 40px rgba(0, 0, 0, 0.6);
    --shadow-inset: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    --shadow-glow: 0 0 15px rgba(255, 153, 0, 0.3);
    --shadow-glow-hover: 0 0 25px rgba(255, 153, 0, 0.5);
    --shadow-text: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
    /* Transitions - Extended */
    --transition-fast: all 0.2s ease;
    --transition: all 0.3s ease;
    --transition-slow: all 0.5s ease;
    --transition-bounce: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    --transition-elastic: all 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    
    /* Border Radius - Extended */
    --radius-xs: 2px;
    --radius-sm: 4px;
    --radius: 8px;
    --radius-md: 10px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-xxl: 20px;
    --radius-circle: 50%;
    --radius-pill: 50px;
    
    /* Layout */
    --container-max-width: 1200px;
    --container-fluid-max-width: 100%;
    --header-height: 80px;
    --header-height-scrolled: 60px;
    --footer-height: auto;
    --sidebar-width: 280px;
    
    /* Z-Index Scale */
    --z-index-negative: -1;
    --z-index-low: 10;
    --z-index-normal: 100;
    --z-index-high: 200;
    --z-index-dropdown: 1000;
    --z-index-sticky: 1020;
    --z-index-fixed: 1030;
    --z-index-modal-backdrop: 1040;
    --z-index-modal: 1050;
    --z-index-popover: 1060;
    --z-index-tooltip: 1070;
    
    /* Animations */
    --animation-speed: 0.3s;
    --animation-speed-slow: 0.6s;
    --animation-speed-fast: 0.15s;
}

/* ===== SCROLLBAR STYLING ===== */
::-webkit-scrollbar {
    width: 12px;
    height: 12px;
}

::-webkit-scrollbar-track {
    background: var(--background-darker);
    border-radius: var(--radius);
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, var(--border-color), var(--secondary-light));
    border-radius: var(--radius);
    border: 2px solid var(--background-darker);
    transition: var(--transition);
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(45deg, var(--primary-color), var(--primary-dark));
}

::-webkit-scrollbar-corner {
    background: var(--background-darker);
}

/* ===== SELECTION STYLING ===== */
::selection {
    background-color: var(--primary-color);
    color: var(--text-dark);
    text-shadow: none;
}

::-moz-selection {
    background-color: var(--primary-color);
    color: var(--text-dark);
    text-shadow: none;
}

/* ===== BASE HTML STYLES ===== */
html {
    scroll-behavior: smooth;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

body {
    font-family: var(--font-secondary);
    color: var(--text-color);
    background-color: var(--background-dark);
    line-height: 1.6;
    overflow-x: hidden;
    min-height: 100vh;
    position: relative;
    font-size: var(--font-size-md);
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-primary);
    font-weight: var(--font-bold);
    line-height: 1.2;
    margin-bottom: var(--spacing-md);
    letter-spacing: -0.02em;
}

/* ===== CONTAINER ===== */
.container {
    width: 100%;
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
    position: relative;
}

.container-fluid {
    width: 100%;
    padding: 0 var(--spacing-lg);
    margin: 0 auto;
}

.container-sm {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}

.container-lg {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}

/* ===== TYPOGRAPHY UTILITIES ===== */
.text-gradient {
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.text-primary { color: var(--primary-color); }
.text-secondary { color: var(--secondary-color); }
.text-light { color: var(--text-light); }
.text-dark { color: var(--text-dark); }
.text-muted { color: var(--text-muted); }
.text-white { color: var(--text-white); }
.text-success { color: var(--success-color); }
.text-danger { color: var(--danger-color); }
.text-warning { color: var(--warning-color); }
.text-info { color: var(--info-color); }

.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }

.text-uppercase { text-transform: uppercase; }
.text-lowercase { text-transform: lowercase; }
.text-capitalize { text-transform: capitalize; }

.text-bold { font-weight: var(--font-bold); }
.text-semibold { font-weight: var(--font-semibold); }
.text-medium { font-weight: var(--font-medium); }
.text-regular { font-weight: var(--font-regular); }
.text-light { font-weight: var(--font-light); }

/* ===== BUTTONS - EXTENDED ===== */
.btn {
    display: inline-block;
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--radius-pill);
    font-weight: var(--font-semibold);
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: var(--transition-bounce);
    border: none;
    font-family: var(--font-primary);
    font-size: var(--font-size-md);
    position: relative;
    overflow: hidden;
    z-index: 1;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: var(--transition);
    z-index: -1;
}

.btn:hover::before {
    left: 100%;
}

.btn-primary {
    background: var(--primary-gradient);
    color: var(--text-dark);
    box-shadow: var(--shadow);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-glow);
}

.btn-primary:active {
    transform: translateY(-1px);
}

.btn-secondary {
    background-color: transparent;
    color: var(--text-color);
    border: 2px solid var(--primary-color);
    position: relative;
    z-index: 1;
}

.btn-secondary::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--primary-gradient);
    transition: var(--transition);
    z-index: -1;
}

.btn-secondary:hover {
    color: var(--text-dark);
    border-color: transparent;
}

.btn-secondary:hover::after {
    width: 100%;
}

.btn-outline {
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
}

.btn-outline:hover {
    background-color: var(--primary-color);
    color: var(--text-dark);
}

.btn-lg {
    padding: var(--spacing-lg) var(--spacing-xxl);
    font-size: var(--font-size-lg);
}

.btn-sm {
    padding: var(--spacing-sm) var(--spacing-lg);
    font-size: var(--font-size-sm);
}

.btn-block {
    display: block;
    width: 100%;
}

.btn-icon {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.btn-icon i {
    font-size: 1.2em;
}

.btn-disabled,
.btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
}

/* ===== HEADER - ENHANCED ===== */
.main-header {
    background-color: var(--background-dark);
    padding: var(--spacing-lg) 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: var(--z-index-fixed);
    box-shadow: var(--shadow);
    border-bottom: 3px solid var(--primary-color);
    transition: var(--transition);
}

.main-header.scrolled {
    padding: var(--spacing-md) 0;
    background-color: rgba(13, 13, 26, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.main-header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-container {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    transition: var(--transition);
}

.logo-container:hover {
    transform: scale(1.05);
}

.logo-icon {
    font-size: 2.5rem;
    color: var(--primary-color);
    animation: rotate 20s linear infinite;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.logo-text {
    line-height: 1.2;
}

.logo-title {
    font-size: 1.8rem;
    color: var(--text-color);
    margin: 0;
    transition: var(--transition);
}

.logo-container:hover .logo-title {
    color: var(--primary-color);
}

.logo-subtitle {
    font-size: var(--font-size-sm);
    color: var(--text-light);
    margin: 0;
    letter-spacing: 1px;
}

/* ===== NAVIGATION - ENHANCED ===== */
.main-nav {
    display: flex;
}

.nav-list {
    display: flex;
    list-style: none;
    gap: var(--spacing-xl);
}

.nav-link {
    color: var(--text-color);
    text-decoration: none;
    font-weight: var(--font-semibold);
    font-size: var(--font-size-md);
    padding: var(--spacing-sm) 0;
    position: relative;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
}

.nav-link i {
    font-size: 1.1em;
    transition: var(--transition);
}

.nav-link:hover,
.nav-link.active {
    color: var(--primary-color);
}

.nav-link:hover i {
    transform: translateY(-2px);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: var(--primary-gradient);
    transition: var(--transition);
    border-radius: var(--radius-pill);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    color: var(--text-color);
    font-size: 1.8rem;
    cursor: pointer;
    transition: var(--transition);
}

.mobile-menu-btn:hover {
    color: var(--primary-color);
    transform: rotate(90deg);
}

/* ===== HERO SECTION - ENHANCED ===== */
.hero-section {
    height: 100vh;
    min-height: 600px;
    background-image: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), 
                      url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    margin-top: 80px;
    position: relative;
    overflow: hidden;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%);
    pointer-events: none;
}

.hero-section::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--primary-gradient);
}

.hero-overlay {
    width: 100%;
    padding: var(--spacing-xxl) 0;
    position: relative;
    z-index: 2;
}

.hero-content {
    max-width: 800px;
    text-align: center;
    margin: 0 auto;
    animation: fadeInUp 1s ease;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hero-title {
    font-size: var(--font-size-massive);
    margin-bottom: var(--spacing-lg);
    color: var(--text-color);
    text-shadow: var(--shadow-text);
    animation: slideInLeft 1s ease;
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.hero-description {
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-xl);
    color: var(--text-light);
    animation: slideInRight 1s ease 0.3s both;
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.hero-buttons {
    display: flex;
    gap: var(--spacing-lg);
    justify-content: center;
    flex-wrap: wrap;
    animation: fadeIn 1s ease 0.6s both;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.hero-scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-xs);
    color: var(--text-light);
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-20px); }
    60% { transform: translateX(-50%) translateY(-10px); }
}

/* ===== SECTION COMMON STYLES - ENHANCED ===== */
.section-header {
    text-align: center;
    margin-bottom: var(--spacing-xxl);
    position: relative;
}

.section-title {
    font-size: var(--font-size-huge);
    color: var(--text-color);
    margin-bottom: var(--spacing-md);
    position: relative;
    display: inline-block;
}

.section-title::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: var(--primary-gradient);
    border-radius: var(--radius-pill);
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: var(--primary-gradient);
    border-radius: var(--radius-pill);
}

.section-subtitle {
    font-size: var(--font-size-lg);
    color: var(--text-light);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
}

/* ===== EQUIPMENT SECTION - ENHANCED ===== */
.equipment-section {
    padding: var(--spacing-xxxl) 0;
    background: linear-gradient(135deg, var(--background-light), var(--background-dark));
    position: relative;
    overflow: hidden;
}

.equipment-section::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,153,0,0.03) 0%, transparent 70%);
    pointer-events: none;
}

.equipment-filters {
    display: flex;
    justify-content: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-xl);
    flex-wrap: wrap;
}

.filter-btn {
    padding: var(--spacing-sm) var(--spacing-xl);
    background-color: transparent;
    border: 2px solid var(--border-color);
    color: var(--text-color);
    border-radius: var(--radius-pill);
    cursor: pointer;
    font-weight: var(--font-semibold);
    transition: var(--transition-bounce);
    font-size: var(--font-size-sm);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.filter-btn:hover,
.filter-btn.active {
    background: var(--primary-gradient);
    border-color: transparent;
    color: var(--text-dark);
    transform: translateY(-3px);
    box-shadow: var(--shadow-glow);
}

.equipment-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: var(--spacing-xl);
}

.equipment-card {
    background: linear-gradient(145deg, var(--card-bg), var(--secondary-dark));
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: var(--transition-elastic);
    box-shadow: var(--shadow);
    position: relative;
    z-index: 1;
}

.equipment-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255,153,0,0.1), transparent);
    transform: translateX(-100%);
    transition: var(--transition);
    z-index: 0;
}

.equipment-card:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: var(--shadow-xl);
}

.equipment-card:hover::before {
    transform: translateX(100%);
}

.equipment-img {
    width: 15%;
    height: 10px;
    object-fit: cover;
    border-bottom: 1px solid var(--primary-color);
    transition: var(--transition);
}

.equipment-card:hover .equipment-img {
    transform: scale(1.1);
}

.equipment-content {
    padding: var(--spacing-xl);
    position: relative;
    z-index: 2;
}

.equipment-title {
    font-size: var(--font-size-xxl);
    color: var(--primary-color);
    margin-bottom: var(--spacing-md);
    transition: var(--transition);
}

.equipment-card:hover .equipment-title {
    color: var(--primary-light);
}

.equipment-description {
    color: var(--text-light);
    margin-bottom: var(--spacing-lg);
    line-height: 1.7;
}

.equipment-features {
    list-style: none;
    margin-bottom: var(--spacing-lg);
}

.equipment-feature {
    color: var(--text-color);
    margin-bottom: var(--spacing-sm);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    font-size: var(--font-size-sm);
}

.equipment-feature i {
    color: var(--primary-color);
    width: 20px;
    text-align: center;
}

.equipment-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--spacing-lg);
}

.equipment-price {
    font-weight: var(--font-extrabold);
    color: var(--primary-color);
    font-size: var(--font-size-xl);
    position: relative;
    display: inline-block;
}

.equipment-price::before {
    content: 'Starting from';
    display: block;
    font-size: var(--font-size-xs);
    color: var(--text-light);
    font-weight: var(--font-regular);
    margin-bottom: var(--spacing-xs);
}

/* ===== SERVICES SECTION - ENHANCED ===== */
.services-section {
    padding: var(--spacing-xxxl) 0;
    background: linear-gradient(135deg, var(--background-dark), var(--background-darker));
    position: relative;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--spacing-xl);
}

.service-card {
    background: linear-gradient(145deg, var(--card-bg), var(--secondary-dark));
    padding: var(--spacing-xl);
    border-radius: var(--radius-lg);
    text-align: center;
    transition: var(--transition-elastic);
    box-shadow: var(--shadow);
    position: relative;
    z-index: 1;
    overflow: hidden;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--primary-gradient);
    transform: scaleX(0);
    transition: var(--transition);
    z-index: 2;
}

.service-card:hover::before {
    transform: scaleX(1);
}

.service-card::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,153,0,0.1) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
}

.service-card:hover {
    transform: translateY(-15px);
    box-shadow: var(--shadow-xl);
}

.service-icon {
    font-size: 3.5rem;
    color: var(--primary-color);
    margin-bottom: var(--spacing-lg);
    transition: var(--transition-bounce);
    position: relative;
    z-index: 1;
}

.service-card:hover .service-icon {
    transform: scale(1.2) rotate(360deg);
    color: var(--primary-light);
}

.service-title {
    font-size: var(--font-size-xl);
    color: var(--text-color);
    margin-bottom: var(--spacing-md);
    position: relative;
    z-index: 1;
}

.service-description {
    color: var(--text-light);
    line-height: 1.7;
    position: relative;
    z-index: 1;
}

/* ===== ABOUT SECTION - ENHANCED ===== */
.about-section {
    padding: var(--spacing-xxxl) 0;
    background: linear-gradient(135deg, var(--background-light), var(--background-dark));
    position: relative;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xxl);
    align-items: center;
}

.about-text {
    padding-right: var(--spacing-xl);
}

.about-description {
    font-size: var(--font-size-lg);
    color: var(--text-light);
    margin-bottom: var(--spacing-xl);
    line-height: 1.9;
}

.about-stats {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacing-xl);
    flex-wrap: wrap;
    gap: var(--spacing-lg);
}

.stat-item {
    text-align: center;
    flex: 1;
    min-width: 120px;
}

.stat-number {
    display: block;
    font-size: 3rem;
    font-weight: var(--font-extrabold);
    color: var(--primary-color);
    margin-bottom: var(--spacing-xs);
    position: relative;
    display: inline-block;
}

.stat-number::after {
    content: '+';
    font-size: 2rem;
    color: var(--primary-light);
    position: absolute;
    top: 0;
    right: -20px;
}

.stat-label {
    color: var(--text-light);
    font-size: var(--font-size-sm);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.about-image {
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-xl);
    position: relative;
}

.about-image::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255,153,0,0.3), transparent);
    z-index: 1;
    opacity: 0;
    transition: var(--transition);
}

.about-image:hover::before {
    opacity: 1;
}

.about-img {
    width: 100%;
    height: auto;
    display: block;
    transition: var(--transition-slow);
}

.about-image:hover .about-img {
    transform: scale(1.1);
}

/* ===== CONTACT SECTION - ENHANCED ===== */
.contact-section {
    padding: var(--spacing-xxxl) 0;
    background: linear-gradient(135deg, var(--background-dark), var(--background-darker));
    position: relative;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xxl);
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
}

.contact-item {
    display: flex;
    gap: var(--spacing-lg);
    align-items: flex-start;
    padding: var(--spacing-lg);
    background: linear-gradient(145deg, var(--card-bg), var(--secondary-dark));
    border-radius: var(--radius-lg);
    transition: var(--transition);
}

.contact-item:hover {
    transform: translateX(10px);
    box-shadow: var(--shadow-lg);
}

.contact-icon {
    width: 60px;
    height: 60px;
    background: var(--primary-gradient);
    border-radius: var(--radius-circle);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-dark);
    font-size: 1.5rem;
    flex-shrink: 0;
    transition: var(--transition-bounce);
}

.contact-item:hover .contact-icon {
    transform: rotate(360deg);
}

.contact-details {
    flex: 1;
}

.contact-title {
    font-size: var(--font-size-lg);
    color: var(--text-color);
    margin-bottom: var(--spacing-xs);
}

.contact-text {
    color: var(--text-light);
    line-height: 1.6;
    font-size: var(--font-size-sm);
}

.contact-form {
    background: linear-gradient(145deg, var(--card-bg), var(--secondary-dark));
    padding: var(--spacing-xl);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-xl);
    position: relative;
    overflow: hidden;
}

.contact-form::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--primary-gradient);
}

.form-group {
    margin-bottom: var(--spacing-lg);
    position: relative;
}

.form-input,
.form-textarea,
.form-select {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-lg);
    background-color: rgba(255, 255, 255, 0.05);
    border: 2px solid transparent;
    border-radius: var(--radius);
    color: var(--text-color);
    font-family: var(--font-secondary);
    font-size: var(--font-size-md);
    transition: var(--transition);
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
    outline: none;
    border-color: var(--primary-color);
    background-color: rgba(255, 153, 0, 0.05);
    box-shadow: var(--shadow-glow);
}

.form-input:hover,
.form-textarea:hover,
.form-select:hover {
    border-color: var(--border-primary);
}

.form-textarea {
    resize: vertical;
    min-height: 120px;
}

.form-label {
    position: absolute;
    left: var(--spacing-lg);
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    transition: var(--transition);
    pointer-events: none;
    font-size: var(--font-size-sm);
}

.form-input:focus ~ .form-label,
.form-input:not(:placeholder-shown) ~ .form-label {
    top: 0;
    left: var(--spacing-md);
    font-size: var(--font-size-xs);
    background-color: var(--card-bg);
    padding: 0 var(--spacing-xs);
    color: var(--primary-color);
}

.form-submit {
    width: 100%;
    padding: var(--spacing-lg);
    font-size: var(--font-size-lg);
    margin-top: var(--spacing-lg);
}

/* ===== FOOTER - ENHANCED ===== */
.main-footer {
    background: linear-gradient(135deg, var(--secondary-dark), var(--background-darker));
    padding: var(--spacing-xxxl) 0 var(--spacing-xl);
    border-top: 4px solid var(--primary-color);
    position: relative;
    overflow: hidden;
}

.main-footer::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,153,0,0.05) 0%, transparent 70%);
    pointer-events: none;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-xl);
    margin-bottom: var(--spacing-xl);
    position: relative;
    z-index: 2;
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    transition: var(--transition);
}

.footer-logo:hover {
    transform: translateY(-5px);
}

.footer-logo-icon {
    font-size: 3rem;
    color: var(--primary-color);
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.footer-title {
    font-size: var(--font-size-xl);
    color: var(--text-color);
    margin-bottom: var(--spacing-xs);
}

.footer-tagline {
    color: var(--text-light);
    font-size: var(--font-size-sm);
}

.footer-heading {
    font-size: var(--font-size-lg);
    color: var(--text-color);
    margin-bottom: var(--spacing-lg);
    position: relative;
    display: inline-block;
}

.footer-heading::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 3px;
    background: var(--primary-gradient);
    border-radius: var(--radius-pill);
}

.footer-list {
    list-style: none;
}

.footer-list li {
    margin-bottom: var(--spacing-sm);
}

.footer-link {
    color: var(--text-light);
    text-decoration: none;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xs);
}

.footer-link i {
    font-size: var(--font-size-xs);
    opacity: 0;
    transition: var(--transition);
}

.footer-link:hover {
    color: var(--primary-color);
    transform: translateX(5px);
}

.footer-link:hover i {
    opacity: 1;
}

.social-icons {
    display: flex;
    gap: var(--spacing-md);
}

.social-icon {
    width: 45px;
    height: 45px;
    background: linear-gradient(145deg, var(--card-bg), var(--secondary-dark));
    border-radius: var(--radius-circle);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
    text-decoration: none;
    transition: var(--transition-bounce);
    font-size: 1.2rem;
}

.social-icon:hover {
    background: var(--primary-gradient);
    color: var(--text-dark);
    transform: translateY(-8px) rotate(360deg);
    box-shadow: var(--shadow-glow);
}

.footer-bottom {
    padding-top: var(--spacing-xl);
    border-top: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--spacing-lg);
    position: relative;
    z-index: 2;
}

.copyright {
    color: var(--text-light);
    font-size: var(--font-size-sm);
}

.footer-legal {
    display: flex;
    gap: var(--spacing-lg);
}

.legal-link {
    color: var(--text-light);
    text-decoration: none;
    font-size: var(--font-size-sm);
    transition: var(--transition);
}

.legal-link:hover {
    color: var(--primary-color);
}

/* ===== BACK TO TOP BUTTON - ENHANCED ===== */
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 55px;
    height: 55px;
    background: var(--primary-gradient);
    color: var(--text-dark);
    border: none;
    border-radius: var(--radius-circle);
    font-size: 1.3rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition-bounce);
    z-index: var(--z-index-fixed);
    box-shadow: var(--shadow-lg);
    display: flex;
    align-items: center;
    justify-content: center;
}

.back-to-top.visible {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    transform: translateY(-10px) scale(1.1);
    box-shadow: var(--shadow-glow-hover);
}

.back-to-top i {
    transition: var(--transition);
}

.back-to-top:hover i {
    transform: translateY(-5px);
}

/* ===== LOADING SPINNER ===== */
.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid var(--border-color);
    border-top: 4px solid var(--primary-color);
    border-radius: var(--radius-circle);
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* ===== UTILITY CLASSES ===== */
.mt-1 { margin-top: var(--spacing-xs); }
.mt-2 { margin-top: var(--spacing-sm); }
.mt-3 { margin-top: var(--spacing-md); }
.mt-4 { margin-top: var(--spacing-lg); }
.mt-5 { margin-top: var(--spacing-xl); }

.mb-1 { margin-bottom: var(--spacing-xs); }
.mb-2 { margin-bottom: var(--spacing-sm); }
.mb-3 { margin-bottom: var(--spacing-md); }
.mb-4 { margin-bottom: var(--spacing-lg); }
.mb-5 { margin-bottom: var(--spacing-xl); }

.p-1 { padding: var(--spacing-xs); }
.p-2 { padding: var(--spacing-sm); }
.p-3 { padding: var(--spacing-md); }
.p-4 { padding: var(--spacing-lg); }
.p-5 { padding: var(--spacing-xl); }

.hidden { display: none; }
.visible { display: block; }
.invisible { visibility: hidden; }

.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-1 { gap: var(--spacing-xs); }
.gap-2 { gap: var(--spacing-sm); }
.gap-3 { gap: var(--spacing-md); }
.gap-4 { gap: var(--spacing-lg); }
.gap-5 { gap: var(--spacing-xl); }

.grid { display: grid; }
.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }
.sticky { position: sticky; }

.w-100 { width: 100%; }
.h-100 { height: 100%; }
.rounded { border-radius: var(--radius); }
.rounded-full { border-radius: var(--radius-circle); }
.shadow { box-shadow: var(--shadow); }
.shadow-lg { box-shadow: var(--shadow-lg); }

/* ===== ANIMATIONS ===== */
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
}

@keyframes glow {
    0% { box-shadow: var(--shadow-glow); }
    50% { box-shadow: var(--shadow-glow-hover); }
    100% { box-shadow: var(--shadow-glow); }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

.animate-glow {
    animation: glow 2s ease-in-out infinite;
}

.animate-slide-in {
    animation: slideIn 0.5s ease-out;
}

/* ===== PRINT STYLES ===== */
@media print {
    .main-header,
    .hero-section,
    .back-to-top,
    .footer-social,
    .btn {
        display: none;
    }
    
    body {
        background: white;
        color: black;
    }
    
    .container {
        max-width: 100%;
        padding: 0;
    }
}

/* ===== ACCESSIBILITY ===== */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* ===== DARK MODE SUPPORT ===== */
@media (prefers-color-scheme: dark) {
    :root {
        --background-dark: #0a0a14;
        --background-light: #141428;
        --text-color: #f0f0f0;
    }
}

/* ===== RESPONSIVE DESIGN - ENHANCED ===== */
@media (max-width: 1200px) {
    .container {
        max-width: 960px;
    }
    
    .hero-title {
        font-size: var(--font-size-giant);
    }
}

@media (max-width: 992px) {
    :root {
        --font-size-massive: 3rem;
        --font-size-huge: 2.2rem;
    }
    
    .container {
        max-width: 720px;
    }
    
    .hero-title {
        font-size: 2.8rem;
    }
    
    .about-content,
    .contact-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-xl);
    }
    
    .about-text {
        padding-right: 0;
    }
    
    .equipment-grid {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
    
    .services-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
}

@media (max-width: 768px) {
    :root {
        --font-size-massive: 2.5rem;
        --font-size-huge: 2rem;
        --header-height: 70px;
    }
    
    .container {
        max-width: 540px;
    }
    
    .mobile-menu-btn {
        display: block;
    }
    
    .main-nav {
        position: fixed;
        top: var(--header-height);
        left: 0;
        width: 100%;
        background: linear-gradient(135deg, var(--background-dark), var(--background-darker));
        padding: var(--spacing-xl);
        transform: translateY(-150%);
        opacity: 0;
        visibility: hidden;
        transition: var(--transition-bounce);
        box-shadow: var(--shadow-xl);
        z-index: var(--z-index-dropdown);
        border-bottom: 3px solid var(--primary-color);
    }
    
    .main-nav.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
    
    .nav-list {
        flex-direction: column;
        gap: 0;
    }
    
    .nav-item {
        width: 100%;
    }
    
    .nav-link {
        display: flex;
        padding: var(--spacing-md) 0;
        border-bottom: 1px solid var(--border-color);
    }
    
    .hero-title {
        font-size: 2.2rem;
    }
    
    .hero-description {
        font-size: 1rem;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .hero-buttons .btn {
        width: 100%;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .section-title::before {
        top: -15px;
    }
    
    .section-title::after {
        width: 70px;
    }
    
    .about-stats {
        justify-content: center;
    }
    
    .stat-item {
        flex: 0 0 calc(50% - var(--spacing-md));
    }
    
    .footer-bottom {
        flex-direction: column;
        text-align: center;
    }
    
    .footer-legal {
        justify-content: center;
    }
}

@media (max-width: 576px) {
    :root {
        --font-size-massive: 2rem;
        --font-size-huge: 1.8rem;
    }
    
    .container {
        padding: 0 var(--spacing-md);
    }
    
    .hero-title {
        font-size: 1.8rem;
    }
    
    .section-title {
        font-size: 1.8rem;
    }
    
    .equipment-grid {
        grid-template-columns: 1fr;
    }
    
    .services-grid {
        grid-template-columns: 1fr;
    }
    
    .filter-btn {
        padding: var(--spacing-xs) var(--spacing-lg);
        font-size: var(--font-size-xs);
    }
    
    .contact-form {
        padding: var(--spacing-lg);
    }
    
    .contact-item {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    .stat-item {
        flex: 0 0 100%;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .footer-logo {
        justify-content: center;
    }
    
    .footer-heading::after {
        left: 50%;
        transform: translateX(-50%);
    }
    
    .social-icons {
        justify-content: center;
    }
}

@media (max-width: 380px) {
    :root {
        --font-size-massive: 1.8rem;
        --spacing-xl: 24px;
        --spacing-xxl: 32px;
    }
    
    .logo-title {
        font-size: 1.4rem;
    }
    
    .logo-subtitle {
        font-size: 0.8rem;
    }
    
    .btn {
        padding: var(--spacing-sm) var(--spacing-lg);
        font-size: var(--font-size-sm);
    }
}

/* ===== HIGH RESOLUTION DISPLAYS ===== */
@media (min-width: 1920px) {
    :root {
        --container-max-width: 1400px;
        --font-size-massive: 5rem;
        --font-size-huge: 3rem;
    }
    
    .container {
        max-width: var(--container-max-width);
    }
    
    .hero-section {
        min-height: 800px;
    }
}

/* ===== LANDSCAPE MODE ===== */
@media (max-height: 600px) and (orientation: landscape) {
    .hero-section {
        height: auto;
        min-height: 500px;
        padding: var(--spacing-xxl) 0;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-description {
        font-size: 1rem;
        margin-bottom: var(--spacing-lg);
    }
}
    </script>
</body>
</html>
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
