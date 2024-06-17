import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import EditProductModal from "./EditProductModal";
import DeleteProductModal from "./DeleteProductModal";
import { ProductProps } from "../Types";

export default function Product({ product }: ProductProps) {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <Card sx={{ width: 345, margin: "10px" }}>
      <CardMedia
        component="img"
        alt={product.name}
        height="150"
        image={product.imageURL}
      />
      <CardContent
        sx={{
          height: 170,
          display: "flex",
          flexDirection: "column",
          gap: 0.7,
          p: 2,
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Category: </strong>
          {product.category}
        </Typography>
        {product.options && (
          <Typography variant="body2" color="text.secondary">
            <strong>Options: </strong>
            {product.options.join(", ")}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary">
          <strong>Price: </strong>₱
          {Array.isArray(product.price)
            ? product.price.join(", ")
            : product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Cost: </strong>₱
          {Array.isArray(product.cost)
            ? product.cost.join(", ")
            : product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Stock: </strong>
          {product.stock} pcs
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end", p: 2, gap: "5px" }}>
        <Button
          size="small"
          variant="contained"
          onClick={() => setEditModalOpen(true)}
        >
          Edit
        </Button>
        <EditProductModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          product={product}
        />
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => setDeleteModalOpen(true)}
        >
          Delete
        </Button>
        <DeleteProductModal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          productId={product.id}
        />
      </CardActions>
    </Card>
  );
}
