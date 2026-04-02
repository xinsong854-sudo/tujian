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
