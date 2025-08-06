
const mealData = {
    "Spring": {
        "breakfast": [
            { 
                "name": "Berry Parfait", 
                "steps": [
                    "Gather fresh berries, yogurt, and granola.",
                    "Layer yogurt, granola, and berries in a glass.",
                    "Repeat layering until the glass is full.",
                    "Drizzle honey on top for extra sweetness.",
                    "Chill for 10 minutes and enjoy!"
                ],
                "ingredients": [
                    "Fresh mixed berries (200g)",
                    "Greek yogurt (150ml)",
                    "Granola (50g)",
                    "Honey (1 tbsp)",
                    "Mint leaves for garnish"
                ],
                "nutrition": {
                    "calories": "320",
                    "protein": "12g",
                    "carbs": "45g",
                    "fiber": "8g",
                    "fat": "6g",
                    "vitamins": "C, K, E",
                    "benefits": [
                        "Rich in antioxidants from berries",
                        "Probiotics from yogurt aid digestion",
                        "High fiber content keeps you full longer"
                    ]
                }
            },
            { 
                "name": "Avocado Toast", 
                "steps": [
                    "Toast whole wheat bread until golden.",
                    "Mash avocado with lemon juice and salt.",
                    "Spread avocado mixture on toast.",
                    "Top with cherry tomatoes and black pepper.",
                    "Serve fresh with a side of orange juice."
                ],
                "ingredients": [
                    "Whole wheat bread (2 slices)",
                    "Ripe avocado (1)",
                    "Lemon juice (1 tsp)",
                    "Cherry tomatoes (50g)",
                    "Black pepper (to taste)"
                ],
                "nutrition": {
                    "calories": "350",
                    "protein": "8g",
                    "carbs": "40g",
                    "fiber": "10g",
                    "fat": "18g",
                    "vitamins": "B6, C, E, K",
                    "benefits": [
                        "Healthy monounsaturated fats from avocado",
                        "Whole grains provide sustained energy",
                        "Rich in fiber for digestive health"
                    ]
                }
            },
            { 
                "name": "Chia Pudding", 
                "steps": [
                    "Mix chia seeds with almond milk and honey.",
                    "Refrigerate for at least 4 hours or overnight.",
                    "Stir well before serving.",
                    "Top with sliced bananas and nuts.",
                    "Enjoy a creamy and healthy pudding!"
                ],
                "ingredients": [
                    "Chia seeds (3 tbsp)",
                    "Almond milk (200ml)",
                    "Honey (1 tbsp)",
                    "Banana (1)",
                    "Mixed nuts (20g)"
                ],
                "nutrition": {
                    "calories": "380",
                    "protein": "10g",
                    "carbs": "50g",
                    "fiber": "15g",
                    "fat": "16g",
                    "vitamins": "B, C, E",
                    "benefits": [
                        "High in omega-3 fatty acids",
                        "Excellent source of plant-based protein",
                        "Rich in fiber for gut health"
                    ]
                }
            }
        ],
        "lunch": [
            { 
                "name": "Grilled Chicken Salad", 
                "steps": [
                    "Grill chicken breast with salt and herbs.",
                    "Chop fresh lettuce, tomatoes, and cucumbers.",
                    "Mix grilled chicken with salad ingredients.",
                    "Drizzle olive oil and lemon juice on top.",
                    "Toss well and serve fresh!"
                ],
                "ingredients": [
                    "Chicken breast (200g)",
                    "Lettuce (100g)",
                    "Tomatoes (2)",
                    "Cucumber (1)",
                    "Olive oil (1 tbsp)"
                ],
                "nutrition": {
                    "calories": "400",
                    "protein": "35g",
                    "carbs": "15g",
                    "fiber": "5g",
                    "fat": "22g",
                    "vitamins": "A, C, K",
                    "benefits": [
                        "High-quality protein for muscle maintenance",
                        "Rich in vitamins from fresh vegetables",
                        "Healthy fats from olive oil"
                    ]
                }
            },
            { 
                "name": "Spinach & Cheese Sandwich", 
                "steps": [
                    "Sauté spinach with garlic and olive oil.",
                    "Spread butter on whole grain bread slices.",
                    "Add cooked spinach and grated cheese.",
                    "Grill sandwich until crispy and golden.",
                    "Serve hot with a side of tomato soup."
                ],
                "ingredients": [
                    "Spinach (100g)",
                    "Whole grain bread (2 slices)",
                    "Cheese (50g)",
                    "Garlic (2 cloves)",
                    "Olive oil (1 tbsp)"
                ],
                "nutrition": {
                    "calories": "450",
                    "protein": "20g",
                    "carbs": "45g",
                    "fiber": "8g",
                    "fat": "22g",
                    "vitamins": "A, C, K, B12",
                    "benefits": [
                        "Iron-rich spinach for energy",
                        "Whole grains provide complex carbs",
                        "Calcium from cheese for bone health"
                    ]
                }
            },
            { 
                "name": "Mushroom Soup", 
                "steps": [
                    "Chop mushrooms, onions, and garlic.",
                    "Sauté in butter until golden brown.",
                    "Blend into a smooth soup with vegetable broth.",
                    "Add cream, salt, and pepper to taste.",
                    "Serve warm with whole wheat croutons."
                ],
                "ingredients": [
                    "Mushrooms (200g)",
                    "Onion (1)",
                    "Garlic (2 cloves)",
                    "Vegetable broth (300ml)",
                    "Cream (50ml)"
                ],
                "nutrition": {
                    "calories": "280",
                    "protein": "8g",
                    "carbs": "20g",
                    "fiber": "4g",
                    "fat": "18g",
                    "vitamins": "B, D",
                    "benefits": [
                        "Rich in immune-boosting nutrients",
                        "Source of vitamin D from mushrooms",
                        "Comforting and satisfying"
                    ]
                }
            }
        ],
        "dinner": [
            { 
                "name": "Lentil & Vegetable Stir-fry", 
                "steps": [
                    "Soak and boil lentils until soft.",
                    "Chop seasonal vegetables into thin strips.",
                    "Sauté vegetables in olive oil until tender.",
                    "Add lentils and season with salt and pepper.",
                    "Serve warm with brown rice."
                ],
                "ingredients": [
                    "Lentils (150g)",
                    "Carrots (2)",
                    "Bell peppers (2)",
                    "Zucchini (1)",
                    "Olive oil (1 tbsp)"
                ],
                "nutrition": {
                    "calories": "380",
                    "protein": "18g",
                    "carbs": "55g",
                    "fiber": "15g",
                    "fat": "10g",
                    "vitamins": "A, C, K, B",
                    "benefits": [
                        "Plant-based protein from lentils",
                        "Fiber-rich for digestive health",
                        "Packed with vitamins from vegetables"
                    ]
                }
            },
            { 
                "name": "Stuffed Bell Peppers", 
                "steps": [
                    "Cut bell peppers in half and remove seeds.",
                    "Mix cooked quinoa with chopped veggies.",
                    "Stuff the mixture inside bell peppers.",
                    "Bake at 180°C for 20 minutes.",
                    "Serve hot with a side of yogurt."
                ],
                "ingredients": [
                    "Bell peppers (4)",
                    "Quinoa (100g)",
                    "Tomatoes (2)",
                    "Onion (1)",
                    "Cheese (50g)"
                ],
                "nutrition": {
                    "calories": "350",
                    "protein": "15g",
                    "carbs": "45g",
                    "fiber": "10g",
                    "fat": "12g",
                    "vitamins": "A, C, B",
                    "benefits": [
                        "Complete protein from quinoa",
                        "Rich in antioxidants from bell peppers",
                        "Balanced macronutrients"
                    ]
                }
            },
            { 
                "name": "Tomato Basil Pasta", 
                "steps": [
                    "Boil pasta until al dente.",
                    "Sauté garlic and tomatoes in olive oil.",
                    "Add cooked pasta and fresh basil.",
                    "Toss well and season with salt and pepper.",
                    "Serve with grated parmesan cheese."
                ],
                "ingredients": [
                    "Pasta (200g)",
                    "Tomatoes (3)",
                    "Garlic cloves (2)",
                    "Fresh basil (10 leaves)",
                    "Parmesan cheese (50g)"
                ],
                "nutrition": {
                    "calories": "420",
                    "protein": "14g",
                    "carbs": "65g",
                    "fiber": "6g",
                    "fat": "12g",
                    "vitamins": "C, K, B",
                    "benefits": [
                        "Lycopene from cooked tomatoes",
                        "Antioxidants from fresh basil",
                        "Comforting yet nutritious meal"
                    ]
                }
            }
        ]
    },
    "Summer": {
        "breakfast": [
            { 
                "name": "Mango Smoothie", 
                "steps": [
                    "Peel and chop fresh mangoes.",
                    "Blend mangoes with yogurt and honey.",
                    "Add ice cubes and blend again.",
                    "Pour into a glass and serve chilled.",
                    "Enjoy a refreshing summer drink!"
                ],
                "ingredients": [
                    "Mango (1)",
                    "Yogurt (150ml)",
                    "Honey (1 tbsp)",
                    "Ice cubes (5-6)"
                ],
                "nutrition": {
                    "calories": "300",
                    "protein": "8g",
                    "carbs": "60g",
                    "fiber": "5g",
                    "fat": "4g",
                    "vitamins": "A, C, B6",
                    "benefits": [
                        "Rich in vitamin C for immunity",
                        "Natural sweetness from mango",
                        "Probiotics from yogurt"
                    ]
                }
            },
            { 
                "name": "Coconut Pancakes", 
                "steps": [
                    "Mix coconut milk, flour, sugar, and eggs.",
                    "Heat a pan and pour small pancake batter.",
                    "Cook for 2 minutes per side until golden brown.",
                    "Drizzle with honey and top with shredded coconut.",
                    "Serve warm and enjoy!"
                ],
                "ingredients": [
                    "Coconut milk (200ml)",
                    "Flour (150g)",
                    "Sugar (2 tbsp)",
                    "Eggs (2)",
                    "Shredded coconut (20g)"
                ],
                "nutrition": {
                    "calories": "380",
                    "protein": "10g",
                    "carbs": "50g",
                    "fiber": "4g",
                    "fat": "16g",
                    "vitamins": "B, E",
                    "benefits": [
                        "Medium-chain triglycerides from coconut",
                        "Sustained energy from complex carbs",
                        "Delicious tropical flavor"
                    ]
                }
            },
            { 
                "name": "Watermelon Mint Juice", 
                "steps": [
                    "Chop fresh watermelon into cubes.",
                    "Blend with fresh mint leaves and a splash of lemon juice.",
                    "Strain the juice into a glass.",
                    "Add ice cubes and serve chilled.",
                    "A hydrating and refreshing summer drink!"
                ],
                "ingredients": [
                    "Watermelon (300g)",
                    "Mint leaves (10)",
                    "Lemon juice (1 tbsp)",
                    "Ice cubes (5-6)"
                ],
                "nutrition": {
                    "calories": "120",
                    "protein": "2g",
                    "carbs": "30g",
                    "fiber": "2g",
                    "fat": "0.5g",
                    "vitamins": "A, C",
                    "benefits": [
                        "Excellent hydration from watermelon",
                        "Digestive aid from mint",
                        "Natural electrolytes"
                    ]
                }
            }
        ],
        "lunch": [
            { 
                "name": "Cucumber Yogurt Salad", 
                "steps": [
                    "Chop cucumbers, tomatoes, and onions.",
                    "Mix with thick yogurt, salt, and black pepper.",
                    "Garnish with fresh coriander leaves.",
                    "Chill in the fridge for 10 minutes.",
                    "Serve fresh and enjoy!"
                ],
                "ingredients": [
                    "Cucumber (1)",
                    "Tomatoes (2)",
                    "Onion (1)",
                    "Yogurt (150ml)",
                    "Coriander leaves (10g)"
                ],
                "nutrition": {
                    "calories": "180",
                    "protein": "8g",
                    "carbs": "20g",
                    "fiber": "4g",
                    "fat": "8g",
                    "vitamins": "C, K",
                    "benefits": [
                        "Cooling effect for summer",
                        "Probiotics from yogurt",
                        "Hydrating vegetables"
                    ]
                }
            },
            { 
                "name": "Lemon Rice", 
                "steps": [
                    "Cook rice and let it cool slightly.",
                    "Heat oil in a pan, add mustard seeds and curry leaves.",
                    "Add turmeric, salt, and lemon juice.",
                    "Mix well with the cooked rice.",
                    "Serve warm with pickles or yogurt."
                ],
                "ingredients": [
                    "Rice (200g)",
                    "Mustard seeds (1 tsp)",
                    "Curry leaves (5-6)",
                    "Turmeric (1/2 tsp)",
                    "Lemon juice (2 tbsp)"
                ],
                "nutrition": {
                    "calories": "350",
                    "protein": "6g",
                    "carbs": "75g",
                    "fiber": "3g",
                    "fat": "5g",
                    "vitamins": "B, C",
                    "benefits": [
                        "Light and refreshing",
                        "Turmeric has anti-inflammatory properties",
                        "Easy to digest"
                    ]
                }
            },
            { 
                "name": "Grilled Veggie Wrap", 
                "steps": [
                    "Chop bell peppers, zucchini, and carrots.",
                    "Grill the vegetables until slightly charred.",
                    "Wrap in a whole wheat tortilla with hummus.",
                    "Roll tightly and slice in half.",
                    "Enjoy a delicious and healthy wrap!"
                ],
                "ingredients": [
                    "Bell peppers (2)",
                    "Zucchini (1)",
                    "Carrots (1)",
                    "Whole wheat tortilla (1)",
                    "Hummus (50g)"
                ],
                "nutrition": {
                    "calories": "320",
                    "protein": "12g",
                    "carbs": "45g",
                    "fiber": "10g",
                    "fat": "12g",
                    "vitamins": "A, C, K",
                    "benefits": [
                        "Plant-based protein from hummus",
                        "Fiber-rich whole grains",
                        "Grilled vegetables retain nutrients"
                    ]
                }
            }
        ],
        "dinner": [
            { 
                "name": "Light Dal & Rice", 
                "steps": [
                    "Boil lentils with garlic, turmeric, and salt.",
                    "Simmer until soft and mash slightly.",
                    "Prepare steamed rice separately.",
                    "Serve dal over rice with a side of yogurt.",
                    "Enjoy a simple, nutritious meal."
                ],
                "ingredients": [
                    "Lentils (150g)",
                    "Garlic (2 cloves)",
                    "Turmeric (1/2 tsp)",
                    "Rice (200g)",
                    "Yogurt (100ml)"
                ],
                "nutrition": {
                    "calories": "400",
                    "protein": "18g",
                    "carbs": "70g",
                    "fiber": "12g",
                    "fat": "5g",
                    "vitamins": "B, K",
                    "benefits": [
                        "Easy to digest in summer heat",
                        "Complete protein when combined with rice",
                        "Turmeric has anti-inflammatory benefits"
                    ]
                }
            },
            { 
                "name": "Stuffed Bell Peppers", 
                "steps": [
                    "Cut bell peppers in half and remove seeds.",
                    "Stuff with a mixture of cooked rice, spices, and cheese.",
                    "Bake at 180°C for 20 minutes.",
                    "Garnish with fresh herbs and serve.",
                    "A flavorful and light summer dinner!"
                ],
                "ingredients": [
                    "Bell peppers (4)",
                    "Rice (100g)",
                    "Cheese (50g)",
                    "Spices (to taste)",
                    "Fresh herbs (10g)"
                ],
                "nutrition": {
                    "calories": "350",
                    "protein": "14g",
                    "carbs": "45g",
                    "fiber": "8g",
                    "fat": "12g",
                    "vitamins": "A, C, B",
                    "benefits": [
                        "Colorful presentation",
                        "Balanced macronutrients",
                        "Versatile - can use various fillings"
                    ]
                }
            },
            { 
                "name": "Cold Pasta Salad", 
                "steps": [
                    "Boil pasta and let it cool.",
                    "Mix with cherry tomatoes, olives, and basil.",
                    "Drizzle with olive oil and balsamic vinegar.",
                    "Chill in the fridge for 15 minutes.",
                    "Serve cold and enjoy!"
                ],
                "ingredients": [
                    "Pasta (200g)",
                    "Cherry tomatoes (100g)",
                    "Olives (50g)",
                    "Basil leaves (10)",
                    "Olive oil (1 tbsp)"
                ],
                "nutrition": {
                    "calories": "380",
                    "protein": "10g",
                    "carbs": "55g",
                    "fiber": "6g",
                    "fat": "14g",
                    "vitamins": "A, C, K",
                    "benefits": [
                        "Refreshing cold meal for summer",
                        "Antioxidants from tomatoes and basil",
                        "Healthy fats from olive oil"
                    ]
                }
            }
        ]
    },
    "Monsoon": {
        "breakfast": [
            { 
                "name": "Masala Chai & Pakora", 
                "steps": [
                    "Boil water with tea leaves, ginger, and spices.",
                    "Add milk and let it simmer for 5 minutes.",
                    "Strain into cups and add honey or sugar.",
                    "Mix gram flour, chopped veggies, and spices for batter.",
                    "Deep-fry small portions to make crispy pakoras."
                ],
                "ingredients": [
                    "Tea leaves (1 tbsp)",
                    "Ginger (1 inch)",
                    "Milk (200ml)",
                    "Gram flour (100g)",
                    "Mixed vegetables (100g)"
                ],
                "nutrition": {
                    "calories": "350",
                    "protein": "10g",
                    "carbs": "45g",
                    "fiber": "6g",
                    "fat": "15g",
                    "vitamins": "B, C",
                    "benefits": [
                        "Warming spices for rainy days",
                        "Antioxidants from tea",
                        "Comforting and satisfying"
                    ]
                }
            },
            { 
                "name": "Oats & Banana Porridge", 
                "steps": [
                    "Heat milk in a saucepan.",
                    "Add oats and stir continuously.",
                    "Mash bananas and mix them into the oats.",
                    "Cook for 5 minutes until thickened.",
                    "Garnish with nuts and honey before serving."
                ],
                "ingredients": [
                    "Oats (50g)",
                    "Milk (200ml)",
                    "Banana (1)",
                    "Nuts (20g)",
                    "Honey (1 tbsp)"
                ],
                "nutrition": {
                    "calories": "380",
                    "protein": "12g",
                    "carbs": "60g",
                    "fiber": "8g",
                    "fat": "10g",
                    "vitamins": "B, C, E",
                    "benefits": [
                        "Soluble fiber for digestion",
                        "Natural sweetness from banana",
                        "Sustained energy release"
                    ]
                }
            },
            { 
                "name": "Sprouted Moong Salad", 
                "steps": [
                    "Soak moong beans overnight and let them sprout.",
                    "Chop onions, tomatoes, and green chilies.",
                    "Mix sprouted moong with chopped veggies.",
                    "Add lemon juice, salt, and black pepper.",
                    "Toss well and serve fresh."
                ],
                "ingredients": [
                    "Moong beans (100g)",
                    "Onion (1)",
                    "Tomatoes (2)",
                    "Green chilies (1-2)",
                    "Lemon juice (1 tbsp)"
                ],
                "nutrition": {
                    "calories": "220",
                    "protein": "15g",
                    "carbs": "35g",
                    "fiber": "10g",
                    "fat": "2g",
                    "vitamins": "B, C, K",
                    "benefits": [
                        "High in plant-based protein",
                        "Enzymes from sprouts aid digestion",
                        "Light yet nutritious"
                    ]
                }
            }
        ],
        "lunch": [
            { 
                "name": "Hot Lentil Soup", 
                "steps": [
                    "Soak lentils for 30 minutes.",
                    "Boil them with garlic, turmeric, and salt.",
                    "Simmer until soft and mash slightly.",
                    "Add cumin seeds and ghee for flavor.",
                    "Serve hot with toasted bread."
                ],
                "ingredients": [
                    "Lentils (150g)",
                    "Garlic (2 cloves)",
                    "Turmeric (1/2 tsp)",
                    "Cumin seeds (1 tsp)",
                    "Ghee (1 tbsp)"
                ],
                "nutrition": {
                    "calories": "320",
                    "protein": "18g",
                    "carbs": "45g",
                    "fiber": "15g",
                    "fat": "8g",
                    "vitamins": "B, K",
                    "benefits": [
                        "Comforting warm meal for rainy days",
                        "Anti-inflammatory properties from turmeric",
                        "High in plant-based protein"
                    ]
                }
            },
            { 
                "name": "Steamed Rice & Vegetable Curry", 
                "steps": [
                    "Wash and soak rice for 10 minutes, then cook it.",
                    "Chop mixed vegetables like carrots, beans, and peas.",
                    "Heat oil, add mustard seeds and curry leaves.",
                    "Add chopped veggies and sauté for 5 minutes.",
                    "Add coconut milk and simmer until vegetables are tender."
                ],
                "ingredients": [
                    "Rice (200g)",
                    "Carrots (2)",
                    "Beans (100g)",
                    "Peas (50g)",
                    "Coconut milk (200ml)"
                ],
                "nutrition": {
                    "calories": "450",
                    "protein": "10g",
                    "carbs": "70g",
                    "fiber": "8g",
                    "fat": "15g",
                    "vitamins": "A, C, K",
                    "benefits": [
                        "Healthy fats from coconut milk",
                        "Balanced meal with carbs and veggies",
                        "Comforting and satisfying"
                    ]
                }
            },
            { 
                "name": "Stuffed Paratha with Yogurt", 
                "steps": [
                    "Prepare dough with whole wheat flour and knead well.",
                    "Make stuffing with mashed potatoes, spices, and herbs.",
                    "Roll out dough, place stuffing, and fold into a paratha.",
                    "Cook on a hot griddle with ghee until golden brown.",
                    "Serve with fresh yogurt and pickles."
                ],
                "ingredients": [
                    "Whole wheat flour (200g)",
                    "Potatoes (2)",
                    "Spices (to taste)",
                    "Ghee (2 tbsp)",
                    "Yogurt (100ml)"
                ],
                "nutrition": {
                    "calories": "400",
                    "protein": "12g",
                    "carbs": "60g",
                    "fiber": "8g",
                    "fat": "14g",
                    "vitamins": "B, C",
                    "benefits": [
                        "Satisfying and comforting",
                        "Probiotics from yogurt",
                        "Whole grains for sustained energy"
                    ]
                }
            }
        ],
        "dinner": [
            { 
                "name": "Steamed Vegetables & Chapati", 
                "steps": [
                    "Chop fresh vegetables into bite-sized pieces.",
                    "Steam for 5 minutes until slightly tender.",
                    "Season with salt, pepper, and olive oil.",
                    "Serve hot with freshly made chapatis.",
                    "A light, healthy meal for monsoons!"
                ],
                "ingredients": [
                    "Mixed vegetables (200g)",
                    "Salt (to taste)",
                    "Pepper (to taste)",
                    "Olive oil (1 tbsp)",
                    "Chapati (2)"
                ],
                "nutrition": {
                    "calories": "350",
                    "protein": "10g",
                    "carbs": "55g",
                    "fiber": "10g",
                    "fat": "10g",
                    "vitamins": "A, C, K",
                    "benefits": [
                        "Light on digestion",
                        "Retains maximum nutrients from steaming",
                        "Balanced with whole grain chapatis"
                    ]
                }
            },
            { 
                "name": "Khichdi with Ghee", 
                "steps": [
                    "Wash and soak rice and lentils together.",
                    "Heat ghee, add cumin seeds and ginger.",
                    "Add rice-lentil mix and sauté for 2 minutes.",
                    "Pour in water and cook until soft and creamy.",
                    "Serve hot with a spoon of ghee on top."
                ],
                "ingredients": [
                    "Rice (100g)",
                    "Lentils (100g)",
                    "Ghee (2 tbsp)",
                    "Cumin seeds (1 tsp)",
                    "Ginger (1 inch)"
                ],
                "nutrition": {
                    "calories": "380",
                    "protein": "15g",
                    "carbs": "60g",
                    "fiber": "10g",
                    "fat": "10g",
                    "vitamins": "B, K",
                    "benefits": [
                        "Easy to digest comfort food",
                        "Complete protein from rice-lentil combo",
                        "Warming spices for rainy season"
                    ]
                }
            },
            { 
                "name": "Tomato Rasam & Rice", 
                "steps": [
                    "Boil tomatoes with tamarind, garlic, and spices.",
                    "Mash and strain to make a thin soup.",
                    "Heat oil, add mustard seeds and curry leaves.",
                    "Pour into the soup and simmer for 5 minutes.",
                    "Serve hot with steamed rice."
                ],
                "ingredients": [
                    "Tomatoes (3)",
                    "Tamarind (1 tbsp)",
                    "Garlic (2 cloves)",
                    "Mustard seeds (1 tsp)",
                    "Curry leaves (5-6)"
                ],
                "nutrition": {
                    "calories": "320",
                    "protein": "8g",
                    "carbs": "60g",
                    "fiber": "6g",
                    "fat": "6g",
                    "vitamins": "A, C, K",
                    "benefits": [
                        "Antioxidants from tomatoes",
                        "Aids digestion with spices",
                        "Light yet flavorful"
                    ]
                }
            }
        ]
    },
    "Autumn": {
        "breakfast": [
            { 
                "name": "Pumpkin Pancakes", 
                "steps": [
                    "Mix flour, mashed pumpkin, eggs, and milk.",
                    "Heat a pan and grease with butter.",
                    "Pour batter and cook for 2 minutes per side.",
                    "Flip and cook until golden brown.",
                    "Serve with maple syrup."
                ],
                "ingredients": [
                    "Flour (150g)",
                    "Pumpkin (100g)",
                    "Eggs (2)",
                    "Milk (200ml)",
                    "Maple syrup (2 tbsp)"
                ],
                "nutrition": {
                    "calories": "350",
                    "protein": "12g",
                    "carbs": "55g",
                    "fiber": "6g",
                    "fat": "10g",
                    "vitamins": "A, C, E",
                    "benefits": [
                        "Rich in beta-carotene from pumpkin",
                        "Sustained energy from complex carbs",
                        "Seasonal flavors"
                    ]
                }
            },
            { 
                "name": "Apple Cinnamon Porridge", 
                "steps": [
                    "Boil oats with milk and water.",
                    "Add chopped apples and cinnamon powder.",
                    "Cook for 5 more minutes until thick.",
                    "Stir in honey for sweetness.",
                    "Serve warm with extra apple slices."
                ],
                "ingredients": [
                    "Oats (50g)",
                    "Milk (200ml)",
                    "Apple (1)",
                    "Cinnamon powder (1 tsp)",
                    "Honey (1 tbsp)"
                ],
                "nutrition": {
                    "calories": "320",
                    "protein": "10g",
                    "carbs": "55g",
                    "fiber": "8g",
                    "fat": "6g",
                    "vitamins": "B, C",
                    "benefits": [
                        "Fiber-rich for digestion",
                        "Antioxidants from apples",
                        "Warming cinnamon for cooler days"
                    ]
                }
            },
            { 
                "name": "Nutty Granola Bowl", 
                "steps": [
                    "Mix oats, nuts, and dried fruits.",
                    "Toast them in an oven at 180°C for 10 minutes.",
                    "Let cool and store in an airtight jar.",
                    "Serve with yogurt or milk.",
                    "Top with fresh berries before eating."
                ],
                "ingredients": [
                    "Oats (100g)",
                    "Nuts (50g)",
                    "Dried fruits (50g)",
                    "Yogurt (150ml)",
                    "Fresh berries (50g)"
                ],
                "nutrition": {
                    "calories": "400",
                    "protein": "14g",
                    "carbs": "50g",
                    "fiber": "10g",
                    "fat": "16g",
                    "vitamins": "B, E",
                    "benefits": [
                        "Crunchy texture and rich flavor",
                        "Healthy fats from nuts",
                        "Probiotics from yogurt"
                    ]
                }
            }
        ],
        "lunch": [
            { 
                "name": "Warm Pasta Salad", 
                "steps": [
                    "Boil pasta until cooked.",
                    "Toss with roasted vegetables and olive oil.",
                    "Add salt, pepper, and Italian seasoning.",
                    "Mix well and serve warm.",
                    "A comforting fall dish!"
                ],
                "ingredients": [
                    "Pasta (200g)",
                    "Roasted vegetables (150g)",
                    "Olive oil (1 tbsp)",
                    "Salt (to taste)",
                    "Italian seasoning (1 tsp)"
                ],
                "nutrition": {
                    "calories": "380",
                    "protein": "12g",
                    "carbs": "55g",
                    "fiber": "8g",
                    "fat": "12g",
                    "vitamins": "A, C, K",
                    "benefits": [
                        "Warm yet light meal",
                        "Rich in antioxidants from roasted veggies",
                        "Healthy fats from olive oil"
                    ]
                }
            },
            { 
                "name": "Lentil & Squash Soup", 
                "steps": [
                    "Boil lentils and squash until soft.",
                    "Blend together with vegetable stock.",
                    "Season with salt, pepper, and cumin.",
                    "Simmer for 5 minutes.",
                    "Serve hot with bread."
                ],
                "ingredients": [
                    "Lentils (150g)",
                    "Squash (200g)",
                    "Vegetable stock (300ml)",
                    "Cumin (1 tsp)",
                    "Bread (2 slices)"
                ],
                "nutrition": {
                    "calories": "350",
                    "protein": "15g",
                    "carbs": "55g",
                    "fiber": "12g",
                    "fat": "6g",
                    "vitamins": "A, C, K",
                    "benefits": [
                        "Rich in fiber and protein",
                        "Comforting warm soup",
                        "Seasonal squash provides nutrients"
                    ]
                }
            },
            { 
                "name": "Autumn Veggie Stir-fry", 
                "steps": [
                    "Chop carrots, bell peppers, and zucchini.",
                    "Sauté in olive oil for 5 minutes.",
                    "Add soy sauce and ginger for flavor.",
                    "Toss well and cook for 2 more minutes.",
                    "Serve with rice or noodles."
                ],
                "ingredients": [
                    "Carrots (2)",
                    "Bell peppers (2)",
                    "Zucchini (1)",
                    "Soy sauce (1 tbsp)",
                    "Ginger (1 inch)"
                ],
                "nutrition": {
                    "calories": "300",
                    "protein": "8g",
                    "carbs": "45g",
                    "fiber": "10g",
                    "fat": "10g",
                    "vitamins": "A, C, K",
                    "benefits": [
                        "Quick and easy to prepare",
                        "Colorful and nutrient-dense",
                        "Ginger aids digestion"
                    ]
                }
            }
        ],
        "dinner": [
            { 
                "name": "Pumpkin Soup", 
                "steps": [
                    "Chop pumpkin into cubes.",
                    "Boil with onion and garlic until soft.",
                    "Blend into a smooth soup.",
                    "Add salt, pepper, and nutmeg.",
                    "Serve warm with croutons."
                ],
                "ingredients": [
                    "Pumpkin (300g)",
                    "Onion (1)",
                    "Garlic (2 cloves)",
                    "Nutmeg (1/2 tsp)",
                    "Croutons (50g)"
                ],
                "nutrition": {
                    "calories": "280",
                    "protein": "6g",
                    "carbs": "45g",
                    "fiber": "8g",
                    "fat": "10g",
                    "vitamins": "A, C, E",
                    "benefits": [
                        "Rich in beta-carotene",
                        "Comforting and warming",
                        "Seasonal flavors"
                    ]
                }
            },
            { 
                "name": "Baked Sweet Potatoes", 
                "steps": [
                    "Wash and slice sweet potatoes in half.",
                    "Drizzle with olive oil and salt.",
                    "Bake at 200°C for 30 minutes.",
                    "Mash slightly before serving.",
                    "Top with fresh herbs."
                ],
                "ingredients": [
                    "Sweet potatoes (2)",
                    "Olive oil (1 tbsp)",
                    "Salt (to taste)",
                    "Fresh herbs (10g)"
                ],
                "nutrition": {
                    "calories": "250",
                    "protein": "4g",
                    "carbs": "50g",
                    "fiber": "8g",
                    "fat": "5g",
                    "vitamins": "A, C, B6",
                    "benefits": [
                        "Naturally sweet and satisfying",
                        "High in fiber and vitamins",
                        "Simple yet nutritious"
                    ]
                }
            },
            { 
                "name": "Stuffed Bell Peppers", 
                "steps": [
                    "Cut bell peppers in half and remove seeds.",
                    "Stuff with quinoa, black beans, and spices.",
                    "Bake at 180°C for 20 minutes.",
                    "Garnish with cheese or fresh coriander.",
                    "Serve hot and enjoy!"
                ],
                "ingredients": [
                    "Bell peppers (4)",
                    "Quinoa (100g)",
                    "Black beans (100g)",
                    "Spices (to taste)",
                    "Cheese (50g)"
                ],
                "nutrition": {
                    "calories": "350",
                    "protein": "16g",
                    "carbs": "45g",
                    "fiber": "12g",
                    "fat": "12g",
                    "vitamins": "A, C, K",
                    "benefits": [
                        "Complete plant-based protein",
                        "Colorful presentation",
                        "Nutrient-dense ingredients"
                    ]
                }
            }
        ]
    },
    "Winter": {
        "breakfast": [
            { 
                "name": "Almond & Dates Shake", 
                "steps": [
                    "Soak almonds overnight and peel them.",
                    "Blend with dates and warm milk.",
                    "Add a pinch of cinnamon for extra flavor.",
                    "Pour into a glass and enjoy a warm drink.",
                    "Perfect for a cold winter morning!"
                ],
                "ingredients": [
                    "Almonds (20g)",
                    "Dates (5-6)",
                    "Milk (200ml)",
                    "Cinnamon (1/2 tsp)"
                ],
                "nutrition": {
                    "calories": "350",
                    "protein": "12g",
                    "carbs": "50g",
                    "fiber": "8g",
                    "fat": "12g",
                    "vitamins": "B, E",
                    "benefits": [
                        "Natural sweetness from dates",
                        "Healthy fats from almonds",
                        "Warming spices for winter"
                    ]
                }
            },
            { 
                "name": "Sweet Potato Pancakes", 
                "steps": [
                    "Mash boiled sweet potatoes in a bowl.",
                    "Mix with whole wheat flour and eggs.",
                    "Add a pinch of nutmeg and cinnamon.",
                    "Cook on a pan until golden brown.",
                    "Serve with honey or yogurt."
                ],
                "ingredients": [
                    "Sweet potatoes (2)",
                    "Whole wheat flour (100g)",
                    "Eggs (2)",
                    "Nutmeg (1/2 tsp)",
                    "Cinnamon (1/2 tsp)"
                ],
                "nutrition": {
                    "calories": "380",
                    "protein": "14g",
                    "carbs": "60g",
                    "fiber": "10g",
                    "fat": "10g",
                    "vitamins": "A, C, B6",
                    "benefits": [
                        "Rich in beta-carotene",
                        "Whole grains for sustained energy",
                        "Warming spices"
                    ]
                }
            },
            { 
                "name": "Hot Porridge with Nuts", 
                "steps": [
                    "Boil oats with milk or water.",
                    "Add chopped walnuts, almonds, and dates.",
                    "Simmer for 5 minutes and stir well.",
                    "Add honey for natural sweetness.",
                    "Serve hot with cinnamon on top."
                ],
                "ingredients": [
                    "Oats (50g)",
                    "Milk (200ml)",
                    "Walnuts (20g)",
                    "Almonds (20g)",
                    "Dates (3-4)"
                ],
                "nutrition": {
                    "calories": "400",
                    "protein": "14g",
                    "carbs": "55g",
                    "fiber": "10g",
                    "fat": "16g",
                    "vitamins": "B, E",
                    "benefits": [
                        "Warming and comforting",
                        "Healthy fats from nuts",
                        "Fiber-rich for digestion"
                    ]
                }
            }
        ],
        "lunch": [
            { 
                "name": "Warm Carrot Soup", 
                "steps": [
                    "Chop carrots, onions, and garlic.",
                    "Sauté in butter for 5 minutes.",
                    "Add vegetable broth and simmer until soft.",
                    "Blend into a smooth soup.",
                    "Serve hot with toasted bread."
                ],
                "ingredients": [
                    "Carrots (3)",
                    "Onion (1)",
                    "Garlic (2 cloves)",
                    "Vegetable broth (300ml)",
                    "Butter (1 tbsp)"
                ],
                "nutrition": {
                    "calories": "280",
                    "protein": "6g",
                    "carbs": "40g",
                    "fiber": "8g",
                    "fat": "12g",
                    "vitamins": "A, C, K",
                    "benefits": [
                        "Rich in beta-carotene",
                        "Warming and comforting",
                        "Simple yet nutritious"
                    ]
                }
            },
            { 
                "name": "Winter Special Khichdi", 
                "steps": [
                    "Soak lentils and rice for 30 minutes.",
                    "Sauté ginger, garlic, and cumin in ghee.",
                    "Add vegetables and cook until soft.",
                    "Mix with lentils and rice, add water.",
                    "Simmer until everything is well cooked."
                ],
                "ingredients": [
                    "Rice (100g)",
                    "Lentils (100g)",
                    "Ginger (1 inch)",
                    "Garlic (2 cloves)",
                    "Ghee (2 tbsp)"
                ],
                "nutrition": {
                    "calories": "400",
                    "protein": "16g",
                    "carbs": "60g",
                    "fiber": "12g",
                    "fat": "12g",
                    "vitamins": "B, K",
                    "benefits": [
                        "Complete protein from rice-lentil combo",
                        "Warming spices for winter",
                        "Easy to digest comfort food"
                    ]
                }
            },
            { 
                "name": "Stuffed Paratha", 
                "steps": [
                    "Prepare a filling with mashed potatoes and spices.",
                    "Roll whole wheat dough into circles.",
                    "Stuff the filling inside and roll again.",
                    "Cook on a hot pan with ghee until golden.",
                    "Serve with yogurt and pickle."
                ],
                "ingredients": [
                    "Whole wheat flour (200g)",
                    "Potatoes (2)",
                    "Spices (to taste)",
                    "Ghee (2 tbsp)",
                    "Yogurt (100ml)"
                ],
                "nutrition": {
                    "calories": "450",
                    "protein": "14g",
                    "carbs": "65g",
                    "fiber": "10g",
                    "fat": "16g",
                    "vitamins": "B, C",
                    "benefits": [
                        "Satisfying and comforting",
                        "Whole grains for sustained energy",
                        "Probiotics from yogurt"
                    ]
                }
            }
        ],
        "dinner": [
            { 
                "name": "Ghee-Roasted Vegetables", 
                "steps": [
                    "Chop winter vegetables like carrots and beets.",
                    "Toss with ghee, salt, and spices.",
                    "Roast in an oven until slightly crispy.",
                    "Garnish with sesame seeds.",
                    "Serve hot as a comforting dinner."
                ],
                "ingredients": [
                    "Carrots (2)",
                    "Beets (2)",
                    "Ghee (2 tbsp)",
                    "Spices (to taste)",
                    "Sesame seeds (1 tsp)"
                ],
                "nutrition": {
                    "calories": "300",
                    "protein": "6g",
                    "carbs": "35g",
                    "fiber": "10g",
                    "fat": "16g",
                    "vitamins": "A, C, K",
                    "benefits": [
                        "Natural sweetness from roasted veggies",
                        "Healthy fats from ghee",
                        "Warming spices for winter"
                    ]
                }
            },
            { 
                "name": "Hot Lentil Stew", 
                "steps": [
                    "Soak lentils for 30 minutes.",
                    "Cook with tomatoes, garlic, and ginger.",
                    "Simmer for 20 minutes until soft.",
                    "Season with cumin and coriander powder.",
                    "Serve hot with rice or roti."
                ],
                "ingredients": [
                    "Lentils (150g)",
                    "Tomatoes (2)",
                    "Garlic (2 cloves)",
                    "Ginger (1 inch)",
                    "Cumin powder (1 tsp)"
                ],
                "nutrition": {
                    "calories": "350",
                    "protein": "18g",
                    "carbs": "45g",
                    "fiber": "15g",
                    "fat": "10g",
                    "vitamins": "B, C, K",
                    "benefits": [
                        "High in plant-based protein",
                        "Warming spices for winter",
                        "Comforting and satisfying"
                    ]
                }
            },
            { 
                "name": "Winter Spiced Rice", 
                "steps": [
                    "Cook rice with cinnamon, cloves, and bay leaves.",
                    "Sauté nuts and dried fruits in ghee.",
                    "Mix everything together and cover for 5 minutes.",
                    "Fluff with a fork before serving.",
                    "A warm and flavorful dish for winter nights."
                ],
                "ingredients": [
                    "Rice (200g)",
                    "Cinnamon (1 stick)",
                    "Cloves (2-3)",
                    "Bay leaves (2)",
                    "Ghee (2 tbsp)"
                ],
                "nutrition": {
                    "calories": "400",
                    "protein": "8g",
                    "carbs": "65g",
                    "fiber": "5g",
                    "fat": "12g",
                    "vitamins": "B, E",
                    "benefits": [
                        "Aromatic and flavorful",
                        "Warming spices for winter",
                        "Healthy fats from ghee and nuts"
                    ]
                }
            }
        ]
    }
};

        // Sample produce calendar data
        const produceCalendar = {
    "Spring": {
        "March": ["Spinach", "Lettuce", "Radishes", "Spring onions"],
        "April": ["Strawberries", "Peas", "Asparagus", "Kale"],
        "May": ["Artichokes", "Carrots", "New potatoes", "Rhubarb"]
    },
    "Summer": {
        "June": ["Cherries", "Zucchini", "Cucumbers", "Tomatoes"],
        "July": ["Peaches", "Blueberries", "Green beans", "Corn"],
        "August": ["Watermelon", "Eggplant", "Bell peppers", "Okra"]
    },
    "Monsoon": {
        "September": ["Apples", "Pears", "Pumpkins", "Spinach"],
        "October": ["Grapes", "Cauliflower", "Sweet potatoes", "Beets"],
        "November": ["Pomegranates", "Persimmons", "Cabbage", "Carrots"]
    },
    "Autumn": {
        "December": ["Oranges", "Tangerines", "Kale", "Leeks"],
        "January": ["Grapefruit", "Pears", "Brussels sprouts", "Turnips"],
        "February": ["Lemons", "Apples", "Winter squash", "Celery"]
    },
    "Winter": {
        "December": ["Oranges", "Tangerines", "Kale", "Leeks"],
        "January": ["Grapefruit", "Pears", "Brussels sprouts", "Turnips"],
        "February": ["Lemons", "Apples", "Winter squash", "Celery"]
    }
};

