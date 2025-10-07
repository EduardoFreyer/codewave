// Blog JavaScript

const blogPosts = [
    {
        id: '1',
        title: 'As 10 Linguagens de Programação Mais Demandadas em 2024',
        excerpt: 'Descubra quais linguagens estão dominando o mercado de trabalho e como se preparar para as oportunidades futuras.',
        author: 'Ana Silva',
        date: '2024-01-15',
        readTime: '8 min',
        category: 'Tecnologia',
        image: '/public/programming-languages-code.jpg',
        likes: 124,
        comments: 18,
        featured: true
    },
    {
        id: '2',
        title: 'Como Construir um Portfólio Impressionante para Sistemas de Informação',
        excerpt: 'Dicas práticas para criar um portfólio que chame a atenção dos recrutadores e demonstre suas habilidades.',
        author: 'Carlos Santos',
        date: '2024-01-12',
        readTime: '6 min',
        category: 'Carreira',
        image: '/public/portfolio-website-design.png',
        likes: 89,
        comments: 12,
        featured: true
    },
    {
        id: '3',
        title: 'Inteligência Artificial no Mercado de Trabalho: Oportunidade ou Ameaça?',
        excerpt: 'Análise sobre como a IA está transformando o mercado e criando novas oportunidades para profissionais de TI.',
        author: 'Maria Oliveira',
        date: '2024-01-10',
        readTime: '10 min',
        category: 'Mercado',
        image: '/public/ai-robot.png',
        likes: 156,
        comments: 24,
        featured: true
    },
    {
        id: '4',
        title: 'Metodologias Ágeis: Scrum vs Kanban na Prática',
        excerpt: 'Comparação detalhada entre as principais metodologias ágeis e quando usar cada uma em seus projetos.',
        author: 'João Costa',
        date: '2024-01-08',
        readTime: '7 min',
        category: 'Estudos',
        image: '/public/agile-methodology-scrum-board.jpg',
        likes: 67,
        comments: 9,
        featured: false
    },
    {
        id: '5',
        title: 'Segurança Cibernética: Tendências e Desafios para 2024',
        excerpt: 'Principais ameaças digitais e como os profissionais de SI podem se preparar para enfrentá-las.',
        author: 'Pedro Lima',
        date: '2024-01-05',
        readTime: '9 min',
        category: 'Tecnologia',
        image: '/public/cybersecurity-shield.png',
        likes: 98,
        comments: 15,
        featured: false
    },
    {
        id: '6',
        title: 'Salários em TI: Guia Completo por Área e Experiência',
        excerpt: 'Levantamento atualizado dos salários nas principais áreas de tecnologia no Brasil.',
        author: 'Lucia Ferreira',
        date: '2024-01-03',
        readTime: '12 min',
        category: 'Carreira',
        image: '/public/salary-money-calculator.jpg',
        likes: 203,
        comments: 31,
        featured: false
    }
];

let likedPosts = new Set();
let currentCategory = 'all';

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

function renderBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    const filteredPosts = currentCategory === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === currentCategory);

    blogGrid.innerHTML = filteredPosts.map(post => `
        <div class="blog-card">
            <div class="blog-image-container">
                <img src="${post.image}" alt="${post.title}" class="blog-image" onerror="this.src='/public/placeholder.jpg'">
                <span class="blog-category-badge badge-categoria-${post.category}">
                    ${post.category}
                </span>
            </div>
            
            <div class="blog-content">
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                
                <div class="blog-meta">
                    <div class="blog-meta-item">
                        <svg class="blog-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                        </svg>
                        <span>${post.author}</span>
                    </div>
                    <div class="blog-meta-item">
                        <svg class="blog-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        <span>${formatDate(post.date)}</span>
                    </div>
                    <div class="blog-meta-item">
                        <svg class="blog-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span>${post.readTime}</span>
                    </div>
                </div>
                
                <div class="blog-footer">
                    <div class="blog-actions">
                        <button class="blog-action-btn ${likedPosts.has(post.id) ? 'liked' : ''}" 
                                onclick="toggleLike('${post.id}')">
                            <svg class="blog-action-icon ${likedPosts.has(post.id) ? 'filled' : ''}" 
                                 viewBox="0 0 24 24" fill="${likedPosts.has(post.id) ? 'currentColor' : 'none'}" 
                                 stroke="currentColor" stroke-width="2">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                            </svg>
                            <span>${post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                        </button>
                        <div class="blog-action-btn">
                            <svg class="blog-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                            <span>${post.comments}</span>
                        </div>
                        <button class="blog-action-btn">
                            <svg class="blog-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="18" cy="5" r="3"/>
                                <circle cx="6" cy="12" r="3"/>
                                <circle cx="18" cy="19" r="3"/>
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                            </svg>
                        </button>
                    </div>
                    <button class="blog-read-more">
                        Ler mais
                        <svg class="blog-read-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                            <polyline points="12 5 19 12 12 19"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function toggleLike(postId) {
    if (likedPosts.has(postId)) {
        likedPosts.delete(postId);
    } else {
        likedPosts.add(postId);
    }
    renderBlogPosts();
}

function setCategory(category) {
    currentCategory = category;
    
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    renderBlogPosts();
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderBlogPosts();
    
    // Setup category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setCategory(this.dataset.category);
        });
    });
});
