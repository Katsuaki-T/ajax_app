function post (){
  const submit = document.getElementById("submit");

  submit.addEventListener("click", (e) => {
    e.preventDefault();

  
    const form = document.getElementById("form");
    const XHR = new XMLHttpRequest();
    const formData = new FormData(form);
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
 }
 
 window.addEventListener('load', post);