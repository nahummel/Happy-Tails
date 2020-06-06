const rescueReducer = (state = {}, action) => {
  switch (action.type) {
    case "STORE_RESCUE":
      return action.payload;
    default:
      return state;
  }
};

export default rescueReducer;
