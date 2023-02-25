const circleArea=(r)=>{
    let Area = Math.PI*r*r;
    console.log("Dairenin Alanı:"+Area);
}
const circleCircumference=(r)=>{
    let Circumference = 2*Math.PI*r;
    console.log("Dairenin Çevresi:"+Circumference);
}

module.exports={
  circleArea,
  circleCircumference
}

