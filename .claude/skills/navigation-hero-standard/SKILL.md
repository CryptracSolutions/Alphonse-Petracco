---
name: navigation-hero-standard
description: Gold standard navigation, mobile menu, lawyer banner, and falling money animation for Lion Law pages. Use when checking or implementing nav/hero consistency across HTML pages.
---

# Navigation & Hero Gold Standard

**Source:** `testimonials.html` is the gold standard for navigation, mobile menu, lawyer banner, and falling money animation.

---

## 1. Gold Standard Lawyer Banner HTML

```html
<!-- Lawyer Answers Every Call Banner -->
<a href="tel:9738684343" class="lawyer-banner">
    <div class="container lawyer-banner-inner">
        <svg class="lawyer-banner-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        <span class="lawyer-banner-text">A Lawyer Answers Every Call</span>
        <span class="lawyer-banner-badge">24/7</span>
    </div>
</a>
```

---

## 2. Gold Standard Desktop Navigation HTML

```html
<!-- Navigation -->
<nav class="nav" id="nav">
    <div class="nav-main">
    <div class="container nav-inner">
        <a href="index.html" class="nav-logo">
            <div class="nav-logo-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 660">
                    <g transform="translate(660, 660) scale(-1, -1)">
                    <path fill="currentColor" fill-rule="evenodd" d="m 428.398,274.635 c -45.335,55.757 -57.022,115.276 -59.444,175.842 17.552,-78.618 60.789,-147.473 123.632,-208.899 -21.397,11.02 -42.79,22.039 -64.188,33.057 m 54.446,48.482 c -47.223,35.635 -68.293,80.905 -82.161,128.844 29.518,-59.387 77.649,-105.908 139.98,-142.627 -19.274,4.594 -38.544,9.186 -57.819,13.783 m -448.123,9.61 c 44.731,57.67 89.463,115.343 134.194,173.014 -6.549,-12.688 -13.098,-25.38 -19.644,-38.071 -6.863,-13.303 -1.984,-29.654 11.048,-37.019 11,-6.218 22.557,-11.521 38.716,-9.241 -28.722,-15.28 -61.632,16.118 -89.687,-10.709 C 84.471,384.709 59.597,358.717 34.721,332.727 M 170.685,63.642 C 255.129,104.244 393.12,251.264 283.133,405.651 208.17,345.19 183.404,187.682 58.247,224.27 c 3.204,-6.151 11.415,-8.349 13.669,-14.113 17.631,-45.061 69.207,-41.804 87.594,-0.754 8.129,18.151 25.34,30.659 38.008,45.991 7.871,-69.478 2.766,-130.888 -26.833,-191.752 m -46.347,182.384 c -15.729,-23.538 -43.505,-19.299 -77.306,-10.375 -8.697,9.37 -12.043,19.407 -10.04,30.12 4.463,12.27 19.968,19.018 13.387,36.809 57.782,2.401 92.642,-23.649 73.959,-56.554 m 22.756,1.842 c 43.504,27.662 35.474,82.77 53.209,124.153 -92.14,-17.514 -70.164,-69.497 -64.587,-91.693 6.925,2.551 13.267,6.601 19.073,12.048 1.382,-15.765 -1.487,-30.528 -7.695,-44.508 M 98.146,360.699 c 9.44,11.83 11.691,27.26 28.319,35.499 l 22.021,10.788 c -7.423,-0.272 -14.53,4.295 -22.266,-0.82 -2.682,-1.775 -4.351,-4.39 -5.577,-7.218 -1.338,0.593 -4.097,4.09 -4.438,4.642 12.932,20.758 39.401,6.328 57.867,6.563 -37.314,-8.48 -48.767,-41.074 -75.926,-49.454 m 157.33,101.946 c 26.884,29.894 45.07,83.549 80.65,89.685 42.839,-36.367 10.709,-117.576 -11.039,-147.249 5.273,28.264 6.784,55.957 -2.68,81.991 -20.804,-16.007 -41.943,-24.988 -66.931,-24.427 M 654.735,351.267 616.69,375.571 c -41.278,4.689 -75.876,21.566 -108.28,42.467 23.499,-9.748 47.821,-16.267 72.891,-19.857 l -22.987,14.686 c -1.401,0.895 -2.783,1.793 -4.167,2.688 -29.593,3.689 -54.516,15.912 -77.88,30.983 17.352,-7.2 35.318,-11.998 53.838,-14.621 -46.439,33.19 -84.184,70.056 -120.425,117.19 -9.463,12.304 -19.972,22.714 -31.173,31.355 -21.607,3.22 -43.214,3.46 -64.827,0.353 9.389,3.138 18.883,5.873 28.549,7.93 -21.924,0.231 -43.434,-2.508 -64.486,-8.584 20.5,10.174 41.834,18.315 65.371,21.068 -16.708,7.13 -34.032,11.177 -51.063,12.457 -16.473,-5.873 -32.106,-13.544 -46.825,-23.182 8.917,8.47 18.241,16.446 28.322,23.496 -5.663,-0.238 -11.252,-0.787 -16.738,-1.625 -25.733,-11.939 -48.581,-27.625 -68.089,-47.666 8.606,12.791 18.001,24.963 29.047,35.843 -36.285,-17.34 -60.725,-50.31 -56.879,-93.337 C 112.786,445.414 64.68,383.617 16.578,321.813 5.536,307.624 6.773,287.698 19.484,274.984 c 2.73,-2.729 5.462,-5.461 8.194,-8.192 -1.768,-22.115 8.257,-40.066 29.242,-54.149 5.161,-4.867 10.995,-25.122 16.152,-29.984 22.787,-21.471 58.491,-21.068 80.784,0.913 12.312,12.136 23.959,39.672 36.273,51.811 5.782,-86.873 -17.216,-164.374 -64.979,-214.432 45.014,28.077 98.391,45.268 153.723,59.906 42.778,39.045 92.217,59.669 143.842,74.251 -33.2,-16.241 -63.53,-36.686 -91.27,-60.935 29.114,7.212 58.206,14.44 86.396,22.856 25.196,23.741 54.036,41.296 84.357,56.345 -18.216,-13.574 -34.888,-28.7 -50.123,-45.263 98.171,34.519 179.727,90.672 202.66,223.156"/>
                    </g>
                </svg>
            </div>
            <span>Lion Law</span>
        </a>

        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li class="nav-dropdown">
                <a href="practice.html" class="nav-dropdown-trigger">Practice Areas<svg class="dropdown-arrow" viewBox="0 0 24 24" width="12" height="12"><path d="M7 10l5 5 5-5z"/></svg></a>
                <div class="nav-dropdown-menu">
                    <a href="practice.html#motor-vehicles">Motor Vehicle Accidents</a>
                    <a href="practice.html#catastrophic-injuries">Catastrophic Injuries</a>
                    <a href="practice.html#premises-liability">Slip & Fall / Premises</a>
                    <a href="practice.html#medical-malpractice">Medical Malpractice</a>
                    <a href="practice.html#construction-accidents">Construction Accidents</a>
                    <a href="practice.html#wrongful-death">Wrongful Death</a>
                </div>
            </li>
            <li><a href="about.html">About</a></li>
            <li><a href="case-results.html">Case Results</a></li>
            <li><a href="testimonials.html">Testimonials</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li class="nav-dropdown">
                <a href="faq.html" class="nav-dropdown-trigger">FAQ<svg class="dropdown-arrow" viewBox="0 0 24 24" width="12" height="12"><path d="M7 10l5 5 5-5z"/></svg></a>
                <div class="nav-dropdown-menu">
                    <a href="faq.html#case">Your Case & Claims</a>
                    <a href="faq.html#fees">Fees & Costs</a>
                    <a href="faq.html#process">The Legal Process</a>
                    <a href="faq.html#practice">Practice Areas</a>
                    <a href="faq.html#why">Why Choose Lion Law</a>
                </div>
            </li>
            <li><a href="contact.html">Contact</a></li>
        </ul>

        <div class="nav-right">
            <a href="tel:9738684343" class="nav-phone">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                (973) 868-4343
            </a>
            <button type="button" class="btn btn-primary open-consultation-modal"><span>Free Consultation</span></button>
        </div>

        <button class="nav-toggle" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
    </div>
    <!-- Lawyer Answers Every Call Banner -->
    <a href="tel:9738684343" class="lawyer-banner">
        <div class="container lawyer-banner-inner">
            <svg class="lawyer-banner-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span class="lawyer-banner-text">A Lawyer Answers Every Call</span>
            <span class="lawyer-banner-badge">24/7</span>
        </div>
    </a>
</nav>
```

