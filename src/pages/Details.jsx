import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import PizzasContext from "../PizzasContext";
import "../css/Details.css";
import { useEffect } from "react";

const Details = () => {
  const [pizza, setPizza] = useState(null);
  const { pizzas, addToCart } = useContext(PizzasContext);
  const { id } = useParams();

  useEffect(() => {
    const getPizza = async () => {
      const result = pizzas.filter((obj) => obj.id === id);
      setPizza(result);
    };
    getPizza();
  }, [pizzas, id]);

  return (
    <>
      {pizza ? (
        <div className="card-pizza mb-3">
          <div className="row-pizza no-gutters">
            <div key={pizza[0].id} className="pizza-nombre">
              <div className="card-imagen col-md-4">
                <img className="card-img" src={pizza[0].img} alt={pizza.name} />
              </div>
              <div className="card-bodypizza col-md-8 ">
                <h4 className="card-titlepizza text-capitalize">
                  Pizza {pizza[0].name}
                </h4>
                <hr />
                <p className="text-align-center">{pizza[0].desc}</p>
                <hr />

                <p className="card-text">
                  <b>Ingredients:</b>
                </p>

                <ul variant="flush">
                  {pizza[0].ingredients.map((ingredient, i) => (
                    <li className="border-0 text-capitalize" key={i}>
                      🍕
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-footerpizza text-muted py-3">
                <hr />
                <h2 className="text-pizza">Price $ {pizza[0].price}</h2>
                <hr />
                <div className="card-btnpizza">
                  <button
                    className="btn-pizza btn-success"
                    variant="dark"
                    onClick={() => addToCart(pizza[0])}
                  >
                    Add to Cart ✔
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Details;
