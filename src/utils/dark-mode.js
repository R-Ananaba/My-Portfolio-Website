const darkMode = () => {
const themeToggleBtns = document.querySelectorAll('#theme-toggle');

//state: which is light-mode
 const theme = localStorage.getItem('theme')

//on mount: wen page is first visited and when its reloaded
 theme && document.body.classList.add(theme);

// Handlers
const handleThemeToggle = () => {
    document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode'))  {
                localStorage.setItem('theme', 'light-mode');
            }else {
                localStorage.removeItem('theme');
            }
};

// Events
    themeToggleBtns.forEach(sunBtn =>
        sunBtn.addEventListener('click', handleThemeToggle)    
    );
};

export default darkMode;