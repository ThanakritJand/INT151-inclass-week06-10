document.addEventListener("DOMContentLoaded", () => {
  const bgColor = document.getElementById("bgColor");
  const fontColor = document.getElementById("fontColor");
  const fontSize = document.getElementById("fontSize");
  const saveBtn = document.getElementById("saveBtn");
  const resetBtn = document.getElementById("resetBtn");
  const preview = document.getElementById("preview");

  // โหลดค่าจาก localStorage
  const savedBg = localStorage.getItem("bgColor");
  const savedFont = localStorage.getItem("fontColor");
  const savedSize = localStorage.getItem("fontSize");

  function setFontSize(size) {
    let px;
    switch (size) {
      case "small": px = "14px"; break;
      case "medium": px = "18px"; break;
      case "large": px = "24px"; break;
      default: px = "18px";
    }
    document.documentElement.style.setProperty("--font-size", px);
    preview.style.fontSize = px;
  }

  function setFontColor(color) {
    document.documentElement.style.setProperty("--font-color", color);
    preview.style.color = color;
  }

  function setBgColor(color) {
    document.body.style.background = color;
  }

  // โหลดค่าเก่า
  if (savedBg) setBgColor(savedBg);
  if (savedFont) setFontColor(savedFont);
  if (savedSize) setFontSize(savedSize);

  bgColor.value = savedBg || "#0a0f1a";
  fontColor.value = savedFont || "#00ffe0";
  fontSize.value = savedSize || "medium";

  // เปลี่ยนทันทีเมื่อเลือก
  bgColor.addEventListener("input", () => setBgColor(bgColor.value));
  fontColor.addEventListener("input", () => setFontColor(fontColor.value));
  fontSize.addEventListener("change", () => setFontSize(fontSize.value));

  // Save
  saveBtn.addEventListener("click", () => {
    localStorage.setItem("bgColor", bgColor.value);
    localStorage.setItem("fontColor", fontColor.value);
    localStorage.setItem("fontSize", fontSize.value);

    saveBtn.textContent = "✔ SAVED!";
    saveBtn.style.boxShadow = "0 0 20px #00ffe0";
    setTimeout(() => {
      saveBtn.textContent = "Save";
      saveBtn.style.boxShadow = "";
    }, 1500);
  });

  // Reset
  resetBtn.addEventListener("click", () => {
    localStorage.clear();
    bgColor.value = "#0a0f1a";
    fontColor.value = "#00ffe0";
    fontSize.value = "medium";
    setBgColor("#0a0f1a");
    setFontColor("#00ffe0");
    setFontSize("medium");
  });
});
