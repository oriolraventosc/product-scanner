/* eslint-disable react/style-prop-object */
import React from "react";
import ButtonComponent from "./components/Button/Button";
import ProductCard from "./components/ProductCard/ProductCard";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
      <ButtonComponent
        text="Load more"
        // eslint-disable-next-line react/style-prop-object
        style={"button load-more"}
      />
      <ButtonComponent
        text="Log in"
        // eslint-disable-next-line react/style-prop-object
        style={"button login-logout"}
      />
      <ButtonComponent
        text="Add to favourites"
        // eslint-disable-next-line react/style-prop-object
        style={"button add"}
      />
      <ProductCard
        image="https://newluxbrand.com/wp-content/uploads/2022/01/tortilla-de-patatas-Newlux-optimized.jpg"
        name="Tortilla de patatas sin cebolla Classic' sin gluten sin lactosa"
      />
    </div>
  );
}

export default App;
