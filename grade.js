// Grade Curricular JavaScript

const curriculum = [
    {
        number: 1,
        focus: 'Fundamentos',
        subjects: [
            { name: 'Introdução à Computação', hours: 80, type: 'teorica', description: 'Conceitos básicos de computação e história da informática' },
            { name: 'Algoritmos e Programação I', hours: 80, type: 'pratica', description: 'Lógica de programação e estruturas básicas' },
            { name: 'Matemática Discreta', hours: 80, type: 'teorica', description: 'Fundamentos matemáticos para computação' },
            { name: 'Comunicação e Expressão', hours: 40, type: 'teorica', description: 'Técnicas de comunicação oral e escrita' },
            { name: 'Fundamentos de Sistemas', hours: 60, type: 'teorica', description: 'Conceitos básicos de sistemas de informação' }
        ]
    },
    {
        number: 2,
        focus: 'Programação',
        subjects: [
            { name: 'Algoritmos e Programação II', hours: 80, type: 'pratica', description: 'Estruturas de dados e programação orientada a objetos' },
            { name: 'Banco de Dados I', hours: 80, type: 'pratica', description: 'Modelagem e criação de bancos de dados relacionais' },
            { name: 'Cálculo I', hours: 80, type: 'teorica', description: 'Fundamentos de cálculo diferencial e integral' },
            { name: 'Inglês Técnico', hours: 40, type: 'teorica', description: 'Inglês aplicado à área de tecnologia' },
            { name: 'Arquitetura de Computadores', hours: 60, type: 'teorica', description: 'Hardware e organização de computadores' }
        ]
    },
    {
        number: 3,
        focus: 'Desenvolvimento',
        subjects: [
            { name: 'Programação Web I', hours: 80, type: 'pratica', description: 'HTML, CSS, JavaScript e desenvolvimento frontend' },
            { name: 'Banco de Dados II', hours: 80, type: 'pratica', description: 'SQL avançado e administração de bancos' },
            { name: 'Estruturas de Dados', hours: 80, type: 'pratica', description: 'Listas, pilhas, filas, árvores e grafos' },
            { name: 'Estatística', hours: 60, type: 'teorica', description: 'Estatística aplicada à análise de dados' },
            { name: 'Sistemas Operacionais', hours: 60, type: 'teorica', description: 'Conceitos e funcionamento de sistemas operacionais' }
        ]
    },
    {
        number: 4,
        focus: 'Sistemas',
        subjects: [
            { name: 'Programação Web II', hours: 80, type: 'pratica', description: 'Frameworks web e desenvolvimento backend' },
            { name: 'Análise de Sistemas', hours: 80, type: 'teorica', description: 'Levantamento e análise de requisitos' },
            { name: 'Redes de Computadores', hours: 80, type: 'teorica', description: 'Protocolos de rede e comunicação' },
            { name: 'Engenharia de Software I', hours: 80, type: 'teorica', description: 'Metodologias de desenvolvimento de software' },
            { name: 'Interface Humano-Computador', hours: 40, type: 'teorica', description: 'Usabilidade e experiência do usuário' }
        ]
    },
    {
        number: 5,
        focus: 'Gestão',
        subjects: [
            { name: 'Projeto de Sistemas I', hours: 80, type: 'projeto', description: 'Desenvolvimento de projeto prático' },
            { name: 'Engenharia de Software II', hours: 80, type: 'pratica', description: 'Testes, qualidade e manutenção de software' },
            { name: 'Segurança da Informação', hours: 60, type: 'teorica', description: 'Conceitos de segurança e proteção de dados' },
            { name: 'Gestão de Projetos', hours: 60, type: 'teorica', description: 'Metodologias ágeis e gestão de equipes' },
            { name: 'Empreendedorismo', hours: 40, type: 'teorica', description: 'Inovação e criação de negócios em TI' }
        ]
    },
    {
        number: 6,
        focus: 'Especialização',
        subjects: [
            { name: 'Projeto de Sistemas II', hours: 80, type: 'projeto', description: 'Continuação do projeto prático' },
            { name: 'Inteligência Artificial', hours: 80, type: 'pratica', description: 'Machine learning e algoritmos inteligentes' },
            { name: 'Governança de TI', hours: 60, type: 'teorica', description: 'ITIL, COBIT e melhores práticas' },
            { name: 'Desenvolvimento Mobile', hours: 80, type: 'pratica', description: 'Aplicações para dispositivos móveis' },
            { name: 'Ética e Legislação', hours: 40, type: 'teorica', description: 'Aspectos éticos e legais da TI' }
        ]
    },
    {
        number: 7,
        focus: 'Integração',
        subjects: [
            { name: 'Trabalho de Conclusão I', hours: 80, type: 'projeto', description: 'Desenvolvimento do TCC' },
            { name: 'Business Intelligence', hours: 80, type: 'pratica', description: 'Análise de dados e tomada de decisão' },
            { name: 'Auditoria de Sistemas', hours: 60, type: 'teorica', description: 'Auditoria e compliance em TI' },
            { name: 'Sistemas Distribuídos', hours: 80, type: 'teorica', description: 'Arquiteturas distribuídas e cloud computing' },
            { name: 'Optativa I', hours: 40, type: 'teorica', description: 'Disciplina eletiva de especialização' }
        ]
    },
    {
        number: 8,
        focus: 'Conclusão',
        subjects: [
            { name: 'Trabalho de Conclusão II', hours: 80, type: 'projeto', description: 'Finalização e apresentação do TCC' },
            { name: 'Estágio Supervisionado', hours: 160, type: 'pratica', description: 'Experiência prática em empresa' },
            { name: 'Gestão Estratégica de TI', hours: 60, type: 'teorica', description: 'Alinhamento estratégico de TI com negócios' },
            { name: 'Optativa II', hours: 40, type: 'teorica', description: 'Segunda disciplina eletiva' }
        ]
    }
];

