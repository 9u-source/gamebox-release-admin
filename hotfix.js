"use strict";

const hotfixMask = document.getElementById("hotfixMask");
const hotfixDialog = document.getElementById("hotfixDialog");
const hotfixDialogTitle = document.getElementById("hotfixDialogTitle");
const hotfixDialogBody = document.getElementById("hotfixDialogBody");
const hotfixDialogHelp = document.getElementById("hotfixDialogHelp");
const hotfixDialogActions = document.getElementById("hotfixDialogActions");
const hotfixPicker = document.getElementById("hotfixPicker");
const hotfixPickerTitle = document.getElementById("hotfixPickerTitle");
const hotfixPickerBody = document.getElementById("hotfixPickerBody");
const hotfixPickerCount = document.getElementById("hotfixPickerCount");
const hotfixToast = document.getElementById("hotfixToast");
const hotfixRows = document.getElementById("hotfixRows");
const hotfixSearch = document.getElementById("hotfixSearch");

const baseVersions = ["9.0.1", "9.0.2", "9.0.3", "9.1.0", "9.1.1"];
const baseCatalog = [
  { version: "9.7.0.36", main: "V9.7", plugin: 2401, hostPlugin: 1282, fusion: "融合版", publisher: "刘诗锦", date: "2026-10-23", channel: "—", note: "热修复包（base9.7.0.30）：修复 bug", kind: "patch" },
  { version: "9.7.0.35", main: "V9.7", plugin: 2401, hostPlugin: 1282, fusion: "融合版", publisher: "刘诗锦", date: "2026-10-22", channel: "—", note: "热修复包（base9.7.0.30）：修复 bug", kind: "patch" },
  { version: "9.7.0.30", main: "V9.7", plugin: 2401, hostPlugin: 1282, fusion: "融合版", publisher: "刘诗锦", date: "2026-10-20", channel: "gongce4399", note: "首次发布公测", kind: "full" },
  ...Array.from({ length: 28 }, (_, i) => ({
    version: `9.${6 - Math.floor(i / 7)}.0.${58 - (i % 7) * 5}`,
    main: `V9.${6 - Math.floor(i / 7)}`,
    plugin: 2390 - i,
    hostPlugin: 1276 - i,
    fusion: i % 3 === 0 ? "线上版" : "融合版",
    publisher: "运营管理员",
    date: `2026-09-${String(28 - (i % 25)).padStart(2, "0")}`,
    channel: i % 2 ? "wap4399" : "gongce4399",
    note: i % 2 ? "完整基准包，渠道发布" : "完整基准包，公测发布",
    kind: "full",
  })),
  ...baseVersions.map((version) => ({
    version,
    main: `V${version.split(".").slice(0, 2).join(".")}`,
    plugin: 2301,
    hostPlugin: 1200,
    fusion: "融合版",
    publisher: "运营管理员",
    date: "2026-08-15",
    channel: "gongce4399",
    note: "历史完整基准包",
    kind: "full",
  })),
];

const statusNames = { running: "处理中", done: "已完成", failed: "部分失败" };
const stageNames = ["生成补丁中", "上传文件中", "等待解析回调", "写入版本历史中"];
let nextSource = 100;
let nextDownload = 30840;
let nextVersion = 18620;
let listPage = 1;
let pageSize = 5;
let filters = { keyword: "", target: "", status: "" };
let dialogType = "";
let activeId = null;
let toastTimer;
let retrySelection = new Set();
let pickerRow = null;
let pickerSelection = new Set();
let pickerPage = 1;
let pickerFilters = { main: "", version: "", kind: "full" };

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

function makeSource(target, bases, stage = 4) {
  return {
    key: ++nextSource,
    target,
    url: `https://packages.example.com/4399Game_${target}.apk`,
    bases: [...bases],
    children: bases.map((base) => ({
      base,
      stage,
      failed: false,
      downloadId: stage >= 2 ? ++nextDownload : null,
      versionId: stage >= 4 ? ++nextVersion : null,
    })),
  };
}

function makeTask(id, name, state, sources, extra = {}) {
  return {
    id,
    name,
    state,
    sources,
    gray: "ratio",
    ratio: 10,
    wifi: true,
    udids: "",
    reboot: false,
    clear: 3,
    description: "",
    date: `2026-10-${id >= 1027 ? "26" : "25"} 10:30:00`,
    ...extra,
  };
}

