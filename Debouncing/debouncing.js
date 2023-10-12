//document.getElementById("search").addEventListener("input",function(){
  //  let  query=document.getElementById("search").Value;
    //searchMeal(query);

//});
//function searchMeal(query){
  //  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    //.then((response)=>response.json())
    //.then((data)=>{
      //  displayMeals(data.meals);
    //})
    //.catch((error)=>{
      //  console.log(error);
    //});
//}
//function displayMeals(meals){
  //  let list = document.getElementById("recipeList");
    //list.innerHTML="";
    //if(meals){
    //    meals.forEach((recipe) =>{
      //      list.innerHTML+=`<div>
        //    <h3>${recipe.strMeal}</h3>
          //  <img src="${recipe.strMealThumb}" alt="Meal logo" width="200px"
        //</div>`;
        //});
       

    //}else{
      //  list.innerHTML="<p>no meals found</p>"
    //}
//}
let Timeout=null;
document.getElementById("search").addEventListener("input", function () {
  clearTimeout(Timeout)
    let query = document.getElementById("search").value; // Corrected 'Value' to 'value'
   timeout =setTimeout(function()
   {console.log("hello")
   searchMeal(query);} ,1000)
    
});

function searchMeal(query) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then((response) => response.json())
        .then((data) => {
            displayMeals(data.meals);
        })
        .catch((error) => {
            console.log(error);
        });
}

function displayMeals(meals) {
    let list = document.getElementById("recipeList");
    list.innerHTML = "";
    if (meals) {
        meals.forEach((recipe) => {
            list.innerHTML += `<div>
            <h3>${recipe.strMeal}</h3>
            <img src="${recipe.strMealThumb}" alt="Meal logo" width="200px">
        </div>`;
        });
    } else {
        list.innerHTML = "<p>no meals found</p>";
    }
}