let selectedSemester = null;
let showAllSubjects = false;

function getTypeColor(type) {
    switch (type) {
        case 'teorica': return 'badge-blue';
        case 'pratica': return 'badge-green';
        case 'projeto': return 'badge-purple';
        default: return '';
    }
}

function getTypeLabel(type) {
    switch (type) {
        case 'teorica': return 'Teórica';
        case 'pratica': return 'Prática';
        case 'projeto': return 'Projeto';
        default: return 'Geral';
    }
}

function renderSemesterGrid() {
    const container = document.getElementById('curriculumContainer');
    if (!container) return;

    const html = `
        <div class="semester-grid">
            ${curriculum.map(semester => `
                <div class="card semester-card ${selectedSemester === semester.number ? 'selected' : ''}" 
                     onclick="toggleSemester(${semester.number})">
                    <div class="semester-header">
                        <h3 class="semester-number">${semester.number}º Semestre</h3>
                        <p class="semester-focus">${semester.focus}</p>
                    </div>
                    <div class="semester-subjects">
                        ${semester.subjects.slice(0, 3).map(subject => `
                            <div class="subject-preview">
                                <svg class="subject-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                                </svg>
                                <span class="subject-name">${subject.name}</span>
                            </div>
                        `).join('')}
                        ${semester.subjects.length > 3 ? `
                            <p class="semester-more">+${semester.subjects.length - 3} disciplinas</p>
                        ` : ''}
                    </div>
                    <button class="semester-btn">
                        ${selectedSemester === semester.number ? 'Ocultar detalhes' : 'Ver detalhes'}
                    </button>
                </div>
            `).join('')}
        </div>
    `;

    container.innerHTML = html;

    if (selectedSemester) {
        container.innerHTML += renderSemesterDetails();
    }
}

function renderSemesterDetails() {
    const semester = curriculum.find(s => s.number === selectedSemester);
    if (!semester) return '';

    return `
        <div class="card mt-4">
            <div class="semester-full-header">
                <h3 class="semester-full-title">${semester.number}º Semestre - ${semester.focus}</h3>
            </div>
            <div class="semester-full-content">
                <div class="subjects-grid">
                    ${semester.subjects.map(subject => `
                        <div class="card subject-card">
                            <svg class="subject-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                            </svg>
                            <div>
                                <div class="subject-header">
                                    <h4 class="subject-title">${subject.name}</h4>
                                    <span class="subject-badge ${getTypeColor(subject.type)}">
                                        ${getTypeLabel(subject.type)}
                                    </span>
                                </div>
                                <p class="subject-desc">${subject.description}</p>
                                <div class="subject-hours">
                                    <svg class="hours-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="12" cy="12" r="10"/>
                                        <polyline points="12 6 12 12 16 14"/>
                                    </svg>
                                    <span>${subject.hours}h</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderAllSubjects() {
    const container = document.getElementById('curriculumContainer');
    if (!container) return;

    const html = `
        <div class="all-semesters">
            ${curriculum.map(semester => `
                <div class="semester-full-card">
                    <div class="semester-full-header">
                        <h3 class="semester-full-title">${semester.number}º Semestre - ${semester.focus}</h3>
                    </div>
                    <div class="semester-full-content">
                        <div class="subjects-grid">
                            ${semester.subjects.map(subject => `
                                <div class="card subject-card">
                                    <svg class="subject-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                                    </svg>
                                    <div>
                                        <div class="subject-header">
                                            <h4 class="subject-title">${subject.name}</h4>
                                            <span class="subject-badge ${getTypeColor(subject.type)}">
                                                ${getTypeLabel(subject.type)}
                                            </span>
                                        </div>
                                        <p class="subject-desc">${subject.description}</p>
                                        <div class="subject-hours">
                                            <svg class="hours-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <circle cx="12" cy="12" r="10"/>
                                                <polyline points="12 6 12 12 16 14"/>
                                            </svg>
                                            <span>${subject.hours}h</span>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    container.innerHTML = html;
}

function toggleSemester(number) {
    if (selectedSemester === number) {
        selectedSemester = null;
    } else {
        selectedSemester = number;
    }
    renderSemesterGrid();
}

function toggleView() {
    showAllSubjects = !showAllSubjects;
    selectedSemester = null;

    const toggleBtn = document.getElementById('toggleViewBtn');
    if (toggleBtn) {
        if (showAllSubjects) {
            toggleBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
                Ocultar Todas as Disciplinas
            `;
            renderAllSubjects();
        } else {
            toggleBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                </svg>
                Ver Todas as Disciplinas
            `;
            renderSemesterGrid();
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderSemesterGrid();

    const toggleBtn = document.getElementById('toggleViewBtn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleView);
    }
});
