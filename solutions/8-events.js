export default () => {
  // BEGIN
  const button = document.querySelector('#alert-generator');
  const alertsContainer = document.querySelector('.alerts');
  let counter = 1;
  
  button.addEventListener('click', () => {
    const newAlert = document.createElement('div');
    newAlert.textContent = `Alert ${counter}`;
    newAlert.classList = 'alert alert-primary';
  
    alertsContainer.prepend(newAlert);
    counter++;
  });
  // END
};