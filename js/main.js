const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add('loading-none');
}, loadingDuration);


window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
    if (scrollY > 100) {
      navbar.classList.add("navbar-shrink");
    } else {
          navbar.classList.remove("navbar-shrink");
      }
  }



  window.addEventListener("scroll", function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      backtop.classList.add('backtop-show')
    } else {
      backtop.classList.remove('backtop-show')
    }
  }


  let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "images/light.svg";
  } else {
    this.firstElementChild.src = "images/dark.svg";
  }
  document.body.classList.toggle("dark");
});


const tabs = document.querySelectorAll(".ap-tab-link");
const tabs_content = document.querySelectorAll(".ap-tab-content");

function getActiveTab(i) {
  tabs.forEach((tab) => {
    tab.classList.remove("active-tab");
  });
  tabs_content.forEach((tabContent) => {
    tabContent.classList.remove("active-tab");
    tabContent.style.display = "none";
  });

  const selectedTab = tabs[i];
  const selectedTabContent = tabs_content[i];

  selectedTab.classList.add("active-tab");
  selectedTabContent.classList.add("active-tab");
  selectedTabContent.style.display = "block";
}

getActiveTab(0);

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (e) {
    e.preventDefault();
    getActiveTab(i);
  });
}


