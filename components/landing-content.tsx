"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Rahul ahire",
    avatar: "R",
    title: "Software developer",
    description:
      "This is one of the best AI platforms I've used. Every model is available at such a price, I am going to use it for my daily purpose.",
  },
  {
    name: "Aadi srivastava",
    avatar: "A",
    title: "Backend engineer",
    description:
      "I highly recommend Qwerky for their affordable and comprehensive AI services. Their tools have streamlined our operations and boosted productivity, all backed by excellent customer support. Qwerky is a top choice for cost-effective, cutting-edge AI solutions.",
  },
  {
    name: "Divyam",
    avatar: "D",
    title: "Content Writer",
    description:
      "As a content writer, I've been thoroughly impressed with Qwerky's AI services. Their tools are intuitive, affordable, and incredibly effective, enhancing my productivity significantly. Qwerky’s customer support is also top-notch. Highly recommended for anyone in need of reliable and innovative AI solutions.",
  },
  {
    name: "Ikenna",
    avatar: "I",
    title: "IT support/Web developer",
    description:
      "As an IT support specialist, I highly recommend Qwerky for their affordable and easy-to-use AI services. Their reliable customer support has made integration a breeze. A great choice for IT solutions.",
  },
];
export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
