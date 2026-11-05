const pages = {
  version: "游戏盒版本",
  update: "游戏盒版本更新内容",
  plugin: "游戏盒插件",
};

const MOCK_PARSED = {
  major: "V9.7",
  name: "9.7.0.30",
  code: "2401",
};

const CURRENT_PUBLISHER = "张三";

const POST_TEMPLATE_TYPE = "帖子模版";
const GAME_COMMENT_TYPE = "游戏评论模版";

const PLUGIN_TYPES = [
  "云游戏插件",
  "小游戏插件",
  "flash小游戏插件",
  "新充值插件",
  "旧充值插件",
  "趣核插件",
  "盒子助手插件",
  "帖子模版",
  "游戏评论模版",
];

const versionRecords = [
  {
    id: 1,
    major: "V9.7",
    name: "9.7.0.30",
    code: "2401",
    date: "2026-10-20",
    publisher: "张三",
    channel: "a4399",
    link: "https://dlstest.img4399.com/redirect/ftp/client/appftp/9.7/tinker/9.7.0.30/release_pub/4399Game_9.7.0.30.2401.apk",
    note: "修复启动闪退，优化首页加载",
  },
  {
    id: 2,
    major: "V9.6",
    name: "9.6.1.12",
    code: "2388",
    date: "2026-09-28",
    publisher: "李四",
    channel: "gongce4399",
    link: "https://dlstest.img4399.com/redirect/ftp/client/appftp/9.6/tinker/9.6.1.12/release_pub/4399Game_9.6.1.12.2388.apk",
    note: "灰度验证登录改版",
  },
  {
    id: 3,
    major: "V9.6",
    name: "9.6.0.8",
    code: "2360",
    date: "2026-09-12",
    publisher: "王五",
    channel: "youxi4399",
    link: "https://dlstest.img4399.com/redirect/ftp/client/appftp/9.6/tinker/9.6.0.8/release_pub/4399Game_9.6.0.8.2360.apk",
    note: "内测包，新增消息中心",
  },
  {
    id: 4,
    major: "V9.5",
    name: "9.5.2.4",
    code: "2291",
    date: "2026-08-18",
    publisher: "张三",
    channel: "a4399",
    link: "https://dlstest.img4399.com/redirect/ftp/client/appftp/9.5/tinker/9.5.2.4/release_pub/4399Game_9.5.2.4.2291.apk",
    note: "修复支付结果页展示异常",
  },
];
const pluginRecords = [
  {
    id: 1,
    type: "新充值插件",
    version: "3.2.0",
    clientVersion: "V9.7",
    date: "2026-10-22",
    publisher: "张三",
    note: "接入新支付渠道",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/recharge/new/3.2.0/release_pub/recharge_new_3.2.0.zip",
  },
  {
    id: 2,
    type: "盒子助手插件",
    version: "1.8.5",
    clientVersion: "V9.7",
    date: "2026-10-15",
    publisher: "李四",
    note: "助手支持一键清理缓存",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/box-assistant/1.8.5/release_pub/box_assistant_1.8.5.zip",
  },
  {
    id: 3,
    type: "小游戏插件",
    version: "2.4.1",
    clientVersion: "V9.7",
    date: "2026-10-08",
    publisher: "王五",
    note: "更新小游戏入口和加载页",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/minigame/2.4.1/release_pub/minigame_2.4.1.zip",
  },
  {
    id: 4,
    type: "趣核插件",
    version: "1.3.0",
    clientVersion: "V9.6",
    date: "2026-09-26",
    publisher: "张三",
    note: "趣核推荐位样式调整",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/quhe/1.3.0/release_pub/quhe_1.3.0.zip",
  },
  {
    id: 5,
    type: "flash小游戏插件",
    version: "4.0.2",
    clientVersion: "V9.6",
    date: "2026-09-10",
    publisher: "李四",
    note: "兼容新的 Flash 运行环境",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/flash-minigame/4.0.2/release_pub/flash_minigame_4.0.2.zip",
  },
  {
    id: 6,
    type: "旧充值插件",
    version: "2.9.7",
    clientVersion: "V9.5",
    date: "2026-08-21",
    publisher: "王五",
    note: "修复旧充值订单查询失败",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/recharge/old/2.9.7/release_pub/recharge_old_2.9.7.zip",
  },
  {
    id: 7,
    type: "小游戏插件",
    version: "2.3.6",
    clientVersion: "V9.6",
    date: "2026-09-18",
    publisher: "张三",
    note: "修复小游戏闪退",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/minigame/2.3.6/release_pub/minigame_2.3.6.zip",
  },
  {
    id: 8,
    type: "小游戏插件",
    version: "2.2.0",
    clientVersion: "V9.5",
    date: "2026-08-05",
    publisher: "李四",
    note: "上线新的小游戏分类",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/minigame/2.2.0/release_pub/minigame_2.2.0.zip",
  },
  {
    id: 9,
    type: "flash小游戏插件",
    version: "3.9.1",
    clientVersion: "V9.5",
    date: "2026-08-12",
    publisher: "王五",
    note: "修复部分机型无法加载",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/flash-minigame/3.9.1/release_pub/flash_minigame_3.9.1.zip",
  },
  {
    id: 10,
    type: "flash小游戏插件",
    version: "3.8.0",
    clientVersion: "V9.5",
    date: "2026-07-20",
    publisher: "张三",
    note: "更新 Flash 播放器内核",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/flash-minigame/3.8.0/release_pub/flash_minigame_3.8.0.zip",
  },
  {
    id: 11,
    type: "趣核插件",
    version: "1.2.4",
    clientVersion: "V9.6",
    date: "2026-08-30",
    publisher: "李四",
    note: "修复推荐位点击无响应",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/quhe/1.2.4/release_pub/quhe_1.2.4.zip",
  },
  {
    id: 12,
    type: "趣核插件",
    version: "1.1.0",
    clientVersion: "V9.5",
    date: "2026-07-16",
    publisher: "王五",
    note: "趣核首页改版",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/quhe/1.1.0/release_pub/quhe_1.1.0.zip",
  },
  {
    id: 13,
    type: "旧充值插件",
    version: "2.9.1",
    clientVersion: "V9.5",
    date: "2026-07-28",
    publisher: "张三",
    note: "兼容旧版订单回调",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/recharge/old/2.9.1/release_pub/recharge_old_2.9.1.zip",
  },
  {
    id: 14,
    type: "旧充值插件",
    version: "2.8.0",
    clientVersion: "V9.5",
    date: "2026-06-19",
    publisher: "李四",
    note: "下线已停用的支付方式",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/recharge/old/2.8.0/release_pub/recharge_old_2.8.0.zip",
  },
  {
    id: 15,
    type: "新充值插件",
    version: "3.1.2",
    clientVersion: "V9.6",
    date: "2026-09-30",
    publisher: "李四",
    note: "修复优惠券抵扣金额错误",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/recharge/new/3.1.2/release_pub/recharge_new_3.1.2.zip",
  },
  {
    id: 16,
    type: "新充值插件",
    version: "3.0.0",
    clientVersion: "V9.5",
    date: "2026-08-14",
    publisher: "王五",
    note: "新充值插件首个正式版",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/recharge/new/3.0.0/release_pub/recharge_new_3.0.0.zip",
  },
  {
    id: 17,
    type: "盒子助手插件",
    version: "1.7.3",
    clientVersion: "V9.6",
    date: "2026-09-02",
    publisher: "王五",
    note: "修复助手悬浮窗遮挡",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/box-assistant/1.7.3/release_pub/box_assistant_1.7.3.zip",
  },
  {
    id: 18,
    type: "盒子助手插件",
    version: "1.6.0",
    clientVersion: "V9.5",
    date: "2026-07-25",
    publisher: "张三",
    note: "助手增加游戏加速入口",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/box-assistant/1.6.0/release_pub/box_assistant_1.6.0.zip",
  },
  {
    id: 19,
    type: "云游戏插件",
    version: "1.4.0",
    clientVersion: "V9.7",
    date: "2026-10-18",
    publisher: "张三",
    note: "支持 9.7 客户端云游戏排队",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/cloud-game/1.4.0/release_pub/cloud_game_1.4.0.zip",
  },
  {
    id: 20,
    type: "云游戏插件",
    version: "1.3.2",
    clientVersion: "V9.6",
    date: "2026-09-08",
    publisher: "李四",
    note: "修复云游戏断线重连",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/cloud-game/1.3.2/release_pub/cloud_game_1.3.2.zip",
  },
  {
    id: 21,
    type: "云游戏插件",
    version: "1.2.0",
    clientVersion: "V9.5",
    date: "2026-08-01",
    publisher: "王五",
    note: "云游戏插件首个可用版本",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/cloud-game/1.2.0/release_pub/cloud_game_1.2.0.zip",
  },
  {
    id: 22,
    type: "帖子模版",
    version: "2.1.0",
    clientVersion: "V9.7",
    date: "2026-10-16",
    publisher: "张三",
    note: "活动帖模版支持新的封面样式",
    link: "https://bbs.4399.cn/thread-2.1.0.htm",
  },
  {
    id: 23,
    type: "帖子模版",
    version: "2.0.3",
    clientVersion: "V9.6",
    date: "2026-09-12",
    publisher: "李四",
    note: "修复帖子模版图片错位",
    link: "https://bbs.4399.cn/thread-2.0.3.htm",
  },
  {
    id: 24,
    type: "帖子模版",
    version: "1.9.0",
    clientVersion: "V9.5",
    date: "2026-08-03",
    publisher: "王五",
    note: "上线帖子模版基础样式",
    link: "https://bbs.4399.cn/thread-1.9.0.htm",
  },
  {
    id: 25,
    type: "游戏评论模版",
    version: "1.6.0",
    clientVersion: "V9.7",
    date: "2026-10-19",
    publisher: "张三",
    note: "评论模版支持新的评分样式",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/game-comment/1.6.0/release_pub/comment_template_1.6.0.zip",
  },
  {
    id: 26,
    type: "游戏评论模版",
    version: "1.5.2",
    clientVersion: "V9.6",
    date: "2026-09-20",
    publisher: "李四",
    note: "修复评论模版换行异常",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/game-comment/1.5.2/release_pub/comment_template_1.5.2.zip",
  },
  {
    id: 27,
    type: "游戏评论模版",
    version: "1.4.0",
    clientVersion: "V9.5",
    date: "2026-08-08",
    publisher: "王五",
    note: "上线游戏评论基础模版",
    link: "https://dlstest.img4399.com/redirect/ftp/client/plugin/game-comment/1.4.0/release_pub/comment_template_1.4.0.zip",
  },
];
let nextRecordId = 5;
let nextPluginId = 28;
let editingId = null;
let editingPluginId = null;
let pendingDeleteId = null;
let pendingDeleteTarget = null;
let currentPage = "version";
let nextBetaId = 5;
let nextInternalId = 3;
let betaMode = "create";
let editingBetaId = null;
let editingInternalId = null;
let editingInternalRow = null;
let editingUpdateId = null;
let nextUpdateId = 3;

const updateContents = [
  {
    id: 1,
    major: "V9.7",
    createdAt: "2026-10-20 10:00",
    updatedAt: "2026-10-23 18:26",
    mode: "online",
    items: [
      { text: "首页入口更懂你啦！常用功能优先展示，使用更方便~", image: "", preview: "" },
      { text: "等级体系全新改版！新增评论背景特效、彩色昵称等专属特权", image: "", preview: "" },
    ],
  },
  {
    id: 2,
    major: "V9.6",
    createdAt: "2026-09-28 10:00",
    updatedAt: "2026-09-28 16:42",
    mode: "preview",
    items: [
      { text: "灰度验证登录改版", image: "", preview: "" },
    ],
  },
];

