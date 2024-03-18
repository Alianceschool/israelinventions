let inventions = {
    "israeli": [
       'עגבניות שרי',
        'waze'
    ],
    "notIsraeli": [
        'נורת החשמל',
        'פלאפון'
    ]
}
const categories = Object.keys(inventions);
const randCategoryIndex = Math.floor(Math.random() * categories.length);
console.log(randCategoryIndex)
const randomCategory = categories[randCategoryIndex];
console.log(randomCategory)

function xfunction(){
    if(randCategoryIndex === 1){
        console.log("correct")
    } else{
        console.log("incorrect")
    }
}
function vfunction(){
    if(randCategoryIndex === 0){
        console.log("correct")
    } else{
        console.log("incorrect")
    }
}