// Sample produce details
const produceDetails = {
    "Spinach": {
        "nutrition": "High in iron, calcium, and vitamins A, C, K",
        "storage": "Refrigerate in plastic bag for up to 1 week",
        "tips": "Best when leaves are crisp and deep green"
    },
    "Strawberries": {
        "nutrition": "Rich in vitamin C, manganese, and antioxidants",
        "storage": "Store unwashed in fridge for 2-3 days",
        "tips": "Choose berries that are fully red with fresh green caps"
    },
    "Carrots": {
        "nutrition": "Excellent source of beta-carotene (vitamin A)",
        "storage": "Remove greens and store in fridge for weeks",
        "tips": "Sweetest when harvested after first frost"
    },
    "Tomatoes": {
        "nutrition": "Rich in lycopene, vitamin C, and potassium",
        "storage": "Store at room temperature until ripe",
        "tips": "Vine-ripened have best flavor"
    },
    "Apples": {
        "nutrition": "Good source of fiber and vitamin C",
        "storage": "Keep in cool, dark place for months",
        "tips": "Different varieties have different uses"
    }
};


let currentPage = 'formPage';
const pages = ['formPage', 'mealPage', 'descPage', 'nutritionPage', 'ingredientsPage', 'orderPage', 'successPage'];
let selectedMeal = null;
let navigationHistory = [];
let currentSection = 'recipesSection';
const sections = ['recipesSection', 'calendarSection', 'benefitsSection', 'cartSection'];
let currentCalendarSeason = 'Spring';
let cartItems = [];

