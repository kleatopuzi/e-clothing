const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      linkUrl: "shop/hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
    },
    {
      title: "jackets",
      linkUrl: "shop/jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
    },
    {
      title: "sneakers",
      linkUrl: "shop/sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
    },
    {
      title: "womens",
      linkUrl: "shop/womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "",
      id: 4,
    },
    {
      title: "mens",
      linkUrl: "shop/mens",
      imageUrl: `https://i.ibb.co/R70vBrQ/men.png`,
      size: "large",
      id: 5,
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