**Note:** The `class="active"` must be added to the appropriate nav link based on the current page. See Section 6 for the mapping.

---

## 3. Gold Standard Mobile Menu HTML

```html
<!-- Mobile Menu Overlay -->
<div class="mobile-menu-backdrop" id="mobileMenuBackdrop"></div>
<div class="mobile-menu" id="mobileMenu">
    <div class="mobile-menu-header">
        <a href="index.html" class="mobile-menu-logo">
            <div class="mobile-menu-logo-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 660"><g transform="translate(660, 660) scale(-1, -1)"><path fill="currentColor" fill-rule="evenodd" d="m 428.398,274.635 c -45.335,55.757 -57.022,115.276 -59.444,175.842 17.552,-78.618 60.789,-147.473 123.632,-208.899 -21.397,11.02 -42.79,22.039 -64.188,33.057 m 54.446,48.482 c -47.223,35.635 -68.293,80.905 -82.161,128.844 29.518,-59.387 77.649,-105.908 139.98,-142.627 -19.274,4.594 -38.544,9.186 -57.819,13.783 m -448.123,9.61 c 44.731,57.67 89.463,115.343 134.194,173.014 -6.549,-12.688 -13.098,-25.38 -19.644,-38.071 -6.863,-13.303 -1.984,-29.654 11.048,-37.019 11,-6.218 22.557,-11.521 38.716,-9.241 -28.722,-15.28 -61.632,16.118 -89.687,-10.709 C 84.471,384.709 59.597,358.717 34.721,332.727 M 170.685,63.642 C 255.129,104.244 393.12,251.264 283.133,405.651 208.17,345.19 183.404,187.682 58.247,224.27 c 3.204,-6.151 11.415,-8.349 13.669,-14.113 17.631,-45.061 69.207,-41.804 87.594,-0.754 8.129,18.151 25.34,30.659 38.008,45.991 7.871,-69.478 2.766,-130.888 -26.833,-191.752 m -46.347,182.384 c -15.729,-23.538 -43.505,-19.299 -77.306,-10.375 -8.697,9.37 -12.043,19.407 -10.04,30.12 4.463,12.27 19.968,19.018 13.387,36.809 57.782,2.401 92.642,-23.649 73.959,-56.554 m 22.756,1.842 c 43.504,27.662 35.474,82.77 53.209,124.153 -92.14,-17.514 -70.164,-69.497 -64.587,-91.693 6.925,2.551 13.267,6.601 19.073,12.048 1.382,-15.765 -1.487,-30.528 -7.695,-44.508 M 98.146,360.699 c 9.44,11.83 11.691,27.26 28.319,35.499 l 22.021,10.788 c -7.423,-0.272 -14.53,4.295 -22.266,-0.82 -2.682,-1.775 -4.351,-4.39 -5.577,-7.218 -1.338,0.593 -4.097,4.09 -4.438,4.642 12.932,20.758 39.401,6.328 57.867,6.563 -37.314,-8.48 -48.767,-41.074 -75.926,-49.454 m 157.33,101.946 c 26.884,29.894 45.07,83.549 80.65,89.685 42.839,-36.367 10.709,-117.576 -11.039,-147.249 5.273,28.264 6.784,55.957 -2.68,81.991 -20.804,-16.007 -41.943,-24.988 -66.931,-24.427 M 654.735,351.267 616.69,375.571 c -41.278,4.689 -75.876,21.566 -108.28,42.467 23.499,-9.748 47.821,-16.267 72.891,-19.857 l -22.987,14.686 c -1.401,0.895 -2.783,1.793 -4.167,2.688 -29.593,3.689 -54.516,15.912 -77.88,30.983 17.352,-7.2 35.318,-11.998 53.838,-14.621 -46.439,33.19 -84.184,70.056 -120.425,117.19 -9.463,12.304 -19.972,22.714 -31.173,31.355 -21.607,3.22 -43.214,3.46 -64.827,0.353 9.389,3.138 18.883,5.873 28.549,7.93 -21.924,0.231 -43.434,-2.508 -64.486,-8.584 20.5,10.174 41.834,18.315 65.371,21.068 -16.708,7.13 -34.032,11.177 -51.063,12.457 -16.473,-5.873 -32.106,-13.544 -46.825,-23.182 8.917,8.47 18.241,16.446 28.322,23.496 -5.663,-0.238 -11.252,-0.787 -16.738,-1.625 -25.733,-11.939 -48.581,-27.625 -68.089,-47.666 8.606,12.791 18.001,24.963 29.047,35.843 -36.285,-17.34 -60.725,-50.31 -56.879,-93.337 C 112.786,445.414 64.68,383.617 16.578,321.813 5.536,307.624 6.773,287.698 19.484,274.984 c 2.73,-2.729 5.462,-5.461 8.194,-8.192 -1.768,-22.115 8.257,-40.066 29.242,-54.149 5.161,-4.867 10.995,-25.122 16.152,-29.984 22.787,-21.471 58.491,-21.068 80.784,0.913 12.312,12.136 23.959,39.672 36.273,51.811 5.782,-86.873 -17.216,-164.374 -64.979,-214.432 45.014,28.077 98.391,45.268 153.723,59.906 42.778,39.045 92.217,59.669 143.842,74.251 -33.2,-16.241 -63.53,-36.686 -91.27,-60.935 29.114,7.212 58.206,14.44 86.396,22.856 25.196,23.741 54.036,41.296 84.357,56.345 -18.216,-13.574 -34.888,-28.7 -50.123,-45.263 98.171,34.519 179.727,90.672 202.66,223.156"/></g></svg>
            </div>
            <span>Lion Law</span>
        </a>
        <button class="mobile-menu-close" id="mobileMenuClose" aria-label="Close menu">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
    </div>
    <nav class="mobile-menu-nav">
        <ul class="mobile-menu-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="practice.html">Practice Areas</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="case-results.html">Case Results</a></li>
            <li><a href="testimonials.html">Testimonials</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
    <div class="mobile-menu-footer">
        <button type="button" class="mobile-menu-cta open-consultation-modal">Free Consultation</button>
        <a href="tel:9738684343" class="mobile-menu-phone">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            (973) 868-4343
        </a>
    </div>
</div>
```

