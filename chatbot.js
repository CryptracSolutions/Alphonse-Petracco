/**
 * Lion Law AI Chatbot Widget
 * A floating chat widget powered by OpenAI GPT-4o-mini
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    apiEndpoint: '/api/chat',
    botName: 'Lion Law Assistant',
    welcomeMessage: "Hello! I'm the Lion Law virtual assistant. I can help answer questions about our firm, practice areas, and how we can assist with your case. How can I help you today?",
    placeholderText: 'Type your message...',
    errorMessage: "I apologize, but I'm having trouble connecting right now. Please try again or contact us directly.",
  };

  // Page content cache
  const contentCache = new Map();

  // Inject styles
  function injectStyles() {
    const styles = document.createElement('style');
    styles.id = 'lion-law-chatbot-styles';
    styles.textContent = `
      /* ============================================
         CHATBOT VARIABLES
         ============================================ */
      .ll-chatbot-widget {
        --cb-gold-light: #F5D77A;
        --cb-gold: #D4AF37;
        --cb-gold-deep: #B8860B;
        --cb-gold-dark: #8B6914;
        --cb-black: #0A0A0A;
        --cb-black-light: #121212;
        --cb-charcoal: #1A1A1A;
        --cb-charcoal-light: #2A2A2A;
        --cb-gray-dark: #3A3A3A;
        --cb-gray: #6A6A6A;
        --cb-gray-light: #9A9A9A;
        --cb-white: #FFFFFF;
        --cb-cream: #FAFAF8;
        --cb-font-display: 'Cormorant Garamond', Georgia, serif;
        --cb-font-body: 'Outfit', -apple-system, sans-serif;
        --cb-ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
      }

      /* ============================================
         CHAT TOGGLE BUTTON
         ============================================ */
      .ll-chatbot-toggle {
        position: fixed;
        bottom: 24px;
        right: 24px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--cb-gold) 0%, var(--cb-gold-deep) 100%);
        border: none;
        cursor: pointer;
        z-index: 9998;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3), 0 8px 32px rgba(0, 0, 0, 0.3);
        transition: all 0.3s var(--cb-ease-out-quart);
      }

      .ll-chatbot-toggle:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 24px rgba(212, 175, 55, 0.4), 0 12px 40px rgba(0, 0, 0, 0.4);
      }

      .ll-chatbot-toggle:active {
        transform: scale(0.98);
      }

      .ll-chatbot-toggle svg {
        width: 28px;
        height: 28px;
        color: var(--cb-black);
        transition: transform 0.3s var(--cb-ease-out-quart);
      }

      .ll-chatbot-toggle.active svg.chat-icon {
        transform: scale(0) rotate(90deg);
      }

      .ll-chatbot-toggle svg.close-icon {
        position: absolute;
        transform: scale(0) rotate(-90deg);
      }

      .ll-chatbot-toggle.active svg.close-icon {
        transform: scale(1) rotate(0);
      }

      .ll-chatbot-toggle-label {
        position: absolute;
        right: 70px;
        background: var(--cb-charcoal);
        color: var(--cb-cream);
        padding: 8px 14px;
        border-radius: 8px;
        font-family: var(--cb-font-body);
        font-size: 0.85rem;
        font-weight: 500;
        white-space: nowrap;
        opacity: 0;
        transform: translateX(10px);
        transition: all 0.3s var(--cb-ease-out-quart);
        pointer-events: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      }

      .ll-chatbot-toggle-label::after {
        content: '';
        position: absolute;
        right: -6px;
        top: 50%;
        transform: translateY(-50%);
        border: 6px solid transparent;
        border-left-color: var(--cb-charcoal);
      }

      .ll-chatbot-toggle:hover .ll-chatbot-toggle-label {
        opacity: 1;
        transform: translateX(0);
      }

      .ll-chatbot-toggle.active .ll-chatbot-toggle-label {
        display: none;
      }

      /* Pulse animation for new visitors */
      @keyframes ll-chatbot-pulse {
        0%, 100% { box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3), 0 8px 32px rgba(0, 0, 0, 0.3); }
        50% { box-shadow: 0 4px 20px rgba(212, 175, 55, 0.6), 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 8px rgba(212, 175, 55, 0.1); }
      }

      .ll-chatbot-toggle.pulse {
        animation: ll-chatbot-pulse 2s ease-in-out 3;
      }

      /* ============================================
         CHAT WINDOW
         ============================================ */
      .ll-chatbot-window {
        position: fixed;
        bottom: 100px;
        right: 24px;
        width: 380px;
        height: 520px;
        max-height: calc(100vh - 140px);
        background: linear-gradient(145deg, var(--cb-charcoal), var(--cb-black-light));
        border: 1px solid rgba(212, 175, 55, 0.15);
        border-radius: 16px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px) scale(0.95);
        transition: all 0.3s var(--cb-ease-out-quart);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(212, 175, 55, 0.1);
      }

      .ll-chatbot-window.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0) scale(1);
      }

      /* Gold accent bar at top */
      .ll-chatbot-window::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--cb-gold-dark), var(--cb-gold), var(--cb-gold-dark));
      }

      /* ============================================
         CHAT HEADER
         ============================================ */
      .ll-chatbot-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px;
        background: rgba(0, 0, 0, 0.3);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      }

      .ll-chatbot-header-info {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .ll-chatbot-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--cb-gold) 0%, var(--cb-gold-deep) 100%);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .ll-chatbot-avatar svg {
        width: 22px;
        height: 22px;
        color: var(--cb-black);
      }

      .ll-chatbot-header-text h3 {
        font-family: var(--cb-font-body);
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--cb-cream);
        margin: 0;
      }

      .ll-chatbot-header-text p {
        font-family: var(--cb-font-body);
        font-size: 0.75rem;
        color: var(--cb-gray-light);
        margin: 0;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .ll-chatbot-status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #22c55e;
      }

      .ll-chatbot-close {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--cb-gray-light);
        transition: all 0.2s ease;
      }

      .ll-chatbot-close:hover {
        background: rgba(255, 255, 255, 0.1);
        color: var(--cb-cream);
      }

      .ll-chatbot-close svg {
        width: 18px;
        height: 18px;
      }

      /* ============================================
         CHAT MESSAGES AREA
         ============================================ */
      .ll-chatbot-messages {
        flex: 1;
        overflow-y: auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      /* Custom scrollbar */
      .ll-chatbot-messages::-webkit-scrollbar {
        width: 6px;
      }

      .ll-chatbot-messages::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 3px;
      }

      .ll-chatbot-messages::-webkit-scrollbar-thumb {
        background: var(--cb-gold-dark);
        border-radius: 3px;
      }

      .ll-chatbot-messages::-webkit-scrollbar-thumb:hover {
        background: var(--cb-gold);
      }

      /* Message bubbles */
      .ll-chatbot-message {
        max-width: 85%;
        animation: ll-message-fade-in 0.3s var(--cb-ease-out-quart);
      }

      @keyframes ll-message-fade-in {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .ll-chatbot-message.user {
        align-self: flex-end;
      }

      .ll-chatbot-message.bot {
        align-self: flex-start;
      }

      .ll-chatbot-message-content {
        padding: 12px 16px;
        border-radius: 16px;
        font-family: var(--cb-font-body);
        font-size: 0.9rem;
        line-height: 1.5;
      }

      .ll-chatbot-message.user .ll-chatbot-message-content {
        background: linear-gradient(135deg, var(--cb-gold) 0%, var(--cb-gold-deep) 100%);
        color: var(--cb-black);
        border-bottom-right-radius: 4px;
      }

      .ll-chatbot-message.bot .ll-chatbot-message-content {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: var(--cb-cream);
        border-bottom-left-radius: 4px;
      }

      .ll-chatbot-message-content a {
        color: var(--cb-gold);
        text-decoration: underline;
        text-underline-offset: 2px;
      }

      .ll-chatbot-message-content a:hover {
        color: var(--cb-gold-light);
      }

      .ll-chatbot-message-time {
        font-size: 0.7rem;
        color: var(--cb-gray);
        margin-top: 4px;
        padding: 0 4px;
      }

      .ll-chatbot-message.user .ll-chatbot-message-time {
        text-align: right;
      }

      /* Typing indicator */
      .ll-chatbot-typing {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 12px 16px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        border-bottom-left-radius: 4px;
        max-width: 60px;
      }

      .ll-chatbot-typing span {
        width: 8px;
        height: 8px;
        background: var(--cb-gold);
        border-radius: 50%;
        animation: ll-typing-bounce 1.4s ease-in-out infinite;
      }

      .ll-chatbot-typing span:nth-child(2) {
        animation-delay: 0.2s;
      }

      .ll-chatbot-typing span:nth-child(3) {
        animation-delay: 0.4s;
      }

      @keyframes ll-typing-bounce {
        0%, 60%, 100% {
          transform: translateY(0);
          opacity: 0.4;
        }
        30% {
          transform: translateY(-4px);
          opacity: 1;
        }
      }

      /* ============================================
         CHAT INPUT AREA
         ============================================ */
      .ll-chatbot-input-area {
        padding: 16px 20px;
        background: rgba(0, 0, 0, 0.3);
        border-top: 1px solid rgba(255, 255, 255, 0.05);
      }

      .ll-chatbot-input-wrapper {
        display: flex;
        align-items: center;
        gap: 12px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 4px 4px 4px 16px;
        transition: all 0.3s ease;
      }

      .ll-chatbot-input-wrapper:focus-within {
        border-color: var(--cb-gold);
        background: rgba(212, 175, 55, 0.05);
      }

      .ll-chatbot-input {
        flex: 1;
        background: transparent;
        border: none;
        outline: none;
        font-family: var(--cb-font-body);
        font-size: 16px; /* Must be 16px to prevent iOS auto-zoom on focus */
        color: var(--cb-cream);
        padding: 8px 0;
      }

      .ll-chatbot-input::placeholder {
        color: var(--cb-gray);
      }

      .ll-chatbot-send {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background: linear-gradient(135deg, var(--cb-gold) 0%, var(--cb-gold-deep) 100%);
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        flex-shrink: 0;
      }

      .ll-chatbot-send:hover {
        background: linear-gradient(135deg, var(--cb-gold-light) 0%, var(--cb-gold) 100%);
        transform: scale(1.05);
      }

      .ll-chatbot-send:active {
        transform: scale(0.95);
      }

      .ll-chatbot-send:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
      }

      .ll-chatbot-send svg {
        width: 18px;
        height: 18px;
        color: var(--cb-black);
      }

      /* ============================================
         MOBILE RESPONSIVE
         ============================================ */
      @media (max-width: 480px) {
        .ll-chatbot-toggle {
          bottom: 16px;
          right: 16px;
          width: 56px;
          height: 56px;
        }

        .ll-chatbot-toggle-label {
          display: none;
        }

        .ll-chatbot-window {
          bottom: 0;
          right: 0;
          left: 0;
          width: 100%;
          height: 100%;
          max-height: 100%;
          border-radius: 0;
          border: none;
        }

        .ll-chatbot-window::before {
          display: none;
        }

        .ll-chatbot-header {
          padding: 16px;
        }

        .ll-chatbot-messages {
          padding: 16px;
        }

        .ll-chatbot-input-area {
          padding: 12px 16px;
          padding-bottom: max(12px, env(safe-area-inset-bottom));
        }
      }

      /* ============================================
         DARK MODE ADJUSTMENTS (if needed)
         ============================================ */
      @media (prefers-color-scheme: light) {
        /* Keep dark theme regardless - matches Lion Law site */
      }
    `;
    document.head.appendChild(styles);
  }

  // Create chat widget HTML
  function createWidget() {
    const widget = document.createElement('div');
    widget.className = 'll-chatbot-widget';
    widget.innerHTML = `
      <!-- Toggle Button -->
      <button class="ll-chatbot-toggle pulse" aria-label="Open chat">
        <svg class="chat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <svg class="close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        <span class="ll-chatbot-toggle-label">Chat with us</span>
      </button>

      <!-- Chat Window -->
      <div class="ll-chatbot-window" role="dialog" aria-label="Chat window">
        <div class="ll-chatbot-header">
          <div class="ll-chatbot-header-info">
            <div class="ll-chatbot-avatar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <div class="ll-chatbot-header-text">
              <h3>${CONFIG.botName}</h3>
              <p><span class="ll-chatbot-status-dot"></span> Online</p>
            </div>
          </div>
          <button class="ll-chatbot-close" aria-label="Close chat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="ll-chatbot-messages" id="ll-chatbot-messages"></div>
        <div class="ll-chatbot-input-area">
          <div class="ll-chatbot-input-wrapper">
            <input
              type="text"
              class="ll-chatbot-input"
              id="ll-chatbot-input"
              placeholder="${CONFIG.placeholderText}"
              autocomplete="off"
            >
            <button class="ll-chatbot-send" id="ll-chatbot-send" aria-label="Send message">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(widget);
    return widget;
  }

  // Content scraping functions
  function scrapeCurrentPage() {
    const content = [];
    const pagePath = window.location.pathname;

    // Get page title
    const title = document.title;
    content.push(`Page: ${title}`);

    // Get main content areas (exclude nav, footer, scripts)
    const mainContent = document.querySelector('main') || document.body;
    const elementsToScrape = mainContent.querySelectorAll('h1, h2, h3, h4, p, li, .hero-title, .section-title, .card-title, .feature-title, .testimonial-text');

    elementsToScrape.forEach(el => {
      // Skip hidden elements and chatbot content
      if (el.closest('.ll-chatbot-widget') || el.closest('nav') || el.closest('footer') || el.closest('script') || el.closest('style')) {
        return;
      }
      const text = el.textContent.trim();
      if (text && text.length > 5) {
        content.push(text);
      }
    });

    return content.join('\n');
  }

  async function fetchPageContent(url) {
    // Check cache first
    if (contentCache.has(url)) {
      return contentCache.get(url);
    }

    try {
      const response = await fetch(url);
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      const content = [];
      const title = doc.querySelector('title')?.textContent || '';
      content.push(`Page: ${title}`);

      // Extract text content
      const elementsToScrape = doc.querySelectorAll('h1, h2, h3, h4, p, li');
      elementsToScrape.forEach(el => {
        if (el.closest('nav') || el.closest('footer') || el.closest('script') || el.closest('style')) {
          return;
        }
        const text = el.textContent.trim();
        if (text && text.length > 5) {
          content.push(text);
        }
      });

      const result = content.join('\n');
      contentCache.set(url, result);
      return result;
    } catch (error) {
      console.error('Error fetching page content:', error);
      return '';
    }
  }

  async function buildContext(userMessage) {
    const contexts = [];
    const message = userMessage.toLowerCase();

    // Always include current page
    contexts.push(scrapeCurrentPage());

    // Determine which additional pages to fetch based on the query
    const pagesToFetch = [];

    if (message.includes('practice') || message.includes('area') || message.includes('case') || message.includes('injury') || message.includes('accident') || message.includes('handle') || message.includes('specialize')) {
      pagesToFetch.push('/practice.html');
    }

    if (message.includes('about') || message.includes('firm') || message.includes('team') || message.includes('attorney') || message.includes('lawyer') || message.includes('alphonse') || message.includes('petracco') || message.includes('experience') || message.includes('history')) {
      pagesToFetch.push('/about.html');
    }

    if (message.includes('result') || message.includes('settlement') || message.includes('verdict') || message.includes('won') || message.includes('recover') || message.includes('million') || message.includes('compensation')) {
      pagesToFetch.push('/case-results.html');
    }

    if (message.includes('contact') || message.includes('call') || message.includes('phone') || message.includes('email') || message.includes('consult') || message.includes('appointment') || message.includes('schedule') || message.includes('reach')) {
      pagesToFetch.push('/contact.html');
    }

    if (message.includes('blog') || message.includes('article') || message.includes('news') || message.includes('read')) {
      pagesToFetch.push('/blog.html');
    }

    if (message.includes('faq') || message.includes('question') || message.includes('how') || message.includes('what') || message.includes('when') || message.includes('cost') || message.includes('fee') || message.includes('pay') || message.includes('free')) {
      pagesToFetch.push('/faq.html');
    }

    if (message.includes('testimonial') || message.includes('review') || message.includes('client') || message.includes('say') || message.includes('said') || message.includes('experience')) {
      pagesToFetch.push('/testimonials.html');
    }

    // If no specific intent detected, fetch key pages for general questions
    if (pagesToFetch.length === 0) {
      pagesToFetch.push('/index.html', '/about.html', '/practice.html');
    }

    // Fetch additional pages
    const fetchPromises = pagesToFetch.map(page => fetchPageContent(page));
    const additionalContents = await Promise.all(fetchPromises);
    contexts.push(...additionalContents.filter(c => c));

    // Combine and limit context size (to stay within token limits)
    let combinedContext = contexts.join('\n\n---\n\n');
    if (combinedContext.length > 8000) {
      combinedContext = combinedContext.substring(0, 8000) + '...';
    }

    return combinedContext;
  }

  // Chat functionality
  class ChatBot {
    constructor(widget) {
      this.widget = widget;
      this.toggle = widget.querySelector('.ll-chatbot-toggle');
      this.window = widget.querySelector('.ll-chatbot-window');
      this.closeBtn = widget.querySelector('.ll-chatbot-close');
      this.messagesContainer = widget.querySelector('#ll-chatbot-messages');
      this.input = widget.querySelector('#ll-chatbot-input');
      this.sendBtn = widget.querySelector('#ll-chatbot-send');
      this.messages = [];
      this.isOpen = false;
      this.isLoading = false;

      this.init();
    }

    init() {
      // Event listeners
      this.toggle.addEventListener('click', () => this.toggleChat());
      this.closeBtn.addEventListener('click', () => this.closeChat());
      this.sendBtn.addEventListener('click', () => this.sendMessage());
      this.input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.sendMessage();
        }
      });

      // Close on escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.closeChat();
        }
      });

      // Remove pulse animation after delay
      setTimeout(() => {
        this.toggle.classList.remove('pulse');
      }, 6000);
    }

    toggleChat() {
      if (this.isOpen) {
        this.closeChat();
      } else {
        this.openChat();
      }
    }

    openChat() {
      this.isOpen = true;
      this.window.classList.add('open');
      this.toggle.classList.add('active');
      this.toggle.setAttribute('aria-label', 'Close chat');
      this.input.focus();

      // Show welcome message if first time
      if (this.messages.length === 0) {
        this.addMessage(CONFIG.welcomeMessage, 'bot');
      }
    }

    closeChat() {
      this.isOpen = false;
      this.window.classList.remove('open');
      this.toggle.classList.remove('active');
      this.toggle.setAttribute('aria-label', 'Open chat');
    }

    addMessage(text, sender) {
      const message = {
        text,
        sender,
        time: new Date()
      };
      this.messages.push(message);
      this.renderMessage(message);
      this.scrollToBottom();
    }

    renderMessage(message) {
      const messageEl = document.createElement('div');
      messageEl.className = `ll-chatbot-message ${message.sender}`;

      // Convert URLs to links
      let formattedText = message.text
        .replace(/\n/g, '<br>')
        .replace(/(\/[a-zA-Z0-9-]+\.html)/g, '<a href="$1" target="_blank">$1</a>')
        .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');

      messageEl.innerHTML = `
        <div class="ll-chatbot-message-content">${formattedText}</div>
        <div class="ll-chatbot-message-time">${this.formatTime(message.time)}</div>
      `;

      this.messagesContainer.appendChild(messageEl);
    }

    showTyping() {
      const typingEl = document.createElement('div');
      typingEl.className = 'll-chatbot-message bot';
      typingEl.id = 'll-chatbot-typing';
      typingEl.innerHTML = `
        <div class="ll-chatbot-typing">
          <span></span>
          <span></span>
          <span></span>
        </div>
      `;
      this.messagesContainer.appendChild(typingEl);
      this.scrollToBottom();
    }

    hideTyping() {
      const typingEl = document.getElementById('ll-chatbot-typing');
      if (typingEl) {
        typingEl.remove();
      }
    }

    scrollToBottom() {
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    formatTime(date) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    async sendMessage() {
      const text = this.input.value.trim();
      if (!text || this.isLoading) return;

      // Add user message
      this.addMessage(text, 'user');
      this.input.value = '';

      // Disable input while loading
      this.isLoading = true;
      this.sendBtn.disabled = true;
      this.showTyping();

      try {
        // Build context based on user query
        const context = await buildContext(text);

        // Prepare messages for API
        const apiMessages = this.messages
          .filter(m => m.sender !== 'system')
          .slice(-10) // Keep last 10 messages for context
          .map(m => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text
          }));

        // Call API
        const response = await fetch(CONFIG.apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: apiMessages,
            context: context
          }),
        });

        if (!response.ok) {
          throw new Error('API request failed');
        }

        // Handle streaming response
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let botMessage = '';
        let buffer = ''; // Buffer for incomplete chunks

        this.hideTyping();

        // Create message element for streaming
        const messageEl = document.createElement('div');
        messageEl.className = 'll-chatbot-message bot';
        messageEl.innerHTML = `
          <div class="ll-chatbot-message-content"></div>
          <div class="ll-chatbot-message-time">${this.formatTime(new Date())}</div>
        `;
        this.messagesContainer.appendChild(messageEl);
        const contentEl = messageEl.querySelector('.ll-chatbot-message-content');

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          // Append new chunk to buffer
          buffer += decoder.decode(value, { stream: true });

          // Process complete lines from buffer
          const lines = buffer.split('\n');
          // Keep the last potentially incomplete line in buffer
          buffer = lines.pop() || '';

          for (const line of lines) {
            const trimmedLine = line.trim();
            if (!trimmedLine || !trimmedLine.startsWith('data: ')) continue;

            const data = trimmedLine.slice(6);
            if (data === '[DONE]') continue;

            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content;
              if (content) {
                botMessage += content;
                // Format and display
                let formattedText = botMessage
                  .replace(/\n/g, '<br>')
                  .replace(/(\/[a-zA-Z0-9-]+\.html)/g, '<a href="$1" target="_blank">$1</a>');
                contentEl.innerHTML = formattedText;
                this.scrollToBottom();
              }
            } catch (e) {
              // Skip invalid JSON (incomplete chunks)
            }
          }
        }

        // Process any remaining data in buffer
        if (buffer.trim() && buffer.trim().startsWith('data: ')) {
          const data = buffer.trim().slice(6);
          if (data !== '[DONE]') {
            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content;
              if (content) {
                botMessage += content;
                let formattedText = botMessage
                  .replace(/\n/g, '<br>')
                  .replace(/(\/[a-zA-Z0-9-]+\.html)/g, '<a href="$1" target="_blank">$1</a>');
                contentEl.innerHTML = formattedText;
              }
            } catch (e) {
              // Skip invalid JSON
            }
          }
        }

        // Add final message to history
        if (botMessage) {
          this.messages.push({
            text: botMessage,
            sender: 'bot',
            time: new Date()
          });
        }

      } catch (error) {
        console.error('Chat error:', error);
        this.hideTyping();
        this.addMessage(CONFIG.errorMessage, 'bot');
      } finally {
        this.isLoading = false;
        this.sendBtn.disabled = false;
        this.input.focus();
      }
    }
  }

  // Initialize
  function init() {
    // Don't initialize if already exists
    if (document.querySelector('.ll-chatbot-widget')) {
      return;
    }

    injectStyles();
    const widget = createWidget();
    new ChatBot(widget);
  }

  // Wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
