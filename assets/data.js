/* ==========================================================================
   Persian Collective — Data Layer
   طبق درخواست، هیچ دیتابیسی استفاده نشده. تمام اطلاعات به شکل ساختاریافته
   (معادل فایل‌های JSON) اینجا نگه‌داری می‌شوند: channels / leaderboard /
   logs / rules / news / settings. پنل مدیریت این آبجکت‌ها را در حافظه
   مرورگر (طول همان نشست) ویرایش می‌کند.
   ========================================================================== */

const RANKS = [
  "Initiate I", "Initiate II", "Initiate III", "Initiate IV", "Initiate V",
  "Vanguard I", "Vanguard II", "Vanguard III", "Vanguard IV", "Vanguard V",
  "Elite I", "Elite II", "Elite III", "Elite IV", "Elite V",
  "Ascendant I", "Ascendant II", "Ascendant III", "Ascendant IV", "Ascendant V",
  "Dominion I", "Dominion II", "Dominion III", "Dominion IV", "Dominion V",
  "Prestige I", "Prestige II", "Prestige III", "Prestige IV", "Prestige V",
  "Legend", "Supreme"
];

const SETTINGS = {
  siteName: "Persian Collective",
  season: "فصل ۳",
  foundedDate: "۱۴۰۲/۰۲/۱۵",
  version: "نسخه ۲.۴.۰",
  supportId: "@PersianSupport",
  telegramUrl: "https://t.me/PersianSupport",
  xpPerCoin: 1000
};

const CHANNELS = [
  { id: 1, name: "@ArmaxWorld", xp: 18450, quality: 96, rank: "Legend", members: "۴۲ هزار" },
  { id: 2, name: "@NightForgeTV", xp: 16200, quality: 94, rank: "Prestige V", members: "۳۸ هزار" },
  { id: 3, name: "@ShadowRealmGG", xp: 15100, quality: 91, rank: "Prestige IV", members: "۳۵ هزار" },
  { id: 4, name: "@PixelKhorasan", xp: 13980, quality: 89, rank: "Prestige II", members: "۲۹ هزار" },
  { id: 5, name: "@ReyhanGaming", xp: 12750, quality: 93, rank: "Prestige I", members: "۲۶ هزار" },
  { id: 6, name: "@KavehStream", xp: 11400, quality: 88, rank: "Dominion V", members: "۲۲ هزار" },
  { id: 7, name: "@DariushPlays", xp: 10650, quality: 85, rank: "Dominion IV", members: "۲۰ هزار" },
  { id: 8, name: "@SetarehClips", xp: 9800, quality: 90, rank: "Dominion III", members: "۱۸ هزار" },
  { id: 9, name: "@ArshiaOnline", xp: 8900, quality: 82, rank: "Dominion II", members: "۱۵ هزار" },
  { id: 10, name: "@NoorGameHub", xp: 8100, quality: 87, rank: "Dominion I", members: "۱۳ هزار" },
  { id: 11, name: "@BorzMedia", xp: 6200, quality: 79, rank: "Ascendant IV", members: "۹ هزار" },
  { id: 12, name: "@RostamCast", xp: 4300, quality: 75, rank: "Ascendant II", members: "۶ هزار" }
];

const HALL_OF_FAME = [
  { place: 1, name: "@ArmaxWorld", note: "بیشترین XP ثبت‌شده در کل تاریخ مجموعه و اولین کانال رسیده به رنک Legend." },
  { place: 2, name: "@NightForgeTV", note: "طولانی‌ترین حضور پیوسته در ۱۰ کانال برتر طی سه فصل متوالی." },
  { place: 3, name: "@ShadowRealmGG", note: "بالاترین میانگین امتیاز کیفیت گیم در فصل دوم مجموعه." }
];

const XP_LOGS = [
  { id: 101, channel: "@ArmaxWorld", amount: 100, reason: "عضویت رسمی در مجموعه", date: "۱۴۰۳/۰۴/۱۲" },
  { id: 102, channel: "@KavehStream", amount: 250, reason: "برگزاری ایونت مشترک با مجموعه", date: "۱۴۰۳/۰۴/۱۱" },
  { id: 103, channel: "@SetarehClips", amount: 150, reason: "تولید محتوای اختصاصی معرفی مجموعه", date: "۱۴۰۳/۰۴/۱۰" },
  { id: 104, channel: "@NoorGameHub", amount: 80, reason: "دعوت کانال جدید به مجموعه", date: "۱۴۰۳/۰۴/۰۹" },
  { id: 105, channel: "@DariushPlays", amount: 300, reason: "رشد قابل توجه بازدید در استریم مشترک", date: "۱۴۰۳/۰۴/۰۸" }
];

