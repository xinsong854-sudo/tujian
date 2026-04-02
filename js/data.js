// 伪物数据 - 捏 Ta 世界观设定
// 分级规则：SAFE 最多最鸡肋 → HAZARD 最少最危险
const artifacts = [
    // ========== 🟩 SAFE 级（12 个）- 无害但鸡肋 ==========
    {
        id: "PA-001",
        name: "永动电视",
        class: "safe",
        location: "渊某二手市场",
        containment: "无需特殊收容，正常存放即可",
        description: "一台老式显像管电视，只有持续拍打侧面才能正常播放，且只能收到 3 个频道，其中 2 个是雪花屏。",
        effect: "拍打后可观看 15 分钟，停止拍打立即黑屏",
        image: "images/pa-001.jpg"
    },
    {
        id: "PA-002",
        name: "恒温水杯",
        class: "safe",
        location: "槐安公寓 302 室",
        containment: "无需特殊收容",
        description: "普通玻璃水杯，无论倒入什么温度的液体，都会变成温的——不冷不热，刚刚好让人失去喝它的欲望。",
        effect: "强制恒温 37℃，无法改变",
        image: "images/pa-002.jpg"
    },
    {
        id: "PA-003",
        name: "单向圆珠笔",
        class: "safe",
        location: "黎守档案室",
        containment: "无需特殊收容",
        description: "一支蓝色圆珠笔，只能写字不能擦除，但写出来的字只有倒着看才能辨认。",
        effect: "文字镜像显示，需反向阅读",
        image: "images/pa-003.jpg"
    },
    {
        id: "PA-004",
        name: "无限火柴",
        class: "safe",
        location: "猎人公会黑市",
        containment: "无需特殊收容",
        description: "一盒永远用不完的火柴，但每根只能燃烧 3 秒，且必须在无风环境下才能点燃。",
        effect: "无限数量，但燃烧时间极短",
        image: "images/pa-004.jpg"
    },
    {
        id: "PA-005",
        name: "回声哨子",
        class: "safe",
        location: "渊东共和国某学校",
        containment: "无需特殊收容",
        description: "一个银色哨子，吹响后会产生回声，但回声比原声晚 5 分钟才出现。",
        effect: "延迟 5 分钟产生回声",
        image: "images/pa-005.jpg"
    },
    {
        id: "PA-006",
        name: "自洁抹布",
        class: "safe",
        location: "茶居公寓厨房",
        containment: "无需特殊收容",
        description: "一块灰色抹布，可以自动清洁自身污渍，但清洁过程中会散发出强烈的鱼腥味。",
        effect: "自洁但产生异味",
        image: "images/pa-006.jpg"
    },
    {
        id: "PA-007",
        name: "平衡筷子",
        class: "safe",
        location: "鸟姐大排档",
        containment: "无需特殊收容",
        description: "一双竹筷，无论夹什么食物都不会掉落，但使用者会不由自主地发出咀嚼声。",
        effect: "防掉落但强制发声",
        image: "images/pa-007.jpg"
    },
    {
        id: "PA-008",
        name: "准时闹钟",
        class: "safe",
        location: "槐安公寓管理处",
        containment: "无需特殊收容",
        description: "一个电子闹钟，永远准时，但闹铃声音是播放使用者 5 分钟前说过的话。",
        effect: "录音回放式闹铃",
        image: "images/pa-008.jpg"
    },
    {
        id: "PA-009",
        name: "防潮饼干盒",
        class: "safe",
        location: "非常电影院小卖部",
        containment: "无需特殊收容",
        description: "一个铁皮饼干盒，内部永远保持干燥，但打开时会发出类似叹息的声音。",
        effect: "完美防潮但有怪声",
        image: "images/pa-009.jpg"
    },
    {
        id: "PA-010",
        name: "认路指南针",
        class: "safe",
        location: "渊某户外用品店",
        containment: "无需特殊收容",
        description: "一个指南针，永远指向北方，但指针会轻微颤抖，让人难以精确读数。",
        effect: "指向准确但难以读取",
        image: "images/pa-010.jpg"
    },
    {
        id: "PA-011",
        name: "保温饭盒",
        class: "safe",
        location: "黎守食堂",
        containment: "无需特殊收容",
        description: "一个不锈钢饭盒，保温效果极好，但打开后食物会排列成奇怪的表情图案。",
        effect: "超强保温但食物摆成表情",
        image: "images/pa-011.jpg"
    },
    {
        id: "PA-012",
        name: "静音拖鞋",
        class: "safe",
        location: "槐安公寓 606 室",
        containment: "无需特殊收容",
        description: "一双粉色拖鞋，走路完全无声，但每走 10 步会发出一次放屁声。",
        effect: "静音但间歇性尴尬发声",
        image: "images/pa-012.jpg"
    },
    
    // ========== 🟨 CAUTION 级（6 个）- 有一定危险性 ==========
    {
        id: "PA-013",
        name: "记忆相机",
        class: "caution",
        location: "绿洲研究所",
        containment: "需存放于屏蔽袋中，禁止对人拍摄",
        description: "一台老式拍立得，拍摄后照片会显示被摄物体 5 秒后的状态。拍摄人类时会短暂抽取其记忆。",
        effect: "预知 5 秒未来，拍摄人类会抽取记忆",
        image: "images/pa-013.jpg"
    },
    {
        id: "PA-014",
        name: "共感手套",
        class: "caution",
        location: "对伪课装备库",
        containment: "需成对存放，禁止同时佩戴两只",
        description: "一双黑色皮手套，佩戴后触摸物体会感受到该物体曾经历的情感。长时间佩戴会导致情感混乱。",
        effect: "读取物体情感残留，有精神污染风险",
        image: "images/pa-014.jpg"
    },
    {
        id: "PA-015",
        name: "回响录音机",
        class: "caution",
        location: "非常电影院档案室",
        containment: "存放于隔音箱，每周需播放一次空白磁带",
        description: "一台磁带录音机，录制的声音会在录制地点反复回响，持续 7 天。回响可能被其他存在听见。",
        effect: "声音实体化回响 7 天",
        image: "images/pa-015.jpg"
    },
    {
        id: "PA-016",
        name: "影线剪刀",
        class: "caution",
        location: "猎人公会武器库",
        containment: "刀刃需包裹黑布，禁止剪断活物影子",
        description: "一把银色剪刀，可以剪断物体的影子。被剪断影子的物体会在 24 小时内逐渐失去存在感。",
        effect: "剪断影子使目标存在感消失",
        image: "images/pa-016.jpg"
    },
    {
        id: "PA-017",
        name: "梦境笔记本",
        class: "caution",
        location: "灯塔图书馆",
        containment: "需锁入保险柜，禁止连续阅读超过 3 页",
        description: "一本空白笔记本，睡前放在枕边会记录当晚梦境。但阅读后可能将梦境内容带入现实。",
        effect: "记录梦境，阅读后可能混淆梦与现实",
        image: "images/pa-017.jpg"
    },
    {
        id: "PA-018",
        name: "时间沙漏",
        class: "caution",
        location: "渊某古董店",
        containment: "需水平放置，禁止翻转超过 3 次/日",
        description: "一个木制沙漏，翻转后周围 1 米内时间流速变为正常的 90%。过度使用会导致局部时间紊乱。",
        effect: "减缓 10% 时间流速，过度使用有风险",
        image: "images/pa-018.jpg"
    },
    
    // ========== 🟧 DANGER 级（3 个）- 高度危险 ==========
    {
        id: "PA-019",
        name: "噬忆怀表",
        class: "danger",
        location: "西陆联盟某废弃教堂",
        containment: "存放于铅衬容器，禁止在人群附近开启",
        description: "一块 19 世纪金色怀表，运行时会吸收周围人类的记忆。影响范围 50 米，已导致多起集体失忆事件。",
        effect: "吸收 50 米范围内人类记忆",
        image: "images/pa-019.jpg"
    },
    {
        id: "PA-020",
        name: "虚空之钥",
        class: "danger",
        location: "白墟之地核心区域",
        containment: "存放于反物质隔离舱，禁止任何形式的激活测试",
        description: "一把古代巴比伦风格的金属钥匙，可开启任何「门」，包括已关闭的里界入口。已导致 3 次里界泄露事件。",
        effect: "开启任意里界之门",
        image: "images/pa-020.jpg"
    },
    {
        id: "PA-021",
        name: "痛苦面具",
        class: "danger",
        location: "赤红新星某地下设施",
        containment: "必须存放于铅衬容器中，禁止任何人佩戴或直视",
        description: "一个人形面具，材质未知。佩戴者会永久失去所有痛觉和情感，成为绝对理性的存在。已有 12 名志愿者佩戴后失踪。",
        effect: "剥夺痛觉与情感，佩戴者失踪",
        image: "images/pa-021.jpg"
    },
    
    // ========== 🟥 HAZARD 级（1 个）- 灾难级 ==========
    {
        id: "PA-022",
        name: "终焉之匣",
        class: "hazard",
        location: "深度 3000 米地下掩体",
        containment: "永久封存，禁止开启，禁止任何形式的研究",
        description: "一个黑色金属立方体，表面没有任何接缝。根据破译的古代文献，该物品被描述为「世界的终点」。任何尝试开启的行为都可能导致现实结构崩溃。",
        effect: "未知，推测可终结现实",
        image: "images/pa-022.jpg"
    }
];
