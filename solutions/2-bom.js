// BEGIN
function solution(url) {
    const browserName = navigator.userAgent.split(' ')[0];
    return `${browserName} ${url}`;
  }
  
  export default solution;
// END