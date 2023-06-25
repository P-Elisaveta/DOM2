const initializeTabs = () => {
  const tabWraps = Array.from(document.querySelectorAll('.row'));

  tabWraps.forEach((tabWrap) => {
    const tabs = Array.from(tabWrap.querySelectorAll('[role="tab"]'));

    tabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();

        const activeTab = tabWrap.querySelector('.nav-link.active');
        const activeContent = tabWrap.querySelector('.tab-pane.active');
        const targetTab = tabWrap.querySelector(tab.getAttribute('data-bs-target'));

        activeTab.classList.remove('active');
        activeContent.classList.remove('active');
        targetTab.classList.add('active');
        tab.classList.add('active');
      });
    });
  });
};

export default initializeTabs;
