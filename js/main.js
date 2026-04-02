// 伪物图鉴主脚本
let currentUser = null;
let currentUserLevel = 'low';
let currentFilter = null;

// 初始化 - 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    console.log('页面加载完成，开始初始化...');
    
    // 绑定回车键事件
    const usernameInput = document.getElementById('username-input');
    if (usernameInput) {
        usernameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                verifyUser();
            }
        });
        // 自动聚焦输入框
        setTimeout(() => usernameInput.focus(), 100);
        console.log('输入框已绑定回车事件');
    }
    
    // 检查是否已登录（有缓存）
    const savedUser = localStorage.getItem('pseudoArtifactsUser');
    if (savedUser) {
        try {
            const userData = JSON.parse(savedUser);
            currentUser = userData.name;
            currentUserLevel = userData.level;
            console.log('检测到已登录用户:', currentUser, '权限:', currentUserLevel);
            showMainInterface();
        } catch (e) {
            console.error('解析用户数据失败:', e);
            localStorage.removeItem('pseudoArtifactsUser');
        }
    } else {
        console.log('未检测到已登录用户，显示登录界面');
    }
});

// 验证用户身份
function verifyUser() {
    console.log('开始验证用户身份...');
    
    const usernameInput = document.getElementById('username-input');
    if (!usernameInput) {
        console.error('找不到用户名输入框！');
        alert('系统错误：找不到输入框');
        return;
    }
    
    const username = usernameInput.value.trim();
    console.log('输入的用户名:', username);
    
    if (!username) {
        alert('请输入用户名');
        return;
    }
    
    // 判断权限等级
    let level = 'low';
    
    if (MAX_PERMISSION_USERS.includes(username)) {
        level = 'max';
        console.log('识别为最高权限用户');
    } else if (HIGH_PERMISSION_USERS.includes(username)) {
        level = 'high';
        console.log('识别为高权限用户');
    } else if (username.length > 0) {
        level = 'normal';
        console.log('识别为普通用户');
    }
    
    // 保存用户信息
    currentUser = username;
    currentUserLevel = level;
    localStorage.setItem('pseudoArtifactsUser', JSON.stringify({ name: username, level: level }));
    console.log('用户信息已保存，权限等级:', level);
    
    // 显示主界面
    showMainInterface();
}

// 显示主界面
function showMainInterface() {
    console.log('显示主界面...');
    
    const loginOverlay = document.getElementById('login-overlay');
    const mainContainer = document.getElementById('main-container');
    
    if (!loginOverlay || !mainContainer) {
        console.error('找不到登录界面或主容器！');
        return;
    }
    
    loginOverlay.style.display = 'none';
    mainContainer.style.display = 'block';
    console.log('登录界面已隐藏，主界面已显示');
    
    // 更新用户信息显示
    const userNameDisplay = document.getElementById('user-name-display');
    const userLevelDisplay = document.getElementById('user-level-display');
    
    if (userNameDisplay && userLevelDisplay) {
        userNameDisplay.textContent = currentUser;
        const levelInfo = PERMISSION_LEVELS[currentUserLevel];
        userLevelDisplay.textContent = `权限等级：${levelInfo.name}`;
        userLevelDisplay.className = `user-level ${currentUserLevel}`;
        console.log('用户信息显示:', currentUser, levelInfo.name);
    }
    
    // 初始化标签页点击事件
    initTabs();
    console.log('标签页事件已初始化');
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
