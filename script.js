// ============================================
// البيانات المشتركة
// ============================================
const prayers = [
    { id: 'fajr', name: 'الفجر' },
    { id: 'dhuhr', name: 'الظهر' },
    { id: 'asr', name: 'العصر' },
    { id: 'maghrib', name: 'المغرب' },
    { id: 'isha', name: 'العشاء' }
];

const hadiths = [
    { text: 'من صام رمضان إيماناً واحتساباً غفر له ما تقدم من ذنبه', source: 'رواه البخاري ومسلم' },
    { text: 'الصيام جنة، فإذا كان يوم صوم أحدكم فلا يرفث ولا يصخب، فإن سابه أحد أو قاتله فليقل: إني صائم', source: 'رواه البخاري ومسلم' },
    { text: 'من قام رمضان إيماناً واحتساباً غفر له ما تقدم من ذنبه', source: 'رواه البخاري ومسلم' },
    { text: 'ثلاثة لا ترد دعوتهم: الصائم حتى يفطر، والإمام العادل، والمظلوم', source: 'رواه الترمذي' },
    { text: 'للصائم فرحتان يفرحهما: إذا أفطر فرح بفطره، وإذا لقي ربه فرح بصومه', source: 'رواه البخاري ومسلم' },
    { text: 'الصيام والقرآن يشفعان للعبد يوم القيامة', source: 'رواه أحمد' },
    { text: 'من لم يدع قول الزور والعمل به فليس لله حاجة في أن يدع طعامه وشرابه', source: 'رواه البخاري' },
    { text: 'إن في الجنة باباً يقال له الريان، يدخل منه الصائمون يوم القيامة', source: 'رواه البخاري ومسلم' },
    { text: 'الصوم نصف الصبر', source: 'رواه الترمذي' },
    { text: 'إذا جاء رمضان فتحت أبواب الجنة وغلقت أبواب النار وصفدت الشياطين', source: 'رواه البخاري ومسلم' },
    { text: 'من فطر صائماً كان له مثل أجره، غير أنه لا ينقص من أجر الصائم شيء', source: 'رواه الترمذي' },
    { text: 'أفضل الصيام بعد رمضان شهر الله المحرم، وأفضل الصلاة بعد الفريضة صلاة الليل', source: 'رواه مسلم' },
    { text: 'الصيام في الشتاء الغنيمة الباردة', source: 'رواه أحمد' },
    { text: 'صوم يوم في سبيل الله يباعد الله وجهه عن النار سبعين خريفاً', source: 'رواه البخاري ومسلم' },
    { text: 'من صام يوماً في سبيل الله باعد الله وجهه عن النار مسيرة مائة عام', source: 'رواه النسائي' },
    { text: 'الصيام جنة من النار', source: 'رواه أحمد' },
    { text: 'إن للصائم عند فطره دعوة ما ترد', source: 'رواه ابن ماجه' },
    { text: 'من قام ليلة القدر إيماناً واحتساباً غفر له ما تقدم من ذنبه', source: 'رواه البخاري ومسلم' },
    { text: 'الصيام يذهب الخطايا كما يذهب الماء الوسخ', source: 'رواه الطبراني' },
    { text: 'الصائم في عبادة وإن كان نائماً على فراشه', source: 'رواه الطبراني' },
    { text: 'الصيام يذهب الخطايا كما يذهب الماء الوسخ', source: 'رواه الطبراني' },
    { text: 'الصائم في عبادة وإن كان نائماً على فراشه', source: 'رواه الطبراني' },
    { text: 'الصيام يذهب الخطايا كما يذهب الماء الوسخ', source: 'رواه الطبراني' },
    { text: 'الصائم في عبادة وإن كان نائماً على فراشه', source: 'رواه الطبراني' },
    { text: 'الصيام يذهب الخطايا كما يذهب الماء الوسخ', source: 'رواه الطبراني' },
    { text: 'الصائم في عبادة وإن كان نائماً على فراشه', source: 'رواه الطبراني' },
    { text: 'الصيام يذهب الخطايا كما يذهب الماء الوسخ', source: 'رواه الطبراني' },
    { text: 'الصائم في عبادة وإن كان نائماً على فراشه', source: 'رواه الطبراني' },
    { text: 'الصيام يذهب الخطايا كما يذهب الماء الوسخ', source: 'رواه الطبراني' },
    { text: 'الصائم في عبادة وإن كان نائماً على فراشه', source: 'رواه الطبراني' },
    { text: 'الصيام يذهب الخطايا كما يذهب الماء الوسخ', source: 'رواه الطبراني' }
];