const tasks = [
  makeTask(1028, "9.0 / 9.1 登录与首页修复", "running", [
    makeSource("9.0.4", ["9.0.1", "9.0.2", "9.0.3"], 2),
    makeSource("9.1.2", ["9.1.0", "9.1.1"], 1),
  ]),
  makeTask(1027, "双版本启动稳定性修复", "ready", [
    makeSource("9.0.4", ["9.0.1", "9.0.2", "9.0.3"]),
    makeSource("9.1.2", ["9.1.0", "9.1.1"]),
  ], { ratio: 5, description: "修复部分设备启动异常，优化登录稳定性。" }),
  makeTask(1026, "9.0.3 下载模块修复", "published", [makeSource("9.0.3", ["9.0.1", "9.0.2"])], { gray: "all", wifi: false }),
  makeTask(1025, "双版本支付回调修复", "failed", [
    makeSource("9.0.4", ["9.0.1", "9.0.2"]),
    makeSource("9.1.2", ["9.1.0", "9.1.1"], 1),
  ]),
  makeTask(1024, "9.1.1 页面显示修复", "published", [makeSource("9.1.1", ["9.1.0"])], { ratio: 20 }),
  makeTask(1023, "9.0.2 消息通知修复", "published", [makeSource("9.0.2", ["9.0.1"])], { gray: "all", wifi: false }),
  makeTask(1022, "9.0.3 分享功能修复", "published", [makeSource("9.0.3", ["9.0.1", "9.0.2"])]),
];

const failedExample = tasks.find((task) => task.id === 1025);
Object.assign(failedExample.sources[0].children[0], { stage: 1, failed: true, downloadId: null, versionId: null });
failedExample.sources[1].children.forEach((child) => {
  child.failed = true;
});

const childrenOf = (task) => task.sources.flatMap((source) => source.children);
const getTask = (id) => tasks.find((task) => task.id === Number(id));

function processingState(task) {
  const children = childrenOf(task);
  if (children.some((child) => child.failed)) return "failed";
  return children.every((child) => child.stage === 4) ? "done" : "running";
}

function statusTag(task) {
  const state = processingState(task);
  const tone = state === "done" ? "done" : state;
  return `<span class="tag tag-${tone}">${statusNames[state]}</span>`;
}

function showToast(message) {
  clearTimeout(toastTimer);
  hotfixToast.textContent = message;
  hotfixToast.hidden = false;
  toastTimer = setTimeout(() => {
    hotfixToast.hidden = true;
  }, 3500);
}

function setInert(element, inert) {
  element.inert = inert;
  if (inert) element.setAttribute("aria-hidden", "true");
  else element.removeAttribute("aria-hidden");
}

function renderList() {
  const keyword = filters.keyword.toLowerCase();
  const list = tasks.filter((task) => (
    (!keyword || `${task.id} ${task.name}`.toLowerCase().includes(keyword))
    && (!filters.target || task.sources.some((source) => source.target.includes(filters.target)))
    && (!filters.status || processingState(task) === filters.status)
  ));
  const pages = Math.max(1, Math.ceil(list.length / pageSize));
  listPage = Math.min(Math.max(1, listPage), pages);
  const visible = list.slice((listPage - 1) * pageSize, listPage * pageSize);
  hotfixRows.innerHTML = visible.map((task) => {
    const children = childrenOf(task);
    const ready = children.filter((child) => child.stage === 4).length;
    const width = children.length ? (ready / children.length) * 100 : 0;
    return `<tr>
      <td>${task.id}</td>
      <td><button class="btn-link" type="button" data-action="detail" data-id="${task.id}">${esc(task.name)}</button></td>
      <td>${task.sources.map((source) => `<div class="hotfix-source"><b>${esc(source.target)}</b><span>基准 ${source.bases.map(esc).join("、")}</span></div>`).join("")}</td>
      <td class="hotfix-progress-cell">${ready} / ${children.length}<div class="hotfix-progress"><span style="width:${width}%"></span></div></td>
      <td>${statusTag(task)}</td>
      <td>${esc(task.date)}</td>
      <td class="action-cell">
        <button class="btn-link" type="button" data-action="detail" data-id="${task.id}">补丁包管理</button>
        <button class="btn-link" type="button" data-action="config" data-id="${task.id}">配置管理</button>
      </td>
    </tr>`;
  }).join("") || '<tr><td class="empty" colspan="7">暂无符合条件的任务</td></tr>';
  document.getElementById("hotfixCount").textContent = `共 ${list.length} 条`;
  document.getElementById("hotfixPages").innerHTML = `<button type="button" data-page="${listPage - 1}" ${listPage === 1 ? "disabled" : ""}>上一页</button>`
    + Array.from({ length: pages }, (_, index) => `<button type="button" data-page="${index + 1}" class="${index + 1 === listPage ? "is-active" : ""}">${index + 1}</button>`).join("")
    + `<button type="button" data-page="${listPage + 1}" ${listPage === pages ? "disabled" : ""}>下一页</button>`;
}