// Show page function with animation
function showPage(pageId) {
    navigationHistory.push(currentPage);
    pages.forEach(page => {
        const el = document.getElementById(page);
        if (el) el.classList.remove('active-page');
    });
    const newPage = document.getElementById(pageId);
    if (newPage) {
        newPage.classList.add('active-page');
        currentPage = pageId;
        
        // Update content based on current language when page changes
        if (pageId === 'mealPage' && selectedMeal === null) {
            loadMealOptions();
        } else if (pageId === 'descPage' && selectedMeal) {
            showDescription();
        } else if (pageId === 'ingredientsPage' && selectedMeal) {
            showIngredients();
        } else if (pageId === 'orderPage' && selectedMeal) {
            showOrderConfirmation();
        } else if (pageId === 'nutritionPage' && selectedMeal) {
            showNutritionFacts();
        }
    }
}

// Show section function
function showSection(sectionId) {
    sections.forEach(section => {
        const el = document.getElementById(section);
        if (el) el.classList.remove('active-page');
    });
    const newSection = document.getElementById(sectionId);
    if (newSection) {
        newSection.classList.add('active-page');
        currentSection = sectionId;
        
        // Reset to first page of the section
        if (sectionId === 'recipesSection') {
            showPage('formPage');
        }
        
        // Load data for calendar section
        if (sectionId === 'calendarSection') {
            loadProduceCalendar();
            loadDailyCalendar();
        }
        
        // Load cart items if cart section
        if (sectionId === 'cartSection') {
            loadCartItems();
        }
    }
    
    // Update bottom nav active state
    updateBottomNavActive(sectionId);
}

