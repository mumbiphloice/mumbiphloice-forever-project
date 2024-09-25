let selectedSkinType = "";

document.getElementById("drySkin").onclick = function () {
  selectedSkinType = "Dry Skin";
  alert("You selected: " + selectedSkinType);
};

document.getElementById("sensitiveSkin").onclick = function () {
  selectedSkinType = "Sensitive Skin";
  alert("You selected: " + selectedSkinType);
};

document.getElementById("oilySkin").onclick = function () {
  selectedSkinType = "Oily Skin";
  alert("You selected: " + selectedSkinType);
};

document.getElementById("normalSkin").onclick = function () {
  selectedSkinType = "Normal Skin";
  alert("You selected: " + selectedSkinType);
};

document.getElementById("combinedSkin").onclick = function () {
  selectedSkinType = "Combined Skin";
  alert("You Selected: " + selectedSkinType);
};

document.getElementById("nextSkin").onclick = function () {
  if (selectedSkinType === "") {
    alert("Please selected a skin type");
  } else {
    document.getElementById("skinTypeSelection").style.display = "none";
    document.getElementById("concernSection").style.display = "block";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("breakouts-btn").onclick = function () {
    let concernSection = "Breakouts";
    console.log("Breakouts button clicked!");
    alert("You Selected: " + concernSection);

    document.querySelectorAll(".product-item").forEach(function (item) {
      item.classList.remove("show");
    });

    document.querySelectorAll(".breakout-product").forEach(function (item) {
      item.classList.add("show");
    });

    document.getElementById("product-section").style.display = "block";

    document.getElementById("product-section").scrollIntoView({
      behavior: "smooth",
    });
  };
});

document.getElementById("antiaging-btn").onclick = function (event) {
  event.preventDefault();
  let concernSection = "Anti-aging";
  console.log("Anti-aging button clicked!");
  alert("You Selected: " + concernSection);

  document.querySelectorAll(".product-item").forEach(function (item) {
    item.classList.remove("show");
  });

  document.querySelectorAll(".antiaging-product").forEach(function (item) {
    item.classList.add("show");
  });

  document.getElementById("product1-section").style.display = "block";
  document
    .getElementById("product1-section")
    .scrollIntoView({ behavior: "smooth" });
};

document.getElementById("darkcircles-btn").onclick = function () {
  event.preventDefault();
  let concernSection = "Dark Circles";
  console.log("Dark Circles button clicked!");
  alert("You Selected: " + concernSection);

  document.querySelectorAll(".product-item").forEach(function (item) {
    item.classList.remove("show");
  });

  document.querySelectorAll(".darkcircles-product").forEach(function (item) {
    item.classList.add("show");
  });

  document.getElementById("product2-section").style.display = "block";
  document
    .getElementById("product2-section")
    .scrollIntoView({ behavior: "smooth" });
};

document.getElementById("rashes-btn").onclick = function () {
  event.preventDefault();
  let concernSection = "Rashes";
  console.log("Rashes button clicked!");
  alert("You Selected: " + concernSection);

  document.querySelectorAll(".product-item").forEach(function (item) {
    item.classList.remove("show");
  });

  document.querySelectorAll(".rashes-product").forEach(function (item) {
    item.classList.add("show");
  });

  document.getElementById("product3-section").style.display = "block";
  document
    .getElementById("product3-section")
    .scrollIntoView({ behavior: "smooth" });
};

document.getElementById("pimples-btn").onclick = function () {
  event.preventDefault();
  let concernSection = "Pimples";
  console.log("Pimples button clicked!");
  alert("You Selected: " + concernSection);

  document.querySelectorAll(".product-item").forEach(function (item) {
    item.classList.remove("show");
  });

  document.querySelectorAll(".pimples-product").forEach(function (item) {
    item.classList.add("show");
    console.log(item);
  });

  document.getElementById("product4-section").style.display = "block";
  document
    .getElementById("product4-section")
    .scrollIntoView({ behavior: "smooth" });
};
