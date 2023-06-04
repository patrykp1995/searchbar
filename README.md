# Your recruitment task

Write an application in NodeJS so that it uses the data in the data folder in .json format and makes it available to an
application written in React.

You can change everything in the server.js file and add more libraries for Node and React if you need them, you can add
styled components, css modules whatever you think is right from the frontend side.

Don't modify the scripts that run the code so that the dev can easily evaluate the work.

**Minimum Node version: 14.18.3**
### `npm run setup`

will make the application install the libraries you need to run the task for the server and frontend in react

### `npm run dev`

Will run the server and frontend and will automatically launch the page in the browser

Open [http://localhost:3005](http://localhost:3005) to view it in your browser.

The page will reload when you make changes.

### `npm run app`
Will only run the frontend application

### `npm run app`
Will only run the server in node

# Use case

Write a simple product search engine that will return results when a word is typed into the existing text box of our
navigation.

I would like the results to be displayed below the navigation and include only in-stock products.
I would also like it to return results after typing, for example: iphone
all those containing the phrase would be displayed.

**Important, it is always to display only a maximum of 4 products and in addition information on how many matching the
result we have. We do not want too many products displayed for the user.**

### Description of data output

```json
{
  "sku": "PQR678",
  "product_name": "Men's Jeans",
  "image_url": "https://picsum.photos/200/200",
  "category": "clothing",
  "similar_products": [
    "DEF456",
    "MNO345",
    "STU901"
  ],
  "available": true
}
```

- SKU: Product number in the system
- Product name
- Image url: Image mockup address
- Category: Product category
- Similar products: SKUs of similar products
- Available: information if the product is in stock

### Libraries added to the project

- https://mui.com/core/
- https://expressjs.com
- https://create-react-app.dev

### How will the code be checked?

Developer after typing **npm run setup** and then **npm run dev** should get a working application.