// Update bottom nav active state
function updateBottomNavActive(sectionId) {
    document.querySelectorAll('.bottom-nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (sectionId === 'recipesSection') {
        document.getElementById('bottomHome').classList.add('active');
    } else if (sectionId === 'calendarSection') {
        document.getElementById('bottomCalendar').classList.add('active');
    } else if (sectionId === 'cartSection') {
        document.getElementById('bottomCart').classList.add('active');
    }
}

// Update season highlight in navigation
function updateSeasonHighlight(season) {
    document.querySelectorAll('.season-highlight').forEach(el => {
        el.classList.remove('active');
    });
    document.getElementById(season).classList.add('active');
}

// Go back function
function goBack() {
    const prevPage = navigationHistory.pop();
    if (prevPage) {
        showPage(prevPage);
    }
}

// Load meal options based on season and meal time
function loadMealOptions() {
    const season = document.getElementById("season").value;
    const mealTime = document.getElementById("mealTime").value;
    const mealOptions = document.getElementById("mealOptions");
    
    mealOptions.innerHTML = "<div class='text-center py-4'><i class='fas fa-spinner fa-spin text-blue-500 mr-2'></i>Loading seasonal meals...</div>";
    
    document.getElementById("nextBtn2").classList.add('hidden');
    document.getElementById("seasonalInfo").classList.add('hidden');

    setTimeout(() => {
        if (!mealData[season] || !mealData[season][mealTime]) {
            mealOptions.innerHTML = "<p class='text-red-600 text-center py-4'>No meals available for this season/time.</p>";
            return;
        }

        // Show seasonal info
        const seasonalInfo = document.getElementById("seasonalInfo");
        seasonalInfo.classList.remove('hidden');
        document.getElementById("seasonalInfoText").textContent = `Seasonal ${season} ${mealTime} options:`;

        const meals = mealData[season][mealTime];
        mealOptions.innerHTML = meals.map((meal, index) => `
            <label class="block p-3 border rounded-md bg-white cursor-pointer mb-2 meal-option hover:border-blue-300 transition-all">
                <div class="flex items-center">
                    <input type="radio" name="mealChoice" value='${JSON.stringify(meal.name)}' 
                        data-steps='${JSON.stringify(meal.steps)}'
                        data-ingredients='${JSON.stringify(meal.ingredients)}'
                        data-nutrition='${JSON.stringify(meal.nutrition)}'
                        class="mr-3 h-4 w-4">
                    <div>
                        <b class="text-lg">${meal.name}</b>
                        <div class="flex flex-wrap mt-1">
                            ${meal.nutrition.benefits.slice(0, 2).map(benefit => `
                                <span class="text-xs bg-gray-100 rounded-full px-2 py-1 mr-1 mb-1">
                                    ${benefit}
                                </span>
                            `).join("")}
                        </div>
                    </div>
                </div>
            </label>
        `).join("");

        document.getElementById("nextBtn2").classList.remove('hidden');
    }, 800);
}

