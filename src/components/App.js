import React, { useState } from 'react';

const App = () => {
  // 1. Data Setup: Ye wo list hai jo video mein dikh rahi thi. 
  // Ye fix data hai, isliye isko state (useState) mein daalne ki zarurat nahi.
  const items = [
    { name: 'Apple', price: 20 },
    { name: 'Banana', price: 10 },
    { name: 'Neutella', price: 30 },
    { name: 'Razor', price: 5 },
    { name: 'CornFlakes', price: 15 },
    { name: 'Sound Bar', price: 50 },
    { name: 'Iphone', price: 80 }
  ];

  // 2. Hook ka use: Budget ko yaad rakhne ke liye 'useState' banaya.
  // Video ke shuru mein input box mein '30' likha tha, isliye default value 30 rakhi.
  const [budget, setBudget] = useState(30);

  // 3. User jab input mein type karega toh kya hoga?
  const handleBudgetChange = (event) => {
    // Input box hamesha text return karta hai, isliye Number() se usko number banaya
    setBudget(Number(event.target.value)); 
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'serif', fontSize: '18px' }}>
      
      {/* 4. Input Area */}
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

      {/* 5. Table Area (Conditional Styling yahan hogi) */}
      <table style={{ width: '200px' }}>
        <tbody>
          {/* Array ko map karke har ek item ko table row (tr) mein dikha rahe hain */}
          {items.map((item, index) => {
            
            // Asli jaadu yahan hai! Hum logic check kar rahe hain:
            const isAffordable = item.price <= budget;
            
            return (
              <tr 
                key={index} 
                // Agar affordable hai toh green, warna red
                style={{ color: isAffordable ? 'green' : 'red' }}
              >
                <td style={{ padding: '2px 0' }}>{item.name}</td>
                <td style={{ textAlign: 'right', padding: '2px 0' }}>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  );
};

export default App;