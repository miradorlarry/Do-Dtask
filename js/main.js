const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navLink = document.querySelectorAll('.nav-link li');
    //toggle Nav
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
    }); 
}

navSlide();

//Sign up/in show password
function showPassword() {
    var show = document.getElementById("pass_word");
    if (show.type === "password") {
      show.type = "text";
    } else {
      show.type = "password";
    }
  } 
