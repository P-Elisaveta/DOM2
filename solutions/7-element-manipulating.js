import camelCase from 'lodash/camelCase';

// BEGIN
const normalize = () => {
    const elements = document.body.querySelectorAll('*');
  
    for (const element of elements) {
      const classNames = element.className.split(' ');
  
      for (let i = 0; i < classNames.length; i++) {
        const className = classNames[i];
        const normalizedClassName = camelCase(className);
        classNames[i] = normalizedClassName;
      }
  
      element.className = classNames.join(' ');
    }
  };
  
  export default normalize;
// END