function loadMarkdown() {
    fetch('https://raw.githubusercontent.com/TeodorAnderson/SwatProject/main/README.md')
      .then(response => response.text())
      .then(text => {
        const markdown = window.markdownit();
        const html = markdown.render(text);
        document.getElementById('markdown-content').innerHTML = html;
      });
  }
  window.addEventListener('DOMContentLoaded', loadMarkdown);