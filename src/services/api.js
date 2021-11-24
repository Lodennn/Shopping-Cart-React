/// https://fakestoreapi.com/

/**
 * fetchProductData is a async function that makes an api call to server
 * @returns array of data(products)
 * @author Khaled Nasser
 */
export const fetchProductsData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};
