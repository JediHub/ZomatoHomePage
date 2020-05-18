import React, { useState } from 'react';
import './App.css';
import Header from './components/header/header.components';
import HomePage from './pages/homepage/homepage.component';
import FoodItem from './pages/foodItem/foodItem.component';

function App() {

  const [foodList, setFoodLIst] = useState([
    {
      id: 1,
      image: "https://media.gettyimages.com/photos/authentic-indian-food-picture-id639389404?s=2048x2048",
      title: "Shahi Paneer",
      store: "Hauz Khas, CP, Palam Vihar",
      description: " Avaialable here"
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-ZiAMp51au4IyAalE3X5TvNjSrPxFBODgLLeNMjPcs0tRWUKw&usqp=CAU",
      title: "King Burger",
      store: "Hauz Khas, CP, Palam Vihar",
      description: " Avaialable here"
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLrY2XxB4AfTBh6kFccqpFROY8QNjosL8tWD767iqmMqDLs_TG&usqp=CAU",
      title: "Garlic Fruit Bread",
      store: "Hauz Khas, CP, Palam Vihar",
      description: " Avaialable here"
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqLlHBNdKRIGLWtrChWRcbXBw0naLvDohYa9OTYu_lSBqP8zjj&usqp=CAU",
      title: "Sandwich",
      store: "Hauz Khas, CP, Palam Vihar",
      description: " Avaialable here"
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ482jXqfnNceQKtlY3GXrYVxmL_lPMmSmoM70ORh7h8Q7dpLEB&usqp=CAU",
      title: "Oats",
      store: "Hauz Khas, CP, Palam Vihar",
      description: " Avaialable here"
    },
    {
      id: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDfnoGXKLXgTOAo6R70Ikro51DhBsZn8OUjebuV3WJpRLrViUR&usqp=CAU",
      title: "Pollo Loco",
      store: "Hauz Khas, CP, Palam Vihar",
      description: " Avaialable here"
    },
    {
      id: 7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQU9KN4iI0mab-Gg2jWK8m3jbwDL_pbCATpFcGLJajI-c-qwhfP&usqp=CAU",
      title: "Fried Chicken",
      store: "Hauz Khas, CP, Palam Vihar",
      description: " Avaialable here"
    },
    {
      id: 8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYuA--rFWLcxawlKg6SWi8PFAitXle_W6GiLZER70u71B7vlVd&usqp=CAU",
      title: "Pizza",
      store: "Hauz Khas, CP, Palam Vihar",
      description: " Avaialable here"
    },
  ]);
  const [selectedFood, setSelectedFood] = useState(null);

  function selectFoodHandler(event) {
    const id = event.currentTarget.getAttribute('data-id_key');
    console.log(id);
    setSelectedFood(id);
  }

  function resetFoodHandler() {
    setSelectedFood(null);
  }

  const itemDetail = foodList.filter(item => item.id == selectedFood);

  return (
    <div className="App">
      <Header resetFoodHandler= {resetFoodHandler}></Header>
      {selectedFood ?
        <FoodItem itemDetail={itemDetail[0] || {}} />
      : <HomePage foodList={foodList} selectFoodHandler={selectFoodHandler} />
      }
    </div>
  );
}

export default App;
