const defaultDog = {
  id: 24,
  name: "Apollo",
  breed: "Border Collie",
  sex: "Male",
  age: 6,
  image:
    "https://lh3.googleusercontent.com/pw/ACtC-3cnmrHPenhoxcqPpQsZFk7xltv8wBhx3t9rzuvCu4-BzIHYBpqd7RVjrXisMwS1ssOW8LOWxGy0_Hi3L-YytpdrQ8abbaadvFgio83IyqSZtdxdMKySKwSYu6hD1tuLqix54YDVCZ6_HzTPzbLExWVb=w684-h911-no?authuser=0",
  rescue_id: 46,
  description:
    "Apollo is biggest snuggler I have ever met. He would do well into most families easily but we would recommend against highly active families as he is pretty lazy. He does well with kids but not other dogs or cats. He is very well behaved but will need training in leash aggression towards other dogs. Overall he is a big lover and can’t wait to find his forever home.",
  size: "Medium",
  age_range: "Adult",
  rent_breed: true,
  other_dogs: false,
  cats: true,
  kids: true,
  grooming: false,
  active: false,
  training: false,
  health: false,
  dog_id: 1,
  user_id: null,
};

const viewDogReducer = (state = defaultDog, action) => {
  switch (action.type) {
    case "STORE_DOG":
      return action.payload;
    default:
      return state;
  }
};

export default viewDogReducer;
