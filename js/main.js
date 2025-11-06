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

// 项目切换功能
document.addEventListener('DOMContentLoaded', () => {
    const switchBtns = document.querySelectorAll('.switch-btn');
    const progressContent = document.getElementById('progress-content');
    const championContent = document.getElementById('champion-content');
    const progressDownload = document.getElementById('progress-download');
    const championDownload = document.getElementById('champion-download');
    const progressContact = document.getElementById('progress-contact');
    const championContact = document.getElementById('champion-contact');
    
    switchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const project = btn.getAttribute('data-project');
            
            // 更新按钮状态
            switchBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 切换内容
            if (project === 'progress') {
                progressContent.classList.remove('hidden');
                championContent.classList.add('hidden');
                progressDownload.classList.remove('hidden');
                championDownload.classList.add('hidden');
                progressContact.classList.remove('hidden');
                championContact.classList.add('hidden');
            } else {
                progressContent.classList.add('hidden');
                championContent.classList.remove('hidden');
                progressDownload.classList.add('hidden');
                championDownload.classList.remove('hidden');
                progressContact.classList.add('hidden');
                championContact.classList.remove('hidden');
            }
            
            // 平滑滚动到顶部
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});

// 复制进步APP微信号
function copyWechatProgress() {
    const wechatId = document.getElementById('wechatIdProgress').textContent;
    const copyText = document.getElementById('copyTextProgress');
    
    navigator.clipboard.writeText(wechatId).then(() => {
        copyText.textContent = '✓ 已复制';
        setTimeout(() => {
            copyText.textContent = '📋 复制微信号';
        }, 2000);
    }).catch(err => {
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

// 复制冠军小助手微信号
function copyWechatChampion() {
    const wechatId = document.getElementById('wechatIdChampion').textContent;
    const copyText = document.getElementById('copyTextChampion');
    
    navigator.clipboard.writeText(wechatId).then(() => {
        copyText.textContent = '✓ 已复制';
        setTimeout(() => {
            copyText.textContent = '📋 复制微信号';
        }, 2000);
    }).catch(err => {
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