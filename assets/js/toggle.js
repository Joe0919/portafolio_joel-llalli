$(window, document, undefined).ready(function () {
  $(".contacto__form-input").blur(function () {
    var $this = $(this);
    if ($this.val()) $this.addClass("used");
    else $this.removeClass("used");
  });
});


  //identify the toggle switch HTML element
  const toggleSwitch = document.querySelector("#checkbox_theme");


  //function that changes the theme, and sets a localStorage variable to track the theme between page loads
  const switchTheme = (e) => {
    if (e.target.checked) {
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
      toggleSwitch.checked = true;
      document.getElementById("toggle").classList.add("dark");
      document.getElementById("toggle__btn").classList.add("dark");
      // document.getElementById("header__logo").src="assets/img/logo2.png";
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
      toggleSwitch.checked = false;
      document.getElementById("toggle").classList.remove("dark");
      document.getElementById("toggle__btn").classList.remove("dark");
      // document.getElementById("header__logo").src="assets/img/logo1.png";
    }
  };

  const enviarMensaje = (e) =>{
    
    Swal.fire(
        '¡Hecho!',
        'El mensaje fue enviado',
        'success'
      )
  };

  //listener for changing themes
  toggleSwitch.addEventListener("change", switchTheme, false);

  // const boton = document.querySelector("#boton-form");
  // boton.addEventListener("click", enviarMensaje);

  //pre-check the dark-theme checkbox if dark-theme is set
  if (document.documentElement.getAttribute("data-theme") == "dark") {
    toggleSwitch.checked = true;
    document.getElementById("toggle").classList.add("dark");
    document.getElementById("toggle__btn").classList.add("dark");
    // document.getElementById("img1").src = "assets/img/logo2.png";
  }