**Note:** The `class="active"` must be added to the appropriate mobile-menu-links item based on the current page. See Section 6 for the mapping.

---

## 4. Gold Standard Falling Money CSS

Add this CSS inside the `<style>` block:

```css
/* Falling Money Animation */
.falling-money { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }
.dollar-bill { position: absolute; opacity: 0.45; will-change: transform; animation: fall linear infinite; }
.dollar-bill svg { width: 100%; height: 100%; fill: var(--green); color: var(--green); stroke: var(--green); }
@keyframes fall { 0% { transform: translateY(-150px) rotate(var(--rotation, 0deg)); } 100% { transform: translateY(calc(100vh + 150px)) rotate(var(--rotation, 0deg)); } }
.dollar-bill:nth-child(1) { left: 5%; width: 60px; --rotation: -15deg; animation-duration: 18s; animation-delay: 0s; }
.dollar-bill:nth-child(2) { left: 12%; width: 45px; --rotation: 20deg; animation-duration: 22s; animation-delay: -4s; }
.dollar-bill:nth-child(3) { left: 20%; width: 55px; --rotation: -8deg; animation-duration: 20s; animation-delay: -8s; }
.dollar-bill:nth-child(4) { left: 28%; width: 40px; --rotation: 12deg; animation-duration: 25s; animation-delay: -2s; }
.dollar-bill:nth-child(5) { left: 35%; width: 65px; --rotation: -22deg; animation-duration: 19s; animation-delay: -10s; }
.dollar-bill:nth-child(6) { left: 42%; width: 50px; --rotation: 18deg; animation-duration: 23s; animation-delay: -6s; }
.dollar-bill:nth-child(7) { left: 50%; width: 42px; --rotation: -10deg; animation-duration: 21s; animation-delay: -14s; }
.dollar-bill:nth-child(8) { left: 58%; width: 58px; --rotation: 25deg; animation-duration: 17s; animation-delay: -12s; }
.dollar-bill:nth-child(9) { left: 65%; width: 48px; --rotation: -18deg; animation-duration: 24s; animation-delay: -3s; }
.dollar-bill:nth-child(10) { left: 72%; width: 52px; --rotation: 8deg; animation-duration: 26s; animation-delay: -16s; }
.dollar-bill:nth-child(11) { left: 80%; width: 44px; --rotation: -12deg; animation-duration: 20s; animation-delay: -7s; }
.dollar-bill:nth-child(12) { left: 88%; width: 56px; --rotation: 15deg; animation-duration: 18s; animation-delay: -11s; }
.dollar-bill:nth-child(13) { left: 95%; width: 38px; --rotation: -20deg; animation-duration: 22s; animation-delay: -5s; }
.dollar-bill:nth-child(14) { left: 3%; width: 62px; --rotation: 22deg; animation-duration: 24s; animation-delay: -13s; }
.dollar-bill:nth-child(15) { left: 45%; width: 46px; --rotation: -5deg; animation-duration: 19s; animation-delay: -9s; }
.dollar-bill:nth-child(16) { left: 18%; width: 54px; --rotation: 28deg; animation-duration: 21s; animation-delay: -1s; }
.dollar-bill:nth-child(17) { left: 55%; width: 40px; --rotation: -25deg; animation-duration: 23s; animation-delay: -15s; }
.dollar-bill:nth-child(18) { left: 78%; width: 50px; --rotation: 10deg; animation-duration: 18s; animation-delay: -8s; }
.dollar-bill:nth-child(19) { left: 32%; width: 58px; --rotation: -16deg; animation-duration: 25s; animation-delay: -4s; }
.dollar-bill:nth-child(20) { left: 68%; width: 44px; --rotation: 18deg; animation-duration: 20s; animation-delay: -11s; }
.dollar-bill:nth-child(21) { left: 10%; width: 52px; --rotation: 14deg; animation-duration: 19s; animation-delay: -2s; }
.dollar-bill:nth-child(22) { left: 24%; width: 48px; --rotation: -28deg; animation-duration: 22s; animation-delay: -17s; }
.dollar-bill:nth-child(23) { left: 40%; width: 56px; --rotation: 8deg; animation-duration: 24s; animation-delay: -6s; }
.dollar-bill:nth-child(24) { left: 52%; width: 42px; --rotation: -14deg; animation-duration: 18s; animation-delay: -13s; }
.dollar-bill:nth-child(25) { left: 63%; width: 60px; --rotation: 22deg; animation-duration: 21s; animation-delay: -9s; }
.dollar-bill:nth-child(26) { left: 76%; width: 46px; --rotation: -6deg; animation-duration: 23s; animation-delay: -1s; }
.dollar-bill:nth-child(27) { left: 84%; width: 54px; --rotation: 16deg; animation-duration: 20s; animation-delay: -15s; }
.dollar-bill:nth-child(28) { left: 6%; width: 50px; --rotation: -20deg; animation-duration: 26s; animation-delay: -8s; }
.dollar-bill:nth-child(29) { left: 48%; width: 58px; --rotation: 12deg; animation-duration: 17s; animation-delay: -3s; }
.dollar-bill:nth-child(30) { left: 90%; width: 44px; --rotation: -24deg; animation-duration: 22s; animation-delay: -12s; }

/* Mobile Responsive - inside @media (max-width: 768px) */
@media (max-width: 768px) {
    .dollar-bill:nth-child(n+9) { display: none; }
    .dollar-bill { opacity: 0.35; }
}
```

