import Image from "next/image";
import ShopImage from "/public/images/shop.png";
import ProductCard from "@/components/product-card";
import ShopHeader from "@/components/shop-header";
import ShopButtom from "@/components/Shop-buttom";


export default function ShopHero() {
  const products = [
    {
      Id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img1.png",
      tag: "-30%" as const,
    },
    {
      Id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img2.png",
    },
    {
      Id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: 7000000,
      image: "/images/img3.png",
      tag: "-30%" as const,
    },
    {
      Id: 4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      image: "/images/img4.jpeg",
      tag: "New" as const,
    },
    {
      Id: 5,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img1.png",
      tag: "-30%" as const,
    },
    {
      Id: 6,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img2.png",
    },
    {
      Id: 7,
      name: "Lolito",
      description: "Luxury big sofa",
      price: 7000000,
      image: "/images/img3.png",
      tag: "-30%" as const,
    },
    {
      Id: 8,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      image: "/images/img4.jpeg",
      tag: "New" as const,
    },
    {
      Id: 9,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img1.png",
      tag: "-30%" as const,
    },
    {
      Id: 10,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img2.png",
    },
    {
      Id: 11,
      name: "Lolito",
      description: "Luxury big sofa",
      price: 7000000,
      image: "/images/img3.png",
      tag: "-30%" as const,
    },
    {
      Id: 12,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      image: "/images/img4.jpeg",
      tag: "New" as const,
    },
    {
      Id: 13,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img1.png",
      tag: "-30%" as const,
    },
    {
      Id: 14,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/img2.png",
    },
    {
      Id: 15,
      name: "Lolito",
      description: "Luxury big sofa",
      price: 7000000,
      image: "/images/img3.png",
      tag: "-30%" as const,
    },
    {
      Id: 16,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      image: "/images/img4.jpeg",
      tag: "New" as const,
    },

  
  ];

  return (
    <>
    <ShopHeader />
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-20 text-center">
          {/* Responsive Grid for Products */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center justify-center border border-[#B88E2F] bg-white px-8 py-2 text-sm font-medium text-[#B88E2F] transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
              Show More
            </button>
          </div>
        </div>
      </section>
      <ShopButtom />
    </>
  );
}