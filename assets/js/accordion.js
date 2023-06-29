const accordion = [...document.getElementsByClassName("accordionTrigger")]

accordion.forEach(element => {
  element.addEventListener("click", ()=>{
    element.classList.toggle("active")
    const content = element.nextElementSibling

    if(content.style.display === "block"){
      content.style.display = "none"
      content.style.maxHeight = null
    }
    else {
      content.style.display = "block";
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })
})