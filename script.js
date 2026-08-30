// Marks a lesson as complete and saves it to the browser
// so the dashboard's progress bar and badges can find it.
// Wrapped in try/catch because some browsers (e.g. Safari) block
// localStorage when a page is opened as a local file instead of
// through a real web address like GitHub Pages.
function markComplete(lessonName) {
    try {
        localStorage.setItem(lessonName, "complete");
    } catch (e) {
        console.warn("Couldn't save progress in this browser:", e);
    }
}

// Used by any legacy "Open Lesson" buttons that pass a week number.
function openLesson(week) {
    window.location.href = "lesson" + week + ".html";
}
