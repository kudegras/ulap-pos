import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { ModalProps } from "../Types";
import { addProduct } from "../services/productService";

const initialFormData = {
  name: "",
  category: "",
  options: "",
  price: "",
  cost: "",
  stock: "",
  imageURL: "",
};

function AddProductModal({ isOpen, onClose }: ModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    options: "",
    price: "",
    cost: "",
    stock: "",
    imageURL: "",
  });

  // if (!isOpen) {
  //   setFormData(initialFormData);
  // }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    addProduct(formData);
    onClose();
    setFormData(initialFormData);
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
        width={500}
        height={700}
        p={3}
        bgcolor="white"
        borderRadius={5}
        sx={{
          display: "flex",
          gap: "15px",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" color="primary" textAlign="center">
          Add Product
        </Typography>
        <TextField
          required
          id="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          required
          id="category"
          label="Category"
          value={formData.category}
          onChange={handleChange}
        />
        <TextField
          id="options"
          label="Options"
          multiline
          rows={3}
          helperText="Seperate by [enter]"
          value={formData.options}
          onChange={handleChange}
        />
        <FormControl>
          <InputLabel htmlFor="price" required>
            Price
          </InputLabel>
          <OutlinedInput
            id="price"
            startAdornment={<InputAdornment position="start">₱</InputAdornment>}
            label="Price"
            required
            type="number"
            value={formData.price}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="cost" required>
            Cost
          </InputLabel>
          <OutlinedInput
            id="cost"
            startAdornment={<InputAdornment position="start">₱</InputAdornment>}
            label="Cost"
            required
            type="number"
            value={formData.cost}
            onChange={handleChange}
          />
        </FormControl>
        <TextField
          required
          id="stock"
          label="Stock"
          type="number"
          value={formData.stock}
          onChange={handleChange}
        />
        <TextField
          id="imageURL"
          label="Image URL"
          type="url"
          value={formData.imageURL}
          onChange={handleChange}
        />
        <Box
          mt={"auto"}
          sx={{ display: "flex", gap: "15px", flexDirection: "row-reverse" }}
        >
          <Button size="large" variant="contained" type="submit">
            Submit
          </Button>
          <Button size="large" variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default AddProductModal;
