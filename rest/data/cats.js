let cats = [
  {
    id: 0,
    name: "Jiji",
    color: "black",
    human: "Kiki",
    image: "images/jiji.png",
  },
  {
    id: 1,
    name: "Lion",
    color: "pink",
    human: "Steven",
    image: "images/lion.png",
  },
  {
    id: 2,
    name: "Hobbes",
    color: "orange and black",
    human: "Calvin",
    image: "images/hobbes.png",
  },
];

const getCats = () => {
  return cats;
};

const getCatsById = (id) => {
  return cats.find((cat) => cat.id === id);
};

export { getCats, getCatsById };