---

## 5. Gold Standard Falling Money HTML

Place this inside the `<section class="page-hero">` element, after the `<div class="page-hero-bg"></div>`:

```html
<!-- Falling Money Animation -->
<div class="falling-money">
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
    <div class="dollar-bill"><svg viewBox="0 0 156 66" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="154" height="64" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="5" width="146" height="56" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="10" width="136" height="46" rx="1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><circle cx="25" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="131" cy="33" r="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><ellipse cx="78" cy="33" rx="22" ry="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="78" y="40" text-anchor="middle" font-size="24" font-weight="bold" font-family="serif" fill="currentColor">$</text><text x="20" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="20" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="20" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text><text x="140" y="58" font-size="8" font-weight="bold" font-family="serif" fill="currentColor">1</text></svg></div>
</div>
```

---

## 6. Implementation Instructions

### For Standard Pages (about, practice, case-results, testimonials, blog, blog-single, contact, faq)

1. **Replace the entire `<nav>` element** with the Gold Standard Desktop Navigation HTML from Section 2
2. **Replace/Add the Mobile Menu HTML** immediately after `</nav>` with Section 3
3. **Replace the page hero section** but **preserve unique hero content** (title, subtitle, breadcrumb text)
4. **Add Falling Money CSS** to the `<style>` block (Section 4)
5. **Add Falling Money HTML** inside the page-hero section (Section 5)
6. **Set the correct `active` class** on the appropriate nav link

