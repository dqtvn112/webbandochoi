const SignUp = (e) => {
  event.preventDefault(); // Ngăn chặn form submit mặc định

  var ho = document.getElementById("ho").value;
  var ten = document.getElementById("ten").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;

  var user = {
    ho: ho,
    ten: ten,
    email: email,
    password: password,
  };

  var json = JSON.stringify(user);
  localStorage.setItem(email, json); // Sử dụng email làm key
  console.log("user added");
  window.location.href = "dangnhap.html"; // Chuyển hướng đến trang đăng nhập
};

