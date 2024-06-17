import { Box, Button, Modal, Typography } from "@mui/material";
import { FormEvent } from "react";
import { ModalProps } from "../Types";
import { deleteProduct } from "../services/productService";

function DeleteProductModal({ isOpen, onClose, productId }: ModalProps) {
  const handleSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log("DELETED");
    deleteProduct(String(productId));
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        width={600}
        height={180}
        p={3}
        bgcolor="white"
        borderRadius={5}
        sx={{
          display: "flex",
          gap: "15px",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" color="primary" textAlign="center">
          Delete Product
        </Typography>
        <Typography variant="body1">
          Are you sure you want to delete this product?
        </Typography>
        <Box
          mt={"auto"}
          sx={{ display: "flex", gap: "15px", flexDirection: "row-reverse" }}
        >
          <Button size="large" variant="contained" type="submit">
            Delete
          </Button>
          <Button size="large" variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default DeleteProductModal;
