const dropArea = document.getElementById("dropArea");
const uploadInput = document.getElementById("upload");
const dropText = document.getElementById("dropText");
const formatSelect = document.getElementById("format");
const convertBtn = document.getElementById("convertBtn");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();

// --- Drag & Drop ---
dropArea.addEventListener("dragover", e => {
  e.preventDefault();
  dropArea.style.background = "#e0f7fa";
});

dropArea.addEventListener("dragleave", e => {
  e.preventDefault();
  dropArea.style.background = "";
});

dropArea.addEventListener("drop", e => {
  e.preventDefault();
  dropArea.style.background = "";
  const file = e.dataTransfer.files[0];
  if (file) loadImage(file);
});

// --- Click upload ---
dropArea.addEventListener("click", () => uploadInput.click());
uploadInput.addEventListener("change", () => {
  const file = uploadInput.files[0];
  if (file) loadImage(file);
});

// --- Load image ---
function loadImage(file) {
  dropText.innerText = file.name;
  const reader = new FileReader();
  reader.onload = e => {
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// --- Draw image on canvas ---
img.onload = () => {
  const maxWidth = 600;
  let scale = img.width > maxWidth ? maxWidth / img.width : 1;

  canvas.width = img.width * scale;
  canvas.height = img.height * scale;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

// --- Convert & Download ---
convertBtn.addEventListener("click", () => {
  const format = formatSelect.value;
  const dataURL = canvas.toDataURL(format);
  const link = document.createElement("a");

  let ext = "png";
  if (format.includes("jpeg")) ext = "jpg";
  else if (format.includes("webp")) ext = "webp";

  link.href = dataURL;
  link.download = `converted-image.${ext}`;
  link.click();
});