// Show recipe description
function showDescription() {
    const descriptionDiv = document.getElementById("description");
    descriptionDiv.innerHTML = `
        <h3 class="font-bold text-xl mb-3 text-gray-800">${selectedMeal.name}</h3>
        <h4 class="font-semibold mb-2 text-gray-700">
            <i class="fas fa-list-ol text-blue-500 mr-2"></i>
            Preparation Steps:
        </h4>
        <ol class="list-decimal list-inside space-y-2">
            ${selectedMeal.steps.map(step => `<li>${step}</li>`).join("")}
        </ol>
    `;
}

// Show nutrition facts
function showNutritionFacts() {
    const nutrition = selectedMeal.nutrition;
    document.getElementById("calories").textContent = nutrition.calories;
    document.getElementById("protein").textContent = nutrition.protein;
    document.getElementById("carbs").textContent = nutrition.carbs;
    document.getElementById("fiber").textContent = nutrition.fiber;
    document.getElementById("fat").textContent = nutrition.fat;
    document.getElementById("vitamins").textContent = nutrition.vitamins;
    
    const benefitsList = document.getElementById("benefitsList");
    benefitsList.innerHTML = nutrition.benefits.map(benefit => 
        `<li>${benefit}</li>`
    ).join("");
}

// Show ingredients list
function showIngredients() {
    const ingredientsList = document.getElementById("ingredientsList");
    const season = document.getElementById("season").value;
    
    // Show seasonal produce tip
    const seasonalTip = document.getElementById("seasonalProduceTip");
    seasonalTip.classList.remove("hidden");
    
    ingredientsList.innerHTML = selectedMeal.ingredients.map((ingredient, index) => {
        // Mark some ingredients as seasonal (random for demo)
        const isSeasonal = Math.random() > 0.5;
        return `
            <div class="checkbox-container">
                <input type="checkbox" id="ingredient-${index}" class="checkbox-input" 
                    data-index="${index}" data-name="${ingredient}" 
                    data-price="${Math.floor(Math.random() * 50) + 20}">
                <label for="ingredient-${index}" class="flex-1">
                    ${ingredient}
                    ${isSeasonal ? ' <span class="text-green-600">★</span>' : ''}
                </label>
            </div>
        `;
    }).join("");
    
    // Add event listeners to checkboxes
    document.querySelectorAll('.checkbox-input').forEach(checkbox => {
        checkbox.addEventListener('change', updateSelectedCount);
    });
}

