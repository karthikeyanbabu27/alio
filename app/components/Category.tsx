import React from 'react';
import Image from "next/image";
import seafish from '../images/seafish.webp';
import dryfish from '../images/karuvadu.webp';
import octopus from '../images/kanava.jpg';
import fishpickle from '..//images/fish pickle.jpeg';
import prawn from '..//images/raal.jpg'

const categories = [
  { name: 'Sea Fish', imag: seafish },
  { name: 'Dry Fish', imag:dryfish  },
  { name: 'Octopus', imag:octopus },
  { name: 'Fish Pickle', imag:fishpickle  },
  { name: 'Prawn', imag: prawn },
];

const Categories = () => {
  return (
    <div className="mx-auto max-w-2xl mt-0 px-4 sm:pb-6 lg:max-w-7xl lg:px-8 ">
      <h2 className="text-3xl font-bold text-center mb-8">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto">
            {/* <Image
                src={category.image}
                alt={category.name}
                layout="fill" // Makes the image responsive
                objectFit="cover" // Ensures the image covers the entire container
                className="rounded-full"
              /> */}
                <Image
                    src={category.imag}
                    alt="bannerone"
                    className="w-full h-full relative rounded-full "
                    objectFit="cover"
                    layout="fill"
                    priority
                />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;