function openHotfix() {
  hotfixMask.hidden = false;
  renderList();
  document.getElementById("hotfixClose").focus();
}

function closeHotfix() {
  hotfixPicker.hidden = true;
  hotfixDialog.hidden = true;
  hotfixMask.hidden = true;
  setInert(hotfixMask, false);
  setInert(hotfixDialog, false);
  dialogType = "";
}

function openDialog(type, title) {
  dialogType = type;
  hotfixDialogTitle.textContent = title;
  setInert(hotfixMask, true);
  hotfixDialog.hidden = false;
  hotfixDialogBody.scrollTop = 0;
}

function closeDialog() {
  hotfixDialog.hidden = true;
  dialogType = "";
  setInert(hotfixMask, false);
  document.getElementById("hotfixClose").focus();
}

function setDialogFooter(help, actions) {
  hotfixDialogHelp.textContent = help || "";
  hotfixDialogHelp.hidden = !help;
  hotfixDialogActions.innerHTML = actions;
}

function field(label, html, required = false) {
  return `<div class="field"><span>${label}${required ? ' <i class="req">*</i>' : ""}</span>${html}</div>`;
}

function configFields(task) {
  const ratio = Math.round(task.ratio * 100);
  return `<div class="hotfix-section">升级配置</div>
    <div class="hotfix-grid">
      ${field("升级范围", `<select id="hotfixGray"><option value="ratio" ${task.gray === "ratio" ? "selected" : ""}>灰度</option><option value="all" ${task.gray === "all" ? "selected" : ""}>全部</option></select>`)}
      ${field("网络", `<select id="hotfixWifi"><option value="0" ${!task.wifi ? "selected" : ""}>全部网络</option><option value="1" ${task.wifi ? "selected" : ""}>仅 Wi-Fi</option></select>`)}
      <div id="hotfixRatioField" ${task.gray === "all" ? "hidden" : ""}>${field("万分比", `<div class="hotfix-inline"><input class="hotfix-input" id="hotfixMod" type="number" min="1" max="10000" step="1" value="${ratio}"><span class="hotfix-help" id="hotfixRatioHint">即 ${task.ratio}%</span></div>`, true)}</div>
      ${field("自清除次数", `<input class="hotfix-input" id="hotfixSelfClear" type="number" min="1" max="20" step="1" value="${task.clear}">`)}
      <div class="span-2" id="hotfixUdidField" ${task.gray === "all" ? "hidden" : ""}>${field("测试设备", `<input class="hotfix-input" id="hotfixUdids" placeholder="UDID，英文逗号分隔，最多 4 个" value="${esc(task.udids)}">`)}</div>
      ${field("后台重启", `<label class="hotfix-check"><input id="hotfixReboot" type="checkbox" ${task.reboot ? "checked" : ""}>切到后台后自动重启</label>`)}
      <div class="span-2">${field("更新描述", `<textarea class="hotfix-input" id="hotfixDescription" rows="2">${esc(task.description)}</textarea>`)}</div>
    </div>`;
}

function bindConfig() {
  const gray = document.getElementById("hotfixGray");
  const syncGray = () => {
    const hide = gray.value === "all";
    document.getElementById("hotfixRatioField").hidden = hide;
    document.getElementById("hotfixUdidField").hidden = hide;
  };
  gray.onchange = syncGray;
  document.getElementById("hotfixMod").oninput = () => {
    const value = Number(document.getElementById("hotfixMod").value);
    document.getElementById("hotfixRatioHint").textContent = Number.isFinite(value) ? `即 ${value / 100}%` : "";
  };
}

function readConfig() {
  const mod = Number(document.getElementById("hotfixMod").value);
  const clear = Number(document.getElementById("hotfixSelfClear").value);
  const gray = document.getElementById("hotfixGray").value;
  const udids = document.getElementById("hotfixUdids").value.split(",").map((item) => item.trim()).filter(Boolean);
  if (gray === "ratio" && (!Number.isInteger(mod) || mod < 1 || mod > 10000)) {
    showToast("万分比请填写 1 至 10000 的整数");
    document.getElementById("hotfixMod").focus();
    return null;
  }
  if (gray === "ratio" && udids.length > 4) {
    showToast("指定测试设备最多支持 4 个");
    return null;
  }
  if (!Number.isInteger(clear) || clear < 1 || clear > 20) {
    showToast("自清除次数请填写 1 至 20 的整数");
    return null;
  }
  return {
    gray,
    ratio: Number.isInteger(mod) && mod >= 1 && mod <= 10000 ? mod / 100 : 10,
    wifi: document.getElementById("hotfixWifi").value === "1",
    udids: udids.join(","),
    reboot: document.getElementById("hotfixReboot").checked,
    clear,
    description: document.getElementById("hotfixDescription").value.trim(),
  };
}