const betaReleases = [
  { id: 1, versionId: 1, popupTitle: "V9.7游戏盒公测活动", appName: "4399游戏盒V9.7", version: "9.7.0.30", size: "186.4 MB", downloadLink: "https://dlstest.img4399.com/redirect/ftp/client/appftp/9.7/tinker/9.7.0.30/release_pub/4399Game_9.7.0.30.2401.apk", publishStatus: "published", start: "2026-10-20 10:00", end: "2026-11-20 23:59", intro: "抢先体验全新首页和登录改版", entryScope: "all", homePopup: "yes", crowd: "97gongce", lowPercent: 20, midPercent: 20, highPercent: 20, ultraPercent: 20, targetVersions: "", updatedAt: "2026-10-23 18:26" },
  { id: 2, versionId: 2, popupTitle: "V9.6游戏盒公测活动", appName: "4399游戏盒V9.6", version: "9.6.1.12", size: "179.8 MB", downloadLink: "https://dlstest.img4399.com/redirect/ftp/client/appftp/9.6/tinker/9.6.1.12/release_pub/4399Game_9.6.1.12.2388.apk", publishStatus: "published", start: "2026-09-28 10:00", end: "2026-10-28 23:59", intro: "灰度验证登录改版", entryScope: "all", homePopup: "yes", crowd: "96gongce", lowPercent: 15, midPercent: 10, highPercent: 30, ultraPercent: 5, targetVersions: "9.6.1.12", updatedAt: "2026-09-28 16:42" },
  { id: 3, versionId: 3, popupTitle: "V9.6游戏盒公测活动", appName: "4399游戏盒V9.6", version: "9.6.0.8", size: "172.3 MB", downloadLink: "https://dlstest.img4399.com/redirect/ftp/client/appftp/9.6/tinker/9.6.0.8/release_pub/4399Game_9.6.0.8.2360.apk", publishStatus: "preview", start: "2026-09-12 09:30", end: "2026-10-12 23:59", intro: "内测包，新增消息中心", entryScope: "all", homePopup: "yes", crowd: "96beta", lowPercent: 20, midPercent: 20, highPercent: 20, ultraPercent: 20, targetVersions: "", updatedAt: "2026-09-15 11:08" },
  { id: 4, versionId: 4, popupTitle: "V9.5游戏盒公测活动", appName: "4399游戏盒V9.5", version: "9.5.2.4", size: "165.1 MB", downloadLink: "https://dlstest.img4399.com/redirect/ftp/client/appftp/9.5/tinker/9.5.2.4/release_pub/4399Game_9.5.2.4.2291.apk", publishStatus: "published", start: "2026-08-18 10:00", end: "2026-09-18 23:59", intro: "稳定版功能回归", entryScope: "all", homePopup: "yes", crowd: "95gongce", lowPercent: 25, midPercent: 25, highPercent: 25, ultraPercent: 25, targetVersions: "5.4.1.29,9.5.2.4", updatedAt: "2026-08-18 14:15" },
];

const internalChannels = [
  "a4399",
  "youxi4399",
  "wap4399",
  "gongce4399",
  "shouyou4399",
  "neibu4399",
  "yuangong4399",
  "ceshi4399",
  "yunying4399",
  "qudao4399",
];

const internalReleases = [
  {
    id: 1,
    versionId: 1,
    appName: "4399游戏盒V9.7",
    version: "9.7.0.30",
    channelMode: "all",
    channels: "",
    updatedAt: "2026-10-21 15:40",
    channelStates: {
      a4399: { publishStatus: "preview", updateResult: "success" },
      youxi4399: { publishStatus: "preview", updateResult: "success" },
      wap4399: { publishStatus: "published", updateResult: "failed" },
      gongce4399: { publishStatus: "published", updateResult: "failed" },
      shouyou4399: { publishStatus: "preview", updateResult: "success" },
      neibu4399: { publishStatus: "published", updateResult: "failed" },
      yuangong4399: { publishStatus: "published", updateResult: "failed" },
      ceshi4399: { publishStatus: "preview", updateResult: "success" },
      yunying4399: { publishStatus: "preview", updateResult: "success" },
      qudao4399: { publishStatus: "published", updateResult: "failed" },
    },
  },
  {
    id: 2,
    versionId: 3,
    appName: "4399游戏盒V9.6",
    version: "9.6.0.8",
    channelMode: "custom",
    channels: "youxi4399\nwap4399",
    updatedAt: "2026-09-12 11:20",
    channelStates: {
      youxi4399: { publishStatus: "preview", updateResult: "success" },
      wap4399: { publishStatus: "published", updateResult: "failed" },
    },
  },
];
let activePluginType = PLUGIN_TYPES[0];
const betaPopupWhitelist = { udids: [], crowds: [] };

const menuGroup = document.getElementById("releaseMenu");
const parentButton = menuGroup.querySelector(".menu-parent");
const pageTitle = document.getElementById("pageTitle");
const versionPage = document.getElementById("versionPage");
const updatePage = document.getElementById("updatePage");
const updateTableBody = document.getElementById("updateTableBody");
const updateModal = document.getElementById("updateModal");
const updateModalTitle = document.getElementById("updateModalTitle");
const updateForm = document.getElementById("updateForm");
const updateCancelBtn = document.getElementById("updateCancelBtn");
const updateHint = document.getElementById("updateHint");
const pluginPage = document.getElementById("pluginPage");
const versionTableBody = document.getElementById("versionTableBody");
const addBtn = document.getElementById("addBtn");
const betaListMask = document.getElementById("betaListMask");
const betaListClose = document.getElementById("betaListClose");
const betaWhitelistBtn = document.getElementById("betaWhitelistBtn");
const betaWhitelistMask = document.getElementById("betaWhitelistMask");
const betaWhitelistForm = document.getElementById("betaWhitelistForm");
const betaWhitelistHint = document.getElementById("betaWhitelistHint");
const betaWhitelistCancel = document.getElementById("betaWhitelistCancel");
const betaAddBtn = document.getElementById("betaAddBtn");
const betaTableBody = document.getElementById("betaTableBody");
const betaBtn = document.getElementById("betaBtn");
const internalBtn = document.getElementById("internalBtn");
const internalListMask = document.getElementById("internalListMask");
const internalListClose = document.getElementById("internalListClose");
const internalAddBtn = document.getElementById("internalAddBtn");
const internalRecordBtn = document.getElementById("internalRecordBtn");
const internalRecordMask = document.getElementById("internalRecordMask");
const internalRecordCancel = document.getElementById("internalRecordCancel");
const internalRecordSave = document.getElementById("internalRecordSave");
const internalRecordVersion = document.getElementById("internalRecordVersion");
const internalRecordTitle = document.getElementById("internalRecordTitleInput");
const internalRecordDate = document.getElementById("internalRecordDate");
const internalRecordName = document.getElementById("internalRecordName");
const internalRecordLink = document.getElementById("internalRecordLink");
const INTERNAL_RECORD_TITLE = "安卓游戏盒";
const internalCatalogBtn = document.getElementById("internalCatalogBtn");
const internalBatchBtn = document.getElementById("internalBatchBtn");
const internalSuccessCount = document.getElementById("internalSuccessCount");
const internalFailedCount = document.getElementById("internalFailedCount");
const internalRetryBtn = document.getElementById("internalRetryBtn");
const internalFilterChannel = document.getElementById("internalFilterChannel");
const internalFilterStatus = document.getElementById("internalFilterStatus");
const internalFilterResult = document.getElementById("internalFilterResult");
const internalFilterSearch = document.getElementById("internalFilterSearch");
const internalSelectAll = document.getElementById("internalSelectAll");
let internalAppliedFilters = { channel: "", status: "", result: "" };
let internalSearchActive = false;
const internalSelected = new Set();
const internalCatalogMask = document.getElementById("internalCatalogMask");
const internalCatalogList = document.getElementById("internalCatalogList");
const internalCatalogAdd = document.getElementById("internalCatalogAdd");
const internalCatalogHint = document.getElementById("internalCatalogHint");
const internalCatalogCancel = document.getElementById("internalCatalogCancel");
const internalCatalogSave = document.getElementById("internalCatalogSave");
const internalTableBody = document.getElementById("internalTableBody");
const internalModal = document.getElementById("internalModal");
const internalModalTitle = document.getElementById("internalModalTitle");
const internalForm = document.getElementById("internalForm");
const internalCancelBtn = document.getElementById("internalCancelBtn");
const internalHint = document.getElementById("internalHint");
const internalChannelField = document.getElementById("internalChannelField");
const internalContentSelect = document.getElementById("internalContentSelect");
const internalContentEditor = document.getElementById("internalContentEditor");
const internalContentHint = document.getElementById("internalContentHint");
let internalUpdateDraft = { versionId: null, updateContentId: null, updateLines: [], title: "", updatedOn: "", versionName: "", downloadLink: "" };
let internalEditorVersionLine = "";
const internalRowMask = document.getElementById("internalRowMask");
const betaModal = document.getElementById("betaModal");
const betaDialog = betaModal.querySelector(".beta-modal");
const betaModalTitle = document.getElementById("betaModalTitle");
const betaConfig = document.getElementById("betaConfig");
const betaAudience = document.getElementById("betaAudience");
const betaCrowdAdd = document.getElementById("betaCrowdAdd");
const betaDefaultSheet = document.getElementById("betaDefaultSheet");
const betaCrowdUpdatesEl = document.getElementById("betaCrowdUpdates");
const betaCrowdList = document.getElementById("betaCrowdList");
const betaForm = document.getElementById("betaForm");
const betaCancelBtn = document.getElementById("betaCancelBtn");
const betaHint = document.getElementById("betaHint");
const betaToast = document.getElementById("betaToast");
const hotfixBtn = document.getElementById("hotfixBtn");
const versionModal = document.getElementById("versionModal");
const versionForm = document.getElementById("versionForm");
const versionCancelBtn = document.getElementById("versionCancelBtn");
const parseBtn = document.getElementById("parseBtn");
const parseHint = document.getElementById("parseHint");
const versionModalTitle = document.getElementById("versionModalTitle");
const confirmModal = document.getElementById("confirmModal");
const confirmText = document.getElementById("confirmText");
const confirmCancelBtn = document.getElementById("confirmCancelBtn");
const confirmOkBtn = document.getElementById("confirmOkBtn");
const pluginSheetBar = document.getElementById("pluginSheetBar");
const pluginSheetPanel = document.getElementById("pluginSheetPanel");
const pluginColgroup = document.getElementById("pluginColgroup");
const pluginTableHead = document.getElementById("pluginTableHead");
const pluginTableBody = document.getElementById("pluginTableBody");
const pluginModal = document.getElementById("pluginModal");
const pluginModalTitle = document.getElementById("pluginModalTitle");
const pluginForm = document.getElementById("pluginForm");
const pluginCancelBtn = document.getElementById("pluginCancelBtn");
const pluginVersionLabel = document.getElementById("pluginVersionLabel");
const pluginClientLabel = document.getElementById("pluginClientLabel");
const pluginLinkLabel = document.getElementById("pluginLinkLabel");

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

function renderVersionLinks() {
  if (versionRecords.length === 0) {
    versionTableBody.innerHTML = '<tr><td class="empty" colspan="9">暂无版本链接</td></tr>';
    return;
  }

  versionTableBody.innerHTML = versionRecords
    .map((record) => {
      const link = escapeHtml(record.link);
      return `<tr>
        <td>${escapeHtml(record.major)}</td>
        <td>${escapeHtml(record.name)}</td>
        <td>${escapeHtml(record.code)}</td>
        <td>${escapeHtml(record.date)}</td>
        <td>${escapeHtml(record.publisher)}</td>
        <td>${escapeHtml(record.channel)}</td>
        <td class="link-cell"><a href="${link}" target="_blank" rel="noopener noreferrer">${link}</a></td>
        <td class="note-cell">${escapeHtml(record.note)}</td>
        <td class="action-cell">
          <button class="btn-link" type="button" data-action="edit" data-id="${record.id}">编辑</button>
          <button class="btn-link btn-link-danger" type="button" data-action="delete" data-id="${record.id}">删除</button>
        </td>
      </tr>`;
    })
    .join("");
}

