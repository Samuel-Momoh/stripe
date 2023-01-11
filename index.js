const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const stripe = require('stripe')('sk_test_51M9RNdBlBeMRnW7CLsA7xYolR754Y3SuigAo3HSD0WCxJls1HpVp6ZtR1BN3mzffHBL8Og7AVLNP6chDEKd7c68g00ZNyKfoGR');

app.get('/', async(req, res) => {
    try {
      const paymentMethod = await stripe.paymentMethods.create({
        type: 'card',
        card: {
          number: '4242424242424242',
          exp_month: 8,
          exp_year: 2026,
          cvc: '743',
        },
      });
      res.json(paymentMethod)

    } catch (err) {
      return res.status(500).send(err);
    }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})