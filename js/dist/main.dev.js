"use strict";

var loading = document.getElementById("loading");
var loadingDuration = 2000; // 2s

setTimeout(function () {
  loading.classList.add('loading-none');
}, loadingDuration);
window.addEventListener("scroll", function () {
  shrink();
});
var navbar = document.getElementById("navbar");

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
var backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backtop.classList.add('backtop-show');
  } else {
    backtop.classList.remove('backtop-show');
  }
}

var modeBtn = document.getElementById("mode-btn");
modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "images/light.svg";
  } else {
    this.firstElementChild.src = "images/dark.svg";
  }

  document.body.classList.toggle("dark");
});
var tabs = document.querySelectorAll(".ap-tab-link");
var tabs_content = document.querySelectorAll(".ap-tab-content");

function getActiveTab(i) {
  tabs.forEach(function (tab) {
    tab.classList.remove("active-tab");
  });
  tabs_content.forEach(function (tabContent) {
    tabContent.classList.remove("active-tab");
    tabContent.style.display = "none";
  });
  var selectedTab = tabs[i];
  var selectedTabContent = tabs_content[i];
  selectedTab.classList.add("active-tab");
  selectedTabContent.classList.add("active-tab");
  selectedTabContent.style.display = "block";
}

getActiveTab(0);

var _loop = function _loop(i) {
  tabs[i].addEventListener("click", function (e) {
    e.preventDefault();
    getActiveTab(i);
  });
};

for (var i = 0; i < tabs.length; i++) {
  _loop(i);
}