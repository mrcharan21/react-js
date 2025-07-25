import React from 'react';


const articles = [
    {
        id: 1,
        title: 'Understanding React Components',
        author: 'Jane Doe',
        date: '2024-06-01',
        content: `React components are the building blocks of any React application. They allow you to split the UI into independent, reusable pieces, and think about each piece in isolation. Components can be functional or class-based, and they accept arbitrary inputs called "props".`
    },
    {
        id: 2,
        title: 'Styling in React',
        author: 'John Smith',
        date: '2024-06-02',
        content: `There are several ways to style React components: inline styles, CSS Modules, styled-components, and external CSS files. Each method has its own advantages and use-cases. External CSS is a popular choice for larger projects due to its maintainability.`
    },
    {
        id: 3,
        title: 'Handling Events in React',
        author: 'Alice Johnson',
        date: '2024-06-03',
        content: `React handles events similarly to DOM elements, but with some syntactic differences. Event handlers are named using camelCase, and you pass a function as the event handler rather than a string.`
    }
];

function Article({ title, author, date, content }) {
    return (
        <div className="article">
            <h2 className="article-title">{title}</h2>
            <div className="article-meta">
                <span>By {author}</span> | <span>{date}</span>
            </div>
            <p className="article-content">{content}</p>
        </div>
    );
}

function Content() {
    return (
        <div className="content-container">
            <header className="content-header">
                <h1>React Learning Hub</h1>
                <p>Explore articles and tutorials about React.js</p>
            </header>
            <main>
                {articles.map(article => (
                    <Article
                        key={article.id}
                        title={article.title}
                        author={article.author}
                        date={article.date}
                        content={article.content}
                    />
                ))}
            </main>
            <footer className="content-footer">
                <p>&copy; 2024 React Learning Hub. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Content;