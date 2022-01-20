const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  const btn=document.querySelector("button");
  function btnClicked(){
    const color1 =colors[Math.floor(Math.random()*colors.length)];
    let color2=colors[Math.floor(Math.random()*colors.length)];
    console.log(color1, color2);
    while (color1===color2){
        color2=colors[Math.floor(Math.random()*colors.length)];
    };
    document.body.style.background=`linear-gradient(90deg, ${color1},${color2})`;
  };

  btn.addEventListener("click",btnClicked);
  