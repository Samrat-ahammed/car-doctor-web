import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-6 space-y-4">
        <h3 className="font-bold text-red-600">Service</h3>
        <h3 className="text-5xl font-bold">Our Service Area</h3>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