function rowBases(row) {
  return [...row.querySelectorAll('[name="base"]:checked')].map((element) => element.value);
}

function selectedBasesHtml(versions) {
  if (!versions.length) return '<span class="hotfix-empty">未选择</span>';
  const chip = (version) => `<span class="hotfix-tag">${esc(version)} <button type="button" data-remove-base="${esc(version)}" aria-label="移除 ${esc(version)}">×</button></span>`;
  return versions.map((version) => `<input type="checkbox" name="base" value="${esc(version)}" checked hidden>`).join("")
    + `<div class="hotfix-tags">${versions.map(chip).join("")}</div>`;
}

function sourceRow(source = {}) {
  const key = source.key || ++nextSource;
  return `<div class="hotfix-pack" data-source="${key}">
    <div class="hotfix-pack-bar">
      <span class="source-index"></span>
      <button class="btn-link" type="button" data-remove-source="${key}">移除</button>
    </div>
    <div class="hotfix-pack-grid">
      ${field("目标版本", `<input class="hotfix-input" name="target" aria-label="目标版本" placeholder="例如 9.0.4" value="${esc(source.target || "")}">`, true)}
      ${field("完整包地址", `<input class="hotfix-input" name="url" aria-label="完整包地址" type="url" placeholder="https://…/完整包.apk" value="${esc(source.url || "")}">`, true)}
    </div>
    <div class="hotfix-bases-row">
      <span>基准版本 <i class="req">*</i></span>
      <button class="btn-ghost" type="button" data-pick-bases>选择</button>
      <div class="selected-bases">${selectedBasesHtml(source.bases || [])}</div>
    </div>
  </div>`;
}

function refreshSourceSummary() {
  const rows = [...document.querySelectorAll("#hotfixSourceRows .hotfix-pack")];
  rows.forEach((row, index) => {
    row.querySelector(".source-index").textContent = `完整包 ${index + 1}`;
    row.querySelector("[data-remove-source]").disabled = rows.length === 1;
  });
  const count = [...document.querySelectorAll('#hotfixSourceRows [name="base"]')].filter((item) => item.checked).length;
  document.getElementById("hotfixSourceSummary").textContent = count ? `${count} 个补丁` : "";
}

function newTask() {
  openDialog("create", "新增热更新任务");
  const defaults = { gray: "ratio", ratio: 10, wifi: false, udids: "", reboot: false, clear: 3, description: "" };
  hotfixDialogBody.innerHTML = `<form id="hotfixTaskForm" novalidate>
    ${field("任务名称", '<input class="hotfix-input" id="hotfixTaskName" maxlength="80" placeholder="例如：9.0 / 9.1 登录修复">', true)}
    <div class="hotfix-section"><span>完整包<span class="hotfix-count" id="hotfixSourceSummary"></span></span><button class="btn-link" type="button" id="hotfixAddSource">添加完整包</button></div>
    <div id="hotfixSourceRows">${sourceRow()}</div>
    ${configFields(defaults)}
  </form>`;
  setDialogFooter("", '<button class="btn-ghost" type="button" id="hotfixCancelCreate">取消</button><button class="btn-primary" type="submit" form="hotfixTaskForm">提交任务</button>');
  document.getElementById("hotfixAddSource").onclick = () => {
    document.getElementById("hotfixSourceRows").insertAdjacentHTML("beforeend", sourceRow());
    refreshSourceSummary();
  };
  document.getElementById("hotfixSourceRows").onchange = refreshSourceSummary;
  document.getElementById("hotfixSourceRows").onclick = (event) => {
    const picker = event.target.closest("[data-pick-bases]");
    if (picker) {
      openBasePicker(picker.closest(".hotfix-pack"));
      return;
    }
    const removeBase = event.target.closest("[data-remove-base]");
    if (removeBase) {
      const row = removeBase.closest(".hotfix-pack");
      const remaining = rowBases(row).filter((version) => version !== removeBase.dataset.removeBase);
      row.querySelector(".selected-bases").innerHTML = selectedBasesHtml(remaining);
      refreshSourceSummary();
      return;
    }
    const remove = event.target.closest("[data-remove-source]");
    if (remove && !remove.disabled) {
      remove.closest(".hotfix-pack").remove();
      refreshSourceSummary();
    }
  };
  document.getElementById("hotfixCancelCreate").onclick = closeDialog;
  document.getElementById("hotfixTaskForm").onsubmit = submitTask;
  bindConfig();
  refreshSourceSummary();
}

function compareVersion(left, right) {
  const x = left.split(".").map(Number);
  const y = right.split(".").map(Number);
  for (let index = 0; index < Math.max(x.length, y.length); index += 1) {
    const diff = (x[index] || 0) - (y[index] || 0);
    if (diff) return diff;
  }
  return 0;
}

