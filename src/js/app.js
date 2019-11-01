document.querySelector('h4').addEventListener("mousemove", function(){
    this.classList.add("active");
});
document.querySelector('h4').addEventListener("mouseleave", function(){
    this.classList = "";
});