// Update selected ingredients count
function updateSelectedCount() {
    const checkboxes = document.querySelectorAll('.checkbox-input:checked');
    const selectedCount = document.getElementById("selectedCount");
    const orderCount = document.getElementById("orderCount");
    const orderBtn = document.getElementById("orderIngredientsBtn");
    
    selectedCount.textContent = checkboxes.length;
    orderCount.textContent = checkboxes.length;
    
    if (checkboxes.length > 0) {
        selectedCount.classList.remove("hidden");
        orderBtn.disabled = false;
    } else {
        selectedCount.classList.add("hidden");
        orderBtn.disabled = true;
    }
}

// Show order confirmation
function showOrderConfirmation() {
    const checkboxes = document.querySelectorAll('.checkbox-input:checked');
    const selectedIngredients = Array.from(checkboxes).map(checkbox => {
        return {
            name: checkbox.dataset.name,
            price: parseInt(checkbox.dataset.price)
        };
    });
    
    const totalItems = selectedIngredients.length;
    const totalCost = selectedIngredients.reduce((sum, item) => sum + item.price, 0);
    
    document.getElementById("orderMealName").textContent = selectedMeal.name;
    document.getElementById("totalItems").textContent = totalItems;
    document.getElementById("estimatedCost").textContent = totalCost;
    
    const ingredientsList = document.getElementById("orderIngredientsSelected");
    ingredientsList.innerHTML = selectedIngredients.map(item => 
        `<li>${item.name} (₹${item.price})</li>`
    ).join("");
}

