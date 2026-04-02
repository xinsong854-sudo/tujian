// 伪物图鉴主脚本
let currentUser = null;
let currentUserLevel = 'low';
let currentFilter = null;

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 检查是否已登录
    const savedUser = localStorage.getItem('pseudoArtifactsUser');
    if (savedUser) {
        const userData = JSON.parse(savedUser);
        currentUser = userData.name;
        currentUserLevel = userData.level;
        showMainInterface();
    }
});

// 验证用户身份
function verifyUser() {
    const username = document.getElementById('username-input').value.trim();
    
    if (!username) {
        alert('请输入用户名');
        return;
    }
    
    // 判断权限等级
    let level = 'low';
    
    if (MAX_PERMISSION_USERS.includes(username)) {
        level = 'max';
    } else if (HIGH_PERMISSION_USERS.includes(username)) {
        level = 'high';
    } else if (username.length > 0) {
        level = 'normal';
    }
    
    // 保存用户信息
    currentUser = username;
    currentUserLevel = level;
    localStorage.setItem('pseudoArtifactsUser', JSON.stringify({ name: username, level: level }));
    
    // 显示主界面
    showMainInterface();
}

// 显示主界面
function showMainInterface() {
    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('main-container').style.display = 'block';
    
    // 更新用户信息显示
    const levelInfo = PERMISSION_LEVELS[currentUserLevel];
    document.getElementById('user-name-display').textContent = currentUser;
    document.getElementById('user-level-display').textContent = `权限等级：${levelInfo.name}`;
    document.getElementById('user-level-display').className = `user-level ${currentUserLevel}`;
    
    // 初始化标签页点击事件
    initTabs();
}

// 初始化标签页
function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const filter = tab.dataset.filter;
            const requiredPermission = tab.dataset.permission;
            
            // 检查权限
            if (!hasPermission(requiredPermission)) {
                showPermissionDenied();
                return;
            }
            
            // 切换激活状态
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // 渲染物品
            currentFilter = filter;
            renderArtifacts(filter);
        });
    });
    
    // 添加回车键支持
    document.getElementById('username-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            verifyUser();
        }
    });
}

// 检查权限
function hasPermission(requiredLevel) {
    const permissionOrder = ['low', 'normal', 'high', 'max'];
    const userIndex = permissionOrder.indexOf(currentUserLevel);
    const requiredIndex = permissionOrder.indexOf(requiredLevel);
    
    return userIndex >= requiredIndex;
}

// 显示权限不足提示
function showPermissionDenied() {
    document.getElementById('permission-denied').style.display = 'flex';
}

// 关闭权限不足提示
function closePermissionDenied() {
    document.getElementById('permission-denied').style.display = 'none';
}

// 渲染物品列表
function renderArtifacts(filter) {
    const grid = document.getElementById('artifact-grid');
    const filtered = artifacts.filter(a => a.class === filter);
    
    if (filtered.length === 0) {
        grid.innerHTML = '<div class="no-results">暂无该分类下的物品</div>';
        return;
    }
    
    grid.innerHTML = filtered.map((artifact, index) => `
        <div class="artifact-card fade-in" style="animation-delay: ${index * 0.05}s" onclick="showArtifact('${artifact.id}')">
            <img class="card-image" src="${artifact.image}" alt="${artifact.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyODAiIGhlaWdodD0iMjgwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZThlOGU4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGR5PSIuM2VtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5Ij7mloXmnKw8L3RleHQ+PC9zdmc+'">
            <div class="card-info">
                <div class="card-number">${artifact.id}</div>
                <div class="card-name">${artifact.name}</div>
                <span class="card-class ${artifact.class}">${artifact.class.toUpperCase()}</span>
            </div>
        </div>
    `).join('');
}

// 显示物品详情
function showArtifact(id) {
    const artifact = artifacts.find(a => a.id === id);
    if (!artifact) return;
    
    // 再次检查权限
    const requiredPermission = CLASS_PERMISSION_MAP[artifact.class];
    if (!hasPermission(requiredPermission)) {
        showPermissionDenied();
        return;
    }
    
    document.getElementById('modal-title').textContent = artifact.id;
    document.getElementById('modal-name').textContent = artifact.name;
    document.getElementById('modal-class').textContent = artifact.class.toUpperCase();
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
    const denied = document.getElementById('permission-denied');
    if (event.target === modal) {
        closeModal();
    }
    if (event.target === denied) {
        closePermissionDenied();
    }
}

// 键盘 ESC 关闭
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closePermissionDenied();
    }
});

// 登出功能（可选）
function logout() {
    localStorage.removeItem('pseudoArtifactsUser');
    location.reload();
}
