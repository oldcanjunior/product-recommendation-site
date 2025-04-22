import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div>
      <h1>Product Recommendations</h1>
      <div style={{ margin: '20px' }}>
        <h3>Product 1</h3>
        <p>A great product for your needs.</p>
        <a href="https://your-affiliate-link.com/product1" target="_blank">
          Buy Now
        </a>
      </div>
      <div style={{ margin: '20px' }}>
        <h3>Product 2</h3>
        <p>Another amazing product you might like.</p>
        <a href="https://your-affiliate-link.com/product2" target="_blank">
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default App;