// Confirm order
function confirmOrder() {
    const address = document.getElementById("deliveryAddress").value;
    if (!address.trim()) {
        alert("Please enter your delivery address");
        return;
    }
    
    // Add items to cart
    const checkboxes = document.querySelectorAll('.checkbox-input:checked');
    Array.from(checkboxes).forEach(checkbox => {
        cartItems.push({
            name: checkbox.dataset.name,
            price: parseInt(checkbox.dataset.price),
            meal: selectedMeal.name
        });
    });
    
    updateCartBadge();
    
    const orderSummary = document.getElementById("orderSummary");
    orderSummary.innerHTML = `
        <p><b>Meal:</b> ${selectedMeal.name}</p>
        <p><b>Delivery Address:</b> ${address}</p>
        <p><b>Estimated Delivery:</b> 30-45 minutes</p>
    `;
    
    showPage('successPage');
}

// Load produce calendar
function loadProduceCalendar() {
    const calendarDiv = document.getElementById("seasonalCalendar");
    calendarDiv.innerHTML = "";
    
    const months = produceCalendar[currentCalendarSeason];
    for (const month in months) {
        const monthDiv = document.createElement("div");
        monthDiv.className = "season-month";
        monthDiv.innerHTML = `
            <h4 class="font-semibold">${month}</h4>
            <ul class="mt-2 text-sm">
                ${months[month].map(item => `<li>• ${item}</li>`).join("")}
            </ul>
        `;
        calendarDiv.appendChild(monthDiv);
    }
    
    // Load produce details for the first item
    loadProduceDetails(produceCalendar[currentCalendarSeason][Object.keys(produceCalendar[currentCalendarSeason])[0]][0]);
}

// Load daily calendar view
function loadDailyCalendar() {
    const today = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Set current date and season
    document.getElementById("todayDate").textContent = `${today.getDate()} ${months[today.getMonth()]}`;
    
    // Determine current season based on month
    let currentSeason = "";
    if ([2, 3, 4].includes(today.getMonth())) { // March-May
        currentSeason = "Spring";
    } else if ([5, 6, 7].includes(today.getMonth())) { // June-August
        currentSeason = "Summer";
    } else if ([8, 9, 10].includes(today.getMonth())) { // September-November
        currentSeason = "Monsoon";
    } else { // December-February
        currentSeason = "Winter";
    }
    document.getElementById("currentSeason").textContent = currentSeason;
    
    // Create daily calendar
    const calendarDiv = document.getElementById("dailyCalendar");
    calendarDiv.innerHTML = "";
    
    // Get current day of week (0-6)
    const currentDay = today.getDay();
    
    // Create days for current week
    for (let i = 0; i < 7; i++) {
        const day = new Date(today);
        day.setDate(today.getDate() - currentDay + i);
        
        const dayDiv = document.createElement("div");
        dayDiv.className = `calendar-day ${i === currentDay ? 'today' : ''}`;
        
        // Mark some days as in-season (random for demo)
        if (Math.random() > 0.7) {
            dayDiv.classList.add('in-season');
        }
        
        dayDiv.innerHTML = `
            <div class="calendar-day-name">${days[day.getDay()]}</div>
            <div class="calendar-day-number">${day.getDate()}</div>
        `;
        
        // Highlight today
        if (i === currentDay) {
            dayDiv.addEventListener('click', () => {
                showTodaysProduce(currentSeason);
            });
        }
        
        calendarDiv.appendChild(dayDiv);
    }
    
    // Show today's produce by default
    showTodaysProduce(currentSeason);
}

// Show today's seasonal produce
function showTodaysProduce(season) {
    const produceListDiv = document.getElementById("todaysProduceList");
    const month = new Date().toLocaleString('default', { month: 'long' });
    
    if (!produceCalendar[season] || !produceCalendar[season][month]) {
        produceListDiv.innerHTML = "<p>No seasonal produce data available for today.</p>";
        return;
    }
    
    const todaysProduce = produceCalendar[season][month];
    produceListDiv.innerHTML = todaysProduce.map(item => `
        <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            ${item}
        </span>
    `).join("");
}