function renderPluginRecords() {
  pluginSheetBar.innerHTML = PLUGIN_TYPES.map((type) => {
    const selected = type === activePluginType;
    return `<button class="sheet-tab${selected ? " is-active" : ""}" type="button" role="tab" aria-selected="${selected}" data-type="${escapeHtml(type)}">${escapeHtml(type)}</button>`;
  }).join("");
  pluginSheetPanel.classList.toggle("is-flush-start", activePluginType === PLUGIN_TYPES[0]);

  const usesMinVersion = activePluginType === POST_TEMPLATE_TYPE || activePluginType === GAME_COMMENT_TYPE;
  pluginColgroup.innerHTML = usesMinVersion
    ? `<col class="col-template-version" />
       <col class="col-template-min" />
       <col class="col-template-date" />
       <col class="col-template-publisher" />
       <col class="col-template-link" />
       <col class="col-template-note" />
       <col class="col-template-action" />`
    : `<col class="col-plugin-version" />
       <col class="col-plugin-client" />
       <col class="col-plugin-date" />
       <col class="col-plugin-publisher" />
       <col class="col-plugin-link" />
       <col class="col-plugin-note" />
       <col class="col-plugin-action" />`;
  const headers = activePluginType === POST_TEMPLATE_TYPE
    ? ["帖子模版版本号", "生效最低版本号", "发布日期", "发布人", "模版链接", "发布说明", "操作"]
    : activePluginType === GAME_COMMENT_TYPE
      ? ["游戏评论模版版本号", "生效最低版本号", "发布日期", "发布人", "模版链接", "发布说明", "操作"]
      : ["插件版本号", "生效客户端版本", "发布日期", "发布人", "插件链接", "发布说明", "操作"];
  pluginTableHead.innerHTML = `<tr>${headers.map((title) => `<th>${title}</th>`).join("")}</tr>`;

  const records = pluginRecords
    .filter((record) => record.type === activePluginType)
    .sort((a, b) => b.date.localeCompare(a.date) || b.id - a.id);
  if (records.length === 0) {
    pluginTableBody.innerHTML = '<tr><td class="empty" colspan="7">暂无插件记录</td></tr>';
    return;
  }

  pluginTableBody.innerHTML = records
    .map((record) => {
      const link = escapeHtml(record.link);
      return `<tr>
        <td>${escapeHtml(record.version)}</td>
        <td>${escapeHtml(record.clientVersion)}</td>
        <td>${escapeHtml(record.date)}</td>
        <td>${escapeHtml(record.publisher)}</td>
        <td class="link-cell"><a href="${link}" target="_blank" rel="noopener noreferrer">${link}</a></td>
        <td class="note-cell">${escapeHtml(record.note)}</td>
        <td class="action-cell">
          <button class="btn-link" type="button" data-action="edit" data-id="${record.id}">编辑</button>
          <button class="btn-link btn-link-danger" type="button" data-action="delete" data-id="${record.id}">删除</button>
        </td>
      </tr>`;
    })
    .join("");
}

function syncPluginFormLabels() {
  const type = pluginForm.elements.type.value;
  const labels = type === POST_TEMPLATE_TYPE
    ? ["帖子模版版本号", "请输入帖子模版版本号", "生效最低版本号", "请输入生效最低版本号", "模版链接", "请输入模版链接"]
    : type === GAME_COMMENT_TYPE
      ? ["游戏评论模版版本号", "请输入游戏评论模版版本号", "生效最低版本号", "请输入生效最低版本号", "模版链接", "请输入模版链接"]
      : ["插件版本号", "请输入插件版本号", "生效客户端版本", "请输入生效客户端版本", "插件链接", "请输入插件链接"];
  pluginVersionLabel.textContent = labels[0];
  pluginForm.elements.version.placeholder = labels[1];
  pluginClientLabel.textContent = labels[2];
  pluginForm.elements.clientVersion.placeholder = labels[3];
  pluginLinkLabel.textContent = labels[4];
  pluginForm.elements.link.placeholder = labels[5];
}

function openPluginModal(record) {
  pluginForm.reset();
  if (record) {
    editingPluginId = record.id;
    pluginModalTitle.textContent = "编辑插件";
    pluginForm.elements.type.value = record.type;
    pluginForm.elements.link.value = record.link;
    pluginForm.elements.version.value = record.version;
    pluginForm.elements.clientVersion.value = record.clientVersion;
    pluginForm.elements.date.value = record.date;
    pluginForm.elements.note.value = record.note;
  } else {
    editingPluginId = null;
    pluginModalTitle.textContent = "新增插件";
    pluginForm.elements.date.value = todayString();
    pluginForm.elements.type.value = activePluginType;
  }
  syncPluginFormLabels();
  pluginModal.hidden = false;
  pluginForm.elements.link.focus();
}

function closePluginModal() {
  editingPluginId = null;
  pluginModalTitle.textContent = "新增插件";
  pluginModal.hidden = true;
}

