// Lấy đối tượng button và các input
var button = document.getElementById("loginButton");
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");

// Lắng nghe sự kiện nhấn phím Enter trong input username
usernameInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});

// Lắng nghe sự kiện nhấn phím Enter trong input password
passwordInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});

// Lắng nghe sự kiện input trong input username
usernameInput.addEventListener("input", function(event) {
  var input = event.target;
  var value = input.value;

  // Kiểm tra nếu giá trị nhập vào vượt quá 4 ký tự
  if (value.length > 4) {
    // Xóa giá trị nhập vào và bắt đầu viết lại từ đầu
    input.value = "";
  }
});

// Lắng nghe sự kiện click trên button
button.addEventListener("click", function() {
  // Xử lý logic đăng nhập ở đây
  console.log("Đăng nhập");
});