// Load produce details
function loadProduceDetails(produceName) {
    const produceListDiv = document.getElementById("produceList");
    
    if (!produceDetails[produceName]) {
        produceListDiv.innerHTML = "<p>No details available for this produce.</p>";
        return;
    }
    
    const details = produceDetails[produceName];
    produceListDiv.innerHTML = `
        <div class="bg-white p-3 rounded-lg shadow">
            <h4 class="font-bold mb-2">Nutritional Value</h4>
            <p>${details.nutrition}</p>
        </div>
        <div class="bg-white p-3 rounded-lg shadow">
            <h4 class="font-bold mb-2">Storage Tips</h4>
            <p>${details.storage}</p>
        </div>
        <div class="bg-white p-3 rounded-lg shadow">
            <h4 class="font-bold mb-2">Selection Tips</h4>
            <p>${details.tips}</p>
        </div>
        <div class="bg-white p-3 rounded-lg shadow">
            <h4 class="font-bold mb-2">Seasonal Recipes</h4>
            <p>Try this ingredient in seasonal dishes for best flavor and nutrition.</p>
        </div>
    `;
}

// Load cart items
function loadCartItems() {
    const cartItemsDiv = document.getElementById("cartItems");
    const cartSummaryDiv = document.getElementById("cartSummary");
    const checkoutBtn = document.getElementById("checkoutBtn");
    
    if (cartItems.length === 0) {
        cartItemsDiv.innerHTML = "<p class='text-center text-gray-500 py-8'>Your cart is empty</p>";
        cartSummaryDiv.classList.add('hidden');
        checkoutBtn.classList.add('hidden');
        return;
    }
    
    // Group items by meal
    const itemsByMeal = {};
    cartItems.forEach(item => {
        if (!itemsByMeal[item.meal]) {
            itemsByMeal[item.meal] = [];
        }
        itemsByMeal[item.meal].push(item);
    });
    
    cartItemsDiv.innerHTML = Object.entries(itemsByMeal).map(([meal, items]) => `
        <div class="mb-4 border-b pb-4">
            <h3 class="font-semibold text-lg mb-2">${meal}</h3>
            <ul class="space-y-2">
                ${items.map(item => `
                    <li class="flex justify-between">
                        <span>${item.name}</span>
                        <span>₹${item.price}</span>
                    </li>
                `).join("")}
            </ul>
        </div>
    `).join("");
    
    // Calculate totals
    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    const delivery = subtotal > 200 ? 0 : 40;
    const total = subtotal + delivery;
    
    document.getElementById("cartSubtotal").textContent = `₹${subtotal}`;
    document.getElementById("cartDelivery").textContent = `₹${delivery}`;
    document.getElementById("cartTotal").textContent = `₹${total}`;
    
    cartSummaryDiv.classList.remove('hidden');
    checkoutBtn.classList.remove('hidden');
}

// Update cart badge
function updateCartBadge() {
    const badge = document.getElementById("cartBadge");
    if (cartItems.length > 0) {
        badge.textContent = cartItems.length;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Navigation buttons
    document.getElementById("navRecipes").addEventListener('click', function() {
        showSection('recipesSection');
        document.querySelectorAll('.season-highlight').forEach(el => {
            el.classList.remove('active');
        });
        this.classList.add('active');
    });
    document.getElementById("navCalendar").addEventListener('click', function() {
        showSection('calendarSection');
        document.querySelectorAll('.season-highlight').forEach(el => {
            el.classList.remove('active');
        });
        this.classList.add('active');
    });
    document.getElementById("navBenefits").addEventListener('click', function() {
        showSection('benefitsSection');
        document.querySelectorAll('.season-highlight').forEach(el => {
            el.classList.remove('active');
        });
        this.classList.add('active');
    });
    
    // Bottom navigation buttons
    document.getElementById("bottomHome").addEventListener('click', function(e) {
        e.preventDefault();
        showSection('recipesSection');
    });
    document.getElementById("bottomCalendar").addEventListener('click', function(e) {
        e.preventDefault();
        showSection('calendarSection');
    });
    document.getElementById("bottomCart").addEventListener('click', function(e) {
        e.preventDefault();
        showSection('cartSection');
    });
    
    // Recipe flow buttons
    document.getElementById("nextBtn1").addEventListener('click', function() {
        loadMealOptions(); // Load meals first
        showPage('mealPage'); // Then show the page
    });
    
    document.getElementById("nextBtn2").addEventListener('click', function() {
        const selected = document.querySelector('input[name="mealChoice"]:checked');
        if (selected) {
            selectedMeal = {
                name: JSON.parse(selected.value),
                steps: JSON.parse(selected.dataset.steps),
                ingredients: JSON.parse(selected.dataset.ingredients),
                nutrition: JSON.parse(selected.dataset.nutrition)
            };
            showPage('descPage');
        } else {
            alert("Please select a meal option");
        }
    });
    // Update bottom nav active state
function updateBottomNavActive(sectionId) {
document.querySelectorAll('.bottom-nav-btn').forEach(btn => {
btn.classList.remove('active');
});

if (sectionId === 'recipesSection') {
document.getElementById('bottomHome').classList.add('active');
// Also update main nav to show Recipes as active
document.querySelectorAll('.season-highlight').forEach(el => {
    el.classList.remove('active');
});
document.getElementById('navRecipes').classList.add('active');
} else if (sectionId === 'calendarSection') {
document.getElementById('bottomCalendar').classList.add('active');
// Also update main nav to show Calendar as active
document.querySelectorAll('.season-highlight').forEach(el => {
    el.classList.remove('active');
});
document.getElementById('navCalendar').classList.add('active');
} else if (sectionId === 'cartSection') {
document.getElementById('bottomCart').classList.add('active');
}
}



    
    // Back buttons
    document.getElementById("backBtn1").addEventListener('click', goBack);
    document.getElementById("backBtn2").addEventListener('click', goBack);
    document.getElementById("backBtn3").addEventListener('click', goBack);
    document.getElementById("backBtn4").addEventListener('click', goBack);
    document.getElementById("backBtn5").addEventListener('click', goBack);
    
    // Nutrition/Ingredients buttons
    document.getElementById("showNutritionBtn").addEventListener('click', () => showPage('nutritionPage'));
    document.getElementById("showIngredientsBtn").addEventListener('click', () => showPage('ingredientsPage'));
    document.getElementById("toIngredientsBtn").addEventListener('click', () => showPage('ingredientsPage'));
    
    // Order buttons
    document.getElementById("orderIngredientsBtn").addEventListener('click', () => showPage('orderPage'));
    document.getElementById("confirmOrderBtn").addEventListener('click', confirmOrder);
    document.getElementById("homeBtn").addEventListener('click', () => {
        showSection('recipesSection');
        showPage('formPage');
    });
    
    // Checkout button
    document.getElementById("checkoutBtn").addEventListener('click', function() {
        alert("Checkout functionality would be implemented here!");
    });
    
    // Calendar season buttons
    document.getElementById("showSpring").addEventListener('click', function() {
        currentCalendarSeason = 'Spring';
        loadProduceCalendar();
        document.querySelectorAll('.season-highlight').forEach(el => {
            el.classList.remove('active');
        });
        this.classList.add('active');
    });
    document.getElementById("showSummer").addEventListener('click', function() {
        currentCalendarSeason = 'Summer';
        loadProduceCalendar();
        document.querySelectorAll('.season-highlight').forEach(el => {
            el.classList.remove('active');
        });
        this.classList.add('active');
    });
    document.getElementById("showMonsoon").addEventListener('click', function() {
        currentCalendarSeason = 'Monsoon';
        loadProduceCalendar();
        document.querySelectorAll('.season-highlight').forEach(el => {
            el.classList.remove('active');
        });
        this.classList.add('active');
    });
    document.getElementById("showAutumn").addEventListener('click', function() {
        currentCalendarSeason = 'Autumn';
        loadProduceCalendar();
        document.querySelectorAll('.season-highlight').forEach(el => {
            el.classList.remove('active');
        });
        this.classList.add('active');
    });
    document.getElementById("showWinter").addEventListener('click', function() {
        currentCalendarSeason = 'Winter';
        loadProduceCalendar();
        document.querySelectorAll('.season-highlight').forEach(el => {
            el.classList.remove('active');
        });
        this.classList.add('active');
    });
    
    // Initialize
    showSection('recipesSection');
    showPage('formPage');
    document.querySelectorAll('.season-highlight')[0].classList.add('active');
    document.getElementById("showSpring").classList.add('active');
    updateCartBadge();
});