let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function requiredRange(start,finish){
    let variants = []
    if( start > finish ){
        let number
        number = start
        start = finish
        finish = number
    }
    for(let i = 0 ; i < courses.length; i++){
        let cours = {}
        if( courses[i].prices[0] > courses[i].prices[1] ){
            let number
            number = courses[i].prices[0]
            courses[i].prices[0] = courses[i].prices[1]
            courses[i].prices[1] = number
        }
        if(courses[i].prices[0] <= start && courses[i].prices[1] <= finish){ 
            cours.name = courses[i].name
            cours.pricerange = [start,courses[i].prices[1]] // подходящий диапазон
            variants.push(cours)
            //console.log(variant)
        }
        if(courses[i].prices[0] > start && courses[i].prices[1] <= finish){ 
            cours.name = courses[i].name
            cours.pricerange = [courses[i].prices[0],courses[i].prices[1]] //подходящий диапазон
            variants.push(cours)
            //console.log(variant)
        }
        if(courses[i].prices[0] > start && courses[i].prices[1] > finish){ 
            cours.name = courses[i].name
            cours.pricerange = [courses[i].prices[0],finish]// подходящий диапазон
            variants.push(cours)
            //console.log(variant)
        }
        if(courses[i].prices[0] <= start && courses[i].prices[1] > finish){ 
            cours.name = courses[i].name
            cours.pricerange = [start,finish]// подходящий диапазон
            variants.push(cours)
            //console.log(variant)
        }
    }

    return variants
}
console.log(requiredRange(null, 200),requiredRange(100, 350),requiredRange(200, null))