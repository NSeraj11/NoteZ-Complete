import React from "react";
import styled from "styled-components";

function Plans() {
  const notePlans = [
    {
      name: "NoteZ Free",
      price: "$0",
      features: [
        "1 user per account",
        "Unlimited notes",
        "4 categories to choose from",
        "Help Support"
      ]
    },
    {
      name: "NoteZ +",
      price: "$5",
      features: [
        "2-4 users per account",
        "Unlimited notes",
        "Folder system for notes",
        "Custom categories",
        "Custom templates to choose from",
        "Help Support"
      ]
    },
    {
      name: "NoteZ Infinity",
      price: "$10",
      features: [
        "Unlimited users per account",
        "Unlimited notes",
        "Folder system for notes",
        "Custom categories",
        "Full integration with MealZ",
        "Full integration with WorkoutZ",
        "Custom templates to choose from",
        "Help Support"
      ]
    }
  ];

  return (
    <Main>
      <div className="pricing-container">
        {notePlans.map((plan) => (
          <div className="pricing-card" key={plan.name}>
            <h2>{plan.name}</h2>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;

  .pricing-container {
    display:flex;
    justify-content:space-around;
    border:none;
    color: black;

    .pricing-card{
      border:1px solid black;
      padding:40px;
      border-radius:20px;

      h2{
        text-align:center;
        color:#008282;
      }
      p{
        text-align:center;
        font-size:1em;
        position:relative;
        left:120px;
        top:-60px;
      }

     
      ul{
        list-style-type:none;
        text-align:center;
        position:relative;
        top:10px;

        li{
          padding:10px;
          color:#a15000;
        }
      }
    }
  }
`;

export default Plans;
