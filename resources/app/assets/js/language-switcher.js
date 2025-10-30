// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    const langSwitch = document.getElementById('langSwitch');
    let currentLang = 'id'; // Default language

    function switchLanguage() {
        const newLang = currentLang === 'id' ? 'en' : 'id';
        
        // Update button text
        langSwitch.textContent = currentLang.toUpperCase();
        
        // Hide current language elements
        document.querySelectorAll(`[data-lang="${currentLang}"]`).forEach(el => {
            el.style.display = 'none';
        });
        
        // Show new language elements
        document.querySelectorAll(`[data-lang="${newLang}"]`).forEach(el => {
            el.style.display = 'block';
        });
        
        currentLang = newLang;
    }

    langSwitch.addEventListener('click', switchLanguage);
});