## Final Sprint - May-August

## Desc: GARY BLUES CHICKEN RESTARUANT

# Name: Steven Norris

# Date of Completion: 08-10-2023 / August 10th

# Description:

This is my attempt at porting a HTML-based site, Gary Blue's Chicken Restaruant, into the React Framework. The purpose is to improve site performance and user experience through Async programming techniques and a modern Ecommerce expierence.
The project is constructed of 9 "pages" featuring a combined 22 components written in jsx. Most, if not 90%, of the CSS is ported over from the previous project. Re-iterrations of previous styles have been modified and adapted to the current system of React and a slightly improved site design that is closer to what I envisioned when creating my primary HTML version of this site. It features many principles from our lectures, and some new practices that ive learned from outside research(such as barrelling to contain my mass of components and prevent disorganization). Be Aware, this site is not fully ready for connection to back-end code or deployement in any capacity. Due to the limited time of the project, some optional quality-of-life features have been left for another update. These include features such as, but not limited to:

1. No "True" checkout page. While the order menu displays the selected contents and total price, it does not proceed to the page where the user would enter their payment and delivery details and select method of delivery, with a final recap of their cart(and a prompt to include the current promotion if they'd so choose), but it was not required of this project so i did not go into those actions. I am aware of how to make forms, and have a good idea of howd id implement this in the future.

2. Minor unpolished features connected with CSS. As styling wasnt the prime objective of this project, it was something that is also left for future updates, that is required to make this feel truly modern, professional, and appealing to a broad case of users.

3. Lack of minor site components. I had intended to add social links, additional components for the purpose of making the site more visually appealing, etc. But due to time constraints and priorities being focused on other project goals, this was also left for a future update.

🌟 Key Features
Component-Based Architecture: Each part of the UI is encapsulated in its own component for maximum reusability.
Efficient Routing: The application uses react-router-dom for managing navigation and page transitions.
Barreling for Imports: Implemented for cleaner and more manageable code imports.

🛠️ Future Improvements
Enhanced Documentation: Adding more inline documentation and comments to further clarify the purpose and usage of specific components.
Testing Coverage: Expanding unit and integration tests to ensure robustness as the application grows, and that such process are implemented correctly.
Component Refinement: Considering the renaming of certain components to better reflect their role and improve clarity.

📄 License
This project is licensed under the MIT License. See the LICENSE file for more details.

📁 Project Structure Overview
The project is organized into several directories and atomized to their logical components, each serving a distinct purpose within the application. Below, I'll explain the rationale behind the structure and some of the design decisions made during development.

1. src/Components/Common/ Directory
   Purpose:
   The Common directory houses components that are widely used across various pages and sections of the application. This includes the CartContext and other utility components that provide essential functionality throughout the entire app.

Rationale:
Rather than separating the CartContext into its own directory, i've chosen to keep it within Common to maintain simplicity and quick accessibility. These Components are used across the entire site, or 99%, so it is worth keeping together rather over-dividing.

2. src/Components/NavBar/ Directory
   Purpose:
   The NavBar directory includes components that together form the main navigation bar, which is consistently present across all pages. The NavBar component is constructed by combining two smaller, reusable components(and their pieces) within this directory.

Rationale:
Grouping these related components into a single directory allows us to isolate the navigation logic and styling, ensuring that any changes to the navigation bar can be managed in one place. Originally Footer was designed to be, well, the footer. But after consideration, I decided to merge both header and footer into a more visually consistent "NavBar"

3. src/Components/Menus/ Directory
   Purpose:
   The Menus directory contains the various menu components, each representing a different category of products offered on the site. This could of easily been renamed "Pages" but i wanted to keep a more identifiable name that is more connected with their purpose.

Rationale:
Each menu component is housed within its own file, making it easy to manage and update specific product categories. This separation aligns with the "Single Responsibility Principle", ensuring each component does one thing well.

4. src/Components/ItemCarousel.jsx
   Purpose:
   The ItemCarousel component serves as the landing page of the application. It is named after its primary feature, a hero-section carousel showcasing various adverts for "deals" currently run.

Rationale:
Although ItemCarousel might seem specific, its name reflects its primary function. This design choice is intentional, as the landing page is built around this feature. However, looking back, renaming it to something like LandingPage.jsx or HeroCarousel.jsx in future updates might be closer in focuse with what I have intended.

5. src/Components/OrderPage.jsx
   Purpose:
   The OrderPage is the end of my app, where all product offerings are displayed similar to the "temptation section" in physical stores(the array of candy bars and gum before each cashier). It aggregates all menu items allows the user to review their shopping shopping cart, and the checkout process is initiated.

Rationale:
As the central "temptation section," OrderPage is designed to maximize user engagement at checkout. This component integrates various parts of the application, making it a critical piece of the user flow. The checkout had been improved to feature improved resolution photos of the menu item in the cart, to further entice the customer to stare at the product with a favourable disposition and provoke increased orders.

6. Barreling Strategy
   What is Barreling?
   Barreling refers to the practice of creating an index.js file within directories to re-export components, functions, or variables from a single point. This allows for cleaner and more concise import statements elsewhere in the codebase.

Why Barreling?
While this wasn't part of the initial curriculum, I implemented barreling in this project to enhance code organization and import efficiency. The components folder was getting over-cluttered with components and I had suspected there was a more tidy and efficient way of doing this. Plus, I non-chalantly added these .jsx files into the total count of my components, without them the true number would be 19 components.

THANK YOU FOR TAKING THE TIME TO READ THIS
