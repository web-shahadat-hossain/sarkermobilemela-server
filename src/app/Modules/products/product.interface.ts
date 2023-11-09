export type IProduct = {
  title: string;
  price: string;
  description: string;
  category: "headphone" | "watch" | "phone";
  image: string[];
  stock: number;
  color: string[];
  brand: string;
  feature:string[];
  discount:number;
  quantityCart?:number;
};

