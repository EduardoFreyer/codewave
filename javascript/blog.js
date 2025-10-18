// Blog JavaScript

const blogPosts = [
    {
        id: '1',
        title: 'Apresentação do Mini Curso de Lógica de Programação em Java Script',
        excerpt: 'Descubra quais linguagens estão dominando o mercado de trabalho e como se preparar para as oportunidades futuras.',
        author: 'CodeWave',
        date: '16-10-2025',
        readTime: '17 min',
        category: 'Curso',
        image: './public/Apresentação.png',
        link: 'https://youtu.be/O79d4lZQ_5A',
        featured: true
    },
    {
        id: '2',
        title: '3 Formas de Escrever na Tela em JavaScript',
        excerpt: 'Dicas práticas para criar um portfólio que chame a atenção dos recrutadores e demonstre suas habilidades.',
        author: 'CodeWave',
        date: '16-10-2025',
        readTime: '15 min',
        category: 'Curso',
        image: './public/Aula_00.png',
        link: 'https://youtu.be/L-MtEpKswYs',
        featured: true
    },
    {
        id: '3',
        title: 'Aprenda o básico sobre algorítimos',
        excerpt: 'Análise sobre como a IA está transformando o mercado e criando novas oportunidades para profissionais de TI.',
        author: 'CodeWave',
        date: '16-10-2025',
        readTime: '17 min',
        category: 'Curso',
        image: './public/Aula_01.png',
        link: 'https://youtu.be/GAdXU2h2Dqo',
        featured: true
    }
];

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
        <div class="blog-card" onclick="window.location.href='${post.link}'">
            <div class="blog-image-container">
                <img src="${post.image}" alt="${post.title}" class="blog-image"">
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
                    <button class="blog-read-more" onclick="window.location.href='${post.link}'">
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

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    renderBlogPosts();

    // Setup category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            setCategory(this.dataset.category);
        });
    });
});