const RULES = [
  {
    title: "احترام و رفتار حرفه‌ای",
    body: "تمام اعضا موظف‌اند در تعامل با یکدیگر و مخاطبان، رفتاری محترمانه و حرفه‌ای داشته باشند. هرگونه توهین، تبعیض یا رفتار غیراخلاقی منجر به کسر امتیاز یا اخراج از مجموعه می‌شود."
  },
  {
    title: "کیفیت محتوا",
    body: "محتوای منتشرشده باید حداقل استانداردهای کیفی مجموعه را رعایت کند؛ شامل کیفیت تصویر، صدا و انسجام محتوایی. کانال‌هایی که مستمر امتیاز کیفیت پایین بگیرند، تحت بررسی قرار می‌گیرند."
  },
  {
    title: "فعالیت منظم",
    body: "کانال‌های عضو باید فعالیت منظم داشته باشند. غیبت طولانی بدون اطلاع به پشتیبانی می‌تواند باعث کاهش رنک یا لغو عضویت شود."
  },
  {
    title: "همکاری بین اعضا",
    body: "اعضا تشویق می‌شوند در پروژه‌ها و ایونت‌های مشترک مجموعه شرکت کنند. مشارکت فعال یکی از منابع اصلی کسب XP است."
  },
  {
    title: "شفافیت مالی و امتیازی",
    body: "تمام تراکنش‌های XP و Persian Coin Pro در بخش XP Logs ثبت و برای همه اعضا قابل مشاهده است. هرگونه ابهام باید از طریق پشتیبانی پیگیری شود."
  }
];

const NEWS = [
  { id: 1, title: "آغاز فصل سوم مجموعه", body: "فصل سوم Persian Collective آغاز شد. تمام رنک‌ها ریست شدند و سیستم امتیازدهی کیفیت گیم به‌روزرسانی شد.", date: "۱۴۰۳/۰۴/۰۱" },
  { id: 2, title: "به‌روزرسانی سیستم Persian Coin Pro", body: "نرخ تبدیل XP به Persian Coin Pro ثابت ماند، اما امکان مشاهده تاریخچه تبدیل به پنل کاربری اضافه شد.", date: "۱۴۰۳/۰۳/۲۰" },
  { id: 3, title: "افزودن ۴ کانال جدید به مجموعه", body: "پس از بررسی کامل، چهار کانال جدید در بخش گیمینگ به جمع Persian Collective پیوستند.", date: "۱۴۰۳/۰۳/۰۵" }
];

const XP_METHODS = [
  { action: "عضویت رسمی در مجموعه", amount: "۱۰۰ XP" },
  { action: "شرکت در ایونت مشترک", amount: "۱۵۰ تا ۳۰۰ XP" },
  { action: "تولید محتوای اختصاصی مجموعه", amount: "۱۰۰ تا ۲۰۰ XP" },
  { action: "دعوت کانال جدید تاییدشده", amount: "۸۰ XP" },
  { action: "رشد قابل توجه در آمار بازدید", amount: "۱۵۰ تا ۳۵۰ XP" },
  { action: "حفظ فعالیت منظم در طول یک فصل", amount: "۲۰۰ XP" }
];

const JOIN_STEPS = [
  { title: "ارسال درخواست", body: "پیام عضویت را همراه با اطلاعات کانال به پشتیبانی ارسال کنید." },
  { title: "بررسی اولیه", body: "تیم مجموعه کیفیت محتوا و فعالیت کانال را در بازه‌ی حداکثر ۴۸ ساعت بررسی می‌کند." },
  { title: "مصاحبه کوتاه", body: "در صورت تایید اولیه، یک گفتگوی کوتاه با مدیریت مجموعه برگزار می‌شود." },
  { title: "پیوستن رسمی", body: "پس از تایید نهایی، کانال با رنک Initiate I وارد مجموعه شده و اولین XP Log ثبت می‌شود." }
];

const JOIN_REQUIREMENTS = [
  "حداقل ۲ هزار عضو واقعی و فعال",
  "تولید محتوای منظم حداقل هفته‌ای دو بار",
  "رعایت قوانین اخلاقی و حرفه‌ای مجموعه",
  "تمایل به همکاری در ایونت‌های مشترک"
];
