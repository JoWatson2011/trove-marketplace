import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function ItemCard({ item }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.img_url} />
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
