import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
 const [intern, setIntern] = useState(null);
 useEffect(() => {
 fetch('http://localhost:5000/api/intern')
 .then(res => res.json())
 .then(data => setIntern(data));
 }, []);
 return (
 <div className="container">
 <h1>Intern Dashboard</h1>
 {intern ? (
 <div>
 <p><strong>Name:</strong> {intern.name}</p>
 <p><strong>Referral Code:</strong> {intern.referralCode}</p>
 <p><strong>Total Donations Raised:</strong> Rs.{intern.donationsRaised}</p>
 <h3>Rewards/Unlockables</h3>
 <ul>
 {intern.rewards.map((reward, idx) => (
 <li key={idx}>{reward}</li>
 ))}
 </ul>
 <h3>Leaderboard</h3>
 <ol>
 {intern.leaderboard.map((entry, idx) => (
 <li key={idx}>{entry.name} - Rs.{entry.donations}</li>
 ))}
 </ol>
 </div>
 ) : (
 <p>Loading data...</p>
 )}
 </div>
 );
}
export default App;