// ============================================
// أذكار الصباح الكاملة
// ============================================
const morningDhikr = [
    { id: 'morning1', text: 'أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، رب أسألك خير ما في هذا اليوم وخير ما بعده، وأعوذ بك من شر ما في هذا اليوم وشر ما بعده، رب أعوذ بك من الكسل وسوء الكبر، رب أعوذ بك من عذاب في النار وعذاب في القبر', translation: 'أصبحنا وأصبح الملك لله' },
    { id: 'morning2', text: 'اللهم بك أصبحنا، وبك أمسينا، وبك نحيا، وبك نموت، وإليك النشور', translation: 'اللهم بك أصبحنا' },
    { id: 'morning3', text: 'اللهم إني أصبحت أشهدك، وأشهد حملة عرشك، وملائكتك وجميع خلقك، أنك أنت الله لا إله إلا أنت وحدك لا شريك لك، وأن محمداً عبدك ورسولك', translation: 'اللهم إني أصبحت أشهدك' },
    { id: 'morning4', text: 'اللهم ما أصبح بي من نعمة أو بأحد من خلقك فمنك وحدك لا شريك لك، فلك الحمد ولك الشكر', translation: 'اللهم ما أصبح بي من نعمة' },
    { id: 'morning5', text: 'حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم', translation: 'حسبي الله' },
    { id: 'morning6', text: 'بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم', translation: 'بسم الله الذي لا يضر' },
    { id: 'morning7', text: 'رضيت بالله ربا وبالإسلام دينا وبمحمد صلى الله عليه وسلم نبيا', translation: 'رضيت بالله ربا' },
    { id: 'morning8', text: 'يا حي يا قيوم برحمتك أستغيث أصلح لي شأني كله ولا تكلني إلى نفسي طرفة عين', translation: 'يا حي يا قيوم' },
    { id: 'morning9', text: 'أصبحنا على فطرة الإسلام وعلى كلمة الإخلاص وعلى دين نبينا محمد صلى الله عليه وسلم وعلى ملة أبينا إبراهيم حنيفاً مسلماً وما كان من المشركين', translation: 'أصبحنا على فطرة الإسلام' },
    { id: 'morning10', text: 'اللهم إني أصبحت منك في نعمة وعافية وستر، فأتم علي نعمتك وعافيتك وسترك في الدنيا والآخرة', translation: 'اللهم إني أصبحت منك في نعمة' },
    { id: 'morning11', text: 'اللهم إني أصبحت أشهدك وأشهد حملة عرشك وملائكتك وحملة عرشك أنك أنت الله لا إله إلا أنت وحدك لا شريك لك وأن محمداً عبدك ورسولك', translation: 'اللهم إني أصبحت أشهدك' },
    { id: 'morning12', text: 'اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت', translation: 'اللهم عافني في بدني' },
    { id: 'morning13', text: 'اللهم إني أعوذ بك من الكفر والفقر، وأعوذ بك من عذاب القبر، لا إله إلا أنت', translation: 'اللهم إني أعوذ بك من الكفر' },
    { id: 'morning14', text: 'اللهم إني أسألك العافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي، اللهم استر عوراتي وآمن روعاتي', translation: 'اللهم إني أسألك العافية' },
    { id: 'morning15', text: 'اللهم إني أسألك علماً نافعاً ورزقاً طيباً وعملاً متقبلاً', translation: 'اللهم إني أسألك علماً نافعاً' },
    { id: 'morning16', text: 'اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك المصير', translation: 'اللهم بك أصبحنا' },
    { id: 'morning17', text: 'أعوذ بكلمات الله التامات من شر ما خلق', translation: 'أعوذ بكلمات الله التامات' },
    { id: 'morning18', text: 'اللهم صل على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد، وبارك على محمد وعلى آل محمد كما باركت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد', translation: 'اللهم صل على محمد' },
    { id: 'morning19', text: 'سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته', translation: 'سبحان الله وبحمده' },
    { id: 'morning20', text: 'اللهم إني أسألك من الخير كله عاجله وآجله ما علمت منه وما لم أعلم، وأعوذ بك من الشر كله عاجله وآجله ما علمت منه وما لم أعلم', translation: 'اللهم إني أسألك من الخير كله' },
    { id: 'morning21', text: 'اللهم إني أعوذ بك من الهم والحزن، وأعوذ بك من العجز والكسل، وأعوذ بك من الجبن والبخل، وأعوذ بك من غلبة الدين وقهر الرجال', translation: 'اللهم إني أعوذ بك من الهم' },
    { id: 'morning22', text: 'اللهم إني أعوذ بك من شر ما عملت ومن شر ما لم أعمل', translation: 'اللهم إني أعوذ بك من شر ما عملت' },
    { id: 'morning23', text: 'اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي وأبوء بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت', translation: 'اللهم أنت ربي' },
    { id: 'morning24', text: 'اللهم إني أصبحت أُشهدك وأُشهد حملة عرشك وملائكتك وجميع خلقك أنك أنت الله لا إله إلا أنت وحدك لا شريك لك وأن محمداً عبدك ورسولك', translation: 'اللهم إني أصبحت أُشهدك' },
    { id: 'morning25', text: 'اللهم إني أسألك في صلاتي ودعائي بركة تطهر بها قلبي وتكشف بها كربي وتغفر بها ذنبي وتصلح بها أمري وتزيد بها رزقي وتقربني بها إليك', translation: 'اللهم إني أسألك في صلاتي' }
];

