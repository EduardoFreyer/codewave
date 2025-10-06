# CodeWave - Sistemas de Informação

Este repositório contém um site informativo sobre o curso de Sistemas de Informação, com informações sobre áreas de atuação, grade curricular e blog.

## 🚀 Versão HTML/CSS/JavaScript

O site agora está disponível em **HTML, CSS e JavaScript puro**, sem dependências de frameworks como Next.js ou React.

### Como visualizar o site

#### Opção 1: Abrir diretamente no navegador
Simplesmente abra o arquivo `index.html` em seu navegador web preferido.

#### Opção 2: Usar um servidor local
Para uma experiência completa com carregamento correto de recursos, use um servidor HTTP local:

**Usando Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Usando Node.js (http-server):**
```bash
npx http-server -p 8000
```

**Usando PHP:**
```bash
php -S localhost:8000
```

Depois acesse `http://localhost:8000` no seu navegador.

## 📁 Estrutura do Projeto

```
codewave/
├── index.html          # Página inicial
├── areas.html          # Áreas de atuação
├── grade.html          # Grade curricular
├── blog.html           # Blog
├── styles.css          # Estilos CSS
├── script.js           # JavaScript comum
├── areas.js            # JavaScript da página de áreas
├── grade.js            # JavaScript da grade curricular
├── blog.js             # JavaScript do blog
└── public/             # Imagens e recursos estáticos
```

## 🎨 Funcionalidades

- ✅ **Navegação responsiva** com menu mobile
- ✅ **Carousel de áreas** com navegação automática e manual
- ✅ **Grade curricular interativa** com visualização expandida
- ✅ **Blog com filtros** por categoria
- ✅ **Design responsivo** para todos os tamanhos de tela
- ✅ **Animações suaves** com CSS e JavaScript puro
- ✅ **Sem dependências** - funciona sem node_modules ou build

## 🌐 Páginas

1. **Início** (`index.html`) - Página principal com informações gerais sobre o curso
2. **Áreas de Atuação** (`areas.html`) - Carousel interativo mostrando diferentes áreas de TI
3. **Grade Curricular** (`grade.html`) - Visualização completa das disciplinas por semestre
4. **Blog** (`blog.html`) - Posts sobre carreira, tecnologia e mercado

## 🎯 Tecnologias Utilizadas

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- JavaScript ES6+ (Vanilla)
- SVG para ícones

## 📝 Versão Next.js (Legacy)

O código original em Next.js/React ainda está presente no repositório nas pastas:
- `app/` - Páginas Next.js
- `components/` - Componentes React
- `package.json` - Dependências do projeto Next.js

Para executar a versão Next.js:
```bash
npm install
npm run dev
```

## 🤝 Contribuindo

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novos recursos.

## 📄 Licença

Este projeto é apenas para fins educacionais.
