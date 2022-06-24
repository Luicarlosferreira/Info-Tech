import { useParams } from "react-router";
import { Container } from "./styles";
import { useFetch } from "../../hooks/useFetch";
import { FaOpencart, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Product = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/product/" + id;

  const { data: item, loading, error } = useFetch(url);

  return (
    <Container>
      <div className="categoryContent">
        {item && (
          <>
            <Link to="/products">
              <p>Products</p>
            </Link>
            <FaAngleRight />
            <p>{item.category}</p>
            <FaAngleRight />
          </>
        )}
      </div>
      <div id="productsCard" className="card">
        {loading && <p>Carregando...</p>}
        {error && <p>{error}</p>}

        {item && (
          <div className="detailsContent">
            <div className="cardImage">
              <img src={item.image} />
            </div>

            <div className="detailsItem">
              <h1>{item.name}</h1>
              <p>{item.title}</p>

              <h2> $ {item.price}</h2>
              <div className="buyOption">
                <button type="submit">
                  <FaOpencart /> Add to cart
                </button>
                <button type="submit"> Buy</button>
              </div>
              <div className="moreInformation">
                <p>More information</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};
