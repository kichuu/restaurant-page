export function Menu(){
    const menuDiv = document.createElement('div')
    menuDiv.classList.add('menu')
    menuDiv.innerHTML=`
        <h1>Menu</h1>
        <p>Grilled Lemon Herb Chicken - A tender chicken breast marinated in a zesty lemon-herb sauce, grilled to perfection.
Price: $15.99 <br>

Spaghetti Carbonara - Classic Italian pasta tossed in a rich creamy sauce with crispy pancetta and topped with Parmesan.
Price: $13.49 <br>

Steak Frites - A juicy sirloin steak served with a side of crispy French fries and garlic butter.
Price: $22.99 <br>

Margarita Pizza - A thin-crust pizza topped with fresh tomatoes, mozzarella, basil, and a drizzle of olive oil.
Price: $11.99   <br>

Shrimp Tacos - Grilled shrimp with a spicy chipotle sauce, served with fresh cabbage slaw in soft tortillas.
Price: $12.49   <br>

Vegetable Stir-Fry - A mix of seasonal vegetables sautéed with soy sauce and sesame seeds, served over steamed rice.
Price: $10.99   <br>

Chocolate Lava Cake - A decadent molten chocolate cake with a gooey center, served with vanilla ice cream.
Price: $7.99 </p>    
    `
    return menuDiv
}