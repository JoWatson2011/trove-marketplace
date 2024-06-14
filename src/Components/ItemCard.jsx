import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
function ItemCard({ item }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Link to={`/items/${item.item_id}`}>
        <Card.Img variant="top" src={item.img_url} />
      </Link>
      <Card.Body>
        <Card.Title>{item.item_name}</Card.Title>
        <Card.Text>{`£${item.price.toFixed(2) / 100}`}</Card.Text>
        <Button variant="primary">
          <ShoppingBasketIcon />
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ItemCard;
