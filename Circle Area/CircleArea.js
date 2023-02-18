//Patika.dev Node.Js egitimi (Odev-1)

const arg = process.argv.slice(2);

function CircleArea(radius) {
  let Area = Math.PI * radius * radius;
  console.log(Area);
}

CircleArea(arg[0] * 1);