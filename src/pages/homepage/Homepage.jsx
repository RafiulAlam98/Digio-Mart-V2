import Shop from "../shop/Shop";
import Hero from "./Hero";
import Marketing from "./Marketing";
import Testimonials from "./Testimonials";

const extras = [
  {
    id: 1,
    svg: <i className="fa-solid fa-car"></i>,
    title: "FREE SHIPPING & RETURN",
    description: "Free shipping on orders",
  },
  {
    id: 2,
    svg: <i className="fa-solid fa-bangladeshi-taka-sign"></i>,
    title: "MONEY BACK GUARANTEE",
    description: "100% money back guarantee",
  },
  {
    id: 3,
    svg: <i className="fa-solid fa-circle-check"></i>,
    title: "ONLINE SUPPORT 24/7",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    svg: <i className="fa-solid fa-credit-card"></i>,
    title: "SECURE PAYMENT",
    description: "Lorem ipsum dolor sit amet.",
  },
];

const Homepage = () => {
  return (
    <section>
      <Hero />
      <section className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-[1200px] mx-auto my-10">
        {extras.map((extra) => (
          <div
            className="flex items-center shadow-2xl m-4 p-4  rounded-md"
            key={extra.id}
          >
            <div className="text-[#F66A05] mr-8 text-2xl">{extra.svg}</div>
            <div className="py-1">
              <h2 className="text-sm font-semibold my-1">{extra.title}</h2>
              <h2 className="text-sm  ">{extra.description}</h2>
            </div>
          </div>
        ))}
      </section>
      <Shop />
      <Marketing />
      <Testimonials />
    </section>
  );
};

export default Homepage;