// ============================================
// أذكار المساء الكاملة
// ============================================
const eveningDhikr = [
    { id: 'evening1', text: 'أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، رب أسألك خير ما في هذه الليلة وخير ما بعدها، وأعوذ بك من شر ما في هذه الليلة وشر ما بعدها، رب أعوذ بك من الكسل وسوء الكبر، رب أعوذ بك من عذاب في النار وعذاب في القبر', translation: 'أمسينا وأمسى الملك لله' },
    { id: 'evening2', text: 'اللهم بك أمسينا، وبك أصبحنا، وبك نحيا، وبك نموت، وإليك المصير', translation: 'اللهم بك أمسينا' },
    { id: 'evening3', text: 'اللهم إني أمسيت أشهدك، وأشهد حملة عرشك، وملائكتك وجميع خلقك، أنك أنت الله لا إله إلا أنت وحدك لا شريك لك، وأن محمداً عبدك ورسولك', translation: 'اللهم إني أمسيت أشهدك' },
    { id: 'evening4', text: 'اللهم ما أمسى بي من نعمة أو بأحد من خلقك فمنك وحدك لا شريك لك، فلك الحمد ولك الشكر', translation: 'اللهم ما أمسى بي من نعمة' },
    { id: 'evening5', text: 'أعوذ بكلمات الله التامات من شر ما خلق', translation: 'أعوذ بكلمات الله التامات' },
    { id: 'evening6', text: 'اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت', translation: 'اللهم عافني في بدني' },
    { id: 'evening7', text: 'اللهم إني أعوذ بك من الكفر والفقر، وأعوذ بك من عذاب القبر، لا إله إلا أنت', translation: 'اللهم إني أعوذ بك من الكفر' },
    { id: 'evening8', text: 'حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم', translation: 'حسبي الله' },
    { id: 'evening9', text: 'أمسينا على فطرة الإسلام وعلى كلمة الإخلاص وعلى دين نبينا محمد صلى الله عليه وسلم وعلى ملة أبينا إبراهيم حنيفاً مسلماً وما كان من المشركين', translation: 'أمسينا على فطرة الإسلام' },
    { id: 'evening10', text: 'اللهم إني أمسيت منك في نعمة وعافية وستر، فأتم علي نعمتك وعافيتك وسترك في الدنيا والآخرة', translation: 'اللهم إني أمسيت منك في نعمة' },
    { id: 'evening11', text: 'اللهم إني أمسيت أشهدك وأشهد حملة عرشك وملائكتك وحملة عرشك أنك أنت الله لا إله إلا أنت وحدك لا شريك لك وأن محمداً عبدك ورسولك', translation: 'اللهم إني أمسيت أشهدك' },
    { id: 'evening12', text: 'اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت', translation: 'اللهم عافني في بدني' },
    { id: 'evening13', text: 'اللهم إني أعوذ بك من الكفر والفقر، وأعوذ بك من عذاب القبر، لا إله إلا أنت', translation: 'اللهم إني أعوذ بك من الكفر' },
    { id: 'evening14', text: 'اللهم إني أسألك العافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي، اللهم استر عوراتي وآمن روعاتي', translation: 'اللهم إني أسألك العافية' },
    { id: 'evening15', text: 'اللهم إني أسألك علماً نافعاً ورزقاً طيباً وعملاً متقبلاً', translation: 'اللهم إني أسألك علماً نافعاً' },
    { id: 'evening16', text: 'اللهم بك أمسينا وبك أصبحنا وبك نحيا وبك نموت وإليك المصير', translation: 'اللهم بك أمسينا' },
    { id: 'evening17', text: 'أعوذ بكلمات الله التامات من شر ما خلق', translation: 'أعوذ بكلمات الله التامات' },
    { id: 'evening18', text: 'اللهم صل على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد، وبارك على محمد وعلى آل محمد كما باركت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد', translation: 'اللهم صل على محمد' },
    { id: 'evening19', text: 'سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته', translation: 'سبحان الله وبحمده' },
    { id: 'evening20', text: 'اللهم إني أسألك من الخير كله عاجله وآجله ما علمت منه وما لم أعلم، وأعوذ بك من الشر كله عاجله وآجله ما علمت منه وما لم أعلم', translation: 'اللهم إني أسألك من الخير كله' },
    { id: 'evening21', text: 'اللهم إني أعوذ بك من الهم والحزن، وأعوذ بك من العجز والكسل، وأعوذ بك من الجبن والبخل، وأعوذ بك من غلبة الدين وقهر الرجال', translation: 'اللهم إني أعوذ بك من الهم' },
    { id: 'evening22', text: 'اللهم إني أعوذ بك من شر ما عملت ومن شر ما لم أعمل', translation: 'اللهم إني أعوذ بك من شر ما عملت' },
    { id: 'evening23', text: 'اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي وأبوء بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت', translation: 'اللهم أنت ربي' },
    { id: 'evening24', text: 'اللهم إني أمسيت أُشهدك وأُشهد حملة عرشك وملائكتك وجميع خلقك أنك أنت الله لا إله إلا أنت وحدك لا شريك لك وأن محمداً عبدك ورسولك', translation: 'اللهم إني أمسيت أُشهدك' },
    { id: 'evening25', text: 'اللهم إني أسألك في صلاتي ودعائي بركة تطهر بها قلبي وتكشف بها كربي وتغفر بها ذنبي وتصلح بها أمري وتزيد بها رزقي وتقربني بها إليك', translation: 'اللهم إني أسألك في صلاتي' }
];