function renderBetaList() {
  if (betaReleases.length === 0) {
    betaTableBody.innerHTML = '<tr><td class="empty" colspan="8">暂无公测记录</td></tr>';
    return;
  }
  betaTableBody.innerHTML = betaReleases.map((item) => `<tr>
    <td>${escapeHtml(item.appName)}</td>
    <td>${escapeHtml(item.version)}</td>
    <td class="beta-size">${escapeHtml(item.size)}</td>
    <td class="link-cell">${item.downloadLink ? `<a href="${escapeHtml(item.downloadLink)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.downloadLink)}</a>` : ""}</td>
    <td><div class="beta-period"><span>${escapeHtml(item.start)}</span><span>至 ${escapeHtml(item.end)}</span></div></td>
    <td>${escapeHtml(item.updatedAt)}</td>
    <td><span class="update-mode ${item.publishStatus === "published" ? "is-published" : "is-preview"}">${item.publishStatus === "published" ? "发布" : "预览"}</span></td>
    <td class="action-cell">
      <button class="btn-link" type="button" data-action="audience" data-id="${item.id}">推送人群</button>
      <button class="btn-link" type="button" data-action="config" data-id="${item.id}">公测配置</button>
      <button class="btn-link btn-link-danger" type="button" data-action="delete" data-id="${item.id}">删除</button>
    </td>
  </tr>`).join("");
}

function showBetaList() {
  betaListMask.hidden = false;
  renderBetaList();
  betaListClose.focus();
}

function hideBetaList() {
  if (!betaModal.hidden) closeBetaModal();
  if (!betaWhitelistMask.hidden) closeBetaWhitelist();
  betaListMask.hidden = true;
}

function showWhitelistHint(message) {
  betaWhitelistHint.textContent = message;
  betaWhitelistHint.hidden = !message;
}

function openBetaWhitelist() {
  showWhitelistHint("");
  betaWhitelistForm.elements.udids.value = betaPopupWhitelist.udids.join("\n");
  betaWhitelistForm.elements.crowds.value = betaPopupWhitelist.crowds.join(",");
  betaWhitelistMask.hidden = false;
  betaWhitelistForm.elements.udids.focus();
}

function closeBetaWhitelist() {
  showWhitelistHint("");
  betaWhitelistMask.hidden = true;
}

function saveBetaWhitelist() {
  const crowdText = betaWhitelistForm.elements.crowds.value;
  if (crowdText.includes("，")) {
    showWhitelistHint("人群请使用英文逗号分隔");
    betaWhitelistForm.elements.crowds.focus();
    return;
  }
  const udids = [];
  betaWhitelistForm.elements.udids.value.split(/\r?\n/).forEach((line) => {
    const udid = line.trim();
    if (udid && !udids.includes(udid)) udids.push(udid);
  });
  const crowds = [];
  crowdText.split(",").forEach((part) => {
    const crowd = part.trim();
    if (crowd && !crowds.includes(crowd)) crowds.push(crowd);
  });
  betaPopupWhitelist.udids = udids;
  betaPopupWhitelist.crowds = crowds;
  closeBetaWhitelist();
  showBetaToast("已保存公测弹窗白名单");
}

function showPage(page) {
  currentPage = page;
  hideBetaList();
  hideInternalList();
  pageTitle.textContent = pages[page];
  versionPage.hidden = page !== "version";
  updatePage.hidden = page !== "update";
  pluginPage.hidden = page !== "plugin";
  betaBtn.hidden = page !== "version";
  internalBtn.hidden = page !== "version";
  hotfixBtn.hidden = page !== "version";
  if (!updateModal.hidden) closeUpdateModal();
}

function todayString() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

function readVersionForm() {
  return {
    link: versionForm.elements.link.value.trim(),
    major: versionForm.elements.major.value.trim(),
    name: versionForm.elements.name.value.trim(),
    code: versionForm.elements.code.value.trim(),
    date: versionForm.elements.date.value,
    channel: versionForm.elements.channel.value.trim(),
    note: versionForm.elements.note.value.trim(),
  };
}

function openVersionModal(record) {
  versionForm.reset();
  parseHint.hidden = true;
  if (record) {
    editingId = record.id;
    versionModalTitle.textContent = "编辑版本";
    versionForm.elements.link.value = record.link;
    versionForm.elements.major.value = record.major;
    versionForm.elements.name.value = record.name;
    versionForm.elements.code.value = record.code;
    versionForm.elements.date.value = record.date;
    versionForm.elements.channel.value = record.channel;
    versionForm.elements.note.value = record.note;
  } else {
    editingId = null;
    versionModalTitle.textContent = "新增版本";
    versionForm.elements.date.value = todayString();
  }
  versionModal.hidden = false;
  versionForm.elements.link.focus();
}

function closeVersionModal() {
  editingId = null;
  versionModal.hidden = true;
}

let betaToastTimer;

const BETA_TIERS = [
  { key: "low", label: "低活跃用户", users: 10578831 },
  { key: "mid", label: "中活跃用户", users: 1417325 },
  { key: "high", label: "高活跃用户", users: 577179 },
  { key: "ultra", label: "超高活跃用户", users: 304613 },
];

function betaEstimate(percent, users) {
  if (!Number.isFinite(percent)) return "";
  return String(Math.floor((percent * users) / 100));
}

function syncBetaAudience() {
  BETA_TIERS.forEach((tier) => {
    const raw = betaForm.elements[`${tier.key}Percent`].value.trim();
    const percent = raw === "" ? Number.NaN : Number(raw);
    betaForm.elements[`${tier.key}Estimate`].value = betaEstimate(percent, tier.users);
  });
}

function invalidBetaPercent(tier) {
  const raw = betaForm.elements[`${tier.key}Percent`].value.trim();
  const percent = Number(raw);
  return raw === "" || !Number.isInteger(percent) || percent < 0 || percent > 100;
}

function betaCopy(record) {
  return {
    popupTitle: `${record.major}游戏盒公测活动`,
    appName: `4399游戏盒${record.major}`,
  };
}

function showBetaHint(message) {
  betaHint.textContent = message;
  betaHint.hidden = !message;
}

function fillBetaVersions() {
  const select = betaForm.elements.versionId;
  const current = select.value;
  select.innerHTML = `<option value="" selected disabled>请选择游戏盒版本</option>${versionRecords
    .map((record) => `<option value="${record.id}">${escapeHtml(`${record.major} · ${record.name} · ${record.code}`)}</option>`)
    .join("")}`;
  if (versionRecords.some((record) => String(record.id) === current)) select.value = current;
}

function matchUpdateContentId(major) {
  const matches = updateContents.filter((item) => item.major === major);
  matches.sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : a.updatedAt > b.updatedAt ? -1 : b.id - a.id));
  return matches.length ? String(matches[0].id) : "";
}

function fillUpdateContents(selectedId) {
  const select = betaForm.elements.updateContentId;
  const current = selectedId == null ? "" : String(selectedId);
  select.innerHTML = `<option value="">请选择</option>${updateContents
    .map((item) => `<option value="${item.id}">${escapeHtml(item.major)}</option>`)
    .join("")}`;
  select.value = updateContents.some((item) => String(item.id) === current) ? current : "";
}

function syncBetaDerived() {
  const record = versionRecords.find((item) => String(item.id) === betaForm.elements.versionId.value);
  const copy = record ? betaCopy(record) : { popupTitle: "", appName: "" };
  betaForm.elements.popupTitle.value = copy.popupTitle;
  betaForm.elements.appName.value = copy.appName;
  fillUpdateContents(record ? matchUpdateContentId(record.major) : "");
}

function betaStamp() {
  return new Date().toLocaleString("sv-SE", { hour12: false }).slice(0, 16);
}

function openBetaModal(mode = "create", item = null) {
  betaMode = mode;
  editingBetaId = item ? item.id : null;
  betaForm.reset();
  showBetaHint("");
  betaConfig.hidden = mode === "audience";
  betaAudience.hidden = mode !== "audience";
  betaDialog.classList.toggle("is-audience", mode === "audience");
  betaModalTitle.textContent = mode === "audience" ? "推送人群" : "公测配置";
  fillBetaVersions();
  clearBetaAssets();
  if (item && mode !== "audience") {
    betaForm.elements.versionId.value = String(item.versionId);
    betaForm.elements.popupTitle.value = item.popupTitle;
    betaForm.elements.appName.value = item.appName;
    betaForm.elements.start.value = item.start.replace(" ", "T");
    betaForm.elements.end.value = item.end.replace(" ", "T");
    betaForm.elements.intro.value = item.intro;
    betaForm.elements.publishStatus.value = item.publishStatus === "published" ? "published" : "preview";
    betaForm.elements.entryScope.value = item.entryScope === "selected" ? "selected" : "all";
    betaForm.elements.homePopup.value = item.homePopup === "no" ? "no" : "yes";
    betaForm.elements.entryCopy.value = item.entryCopy || "";
    setBetaAsset(betaForm.elements.entryBg, item.entryBg, item.entryBgPreview);
    setBetaAsset(betaForm.elements.entryIcon, item.entryIcon, item.entryIconPreview);
    const saved = updateContents.some((row) => row.id === item.updateContentId)
      ? item.updateContentId
      : matchUpdateContentId(versionRecords.find((row) => row.id === item.versionId)?.major);
    fillUpdateContents(saved);
  } else if (mode !== "audience") {
    fillUpdateContents("");
  }
  if (item && mode !== "config") {
    betaForm.elements.crowd.value = item.crowd;
    betaForm.elements.targetVersions.value = item.targetVersions;
    BETA_TIERS.forEach((tier) => {
      betaForm.elements[`${tier.key}Percent`].value = item[`${tier.key}Percent`];
    });
  }
  syncBetaAudience();
  syncBetaAssets();
  if (mode !== "audience") resetCrowdUpdates(item);
  betaModal.hidden = false;
  (mode === "audience" ? betaForm.elements.crowd : betaForm.elements.versionId).focus();
}

function closeBetaModal() {
  betaMode = "create";
  editingBetaId = null;
  showBetaHint("");
  betaModal.hidden = true;
}

function showBetaToast(message) {
  clearTimeout(betaToastTimer);
  betaToast.textContent = message;
  betaToast.hidden = false;
  betaToastTimer = setTimeout(() => {
    betaToast.hidden = true;
  }, 3500);
}

function openConfirmModal(id, target = "version") {
  pendingDeleteId = id;
  pendingDeleteTarget = target;
  const messages = {
    plugin: "确定要删除这条插件记录吗？删除后不可恢复。",
    beta: "确定要删除这条公测记录吗？删除后不可恢复。",
    internal: "确定要删除这条内部渠道记录吗？删除后不可恢复。",
    version: "确定要删除这条版本记录吗？删除后不可恢复。",
    update: "确定要删除这条更新内容吗？删除后不可恢复。",
  };
  confirmText.textContent = messages[target] || messages.version;
  confirmModal.hidden = false;
}

function closeConfirmModal() {
  pendingDeleteId = null;
  pendingDeleteTarget = null;
  confirmModal.hidden = true;
}

parentButton.addEventListener("click", () => {
  const open = menuGroup.classList.toggle("is-open");
  parentButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".submenu-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".submenu-item").forEach((node) => {
      node.classList.toggle("is-active", node === item);
    });
    showPage(item.dataset.page);
  });
});

addBtn.addEventListener("click", () => {
  if (currentPage === "version") openVersionModal();
  if (currentPage === "plugin") openPluginModal();
  if (currentPage === "update") openUpdateModal();
});

function internalChannelLines(value) {
  const channels = [];
  String(value || "").split(/\r?\n/).forEach((line) => {
    const channel = line.trim();
    if (channel && !channels.includes(channel)) channels.push(channel);
  });
  return channels;
}

function releaseChannels(item) {
  return item.channelMode === "custom" ? internalChannelLines(item.channels) : internalChannels.slice();
}

function emptyChannelState() {
  return { publishStatus: "published", updateResult: "failed" };
}

function channelState(item, channel) {
  const saved = item.channelStates && item.channelStates[channel];
  const updateResult = saved && saved.updateResult === "success" ? "success" : "failed";
  const publishStatus = saved && saved.publishStatus === "published" ? "published" : "preview";
  const versionId = saved && saved.versionId ? Number(saved.versionId) : item.versionId;
  const updatedAt = saved && saved.updatedAt ? saved.updatedAt : item.updatedAt;
  return { publishStatus, updateResult, versionId, updatedAt };
}

function versionOptionLabel(record) {
  return `${record.major} · ${record.name} · ${record.code}`;
}

function internalStatusLabel(result) {
  return result === "success" ? "更新成功" : "更新失败";
}

function internalVersionName(versionId, fallback) {
  const version = versionRecords.find((record) => record.id === versionId);
  return version ? version.name : fallback;
}

function collectInternalRows() {
  const rows = [];
  internalReleases.forEach((item) => {
    releaseChannels(item).forEach((channel) => {
      const state = channelState(item, channel);
      rows.push({
        item,
        channel,
        ...state,
        versionName: internalVersionName(state.versionId, item.version),
      });
    });
  });
  return rows;
}

function internalListFilters() {
  return internalSearchActive ? internalAppliedFilters : { channel: "", status: "", result: "" };
}

function internalRowMatches(row, filters) {
  const channel = filters.channel.trim();
  if (channel && row.channel !== channel) return false;
  if (filters.status && row.publishStatus !== filters.status) return false;
  if (filters.result && row.updateResult !== filters.result) return false;
  return true;
}

function resetInternalFilters() {
  internalFilterChannel.value = "";
  internalFilterStatus.value = "";
  internalFilterResult.value = "";
  internalAppliedFilters = { channel: "", status: "", result: "" };
  internalSearchActive = false;
}

function applyInternalFilters() {
  internalSearchActive = true;
  internalAppliedFilters = {
    channel: internalFilterChannel.value.trim(),
    status: internalFilterStatus.value,
    result: internalFilterResult.value,
  };
  renderInternalList();
}

function internalRowKey(row) {
  return `${row.item.id}:${row.channel}`;
}

function syncInternalSelectAll(visible) {
  const selected = visible.filter((row) => internalSelected.has(internalRowKey(row))).length;
  internalSelectAll.checked = visible.length > 0 && selected === visible.length;
  internalSelectAll.indeterminate = selected > 0 && selected < visible.length;
  internalSelectAll.disabled = visible.length === 0;
}

function renderInternalList() {
  const rows = collectInternalRows();
  const alive = new Set(rows.map(internalRowKey));
  [...internalSelected].forEach((key) => {
    if (!alive.has(key)) internalSelected.delete(key);
  });
  const visible = rows.filter((row) => internalRowMatches(row, internalListFilters()));
  const successCount = rows.filter((row) => row.updateResult === "success").length;
  internalSuccessCount.textContent = String(successCount);
  internalFailedCount.textContent = String(rows.length - successCount);
  internalRetryBtn.disabled = visible.every((row) => row.updateResult !== "failed");
  syncInternalSelectAll(visible);
  if (visible.length === 0) {
    internalTableBody.innerHTML = `<tr><td class="empty" colspan="7">${rows.length ? "没有符合条件的渠道" : "暂无内部渠道记录"}</td></tr>`;
    return;
  }
  internalTableBody.innerHTML = visible.map((row) => `<tr>
    <td class="col-check"><input type="checkbox" class="internal-row-check" data-id="${row.item.id}" data-channel="${escapeHtml(row.channel)}" aria-label="选择${escapeHtml(row.channel)}"${internalSelected.has(internalRowKey(row)) ? " checked" : ""} /></td>
    <td>${escapeHtml(row.channel)}</td>
    <td>${escapeHtml(row.versionName)}</td>
    <td><span class="update-mode ${row.publishStatus === "published" ? "is-published" : "is-preview"}">${row.publishStatus === "published" ? "发布" : "预览"}</span></td>
    <td><span class="update-mode is-${row.updateResult}">${internalStatusLabel(row.updateResult)}</span></td>
    <td>${escapeHtml(row.updatedAt)}</td>
    <td class="action-cell">
      <button class="btn-link" type="button" data-action="config" data-id="${row.item.id}" data-channel="${escapeHtml(row.channel)}">配置</button>
      <button class="btn-link btn-link-danger" type="button" data-action="delete" data-id="${row.item.id}">删除</button>
    </td>
  </tr>`).join("");
}

function publishSelectedInternalChannels() {
  const selected = collectInternalRows().filter((row) => internalSelected.has(internalRowKey(row)));
  if (selected.length === 0) {
    showBetaToast("请先勾选渠道");
    return;
  }
  const stamp = betaStamp();
  selected.forEach((row) => {
    if (!row.item.channelStates) row.item.channelStates = {};
    row.item.channelStates[row.channel] = {
      publishStatus: "published",
      updateResult: row.updateResult,
      versionId: row.versionId,
      updatedAt: stamp,
    };
  });
  renderInternalList();
  showBetaToast("发布成功");
}

function retryFailedInternalChannels() {
  const stamp = betaStamp();
  const filters = internalListFilters();
  let retried = 0;
  collectInternalRows().forEach((row) => {
    if (!internalRowMatches(row, filters) || row.updateResult !== "failed") return;
    if (!row.item.channelStates) row.item.channelStates = {};
    row.item.channelStates[row.channel] = {
      publishStatus: "preview",
      updateResult: "success",
      versionId: row.versionId,
      updatedAt: stamp,
    };
    retried += 1;
  });
  if (!retried) return;
  renderInternalList();
  showBetaToast("已重试");
}

function showInternalList() {
  internalListMask.hidden = false;
  renderInternalList();
  internalListClose.focus();
}

function hideInternalList() {
  if (!internalModal.hidden) closeInternalModal();
  if (!internalRowMask.hidden) closeInternalRow();
  if (!internalCatalogMask.hidden) closeInternalCatalog();
  if (!internalRecordMask.hidden) closeInternalRecord();
  resetInternalFilters();
  internalSelected.clear();
  internalListMask.hidden = true;
}

function showInternalHint(message) {
  internalHint.textContent = message;
  internalHint.hidden = !message;
}

function showInternalCatalogHint(message) {
  internalCatalogHint.textContent = message;
  internalCatalogHint.hidden = !message;
}

function renderInternalCatalog(channels) {
  internalCatalogList.innerHTML = channels.map((channel) => `<div class="channel-row">
    <input type="text" value="${escapeHtml(channel)}" placeholder="请输入渠道" aria-label="渠道" />
    <button class="btn-link btn-link-danger" type="button" data-remove>删除</button>
  </div>`).join("");
}

function openInternalCatalog() {
  showInternalCatalogHint("");
  renderInternalCatalog(internalChannels);
  internalCatalogMask.hidden = false;
  const first = internalCatalogList.querySelector("input");
  if (first) first.focus();
}

function closeInternalCatalog() {
  showInternalCatalogHint("");
  internalCatalogMask.hidden = true;
}

function addInternalCatalogRow() {
  showInternalCatalogHint("");
  internalCatalogList.insertAdjacentHTML("beforeend", `<div class="channel-row">
    <input type="text" value="" placeholder="请输入渠道" aria-label="渠道" />
    <button class="btn-link btn-link-danger" type="button" data-remove>删除</button>
  </div>`);
  const inputs = internalCatalogList.querySelectorAll("input");
  inputs[inputs.length - 1].focus();
}

function saveInternalCatalog() {
  const channels = [];
  internalCatalogList.querySelectorAll("input").forEach((input) => {
    const channel = input.value.trim();
    if (channel && !channels.includes(channel)) channels.push(channel);
  });
  if (channels.length === 0) {
    showInternalCatalogHint("请至少填写一个渠道");
    const first = internalCatalogList.querySelector("input");
    if (first) first.focus();
    return;
  }
  internalChannels.splice(0, internalChannels.length, ...channels);
  closeInternalCatalog();
  showBetaToast("已保存内部渠道配置");
}

function fillInternalVersions() {
  const select = internalForm.elements.versionId;
  const current = select.value;
  select.innerHTML = `<option value="" selected disabled>请选择游戏盒版本</option>${versionRecords
    .map((record) => `<option value="${record.id}">${escapeHtml(versionOptionLabel(record))}</option>`)
    .join("")}`;
  if (versionRecords.some((record) => String(record.id) === current)) select.value = current;
}

function syncInternalChannelField() {
  internalChannelField.hidden = internalForm.elements.channelMode.value !== "custom";
}

function showInternalContentHint(message) {
  internalContentHint.textContent = message;
  internalContentHint.hidden = !message;
}

function updateContentLines(item) {
  return (item && item.items ? item.items : []).map((row) => String(row.text || "").trim()).filter(Boolean);
}

function updateContentOptionLabel(item) {
  const shared = updateContents.some((row) => row.id !== item.id && row.major === item.major);
  return shared ? `${item.major} · ${item.updatedAt}` : item.major;
}

function writeInternalContentEditor(lines) {
  const filled = lines.map((line) => String(line || "").trim()).filter(Boolean);
  const name = internalRecordName.value.trim();
  internalEditorVersionLine = name && filled[0] === name ? name : "";
  internalContentEditor.classList.toggle("is-placeholder", filled.length === 0);
  internalContentEditor.innerHTML = filled.map((line) => `<div>${escapeHtml(line)}</div>`).join("");
}

function readInternalContentEditor() {
  return internalContentEditor.innerText.replace(/\u00a0/g, " ").split(/\n/).map((line) => line.trim()).filter(Boolean);
}

function fillInternalContentSelect(selectedId) {
  internalContentSelect.innerHTML = `<option value="">请选择</option>${updateContents
    .map((item) => `<option value="${item.id}">${escapeHtml(updateContentOptionLabel(item))}</option>`)
    .join("")}`;
  internalContentSelect.value = updateContents.some((item) => String(item.id) === String(selectedId)) ? String(selectedId) : "";
}

function ensureVersionNameLine(lines) {
  const name = internalRecordName.value.trim();
  const filled = lines.map((line) => String(line || "").trim()).filter(Boolean);
  if (!name || filled[0] === name) return filled;
  return [name, ...filled];
}

function internalContentEditorLines(content) {
  return ensureVersionNameLine(updateContentLines(content));
}

function todayInputDate() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

function a4399DownloadLink(version) {
  if (!version) return "";
  const matched = versionRecords.find((item) => item.name === version.name && item.code === version.code && item.channel === "a4399");
  return (matched || version).link || "";
}

function applyInternalRecordMeta(version, restoreDraft) {
  const saved = restoreDraft && version && internalUpdateDraft.versionId === version.id;
  if (!internalRecordTitle.value.trim()) internalRecordTitle.value = INTERNAL_RECORD_TITLE;
  if (!internalRecordDate.value) internalRecordDate.value = todayInputDate();
  if (saved) {
    internalRecordTitle.value = internalUpdateDraft.title || INTERNAL_RECORD_TITLE;
    internalRecordDate.value = internalUpdateDraft.updatedOn || todayInputDate();
    internalRecordLink.value = internalUpdateDraft.downloadLink || a4399DownloadLink(version);
    internalRecordName.value = internalUpdateDraft.versionName || version.name;
  } else {
    internalRecordLink.value = a4399DownloadLink(version);
    internalRecordName.value = version ? version.name : "";
  }
}

function selectedInternalContent() {
  return updateContents.find((item) => String(item.id) === internalContentSelect.value) || null;
}

function selectedInternalRecordVersion() {
  return versionRecords.find((item) => String(item.id) === internalRecordVersion.value) || null;
}

function fillInternalRecordVersions(selectedId) {
  internalRecordVersion.innerHTML = `<option value="" selected disabled>请选择游戏盒版本</option>${versionRecords
    .map((record) => `<option value="${record.id}">${escapeHtml(versionOptionLabel(record))}</option>`)
    .join("")}`;
  internalRecordVersion.value = versionRecords.some((record) => String(record.id) === String(selectedId)) ? String(selectedId) : "";
}

function applyInternalRecordVersion(version, restoreDraft) {
  applyInternalRecordMeta(version, restoreDraft);
  if (!version) {
    fillInternalContentSelect("");
    writeInternalContentEditor([]);
    showInternalContentHint("");
    return;
  }
  const matched = matchUpdateContentId(version.major);
  const draftMatches = restoreDraft
    && internalUpdateDraft.versionId === version.id
    && internalUpdateDraft.updateLines.length
    && updateContents.some((item) => item.id === internalUpdateDraft.updateContentId);
  fillInternalContentSelect(draftMatches ? internalUpdateDraft.updateContentId : matched);
  const content = selectedInternalContent();
  if (draftMatches && content && content.id === internalUpdateDraft.updateContentId) writeInternalContentEditor(ensureVersionNameLine(internalUpdateDraft.updateLines));
  else writeInternalContentEditor(internalContentEditorLines(content));
  showInternalContentHint(content ? "" : "该主版本暂无更新内容");
}

function openInternalRecord() {
  showInternalContentHint("");
  const savedVersion = versionRecords.some((item) => item.id === internalUpdateDraft.versionId)
    ? internalUpdateDraft.versionId
    : "";
  fillInternalRecordVersions(savedVersion);
  applyInternalRecordVersion(selectedInternalRecordVersion(), true);
  internalRecordMask.hidden = false;
  internalRecordVersion.focus();
}

function closeInternalRecord() {
  showInternalContentHint("");
  internalRecordMask.hidden = true;
}

function saveInternalRecord() {
  const version = selectedInternalRecordVersion();
  if (!version) {
    showInternalContentHint("请选择游戏盒版本");
    internalRecordVersion.focus();
    return;
  }
  const content = selectedInternalContent();
  const updateLines = readInternalContentEditor();
  if (!content) {
    showInternalContentHint("请选择更新内容");
    internalContentSelect.focus();
    return;
  }
  if (updateLines.length === 0) {
    showInternalContentHint("请填写更新内容");
    internalContentEditor.focus();
    return;
  }
  internalUpdateDraft = {
    versionId: version.id,
    updateContentId: content.id,
    updateLines,
    title: internalRecordTitle.value.trim() || INTERNAL_RECORD_TITLE,
    updatedOn: internalRecordDate.value || todayInputDate(),
    versionName: internalRecordName.value.trim(),
    downloadLink: internalRecordLink.value.trim(),
  };
  closeInternalRecord();
  showBetaToast("已保存更新记录");
}

function readInternalChannels() {
  return internalChannelLines(internalForm.elements.channels.value);
}

function openInternalModal(item) {
  editingInternalId = item ? item.id : null;
  internalForm.reset();
  showInternalHint("");
  internalModalTitle.textContent = "选择版本与渠道";
  fillInternalVersions();
  if (item) {
    internalForm.elements.versionId.value = String(item.versionId);
    internalForm.elements.channelMode.value = item.channelMode === "custom" ? "custom" : "all";
    internalForm.elements.channels.value = internalChannelLines(item.channels).join("\n");
  }
  syncInternalChannelField();
  internalModal.hidden = false;
  internalForm.elements.versionId.focus();
}

function closeInternalModal() {
  editingInternalId = null;
  showInternalHint("");
  internalModal.hidden = true;
}

function showInternalRowHint(message) {
  internalRowHint.textContent = message;
  internalRowHint.hidden = !message;
}

function fillInternalPackages(selectedId) {
  const select = internalRowForm.elements.versionId;
  select.innerHTML = `<option value="" disabled>请选择游戏盒版本</option>${versionRecords
    .map((record) => `<option value="${record.id}">${escapeHtml(versionOptionLabel(record))}</option>`)
    .join("")}`;
  select.value = versionRecords.some((record) => record.id === Number(selectedId)) ? String(selectedId) : "";
}

function openInternalRow(item, channel) {
  const state = channelState(item, channel);
  editingInternalRow = { id: item.id, channel };
  internalRowForm.reset();
  showInternalRowHint("");
  internalRowTitle.textContent = `配置 ${channel}`;
  fillInternalPackages(state.versionId);
  internalRowForm.elements.publishStatus.value = state.publishStatus === "published" ? "published" : "preview";
  internalRowMask.hidden = false;
  internalRowForm.elements.versionId.focus();
}

function closeInternalRow() {
  editingInternalRow = null;
  showInternalRowHint("");
  internalRowMask.hidden = true;
}

function saveInternalRow() {
  const item = editingInternalRow && internalReleases.find((row) => row.id === editingInternalRow.id);
  const version = versionRecords.find((record) => String(record.id) === internalRowForm.elements.versionId.value);
  if (!item || !editingInternalRow.channel) return;
  if (!version) {
    showInternalRowHint("请选择游戏盒版本");
    internalRowForm.elements.versionId.focus();
    return;
  }
  const current = channelState(item, editingInternalRow.channel);
  const packageChanged = version.id !== current.versionId;
  if (!item.channelStates) item.channelStates = {};
  item.channelStates[editingInternalRow.channel] = {
    publishStatus: packageChanged
      ? current.updateResult === "success" ? "preview" : "published"
      : internalRowForm.elements.publishStatus.value === "published" ? "published" : "preview",
    updateResult: current.updateResult,
    versionId: version.id,
    updatedAt: packageChanged ? betaStamp() : current.updatedAt,
  };
  closeInternalRow();
  renderInternalList();
  showBetaToast("已保存配置");
}

function saveInternalRelease() {
  const version = versionRecords.find((item) => String(item.id) === internalForm.elements.versionId.value);
  if (!version) {
    showInternalHint("请选择游戏盒版本");
    internalForm.elements.versionId.focus();
    return;
  }
  const custom = internalForm.elements.channelMode.value === "custom";
  const updateContentId = !custom && internalUpdateDraft.updateContentId ? internalUpdateDraft.updateContentId : null;
  const updateLines = updateContentId ? internalUpdateDraft.updateLines.slice() : [];
  let channels = "";
  if (custom) {
    const parsed = readInternalChannels();
    if (parsed.length === 0) {
      showInternalHint("请填写渠道");
      internalForm.elements.channels.focus();
      return;
    }
    channels = parsed.join("\n");
  }
  const editing = editingInternalId;
  const previous = editing ? internalReleases.find((item) => item.id === editing) : null;
  const selected = custom ? internalChannelLines(channels) : internalChannels.slice();
  const channelStates = {};
  selected.forEach((channel) => {
    const saved = previous && previous.channelStates && previous.channelStates[channel];
    channelStates[channel] = saved ? channelState(previous, channel) : emptyChannelState();
  });
  const record = {
    versionId: version.id,
    appName: `4399游戏盒${version.major}`,
    version: version.name,
    channelMode: custom ? "custom" : "all",
    channels,
    updateContentId,
    updateLines,
    channelStates,
    updatedAt: betaStamp(),
  };
  if (editing) {
    const index = internalReleases.findIndex((item) => item.id === editing);
    if (index >= 0) internalReleases[index] = { ...internalReleases[index], ...record };
  } else {
    internalReleases.unshift({ id: nextInternalId, ...record });
    nextInternalId += 1;
  }
  closeInternalModal();
  renderInternalList();
  showBetaToast("已保存选择版本与渠道");
}

betaBtn.addEventListener("click", showBetaList);
internalBtn.addEventListener("click", showInternalList);
internalListClose.addEventListener("click", hideInternalList);
internalAddBtn.addEventListener("click", () => openInternalModal());
internalRecordBtn.addEventListener("click", openInternalRecord);
internalRecordCancel.addEventListener("click", closeInternalRecord);
internalRecordSave.addEventListener("click", saveInternalRecord);
internalRecordMask.addEventListener("click", (event) => {
  if (event.target === internalRecordMask) closeInternalRecord();
});
internalCatalogBtn.addEventListener("click", openInternalCatalog);
internalBatchBtn.addEventListener("click", publishSelectedInternalChannels);
internalSelectAll.addEventListener("change", () => {
  collectInternalRows().filter((row) => internalRowMatches(row, internalListFilters())).forEach((row) => {
    const key = internalRowKey(row);
    if (internalSelectAll.checked) internalSelected.add(key);
    else internalSelected.delete(key);
  });
  renderInternalList();
});
internalTableBody.addEventListener("change", (event) => {
  const box = event.target.closest(".internal-row-check");
  if (!box) return;
  const key = `${box.dataset.id}:${box.dataset.channel}`;
  if (box.checked) internalSelected.add(key);
  else internalSelected.delete(key);
  const visible = collectInternalRows().filter((row) => internalRowMatches(row, internalListFilters()));
  syncInternalSelectAll(visible);
});
internalRetryBtn.addEventListener("click", retryFailedInternalChannels);
internalFilterSearch.addEventListener("click", applyInternalFilters);
internalCatalogAdd.addEventListener("click", addInternalCatalogRow);
internalCatalogCancel.addEventListener("click", closeInternalCatalog);
internalCatalogSave.addEventListener("click", saveInternalCatalog);
internalCatalogList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (!button) return;
  button.closest(".channel-row").remove();
});
internalCatalogList.addEventListener("input", () => showInternalCatalogHint(""));
internalCatalogMask.addEventListener("click", (event) => {
  if (event.target === internalCatalogMask) closeInternalCatalog();
});
internalTableBody.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const id = Number(button.dataset.id);
  const item = internalReleases.find((row) => row.id === id);
  if (!item) return;
  if (button.dataset.action === "config") openInternalRow(item, button.dataset.channel);
  if (button.dataset.action === "delete") openConfirmModal(id, "internal");
});
internalListMask.addEventListener("click", (event) => {
  if (event.target === internalListMask) hideInternalList();
});
internalForm.addEventListener("change", (event) => {
  if (event.target.name === "channelMode") {
    syncInternalChannelField();
    showInternalHint("");
  }
  if (event.target.name === "versionId") showInternalHint("");
});
internalRecordVersion.addEventListener("change", () => {
  applyInternalRecordVersion(selectedInternalRecordVersion(), false);
});
internalRecordName.addEventListener("input", () => {
  const name = internalRecordName.value.trim();
  const lines = readInternalContentEditor();
  const previous = internalEditorVersionLine;
  let next = lines;
  if (previous && lines[0] === previous) next = name ? [name, ...lines.slice(1)] : lines.slice(1);
  else if (name && lines[0] !== name) next = [name, ...lines];
  writeInternalContentEditor(next);
});
internalContentSelect.addEventListener("change", () => {
  showInternalContentHint("");
  const content = selectedInternalContent();
  writeInternalContentEditor(internalContentEditorLines(content));
});
internalContentEditor.addEventListener("input", () => {
  internalContentEditor.classList.toggle("is-placeholder", readInternalContentEditor().length === 0);
  showInternalContentHint("");
});
internalForm.addEventListener("input", () => showInternalHint(""));
internalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveInternalRelease();
});
internalCancelBtn.addEventListener("click", closeInternalModal);
internalModal.addEventListener("click", (event) => {
  if (event.target === internalModal) closeInternalModal();
});
internalRowCancel.addEventListener("click", closeInternalRow);
internalRowMask.addEventListener("click", (event) => {
  if (event.target === internalRowMask) closeInternalRow();
});
internalRowForm.addEventListener("input", () => showInternalRowHint(""));
internalRowForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveInternalRow();
});
betaListClose.addEventListener("click", hideBetaList);
betaWhitelistBtn.addEventListener("click", openBetaWhitelist);
betaWhitelistCancel.addEventListener("click", closeBetaWhitelist);
betaWhitelistMask.addEventListener("click", (event) => {
  if (event.target === betaWhitelistMask) closeBetaWhitelist();
});
betaWhitelistForm.addEventListener("input", () => showWhitelistHint(""));
betaWhitelistForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveBetaWhitelist();
});
betaAddBtn.addEventListener("click", () => openBetaModal());

betaTableBody.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const id = Number(button.dataset.id);
  const item = betaReleases.find((row) => row.id === id);
  if (!item) return;
  if (button.dataset.action === "audience") openBetaModal("audience", item);
  if (button.dataset.action === "config") openBetaModal("config", item);
  if (button.dataset.action === "delete") openConfirmModal(id, "beta");
});

betaListMask.addEventListener("click", (event) => {
  if (event.target === betaListMask) hideBetaList();
});

betaForm.elements.versionId.addEventListener("change", () => {
  showBetaHint("");
  syncBetaDerived();
});

betaForm.addEventListener("input", () => {
  showBetaHint("");
  syncBetaAudience();
  syncBetaAssets();
  syncUpdatePreviews();
});

updateForm.addEventListener("input", () => showUpdateHint(""));

updateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveUpdateContent();
});

updateCancelBtn.addEventListener("click", closeUpdateModal);

updateModal.addEventListener("click", (event) => {
  if (event.target === updateModal) closeUpdateModal();
});

updateTableBody.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const id = Number(button.dataset.id);
  const item = updateContents.find((row) => row.id === id);
  if (!item) return;
  if (button.dataset.action === "edit") openUpdateModal(item);
  if (button.dataset.action === "delete") openConfirmModal(id, "update");
});

updateForm.addEventListener("click", (event) => {
  const updateUpload = event.target.closest("[data-update-upload]");
  if (updateUpload) {
    updateUpload.parentElement.querySelector("[data-update-file]").click();
    return;
  }
  const updateAction = event.target.closest("[data-update-action]");
  if (updateAction) handleBetaUpdateAction(updateAction);
});

updateForm.addEventListener("change", (event) => {
  const updateFile = event.target.closest("[data-update-file]");
  if (updateFile) readBetaUpdateFile(updateFile);
});

betaCrowdAdd.addEventListener("click", () => {
  const captured = captureBetaUpdates();
  betaDefaultUpdates = captured.defaults;
  betaCrowdUpdates = captured.crowds;
  betaCrowdUpdates.push(blankCrowdUpdate());
  renderBetaUpdates({ crowd: betaCrowdUpdates.length - 1 });
  betaCrowdUpdatesEl.scrollIntoView({ block: "nearest" });
});

betaConfig.addEventListener("click", (event) => {
  const button = event.target.closest("[data-upload]");
  if (button) {
    betaForm.querySelector(`[data-file="${button.dataset.upload}"]`).click();
    return;
  }
  const updateUpload = event.target.closest("[data-update-upload]");
  if (updateUpload) {
    updateUpload.parentElement.querySelector("[data-update-file]").click();
    return;
  }
  const updateAction = event.target.closest("[data-update-action]");
  if (updateAction) {
    handleBetaUpdateAction(updateAction);
    return;
  }
  const crowdAction = event.target.closest("[data-crowd-action]");
  if (crowdAction) handleBetaCrowdAction(crowdAction);
});

betaConfig.addEventListener("change", (event) => {
  const updateFile = event.target.closest("[data-update-file]");
  if (updateFile) {
    readBetaUpdateFile(updateFile);
    return;
  }
  const fileInput = event.target.closest("[data-file]");
  if (!fileInput || !fileInput.files) return;
  const file = fileInput.files[0];
  const input = betaForm.elements[fileInput.dataset.file];
  if (!file || !input) return;
  if (!file.type.startsWith("image/")) {
    showBetaHint("请上传图片");
    fileInput.value = "";
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    input.value = file.name;
    input.dataset.previewUrl = String(reader.result || "");
    input.dataset.previewFor = file.name;
    syncBetaAssets();
  };
  reader.readAsDataURL(file);
});

betaCancelBtn.addEventListener("click", closeBetaModal);

betaModal.addEventListener("click", (event) => {
  if (event.target === betaModal) closeBetaModal();
});

let betaDefaultUpdates = [];
let betaCrowdUpdates = [];

function showUpdateHint(message) {
  updateHint.textContent = message;
  updateHint.hidden = !message;
}

function renderUpdateList() {
  if (updateContents.length === 0) {
    updateTableBody.innerHTML = '<tr><td class="empty" colspan="5">暂无更新内容</td></tr>';
    return;
  }
  updateTableBody.innerHTML = updateContents.map((item) => {
    const online = item.mode === "online";
    return `<tr>
      <td>${escapeHtml(item.major)}</td>
      <td>${escapeHtml(item.createdAt)}</td>
      <td>${escapeHtml(item.updatedAt)}</td>
      <td><span class="update-mode ${online ? "is-online" : "is-preview"}">${online ? "上线" : "预览"}</span></td>
      <td class="action-cell">
        <button class="btn-link" type="button" data-action="edit" data-id="${item.id}">编辑</button>
        <button class="btn-link btn-link-danger" type="button" data-action="delete" data-id="${item.id}">删除</button>
      </td>
    </tr>`;
  }).join("");
}

function openUpdateModal(record) {
  updateForm.reset();
  showUpdateHint("");
  if (record) {
    editingUpdateId = record.id;
    updateModalTitle.textContent = "编辑更新内容";
    updateForm.elements.major.value = record.major;
    updateForm.elements.mode.value = record.mode === "online" ? "online" : "preview";
    resetDefaultUpdates({ updates: record.items });
  } else {
    editingUpdateId = null;
    updateModalTitle.textContent = "新增更新内容";
    updateForm.elements.mode.value = "preview";
    resetDefaultUpdates(null);
  }
  updateModal.hidden = false;
  updateForm.elements.major.focus();
}

function closeUpdateModal() {
  editingUpdateId = null;
  showUpdateHint("");
  updateModal.hidden = true;
}

function saveUpdateContent() {
  const major = updateForm.elements.major.value.trim();
  const mode = updateForm.elements.mode.value === "online" ? "online" : "preview";
  if (!major) {
    showUpdateHint("请填写主版本");
    updateForm.elements.major.focus();
    return;
  }
  const items = readDefaultUpdates();
  if (!items) return;
  const now = betaStamp();
  if (editingUpdateId) {
    const index = updateContents.findIndex((item) => item.id === editingUpdateId);
    if (index >= 0) {
      updateContents[index] = {
        ...updateContents[index],
        major,
        mode,
        items,
        updatedAt: now,
      };
    }
    showBetaToast("已保存更新内容");
  } else {
    updateContents.unshift({
      id: nextUpdateId,
      major,
      createdAt: now,
      updatedAt: now,
      mode,
      items,
    });
    nextUpdateId += 1;
    showBetaToast(`已新增更新内容：${major}`);
  }
  closeUpdateModal();
  renderUpdateList();
}

const BETA_ICON = {
  add: `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3.2v9.6M3.2 8h9.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  up: `<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 3.2 13 11H3L8 3.2z"/></svg>`,
  down: `<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 12.8 3 5h10L8 12.8z"/></svg>`,
  trash: `<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M6.2 2h3.6l.4 1.1H13v1.3H3V3.1h2.8L6.2 2zM4.3 5.2h7.4l-.55 8H4.85l-.55-8z"/></svg>`,
};

function blankUpdate() {
  return { text: "", image: "", preview: "" };
}

function blankCrowdUpdate() {
  return { crowdId: "", items: [] };
}

function copyUpdates(list) {
  return (list || []).map((item) => ({
    text: item.text || "",
    image: item.image || "",
    preview: item.preview || "",
  }));
}

function betaUpdateButton(action, label, className, icon, scope, index, groupAttr) {
  return `<button class="beta-icon-btn ${className}" type="button" data-update-action="${action}" data-scope="${scope}" data-index="${index}"${groupAttr} aria-label="${label}">${icon}</button>`;
}

function betaUpdateRowHtml(item, scope, groupIndex, index) {
  const groupAttr = scope === "crowd" ? ` data-group="${groupIndex}"` : "";
  return `<div class="beta-update-row">
    <input class="beta-update-text" type="text" value="${escapeHtml(item.text || "")}" />
    <div class="beta-update-image">
      <div class="beta-upload-line">
        <input class="beta-update-path" type="text" value="${escapeHtml(item.image || "")}" />
        <button class="btn-link" type="button" data-update-upload>上传</button>
        <input type="file" accept="image/*" hidden data-update-file />
      </div>
      <img class="beta-upload-preview" alt="" hidden />
    </div>
    <div class="beta-update-actions">
      ${betaUpdateButton("insert", "新增一行", "is-add", BETA_ICON.add, scope, index, groupAttr)}
      ${betaUpdateButton("up", "上移", "", BETA_ICON.up, scope, index, groupAttr)}
      ${betaUpdateButton("down", "下移", "", BETA_ICON.down, scope, index, groupAttr)}
      ${betaUpdateButton("delete", "删除", "is-delete", BETA_ICON.trash, scope, index, groupAttr)}
    </div>
  </div>`;
}

function bindUpdatePreviews(root, items) {
  [...root.querySelectorAll(".beta-update-row")].forEach((row, index) => {
    const input = row.querySelector(".beta-update-path");
    const item = items[index];
    if (!item || !item.preview) return;
    input.dataset.previewUrl = item.preview;
    input.dataset.previewFor = (item.image || "").trim();
  });
}

function renderDefaultSheet() {
  betaDefaultSheet.innerHTML = `<div class="beta-update-bar"><button class="beta-icon-btn is-add" type="button" data-update-action="add" data-scope="default" aria-label="新增更新内容">${BETA_ICON.add}</button></div><div class="beta-update-rows">${betaDefaultUpdates.map((item, index) => betaUpdateRowHtml(item, "default", 0, index)).join("")}</div>`;
  bindUpdatePreviews(betaDefaultSheet, betaDefaultUpdates);
}

function renderCrowdList(focus) {
  betaCrowdList.innerHTML = betaCrowdUpdates.map((group, groupIndex) => `<div class="beta-crowd-group">
    <div class="beta-crowd-tools">
      <button class="beta-icon-btn is-add" type="button" data-crowd-action="add" data-group="${groupIndex}" aria-label="新增人群定制">${BETA_ICON.add}</button>
      <button class="beta-icon-btn is-remove" type="button" data-crowd-action="delete" data-group="${groupIndex}" aria-label="删除人群定制">${BETA_ICON.trash}</button>
      <button class="beta-icon-btn" type="button" data-crowd-action="up" data-group="${groupIndex}" aria-label="上移">${BETA_ICON.up}</button>
      <button class="beta-icon-btn" type="button" data-crowd-action="down" data-group="${groupIndex}" aria-label="下移">${BETA_ICON.down}</button>
    </div>
    <div>
      <div class="beta-update-bar">
        <label class="beta-crowd-id-field">人群ID：<input class="beta-crowd-id" type="text" value="${escapeHtml(group.crowdId || "")}" /></label>
        <button class="beta-icon-btn is-add" type="button" data-update-action="add" data-scope="crowd" data-group="${groupIndex}" aria-label="新增更新内容">${BETA_ICON.add}</button>
      </div>
      <div class="beta-update-rows">${(group.items || []).map((item, index) => betaUpdateRowHtml(item, "crowd", groupIndex, index)).join("")}</div>
    </div>
  </div>`).join("");
  betaCrowdUpdates.forEach((group, groupIndex) => {
    const groupEl = betaCrowdList.querySelectorAll(".beta-crowd-group")[groupIndex];
    if (groupEl) bindUpdatePreviews(groupEl, group.items || []);
  });
  betaCrowdUpdatesEl.hidden = betaCrowdUpdates.length === 0;
  if (!focus || focus.crowd == null) return;
  betaCrowdList.querySelectorAll(".beta-crowd-id")[focus.crowd]?.focus();
}

function renderBetaUpdates(focus) {
  const crowdOnly = focus && (focus.scope === "crowd" || focus.crowd != null);
  const defaultOnly = focus && focus.scope === "default";
  if (!crowdOnly) renderDefaultSheet();
  if (!defaultOnly) renderCrowdList();
  syncUpdatePreviews();
  if (!focus) return;
  if (focus.crowd != null) {
    betaCrowdList.querySelectorAll(".beta-crowd-id")[focus.crowd]?.focus();
    return;
  }
  const root = focus.scope === "crowd"
    ? betaCrowdList.querySelectorAll(".beta-crowd-group")[focus.groupIndex]
    : betaDefaultSheet;
  root?.querySelectorAll(".beta-update-row")[focus.index]?.querySelector(".beta-update-text")?.focus();
}

function resetDefaultUpdates(item) {
  betaDefaultUpdates = item && Array.isArray(item.updates) && item.updates.length ? copyUpdates(item.updates) : [blankUpdate()];
  renderDefaultSheet();
  syncUpdatePreviews();
}

function resetCrowdUpdates(item) {
  betaCrowdUpdates = item && Array.isArray(item.crowdUpdates)
    ? item.crowdUpdates.map((group) => ({
      crowdId: group.crowdId || "",
      items: copyUpdates(group.items),
    }))
    : [];
  renderCrowdList();
  syncUpdatePreviews();
}

function readUpdateRow(row) {
  const input = row.querySelector(".beta-update-path");
  const image = input.value;
  return {
    text: row.querySelector(".beta-update-text").value,
    image,
    preview: input.dataset.previewUrl && input.dataset.previewFor === image.trim() ? input.dataset.previewUrl : "",
  };
}

function captureBetaUpdates() {
  return {
    defaults: [...betaDefaultSheet.querySelectorAll(".beta-update-row")].map(readUpdateRow),
    crowds: [...betaCrowdList.querySelectorAll(".beta-crowd-group")].map((group) => ({
      crowdId: group.querySelector(".beta-crowd-id").value,
      items: [...group.querySelectorAll(".beta-update-row")].map(readUpdateRow),
    })),
  };
}

function syncUpdatePreviews() {
  document.querySelectorAll("#updateModal .beta-update-path, #betaConfig .beta-update-path").forEach((input) => {
    const preview = input.closest(".beta-update-image").querySelector(".beta-upload-preview");
    const path = input.value.trim();
    const src = input.dataset.previewFor === path ? input.dataset.previewUrl : "";
    const display = src || (/^(https?:|data:|blob:)/.test(path) ? path : "");
    preview.hidden = !display;
    if (display) preview.src = display;
    else preview.removeAttribute("src");
  });
}

function readBetaUpdateFile(fileInput) {
  const file = fileInput.files && fileInput.files[0];
  const input = fileInput.parentElement.querySelector(".beta-update-path");
  if (!file || !input) return;
  if (!file.type.startsWith("image/")) {
    (fileInput.closest("#betaConfig") ? showBetaHint : showUpdateHint)("请上传图片");
    fileInput.value = "";
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    input.value = file.name;
    input.dataset.previewUrl = String(reader.result || "");
    input.dataset.previewFor = file.name;
    syncUpdatePreviews();
  };
  reader.readAsDataURL(file);
}

function handleBetaUpdateAction(button) {
  const captured = captureBetaUpdates();
  betaDefaultUpdates = captured.defaults;
  betaCrowdUpdates = captured.crowds;
  const scope = button.dataset.scope;
  const groupIndex = Number(button.dataset.group);
  const index = Number(button.dataset.index);
  const list = scope === "crowd" ? betaCrowdUpdates[groupIndex].items : betaDefaultUpdates;
  const action = button.dataset.updateAction;
  if (action === "add") {
    list.push(blankUpdate());
    renderBetaUpdates({ scope, groupIndex, index: list.length - 1 });
    return;
  }
  if (action === "insert") {
    list.splice(index + 1, 0, blankUpdate());
    renderBetaUpdates({ scope, groupIndex, index: index + 1 });
    return;
  }
  if (action === "delete") {
    list.splice(index, 1);
    renderBetaUpdates({ scope, groupIndex });
    return;
  }
  if (action === "up" && index > 0) {
    [list[index - 1], list[index]] = [list[index], list[index - 1]];
    renderBetaUpdates({ scope, groupIndex, index: index - 1 });
    return;
  }
  if (action === "down" && index < list.length - 1) {
    [list[index + 1], list[index]] = [list[index], list[index + 1]];
    renderBetaUpdates({ scope, groupIndex, index: index + 1 });
  }
}

function handleBetaCrowdAction(button) {
  const captured = captureBetaUpdates();
  betaDefaultUpdates = captured.defaults;
  betaCrowdUpdates = captured.crowds;
  const index = Number(button.dataset.group);
  const action = button.dataset.crowdAction;
  if (action === "add") {
    betaCrowdUpdates.splice(index + 1, 0, blankCrowdUpdate());
    renderBetaUpdates({ crowd: index + 1 });
    return;
  }
  if (action === "delete") {
    betaCrowdUpdates.splice(index, 1);
    renderBetaUpdates();
    return;
  }
  if (action === "up" && index > 0) {
    [betaCrowdUpdates[index - 1], betaCrowdUpdates[index]] = [betaCrowdUpdates[index], betaCrowdUpdates[index - 1]];
    renderBetaUpdates({ crowd: index - 1 });
    return;
  }
  if (action === "down" && index < betaCrowdUpdates.length - 1) {
    [betaCrowdUpdates[index + 1], betaCrowdUpdates[index]] = [betaCrowdUpdates[index], betaCrowdUpdates[index + 1]];
    renderBetaUpdates({ crowd: index + 1 });
  }
}

function readDefaultUpdates() {
  const updates = captureBetaUpdates().defaults
    .filter((item) => item.text.trim() || item.image.trim())
    .map((item) => ({ ...item, text: item.text.trim(), image: item.image.trim() }));
  if (!updates.length || updates.some((item) => !item.text)) {
    showUpdateHint("请填写图文");
    const empty = [...betaDefaultSheet.querySelectorAll(".beta-update-row")].find((row) => !row.querySelector(".beta-update-text").value.trim());
    (empty ? empty.querySelector(".beta-update-text") : betaDefaultSheet.querySelector("[data-update-action='add']")).focus();
    return null;
  }
  return updates;
}

function readCrowdUpdates() {
  const crowdUpdates = [];
  for (const [index, group] of captureBetaUpdates().crowds.entries()) {
    const groupEl = betaCrowdList.querySelectorAll(".beta-crowd-group")[index];
    const crowdId = group.crowdId.trim();
    if (!crowdId) {
      showBetaHint("请填写人群ID");
      groupEl.querySelector(".beta-crowd-id").focus();
      return null;
    }
    const items = group.items
      .filter((item) => item.text.trim() || item.image.trim())
      .map((item) => ({ ...item, text: item.text.trim(), image: item.image.trim() }));
    if (!items.length || items.some((item) => !item.text)) {
      showBetaHint("请填写人群定制的更新内容");
      const empty = [...groupEl.querySelectorAll(".beta-update-row")].find((row) => !row.querySelector(".beta-update-text").value.trim());
      (empty ? empty.querySelector(".beta-update-text") : groupEl.querySelector("[data-update-action='add']")).focus();
      return null;
    }
    crowdUpdates.push({ crowdId, items });
  }
  return crowdUpdates;
}

function readBetaConfig() {
  const record = versionRecords.find((item) => String(item.id) === betaForm.elements.versionId.value);
  const start = betaForm.elements.start.value;
  const end = betaForm.elements.end.value;
  const intro = betaForm.elements.intro.value.trim();
  const popupTitle = betaForm.elements.popupTitle.value.trim();
  const appName = betaForm.elements.appName.value.trim();
  if (!record) {
    showBetaHint("请选择游戏盒版本");
    betaForm.elements.versionId.focus();
    return null;
  }
  if (!popupTitle) {
    showBetaHint("请填写弹窗标题");
    betaForm.elements.popupTitle.focus();
    return null;
  }
  if (!appName) {
    showBetaHint("请填写应用名称");
    betaForm.elements.appName.focus();
    return null;
  }
  if (!start || !end) {
    showBetaHint("请填写开始时间和结束时间");
    betaForm.elements[start ? "end" : "start"].focus();
    return null;
  }
  if (end <= start) {
    showBetaHint("结束时间需晚于开始时间");
    betaForm.elements.end.focus();
    return null;
  }
  if (!intro) {
    showBetaHint("请填写一句话介绍");
    betaForm.elements.intro.focus();
    return null;
  }
  const crowdUpdates = readCrowdUpdates();
  if (!crowdUpdates) return null;
  return {
    versionId: record.id,
    popupTitle,
    appName,
    version: record.name,
    downloadLink: record.link,
    start: start.replace("T", " "),
    end: end.replace("T", " "),
    intro,
    publishStatus: betaForm.elements.publishStatus.value === "published" ? "published" : "preview",
    entryScope: betaForm.elements.entryScope.value === "selected" ? "selected" : "all",
    homePopup: betaForm.elements.homePopup.value === "no" ? "no" : "yes",
    entryCopy: betaForm.elements.entryCopy.value.trim(),
    entryBg: betaForm.elements.entryBg.value.trim(),
    entryBgPreview: betaAssetPreview(betaForm.elements.entryBg),
    entryIcon: betaForm.elements.entryIcon.value.trim(),
    entryIconPreview: betaAssetPreview(betaForm.elements.entryIcon),
    updateContentId: Number(betaForm.elements.updateContentId.value) || null,
    crowdUpdates,
  };
}

function clearBetaAssets() {
  ["entryBg", "entryIcon"].forEach((name) => {
    const input = betaForm.elements[name];
    delete input.dataset.previewUrl;
    delete input.dataset.previewFor;
    const fileInput = betaForm.querySelector(`[data-file="${name}"]`);
    if (fileInput) fileInput.value = "";
  });
}

function setBetaAsset(input, path, preview) {
  input.value = path || "";
  if (preview) {
    input.dataset.previewUrl = preview;
    input.dataset.previewFor = path || "";
  }
}

function betaAssetPreview(input) {
  const path = input.value.trim();
  return input.dataset.previewUrl && input.dataset.previewFor === path ? input.dataset.previewUrl : "";
}

function syncBetaAssets() {
  ["entryBg", "entryIcon"].forEach((name) => {
    const input = betaForm.elements[name];
    const preview = betaForm.querySelector(`[data-preview="${name}"]`);
    const path = input.value.trim();
    const src = input.dataset.previewFor === path ? input.dataset.previewUrl : "";
    const display = src || (/^(https?:|data:|blob:)/.test(path) ? path : "");
    preview.hidden = !display;
    if (display) preview.src = display;
    else preview.removeAttribute("src");
  });
}

function readBetaAudience() {
  const invalidTier = BETA_TIERS.find(invalidBetaPercent);
  if (invalidTier) {
    showBetaHint(`请填写${invalidTier.label}百分比，范围为 0-100 的整数`);
    betaForm.elements[`${invalidTier.key}Percent`].focus();
    return null;
  }
  const data = {
    crowd: betaForm.elements.crowd.value.trim(),
    targetVersions: betaForm.elements.targetVersions.value.trim(),
  };
  BETA_TIERS.forEach((tier) => {
    data[`${tier.key}Percent`] = Number(betaForm.elements[`${tier.key}Percent`].value);
  });
  return data;
}

betaForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const config = betaMode === "audience" ? null : readBetaConfig();
  if (betaMode !== "audience" && !config) return;
  const audience = betaMode === "config" ? null : readBetaAudience();
  if (betaMode !== "config" && !audience) return;
  const updatedAt = betaStamp();
  if (betaMode === "create") {
    betaReleases.unshift({
      id: nextBetaId,
      size: "—",
      updatedAt,
      ...config,
      ...audience,
    });
    nextBetaId += 1;
    closeBetaModal();
    renderBetaList();
    showBetaToast(`已配置公测：${config.popupTitle}`);
    return;
  }
  const item = betaReleases.find((row) => row.id === editingBetaId);
  if (!item) {
    closeBetaModal();
    return;
  }
  const savedMode = betaMode;
  Object.assign(item, config || {}, audience || {}, { updatedAt });
  closeBetaModal();
  renderBetaList();
  showBetaToast(savedMode === "audience" ? "已保存推送人群" : "已保存公测配置");
});

