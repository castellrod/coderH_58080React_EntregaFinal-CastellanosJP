import Item from "../Item";
import "./styles.css";

function Items({ productos }) {
  return (
    <div className="items-container">
        {productos.map((data) => (
            <Item data={data} />
        ))}
    </div>

  );
}

export default Items;