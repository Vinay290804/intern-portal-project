const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
const internData = {
 name: 'Vinay Gangu',
 referralCode: 'vinay2025',
 donationsRaised: 12000,
 rewards: ['T-shirt', 'Certificate', 'Gift Voucher'],
 leaderboard: [
 { name: 'Aditi Sharma', donations: 15000 },
 { name: 'Vinay Gangu', donations: 12000 },
 { name: 'Ravi Kumar', donations: 8000 }
 ]
};
app.get('/api/intern', (req, res) => {
 res.json(internData);
});
app.listen(PORT, () => {
 console.log(Server running on http://localhost:${PORT});
});