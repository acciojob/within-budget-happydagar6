import React, { useState } from 'react';

const App = () => {
  const items = [
    { name: 'Apple', price: 20 },
    { name: 'Banana', price: 10 },
    { name: 'Neutella', price: 30 },
    { name: 'Razor', price: 5 },
    { name: 'CornFlakes', price: 15 },
    { name: 'Sound Bar', price: 50 },
    { name: 'Iphone', price: 80 }
  ];

  const [budget, setBudget] = useState(30);

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'serif', fontSize: '18px' }}>
      
      <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
        Enter your budget to check available items:
      </div>
      
      <input 
        type="number" 
        value={budget} 
        onChange={handleBudgetChange} 
        style={{ padding: '5px', width: '150px', marginBottom: '20px' }}
      />

      <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>
        Items you can buy are in Green color
      </div>

      <table style={{ width: '250px', textAlign: 'left' }}>
        
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        
        <tbody>
          {items.map((item, index) => {
            const isAffordable = item.price <= Number(budget);
            
            return (
              <tr 
                key={index} 
                style={{ color: isAffordable ? 'green' : 'red' }}
              >
                <td style={{ padding: '2px 0' }}>{item.name}</td>
                <td style={{ padding: '2px 0' }}>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  );
};

export default App;