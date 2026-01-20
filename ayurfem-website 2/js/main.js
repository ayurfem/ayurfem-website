// ========================================
// AYURFEM - Main JavaScript
// ========================================

// Translations
const translations = {
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.research': 'Research',
        'nav.knowledge': 'Knowledge',
        'nav.science': 'The Science',
        'nav.collaborate': 'Collaborate',

        // Hero
        'hero.tagline': "A Woman's Complete Companion",
        'hero.title': "You're Not Crazy.<br>Your Body Is Speaking.",
        'hero.subtitle': 'Science-validated Ayurvedic wisdom for women who\'ve been dismissed, overlooked, or told "it\'s all in your head."',
        'hero.cta1': 'Our Research',
        'hero.cta2': 'Collaborate With Us',

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

        // Research Section
        'research.label': 'Our Research',
        'research.title': 'Building the Evidence Base for Women\'s Ayurvedic Health',
        'research.intro': 'We\'re bridging the gap between ancient Ayurvedic wisdom and modern clinical validation. Our research focuses on creating evidence chains that connect traditional practices to measurable outcomes.',
        'research.status.active': 'Active Research',
        'research.status.planning': 'Planning Phase',
        'research.status.exploring': 'Exploring',
        'research.badge.flagship': 'Flagship Study',
        'research.menopause.title': 'Menopausal Symptom Management',
        'research.menopause.desc': 'Investigating Shatavari and Ashwagandha protocols for hot flashes, night sweats, and hormonal balance. Building on clinical trials showing 85% reduction in symptoms.',
        'research.pcos.title': 'PCOS Integrative Protocol',
        'research.pcos.desc': 'Developing comprehensive protocols combining Ayurvedic herbs (Cinnamon, Shatavari, Kanchanar) with lifestyle interventions. Documenting quality of life improvements and cycle regularization.',
        'research.postpartum.title': 'Sutika Paricharya (Postpartum Recovery)',
        'research.postpartum.desc': 'Documenting the traditional 42-day postpartum recovery protocol. Studying Abhyanga, specialized diet (Yavagu), and Vata-pacifying practices for modern validation.',
        'research.fertility.title': 'Fertility Enhancement',
        'research.fertility.desc': 'Exploring Ashwagandha and Shatavari for folliculogenesis and ovulation support. Comparing outcomes with conventional treatments like Clomiphene citrate.',
        'research.ayurgenomics.title': 'Ayurgenomics & Prakriti',
        'research.ayurgenomics.desc': 'Investigating connections between Ayurvedic constitution types (Prakriti) and genomic markers. Exploring personalized medicine through the lens of 5,000 years of traditional knowledge.',
        'research.apitherapy.title': 'Apitherapy & Royal Jelly',
        'research.apitherapy.desc': 'Investigating the therapeutic potential of royal jelly and bee products for hormonal health, fertility support, and menopausal symptoms.',
        'research.cta.title': '🤝 Join Our Research Network',
        'research.cta.desc': 'We\'re seeking researchers, practitioners, and institutions interested in building evidence-based integrative women\'s health protocols. Together, we can bridge ancient wisdom and modern science.',
        'research.cta.button': 'Propose a Collaboration',

        // Collaboration Section
        'collaborate.label': 'Research Collaboration',
        'collaborate.title': 'Let\'s Build Evidence Together',
        'collaborate.desc1': 'We\'re actively seeking collaborators who share our vision of bridging Ayurvedic tradition with clinical science. Whether you\'re a researcher, practitioner, institution, or simply passionate about women\'s integrative health.',
        'collaborate.desc2': 'Let\'s create something meaningful—rigorous research that honors both ancient wisdom and modern methodology.',
        'collaborate.type1.title': 'Academic Partners',
        'collaborate.type1.desc': 'Universities and research institutions interested in integrative medicine studies',
        'collaborate.type2.title': 'Clinical Practitioners',
        'collaborate.type2.desc': 'Ayurvedic doctors, naturopaths, and integrative health practitioners',
        'collaborate.type3.title': 'Industry Partners',
        'collaborate.type3.desc': 'Wellness brands, supplement companies, and health tech innovators',

        // Form
        'form.name': 'Name',
        'form.email': 'Email',
        'form.organization': 'Organization / Affiliation',
        'form.collaboration_type': 'Collaboration Interest',
        'form.research_area': 'Research Area of Interest',
        'form.proposal': 'Tell us about your proposed collaboration',
        'form.submit': 'Submit Collaboration Proposal',
        'form.option.research': 'Research Partnership',
        'form.option.clinical': 'Clinical Trial Collaboration',
        'form.option.data': 'Data Sharing / Evidence Base',
        'form.option.practitioner': 'Practitioner Network',
        'form.option.content': 'Content / Knowledge Contribution',
        'form.option.other': 'Other',
        'form.area.menopause': 'Menopausal Symptom Management',
        'form.area.pcos': 'PCOS Integrative Protocols',
        'form.area.postpartum': 'Postpartum Recovery (Sutika Paricharya)',
        'form.area.fertility': 'Fertility Enhancement',
        'form.area.ayurgenomics': 'Ayurgenomics & Prakriti',
        'form.area.apitherapy': 'Apitherapy & Royal Jelly',
        'form.area.multiple': 'Multiple Areas'
    },
    es: {
        // Navigation
        'nav.about': 'Sobre Mí',
        'nav.research': 'Investigación',
        'nav.knowledge': 'Conocimiento',
        'nav.science': 'La Ciencia',
        'nav.collaborate': 'Colaborar',

        // Hero
        'hero.tagline': 'La Compañera Completa de la Mujer',
        'hero.title': 'No Estás Loca.<br>Tu Cuerpo Está Hablando.',
        'hero.subtitle': 'Sabiduría Ayurvédica validada científicamente para mujeres que han sido ignoradas o les dijeron "todo está en tu cabeza."',
        'hero.cta1': 'Nuestra Investigación',
        'hero.cta2': 'Colabora Con Nosotros',

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

        // Research Section
        'research.label': 'Nuestra Investigación',
        'research.title': 'Construyendo la Base de Evidencia para la Salud Ayurvédica Femenina',
        'research.intro': 'Estamos cerrando la brecha entre la sabiduría Ayurvédica ancestral y la validación clínica moderna. Nuestra investigación se centra en crear cadenas de evidencia que conecten las prácticas tradicionales con resultados medibles.',
        'research.status.active': 'Investigación Activa',
        'research.status.planning': 'Fase de Planificación',
        'research.status.exploring': 'Explorando',
        'research.badge.flagship': 'Estudio Principal',
        'research.menopause.title': 'Manejo de Síntomas Menopáusicos',
        'research.menopause.desc': 'Investigando protocolos de Shatavari y Ashwagandha para sofocos, sudores nocturnos y equilibrio hormonal. Basado en ensayos clínicos que muestran 85% de reducción de síntomas.',
        'research.pcos.title': 'Protocolo Integrativo para SOP',
        'research.pcos.desc': 'Desarrollando protocolos completos combinando hierbas Ayurvédicas (Canela, Shatavari, Kanchanar) con intervenciones de estilo de vida. Documentando mejoras en calidad de vida y regularización del ciclo.',
        'research.postpartum.title': 'Sutika Paricharya (Recuperación Posparto)',
        'research.postpartum.desc': 'Documentando el protocolo tradicional de recuperación posparto de 42 días. Estudiando Abhyanga, dieta especializada (Yavagu), y prácticas para pacificar Vata para validación moderna.',
        'research.fertility.title': 'Mejora de la Fertilidad',
        'research.fertility.desc': 'Explorando Ashwagandha y Shatavari para foliculogénesis y apoyo a la ovulación. Comparando resultados con tratamientos convencionales como citrato de Clomifeno.',
        'research.ayurgenomics.title': 'Ayurgenómica y Prakriti',
        'research.ayurgenomics.desc': 'Investigando conexiones entre tipos de constitución Ayurvédica (Prakriti) y marcadores genómicos. Explorando medicina personalizada a través de 5,000 años de conocimiento tradicional.',
        'research.apitherapy.title': 'Apiterapia y Jalea Real',
        'research.apitherapy.desc': 'Investigando el potencial terapéutico de la jalea real y productos de abeja para salud hormonal, apoyo a la fertilidad y síntomas menopáusicos.',
        'research.cta.title': '🤝 Únete a Nuestra Red de Investigación',
        'research.cta.desc': 'Buscamos investigadores, profesionales e instituciones interesados en construir protocolos de salud femenina integrativa basados en evidencia. Juntos, podemos unir la sabiduría ancestral con la ciencia moderna.',
        'research.cta.button': 'Proponer una Colaboración',

        // Collaboration Section
        'collaborate.label': 'Colaboración en Investigación',
        'collaborate.title': 'Construyamos Evidencia Juntos',
        'collaborate.desc1': 'Buscamos activamente colaboradores que compartan nuestra visión de unir la tradición Ayurvédica con la ciencia clínica. Ya seas investigador, profesional, institución, o simplemente apasionado por la salud integrativa femenina.',
        'collaborate.desc2': 'Creemos algo significativo—investigación rigurosa que honre tanto la sabiduría ancestral como la metodología moderna.',
        'collaborate.type1.title': 'Socios Académicos',
        'collaborate.type1.desc': 'Universidades e instituciones de investigación interesadas en estudios de medicina integrativa',
        'collaborate.type2.title': 'Profesionales Clínicos',
        'collaborate.type2.desc': 'Médicos Ayurvédicos, naturópatas y profesionales de salud integrativa',
        'collaborate.type3.title': 'Socios de la Industria',
        'collaborate.type3.desc': 'Marcas de bienestar, empresas de suplementos e innovadores en tecnología de salud',

        // Form
        'form.name': 'Nombre',
        'form.email': 'Correo Electrónico',
        'form.organization': 'Organización / Afiliación',
        'form.collaboration_type': 'Interés de Colaboración',
        'form.research_area': 'Área de Investigación de Interés',
        'form.proposal': 'Cuéntanos sobre tu propuesta de colaboración',
        'form.submit': 'Enviar Propuesta de Colaboración',
        'form.option.research': 'Asociación de Investigación',
        'form.option.clinical': 'Colaboración en Ensayos Clínicos',
        'form.option.data': 'Compartir Datos / Base de Evidencia',
        'form.option.practitioner': 'Red de Profesionales',
        'form.option.content': 'Contribución de Contenido / Conocimiento',
        'form.option.other': 'Otro',
        'form.area.menopause': 'Manejo de Síntomas Menopáusicos',
        'form.area.pcos': 'Protocolos Integrativos para SOP',
        'form.area.postpartum': 'Recuperación Posparto (Sutika Paricharya)',
        'form.area.fertility': 'Mejora de la Fertilidad',
        'form.area.ayurgenomics': 'Ayurgenómica y Prakriti',
        'form.area.apitherapy': 'Apiterapia y Jalea Real',
        'form.area.multiple': 'Múltiples Áreas'
    },
    fr: {
        // Navigation
        'nav.about': 'À Propos',
        'nav.research': 'Recherche',
        'nav.knowledge': 'Savoir',
        'nav.science': 'La Science',
        'nav.collaborate': 'Collaborer',

        // Hero
        'hero.tagline': "L'Accompagnement Complet de la Femme",
        'hero.title': "Vous N'êtes Pas Folle.<br>Votre Corps Parle.",
        'hero.subtitle': 'Sagesse Ayurvédique validée scientifiquement pour les femmes qui ont été ignorées ou à qui on a dit "c\'est dans votre tête."',
        'hero.cta1': 'Notre Recherche',
        'hero.cta2': 'Collaborez Avec Nous',

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

        // Research Section
        'research.label': 'Notre Recherche',
        'research.title': 'Construire la Base Scientifique pour la Santé Ayurvédique des Femmes',
        'research.intro': 'Nous comblons le fossé entre la sagesse Ayurvédique ancestrale et la validation clinique moderne. Notre recherche se concentre sur la création de chaînes de preuves reliant les pratiques traditionnelles aux résultats mesurables.',
        'research.status.active': 'Recherche Active',
        'research.status.planning': 'Phase de Planification',
        'research.status.exploring': 'En Exploration',
        'research.badge.flagship': 'Étude Phare',
        'research.menopause.title': 'Gestion des Symptômes Ménopausiques',
        'research.menopause.desc': 'Étude des protocoles Shatavari et Ashwagandha pour les bouffées de chaleur, sueurs nocturnes et équilibre hormonal. Basé sur des essais cliniques montrant 85% de réduction des symptômes.',
        'research.pcos.title': 'Protocole Intégratif pour le SOPK',
        'research.pcos.desc': 'Développement de protocoles complets combinant herbes Ayurvédiques (Cannelle, Shatavari, Kanchanar) avec interventions de mode de vie. Documentation des améliorations de qualité de vie et régularisation des cycles.',
        'research.postpartum.title': 'Sutika Paricharya (Récupération Post-Partum)',
        'research.postpartum.desc': 'Documentation du protocole traditionnel de récupération post-partum de 42 jours. Étude de l\'Abhyanga, régime spécialisé (Yavagu), et pratiques d\'apaisement de Vata pour validation moderne.',
        'research.fertility.title': 'Amélioration de la Fertilité',
        'research.fertility.desc': 'Exploration de l\'Ashwagandha et Shatavari pour la folliculogenèse et le soutien à l\'ovulation. Comparaison des résultats avec les traitements conventionnels comme le citrate de Clomifène.',
        'research.ayurgenomics.title': 'Ayurgénomique et Prakriti',
        'research.ayurgenomics.desc': 'Étude des connexions entre les types de constitution Ayurvédique (Prakriti) et les marqueurs génomiques. Exploration de la médecine personnalisée à travers 5 000 ans de connaissances traditionnelles.',
        'research.apitherapy.title': 'Apithérapie et Gelée Royale',
        'research.apitherapy.desc': 'Étude du potentiel thérapeutique de la gelée royale et des produits de la ruche pour la santé hormonale, le soutien à la fertilité et les symptômes ménopausiques.',
        'research.cta.title': '🤝 Rejoignez Notre Réseau de Recherche',
        'research.cta.desc': 'Nous recherchons des chercheurs, praticiens et institutions intéressés par la construction de protocoles de santé féminine intégrative basés sur des preuves. Ensemble, nous pouvons unir la sagesse ancestrale et la science moderne.',
        'research.cta.button': 'Proposer une Collaboration',

        // Collaboration Section
        'collaborate.label': 'Collaboration de Recherche',
        'collaborate.title': 'Construisons des Preuves Ensemble',
        'collaborate.desc1': 'Nous recherchons activement des collaborateurs partageant notre vision de relier la tradition Ayurvédique à la science clinique. Que vous soyez chercheur, praticien, institution, ou simplement passionné par la santé intégrative des femmes.',
        'collaborate.desc2': 'Créons quelque chose de significatif—une recherche rigoureuse qui honore à la fois la sagesse ancestrale et la méthodologie moderne.',
        'collaborate.type1.title': 'Partenaires Académiques',
        'collaborate.type1.desc': 'Universités et institutions de recherche intéressées par les études de médecine intégrative',
        'collaborate.type2.title': 'Praticiens Cliniques',
        'collaborate.type2.desc': 'Médecins Ayurvédiques, naturopathes et praticiens de santé intégrative',
        'collaborate.type3.title': 'Partenaires Industriels',
        'collaborate.type3.desc': 'Marques de bien-être, entreprises de compléments et innovateurs en technologie de santé',

        // Form
        'form.name': 'Nom',
        'form.email': 'Email',
        'form.organization': 'Organisation / Affiliation',
        'form.collaboration_type': 'Intérêt de Collaboration',
        'form.research_area': 'Domaine de Recherche d\'Intérêt',
        'form.proposal': 'Parlez-nous de votre proposition de collaboration',
        'form.submit': 'Soumettre la Proposition de Collaboration',
        'form.option.research': 'Partenariat de Recherche',
        'form.option.clinical': 'Collaboration aux Essais Cliniques',
        'form.option.data': 'Partage de Données / Base de Preuves',
        'form.option.practitioner': 'Réseau de Praticiens',
        'form.option.content': 'Contribution de Contenu / Connaissance',
        'form.option.other': 'Autre',
        'form.area.menopause': 'Gestion des Symptômes Ménopausiques',
        'form.area.pcos': 'Protocoles Intégratifs pour le SOPK',
        'form.area.postpartum': 'Récupération Post-Partum (Sutika Paricharya)',
        'form.area.fertility': 'Amélioration de la Fertilité',
        'form.area.ayurgenomics': 'Ayurgénomique et Prakriti',
        'form.area.apitherapy': 'Apithérapie et Gelée Royale',
        'form.area.multiple': 'Domaines Multiples'
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
    document.querySelectorAll('.service-card, .article-card, .condition-card, .research-card').forEach(card => {
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

// ========================================
// Cookie Consent Management - GDPR Compliant
// ========================================

(function() {
    const COOKIE_NAME = 'ayurfem_cookie_consent';
    const COOKIE_EXPIRY_DAYS = 365;

    // Cookie utilities
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + JSON.stringify(value) + ";" + expires + ";path=/;SameSite=Lax";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(nameEQ) === 0) {
                try {
                    return JSON.parse(c.substring(nameEQ.length));
                } catch (e) {
                    return null;
                }
            }
        }
        return null;
    }

    // Elements
    const banner = document.getElementById('cookie-consent');
    const modal = document.getElementById('cookie-modal');
    const acceptBtn = document.getElementById('cookie-accept');
    const rejectBtn = document.getElementById('cookie-reject');
    const settingsBtn = document.getElementById('cookie-settings');
    const saveBtn = document.getElementById('cookie-save');
    const settingsLink = document.getElementById('cookie-settings-link');
    const analyticsCheckbox = document.getElementById('analytics-cookies');
    const marketingCheckbox = document.getElementById('marketing-cookies');

    // Check if consent already given
    function checkConsent() {
        const consent = getCookie(COOKIE_NAME);
        if (!consent) {
            showBanner();
        } else {
            applyConsent(consent);
        }
    }

    // Show/hide banner
    function showBanner() {
        if (banner) {
            setTimeout(() => {
                banner.classList.add('show');
            }, 1000);
        }
    }

    function hideBanner() {
        if (banner) {
            banner.classList.remove('show');
        }
    }

    // Show/hide modal
    function showModal() {
        if (modal) {
            modal.classList.add('show');
            // Load current preferences
            const consent = getCookie(COOKIE_NAME);
            if (consent) {
                if (analyticsCheckbox) analyticsCheckbox.checked = consent.analytics;
                if (marketingCheckbox) marketingCheckbox.checked = consent.marketing;
            }
        }
    }

    function hideModal() {
        if (modal) {
            modal.classList.remove('show');
        }
    }

    // Apply consent settings
    function applyConsent(consent) {
        if (consent.analytics) {
            // Enable analytics - you can add Google Analytics or other tracking here
            console.log('Analytics cookies enabled');
        }
        if (consent.marketing) {
            // Enable marketing cookies
            console.log('Marketing cookies enabled');
        }
    }

    // Save consent
    function saveConsent(analytics, marketing) {
        const consent = {
            essential: true, // Always true
            analytics: analytics,
            marketing: marketing,
            timestamp: new Date().toISOString()
        };
        setCookie(COOKIE_NAME, consent, COOKIE_EXPIRY_DAYS);
        applyConsent(consent);
        hideBanner();
        hideModal();
    }

    // Event listeners
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            saveConsent(true, true);
        });
    }

    if (rejectBtn) {
        rejectBtn.addEventListener('click', function() {
            saveConsent(false, false);
        });
    }

    if (settingsBtn) {
        settingsBtn.addEventListener('click', function() {
            showModal();
        });
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            const analytics = analyticsCheckbox ? analyticsCheckbox.checked : false;
            const marketing = marketingCheckbox ? marketingCheckbox.checked : false;
            saveConsent(analytics, marketing);
        });
    }

    if (settingsLink) {
        settingsLink.addEventListener('click', function(e) {
            e.preventDefault();
            showModal();
        });
    }

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                hideModal();
            }
        });
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', checkConsent);
})();
