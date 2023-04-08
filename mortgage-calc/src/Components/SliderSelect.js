import React from 'react';
import SliderComponent from './Common/SliderComponent';

const SliderSelect = ({data, setData}) => { 
//destructuring our props being received in our app.js and cerating a bank loan limit 0f 10000 which is the maximum one can borrow from our bank.
    const bank_limit = 10000;
  return (
    <div>
        <SliderComponent 
        //Creating the home value slider component
            onChange={(e, value) => {
                setData({
                    ...data,
                    homeValue: value.toFixed(0),
                    downPayment: (0.2 * value).toFixed(0),
                    loanAmount: (0.8 * value).toFixed(0)
                })
            }}
            defaultValue={data.homeValue}
            min={1000}
            max={bank_limit}
            steps={100}
            unit="$"
            amount={data.homeValue}
            label="Home Value"
            value={data.homeValue}
        />

        <SliderComponent
        //Creating the down payment slider
            onChange={(e, value) => 
            setData({
                ...data,
                downPayment: value.toFixed(0),
                loanAmount: (data.homeValue - value).toFixed(0),
            })
            }
            defaultValue={data.downPayment}
            min={0}
            max={data.homeValue}
            steps={100}
            unit="$"
            amount={data.downPayment}
            label="Down Payment / Deposit"
            value={data.downPayment}
        />

        <SliderComponent
        //Creating the loan amount slider 
            onChange={(e, value) => 
                setData({
                    ...data,
                    loanAmount: value.toFixed(0),
                    downPayment: (data.homeValue - value).toFixed(0)
                })
            }
            defaultValue={data.loanAmount}
            min={0}
            max={data.homeValue}
            steps={100}
            unit="$"
            amount={data.loanAmount}
            label="Loan Amount"
            value={data.loanAmount}
        />

        <SliderComponent
        //Creating the interest rate slider
            onChange={(e, value) => 
                setData({
                    ...data,
                    interestRate: value,
                })
            }
            defaultValue={data.interestRate}
            min={2}
            max={18}
            steps={0.5}
            unit="%"
            amount={data.interestRate}
            label="Interest Rate"
            value={data.interestRate}
        />
    </div>
  )
}

export default SliderSelect
