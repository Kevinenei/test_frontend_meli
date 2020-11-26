const axios = require('axios').default;

const URL = "https://api.mercadolibre.com/";

const getProductsByQuery = async (q) => {
  try {
    return await axios.get(`${URL}sites/MLA/search?q=${q}&&limit=4`);
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getProductById = async (id) => {
  try {
    return await axios.get(`${URL}items/${id}`);
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getProductDescriptionById = async id => {
  try {
    return await axios.get(
      `${URL}items/${id}/description`
    );
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getProductCategoryById = async (id) => {
  try {
    return await axios.get(`${URL}categories/${id}`);
  } catch (error) {
    return error;
  }
}

module.exports = {
  getProductsByQuery,
  getProductById,
  getProductDescriptionById,
  getProductCategoryById,
};