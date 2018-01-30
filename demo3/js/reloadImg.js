// const imgArr = ["./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg","./img/5.jpg"];
// function loadImagesAsync(...urls){ 
//    const urlArr =  urls[0] instanceof Array ? urls[0] : urls ; 
//    const [sum,imageArr] = [urlArr.length,[]]; 
//    const promise = new Promise( (resolve,reject)=>{
//             for( let url of urlArr ){
//                 loadImageAsync(url).then((image)=>{ 
//                     imageArr.push(image); 
//                     if(imageArr.length === sum){ 
//                         resolve(imageArr); 
//                     }
//                 },(error)=>{   
//                     reject(error); 
//                 })
//         }
//    })
//    return promise;
// }
// loadImagesAsync(["./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg","./img/5.jpg"]).then( (imageArr)=>{
//     for(let image of imageArr){
//         box.appendChild(image);
//     }
// },(error)=>{
//     throw new Error(error);
// })
// let getJson = (url) => {
//   return new Promise((resolve,reject)=>{
//     let xml = new XMLHttpRequest();
//     xml.open('GET',url);
//     xml.onreadystatechange=function(){
//       if(xml.readyState!==4) return;
//       if(xml.status==200){
//         resolve(xml.responseText)
//       } else {
//         reject('error');
//       }
//     }
//     xml.send(null);
//   })
// }