// ============================================
// Dark Mode
// ============================================
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (!darkModeToggle) return;

    function loadDarkMode() {
        const darkMode = localStorage.getItem('darkMode') === 'true';
        if (darkMode) {
            document.body.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️ الوضع النهاري';
        }
    }

    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark);
        this.textContent = isDark ? '☀️ الوضع النهاري' : '🌙 الوضع الليلي';
    });

    loadDarkMode();
}

// ============================================
// نظام النقاط
// ============================================
function loadPoints() {
    const points = localStorage.getItem('totalPoints');
    return points ? parseInt(points) : 0;
}

function savePoints(points) {
    localStorage.setItem('totalPoints', points);
    updatePointsDisplay();
}

function addPoints(amount, message) {
    const current = loadPoints();
    const newTotal = current + amount;
    savePoints(newTotal);
    showToast(`+${amount} نقطة: ${message}`);
}

function updatePointsDisplay() {
    const pointsElement = document.getElementById('totalPoints');
    if (pointsElement) {
        pointsElement.textContent = loadPoints();
    }
}

// ============================================
// نظام اسم المستخدم
// ============================================
function loadUserName() {
    let name = localStorage.getItem('userName');
    if (!name) {
        name = 'زائر';
        localStorage.setItem('userName', name);
    }
    updateUserNameDisplay(name);
    return name;
}

function updateUserNameDisplay(name) {
    const nameElements = document.querySelectorAll('.user-name-display');
    nameElements.forEach(el => el.textContent = name);
}

window.editUserName = function () {
    const currentName = localStorage.getItem('userName') || '';
    const newName = prompt('أدخل اسمك ليظهر في لوحة الشرف:', currentName === 'زائر' ? '' : currentName);

    if (newName && newName.trim() !== '') {
        localStorage.setItem('userName', newName.trim());
        updateUserNameDisplay(newName.trim());
        showToast('تم حفظ الاسم بنجاح!');

        // إذا كنا في صفحة لوحة الشرف، نُحدث اللوحة
        if (typeof renderLeaderboard === 'function') {
            renderLeaderboard();
        }
    }
};

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// نظام الصلوات
// ============================================
function loadPrayers() {
    const saved = localStorage.getItem('prayers');
    if (!saved) {
        const initial = {};
        prayers.forEach(p => {
            initial[p.id] = { completed: false, pointsGiven: false };
        });
        localStorage.setItem('prayers', JSON.stringify(initial));
        return initial;
    }
    return JSON.parse(saved);
}

function savePrayers(data) {
    localStorage.setItem('prayers', JSON.stringify(data));
    updatePrayersCount();
}

function renderPrayers() {
    const container = document.getElementById('prayersList');
    if (!container) return;

    const prayersData = loadPrayers();

    container.innerHTML = '';
    prayers.forEach(prayer => {
        const div = document.createElement('div');
        div.className = 'prayer-item';

        const label = document.createElement('label');
        label.style.cursor = 'pointer';
        label.style.display = 'flex';
        label.style.justifyContent = 'space-between';
        label.style.width = '100%';
        label.style.alignItems = 'center';

        const span = document.createElement('span');
        span.className = 'prayer-name';
        span.textContent = prayer.name;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'prayer-checkbox';
        checkbox.checked = prayersData[prayer.id].completed;

        checkbox.addEventListener('change', function () {
            const data = loadPrayers();
            if (this.checked && !data[prayer.id].pointsGiven) {
                data[prayer.id].completed = true;
                data[prayer.id].pointsGiven = true;
                addPoints(10, `صلاة ${prayer.name}`);
            } else {
                data[prayer.id].completed = this.checked;
            }
            savePrayers(data);
        });

        label.appendChild(span);
        label.appendChild(checkbox);
        div.appendChild(label);
        container.appendChild(div);
    });

    updatePrayersCount();
}

function updatePrayersCount() {
    const countElement = document.getElementById('prayersCount');
    if (!countElement) return;

    const prayersData = loadPrayers();
    const count = prayers.filter(p => prayersData[p.id].completed).length;
    countElement.textContent = count;
}

// ============================================
// ختمة القرآن
// ============================================
function loadQuranProgress() {
    const saved = localStorage.getItem('quranParts');
    const parts = saved ? parseInt(saved) : 0;
    updateQuranDisplay(parts);
    return parts;
}

function updateQuranProgress() {
    const input = document.getElementById('quranParts');
    if (!input) return;

    const parts = parseInt(input.value) || 0;

    if (parts < 0 || parts > 30) {
        showToast('الرجاء إدخال عدد بين 0 و 30');
        return;
    }

    const oldParts = parseInt(localStorage.getItem('quranParts') || 0);
    localStorage.setItem('quranParts', parts);
    updateQuranDisplay(parts);

    if (parts > oldParts) {
        const added = parts - oldParts;
        addPoints(added * 20, `تحديث ختمة القرآن (+${added * 20} نقطة)`);
    }
}

