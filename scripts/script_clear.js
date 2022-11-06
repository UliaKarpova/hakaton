//const coords = [[55.874622777101116,37.13869456250001],[55.95791519567916,37.319968976562514]];

const finalCoords = [[2260.82,12555.18],[2243.7,11661.91]];

//console.log(finalCoords);

let lon = [];
let lat = [];
let objects = [];

import okc from '../dataSetJson/ОКС.json' assert {type: 'json'};
import zem from '../dataSetJson/Земельные_участки copy.json' assert {type: 'json'};
import oss from '../dataSetJson/Организации_СВАО_САО.json' assert {type: 'json'};
import szz from '../dataSetJson/СЗЗ.json' assert {type: 'json'};
import spr from '../dataSetJson/Стартовые_площадки_реновации.json' assert {type: 'json'};
import tokn from '../dataSetJson/Территории_объектов_культурного_наследия.json' assert {type: 'json'};


// function findfoundcoords() {
//     for (let i = 0; i < finalCoords.length; i++) {
//     const coords = finalCoords[i];
//         for (let p = 0; p < coords.length; p++) {
//             let coord = coords[p];           
//             if (p === 0) {
//                 lon.push (coord);
//             }
//             if (p === 1){
//                 lat.push (coord)
//             }
//         }
//     }
// }
// findfoundcoords();
// // console.log(lon);
// // console.log(lat);

function findSome(element, index, array) {
    console.log(array);
    
}
// findSome();

let num = okc.features[0].geometry.coordinates[0].length;
//console.log(num);
let wtf = [];
function findSimpleCoords() {
   okc.features.forEach(object => {
    //console.log(object);
    let obj = object.geometry.coordinates;
    obj.forEach(el => {
        //console.log(el);
        
        for (let i = 0; i <= el.length; i++) {
            const element = el[i];
            


            
            if(el.some(elem => (finalCoords[0][0] <= elem[0] <= finalCoords[1][0] || finalCoords[1][0] <= elem[0] <= finalCoords[0][0]) && (finalCoords[0][1] <= elem[1] <= finalCoords[1][1] || finalCoords[1][1] <= elem[1] <= finalCoords[0][1])) === true) {
                objects.push(object);
            };


                  
        }
    })
    // for (let i = 0; i < num; i++) {
    //     const element = object.geometry.coordinates;
    //     console.log(element);
    //     element.forEach(someObject => {
    //         if (someObject.some(elem => finalCoords[0][0] < elem < finalCoords[0][1] && finalCoords[1][0] < elem < finalCoords[1][1]) === true){
    //             objects.push(object);
    //         }

    //     })        
    // }
   })
}
//console.log(objects);
console.log(wtf);

findSimpleCoords();