import React, { useState } from 'react';
import './App.css'; // 样式复用上方的 CSS

const HobbyCard = ({ title, type, icon }) => (
    <div className={`hobby-card hobby-card--${type}`}>
        <div className="hobby-card__bg"></div>
        <div className="hobby-card__content">
            <h3>{icon} {title}</h3>
            <p>点击探索更多</p>
        </div>
    </div>
);

function App() {
    const [isDark, setIsDark] = useState(false);

    return (
        <div className={isDark ? 'body dark-theme' : 'body'}>
            <nav className="navbar">
                <div className="navbar__container">
                    <span className="navbar__logo">🌈 LCH.React</span>
                    <button onClick={() => setIsDark(!isDark)} className="theme-btn">
                        {isDark ? '☀️ 阳光模式' : '🌙 彩虹深夜'}
                    </button>
                </div>
            </nav>

            <main className="container">
                <header className="hero">
                    <h1 className="hero__title">阳光彩虹小白马</h1>
                    <p>“代码是理性的，但美感是感性的。”</p>
                </header>

                <section className="glass-card">
                    <h2 className="section__title">热爱与探索</h2>
                    <div className="hobbies-grid">
                        <HobbyCard title="绘画" type="painting" icon="🎨" />
                        <HobbyCard title="旅游" type="travel" icon="🏔️" />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;