function updateQuranDisplay(parts) {
    const percentage = Math.round((parts / 30) * 100);
    const progressBar = document.getElementById('quranProgressBar');
    const progressText = document.getElementById('quranProgressText');
    const input = document.getElementById('quranParts');

    if (progressBar) {
        progressBar.style.width = percentage + '%';
        progressBar.textContent = percentage + '%';
    }
    if (progressText) {
        progressText.textContent = `${parts} جزء من 30`;
    }
    if (input) {
        input.value = parts;
    }
}

// ============================================
// حديث اليوم
// ============================================
function loadHadith() {
    const hadithText = document.getElementById('hadithText');
    const hadithSource = document.getElementById('hadithSource');

    if (!hadithText || !hadithSource) return;

    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const hadithIndex = dayOfYear % hadiths.length;
    const selectedHadith = hadiths[hadithIndex];

    hadithText.textContent = selectedHadith.text;
    hadithSource.textContent = selectedHadith.source;
}

// ============================================
// سلسلة الأيام (Streak) والتحفيز
// ============================================
function updateStreak() {
    const streakElement = document.getElementById('streakDays');
    if (!streakElement) return;

    const today = new Date();
    const todayKey = today.toISOString().split('T')[0]; // YYYY-MM-DD

    const lastVisit = localStorage.getItem('lastVisitDate');
    let streak = parseInt(localStorage.getItem('streak') || '0', 10);

    if (!lastVisit) {
        streak = 1;
    } else if (lastVisit === todayKey) {
        // نفس اليوم، لا نغير السلسلة
    } else {
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        const yesterdayKey = yesterday.toISOString().split('T')[0];

        if (lastVisit === yesterdayKey) {
            streak += 1;
        } else {
            streak = 1;
        }
    }

    localStorage.setItem('lastVisitDate', todayKey);
    localStorage.setItem('streak', String(streak));

    const label = streak === 1 ? 'يوم' : (streak <= 10 ? 'أيام' : 'يوماً');
    streakElement.textContent = `${streak} ${label}`;
}

function updateHomeSummary() {
    const quranPercentElement = document.getElementById('summaryQuranPercent');
    const prayersDoneElement = document.getElementById('summaryPrayersDone');
    const motivationElement = document.getElementById('motivationMessage');

    if (!quranPercentElement || !prayersDoneElement || !motivationElement) return;

    // بيانات ختمة القرآن
    const parts = parseInt(localStorage.getItem('quranParts') || '0', 10);
    const percent = Math.round((parts / 30) * 100);
    quranPercentElement.textContent = `${percent}%`;

    // بيانات الصلوات
    const prayersData = loadPrayers();
    const doneCount = prayers.filter(p => prayersData[p.id].completed).length;
    prayersDoneElement.textContent = `${doneCount} / 5`;

    // رسالة تحفيزية بسيطة
    let message = '';
    if (doneCount === 0 && parts === 0) {
        message = 'ابدأ بخطوة صغيرة الآن: صلِّ أقرب صلاة في وقتها واقرأ صفحة واحدة من القرآن. 🤍';
    } else if (doneCount >= 3 || parts >= 5) {
        message = 'رائع! استمرارك اليوم يقربك أكثر من ختمة القرآن والمحافظة على صلواتك. استمر 👏';
    } else {
        message = 'بداية طيبة! زِد من إنجازك اليوم بصلاة ما تبقى من الصلوات وقراءة بعض الآيات. 🌙';
    }

    motivationElement.textContent = message;
}

// ============================================
// تهيئة التطبيق
// ============================================
function init() {
    initDarkMode();
    updatePointsDisplay();
    loadUserName();

    // تهيئة الصلوات إذا كانت الصفحة تحتوي عليها
    if (document.getElementById('prayersList')) {
        loadPrayers();
        renderPrayers();
    }

    // تهيئة ختمة القرآن إذا كانت الصفحة تحتوي عليها
    if (document.getElementById('quranParts')) {
        loadQuranProgress();
    }

    // تهيئة حديث اليوم إذا كانت الصفحة تحتوي عليها
    if (document.getElementById('hadithText')) {
        loadHadith();
    }

    // تهيئة ملخص اليوم إذا كانت العناصر موجودة (الصفحة الرئيسية)
    updateStreak();
    updateHomeSummary();
}

// تشغيل التهيئة عند تحميل الصفحة
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