### For index.html (Homepage)

1. **Replace the entire `<nav>` element** with the Gold Standard Desktop Navigation HTML from Section 2
2. **Replace/Add the Mobile Menu HTML** immediately after `</nav>` with Section 3
3. **DO NOT modify the `.hero` section** - the homepage has a unique hero that should be preserved entirely
4. **Set `class="active"`** on the Home link: `<a href="index.html" class="active">Home</a>`

### Active Class Mapping

Add `class="active"` to the appropriate nav link based on the current page:

| Page | Desktop Nav Active Link | Mobile Menu Active Link |
|------|------------------------|------------------------|
| `index.html` | `<a href="index.html" class="active">Home</a>` | `<a href="index.html" class="active">Home</a>` |
| `practice.html` | `<a href="practice.html" class="nav-dropdown-trigger active">Practice Areas...` | `<a href="practice.html" class="active">Practice Areas</a>` |
| `about.html` | `<a href="about.html" class="active">About</a>` | `<a href="about.html" class="active">About</a>` |
| `case-results.html` | `<a href="case-results.html" class="active">Case Results</a>` | `<a href="case-results.html" class="active">Case Results</a>` |
| `testimonials.html` | `<a href="testimonials.html" class="active">Testimonials</a>` | `<a href="testimonials.html" class="active">Testimonials</a>` |
| `blog.html` | `<a href="blog.html" class="active">Blog</a>` | `<a href="blog.html" class="active">Blog</a>` |
| `blog-single.html` | `<a href="blog.html" class="active">Blog</a>` | `<a href="blog.html" class="active">Blog</a>` |
| `faq.html` | `<a href="faq.html" class="nav-dropdown-trigger active">FAQ...` | `<a href="faq.html" class="active">FAQ</a>` |
| `contact.html` | `<a href="contact.html" class="active">Contact</a>` | `<a href="contact.html" class="active">Contact</a>` |
| `privacy-policy.html` | No active link | No active link |
| `disclaimer.html` | No active link | No active link |
