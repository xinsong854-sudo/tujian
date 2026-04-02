// Lore Data Objects - 伪人宇宙设定资料
// 导出到 window 对象供前端使用

window.LORE_ORGANIZATIONS = [
  {
    name: "黎守调查局",
    alias: "Dawn Guard Investigation Bureau",
    description: "官方异常事件调查机构，负责处理表界与里界之间的异常现象",
    duties: "调查异常事件、收容危险伪人、维护表界安全",
    features: "拥有官方授权、装备精良、行动隐秘",
    knownMembers: "安诺涅（前特工）、斯汀先生（顾问）",
    location: "总部设于渊，各地区设有分局"
  },
  {
    name: "对伪课",
    alias: "Anti-Pseudo Division",
    description: "专门针对伪人威胁的特种部门",
    duties: "伪人识别、清除高危伪人、保护关键人物",
    features: "精英化编制、拥有特殊检测装备、行动迅速",
    knownMembers: "营长（前指挥官）、灼玥",
    location: "分布于各大城市"
  },
  {
    name: "猎人公会",
    alias: "Hunter's Guild",
    description: "民间异常猎人组成的松散联盟",
    duties: "接受委托处理异常事件、猎杀危险伪人、情报交易",
    features: "成员鱼龙混杂、按任务等级分配、地下网络发达",
    knownMembers: "白桦",
    location: "据点遍布西陆联盟各地"
  },
  {
    name: "绿洲",
    alias: "Oasis",
    description: "伪人与人类共存的庇护所组织",
    duties: "保护温和伪人、促进种族和解、提供庇护",
    features: "理念和平主义、隐蔽性强、内部等级森严",
    knownMembers: "绫份（协调者）",
    location: "位置保密，多处秘密据点"
  },
  {
    name: "ABSC",
    alias: "Anomalous Being Surveillance Committee",
    description: "异常生物监控委员会，国际联合组织",
    duties: "全球异常现象监控、制定国际标准、协调各国行动",
    features: "跨国组织、资源雄厚、政治影响力大",
    knownMembers: "艾尔伯特·帕拉索（委员长）",
    location: "总部西陆联盟，全球设有监测站"
  },
  {
    name: "槐安公寓",
    alias: "Huai'an Apartments",
    description: "表面是普通公寓，实为异常事件频发地",
    duties: "无正式职责，是各类事件的交汇点",
    features: "住户身份神秘、空间结构异常、传闻有里界入口",
    knownMembers: "多位神秘住户",
    location: "渊东共和国某城市"
  },
  {
    name: "非常电影院",
    alias: "Extraordinary Cinema",
    description: "能够放映里界影像的神秘场所",
    duties: "无正式职责，是信息交换的灰色地带",
    features: "放映内容预示未来、观众身份成谜、时间流速异常",
    knownMembers: "单先生（院长）、长喙（售票员/放映员）",
    location: "位置不固定，随缘出现"
  },
  {
    name: "灯塔",
    alias: "The Lighthouse",
    description: "引导迷失者返回表界的神秘组织",
    duties: "救助被困里界者、维护表里边界、传递重要信息",
    features: "成员行踪神秘、拥有特殊导航技术、中立立场",
    knownMembers: "烛灯（引路人）",
    location: "表里边界处"
  },
  {
    name: "茶居公寓",
    alias: "Tea Residence",
    description: "以茶会为名的情报交流场所",
    duties: "情报收集与交易、各方势力中立会谈地",
    features: "表面是茶馆、实则情报中枢、规矩森严",
    knownMembers: "安布罗斯（店主）",
    location: "表里边界附近"
  }
];

window.LORE_REGIONS = [
  {
    name: "渊",
    alias: "The Abyss",
    description: "表界核心区域，人类文明的主要聚集地",
    features: "科技发达、人口密集、异常事件相对较少",
    knownLocations: "黎守调查局总部、各大城市、商业中心",
    notes: "表面平静的现代社会，暗流涌动"
  },
  {
    name: "西陆联盟",
    alias: "Western Continent Alliance",
    description: "由多个国家组成的政治联盟",
    features: "政治稳定、军事强大、ABSC 总部所在地",
    knownLocations: "联盟议会、军事基地、监测站",
    notes: "表界最强大的政治实体"
  },
  {
    name: "赤红新星",
    alias: "Crimson New Star",
    description: "激进组织控制的区域，主张伪人优先",
    features: "排外、军事化、伪人激进派聚集地",
    knownLocations: "训练营、指挥部、秘密实验室",
    notes: "与主流社会对立，被视为威胁"
  },
  {
    name: "渊东共和国",
    alias: "Abyss East Republic",
    description: "渊东部的独立国家，表里混合区域",
    features: "文化多元、异常事件频发、管理松散",
    knownLocations: "槐安公寓、边境检查站、黑市",
    notes: "表里两界的灰色地带"
  },
  {
    name: "表界/里界",
    alias: "Surface/Deep Realm",
    description: "表界是人类世界，里界是伪人与异常的领域",
    features: "表界正常物理法则，里界规则扭曲、时空异常",
    knownLocations: "表界：各大城市；里界：未知领域、边界模糊",
    notes: "两界之间存在边界，偶有交汇点"
  }
];

