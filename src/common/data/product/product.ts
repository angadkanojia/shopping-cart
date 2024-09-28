export type ProductType = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export const Products: ProductType[] = [
  {
    id: 1,
    name: "Lehenga",
    image: "/images/products/product1.jpg",
    price: 100,
  },
  {
    id: 2,
    name: "Nehru Jacket",
    image: "/images/products/nehrujacket.jpg",
    price: 150,
  },
  {
    id: 4,
    name: "Saree",
    image: "/images/products/saree.avif",
    price: 100,
  },
  {
    id: 3,
    name: "Short Kurta",
    image: "/images/products/product3.jpg",
    price: 200,
  },

  {
    id: 5,
    name: "Indo Western",
    image: "/images/products/indowestern.jpg",
    price: 100,
  },
  {
    id: 6,
    name: "Peach Lehenga",
    image: "/images/products/peach_lehnga.avif",
    price: 100,
  },
  {
    id: 7,
    name: "Product 2",
    image: "/images/products/product2.jpg",
    price: 150,
  },
  {
    id: 8,
    name: "Boys Wine Jacket",
    image: "/images/products/boyswinejacket.avif",
    price: 200,
  },
];
