// TODO: Inject Head & Header into Dom on Page Unload

//TODO: Change Header based on Logged-in status
function toggleHomepage() {
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

toggleHomepage()



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
  let checked = $("#active-checkbox").prop("checked")
  let button = $(e.target)
  !checked ? button.addClass("active") : button.removeClass("active")
});