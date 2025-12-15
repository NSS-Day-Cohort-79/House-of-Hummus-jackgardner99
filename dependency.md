```mermaid
graph TD;

    Main --> FoodTruck
    FoodTruck --> Sales
    FoodTruck --> Entrees
    FoodTruck --> Vegetables
    FoodTruck --> Sides
    Sales --> JSON
    Entrees --> JSON
    Vegetables --> JSON
    Sides --> JSON
    JSON --> database.json

```