const pages = {
  version: "游戏盒版本",
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
let activePluginType = PLUGIN_TYPES[0];

const menuGroup = document.getElementById("releaseMenu");
const parentButton = menuGroup.querySelector(".menu-parent");
const pageTitle = document.getElementById("pageTitle");
const versionPage = document.getElementById("versionPage");
const pluginPage = document.getElementById("pluginPage");
const versionTableBody = document.getElementById("versionTableBody");
const addBtn = document.getElementById("addBtn");
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
    ? ["帖子模版版本号", "生效最低版本号", "发布日期", "发布人员", "模版链接", "发布说明", "操作"]
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

function showPage(page) {
  currentPage = page;
  pageTitle.textContent = pages[page];
  versionPage.hidden = page !== "version";
  pluginPage.hidden = page !== "plugin";
  hotfixBtn.hidden = page !== "version";
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

function openConfirmModal(id, target = "version") {
  pendingDeleteId = id;
  pendingDeleteTarget = target;
  confirmText.textContent = target === "plugin"
    ? "确定要删除这条插件记录吗？删除后不可恢复。"
    : "确定要删除这条版本记录吗？删除后不可恢复。";
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
