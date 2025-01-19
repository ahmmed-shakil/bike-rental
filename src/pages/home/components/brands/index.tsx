import React from "react";
import Title from "../../../../components/title/Title";
import brandImg from "../../../../assets/images/brands/honda.jpg";

const BrandsHome: React.FC = () => {
  type BikeBrand = {
    title: string;
    desc: string;
    imgUrl: string;
  };
  const bikeBrands: BikeBrand[] = [
    {
      title: "Honda",
      desc: "Known for reliability, affordability, and fuel efficiency. Popular models: Honda Activa, CB series, Africa Twin.",
      imgUrl: "https://example.com/images/honda.jpg",
    },
    {
      title: "Yamaha",
      desc: "Renowned for sporty, versatile, and performance-oriented bikes. Popular models: Yamaha R15, MT series, FZ series.",
      imgUrl: "https://example.com/images/yamaha.jpg",
    },
    {
      title: "Suzuki",
      desc: "High-performance and budget-friendly bikes with advanced technology. Popular models: Suzuki Hayabusa, GSX-R series, Burgman.",
      imgUrl: "https://example.com/images/suzuki.jpg",
    },
    {
      title: "Kawasaki",
      desc: "Famous for powerful sports bikes and robust adventure models. Popular models: Ninja series, Z series, Versys.",
      imgUrl: "https://example.com/images/kawasaki.jpg",
    },
    {
      title: "Harley-Davidson",
      desc: "Iconic American cruiser bikes, ideal for long-distance touring. Popular models: Iron 883, Fat Boy, Street Glide.",
      imgUrl: "https://example.com/images/harley-davidson.jpg",
    },
    {
      title: "Royal Enfield",
      desc: "Classic and retro-styled motorcycles with a global fanbase. Popular models: Classic 350, Bullet, Himalayan.",
      imgUrl: "https://example.com/images/royal-enfield.jpg",
    },
    {
      title: "BMW Motorrad",
      desc: "Premium brand offering luxury, adventure, and touring motorcycles. Popular models: BMW R 1250 GS, S 1000 RR, F 900 R.",
      imgUrl: "https://example.com/images/bmw-motorrad.jpg",
    },
    {
      title: "Ducati",
      desc: "Italian brand known for high-performance sports and touring bikes. Popular models: Ducati Panigale, Monster, Multistrada.",
      imgUrl: "https://example.com/images/ducati.jpg",
    },
    {
      title: "KTM",
      desc: "Lightweight, performance-focused bikes popular among enthusiasts. Popular models: Duke series, RC series, Adventure.",
      imgUrl: "https://example.com/images/ktm.jpg",
    },
    {
      title: "Triumph",
      desc: "British brand offering premium roadsters, touring, and adventure bikes. Popular models: Bonneville, Tiger, Street Triple.",
      imgUrl: "https://example.com/images/triumph.jpg",
    },
    {
      title: "Hero MotoCorp",
      desc: "World's largest two-wheeler manufacturer, known for affordability and mileage. Popular models: Splendor, Xpulse, Glamour.",
      imgUrl: "https://example.com/images/hero-motocorp.jpg",
    },
    {
      title: "Bajaj",
      desc: "Indian brand offering reliable, performance-oriented, and cost-effective bikes. Popular models: Pulsar series, Dominar, Avenger.",
      imgUrl: "https://example.com/images/bajaj.jpg",
    },
    {
      title: "Piaggio/Vespa",
      desc: "Italian brand famous for stylish scooters and light motorcycles. Popular models: Vespa Primavera, GTS Super, Piaggio MP3.",
      imgUrl: "https://example.com/images/piaggio-vespa.jpg",
    },
    {
      title: "Husqvarna",
      desc: "Known for minimalist design and lightweight off-road and urban bikes. Popular models: Svartpilen, Vitpilen, Norden.",
      imgUrl: "https://example.com/images/husqvarna.jpg",
    },
  ];
  return (
    <div className=" snap-section py-10 max-w-7xl mx-auto flex flex-col justify-center px-4">
      <Title title="Popular Brands From Our Collection" />
      <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mt-10 gap-4">
        {bikeBrands?.map((brand: BikeBrand, i: number) => (
          <div key={i}>
            <img
              alt="example"
              src={brandImg}
              className=" rounded-md shadow-sm hover:shadow-xl cursor-pointer hover:animate-pulse"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsHome;
