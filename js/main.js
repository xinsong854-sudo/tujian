// 伪物图鉴主脚本
let currentFilter = 'all';

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    renderArtifacts();
});

// 初始化标签页
function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.dataset.filter;
            renderArtifacts();
        });
    });
}

// 渲染物品列表
function renderArtifacts() {
    const grid = document.getElementById('artifact-grid');
    const filtered = currentFilter === 'all' 
        ? artifacts 
        : artifacts.filter(a => a.class === currentFilter);
    
    if (filtered.length === 0) {
        grid.innerHTML = '<div class="no-results">暂无该分类下的物品</div>';
        return;
    }
    
    grid.innerHTML = filtered.map(artifact => `
        <div class="artifact-card" onclick="showArtifact('${artifact.id}')">
            <img class="card-image" src="${artifact.image}" alt="${artifact.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyODAiIGhlaWdodD0iMjgwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZThlOGU4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGR5PSIuM2VtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5Ij7mloXmnKw8L3RleHQ+PC9zdmc+'">
            <div class="card-info">
                <div class="card-number">${artifact.id}</div>
                <div class="card-name">${artifact.name}</div>
                <span class="card-class ${artifact.class}">${artifact.class}</span>
            </div>
        </div>
    `).join('');
}

// 显示物品详情
function showArtifact(id) {
    const artifact = artifacts.find(a => a.id === id);
    if (!artifact) return;
    
    document.getElementById('modal-title').textContent = artifact.id;
    document.getElementById('modal-name').textContent = artifact.name;
    document.getElementById('modal-class').textContent = artifact.class;
    document.getElementById('modal-class').className = `modal-class ${artifact.class}`;
    document.getElementById('modal-location').textContent = artifact.location;
    document.getElementById('modal-containment').textContent = artifact.containment;
    document.getElementById('modal-effect').textContent = artifact.effect || '未知';
    document.getElementById('modal-description').textContent = artifact.description;
    document.getElementById('modal-img').src = artifact.image;
    
    document.getElementById('artifact-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 关闭模态框
function closeModal() {
    document.getElementById('artifact-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('artifact-modal');
    if (event.target === modal) {
        closeModal();
    }
}

// 键盘 ESC 关闭
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
