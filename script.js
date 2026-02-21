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
    const savedDate = localStorage.getItem('prayersDate');
    const today = new Date().toDateString();

    if (!saved || savedDate !== today) {
        // إذا كان يوم جديد أو لا توجد صلوات محفوظة، تصفير الصلوات
        const initial = {};
        prayers.forEach(p => {
            initial[p.id] = { completed: false, pointsGiven: false };
        });
        localStorage.setItem('prayers', JSON.stringify(initial));
        localStorage.setItem('prayersDate', today);
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

    let parts = parseInt(input.value) || 0;

    if (parts < 0 || parts > 30) {
        showToast('الرجاء إدخال عدد بين 0 و 30');
        return;
    }

    const oldParts = parseInt(localStorage.getItem('quranParts') || '0');
    let maxParts = parseInt(localStorage.getItem('quranMaxParts') || '0');
    let khatmahs = parseInt(localStorage.getItem('quranKhatmahs') || '0');

    // حفظ التقدم الحالي
    localStorage.setItem('quranParts', parts);

    // التحقق من النقاط المستحقة (فقط للأجزاء الجديدة التي لم تُقرأ من قبل في هذه الختمة)
    if (parts > maxParts) {
        const added = parts - maxParts;
        addPoints(added * 20, `تلاوة قرآن جديد (+${added * 20} نقطة)`);

        // تحديث تحدي الأسبوع إذا كان التحدي قرآني
        if (typeof window.updateWeeklyProgress === 'function') {
            window.updateWeeklyProgress('quran', added);
        }

        // تحديث أقصى جزء تم الوصول إليه في هذه الختمة
        maxParts = parts;
        localStorage.setItem('quranMaxParts', maxParts);
    }

    // إذا أتم 30 جزء (ختمة كاملة)
    let khatmahClaimed = localStorage.getItem('quranKhatmahClaimed') === 'true';
    if (parts === 30 && !khatmahClaimed) {
        khatmahs++;
        localStorage.setItem('quranKhatmahs', khatmahs);

        // منع أخذ الجائزة مرة أخرى إلا بعد بدء ختمة جديدة
        localStorage.setItem('quranKhatmahClaimed', 'true');

        // جائزة كبرى للختمة
        addPoints(500, `🎉 مبارك إتمام ختمة القرآن! (+500 نقطة)`);
    }

    updateQuranDisplay(parts);
}

function updateQuranDisplay(parts) {
    const percentage = Math.round((parts / 30) * 100);
    const progressBar = document.getElementById('quranProgressBar');
    const progressText = document.getElementById('quranProgressText');
    const input = document.getElementById('quranParts');
    const journeyMap = document.getElementById('quranJourneyMap');
    const khatmahBadge = document.getElementById('khatmahCountBadge');

    let khatmahs = parseInt(localStorage.getItem('quranKhatmahs') || '0');

    if (khatmahBadge && khatmahs > 0) {
        khatmahBadge.textContent = `${khatmahs} ختمات`;
        khatmahBadge.style.display = 'inline-block';
    }

    const khatmahMsg = document.getElementById('khatmahCompleteMsg');
    if (khatmahMsg) {
        khatmahMsg.style.display = (parts === 30) ? 'block' : 'none';
    }

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

    // Render Journey Map if it exists (on home page)
    if (journeyMap) {
        journeyMap.innerHTML = ''; // إفراغ الخريطة

        for (let i = 1; i <= 30; i++) {
            const node = document.createElement('div');
            node.className = 'journey-node';
            node.textContent = i;
            node.title = `الجزء ${i}`;

            if (i <= parts) {
                node.classList.add('completed');
            } else if (i === parts + 1) {
                node.classList.add('current');
                node.title = `الجزء ${i} (الحالي)`;
            }

            // إضافة ميزة النقر المتوافق مع الإدخال
            node.onclick = () => {
                if (input) {
                    // إذا نقر على المتعقّد يرجع للخلف، وإلا يتقدم
                    input.value = i;
                    updateQuranProgress();
                }
            };

            journeyMap.appendChild(node);
        }
    }
}

