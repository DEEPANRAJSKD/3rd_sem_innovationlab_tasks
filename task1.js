function cal() {
    let fname=document.getElementById("name").value;
    let a = Math.round(Math.random() * 100);
    document.getElementById("num").innerText = fname+ " luck today is: " + a + "%";
}