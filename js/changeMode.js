// Reader settings: font size, day/night mode and font family.
// Choices are saved in localStorage and re-applied on every page load.

const FONT_STACKS = {
    Helvetica: '"Helvetica", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    NotoSans:  '"NotoSans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    Literata:  '"Literata", serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    SFProText: '"SFProText", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    Selawik:   '"Selawik", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
};

// ---- Apply a setting to the page ----

function setFontSize(size) {
    const content = document.getElementById("content");
    if (content) content.style.fontSize = size;

    const quotes = document.getElementsByClassName("night-mode-quotes");
    for (let i = 0; i < quotes.length; i++) quotes[i].style.fontSize = size;
}

function setMode(mode) {
    const wrapper = document.getElementById("wrappertext");
    const title = document.getElementById("chapterTitle");
    const quotes = document.getElementsByClassName("night-mode-quotes");
    const isDay = mode === "day";

    if (wrapper) wrapper.classList.toggle("day-mode", isDay);
    if (title) title.classList.toggle("day-mode-heading", isDay);
    for (let i = 0; i < quotes.length; i++) quotes[i].classList.toggle("day-mode-quotes", isDay);
}

function setSelectedFont(fontName) {
    if (!FONT_STACKS[fontName]) fontName = "Helvetica";

    const wrapper = document.getElementById("wrappertext");
    if (wrapper) wrapper.style.fontFamily = FONT_STACKS[fontName];

    localStorage.setItem("selectedFont", fontName);
}

// ---- Handlers for the Reader Settings buttons ----

// delta: -1 smaller, +1 larger, 0 reset to 16px.
function changeFontSize(delta) {
    const content = document.getElementById("content");
    if (!content) return;

    const change = Number(delta);
    const size = change === 0
        ? "16px"
        : parseInt(window.getComputedStyle(content).fontSize) + change + "px";

    localStorage.setItem("fontSize", size);
    setFontSize(size);
}

function changeWrapColor() {
    const wrapper = document.getElementById("wrappertext");
    const isDay = !wrapper.classList.contains("day-mode");

    setMode(isDay ? "day" : "night");
    localStorage.setItem("colorScheme", isDay ? "day" : "night");
}

function changeFontFamily(fontName) {
    setSelectedFont(fontName);

    const fontSelect = document.getElementById("fontSelect");
    if (fontSelect) fontSelect.value = fontName;
}

// ---- Restore saved settings ----

function applySavedSettings() {
    const savedFontSize = localStorage.getItem("fontSize");
    if (savedFontSize) setFontSize(savedFontSize);

    const savedColorScheme = localStorage.getItem("colorScheme");
    if (savedColorScheme) setMode(savedColorScheme);

    const savedFont = localStorage.getItem("selectedFont") || "Helvetica";
    setSelectedFont(savedFont);

    const fontSelect = document.getElementById("fontSelect");
    if (fontSelect) fontSelect.value = savedFont;
}

document.addEventListener("DOMContentLoaded", function () {
    applySavedSettings();

    // The "Reader Settings" button expands and collapses the panel below it.
    const collapsibles = document.getElementsByClassName("collapsible");
    for (let i = 0; i < collapsibles.length; i++) {
        collapsibles[i].addEventListener("click", function () {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
        });
    }
});