window.startNewKhatmah = function () {
    localStorage.setItem('quranParts', 0);
    localStorage.setItem('quranMaxParts', 0);
    localStorage.removeItem('quranKhatmahClaimed');

    const input = document.getElementById('quranParts');
    if (input) input.value = 0;

    updateQuranDisplay(0);
    showToast('تم تصفير العداد لختمة جديدة! بالتوفيق 🌙');
};

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
// السنن اليومية
// ============================================
const dailySunnahs = [
    { title: 'السواك', desc: 'استخدام السواك عند الوضوء وقبل كل صلاة تطهيراً للفم ومرضاة للرب.' },
    { title: 'النوم على طهارة', desc: 'الوضوء قبل النوم والنوم على الشق الأيمن اقتداءً بالنبي ﷺ.' },
    { title: 'التبسم في وجه أخيك', desc: 'الابتسامة صدقة وتزرع المودة والمحبة في قلوب الآخرين.' },
    { title: 'أذكار الصباح والمساء', desc: 'المحافظة عليها تحفظ المسلم من كل سوء وتجلب طمأنينة القلب.' },
    { title: 'صلاة الضحى', desc: 'صلاة الأوابين وتعدل صدقة عن كل مفصل من مفاصل اليد.' },
    { title: 'إفشاء السلام', desc: 'إلقاء السلام على من عرفت ومن لم تعرف.' },
    { title: 'التيامن في اللبس', desc: 'البدء باليمين عند لبس الثوب وعند الانتعال.' }
];

// ============================================
// أسماء الله الحسنى
// ============================================
const asmaulHusna = [
    { name: 'الرَّحْمَنُ', meaning: 'الكثير الرحمة بعباده' },
    { name: 'الرَّحِيمُ', meaning: 'الذي يرحم المؤمنين يوم القيامة' },
    { name: 'الْمَلِكُ', meaning: 'صاحب الملك الذي يتصرف في ملكه كيف يشاء' },
    { name: 'الْقُدُّوسُ', meaning: 'المنزه عن كل عيب ونقص' },
    { name: 'السَّلَامُ', meaning: 'السالم من كل عيب ومنح السلامة لعباده' },
    { name: 'الْمُؤْمِنُ', meaning: 'الذي أمن الناس من ظلمه وصدق رسله بالمعجزات' },
    { name: 'الْمُهَيْمِنُ', meaning: 'الرقيب على كل شيء والمسيطر عليه' }
];

