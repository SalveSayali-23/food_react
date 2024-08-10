// import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
import Loader from "./Loader";



// import cartContext from "../store/CartContext";

const requestConfig = {};
const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);
  // console.log(loadedMeals)

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <>
      <ul id="meals">
        {loadedMeals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </>
  );
};

export default Meals;
