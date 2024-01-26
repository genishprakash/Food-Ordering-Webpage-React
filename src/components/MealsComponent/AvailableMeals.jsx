import styles from "../MealsComponent/AvailableMeals.module.css";
import MealsList from "../MealsList/MealsList";
import Card from "../Card/Card";
const AvailableMeals = () => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((item) => (
            <MealsList
              id={item.id}
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            ></MealsList>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