// ============================================
// أذكار عامة
// ============================================
const generalDhikr = [
    { id: 'general1', text: 'سبحان الله', translation: 'سبحان الله' },
    { id: 'general2', text: 'الحمد لله', translation: 'الحمد لله' },
    { id: 'general3', text: 'الله أكبر', translation: 'الله أكبر' },
    { id: 'general4', text: 'لا إله إلا الله', translation: 'لا إله إلا الله' },
    { id: 'general5', text: 'لا حول ولا قوة إلا بالله', translation: 'لا حول ولا قوة إلا بالله' },
    { id: 'general6', text: 'استغفر الله', translation: 'استغفر الله' },
    { id: 'general7', text: 'اللهم صل على محمد', translation: 'اللهم صل على محمد' },
    { id: 'general8', text: 'سبحان الله وبحمده', translation: 'سبحان الله وبحمده' },
    { id: 'general9', text: 'سبحان الله العظيم', translation: 'سبحان الله العظيم' },
    { id: 'general10', text: 'الحمد لله رب العالمين', translation: 'الحمد لله رب العالمين' },
    { id: 'general11', text: 'لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير', translation: 'لا إله إلا الله وحده' },
    { id: 'general12', text: 'أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه', translation: 'أستغفر الله العظيم' },
    { id: 'general13', text: 'اللهم صل على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد', translation: 'اللهم صل على محمد' },
    { id: 'general14', text: 'سبحان الله والحمد لله ولا إله إلا الله والله أكبر', translation: 'سبحان الله والحمد لله' },
    { id: 'general15', text: 'اللهم إني أسألك الجنة وأعوذ بك من النار', translation: 'اللهم إني أسألك الجنة' }
];

// ============================================
// تحميل بيانات الأذكار
// ============================================
function loadDhikrData() {
    const saved = localStorage.getItem('dhikrData');
    if (!saved) {
        const initial = {};
        [...morningDhikr, ...eveningDhikr, ...generalDhikr].forEach(d => {
            initial[d.id] = 0;
        });
        localStorage.setItem('dhikrData', JSON.stringify(initial));
        return initial;
    }
    return JSON.parse(saved);
}

function saveDhikrData(data) {
    localStorage.setItem('dhikrData', JSON.stringify(data));
    updateStats();
}

// ============================================
// عرض الأذكار (الذكي والتفاعلي)
// ============================================
if (!window.sessionDhikr) window.sessionDhikr = {};

const targetMap = {
    'morning7': 3,
    'morning17': 3,
    'morning19': 3,
    'evening5': 3,
    'evening17': 3,
    'evening19': 3,
    'general1': 33,
    'general2': 33,
    'general3': 34,
    'general6': 100,
    'general8': 100
};

