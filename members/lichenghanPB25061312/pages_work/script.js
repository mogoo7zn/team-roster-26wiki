const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    // 切换按钮文字
    if (document.body.classList.contains('dark-theme')) {
        toggleBtn.textContent = '☀️ 唤醒阳光';
    } else {
        toggleBtn.textContent = '🌙 开启深夜模式';
    }
});