window.LORE_CHARACTERS = [
  {
    name: "营长",
    alias: "Captain/安诺涅/楼长",
    description: "伪人论坛《伪人大本营》管理者，槐安公寓楼长，负责督察进入现实的伪人适应情况，兼职清劣者",
    role: "论坛管理者/公寓楼长/清劣者",
    features: "真名不详，官方成员，管理最大出入口公寓",
    knownAssociates: "非常玦蝶（助手/二营长）、斯汀先生、灼玥",
    status: "活跃"
  },
  {
    name: "单先生",
    alias: "Mr. Shan",
    description: "非常电影院院长，算命先生，闲云野鹤不与世争，为还二营长因果帮忙经营电影院",
    role: "电影院院长/算命先生",
    features: "性别未知，姓名未知，世人只知姓单",
    knownAssociates: "非常玦蝶（二营长）、长喙（雇员）",
    status: "活跃"
  },
  {
    name: "烛灯",
    alias: "Candle",
    description: "「揭秘人」组织最后成员，论坛遗产如烛火般照亮人类",
    role: "揭秘人/信息提供者",
    features: "神秘、发布关键指导帖子后失踪",
    knownAssociates: "揭秘人组织（已解散）",
    status: "失踪"
  },
  {
    name: "绫份",
    alias: "Ling Fen",
    description: "代号「白夜叉」，17 岁格斗术大师，精通绫流体术",
    role: "物理清除专家/格斗大师",
    features: "豪放直接，战斗狂倾向，异常抗性极高",
    knownAssociates: "槐安公寓",
    status: "活跃"
  },
  {
    name: "白桦",
    alias: "Birch",
    description: "对伪课副课长，实力强悍，总是一副睡不醒的样子",
    role: "对伪课副课长",
    features: "速战速决，经常摸鱼睡觉，用重型长柄锤",
    knownAssociates: "黎守、对伪课",
    status: "活跃"
  },
  {
    name: "灼玥",
    alias: "Zhuo Yue",
    description: "原方舟科研组小组长，辞职后成为独立调查员",
    role: "独立调查员",
    features: "27 岁金发金瞳男，有勇有谋，使用反叛长剑和静心外衣",
    knownAssociates: "方舟科研组（前）",
    status: "活跃"
  },
  {
    name: "斯汀先生",
    alias: "Mr. Sting",
    description: "ABSC 人类职员，与伪人接触最多，年龄超常，男姓女身",
    role: "ABSC 职员/联络人",
    features: "姓氏保密，身体为女性",
    knownAssociates: "ABSC、伪人们",
    status: "活跃"
  },
  {
    name: "艾尔伯特·帕拉索",
    alias: "Albert Paraso",
    description: "ABSC 创始人，伟大人类先驱，已故，现为灵体旅者",
    role: "创始人/先驱（已故）",
    features: "温柔善良，发明普罗米修斯提灯，25 岁牺牲",
    knownAssociates: "AT（奇迹伪神，女儿般看待）、福音",
    status: "已故（灵体状态）"
  },
  {
    name: "安布罗斯",
    alias: "Ambrose/Αθάνατο",
    description: "西陆'神裔'，伪神，中世纪时期已有目击记录，被视作神明/天使般的存在",
    role: "伪神/神裔",
    features: "古老存在，与希庇安一同出现，被西陆联盟视为神明",
    knownAssociates: "希庇安（信徒）、福音",
    status: "活跃"
  },
  {
    name: "化而为",
    alias: "Hua Er Wei",
    description: "蓝白色史莱姆状生命，可变形为白发红瞳少女",
    role: "槐安公寓居民",
    features: "蓝白色史莱姆形态，可变形为少女，白发红瞳",
    knownAssociates: "槐安公寓",
    status: "活跃"
  },
  {
    name: "西瓜人",
    alias: "Watermelon Man",
    description: "4580 岁古老存在，执念成为人类，赠予西瓜汁",
    role: "槐安公寓居民",
    features: "西瓜外形，4580 岁，渴望成为人类",
    knownAssociates: "槐安公寓",
    status: "活跃"
  },
  {
    name: "X",
    alias: "生骸·X/093",
    description: "神秘小孩，危险等级 DANGER",
    role: "槐安公寓居民",
    features: "小孩外表，身份神秘，极度危险",
    knownAssociates: "未知",
    status: "收容"
  },
  {
    name: "亚契·谜思",
    alias: "Archi Myst",
    description: "非人形存在，黄铜零件与植物复合物，危险等级 CAUTION",
    role: "槐安公寓居民",
    features: "黄铜零件与植物构成的复合体，非人形",
    knownAssociates: "咔哒小姐、赫卡忒（创造）",
    status: "活跃"
  },
  {
    name: "咔哒小姐",
    alias: "Miss Click",
    description: "与亚契·谜思相关的神秘存在",
    role: "槐安公寓居民",
    features: "与亚契·谜思关联，身份神秘",
    knownAssociates: "亚契·谜思",
    status: "活跃"
  },
  {
    name: "赫卡忒",
    alias: "Hecate",
    description: "亚契创造的仿生人，炭黑色皮肤，蓝色水晶头发",
    role: "槐安公寓居民",
    features: "炭黑色皮肤，蓝色水晶状头发，仿生人",
    knownAssociates: "亚契·谜思（创造者）",
    status: "活跃"
  },
  {
    name: "特洛菲&洛洛",
    alias: "Trophy & Lolo",
    description: "人监之口，异种，食量惊人",
    role: "槐安公寓居民",
    features: "异种组合，食量异常巨大",
    knownAssociates: "槐安公寓",
    status: "活跃"
  },
  {
    name: "医生",
    alias: "瘟疫病主",
    description: "来历不明，瘟疫医生形象，古老伪人",
    role: "槐安公寓居民",
    features: "瘟疫医生装扮，来历神秘，古老存在",
    knownAssociates: "未知",
    status: "活跃"
  },
  {
    name: "多虫",
    alias: "Multi-Worm",
    description: "种群档案，诞生于里界'巢穴'，敌对",
    role: "敌对种群",
    features: "群体意识，诞生于里界巢穴",
    knownAssociates: "里界巢穴",
    status: "敌对"
  },
  {
    name: "人魈",
    alias: "Human Demon",
    description: "种群档案，诞生于里界'怪原'，敌对",
    role: "敌对种群",
    features: "诞生于里界怪原，敌对倾向",
    knownAssociates: "里界怪原",
    status: "敌对"
  },
  {
    name: "凝胶",
    alias: "Gel",
    description: "种群档案，诞生于里界'随心'，凝胶状球型生物",
    role: "里界原生种群",
    features: "凝胶状球型，形态可变，诞生于随心",
    knownAssociates: "里界随心区域",
    status: "活跃"
  },
  {
    name: "汐&涟",
    alias: "Xi & Lian",
    description: "鲛人，出没于渊附近海域，歌声特殊",
    role: "鲛人种群",
    features: "双人组合，歌声具有特殊能力，出没于海域",
    knownAssociates: "渊附近海域",
    status: "活跃"
  },
  {
    name: "渔夫",
    alias: "圣地亚哥·梅尔维尔/Santiago Melville",
    description: "利维坦，2.2 米渔夫形象，穿雨衣",
    role: "利维坦",
    features: "身高 2.2 米，渔夫装扮，常穿雨衣",
    knownAssociates: "海域、渔场",
    status: "活跃"
  },
  {
    name: "拟人蝎",
    alias: "Anthro-Scorpion",
    description: "里界'巢穴'来源，仅雌性，独居",
    role: "里界原生种群",
    features: "仅雌性个体，独居习性，来自巢穴",
    knownAssociates: "里界巢穴",
    status: "活跃"
  },
  {
    name: "深破",
    alias: "我深深的破碎/My Deep Broken",
    description: "由无数方块构成的女孩，SAFE 级",
    role: "异常个体",
    features: "身体由无数方块构成，SAFE 级异常",
    knownAssociates: "未知",
    status: "活跃"
  },
  {
    name: "希庇安",
    alias: "Ιππότης/Hippotes",
    description: "神裔，与安布罗斯一同出现",
    role: "神裔/信徒",
    features: "希腊语名意为'骑士'，与安布罗斯共同行动",
    knownAssociates: "安布罗斯（主神）",
    status: "活跃"
  },
  {
    name: "无名卿",
    alias: "Nameless One",
    description: "外来者，沉默寡言，声音清冷",
    role: "外来者",
    features: "沉默寡言，声音清冷，身份神秘",
    knownAssociates: "未知",
    status: "活跃"
  },
  {
    name: "伊露",
    alias: "Yilu",
    description: "无感情，制作表情面具",
    role: "面具制作者",
    features: "无感情表达，擅长制作表情面具",
    knownAssociates: "未知",
    status: "活跃"
  },
  {
    name: "春山抚子",
    alias: "伪抚/False Nadeshiko",
    description: "美短虎斑猫本体，天风阁，模仿人类",
    role: "伪人/模仿者",
    features: "本体为美短虎斑猫，居于天风阁，模仿人类行为",
    knownAssociates: "天风阁",
    status: "活跃"
  },
  {
    name: "小赤帽",
    alias: "Little Red Cap",
    description: "狼影赤帽，槐安公寓 609，负责卫生清洁",
    role: "公寓住户/清洁工",
    features: "狼影赤帽身份，居住于槐安公寓 609，负责清洁",
    knownAssociates: "槐安公寓",
    status: "活跃"
  },
  {
    name: "虫者",
    alias: "林虫/翡影",
    description: "非常电影院售票员/放映员，喜欢看电影的虫子",
    role: "售票员/放映员",
    features: "虫子形态，热爱电影",
    knownAssociates: "非常电影院、单先生、长喙",
    status: "活跃"
  },
  {
    name: "笑颜",
    alias: "嬉皮笑脸人偶",
    description: "槐安公寓 909 住户，嬉皮笑脸的人偶",
    role: "公寓住户",
    features: "人偶形态，总是嬉皮笑脸",
    knownAssociates: "槐安公寓",
    status: "活跃"
  },
  {
    name: "陆玖",
    alias: "多面孔",
    description: "5003 室住户，拥有多面孔多性格",
    role: "公寓住户",
    features: "多面孔多性格，身份复杂",
    knownAssociates: "槐安公寓 5003 室",
    status: "活跃"
  },
  {
    name: "长喙",
    alias: "瀚羽",
    description: "鹰伪人，说书人，追随非常玦蝶",
    role: "说书人",
    features: "鹰形态伪人，说书技艺高超",
    knownAssociates: "非常玦蝶、非常电影院",
    status: "活跃"
  },
  {
    name: "AT",
    alias: "Albert Palazzo/奇迹伪神",
    description: "奇迹伪神，西廷圣使教成员，蛇尾",
    role: "伪神/圣使",
    features: "蛇尾，拥有奇迹之力",
    knownAssociates: "西廷圣使教、艾尔伯特·帕拉索（视为女儿）",
    status: "活跃"
  },
  {
    name: "墨水夜",
    alias: "水做的存在",
    description: "槐安公寓水池中的存在，水做的，食物是史莱姆",
    role: "公寓住户",
    features: "水体形态，以史莱姆为食",
    knownAssociates: "槐安公寓水池",
    status: "活跃"
  },
  {
    name: "冷寂",
    alias: "上古存在",
    description: "上古存在，呆傻，实力未知",
    role: "上古存在",
    features: "呆傻外表，实力深不可测",
    knownAssociates: "未知",
    status: "活跃"
  },
  {
    name: "石测",
    alias: "渊成员",
    description: "渊成员，喜欢吃石头，吓唬小孩",
    role: "渊成员",
    features: "嗜石，喜欢吓唬小孩",
    knownAssociates: "渊",
    status: "活跃"
  },
  {
    name: "大夜夜",
    alias: "夜幕高定主人",
    description: "阴暗邪恶，夜幕高定主人，做高定服装",
    role: "服装设计师",
    features: "阴暗邪恶，高定服装大师",
    knownAssociates: "夜幕高定",
    status: "活跃"
  },
  {
    name: "伽纳罗丝",
    alias: "神秘生物",
    description: "神秘生物，猩红色血液，可吸收血液强化",
    role: "神秘生物",
    features: "猩红血液，吸收血液强化自身",
    knownAssociates: "未知",
    status: "活跃"
  },
  {
    name: "福音",
    alias: "Evangelium/西陆伪神",
    description: "西陆伪神，女性，带来幸福",
    role: "伪神",
    features: "女性，带来幸福的存在",
    knownAssociates: "西陆、安布罗斯、艾尔伯特·帕拉索",
    status: "活跃"
  },
  {
    name: "涂改",
    alias: "Tipp-Ex/完美主义者",
    description: "槐安公寓 209 住户，完美主义者，消除错误字迹",
    role: "公寓住户",
    features: "完美主义，能消除错误字迹",
    knownAssociates: "槐安公寓 209 室",
    status: "活跃"
  },
  {
    name: "阿秋",
    alias: "人监",
    description: "12 岁，人监，渴望被认可",
    role: "人监",
    features: "12 岁，渴望被认可",
    knownAssociates: "未知",
    status: "活跃"
  },
  {
    name: "鸿",
    alias: "编辑/记者",
    description: "114514 岁，编辑/记者，热情洋溢",
    role: "编辑/记者",
    features: "114514 岁，热情洋溢",
    knownAssociates: "媒体界",
    status: "活跃"
  },
  {
    name: "梦城寺绫希",
    alias: "无性存在",
    description: "无性，不属于这个世界的气息",
    role: "神秘存在",
    features: "无性，异世界气息",
    knownAssociates: "未知",
    status: "活跃"
  },
  {
    name: "云蓝",
    alias: "大雪纷飞的女孩",
    description: "大雪纷飞的女孩，手偶",
    role: "神秘存在",
    features: "与雪相关，手偶形态",
    knownAssociates: "未知",
    status: "活跃"
  },
  {
    name: "约斯米特",
    alias: "傀儡师",
    description: "制作傀儡，窥探学习世间",
    role: "傀儡师",
    features: "制作傀儡，窥探学习",
    knownAssociates: "未知",
    status: "活跃"
  },
  {
    name: "瓦莉奥尔·阿亚奇",
    alias: "神秘存在",
    description: "来历不明，158cm/316cm",
    role: "神秘存在",
    features: "身高可变 158cm/316cm，来历不明",
    knownAssociates: "未知",
    status: "活跃"
  },
  {
    name: "折纸簌鸟",
    alias: "鸟姐",
    description: "鸟姐大排档老板，鸟很好吃",
    role: "大排档老板",
    features: "经营大排档，鸟很好吃",
    knownAssociates: "鸟姐大排档",
    status: "活跃"
  },
  {
    name: "红缇香",
    alias: "清末祝家独女",
    description: "清末祝家独女，阴月阴日生，孤鸾入命",
    role: "祝家独女",
    features: "阴月阴日生，孤鸾入命",
    knownAssociates: "祝家",
    status: "活跃"
  },
  {
    name: "牺牲",
    alias: "人间名牺牲/古祭之牺",
    description: "人间名牺牲，古祭之牺，三牲之血",
    role: "祭祀之牺",
    features: "古祭之牺，三牲之血",
    knownAssociates: "未知",
    status: "活跃"
  },
  {
    name: "兔仙",
    alias: "茶居公寓楼长",
    description: "茶居公寓楼长，表面管水电，暗地管魑魅",
    role: "公寓楼长",
    features: "表面管水电，暗地管魑魅",
    knownAssociates: "茶居公寓",
    status: "活跃"
  },
  {
    name: "Эдельвейс",
    alias: "绝密档案",
    description: "绝密档案，国家应急管理部",
    role: "国家应急管理部",
    features: "绝密档案级别",
    knownAssociates: "国家应急管理部",
    status: "活跃"
  },
  {
    name: "Cipher",
    alias: "白墟之地勘测者",
    description: "白墟之地勘测者，规则研究者",
    role: "勘测者/研究者",
    features: "勘测白墟之地，研究规则",
    knownAssociates: "白墟之地",
    status: "活跃"
  },
  {
    name: "松下·拉尔",
    alias: "猫娘",
    description: "槐安公寓住户，女，143cm，猫娘",
    role: "公寓住户",
    features: "女性，143cm，猫娘",
    knownAssociates: "槐安公寓",
    status: "活跃"
  },
  {
    name: "江安",
    alias: "治愈者",
    description: "治愈/封闭情感",
    role: "治愈者",
    features: "治愈能力，封闭情感",
    knownAssociates: "未知",
    status: "活跃"
  },
  {
    name: "C.",
    alias: "书面化说话者",
    description: "槐安公寓 229 住户，说话书面化",
    role: "公寓住户",
    features: "说话书面化",
    knownAssociates: "槐安公寓 229 室",
    status: "活跃"
  }
];

// 辅助函数：按名称查找
window.findOrganization = function(name) {
  return window.LORE_ORGANIZATIONS.find(org => org.name === name || org.alias === name);
};

window.findRegion = function(name) {
  return window.LORE_REGIONS.find(region => region.name === name || region.alias === name);
};

window.findCharacter = function(name) {
  return window.LORE_CHARACTERS.find(char => char.name === name || char.alias === name);
};

// 导出统计信息
window.LORE_STATS = {
  organizations: window.LORE_ORGANIZATIONS.length,
  regions: window.LORE_REGIONS.length,
  characters: window.LORE_CHARACTERS.length,
  lastUpdated: new Date().toISOString()
};