function renderDhikrList(list, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const dhikrData = loadDhikrData();

    container.innerHTML = '';
    list.forEach((item, index) => {
        const target = targetMap[item.id] || 1;
        if (window.sessionDhikr[item.id] === undefined) {
            window.sessionDhikr[item.id] = target;
        }

        const div = document.createElement('div');
        div.className = 'dhikr-item';
        div.id = `dhikr-item-${item.id}`;
        // جعل العنصر قابلاً للنقر
        div.style.cursor = 'pointer';
        div.title = 'اضغط هنا لعد الذكر';

        const content = document.createElement('div');
        content.className = 'dhikr-content';

        const text = document.createElement('div');
        text.className = 'dhikr-text';
        text.textContent = item.text;

        const translation = document.createElement('div');
        translation.className = 'dhikr-translation';
        translation.textContent = item.translation + (target > 1 ? ` (${target} مرات)` : '');

        content.appendChild(text);
        content.appendChild(translation);

        const counterWrapper = document.createElement('div');
        counterWrapper.className = 'dhikr-counter-wrapper';

        const value = document.createElement('div');
        value.className = 'counter-value';
        value.textContent = window.sessionDhikr[item.id];
        value.id = `session-val-${item.id}`;

        const totalTracker = document.createElement('div');
        totalTracker.style.fontSize = '0.85rem';
        totalTracker.style.color = 'var(--text-muted)';
        totalTracker.style.marginTop = '0.5rem';
        totalTracker.textContent = `الإجمالي: ${dhikrData[item.id] || 0}`;
        totalTracker.id = `total-val-${item.id}`;

        div.onclick = (e) => {
            if (window.sessionDhikr[item.id] > 0) {
                window.sessionDhikr[item.id]--;
                value.textContent = window.sessionDhikr[item.id];

                // زيادة الإجمالي
                incrementDhikr(item.id, item.text);
                const currentTotal = loadDhikrData()[item.id] || 0;
                totalTracker.textContent = `الإجمالي: ${currentTotal}`;

                // تأثير بصري للضغط
                div.style.transform = 'scale(0.98)';
                setTimeout(() => div.style.transform = '', 150);

                if (window.sessionDhikr[item.id] === 0) {
                    div.classList.add('dhikr-completed');
                    // التمرير التلقائي للعنصر التالي
                    const nextItem = list[index + 1];
                    if (nextItem) {
                        const nextItemEl = document.getElementById(`dhikr-item-${nextItem.id}`);
                        if (nextItemEl) {
                            nextItemEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                    }
                }
            }
        };

        counterWrapper.appendChild(value);
        counterWrapper.appendChild(totalTracker);

        div.appendChild(content);
        div.appendChild(counterWrapper);
        container.appendChild(div);

        // إذا كان مكتملاً من قبل
        if (window.sessionDhikr[item.id] === 0) {
            div.classList.add('dhikr-completed');
        }
    });
}

// ============================================
// زيادة العداد
// ============================================
function incrementDhikr(id, text) {
    const data = loadDhikrData();
    data[id] = (data[id] || 0) + 1;
    saveDhikrData(data);
    addPoints(2, text);

    if (typeof window.updateWeeklyProgress === 'function') {
        window.updateWeeklyProgress('dhikr', 1);
    }
}

// ============================================
// إعادة تعيين العداد
// ============================================
function resetDhikr(id) {
    const data = loadDhikrData();
    data[id] = 0;
    saveDhikrData(data);

    const valueElement = document.getElementById(`dhikr-${id}`);
    if (valueElement) {
        valueElement.textContent = '0';
    }
}

// ============================================
// تحديث الإحصائيات
// ============================================
function updateStats() {
    const dhikrData = loadDhikrData();

    let total = 0;
    let morning = 0;
    let evening = 0;
    let general = 0;

    morningDhikr.forEach(d => {
        const count = dhikrData[d.id] || 0;
        morning += count;
        total += count;
    });

    eveningDhikr.forEach(d => {
        const count = dhikrData[d.id] || 0;
        evening += count;
        total += count;
    });

    generalDhikr.forEach(d => {
        const count = dhikrData[d.id] || 0;
        general += count;
        total += count;
    });

    const totalElement = document.getElementById('totalDhikr');
    const morningElement = document.getElementById('morningDhikr');
    const eveningElement = document.getElementById('eveningDhikr');
    const generalElement = document.getElementById('generalDhikr');

    if (totalElement) totalElement.textContent = total;
    if (morningElement) morningElement.textContent = morning;
    if (eveningElement) eveningElement.textContent = evening;
    if (generalElement) generalElement.textContent = general;
}

// ============================================
// تهيئة صفحة الأذكار
// ============================================
function initDhikr() {
    renderDhikrList(morningDhikr, 'morningDhikrList');
    renderDhikrList(eveningDhikr, 'eveningDhikrList');
    renderDhikrList(generalDhikr, 'generalDhikrList');
    updateStats();
}

// تشغيل التهيئة عند تحميل الصفحة
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDhikr);
} else {
    initDhikr();
}
