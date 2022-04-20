import React, { useEffect } from 'react'
import { Elements, PaymentElement, useStripe } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { stringify } from 'querystring'

type Props = {}

const stripeKey: string = process.env.REACT_APP_STRIPE_API || ''

const stripePromise = loadStripe(stripeKey)

const Payment = (props: Props) => {
  const clientSecret = async () => {
    const info = {
      currency: 'usd',
      amount: 1000,
    }

    try {
      const response = await fetch(
        'http://localhost:8080/api/create-payment-intent',
        {
          method: 'POST',
          body: JSON.stringify(info),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${stripeKey}`,
          },
        }
      )

      const stuff = await response.json()

      console.log(stuff)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    clientSecret()
  }, [])

  const options = {
    clientSecret: 'id24_secret_mySecret',
  }
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  )
}

const CheckoutForm = () => {
  return (
    <form>
      <PaymentElement />
      <button>submit</button>
    </form>
  )
}

export default Payment
