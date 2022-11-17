const coords = [[55.874622777101116,37.13869456250001],[55.95791519567916,37.319968976562514]];

const lastCoords = [[23174.782,-22500.473],[32404.021,-11129.559]]


import okc from '../dataSetJson/ОКС.json' assert {type: 'json'};
import zem from '../dataSetJson/Земельные_участки copy.json' assert {type: 'json'};
import oss from '../dataSetJson/Организации_СВАО_САО.json' assert {type: 'json'};
import szz from '../dataSetJson/СЗЗ.json' assert {type: 'json'};
import spr from '../dataSetJson/Стартовые_площадки_реновации.json' assert {type: 'json'};
import tokn from '../dataSetJson/Территории_объектов_культурного_наследия.json' assert {type: 'json'};

// const dataAvar = dataAvar;

let dataGeoOkc = okc.features[0].geometry.coordinates[0];
//console.log(dataGeoOkc);
// let dataDesZem = zem.features[0].properties.DESCR;
// console.log(dataDesZem);
// let dataGeoZem = zem.features[0].geometry.coordinates[0];
// console.log(dataGeoZem);
//console.log(zem);

//console.log(okc.features[0].geometry.coordinates[0]);

let telo;

function name() {
    // zem.features.forEach(element => {
        
    //    element.geometry.coordinates.forEach(elem => {
    //     console.log(elem);

        
    //    });

    // });
    for (let i = 0; i < 5; i++) {
        const zemCoord = zem.features[i].geometry.coordinates;

        //console.log(zemCoord);
        
        
        zemCoord.forEach(zemUnoCoord =>{
            for (let i = 0; i < zemUnoCoord.length; i++) {
                const zemCoords = zemUnoCoord[i];
                if (Object.prototype.toString.call(zemCoords[0]) === '[object Array]') {
                    for (let i = 0; i < zemCoords.length; i++) {
                        const zemCoordsDuo = zemCoords[i]
                        //console.log(zemCoordsDuo);
                        telo = zemCoordsDuo;
                    }
                    return;
                }
                //console.log(zemCoords);
                telo = zemCoords;

                for (let i = 0; i < 10; i++) {
                    let okcwtf = okc.features[i].geometry.coordinates
                   // console.log(okcwtf);
                   
                    okcwtf.forEach(elem => {
                        
                        for (let i = 0; i < elem.length; i++) {
                            const elemwtf = elem[i];
                            console.log(elemwtf);
                            console.log(telo);

                            array.forEach(element => {
                                
                            });
                            
                            // if(telo === elemwtf) {
                            //     console.log('есть пробитие');
                            // }
                            
                        }
                    });
                    
                    
                    
                }
            }
            
        })

        
    }
}



//name();





function name2() {
    //console.log(okc);
    for (let i = 0; i < 10; i++) {
        let okcwtf = okc.features[i].geometry.coordinates
       // console.log(okcwtf);

        okcwtf.forEach(elem => {
            for (let i = 0; i < elem.length; i++) {
                const elemwtf = elem[i];
                console.log(elemwtf);

                
                // if(telo === elemwtf) {
                //     console.log('есть пробитие');
                // }
                // elemwtf.forEach(elemNANI => {
                //     console.log(elemNANI);
                // });
                
            }
        });
        
        
        
    }
    // okc.features.forEach(dataOkc => {

    //     for (let i = 1; i < 10; i++) {
    //         console.log(dataOkc.geometry.coordinates[i]);
    //     }
    //     console.log('okc');
    //     dataOkc.geometry.coordinates.forEach(geoOkc => {
    //         if (elem === geoOkc) {
    //             console.log(elem);
    //             console.log(geoOkc);
    //             console.log(dataOkc);
    //         }
    //         console.log(geoOkc);
    //         for (let i = 0; i < 10; i++) {
    //             console.log(geoOkc[i]);
                
    //         }

    //         geoOkc.forEach(geoCoord => {
    //            return console.log(geoCoord);
    //         })
    //     })
    // });
}


//name2();






























