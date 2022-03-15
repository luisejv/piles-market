export const actionTypes = {
  SET_CHECKOUT_INFO: "SET_CHECKOUT_INFO",
};

export const setCheckoutInfo = (info) => {
  return { type: actionTypes.SET_CHECKOUT_INFO, info };
};
