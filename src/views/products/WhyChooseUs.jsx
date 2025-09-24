// WhyChooseUs.jsx
import React from "react";
import { Sparkles, Rocket, Leaf } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Sparkles className="w-8 h-8 text-pink-500" />,
    title: "Superior Quality",
    description:
      "Professional printing with vibrant colors and sharp details that make your designs stand out.",
    link: "#",
  },
  {
    id: 2,
    icon: <Rocket className="w-8 h-8 text-purple-500" />,
    title: "Fast Turnaround",
    description:
      "From proof approval to delivery, we ensure your prints arrive when you need them.",
    link: "#",
  },
  {
    id: 3,
    icon: <Leaf className="w-8 h-8 text-green-500" />,
    title: "Eco-Conscious Options",
    description:
      "Choose from our range of environmentally friendly papers and inks for sustainable printing.",
    link: "#",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-12">
          Why Choose Our Printing Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl shadow-md bg-white p-6 hover:scale-105 transition-transform"
            >
              <div className="mb-4 bg-gray-100 size-12 p-2 rounded-md -rotate-3">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                {service.description}
              </p>
              <div className="border-t border-purple-500 pt-5">
                <a
                  href={service.link}
                  className="text-purple-600 font-medium hover:underline"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
