// import data from "./data.json"; This is ES module type
// "import" doesn't work outside of the module but "require" does work in terminal
const data = require("./data.json"); //This is common JS module type

//1. Listing all the food items
console.log(data);

//2. listing all the food items with category vegetables
// In 2 ways - which is static(input given by default) and dynamic(gets the input from user)
// Static
//Note: here "item" will fetch all items in the data
const filterByCategory1 = data.filter((item) => item.category === "Vegetable");
console.log(filterByCategory1);
console.log("Total No.Of Vegetables is : ", filterByCategory1.length); //this will print the no of vegetables listed
// dynamic
//Note: here we are taking "(category)" in parameter
const filterByCategory2 = (category) => {
  return data.filter((item) => item.category === category);
};
console.log(filterByCategory2("Vegetable"));
console.log(filterByCategory2("Fruit")); //3
console.log(filterByCategory2("Protein")); //4
console.log(filterByCategory2("Nuts")); //5
console.log(filterByCategory2("Grain")); //6
console.log(filterByCategory2("Dairy")); //7

// 8. listing all the food items with calorie above 100
//in static
const findingCalorieAbove = data.filter((item) => item.calorie > 100);
console.log(findingCalorieAbove);
console.log("Total No.Of itmes is : ", findingCalorieAbove.length);

// 9. listing all the food items with calorie below 100
//in static
const findingCalorieBelow = data.filter((item) => item.calorie < 100);
console.log(findingCalorieBelow);
console.log("Total No.Of itmes is : ", findingCalorieBelow.length);

//we are going to do both in one code as dynamic

const findingValues = (key, value, comparison) => {
  return data.filter((item) => {
    if (comparison === "greater") {
      return item[key] > value;
    }
    if (comparison === "less") {
      return item[key] < value;
    }
    if (comparison === "equals") {
      return item[key] === value;
    }
  });
};
// console.log(findingValues("calorie", 100, "greater"));
console.log(findingValues("calorie", 100, "less"));
// console.log(findingValues("calorie", 100, "equals"));

// 10. Listing all the food items with highest protien content to lowest
const sortValues1 = (key, order) => {
  if (order === "ascend") {
    return data.sort((a, b) => a[key] - b[key]);
  } else if (order === "descend") {
    return data.sort((a, b) => b[key] - a[key]);
  }
};
console.log(sortValues1("protiens", "descend"));
console.log(sortValues1("cab", "ascend"));

//Or using this way
// 11. listing all the food items with lowest cab content to highest
const sortValues2 = (key, order) => {
  if (order === "ascend") {
    console.log(data.sort((a, b) => a[key] - b[key]));
  } else if (order === "descend") {
    console.log(data.sort((a, b) => b[key] - a[key]));
  }
};
sortValues2("cab", "ascend");
sortValues2("protiens", "descend");
