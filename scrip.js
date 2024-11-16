const translations = {
    th: {
        about: "เกี่ยวกับ",
        services: "บริการ",
        news: "ข่าวสาร",
        contact: "ติดต่อ"
    },
    en: {
        about: "About",
        services: "Services",
        news: "News",
        contact: "Contact"
    }
};

// สถานะภาษาเริ่มต้น
let currentLanguage = 'th';

// ฟังก์ชันสลับภาษา
function toggleLanguage() {
    currentLanguage = currentLanguage === 'th' ? 'en' : 'th';

    // เปลี่ยนข้อความตามภาษาที่เลือก
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = translations[currentLanguage][key];
    });

    // เปลี่ยนข้อความปุ่มสลับภาษา
    document.getElementById("language-toggle").textContent = currentLanguage === 'th' ? "EN | ไทย" : "TH | English";
}

// กำหนดเหตุการณ์คลิกที่ปุ่มสลับภาษา
document.getElementById("language-toggle").addEventListener("click", (event) => {
    event.preventDefault(); // ป้องกันการโหลดหน้าใหม่
    toggleLanguage();
});