function submitTask(event) {
  event.preventDefault();
  const name = document.getElementById("hotfixTaskName").value.trim();
  if (!name) {
    showToast("请填写任务名称");
    document.getElementById("hotfixTaskName").focus();
    return;
  }
  const sources = [];
  const selected = new Set();
  const targets = new Set();
  for (const [index, row] of [...document.querySelectorAll("#hotfixSourceRows .hotfix-pack")].entries()) {
    const target = row.querySelector('[name="target"]').value.trim();
    const url = row.querySelector('[name="url"]').value.trim();
    const bases = [...row.querySelectorAll('[name="base"]:checked')].map((item) => item.value);
    if (!/^\d+(\.\d+){2,4}$/.test(target)) {
      showToast(`第 ${index + 1} 份完整包：请填写有效目标版本，如 9.0.4`);
      return;
    }
    if (targets.has(target)) {
      showToast("目标版本重复，请合并到同一份完整包并选择对应基准版本");
      return;
    }
    targets.add(target);
    try {
      const parsed = new URL(url);
      if (!["http:", "https:"].includes(parsed.protocol)) throw new Error();
    } catch {
      showToast(`第 ${index + 1} 份完整包：请填写有效的 HTTP / HTTPS 地址`);
      return;
    }
    if (!bases.length) {
      showToast(`第 ${index + 1} 份完整包：请至少选择一个基准版本`);
      return;
    }
    if (bases.some((version) => compareVersion(target, version) <= 0)) {
      showToast(`第 ${index + 1} 份完整包：目标版本需高于所选基准版本`);
      return;
    }
    if (bases.some((version) => selected.has(version))) {
      showToast("同一基准版本不能分配给多份完整包");
      return;
    }
    bases.forEach((version) => selected.add(version));
    sources.push({ target, url, bases });
  }
  if (!sources.length) {
    showToast("请添加至少一份完整包");
    return;
  }
  const config = readConfig();
  if (!config) return;
  const id = Math.max(...tasks.map((task) => task.id)) + 1;
  const task = makeTask(id, name, "running", sources.map((source) => ({
    ...makeSource(source.target, source.bases, 0),
    url: source.url,
  })), {
    ...config,
    date: new Date().toLocaleString("sv-SE", { timeZone: "Asia/Shanghai" }),
  });
  tasks.unshift(task);
  filters = { keyword: "", target: "", status: "" };
  hotfixSearch.reset();
  listPage = 1;
  renderList();
  showDetail(id);
  showToast(`已创建，将生成 ${childrenOf(task).length} 个补丁`);
}

function showDetail(id) {
  activeId = Number(id);
  retrySelection.clear();
  openDialog("detail", `补丁包管理 - 任务 ${id}`);
  renderDetail();
}

const retryKey = (source, child) => `${source.key}:${child.base}`;

function renderDetail() {
  const task = getTask(activeId);
  const all = childrenOf(task);
  const ready = all.filter((child) => child.stage === 4).length;
  const failures = all.filter((child) => child.failed).length;
  hotfixDialogBody.innerHTML = `<div class="hotfix-summary">
      <div>
        <div class="hotfix-summary-name">${esc(task.name)}</div>
        <div class="hotfix-summary-meta">${statusTag(task)}<span>${ready} / ${all.length}${failures ? ` · ${failures} 个失败` : ""}</span></div>
      </div>
      <label class="hotfix-check"><input type="checkbox" id="hotfixSelectFailed" ${failures ? "" : "disabled"}>全选失败</label>
    </div>
    ${task.sources.map((source) => `<div class="hotfix-block"><div class="hotfix-block-title"><span>${esc(source.target)}</span><span class="hotfix-url" title="${esc(source.url)}">${esc(source.url)}</span></div><div class="panel"><table class="data-table hotfix-detail-table"><thead><tr><th>选择</th><th>基准版本</th><th>步骤</th><th>解析 ID</th><th>版本 ID</th><th>状态</th></tr></thead><tbody>${source.children.map((child) => `<tr>
      <td><input type="checkbox" class="retry-item" aria-label="选择 ${esc(child.base)}" data-key="${retryKey(source, child)}" ${child.failed ? "" : "disabled"} ${child.failed && retrySelection.has(retryKey(source, child)) ? "checked" : ""}></td>
      <td>${esc(child.base)}</td>
      <td>${child.failed ? '<span class="hotfix-error">上传失败</span>' : child.stage === 4 ? "已完成" : stageNames[child.stage]}</td>
      <td>${child.downloadId || "—"}</td><td>${child.versionId || "—"}</td>
      <td>${child.failed ? '<span class="hotfix-error">失败</span>' : child.stage === 4 ? (task.state === "published" ? "上线" : "预览") : "处理中"}</td>
    </tr>`).join("")}</tbody></table></div></div>`).join("")}`;
  setDialogFooter("",
    `${task.state === "running" ? '<button class="btn-ghost" type="button" id="hotfixAdvance">刷新进度</button>' : ""}<button class="btn-hotfix" type="button" id="hotfixRetry" disabled>重试</button><button class="btn-ghost" type="button" id="hotfixCloseDetail">关闭</button>`);
  document.getElementById("hotfixCloseDetail").onclick = closeDialog;
  const advance = document.getElementById("hotfixAdvance");
  if (advance) {
    advance.onclick = () => {
      advanceTask(task);
      renderList();
      renderDetail();
    };
  }
  document.querySelectorAll(".retry-item").forEach((element) => {
    element.onchange = () => {
      if (element.checked) retrySelection.add(element.dataset.key);
      else retrySelection.delete(element.dataset.key);
      updateRetryControls();
    };
  });
  document.getElementById("hotfixSelectFailed").onchange = () => {
    document.querySelectorAll(".retry-item:not(:disabled)").forEach((element) => {
      element.checked = document.getElementById("hotfixSelectFailed").checked;
      if (element.checked) retrySelection.add(element.dataset.key);
      else retrySelection.delete(element.dataset.key);
    });
    updateRetryControls();
  };
  document.getElementById("hotfixRetry").onclick = retrySelected;
  updateRetryControls();
}