parseBtn.addEventListener("click", () => {
  const link = versionForm.elements.link.value.trim();
  if (!link) {
    parseHint.hidden = false;
    versionForm.elements.link.focus();
    return;
  }

  parseHint.hidden = true;
  versionForm.elements.major.value = MOCK_PARSED.major;
  versionForm.elements.name.value = MOCK_PARSED.name;
  versionForm.elements.code.value = MOCK_PARSED.code;
});

versionForm.elements.link.addEventListener("input", () => {
  parseHint.hidden = true;
});

versionCancelBtn.addEventListener("click", closeVersionModal);

versionModal.addEventListener("click", (event) => {
  if (event.target === versionModal) closeVersionModal();
});

versionTableBody.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const id = Number(button.dataset.id);
  const record = versionRecords.find((item) => item.id === id);
  if (!record) return;
  if (button.dataset.action === "edit") openVersionModal(record);
  if (button.dataset.action === "delete") openConfirmModal(id);
});

confirmCancelBtn.addEventListener("click", closeConfirmModal);

confirmModal.addEventListener("click", (event) => {
  if (event.target === confirmModal) closeConfirmModal();
});

confirmOkBtn.addEventListener("click", () => {
  if (pendingDeleteTarget === "plugin") {
    const index = pluginRecords.findIndex((item) => item.id === pendingDeleteId);
    if (index >= 0) pluginRecords.splice(index, 1);
    closeConfirmModal();
    renderPluginRecords();
    return;
  }

  if (pendingDeleteTarget === "beta") {
    const index = betaReleases.findIndex((item) => item.id === pendingDeleteId);
    if (index >= 0) betaReleases.splice(index, 1);
    closeConfirmModal();
    renderBetaList();
    return;
  }

  if (pendingDeleteTarget === "internal") {
    const index = internalReleases.findIndex((item) => item.id === pendingDeleteId);
    if (index >= 0) internalReleases.splice(index, 1);
    closeConfirmModal();
    renderInternalList();
    return;
  }

  if (pendingDeleteTarget === "update") {
    const index = updateContents.findIndex((item) => item.id === pendingDeleteId);
    if (index >= 0) updateContents.splice(index, 1);
    closeConfirmModal();
    renderUpdateList();
    return;
  }

  const index = versionRecords.findIndex((item) => item.id === pendingDeleteId);
  if (index >= 0) versionRecords.splice(index, 1);
  closeConfirmModal();
  renderVersionLinks();
});

versionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const record = readVersionForm();
  if (!record.link || !record.major || !record.name || !record.code || !record.date || !record.channel) return;

  if (editingId) {
    const index = versionRecords.findIndex((item) => item.id === editingId);
    versionRecords[index] = {
      ...versionRecords[index],
      ...record,
    };
  } else {
    versionRecords.unshift({
      ...record,
      id: nextRecordId,
      publisher: CURRENT_PUBLISHER,
    });
    nextRecordId += 1;
  }

  renderVersionLinks();
  closeVersionModal();
});

pluginForm.elements.type.addEventListener("change", syncPluginFormLabels);

pluginCancelBtn.addEventListener("click", closePluginModal);

pluginModal.addEventListener("click", (event) => {
  if (event.target === pluginModal) closePluginModal();
});

pluginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const record = {
    type: pluginForm.elements.type.value,
    version: pluginForm.elements.version.value.trim(),
    clientVersion: pluginForm.elements.clientVersion.value.trim(),
    date: pluginForm.elements.date.value,
    note: pluginForm.elements.note.value.trim(),
    link: pluginForm.elements.link.value.trim(),
  };
  if (!PLUGIN_TYPES.includes(record.type) || !record.version || !record.clientVersion || !record.date || !record.link) return;

  if (editingPluginId) {
    const index = pluginRecords.findIndex((item) => item.id === editingPluginId);
    pluginRecords[index] = {
      ...pluginRecords[index],
      ...record,
    };
  } else {
    pluginRecords.unshift({
      ...record,
      id: nextPluginId,
      publisher: CURRENT_PUBLISHER,
    });
    nextPluginId += 1;
  }
  activePluginType = record.type;
  renderPluginRecords();
  closePluginModal();
});

pluginTableBody.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const id = Number(button.dataset.id);
  const record = pluginRecords.find((item) => item.id === id);
  if (!record) return;
  if (button.dataset.action === "edit") openPluginModal(record);
  if (button.dataset.action === "delete") openConfirmModal(id, "plugin");
});

pluginSheetBar.addEventListener("click", (event) => {
  const tab = event.target.closest(".sheet-tab");
  if (!tab || !PLUGIN_TYPES.includes(tab.dataset.type)) return;
  activePluginType = tab.dataset.type;
  renderPluginRecords();
});

renderVersionLinks();
renderPluginRecords();
renderUpdateList();
resetCrowdUpdates(null);
