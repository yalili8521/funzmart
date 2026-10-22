# Funzmart

A toy store front end built in React during a full-stack bootcamp (fall 2025). No backend: the
catalog is a local data file, and the cart and favorites persist in the browser.

## What it does

- Home page with featured products, an "about the shop" section and a subscribe block
- Catalog page with category filter (driven by the URL query string), price range, text search
  and sort by price or name
- Product page per item (`/product/:id`) with size and color options
- Cart modal: add, remove, change quantity, running item count and total
- Favorites list
- A simple admin table (`/admin`) that pages through the catalog, five items per page

## How it is built

- React 19 with React Router 7, created with Create React App (react-scripts 5)
- State through the Context API: `CartContext` and `FavoriteContext`, both saved to
  `localStorage` so a refresh keeps the cart
- Plain CSS, one file per component
- Product data in `src/data/FunzyMartList.js` (16 items, images hosted externally)

## Run it

```bash
npm install
npm start
```

Opens at http://localhost:3000.
