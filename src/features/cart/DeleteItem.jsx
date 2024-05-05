import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deteleItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deteleItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
