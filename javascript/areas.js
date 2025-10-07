// Areas Carousel JavaScript

const areas = [
    {
        id: 'desenvolvimento',
        title: 'Desenvolvimento de Software',
        description: 'Criação de aplicações web, mobile e desktop usando tecnologias modernas',
        icon: `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
        skills: ['JavaScript/TypeScript', 'React/Angular/Vue', 'Node.js', 'Python', 'Java', 'C#'],
        opportunities: [
            'Desenvolvedor Full-Stack',
            'Desenvolvedor Frontend',
            'Desenvolvedor Backend',
            'Arquiteto de Software'
        ],
        salary: 'R$ 6.000 - R$ 15.000',
        growth: 'Alta demanda no mercado'
    },
    {
        id: 'dados',
        title: 'Ciência de Dados e BI',
        description: 'Análise de dados, machine learning e business intelligence para tomada de decisões',
        icon: `<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>`,
        skills: ['Python/R', 'SQL', 'Power BI', 'Tableau', 'Machine Learning', 'Estatística'],
        opportunities: [
            'Cientista de Dados',
            'Analista de BI',
            'Engenheiro de Dados',
            'Analista de Dados'
        ],
        salary: 'R$ 7.000 - R$ 18.000',
        growth: 'Crescimento exponencial'
    },
    {
        id: 'seguranca',
        title: 'Segurança da Informação',
        description: 'Proteção de sistemas, dados e infraestrutura contra ameaças cibernéticas',
        icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
        skills: ['Ethical Hacking', 'Criptografia', 'Firewall', 'ISO 27001', 'LGPD', 'Forense Digital'],
        opportunities: [
            'Analista de Segurança',
            'Consultor em Segurança',
            'Auditor de TI',
            'CISO'
        ],
        salary: 'R$ 8.000 - R$ 20.000',
        growth: 'Demanda crescente'
    },
    {
        id: 'mobile',
        title: 'Desenvolvimento Mobile',
        description: 'Criação de aplicativos para dispositivos móveis iOS e Android',
        icon: `<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>`,
        skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'UI/UX Mobile'],
        opportunities: [
            'Desenvolvedor Mobile',
            'Desenvolvedor iOS',
            'Desenvolvedor Android',
            'Mobile Architect'
        ],
        salary: 'R$ 6.500 - R$ 16.000',
        growth: 'Mercado em expansão'
    },
    {
        id: 'web',
        title: 'Desenvolvimento Web',
        description: 'Criação de sites, portais e sistemas web responsivos e modernos',
        icon: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
        skills: ['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'PHP', 'WordPress'],
        opportunities: [
            'Desenvolvedor Web',
            'Frontend Developer',
            'Webmaster',
            'UI Developer'
        ],
        salary: 'R$ 5.000 - R$ 12.000',
        growth: 'Base sólida do mercado'
    },
    {
        id: 'banco-dados',
        title: 'Administração de Banco de Dados',
        description: 'Gerenciamento, otimização e manutenção de sistemas de banco de dados',
        icon: `<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>`,
        skills: ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Oracle', 'Performance Tuning'],
        opportunities: [
            'DBA',
            'Arquiteto de Dados',
            'Administrador de BD',
            'Especialista em SQL'
        ],
        salary: 'R$ 7.500 - R$ 17.000',
        growth: 'Sempre necessário'
    }
];

let currentIndex = 0;

function renderCarousel() {
    const area = areas[currentIndex];
    const carouselCard = document.getElementById('carouselCard');
    
    if (!carouselCard) return;

    carouselCard.innerHTML = `
        <div class="carousel-header">
            <div class="carousel-icon-wrapper">
                <svg class="carousel-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${area.icon}
                </svg>
            </div>
            <h3 class="carousel-title">${area.title}</h3>
            <p class="carousel-description">${area.description}</p>
        </div>

        <div class="carousel-body">
            <div class="carousel-section">
                <h4 class="carousel-section-title">Principais Tecnologias</h4>
                <div class="skills-container">
                    ${area.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                </div>
            </div>

            <div class="carousel-section">
                <h4 class="carousel-section-title">Oportunidades de Carreira</h4>
                <div class="opportunities-list">
                    ${area.opportunities.map(opp => `
                        <div class="opportunity-item">
                            <div class="opportunity-dot"></div>
                            <span>${opp}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="carousel-info">
                <div class="info-box">
                    <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                        <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                    </svg>
                    <div>
                        <p class="info-label">Faixa Salarial</p>
                        <p class="info-value">${area.salary}</p>
                    </div>
                </div>
                <div class="info-box">
                    <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                        <polyline points="17 6 23 6 23 12"/>
                    </svg>
                    <div>
                        <p class="info-label">Perspectiva</p>
                        <p class="info-value">${area.growth}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Update dots
    renderDots();
    renderTabs();
}

function renderDots() {
    const dotsContainer = document.getElementById('carouselDots');
    if (!dotsContainer) return;

    dotsContainer.innerHTML = areas.map((_, index) => `
        <button 
            class="carousel-dot ${index === currentIndex ? 'active' : ''}" 
            onclick="goToSlide(${index})"
            aria-label="Ir para área ${index + 1}"
        ></button>
    `).join('');
}

function renderTabs() {
    const tabsContainer = document.getElementById('carouselTabs');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = areas.map((area, index) => `
        <button 
            class="carousel-tab ${index === currentIndex ? 'active' : ''}"
            onclick="goToSlide(${index})"
        >
            <svg class="carousel-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${area.icon}
            </svg>
            <p class="carousel-tab-text">${area.title.split(' ')[0]}</p>
        </button>
    `).join('');
}

function goToSlide(index) {
    currentIndex = index;
    renderCarousel();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % areas.length;
    renderCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + areas.length) % areas.length;
    renderCarousel();
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', function() {
    renderCarousel();

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }

    // Auto-advance carousel
    let autoAdvanceInterval = setInterval(nextSlide, 5000);

    // Pause auto-advance on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoAdvanceInterval);
        });

        carouselContainer.addEventListener('mouseleave', () => {
            autoAdvanceInterval = setInterval(nextSlide, 5000);
        });
    }
});
