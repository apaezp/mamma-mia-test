import { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PizzasContext from "../PizzasContext";
import "../css/Card.css";

const Card = () => {
  const { pizzas, addToCart } = useContext(PizzasContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="row">
        {pizzas?.map((pizza) => (
          <div key={pizza.id} className="col-3 mt-3">
            <div className="card">
              <img className="card-img-top" src={pizza.img} alt={pizza.name} />
              <div className="card-body">
                <h4 className="card-title text-capitalize text-align-center">
                  Pizza {pizza.name}
                </h4>
                <hr />
                <p className="card-text">
                  <b>Ingredients:</b>
                </p>

                <ListGroup variant="flush">
                  {pizza.ingredients.map((ingredient, i) => (
                    <ListGroup.Item
                      className="border-0 text-capitalize"
                      key={i}
                    >
                      🍕
                      {ingredient}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
              <div className="card-footer text-muted py-3">
                <h2 className="text-center pt-2 pb-3">$ {pizza.price}</h2>
                <div className="card-btn">
                  <button
                    className="btn btn-success"
                    variant="dark"
                    onClick={() => navigate(`/pizzas/${pizza.id}`)}
                  >
                    See More... 👀
                  </button>
                  <button
                    className="btn btn-warning"
                    variant="danger"
                    onClick={() => addToCart(pizza)}
                  >
                    Add 🛒
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
