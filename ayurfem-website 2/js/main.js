// ========================================
// AYURFEM - Main JavaScript
// ========================================

// Translations
const translations = {
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.knowledge': 'Knowledge',
        'nav.science': 'The Science',
        'nav.book': 'Book Consultation',

        // Hero
        'hero.tagline': "A Woman's Complete Companion",
        'hero.title': "You're Not Crazy.<br>Your Body Is Speaking.",
        'hero.subtitle': 'Science-validated Ayurvedic wisdom for women who\'ve been dismissed, overlooked, or told "it\'s all in your head."',
        'hero.cta1': 'Explore Services',
        'hero.cta2': 'My Story',

        // Trust Bar
        'trust.years': 'Years Experience',
        'trust.training': 'Years Training in India',
        'trust.women': 'Women Supported',
        'trust.wisdom': 'Ancient Wisdom',

        // Problem Section
        'problem.title': 'Have You Ever Been Told...',
        'problem.quote1': '"Just lose weight and it will fix itself"',
        'problem.quote2': '"Your labs are normal, there\'s nothing wrong"',
        'problem.quote3': '"That\'s just part of being a woman"',
        'problem.quote4': '"Here\'s a prescription. Next patient."',
        'problem.statement': 'If you\'ve felt dismissed, unheard, or abandoned by conventional medicine—you\'re not alone. <strong>29% of women report feeling dismissed by their doctors.</strong> You deserve answers that honor both ancient wisdom and modern science.',

        // Contact
        'contact.label': 'Begin Your Journey',
        'contact.title': "Let's Talk",
        'contact.desc1': "Whether you're struggling with PCOS, preparing for pregnancy, recovering postpartum, or navigating menopause—you don't have to do it alone.",
        'contact.desc2': "Book a consultation and let's create a personalized path forward, together."
    },
    es: {
        // Navigation
        'nav.about': 'Sobre Mí',
        'nav.services': 'Servicios',
        'nav.knowledge': 'Conocimiento',
        'nav.science': 'La Ciencia',
        'nav.book': 'Reservar Consulta',

        // Hero
        'hero.tagline': 'La Compañera Completa de la Mujer',
        'hero.title': 'No Estás Loca.<br>Tu Cuerpo Está Hablando.',
        'hero.subtitle': 'Sabiduría Ayurvédica validada científicamente para mujeres que han sido ignoradas o les dijeron "todo está en tu cabeza."',
        'hero.cta1': 'Explorar Servicios',
        'hero.cta2': 'Mi Historia',

        // Trust Bar
        'trust.years': 'Años de Experiencia',
        'trust.training': 'Años de Formación en India',
        'trust.women': 'Mujeres Apoyadas',
        'trust.wisdom': 'Sabiduría Ancestral',

        // Problem Section
        'problem.title': '¿Alguna Vez Te Han Dicho...?',
        'problem.quote1': '"Solo pierde peso y se arreglará"',
        'problem.quote2': '"Tus análisis son normales, no tienes nada"',
        'problem.quote3': '"Eso es parte de ser mujer"',
        'problem.quote4': '"Aquí tienes una receta. Siguiente paciente."',
        'problem.statement': 'Si te has sentido ignorada, no escuchada o abandonada por la medicina convencional—no estás sola. <strong>El 29% de las mujeres reportan sentirse ignoradas por sus médicos.</strong> Mereces respuestas que honren tanto la sabiduría ancestral como la ciencia moderna.',

        // Contact
        'contact.label': 'Comienza Tu Camino',
        'contact.title': 'Hablemos',
        'contact.desc1': 'Ya sea que estés luchando con SOP, preparándote para el embarazo, recuperándote del posparto o navegando la menopausia—no tienes que hacerlo sola.',
        'contact.desc2': 'Reserva una consulta y creemos juntas un camino personalizado hacia adelante.'
    },
    fr: {
        // Navigation
        'nav.about': 'À Propos',
        'nav.services': 'Services',
        'nav.knowledge': 'Savoir',
        'nav.science': 'La Science',
        'nav.book': 'Réserver',

        // Hero
        'hero.tagline': "L'Accompagnement Complet de la Femme",
        'hero.title': "Vous N'êtes Pas Folle.<br>Votre Corps Parle.",
        'hero.subtitle': 'Sagesse Ayurvédique validée scientifiquement pour les femmes qui ont été ignorées ou à qui on a dit "c\'est dans votre tête."',
        'hero.cta1': 'Explorer les Services',
        'hero.cta2': 'Mon Histoire',

        // Trust Bar
        'trust.years': "Ans d'Expérience",
        'trust.training': 'Ans de Formation en Inde',
        'trust.women': 'Femmes Accompagnées',
        'trust.wisdom': 'Sagesse Ancestrale',

        // Problem Section
        'problem.title': 'Vous a-t-on Déjà Dit...?',
        'problem.quote1': '"Perdez du poids et ça ira mieux"',
        'problem.quote2': '"Vos analyses sont normales, tout va bien"',
        'problem.quote3': '"C\'est normal pour une femme"',
        'problem.quote4': '"Voici une ordonnance. Patient suivant."',
        'problem.statement': 'Si vous vous êtes sentie ignorée, pas écoutée ou abandonnée par la médecine conventionnelle—vous n\'êtes pas seule. <strong>29% des femmes rapportent se sentir ignorées par leurs médecins.</strong> Vous méritez des réponses qui honorent à la fois la sagesse ancestrale et la science moderne.',

        // Contact
        'contact.label': 'Commencez Votre Parcours',
        'contact.title': 'Parlons',
        'contact.desc1': 'Que vous luttiez contre le SOPK, prépariez une grossesse, récupériez en post-partum ou naviguiez la ménopause—vous n\'avez pas à le faire seule.',
        'contact.desc2': 'Réservez une consultation et créons ensemble un chemin personnalisé vers l\'avant.'
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ayurfem-lang', lang);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {

    // Language Switcher
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });

    // Load saved language preference
    const savedLang = localStorage.getItem('ayurfem-lang') || 'en';
    if (savedLang !== 'en') {
        setLanguage(savedLang);
    }

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards and sections
    document.querySelectorAll('.service-card, .article-card, .condition-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Form handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Add your form handling here
            // For now, forms will submit to Formspree if configured
        });
    });
    
    // Console welcome message
    console.log('%c🌸 AYURFEM', 'font-size: 24px; font-weight: bold; color: #7D8471;');
    console.log('%cA Woman\'s Complete Companion', 'font-size: 14px; color: #6B6B6B;');
});
