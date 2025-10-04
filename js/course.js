// ================== IMAGE PREVIEW ==================
const fileInput = document.getElementById("fileInput");
const previewImage = document.getElementById("previewImage");

fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewImage.src = e.target.result;
      previewImage.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

// ================== VIDEO PREVIEW ==================
videoInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const videoURL = URL.createObjectURL(file);
    previewVideo.src = videoURL;
    previewVideo.style.display = "block";

    document.querySelector(".course-video-card .video-icon").style.display = "none";
  }
});

// ================== FORM SUBMIT ==================
document.getElementById("courseForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  console.log("Course Name:", formData.get("courseName"));
  console.log("Course Price:", formData.get("coursePrice"));
  console.log("Course Category:", formData.get("courseCategory"));
  console.log("Course Brief:", formData.get("courseBrief"));
  console.log("Selected Cover Image:", formData.get("courseCover"));
  console.log("Selected Course Video:", formData.get("courseVideo"));
});

// ================== CLOSE FUNCTIONS ==================
function closeDescription() {
  const card = document.getElementById("courseDescCard");
  if (card) {
    card.style.display = "none";
  }
}

function closeImagePreview() {
  previewImage.style.display = "none";
  previewImage.src = "";
  fileInput.value = "";
}

function closeVideoPreview() {
  previewVideo.style.display = "none";
  previewVideo.src = "";
  videoInput.value = "";

  document.querySelector(".course-video-card .video-icon").style.display = "flex";
}