// BEGIN
function wrapBodyContentInParagraphs() {
    const bodyContent = document.body.innerHTML.trim();
    const lines = bodyContent.split('\n');
    const wrappedLines = lines.map(line => `<p>${line.trim()}</p>`);
    const wrappedContent = wrappedLines.join('\n');
    document.body.innerHTML = wrappedContent;
}

wrapBodyContentInParagraphs();
// END