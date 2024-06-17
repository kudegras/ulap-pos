export type ProductType = {
  id: string;
  name: string;
  category: string;
  options?: string[];
  price: number | number[];
  cost: number | number[];
  stock: number;
  imageURL: string;
  // stock: {
  //   quantity: number;
  //   metric: string;
  // };
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product?: ProductType;
  productId?: string;
};

export type ProductProps = {
  product: ProductType;
};
