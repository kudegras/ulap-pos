import { Box, Fab, Tooltip } from "@mui/material";
import { ProductType } from "../Types";
import Product from "../components/Product";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import AddProductModal from "../components/AddProductModal";
import useFetch from "../hooks/useFetch";

const sampleData: ProductType[] = [
  {
    id: "1",
    name: "Fries",
    category: "Food",
    options: ["Small", "Medium", "Large"],
    price: [50, 70, 100],
    cost: [30, 50, 80],
    stock: 100,
    imageURL:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    name: "Burger",
    category: "Food",
    price: 80,
    cost: 60,
    stock: 100,
    imageURL:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    name: "Coke",
    category: "Drinks",
    price: 50,
    cost: 30,
    stock: 70,
    imageURL:
      "https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function ProductPage() {
  const [addModalOpen, setAddModalOpen] = useState(false);

  const { data } = useFetch("product");

  console.log("testing hook");
  console.log(data);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {data.map((product, index) => (
        <Product key={index} product={product} />
      ))}

      <Tooltip
        onClick={() => setAddModalOpen(true)}
        title="Add"
        color="primary"
        sx={{
          position: "fixed",
          bottom: 20,
        }}
      >
        <Fab>
          <AddIcon />
        </Fab>
      </Tooltip>

      <AddProductModal
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
      />
    </Box>
  );
}

export default ProductPage;
