// ============================================
// عرض صفحات القرآن المصحورة
// ============================================
let currentPage = 1;
const totalPages = 604;
const baseUrl = 'https://raw.githubusercontent.com/gharibzq/quran/refs/heads/main/';

// ============================================
// تهيئة صفحة القرآن
// ============================================
function initQuran() {
    displayPage(currentPage);
    updateBookmarkButton();
    updateBookmarkInfo();
}

// ============================================
// عرض صفحة محددة
// ============================================
function displayPage(page) {
    page = parseInt(page);
    if (isNaN(page) || page < 1) page = 1;
    if (page > totalPages) page = totalPages;

    currentPage = page;

    const img = document.getElementById('quranImage');
    const input = document.getElementById('pageInput');

    if (img) {
        // تحديث مصدر الصورة ليعرض الصفحة الحالية
        img.src = `${baseUrl}${currentPage}.jpg`;
        // Scroll to the image start
        img.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (input) {
        input.value = currentPage;
    }

    // تحديث أزرار التنقل
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');

    if (prevBtn) {
        prevBtn.disabled = currentPage === 1;
        prevBtn.style.opacity = currentPage === 1 ? '0.5' : '1';
    }
    if (nextBtn) {
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.style.opacity = currentPage === totalPages ? '0.5' : '1';
    }

    // تحميل مسبق للصفحة التالية لتسريع القراءة (Preload)
    if (currentPage < totalPages) {
        const preloader = new Image();
        preloader.src = `${baseUrl}${currentPage + 1}.jpg`;
    }
}

// ============================================
// تغيير الصفحة باستخدام الأزرار
// ============================================
function changePage(direction) {
    displayPage(currentPage + direction);
}

// ============================================
// الانتقال لصفحة مخصصة من مربع الإدخال
// ============================================
function goToPage(page) {
    displayPage(page);
}

// ============================================
// حفظ العلامة المرجعية
// ============================================
function saveBookmark() {
    const bookmark = {
        page: currentPage,
        timestamp: new Date().toISOString()
    };

    localStorage.setItem('quranPageBookmark', JSON.stringify(bookmark));
    showToast(`تم حفظ العلامة: الصفحة ${currentPage}`);
    updateBookmarkButton();
    updateBookmarkInfo();
}

// ============================================
// الانتقال للعلامة المرجعية
// ============================================
function goToBookmark() {
    const savedBookmark = localStorage.getItem('quranPageBookmark');

    if (!savedBookmark) {
        showToast('لا توجد علامة محفوظة');
        return;
    }

    try {
        const bookmark = JSON.parse(savedBookmark);
        displayPage(bookmark.page);
        showToast(`تم الانتقال للعلامة المحفوظة: الصفحة ${bookmark.page}`);
    } catch (error) {
        console.error('Error loading bookmark:', error);
        showToast('حدث خطأ في تحميل العلامة');
    }
}

// ============================================
// تحديث حالة زر العودة للعلامة
// ============================================
function updateBookmarkButton() {
    const goToBookmarkBtn = document.getElementById('goToBookmarkBtn');
    const savedBookmark = localStorage.getItem('quranPageBookmark');

    if (goToBookmarkBtn) {
        if (savedBookmark) {
            goToBookmarkBtn.disabled = false;
            goToBookmarkBtn.style.opacity = '1';
        } else {
            goToBookmarkBtn.disabled = true;
            goToBookmarkBtn.style.opacity = '0.5';
        }
    }
}

// ============================================
// تحديث معلومات العلامة النصية
// ============================================
function updateBookmarkInfo() {
    const bookmarkInfo = document.getElementById('bookmarkInfo');
    const savedBookmark = localStorage.getItem('quranPageBookmark');

    if (!bookmarkInfo) return;

    if (savedBookmark) {
        try {
            const bookmark = JSON.parse(savedBookmark);
            bookmarkInfo.style.display = 'block';
            bookmarkInfo.textContent = `علامة محفوظة: الصفحة ${bookmark.page}`;
        } catch (e) {
            bookmarkInfo.style.display = 'none';
        }
    } else {
        bookmarkInfo.style.display = 'none';
    }
}

// تشغيل التهيئة عند تحميل الصفحة
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuran);
} else {
    initQuran();
}
