import okc from '../dataSetJson/ОКС.json' assert {type: 'json'};
import zem from '../dataSetJson/Земельные_участки.json' assert {type: 'json'};
import oss from '../dataSetJson/Организации_СВАО_САО.json' assert {type: 'json'};
import szz from '../dataSetJson/СЗЗ.json' assert {type: 'json'};
import spr from '../dataSetJson/Стартовые_площадки_реновации.json' assert {type: 'json'};
import tokn from '../dataSetJson/Территории_объектов_культурного_наследия.json' assert {type: 'json'};
import res from '../dataSetJson/result.json' assert {type: 'json'};

const outPutData = [[1615.4000000003724,17813.56000000051],[2729.44000000042,13952.47000000068]]
let massObject = [];
let x1 = outPutData[0][0];
let x2 = outPutData[1][0];
let y1 = outPutData[0][1];
let y2 = outPutData[1][1];
let o = 0;

function foundOneLandPost() {
    const step = zem.features;
    for (let i = 0; massObject.length < 1; i++) {
        let twoStep = step[i].geometry.coordinates;
        for (let s = 0; s < twoStep.length; s++) {
            const thirdStep = twoStep[s];
            for (let t = 0; t < thirdStep.length; t++) {
                const final = thirdStep[t];
                
                if ((final[0] >= x1 && final[0] <= x2) && (final[1] <= y1 && final[1] >= y2)) {
                    console.log("yey");
                    let object = {};
                    object['descrZem'] = zem.features[i].properties.DESCR;
                    object['addressZem'] = zem.features[i].properties.ADDRESS;
                    object['coordinates'] = step[i].geometry.coordinates;
                    //console.log(twoStep);
                    massObject.push(object);
                }
            } 
        } 
    }
}


function foundLandPost() {
    const step = zem.features;

    for (let i = 0; i < step.length; i++) {
        const twoStep = step[i].geometry.coordinates;
        for (let s = 0; s < twoStep.length; s++) {
            const thirdStep = twoStep[s];
            for (let t = 0; t < thirdStep.length; t++) {
                const final = thirdStep[t];
                if ((final[0] >= x1 && final[0] <= x2) && (final[1] <= y1 && final[1] >= y2) && (massObject[o].descrZem != zem.features[i].properties.DESCR)) {
                    let object = {};
                    object['descrZem'] = zem.features[i].properties.DESCR;
                    object['addressZem'] = zem.features[i].properties.ADDRESS;
                    object['coordinates'] = step[i].geometry.coordinates;
                    massObject.push(object);
                    o++;
                }
            } 
        } 
    }
    
    //console.log(massObject);
    
}



function foundTrueFasleSZZ() {
    //console.log(szz.features[0].geometry.coordinates[0][0]);
    const oneStep = szz.features;
    let thirdStepV2;
    for (let i = 0; i < oneStep.length; i++) {
        const twoStep = oneStep[i].geometry.coordinates;
        for (let m = 0; m < twoStep.length; m++) {
            let thirdStep = twoStep[m];
          // console.log(thirdStep);
           if (thirdStep.length === 1) {
            for (let index = 0; index < thirdStep.length; index++) {
                thirdStepV2 = thirdStep[index];
                
            }
           }
           for (let g = 0; g < thirdStep.length; g++) {
            const fourthStep = thirdStep[g];
            if (fourthStep.length > 2) {
                for (let r = 0; r < thirdStepV2.length; r++) {
                    const fourthStepV2 = thirdStepV2[r];
                   // console.log(fourthStepV2);
                }
            }
            if (fourthStep.length === 2){
           // console.log(fourthStep);
            }
            // massObject.forEach(element => {
            //     console.log(element);
            //     return
            // });
           }
           
            
        }
        
    }

    
    
    
}
foundOneLandPost();
foundLandPost();
foundTrueFasleSZZ();