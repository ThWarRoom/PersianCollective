/* ==========================================================================
   Persian Collective — Shared UI Components (icons, sidebar, hex badges)
   ========================================================================== */

const ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9a1 1 0 0 0 1 1H10v-6h4v6h3.5a1 1 0 0 0 1-1v-9"/></svg>`,
  trophy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 4h10v4a5 5 0 0 1-10 0V4Z"/><path d="M7 5H4a3 3 0 0 0 3 4M17 5h3a3 3 0 0 1-3 4"/><path d="M10 15h4v3h-4z"/><path d="M8 20h8"/></svg>`,
  rules: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4"/><path d="M9 12h7M9 15.5h7M9 8.5h3"/></svg>`,
  join: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M17 8h4M19 6v4"/></svg>`,
  xp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l2.4 5.3 5.6.6-4.2 3.8 1.2 5.6L12 15.8 6.9 18.3l1.2-5.6-4.2-3.8 5.6-.6z"/></svg>`,
  news: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5h13v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M17 8h3v10a2 2 0 0 1-2 2"/><path d="M7.5 9h6M7.5 12.5h6M7.5 16h4"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/></svg>`,
  support: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 15v-3a8 8 0 0 1 16 0v3"/><path d="M4 15a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2Z"/><path d="M20 15a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2Z"/><path d="M18 17v1a3 3 0 0 1-3 3h-2"/></svg>`,
  admin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2 4 5v6c0 5 3.4 8.4 8 11 4.6-2.6 8-6 8-11V5Z"/><path d="M9.5 12l1.8 1.8L14.8 10"/></svg>`,
  copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 11l16-7-6 16-3-6-6-3Z"/></svg>`,
  members: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3"/><path d="M2.5 19a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 19a4.7 4.7 0 0 1 6.5-4.4"/></svg>`,
  coin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8.5"/><path d="M9.5 15c.4.9 1.3 1.4 2.5 1.4 1.6 0 2.6-.8 2.6-1.9 0-2.6-5-1.2-5-3.9 0-1.1 1-1.9 2.5-1.9s2.2.6 2.5 1.4M12 7.5v9"/></svg>`,
  logs: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16M4 12h16M4 18h10"/></svg>`,
  season: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v3M12 18v3M4.2 12H2M22 12h-2.2M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6 16.8 7.2M7.2 16.8l-1.6 1.6"/><circle cx="12" cy="12" r="4"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6 6 18"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 17.5 15 6.5l2.5 2.5L6.5 20H4z"/><path d="M13.5 8 16 10.5"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 7h14M9 7V5h6v2M7 7l1 13h8l1-13"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>`
};

const NAV_ITEMS = [
  { href: "index.html", icon: "home", label: "صفحه اصلی" },
  { href: "leaderboard.html", icon: "trophy", label: "لیدربرد" },
  { href: "rules.html", icon: "rules", label: "قوانین مجموعه" },
  { href: "join.html", icon: "join", label: "نحوه عضویت" },
  { href: "xp-system.html", icon: "xp", label: "سیستم XP" },
  { href: "news.html", icon: "news", label: "اطلاعیه‌ها" },
  { href: "about.html", icon: "info", label: "اطلاعات مجموعه" },
  { href: "contact.html", icon: "support", label: "ارتباط با پشتیبانی" }
];

function brandHexSVG(){
  return `<svg viewBox="0 0 100 100">
    <defs>
      <linearGradient id="brandGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#F1CD6A"/>
        <stop offset="1" stop-color="#8a6f22"/>
      </linearGradient>
    </defs>
    <polygon points="50,4 93,27 93,73 50,96 7,73 7,27" fill="none" stroke="url(#brandGrad)" stroke-width="4"/>
    <polygon points="50,22 78,36.5 78,63.5 50,78 22,63.5 22,36.5" fill="url(#brandGrad)" opacity="0.9"/>
    <text x="50" y="58" text-anchor="middle" font-size="30" font-weight="900" fill="#0B0B0B" font-family="Vazirmatn, sans-serif">P</text>
  </svg>`;
}

/* نشان شش‌ضلعی رنک — رنگ بر اساس دسته رنک تغییر می‌کند */
function hexRankColor(rankName){
  if(!rankName) return ["#5a5a54","#3a3a36"];
  if(rankName.startsWith("Supreme")) return ["#F1CD6A","#D4AF37"];
  if(rankName.startsWith("Legend")) return ["#F1CD6A","#b8860b"];
  if(rankName.startsWith("Prestige")) return ["#e7c46b","#8a6f22"];
  if(rankName.startsWith("Dominion")) return ["#c9a24a","#6e5a1c"];
  if(rankName.startsWith("Ascendant")) return ["#3E7BFA","#1f3f8a"];
  if(rankName.startsWith("Elite")) return ["#8fb2ff","#3E7BFA"];
  if(rankName.startsWith("Vanguard")) return ["#c9c9c9","#5a5a54"];
  return ["#9a967f","#4a4738"]; // Initiate
}

function hexBadge(rankName, size){
  const [c1,c2] = hexRankColor(rankName);
  const gradId = "hg" + Math.random().toString(36).slice(2,8);
  return `<span class="hex-badge" style="--size:${size||40}px" title="${rankName||''}">
    <svg viewBox="0 0 100 110">
      <defs>
        <linearGradient id="${gradId}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${c1}"/>
          <stop offset="1" stop-color="${c2}"/>
        </linearGradient>
      </defs>
      <polygon points="50,4 93,27 93,73 50,96 7,73 7,27" fill="url(#${gradId})"/>
    </svg>
  </span>`;
}

function renderSidebar(activeHref){
  const items = NAV_ITEMS.map(i => `
    <a href="${i.href}" class="${activeHref===i.href ? 'active':''}">
      ${ICONS[i.icon]}<span>${i.label}</span>
    </a>`).join("");

  return `
  <aside class="sidebar" id="sidebar">
    <div class="brand">
      <div class="brand-hex">${brandHexSVG()}</div>
      <div class="brand-name">Persian<span> Collective</span></div>
    </div>
    <nav class="nav">
      <span class="nav-group-label">منو اصلی</span>
      ${items}
      <span class="nav-group-label">مدیریت</span>
      <a href="admin.html" class="${activeHref==='admin.html' ? 'active':''}">${ICONS.admin}<span>پنل مدیریت</span></a>
    </nav>
    <div class="sidebar-footer">
      ${SETTINGS.siteName} · ${SETTINGS.version}<br>${SETTINGS.season}
    </div>
  </aside>
  <div class="mobile-topbar">
    <button class="nav-toggle" onclick="toggleSidebar()">${ICONS.menu}</button>
    <div class="brand"><div class="brand-hex" style="width:28px;height:28px">${brandHexSVG()}</div><div class="brand-name">Persian<span> Collective</span></div></div>
    <span></span>
  </div>`;
}

function toggleSidebar(){
  document.getElementById('sidebar').classList.toggle('open');
}

function showToast(msg){
  let t = document.getElementById('toast');
  if(!t){
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=> t.classList.remove('show'), 2200);
}

function copyText(text){
  navigator.clipboard?.writeText(text).then(()=> showToast("در کلیپ‌بورد کپی شد ✅"))
    .catch(()=> showToast("کپی با خطا مواجه شد"));
}

function renderFooter(){
  return `<div class="footer">
    <span><span class="gold-text">${SETTINGS.siteName}</span> — تمام حقوق محفوظ است.</span>
    <span>${SETTINGS.version}</span>
  </div>`;
}

function mountShell(activeHref){
  document.getElementById('shell-sidebar').outerHTML = renderSidebar(activeHref);
}
