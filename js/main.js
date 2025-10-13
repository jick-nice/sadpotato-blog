// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 复制微信号功能
function copyWechat() {
    const wechatId = document.getElementById('wechatId').textContent;
    const copyText = document.getElementById('copyText');
    
    navigator.clipboard.writeText(wechatId).then(() => {
        // 复制成功提示
        copyText.textContent = '✓ 已复制';
        
        // 2秒后恢复原文本
        setTimeout(() => {
            copyText.textContent = '📋 复制微信号';
        }, 2000);
    }).catch(err => {
        // 降级方案：使用旧方法复制
        const textArea = document.createElement('textarea');
        textArea.value = wechatId;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        copyText.textContent = '✓ 已复制';
        setTimeout(() => {
            copyText.textContent = '📋 复制微信号';
        }, 2000);
    });
}

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});
