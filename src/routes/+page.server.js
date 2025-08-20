/** @type {import('./$types').PageLoad} */
export async function load() {
    const items = [
        { "id": 1, "title": "Creamy Garlic Mashed Potatoes", "price": 3.99, "description": "Rich and buttery mashed potatoes with roasted garlic.", "category": "Food - Sides" },
        { "id": 2, "title": "Tomato Paste", "price": 1.29, "description": "Concentrated tomato paste, great for sauces.", "category": "Food - Canned Goods" },
        { "id": 3, "title": "Wrist Support Brace", "price": 19.99, "description": "Comfortable support brace to relieve wrist pain.", "category": "Health" },
        { "id": 4, "title": "Lemon Dill Chicken Skewers", "price": 9.99, "description": "Marinated chicken skewers with lemon and dill flavor, grilled to perfection.", "category": "Food - Meat" },
        { "id": 5, "title": "Cinnamon Sugar Popcorn", "price": 2.89, "description": "Sweet popcorn coated in a mixture of cinnamon and sugar.", "category": "Food - Snacks" },
        { "id": 6, "title": "Pet Carrier Backpack", "price": 39.99, "description": "Comfortable and breathable backpack for carrying small pets.", "category": "Pets" },
        { "id": 7, "title": "Dried Cranberries", "price": 4.29, "description": "Sweet and tart dried cranberries, great for salads and baking.", "category": "Food - Snacks" },
        { "id": 8, "title": "Feta Cheese", "price": 4.99, "description": "Tangy feta cheese, perfect for salads and sandwiches.", "category": "Food - Dairy" },
        { "id": 9, "title": "Electric Meat Grinder", "price": 89.99, "description": "Powerful grinder for making sausage and burgers at home.", "category": "Kitchen" },
        { "id": 10, "title": "Pet Food Storage Container", "price": 24.99, "description": "Airtight container to keep pet food fresh.", "category": "Pets" },
        { "id": 11, "title": "Collapsible Storage Crates", "price": 18.99, "description": "Space-saving crates for easy organization at home or while traveling.", "category": "Home" },
        { "id": 12, "title": "Tomato Basil Soup", "price": 3.49, "description": "A classic soup combining tomatoes and basil, great with grilled cheese sandwiches.", "category": "Food - Canned Goods" },
        { "id": 13, "title": "Nut Butter Cups", "price": 3.99, "description": "Delicious dark chocolate with creamy nut butter inside.", "category": "Food - Snacks" },
        { "id": 14, "title": "Fruit and Nut Energy Bites", "price": 2.99, "description": "Natural energy bites packed with fruits and nuts for a perfect snack.", "category": "Food - Snacks" },
        { "id": 15, "title": "Pocket Blanket", "price": 24.99, "description": "Compact, waterproof blanket for picnics and events.", "category": "Outdoor" },
        { "id": 16, "title": "Pepper Jack Cheese Slices", "price": 3.49, "description": "Creamy cheese with a spicy kick, perfect for sandwiches.", "category": "Food - Dairy" },
        { "id": 17, "title": "Herbed Chicken Breast", "price": 7.99, "description": "Marinated chicken breast seasoned with herbs, ready for grilling.", "category": "Food - Meat" },
        { "id": 18, "title": "Personal Blender with Travel Cup", "price": 39.99, "description": "Blender for smoothies with a portable cup.", "category": "Kitchen" },
        { "id": 19, "title": "Banana Nut Muffins", "price": 4.49, "description": "Moist, fluffy muffins packed with bananas and walnuts for a delightful breakfast or snack.", "category": "Food - Bakery" },
        { "id": 20, "title": "Pizza Stone", "price": 29.99, "description": "Ceramic pizza stone for homemade pizzas.", "category": "Kitchen" }
    ];

    return {
        items
    }
}