// ============================================
// اختبر معلوماتك (السؤال اليومي)
// ============================================
const dailyQuiz = [
    { question: 'ما السورة التي تُسمى قلب القرآن؟', options: ['البقرة', 'يس', 'الرحمن', 'الكهف'], answer: 1 },
    { question: 'من هو أول سفير في الإسلام؟', options: ['مصعب بن عمير', 'أسامة بن زيد', 'علي بن أبي طالب', 'عمار بن ياسر'], answer: 0 },
    { question: 'كم عدد أولي العزم من الرسل؟', options: ['ثلاثة', 'خمسة', 'سبعة', 'عشرة'], answer: 1 },
    { question: 'ما هو أطول نهر في العالم المذكور مسماه كعنصر بالقرآن مجازاً بالنهر؟', options: ['النيل', 'الفرات', 'دجلة', 'نهر الكوثر'], answer: 3 },
    { question: 'كم عدد سور القرآن الكريم؟', options: ['114', '110', '120', '112'], answer: 0 },
    { question: 'من هي أول زوجة للنبي محمد ﷺ؟', options: ['عائشة رضي الله عنها', 'خديجة بنت خويلد رضي الله عنها', 'زينب رضي الله عنها', 'حفصة رضي الله عنها'], answer: 1 },
    { question: 'في أي سنة هجرية فُرض صيام رمضان؟', options: ['السنة الأولى', 'السنة الثانية', 'السنة الثالثة', 'السنة الرابعة'], answer: 1 },
    { question: 'ما السورة التي تخلو من بسملة في بدايتها؟', options: ['النمل', 'التوبة', 'الأنفال', 'يونس'], answer: 1 },
    { question: 'من الصحابي الجليل الذي لُقب بـ "أمين هذه الأمة"؟', options: ['أبو بكر الصديق', 'عمر بن الخطاب', 'أبو عبيدة بن الجراح', 'عثمان بن عفان'], answer: 2 },
    { question: 'ما هو اسم خازن الجنة؟', options: ['رضوان', 'مالك', 'جبريل', 'ميكائيل'], answer: 0 },
    { question: 'ما هي أطول سورة في القرآن الكريم؟', options: ['آل عمران', 'النساء', 'المائدة', 'البقرة'], answer: 3 },
    { question: 'من هو النبي الذي أُلقي في النار ونجاه الله منها؟', options: ['موسى عليه السلام', 'عيسى عليه السلام', 'إبراهيم عليه السلام', 'يوسف عليه السلام'], answer: 2 },
    { question: 'كم عدد أركان الإسلام؟', options: ['ثلاثة أركان', 'أربعة أركان', 'خمسة أركان', 'ستة أركان'], answer: 2 },
    { question: 'ما هي الغزوة التي جُرح فيها النبي ﷺ وكُسرت رَباعيته؟', options: ['غزوة بدر', 'غزوة أحد', 'غزوة الخندق', 'غزوة تبوك'], answer: 1 },
    { question: 'من هو الصحابي الذي أشار على النبي بحفر الخندق؟', options: ['سلمان الفارسي', 'بلال بن رباح', 'علي بن أبي طالب', 'سعد بن معاذ'], answer: 0 },
    { question: 'ما هي السورة التي تعدل ثلث القرآن الكريم؟', options: ['الفلق', 'الناس', 'الإخلاص', 'الكافرون'], answer: 2 },
    { question: 'إلى أين كانت الهجرة الأولى للمسلمين؟', options: ['المدينة المنورة', 'الشام', 'الحبشة', 'الطائف'], answer: 2 },
    { question: 'ما هو الشهر الهجري الذي يأتي بعد شهر رجب؟', options: ['شعبان', 'رمضان', 'جمادى الآخرة', 'شوال'], answer: 0 },
    { question: 'من هو النبي الذي التهمه الحوت؟', options: ['يونس عليه السلام', 'أيوب عليه السلام', 'نوح عليه السلام', 'لوط عليه السلام'], answer: 0 },
    { question: 'ما هي أول صلاة صلاها المسلمون بعد تحويل القبلة إلى الكعبة؟', options: ['الفجر', 'الظهر', 'العصر', 'المغرب'], answer: 2 }
];

function getDayOfYear() {
    const today = new Date();
    return Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
}

function initDailyCards() {
    // تجهيز سُنة اليوم
    const sunnahTitle = document.getElementById('dailySunnahTitle');
    const sunnahDesc = document.getElementById('dailySunnahDesc');
    if (sunnahTitle && sunnahDesc) {
        const day = getDayOfYear();
        const sunnah = dailySunnahs[day % dailySunnahs.length];
        sunnahTitle.textContent = sunnah.title;
        sunnahDesc.textContent = sunnah.desc;

        const doneRecord = JSON.parse(localStorage.getItem('dailySunnahDone') || '{}');
        const sunnahBtn = document.getElementById('sunnahDoneBtn');
        if (sunnahBtn) {
            if (doneRecord.day === day && doneRecord.done) {
                sunnahBtn.textContent = '✅ أنجزت سُنة اليوم';
                sunnahBtn.classList.remove('btn-secondary');
                sunnahBtn.style.background = 'var(--primary)';
                sunnahBtn.style.color = 'white';
                sunnahBtn.onclick = null;
            }
        }
    }

    // تجهيز اسم الله اليوم
    const asmaName = document.getElementById('dailyAsmaName');
    const asmaMeaning = document.getElementById('dailyAsmaMeaning');
    if (asmaName && asmaMeaning) {
        const day = getDayOfYear();
        const asma = asmaulHusna[day % asmaulHusna.length];
        asmaName.textContent = asma.name;
        asmaMeaning.textContent = asma.meaning;
    }

    // تجهيز سؤال اليوم
    initDailyQuiz();
}

