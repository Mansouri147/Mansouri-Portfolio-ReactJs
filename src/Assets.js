export const assetsTransitions = (projectName) => {
  document.querySelector(`.${projectName}-page .asset1`).style = "margin-left: 0px;";
  document.querySelector(`.${projectName}-page .asset2`).style = "right: -120px;";
  document.querySelector(`.${projectName}-page .asset1 span`).style = "left: 17px;";
};

export const assetsTransitionsReset = (projectName) => {
  document.querySelector(`.${projectName}-page .asset1`).style = "margin-left: 1500px;";
  document.querySelector(`.${projectName}-page .asset2`).style = "right: -1800px;";
  document.querySelector(`.${projectName}-page .asset1 span`).style = "left: 1500px;";
};


  // // If user scrolls down then assets animations start
  // function secondaryAssets() {
  //   if (document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500) {
  //     assetsTransitions(projectName);
  //   } else {
  //     assetsTransitionsReset(projectName);
  //   }
  // }