function updateRetryControls() {
  const eligible = [...document.querySelectorAll(".retry-item:not(:disabled)")];
  const selected = eligible.filter((element) => element.checked);
  const retry = document.getElementById("hotfixRetry");
  const selectFailed = document.getElementById("hotfixSelectFailed");
  retry.disabled = selected.length === 0;
  retry.textContent = selected.length ? `重试 ${selected.length} 项` : "重试";
  selectFailed.checked = eligible.length > 0 && selected.length === eligible.length;
  selectFailed.indeterminate = selected.length > 0 && selected.length < eligible.length;
}

function retrySelected() {
  const task = getTask(activeId);
  let count = 0;
  task.sources.forEach((source) => source.children.forEach((child) => {
    if (child.failed && retrySelection.has(retryKey(source, child))) {
      child.failed = false;
      count += 1;
    }
  }));
  if (!count) return;
  task.state = "running";
  retrySelection.clear();
  renderList();
  renderDetail();
  showToast(`已重试 ${count} 个补丁`);
}

function editConfig(id) {
  const task = getTask(id);
  activeId = task.id;
  openDialog("config", `配置管理 - 任务 ${id}`);
  const ready = childrenOf(task).every((child) => child.stage === 4 && !child.failed);
  hotfixDialogBody.innerHTML = `<form id="hotfixConfigForm" novalidate>
    <div class="hotfix-summary">
      <div>
        <div class="hotfix-summary-name">${esc(task.name)}</div>
        <div class="hotfix-summary-meta">任务 ${task.id}</div>
      </div>
    </div>
    <div class="hotfix-status">
      ${field("发布状态", `<select id="hotfixRelease"><option value="preview" ${task.state !== "published" ? "selected" : ""}>预览</option><option value="online" ${task.state === "published" ? "selected" : ""} ${ready ? "" : "disabled"}>上线</option></select>${ready ? "" : '<p class="hotfix-help">补丁未全部就绪，暂不能上线</p>'}`)}
    </div>
    ${configFields(task)}
  </form>`;
  setDialogFooter("", '<button class="btn-ghost" type="button" id="hotfixCancelConfig">取消</button><button class="btn-primary" type="submit" form="hotfixConfigForm">保存</button>');
  bindConfig();
  document.getElementById("hotfixCancelConfig").onclick = closeDialog;
  document.getElementById("hotfixConfigForm").onsubmit = (event) => {
    event.preventDefault();
    const config = readConfig();
    if (!config) return;
    const online = document.getElementById("hotfixRelease").value === "online";
    if (online && !childrenOf(task).every((child) => child.stage === 4 && !child.failed)) {
      showToast("所有补丁就绪后才能统一上线");
      return;
    }
    Object.assign(task, config);
    if (online) task.state = "published";
    else if (task.state === "published") task.state = "ready";
    renderList();
    closeDialog();
    showToast(online ? "已保存，状态为上线" : "已保存，状态为预览");
  };
}

