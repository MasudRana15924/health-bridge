import React from 'react';
import { Link } from 'react-router-dom';

const RelatedDoctor = ({ doctor }) => {
  const {images, name,work, expert, } = doctor;
  return (
    <div className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3 ">
      <div className="w-full bg-base-100 border">
        <div className="card-body">
          <div className="card-actions justify-end">
            <Link to={`/doctor/${doctor._id}`}>
              <img
                src={images[0].url}
                className="w-full max-h-48"
                alt={name}
              />
            </Link>
          </div>
        
        </div>
        <p className="text-blue-400 w-full text-start ml-2 mr-2"> {name}</p>
        <p className="text-blue-400 w-full text-start ml-2 mr-2"> ({expert})</p>
          <p className=" w-full text-start ml-2 mr-2">Works: {work}</p>
      </div>

    </div>
  );
};

export default RelatedDoctor;