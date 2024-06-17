import {
  doc,
  collection,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { ProductType } from "../Types";

// ***** ADD PRODUCT
export const addProduct = async (product) => {
  // add placeholder image when the image url is empty
  if (!product.imageURL) {
    product.imageURL =
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
  }

  const genId: string = doc(collection(db, "product")).id;
  let addedProduct: ProductType = { ...product, id: genId };
  let options: string[] = [];
  if (product.options) {
    options = product.options.split("\n");
    addedProduct = { ...addedProduct, options: options };
  }

  try {
    const docRef = doc(db, "product", genId);
    await setDoc(docRef, addedProduct);
    console.log("Added product with id: ", genId);
  } catch (error) {
    console.error("Error adding product: ", error);
  }
};

// ***** GET PRODUCT
export const getProduct = async (
  productID: string,
): Promise<ProductType | null> => {
  try {
    const docRef = doc(db, "product", productID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const prod: ProductType = {
        ...docSnap.data(),
      };
      console.log("Retrieved product: ", prod);
      return prod;
    } else {
      console.error("No such product!");
      return null;
    }
  } catch (error) {
    console.error("Error getting product: ", error);
    throw error;
  }
};

// ***** EDIT PRODUCT
export const editProduct = async (productId: string, productData) => {
  try {
    const docRef = doc(db, "product", productId);

    let editProduct = { ...productData };
    let options: string[] = [];
    if (productData.options) {
      options = productData.options.split("\n");
      editProduct = { ...editProduct, options: options };
    }
    await updateDoc(docRef, editProduct);
    console.log("Product updated with id: ", productId);
  } catch (error) {
    console.error("Error updating document", error);
  }
};

// ***** DELETE PRODUCT
export const deleteProduct = async (productId: string) => {
  try {
    const docRef = doc(db, "product", productId);
    await deleteDoc(docRef);
    console.log("Product deleted successfully with id: ", productId);
  } catch (error) {
    console.error("Error in deleting product: ", error);
  }
};
