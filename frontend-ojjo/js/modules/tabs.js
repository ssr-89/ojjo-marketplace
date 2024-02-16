export function tabsShow() {
  // for (let index = 0; index < tabsLists.length; index++) {
  //   if (tabsLists[index].classList.contains('show-list')) {
  //     const tabsListsItemHeight = tabsLists[index].getBoundingClientRect().height;
  //     tabsProducts.style.minHeight = tabsListsItemHeight + "px";
  //   }
  // }
  const tabsProducts = document.getElementById("tabs-products")
  const tabsBtns = document.querySelectorAll('.tabs-name__btn');
  const tabsLists = document.querySelectorAll('.tabs-products__list');

  tabsBtns.forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', (tabsBtn) => {
      const path = tabsBtn.currentTarget.dataset.path;

      for (let i = 0; i < tabsBtns.length; i++) {
        tabsBtns[i].classList.remove('open-tab');
      }
      for (let i = 0; i < tabsLists.length; i++) {
        tabsLists[i].classList.remove('show-list');
      }
      tabsBtn.currentTarget.classList.add('open-tab');
      const tabsShowList = document.querySelector(`[data-target="${path}"]`);
      tabsShowList.classList.add('show-list');
    });
  });
}
