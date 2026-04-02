// Lore Data Objects - 伪人宇宙设定资料
// 导出到 window 对象供前端使用

window.LORE_ORGANIZATIONS = [
  {
    name: "黎守调查局",
    alias: "Dawn Guard",
    description: "名字意为'黎明前的守护'，人类一方执法部门，负责调查并收容里界和伪人",
    duties: "调查异常事件、收容登记伪人、收缴伪物、配合对伪课行动",
    features: "对伪人持中立态度，无危险性伪人可获得'公民'身份，职责是维护平衡而非消灭伪人",
    knownMembers: "白桦（对伪课副课长）",
    location: "总部设于渊，各地区设有分局"
  },
  {
    name: "对伪课",
    alias: "Anti-Pseudo Division",
    description: "黎守下属特别武装单位，配备重火力武器，镇压高危伪人",
    duties: "处理高危伪人事件、配合黎守行动、特殊武力镇压",
    features: "精英化编制、重火力装备、特殊武装单位",
    knownMembers: "白桦（副课长）",
    location: "分布于各大城市"
  },
  {
    name: "猎人公会",
    alias: "Hunter's Guild",
    description: "民间武装团体，以公会为基本形式，汇集民间人士处理伪人事件",
    duties: "接取民间委托、镇压高危伪人、处理门、寻猎伪物",
    features: "利益导向、使用伪物对抗伪人、处于灰色地带、民间复仇者聚集",
    knownMembers: "多位民间猎人",
    location: "据点遍布各地"
  },
  {
    name: "绿洲",
    alias: "OASIS",
    description: "致力于研究世界异象、开发里界的神秘学科研组织，以世界存续为目标",
    duties: "探索里界、保障伪人权益、让伪人与人类社会建立联系",
    features: "绝对中立、成员地位平等、实验室称'花园'、成员称'园丁'以花名代称",
    knownMembers: "亚契·谜思（炼金术师）、荆千棘（助手）",
    location: "总部位于西陆联盟、渊和赤星交界的沙漠绿洲中"
  },
  {
    name: "ABSC",
    alias: "Albert Interdimensional Survey Committee",
    description: "艾尔伯特里界调查委员会，专业情报搜集机构，分享里界资料",
    duties: "搜集调查整理里界资料、通过 IRASP 分享给其他组织",
    features: "总部位于 SAFE 级里界内、专业情报机构、创始人已故",
    knownMembers: "艾尔伯特·帕拉索（创始人，已故）、斯汀先生（职员）",
    location: "总部西陆联盟"
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
    description: "渊境内最大'哨站'，兼具伪人生活与委托处理的综合机构",
    duties: "提供伪人生活服务、交付人类特殊委托给伪人、放映里界影像",
    features: "哨站的一种、面向伪人和人类两界、信息交换灰色地带",
    knownMembers: "非常玦蝶（站长）、单先生（院长）、虫者（售票员/放映员）、长喙（说书人）",
    location: "渊境内，最大出入口公寓附近"
  },
  {
    name: "灯塔",
    alias: "The Lighthouse",
    description: "由公寓组建、各国承认的伪人教育组织，帮助伪人融入人类社会",
    duties: "教授伪人化形、控制能力、使用四肢等课程",
    features: "分六个年级（伪人/半伪人/半智人/智人/半人/人）、有定级考试、引导员运送学生",
    knownMembers: "桃金娘姐妹（校长）",
    location: "只在渊以及赤星设有校区"
  },
  {
    name: "茶居公寓",
    alias: "Tea Residence",
    description: "位于渊南部湾龙市的伪人聚落，二楼茶餐厅，一楼不住人，共 9 层",
    duties: "提供住宿、水电管理、魑魅管理、社会化教育",
    features: "传闻有 -9 楼无人层、表面管水电暗地管魑魅",
    knownMembers: "兔仙（楼长）",
    location: "渊南部湾龙市"
  }
];

