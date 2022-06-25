import { useSearchParams } from "react-router-dom";
import { Container } from "./styles";
import { serverQuery } from "../../server/server";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";

export const Search = () => {
  const [searchParams] = useSearchParams();

  const url = serverQuery + searchParams;

  const { data: item, loading, error } = useFetch(url);

  return (
    <Container id="productsCard" className="card">
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {item &&
        item.map((item) => (
          <div id="productsCard" className="card" key={item.id}>
            <div className="spanCard">{item.span}</div>
            <div className="cardImage">
              <img src={item.image} />
            </div>
            <div className="cardTitle">{item.title}</div>
            <div className="cardPrice">$ {item.price}</div>
            <Link to={`/products/${item.id}`}>
              <div className="cardButton">Ver detalhe</div>
            </Link>
          </div>
        ))}
    </Container>
  );
};
