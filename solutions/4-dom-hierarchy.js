// BEGIN
function extractParagraphsContent(element) {
    const paragraphs = element.querySelectorAll('p');
    const content = [];
    paragraphs.forEach(p => {
        const paragraphContent = p.textContent.trim();
        content.push(paragraphContent);
    });
    return content;
}

export default extractParagraphsContent;
// END