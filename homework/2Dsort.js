/*
Functionless
sort()

Arrow function
sort((firstEl, secondEl) => { ... } )

Compare function
sort(compareFn)

Inline compare function
sort(function compareFn(firstEl, secondEl) { ... })
*/

/*==================== first array ====================*/

let offersArray=[["Crossroad Gardens","88"],["Strawberry Mountain Lands","57"],["Weeping Willow Acres","39"],["Pinewood Meadow","05"],["Broken Cart Orchard","31"],["Rattlesnake Ranch","47"],["Shadow Ridge Vineyard","96"],["Peach Tree Range","50"],["Elysian Orchard","19"],["Crown Meadow Fields","63"],["Mooseridge Meadow","40"],["Eastwood Orchard","90"],["Poison Ivy Gardens","48"],["Crescent Canyon Ranch","36"],["Cranberry Estate","41"],["Lone Pine Farm","49"],["Whispering Willow Range","82"],["Spring Blossom Ranch","66"],["Hollow Point Estate","27"],["Little Acorn Meadow","20"],["New Morning Pastures","79"],["Oak Wood Ranch","53"],["Crescent Canyon Orchard","56"],["Grassy Knoll Fields","07"],["Moonlight Gardens","73"],["Lucky Paws Estate","08"],["Crooked Creek Nursery","21"],["Small World Pastures","51"],["Crooked Creek Acres","45"],["Red Mountain Farmstead","78"],["Blueberry Basket Farms","60"],["Maple Springs Acres","54"],["Lucky Paws Farmstead","84"],["Wild Horse Pastures","55"]];

function sAge(a, b) {
    if (a[1] > b[1]) return 1;
    else if (a[1] < b[1]) return -1;
    else return 0;
}
offersArray.sort(sAge); //compare func

/*==================== second array ====================*/

let offersObjects = [{"pakkuja":"Crossroad Gardens","hind":"88"},{"pakkuja":"Strawberry Mountain Lands","hind":"57"},{"pakkuja":"Weeping Willow Acres","hind":"39"},{"pakkuja":"Pinewood Meadow","hind":"05"},{"pakkuja":"Broken Cart Orchard","hind":"31"},{"pakkuja":"Rattlesnake Ranch","hind":"47"},{"pakkuja":"Shadow Ridge Vineyard","hind":"96"},{"pakkuja":"Peach Tree Range","hind":"50"},{"pakkuja":"Elysian Orchard","hind":"19"},{"pakkuja":"Crown Meadow Fields","hind":"63"},{"pakkuja":"Mooseridge Meadow","hind":"40"},{"pakkuja":"Eastwood Orchard","hind":"90"},{"pakkuja":"Poison Ivy Gardens","hind":"48"},{"pakkuja":"Crescent Canyon Ranch","hind":"36"},{"pakkuja":"Cranberry Estate","hind":"41"},{"pakkuja":"Lone Pine Farm","hind":"49"},{"pakkuja":"Whispering Willow Range","hind":"82"},{"pakkuja":"Spring Blossom Ranch","hind":"66"},{"pakkuja":"Hollow Point Estate","hind":"27"},{"pakkuja":"Little Acorn Meadow","hind":"20"},{"pakkuja":"New Morning Pastures","hind":"79"},{"pakkuja":"Oak Wood Ranch","hind":"53"},{"pakkuja":"Crescent Canyon Orchard","hind":"56"},{"pakkuja":"Grassy Knoll Fields","hind":"07"},{"pakkuja":"Moonlight Gardens","hind":"73"},{"pakkuja":"Lucky Paws Estate","hind":"08"},{"pakkuja":"Crooked Creek Nursery","hind":"21"},{"pakkuja":"Small World Pastures","hind":"51"},{"pakkuja":"Crooked Creek Acres","hind":"45"},{"pakkuja":"Red Mountain Farmstead","hind":"78"},{"pakkuja":"Blueberry Basket Farms","hind":"60"},{"pakkuja":"Maple Springs Acres","hind":"54"},{"pakkuja":"Lucky Paws Farmstead","hind":"84"},{"pakkuja":"Wild Horse Pastures","hind":"55"}]

let min=offersObjects[0]
let max=offersObjects[0]
for(let i=offersObjects.length-1; i>=0; i--)
{
    if(offersObjects[i].hind<min.hind){min=offersObjects[i]}
    if(offersObjects[i].hind>max.hind){max=offersObjects[i]}
}
console.log(min, max)
