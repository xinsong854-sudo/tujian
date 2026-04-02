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
    knownMembers: "单先生（资深猎人）、白桦",
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
    knownMembers: "神秘放映员",
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
    name: "安诺涅",
    alias: "Anon",
    description: "前黎守调查局特工，现独立行动",
    role: "主角/调查者",
    features: "冷静理性、战斗力强、身世成谜",
    knownAssociates: "斯汀先生（导师）、营长（旧识）",
    status: "活跃"
  },
  {
    name: "营长",
    alias: "Captain",
    description: "前对伪课指挥官，现隐居",
    role: "导师/情报提供者",
    features: "经验丰富、人脉广泛、行事谨慎",
    knownAssociates: "安诺涅（后辈）、灼玥（前下属）",
    status: "半退休"
  },
  {
    name: "单先生",
    alias: "Mr. Shan",
    description: "资深猎人公会成员",
    role: "猎人/情报商",
    features: "老练、消息灵通、收费合理",
    knownAssociates: "白桦（搭档）、多位公会成员",
    status: "活跃"
  },
  {
    name: "烛灯",
    alias: "Candle",
    description: "灯塔组织的引路人",
    role: "引导者",
    features: "神秘、能够穿梭表里、拥有特殊能力",
    knownAssociates: "灯塔成员、多位被救助者",
    status: "活跃"
  },
  {
    name: "绫份",
    alias: "Ling Fen",
    description: "绿洲组织的协调者",
    role: "和平主义者/调解人",
    features: "温和、善于沟通、伪人同情者",
    knownAssociates: "绿洲成员、温和伪人",
    status: "活跃"
  },
  {
    name: "白桦",
    alias: "Birch",
    description: "猎人公会精英成员",
    role: "猎人/战士",
    features: "身手敏捷、性格直爽、重情义",
    knownAssociates: "单先生（搭档）、公会成员",
    status: "活跃"
  },
  {
    name: "灼玥",
    alias: "Zhuo Yue",
    description: "前对伪课精英，现独立猎人",
    role: "战士/自由代理人",
    features: "战斗能力强、性格火爆、有自己的原则",
    knownAssociates: "营长（前上司）、猎人公会",
    status: "活跃"
  },
  {
    name: "斯汀先生",
    alias: "Mr. Sting",
    description: "黎守调查局顾问，神秘人物",
    role: "顾问/情报分析",
    features: "知识渊博、深不可测、背景神秘",
    knownAssociates: "安诺涅（学生）、调查局高层",
    status: "活跃"
  },
  {
    name: "艾尔伯特·帕拉索",
    alias: "Albert Paraso",
    description: "ABSC 委员长，国际权威人物",
    role: "决策者/政治人物",
    features: "政治手腕强、影响力大、立场复杂",
    knownAssociates: "ABSC 成员、各国政要",
    status: "活跃"
  },
  {
    name: "安布罗斯",
    alias: "Ambrose",
    description: "茶居公寓店主，情报中间人",
    role: "情报商/中立者",
    features: "八面玲珑、消息灵通、守口如瓶",
    knownAssociates: "各方势力、情报贩子",
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
