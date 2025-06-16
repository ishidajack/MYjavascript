'use strict';

{
  const scores = [70,90,80,75];
  let max = 0;
  scores.forEach((score) => {
    if (score > max){
      max = score;
    }
  });
  console.log(max);
  // console.log(Math.max(...scores)); 最大値
  // console.log(Math.min(...scores));最小値
  //  const n =Number(prompt('Yen?'));
// function getRandomInteger(max){
//   return Math.floor(Math.random() * (max + 1));
// }
//  for (let i = 0; i < 10; i++){
//   const n = getRandomInteger(5) + 1;
//   console.log(`${i}: ${n}`);
  // if (i % 3 == 0){
  //   console.log(`--- item ${i} ---`)
  // }else {
  //   console.log(`=== item ${i} ===`); 
  // }
 }
//  const amount = (n/138.91).toFixed(2);
//  console.log(`USD: ${Number(amount).toLocaleString()}`);
 


  