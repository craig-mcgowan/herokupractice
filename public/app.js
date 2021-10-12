// TODO: Inject Head & Header into Dom on Page Unload

//TODO: Change Header based on Logged-in status
function toggleHeader() {
  const path = window.location.pathname
  console.log(path)
  if (path.toString().includes("/projects")) {
    $("span.project-links").removeClass("hidden")
    $("span.login-links").addClass("hidden")
  } else if (path === "/") {
    $("span.project-links").addClass("hidden");
    $("span.login-links").removeClass("hidden");
  }
}

toggleHeader()


//Change background on leaving homepage
$("li").click(function () {
  $(".background").css("backgroundImage", "none");

})



/*----------------------------------
   Login Page
----------------------------------*/
const handleLoginError = () => {
  if (invalidUser) {
    $(".invalidUsername").css("display", "block")
    console.log("invalid username")
  }
  if (invalidPassword) {
    $(".wrongPassword").css("display", "block")
    console.log("invalid password")
  }
}

/*----------------------------------
   Show Page/New Page/Edit Page
----------------------------------*/
//Active Toggle

$(".toggle-btn").click(function (e) { 
  console.log(e.target)
  $(e.target).toggleClass("active")
});