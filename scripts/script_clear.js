//const coords = [[55.874622777101116,37.13869456250001],[55.95791519567916,37.319968976562514]];

//console.log(finalCoords);


// const fullObject = {};
const live = [];
const unLive = [];

const enablingObjects = [];
const onDiscussion = [];
const notIncludingObjects = [];


// import okc from '../dataSetJson/ОКС.json' assert {type: 'json'};
// import zem from '../dataSetJson/Земельные_участки.json' assert {type: 'json'};
// import oss from '../dataSetJson/Организации_СВАО_САО.json' assert {type: 'json'};
// import szz from '../dataSetJson/СЗЗ.json' assert {type: 'json'};
// import spr from '../dataSetJson/Стартовые_площадки_реновации.json' assert {type: 'json'};
// import tokn from '../dataSetJson/Территории_объектов_культурного_наследия.json' assert {type: 'json'};
import res from '../dataSetJson/result.json' assert {type: 'json'};

// result.json - пример карточек объектов


console.log(res);

// function createObject() {
//     fullObject.newObject = {};
//     let obj = fullObject.newObject;
//     obj.cadNum = res.properties.cadnum;
//     obj.address = res.properties.address;
//     //console.log(dataBLU[0].cadastrNmb);

//     dataBLU.forEach(elem => {
//         if (elem.cadastrNmb === obj.cadNum) {
//             obj.liveUnlive = elem.liveUnlive;
//             obj.accident = elem.accident;
//             obj.typicalProj = elem.typicalProject;
//         }
//     });
//     //console.log(dataAvar[0].district);
//     dataAvar.forEach(element => {
//       //console.log(element.cadastrNmb);  
//         if (element.cadastrNmb === obj.cadNum) {
//            // console.log(element.cadastrNmb);
//             obj.unAuthBld = element.unauthBld;
//             obj.incongruityVRI = element.incongruityVRI;
//             obj.crushBld = element.crushBld;
//         }
//     })
// }
// //createObject();
//console.log(fullObject);


function distribution() {
    for (let i = 0; i < res.length; i++) {
        
        if (res[i].Тип = "жилое") {
            live.push(res[i]);
            return;
        }
        unLive.push(res[i]);
    }
}

function estimationLive() {
    for (let i = 0; i < live.length; i++) {
        live[i]["rec"];
        let el = live[i];

        if (el.Аварийность === "да") {
            el.rec += 17.5;
        }
        if (el.Типовой === "да") {
            el.rec += 8.75;
        }
        if (el.Реновации === "да") {
            el.rec += 8.75;
        };



        if (el.Кол-во_рабочих_мест < 100 ){
            el.rec += 5;
        }
        if (el.Кол-во_рабочих_мест > 100 && el.Кол-во_рабочих_мест < 1000){
            el.rec += 3;
        }
        if (el.Кол-во_рабочих_мест > 1000 ){
            el.rec += 2;
        }



        if (el.СЗЗ === "да") {
            el.rec += 4;
        }
        if (el.ОКН === "да") {
            el.rec += 4;
        }
        if (el.Аренда === "да"){
            el.rec += 12;
        };


        if (el.Аренда === "да"){
            el.rec += 15.75;
        }
        if (el.Собственность === "да"){
            el.rec += 3.5;
        }
        if (el.Не_соответствие_ВРИ === "да"){
            el.rec += 15.75
        }


        if (el.rec <= 18) {
            notIncludingObjects.push(el);
            return;
        }
        if (el.rec > 19 && el.rec < 49) {
            onDiscussion.push(el);
            return;
        }
        if (el.rec >= 50){
            enablingObjects.push(el);
            return;
        };
    }
}

function estimationUnLive() {
    for (let i = 0; i < unLive.length; i++) {
        unLive[i]["rec"];
        const el = unLive[i];

        if (el.Ававрийное === "да"){
            el.rec += 7;
        }
        if (el.Не_соответствие_ВРИ === "да"){
            el.rec += 14;
        }
        if (el.Самовол === "да"){
            el.rec += 14;
        }



        if (el.Кол-во_рабочих_мест < 100 ){
            el.rec += 17.5;
        }
        if (el.Кол-во_рабочих_мест > 100 && el.Кол-во_рабочих_мест < 1000){
            el.rec += 10.5;
        };
        if (el.Кол-во_рабочих_мест > 1000 ){
            el.rec += 7;
        };
        


        if (el.ОКН === "да"){
            el.rec += 6;
        };
        if (el.СЗЗ === "да"){
            el.rec += 6;
        };
        if (el.Аренда === "да"){
            el.rec += 18;
        };



        if (el.rec <= 22) {
            notIncludingObjects.push(el);
            return;
        }
        if (el.rec > 23 && el.rec < 49) {
            onDiscussion.push(el);
            return;
        }
        if (el.rec >= 50){
            enablingObjects.push(el);
            return;
        };
    }
}