function advanceTask(task) {
  task.sources.forEach((source) => {
    const child = source.children.find((item) => item.stage < 4 && !item.failed);
    if (!child) return;
    child.stage += 1;
    if (child.stage === 2 && !child.downloadId) child.downloadId = ++nextDownload;
    if (child.stage === 4 && !child.versionId) child.versionId = ++nextVersion;
  });
  const pending = childrenOf(task).filter((child) => child.stage < 4);
  if (!pending.length) {
    task.state = "ready";
    showToast(`任务 ${task.id} 已全部就绪`);
  } else if (pending.every((child) => child.failed)) task.state = "failed";
}

function occupiedBases() {
  return new Set([...document.querySelectorAll("#hotfixSourceRows .hotfix-pack")].filter((row) => row !== pickerRow).flatMap(rowBases));
}

function baseUnavailable(item) {
  if (item.kind !== "full") return "热修复包不可作基准";
  if (occupiedBases().has(item.version)) return "已被其他完整包选择";
  const target = pickerRow.querySelector('[name="target"]').value.trim();
  if (/^\d+(\.\d+){2,4}$/.test(target) && compareVersion(target, item.version) <= 0) return "不低于目标版本";
  return "";
}

function openBasePicker(row) {
  pickerRow = row;
  pickerSelection = new Set(rowBases(row));
  pickerPage = 1;
  pickerFilters = { main: "", version: "", kind: "full" };
  const target = row.querySelector('[name="target"]').value.trim();
  hotfixPickerTitle.textContent = `选择基准包${target ? ` - 目标版本 ${target}` : ""}`;
  const mainVersions = [...new Set(baseCatalog.map((item) => item.main))];
  hotfixPickerBody.innerHTML = `<form class="hotfix-search" id="hotfixPickerSearch">
      <label>主版本<select name="main"><option value="">全部</option>${mainVersions.map((version) => `<option>${esc(version)}</option>`).join("")}</select></label>
      <label>具体版本号<input name="version" placeholder="例如 9.7.0.30"></label>
      <label>包类型<select name="kind"><option value="full">完整基准包</option><option value="">全部</option></select></label>
      <div class="hotfix-search-actions"><button class="btn-primary" type="submit">搜索</button><button class="btn-ghost" type="button" id="hotfixPickerReset">重置</button></div>
    </form>
    <div class="panel"><table class="data-table hotfix-picker-table"><thead><tr><th><input type="checkbox" id="hotfixSelectPickerPage" aria-label="选择当前页"></th><th>主版本</th><th>版本号</th><th>发布日期</th><th>渠道</th><th>说明</th></tr></thead><tbody id="hotfixPickerRows"></tbody></table></div>
    <div class="hotfix-pager"><span id="hotfixPickerResult"></span><div class="hotfix-pages" id="hotfixPickerPages"></div></div>`;
  setInert(hotfixDialog, true);
  hotfixPicker.hidden = false;
  document.getElementById("hotfixPickerSearch").onsubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    pickerFilters = { main: data.get("main"), version: data.get("version").trim(), kind: data.get("kind") };
    pickerPage = 1;
    renderBasePicker();
  };
  document.getElementById("hotfixPickerReset").onclick = () => {
    document.getElementById("hotfixPickerSearch").reset();
    pickerFilters = { main: "", version: "", kind: "full" };
    pickerPage = 1;
    renderBasePicker();
  };
  document.getElementById("hotfixPickerRows").onchange = (event) => {
    const element = event.target.closest(".picker-check");
    if (!element) return;
    if (element.checked) pickerSelection.add(element.value);
    else pickerSelection.delete(element.value);
    updatePickerCount();
  };
  document.getElementById("hotfixSelectPickerPage").onchange = () => {
    const checked = document.getElementById("hotfixSelectPickerPage").checked;
    document.querySelectorAll(".picker-check:not(:disabled)").forEach((element) => {
      element.checked = checked;
      if (checked) pickerSelection.add(element.value);
      else pickerSelection.delete(element.value);
    });
    updatePickerCount();
  };
  document.getElementById("hotfixPickerPages").onclick = (event) => {
    const button = event.target.closest("[data-picker-page]");
    if (button && !button.disabled) {
      pickerPage = Number(button.dataset.pickerPage);
      renderBasePicker();
    }
  };
  renderBasePicker();
  document.getElementById("hotfixPickerCancel").focus();
}

