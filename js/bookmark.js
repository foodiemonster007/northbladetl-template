// Saves the reader's place in each series so the series page can offer
// "Continue reading". The bookmark is saved when the reader scrolls to the
// bottom of the chapter text. It is stored in localStorage under
// 'lastRead:<series>' and only ever moves forward: finishing an earlier
// chapter does not replace a later bookmark.

function saveBookmark() {
  try {
    // The series tag comes from the chapter text's data-series attribute, and
    // the chapter id is the last part of the URL: .../<SERIES><number>.html
    var series = document.getElementById('navibar').getAttribute('data-series');
    if (!series) return;

    var parts = location.pathname.split('/').filter(Boolean);
    var id = parts[parts.length - 1].replace('.html', '');
    var match = id.match(/(\d+)$/);
    if (!match) return;

    var num = parseInt(match[1], 10);
    var key = 'lastRead:' + series;

    var saved = null;
    try { saved = JSON.parse(localStorage.getItem(key)); } catch (e) {}
    if (saved && saved.num >= num) return;

    var heading = document.getElementById('chapterTitle');
    localStorage.setItem(key, JSON.stringify({
      num: num,
      id: id,
      url: location.pathname,
      title: heading ? heading.textContent.trim() : id
    }));
  } catch (e) {
    // localStorage can be unavailable (private mode, blocked); skip saving.
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var content = document.getElementById('navibar');
  if (!content) return;

  // An empty marker placed right after the chapter text. Once it scrolls
  // into view, the reader has reached the end.
  var endMarker = document.createElement('div');
  endMarker.style.height = '1px';
  content.insertAdjacentElement('afterend', endMarker);

  if (!('IntersectionObserver' in window)) {
    saveBookmark();
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    if (entries.some(function (entry) { return entry.isIntersecting; })) {
      saveBookmark();
      observer.disconnect();
    }
  });
  observer.observe(endMarker);
});
