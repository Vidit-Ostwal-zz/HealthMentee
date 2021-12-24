function postYourAdd() {
  const iframe = $("#invokeBot");
  iframe.attr("src",iframe.data("src"));
  //document.getElementById("invokeBot").style.display = "block";
  // await waitforme(10000);
  async function printy() {
    document.getElementById("invokeBot").style.display = "block";
    //await waitforme(1000);
    document.getElementById("closeBtn").style.display = "block";
    document.querySelector(".botNav").style.display = "block";
  }
  printy();
}

function closeBot() {
  document.getElementById("invokeBot").style.display = "none";
  document.getElementById("closeBtn").style.display = "none";
  document.querySelector(".botNav").style.display = "none";
}

async function waitforme(milisec) {
  return new Promise(resolve => {
    setTimeout(() => { resolve('') }, milisec);
  })
}

function notAvailable() {
  alert("All the Health Mentee are currently occupied. We will let you know when a Health Mentee is free.");
}