function initDailyQuiz() {
    const questionEl = document.getElementById('quizQuestion');
    const optionsEl = document.getElementById('quizOptions');
    if (!questionEl || !optionsEl) return;

    const day = getDayOfYear();
    const quiz = dailyQuiz[day % dailyQuiz.length];
    const quizState = JSON.parse(localStorage.getItem('dailyQuizState') || '{}');

    questionEl.textContent = quiz.question;
    optionsEl.innerHTML = '';

    const isAnsweredToday = quizState.day === day;

    quiz.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-secondary';
        btn.style.textAlign = 'right';
        btn.style.justifyContent = 'flex-start';
        btn.style.padding = '0.75rem 1rem';
        btn.textContent = opt;

        if (isAnsweredToday) {
            btn.disabled = true;
            if (index === quiz.answer) {
                btn.style.background = 'var(--primary)';
                btn.style.color = 'white';
                btn.style.borderColor = 'var(--primary)';
            } else if (index === quizState.selected) {
                btn.style.background = '#ef4444'; // Red for wrong answer
                btn.style.color = 'white';
                btn.style.borderColor = '#ef4444';
            }
        } else {
            btn.onclick = () => handleQuizAnswer(index, quiz.answer, day);
        }

        optionsEl.appendChild(btn);
    });

    const resultEl = document.getElementById('quizResult');
    if (isAnsweredToday && resultEl) {
        resultEl.style.display = 'block';
        if (quizState.selected === quiz.answer) {
            resultEl.textContent = '✅ إجابة صحيحة! حصلت على 50 نقطة.';
            resultEl.style.color = 'var(--primary)';
            resultEl.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
        } else {
            resultEl.textContent = '❌ إجابة خاطئة. حظ أوفر غداً!';
            resultEl.style.color = '#ef4444';
            resultEl.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
        }
    }
}

window.handleQuizAnswer = function (selectedIndex, correctIndex, day) {
    const isCorrect = selectedIndex === correctIndex;
    localStorage.setItem('dailyQuizState', JSON.stringify({ day: day, selected: selectedIndex }));

    if (isCorrect && typeof addPoints === 'function') {
        addPoints(50, 'إجابة صحيحة لسؤال اليوم (+50 نقطة)');
    }

    // إعادة بناء السؤال ليعكس حالة الاختيار
    initDailyQuiz();
};

window.completeSunnah = function () {
    const day = getDayOfYear();
    localStorage.setItem('dailySunnahDone', JSON.stringify({ day: day, done: true }));
    if (typeof addPoints === 'function') addPoints(10, 'تطبيق سُنة اليوم');
    initDailyCards();
};

// ============================================
// تهيئة التطبيق
// ============================================
const weeklyChallenges = [
    { id: 'istighfar_1000', title: 'تحدي الاستغفار', desc: 'استغفر الله العظيم 1000 مرة هذا الأسبوع', goal: 1000, type: 'dhikr', actionUrl: 'dhikr.html', actionText: 'ابدأ الاستغفار' },
    { id: 'quran_3_parts', title: 'تلاوة القرآن', desc: 'اقرأ 3 أجزاء من القرآن الكريم هذا الأسبوع', goal: 3, type: 'quran', actionUrl: 'quran.html', actionText: 'اقرأ الآن' },
    { id: 'salawat_500', title: 'الصلاة على النبي', desc: 'صلِّ على النبي محمد ﷺ 500 مرة', goal: 500, type: 'dhikr', actionUrl: 'rosary.html', actionText: 'افتح المسبحة' }
];

