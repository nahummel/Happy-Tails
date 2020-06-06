const defaultRescue = {
  name: "Homebase Rescue",
  street: "235 Nathan Lane N, Apt. 135",
  city: "Plymouth",
  state: "MN",
  zipcode: 55441,
  phone: "15152303371",
  email: "natoms225@gmail.com",
};

const rescueReducer = (state = defaultRescue, action) => {
  switch (action.type) {
    case "STORE_RESCUE":
      return action.payload;
    default:
      return state;
  }
};

export default rescueReducer;