function renderBasePicker() {
  const list = baseCatalog.filter((item) => (
    (!pickerFilters.main || item.main === pickerFilters.main)
    && (!pickerFilters.version || item.version.includes(pickerFilters.version))
    && (!pickerFilters.kind || item.kind === pickerFilters.kind)
  ));
  const pages = Math.max(1, Math.ceil(list.length / 8));
  pickerPage = Math.min(Math.max(1, pickerPage), pages);
  document.getElementById("hotfixPickerRows").innerHTML = list.slice((pickerPage - 1) * 8, pickerPage * 8).map((item) => {
    const reason = baseUnavailable(item);
    const checked = pickerSelection.has(item.version);
    return `<tr class="${reason ? "is-unavailable" : ""}"><td><input type="checkbox" class="picker-check" value="${esc(item.version)}" aria-label="选择 ${esc(item.version)}" ${checked ? "checked" : ""} ${reason && !checked ? "disabled" : ""}></td><td>${esc(item.main)}</td><td>${esc(item.version)}</td><td>${esc(item.date)}</td><td>${esc(item.channel)}</td><td>${reason ? `<span class="hotfix-error">${esc(reason)}</span>` : esc(item.note)}</td></tr>`;
  }).join("") || '<tr><td class="empty" colspan="6">暂无匹配的基准包</td></tr>';
  document.getElementById("hotfixPickerResult").textContent = `共 ${list.length} 条`;
  document.getElementById("hotfixPickerPages").innerHTML = `<button type="button" data-picker-page="${pickerPage - 1}" ${pickerPage === 1 ? "disabled" : ""}>上一页</button>`
    + Array.from({ length: pages }, (_, index) => `<button type="button" data-picker-page="${index + 1}" class="${pickerPage === index + 1 ? "is-active" : ""}">${index + 1}</button>`).join("")
    + `<button type="button" data-picker-page="${pickerPage + 1}" ${pickerPage === pages ? "disabled" : ""}>下一页</button>`;
  updatePickerCount();
}

function updatePickerCount() {
  hotfixPickerCount.textContent = `已选 ${pickerSelection.size} 个`;
  const available = [...document.querySelectorAll(".picker-check:not(:disabled)")];
  const count = available.filter((element) => element.checked).length;
  const selectPage = document.getElementById("hotfixSelectPickerPage");
  selectPage.disabled = !available.length;
  selectPage.checked = available.length > 0 && count === available.length;
  selectPage.indeterminate = count > 0 && count < available.length;
}

function closeBasePicker() {
  hotfixPicker.hidden = true;
  setInert(hotfixDialog, false);
}

document.getElementById("hotfixBtn").addEventListener("click", openHotfix);
document.getElementById("hotfixClose").addEventListener("click", closeHotfix);
document.getElementById("hotfixRefresh").addEventListener("click", () => {
  tasks.filter((task) => task.state === "running").forEach(advanceTask);
  renderList();
  showToast("已刷新");
});
document.getElementById("hotfixAdd").addEventListener("click", newTask);
hotfixMask.addEventListener("click", (event) => {
  if (event.target === hotfixMask) closeHotfix();
});
hotfixSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  const values = new FormData(event.currentTarget);
  filters = {
    keyword: values.get("keyword").trim(),
    target: values.get("target").trim(),
    status: values.get("status"),
  };
  listPage = 1;
  renderList();
});
document.getElementById("hotfixReset").addEventListener("click", () => {
  hotfixSearch.reset();
  filters = { keyword: "", target: "", status: "" };
  listPage = 1;
  renderList();
});
document.getElementById("hotfixPageSize").addEventListener("change", () => {
  pageSize = Number(document.getElementById("hotfixPageSize").value);
  listPage = 1;
  renderList();
});
document.getElementById("hotfixPages").addEventListener("click", (event) => {
  const button = event.target.closest("[data-page]");
  if (button && !button.disabled) {
    listPage = Number(button.dataset.page);
    renderList();
  }
});
hotfixRows.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  if (button.dataset.action === "detail") showDetail(button.dataset.id);
  if (button.dataset.action === "config") editConfig(button.dataset.id);
});
hotfixDialog.addEventListener("click", (event) => {
  if (event.target === hotfixDialog && dialogType === "detail") closeDialog();
});
document.getElementById("hotfixPickerCancel").addEventListener("click", closeBasePicker);
document.getElementById("hotfixPickerClear").addEventListener("click", () => {
  pickerSelection.clear();
  renderBasePicker();
});
document.getElementById("hotfixPickerConfirm").addEventListener("click", () => {
  for (const version of pickerSelection) {
    const item = baseCatalog.find((entry) => entry.version === version);
    const reason = item ? baseUnavailable(item) : "记录不存在";
    if (reason) {
      showToast(`${version}：${reason}`);
      return;
    }
  }
  pickerRow.querySelector(".selected-bases").innerHTML = selectedBasesHtml([...pickerSelection]);
  refreshSourceSummary();
  closeBasePicker();
});
document.querySelectorAll(".submenu-item").forEach((item) => {
  item.addEventListener("click", closeHotfix);
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!hotfixPicker.hidden) {
    closeBasePicker();
    return;
  }
  if (!hotfixDialog.hidden) {
    closeDialog();
    return;
  }
  if (!hotfixMask.hidden) closeHotfix();
});
