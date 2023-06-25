// BEGIN
export default () => {
    const divs = document.querySelectorAll('div');
  
    for (const div of divs) {
      const childNodes = div.childNodes;
  
      for (const node of childNodes) {
        if (node instanceof Text) {
          const trimmedText = node.textContent.trim();
  
          if (trimmedText !== '') {
            const paragraphElement = document.createElement('p');
            paragraphElement.textContent = trimmedText;
            node.replaceWith(paragraphElement);
          }
        }
      }
    }
};
// END