window.LORE_REGIONS = [
  {
    name: "渊",
    alias: "The Abyss",
    description: "表界核心区域，伪人渗透最深的区域之一，里界最大出入口所在地",
    features: "科技发达、人口密集、异常事件频发但被官方管控掩盖、伪人现象复杂",
    knownLocations: "槐安公寓、黎守调查局总部、各大城市",
    notes: "表面平静的现代社会，暗流涌动，伪人聚落集中"
  },
  {
    name: "西陆联盟",
    alias: "Western Continent Alliance",
    description: "政教合一的联邦体制，教皇与议会共同执政，魔法与科技并存",
    features: "宗教西幻风格、魔导技术发达、对伪人采取信仰供奉态度、认证八位伪神",
    knownLocations: "教廷、西陆伪神教派、圣使教、梦之圣庭、静谧织命者、济世者",
    notes: "伪神信仰盛行，强大伪人被视作神明供奉"
  },
  {
    name: "赤红新星",
    alias: "Crimson New Star",
    description: "社会主义国家，强调集体主义与人民至上，计划经济与配给制度",
    features: "社会福利完善、对伪人采取研究 - 整合政策、设立伪人研究院、定义为特殊人类变体",
    knownLocations: "伪人研究院、配给站、集体社区",
    notes: "官方宣传将伪人纳入科学整合范畴"
  },
  {
    name: "渊东共和国",
    alias: "Abyss East Republic",
    description: "从渊分裂出来的军事独裁政权，群岛国家，以航运和轻工业见长",
    features: "全民兵役制（16 岁以上必须服役）、严格边境管控与身份核查、对伪人发动净化战争",
    knownLocations: "边境检查站、军事基地、渊合作项目区",
    notes: "军事戒严状态，怀疑者立即处决，与渊是合作伙伴关系"
  },
  {
    name: "表界/里界",
    alias: "Surface/Deep Realm",
    description: "表界是人类世界，里界是伪人与异常的领域，两界通过【门】连接",
    features: "表界正常物理法则，里界规则扭曲、时空异常，【门】出现在空间交界处（门窗、抽屉、显示屏等）",
    knownLocations: "表界：各大城市；里界：白墟之地、错位花园、疫病区等",
    notes: "重叠维度，通过【门】连接，非简单边界"
  },
  {
    name: "白墟之地",
    alias: "White Ruins",
    description: "里界特殊区域，因规则污染形成的持续扩张纯白地貌，古代巴比伦文明被规则反噬后的废墟",
    features: "HAZARD 级风险、每日扩张 1.7 米、规则事故现场、信息态结构复杂",
    knownLocations: "浮城、永寂之湖、巨龙坟墓、边境带",
    notes: "Cipher 是其勘测者与规则研究者，挖掘规则碎片与古代文明遗留"
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
    name: "非常玦蝶",
    alias: "二营长",
    description: "渊境内最大'哨站'站长，非常电影院站长，伪人论坛二营长，营长的得力助手，渊境内顶尖清劣者",
    role: "哨站站长/电影院站长/清劣者",
    features: "来自【若迷界】，营长的得力助手，管理非常电影院和哨站",
    knownAssociates: "营长（上级）、单先生、长喙",
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
    description: "'揭秘人'组织最后成员，论坛遗产如烛火般照亮人类",
    role: "揭秘人/信息提供者",
    features: "神秘、发布关键指导帖子后失踪",
    knownAssociates: "揭秘人组织（已解散）",
    status: "失踪"
  },
  {
    name: "绫份",
    alias: "Ling Fen",
    description: "代号'白夜叉'，17 岁格斗术大师，精通绫流体术",
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
  },
  {
    name: "西西",
    alias: "伪人西",
    description: "槐安公寓 504 室住户",
    role: "公寓住户",
    features: "关键词：恶魔修女",
    knownAssociates: "槐安公寓住户",
    status: "活跃"
  },
  {
    name: "卜焕汣",
    alias: "桃花不换酒",
    description: "槐安公寓 610 室住户，桃花堂堂主",
    role: "桃花堂堂主/公寓住户",
    features: "关键词：桃花堂堂主",
    knownAssociates: "槐安公寓住户",
    status: "活跃"
  },
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