function getWeekNumber() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    const yearStart = new Date(d.getFullYear(), 0, 1);
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

function initWeeklyChallenge() {
    const titleEl = document.getElementById('weeklyChallengeTitle');
    const descEl = document.getElementById('weeklyChallengeDesc');
    const progressTextEl = document.getElementById('challengeProgressText');
    const progressBar = document.getElementById('challengeProgressBar');
    const actionBtn = document.getElementById('challengeActionBtn');

    if (!titleEl) return;

    const currentWeek = getWeekNumber();
    const challengeIndex = currentWeek % weeklyChallenges.length;
    const challenge = weeklyChallenges[challengeIndex];

    let progressData = JSON.parse(localStorage.getItem('weeklyChallenge') || '{"week": 0, "progress": 0, "completed": false}');
    if (progressData.week !== currentWeek) {
        progressData = { week: currentWeek, progress: 0, completed: false };
        localStorage.setItem('weeklyChallenge', JSON.stringify(progressData));
    }

    titleEl.textContent = challenge.title;
    descEl.textContent = challenge.desc;
    actionBtn.textContent = challenge.actionText;
    actionBtn.onclick = () => location.href = challenge.actionUrl;

    const percentage = Math.min(100, Math.round((progressData.progress / challenge.goal) * 100));
    progressTextEl.textContent = `${progressData.progress} / ${challenge.goal}`;
    progressBar.style.width = `${percentage}%`;
    progressBar.textContent = `${percentage}%`;

    if (progressData.completed) {
        actionBtn.textContent = '🥳 اكتمل التحدي!';
        actionBtn.classList.remove('btn-secondary');
        actionBtn.style.background = 'var(--primary)';
        actionBtn.style.color = 'white';
        actionBtn.style.border = 'none';
        actionBtn.onclick = null;
    }
}

window.updateWeeklyProgress = function (type, amount = 1) {
    const currentWeek = getWeekNumber();
    const challengeIndex = currentWeek % weeklyChallenges.length;
    const challenge = weeklyChallenges[challengeIndex];

    if (challenge.type !== type && type !== 'any') return;

    let progressData = JSON.parse(localStorage.getItem('weeklyChallenge') || '{"week": 0, "progress": 0, "completed": false}');

    if (progressData.week !== currentWeek) {
        progressData = { week: currentWeek, progress: 0, completed: false };
    }

    if (progressData.completed) return;

    progressData.progress += amount;

    if (progressData.progress >= challenge.goal) {
        progressData.progress = challenge.goal;
        progressData.completed = true;
        if (typeof addPoints === 'function') {
            addPoints(100, `إكمال تحدي الأسبوع: ${challenge.title} (+100 نقطة)`);
        }
    }

    localStorage.setItem('weeklyChallenge', JSON.stringify(progressData));
    initWeeklyChallenge();
};

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

    // تهيئة ميزات اليوم
    initDailyCards();
    initWeeklyChallenge();
    updateStreak();
    updateHomeSummary();

    // تسجيل Service Worker للـ PWA مع تنظيف الكاش القديم بقوة
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.getRegistrations().then(function (registrations) {
                for (let registration of registrations) {
                    registration.unregister();
                }
            });

            navigator.serviceWorker.register('./sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);

                    // Force update if new version found
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                // New update available, force reload
                                window.location.reload();
                            }
                        });
                    });
                })
                .catch(error => {
                    console.log('ServiceWorker registration failed: ', error);
                });
        });
    }
}

// تشغيل التهيئة عند تحميل الصفحة
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
