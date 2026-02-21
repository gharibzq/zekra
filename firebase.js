// ============================================
// اتصال قاعدة بيانات Firebase السحابية
// ============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, ref, set, onValue, serverTimestamp, query, orderByChild, limitToLast } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

// إعدادات مشروع Firebase الخاصة بك
const firebaseConfig = {
    apiKey: "AIzaSyD9LgSnBGSinDotHb4kQgy8I2ldX2VaAX8",
    authDomain: "zozotvpc.firebaseapp.com",
    databaseURL: "https://zozotvpc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "zozotvpc",
    storageBucket: "zozotvpc.firebasestorage.app",
    messagingSenderId: "1040144226034",
    appId: "1:1040144226034:web:7272fb9f5e57d388db626b",
    measurementId: "G-HE95P45S5B"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// ============================================ 
// نظام تحديث لوحة الشرف السحابية (Global Leaderboard)
// ============================================

// دالة لتحديث أو إضافة نقاط المستخدم في قاعدة البيانات
window.syncPointsToCloud = function () {
    const userName = localStorage.getItem('userName');
    const totalPoints = parseInt(localStorage.getItem('totalPoints') || '0');

    // تأكد من أن المستخدم وضع اسماً حقيقياً وليس فقط زائر ولم يضع اسم فارغ
    if (userName && userName !== 'زائر' && userName.trim() !== '') {
        // نستخدم الاسم كمعرف (Key) مؤقت
        const safeKey = userName.replace(/[.#$[\]]/g, ''); // تنظيف الاسم ليقبله Firebase

        set(ref(database, 'leaderboard/' + safeKey), {
            name: userName,
            points: totalPoints,
            lastUpdate: serverTimestamp()
        }).catch((error) => {
            console.error("Error syncing to Firebase: ", error);
        });
    }
}

// تعديل الدالة الأصلية في script.js لترفع النقاط بعد الحفظ المحلي
// نقوم بالتحقق أولاً للتأكد من أننا لم نقم بتعديلها مسبقاً
if (!window.originalSavePointsBound) {
    if (typeof window.savePoints === 'function') {
        window.originalSavePoints = window.savePoints;
        window.savePoints = function (points) {
            window.originalSavePoints(points); // حفظ محلياً وتحديث الواجهة
            window.syncPointsToCloud();        // رفع لقاعدة البيانات فوراً
        };
        window.originalSavePointsBound = true;
    }
}

// الدالة المسؤولة عن جلب ترتيب المستخدمين الحقيقي ورسم لوحة الشرف
window.renderGlobalLeaderboard = function () {
    const listContainer = document.getElementById('leaderboardList');
    if (!listContainer) return;

    listContainer.innerHTML = '<div style="text-align:center; padding: 2rem;">جاري تحميل لوحة الشرف الحية... ⏳</div>';

    // جلب البيانات من Firebase وترتيبها حسب النقاط (الأعلى أولاً)
    const topUsersQuery = query(ref(database, 'leaderboard'), orderByChild('points'), limitToLast(65));

    onValue(topUsersQuery, (snapshot) => {
        listContainer.innerHTML = '';
        const users = [];

        // Firebase يرجع البيانات مرتبة تصاعدياً، سنعكسها لتصبح الأعلى أولاً
        snapshot.forEach((childSnapshot) => {
            users.unshift(childSnapshot.val());
        });

        const currentName = localStorage.getItem('userName') || 'زائر';

        // إضافة المؤسسين أو الأشخاص الفخريين إذا أردت تثبيتهم دائماً (اختياري، يمكنك إزالته)
        const honoraryMembers = [];

        // ندمج الأعضاء الشرفيين مع زوار الموقع الفعليين، مع التأكد من عدم التكرار (لتفادي وجود نسختين من مصطفى مثلا)
        let combinedUsers = [...users];
        honoraryMembers.forEach(honorMember => {
            if (!combinedUsers.find(u => u.name === honorMember.name)) {
                combinedUsers.push(honorMember);
            }
        });

        // إعادة ترتيب الجميع تنازلياً
        combinedUsers.sort((a, b) => b.points - a.points);

        if (combinedUsers.length === 0) {
            listContainer.innerHTML = '<div style="text-align:center; padding: 2rem;">لا يوجد مستخدمين بعد! كن أنت الأول واجمع بعض النقاط. 🏆</div>';
            return;
        }

        // رسم القائمة
        combinedUsers.forEach((user, index) => {
            const rank = index + 1;
            let rankBadge = `<span style="color: var(--text-muted);">#${rank}</span>`;
            if (rank === 1) rankBadge = '🥇';
            else if (rank === 2) rankBadge = '🥈';
            else if (rank === 3) rankBadge = '🥉';

            const isCurrent = (user.name === currentName);

            const displayIcon = user.icon ? user.icon : '👤';

            const itemHtml = `
                <div class="lb-item ${isCurrent ? 'is-current' : ''} ${user.isHonorary ? 'honorary-item' : ''}">
                    <div class="lb-rank">${rankBadge}</div>
                    <div class="lb-icon">${displayIcon}</div>
                    <div class="lb-details">
                        <div class="lb-name">
                            ${user.name} 
                            ${isCurrent ? '<span style="font-size:0.8rem; color:var(--text-muted);">(أنت)</span>' : ''}
                            ${isCurrent && currentName === 'زائر' ? '<span style="font-size:0.8rem; color:var(--text-muted); cursor:pointer; text-decoration:underline;" onclick="editUserName()">تغيير الاسم</span>' : ''}
                        </div>
                        <div class="lb-role">${user.role ? user.role : (rank === 1 && !user.isHonorary ? 'المتصدر 👑' : 'مستخدم نشط')}</div>
                    </div>
                    <div class="lb-points">${user.points.toLocaleString('en-US')} <span style="font-size:0.9rem;">نقطة</span></div>
                </div>
            `;

            listContainer.insertAdjacentHTML('beforeend', itemHtml);
        });
    }, (error) => {
        console.error("Firebase read error:", error);
        listContainer.innerHTML = '<div style="text-align:center; padding: 2rem; color: red;">عذراً، حدث خطأ في تحميل لوحة الشرف.</div>';
    });
}

// ============================================ 
// عداد الاستغفار العالمي (Global Istighfar Counter)
// ============================================

window.initGlobalCounter = function () {
    const globalCounterValue = document.getElementById('globalIstighfarCounter');
    const globalBtn = document.getElementById('globalIstighfarBtn');

    if (!globalCounterValue || !globalBtn) return;

    const counterRef = ref(database, 'global_stats/istighfar_count');

    // قراءة العداد الحي
    onValue(counterRef, (snapshot) => {
        const val = snapshot.val() || 0;
        globalCounterValue.textContent = val.toLocaleString('en-US');
    });

    // عند الضغط على زر الاستغفار
    globalBtn.addEventListener('click', () => {
        // تحديث القيمة محلياً لسرعة الاستجابة
        const currentText = globalCounterValue.textContent.replace(/,/g, '');
        const currentVal = parseInt(currentText) || 0;
        globalCounterValue.textContent = (currentVal + 1).toLocaleString('en-US');

        // تأثير بصري
        globalBtn.style.transform = 'scale(0.95)';
        setTimeout(() => globalBtn.style.transform = '', 100);

        // إضافة نقاط للمستخدم شخصياً
        if (typeof addPoints === 'function') {
            addPoints(1, 'استغفار (عالمي)');
        }

        // جلب القيمة الحالية من السيرفر وزيادتها بواحد بشكل آمن
        // ملاحظة: الطريقة الأفضل في بيئة الإنتاج هي استخدام runTransaction
        // لكن للتبسيط ولتجنب استيراد دوال إضافية سنقوم بقراءة ثم كتابة سريعة
        import("https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js").then((module) => {
            const { runTransaction } = module;
            runTransaction(counterRef, (currentData) => {
                if (currentData === null) {
                    return 1;
                } else {
                    return currentData + 1;
                }
            }).catch(error => console.error("Error updating global counter:", error));
        });
    });
}

// تشغيل العداد العالمي عند توفر العناصر
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(window.initGlobalCounter, 1000); // ننتظر قليلاً لضمان تحميل واجهة المستخدم
    });
} else {
    setTimeout(window.initGlobalCounter, 1000);
}
