import React from 'react';
import fight from '../../images/fight.avif';
import family from '../../images/protect.jpg';
import savings from '../../images/savings.png';

const Insurances = () => {
 
  
    return (
        <div className="blogs  md:mt-48 lg:mt-48 mb-10">
            <p className="text-2xl md:text-4xl lg:text-4xl font-bold pt-12">The importance of health insurance </p>
            <div className="w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                <div className="mt-5 lg:mt-20 lg:mb-20 md:mt-20 md:mb-20">
                    <div className=" bg-white">
                        <img src={fight} alt="find" className=" h-40 md:h-48 lg:h-48 w-3/4 mx-auto pt-5" />
                        <div className="card-body text-center">
                            <h2 className="text-center text-2xl font-semibold ">
                            To fight lifestyle diseases
                            </h2>
                            <p className=" text-start text-sm font-semibold leading-8 text-gray-600">Lifestyle diseases are on the rise, especially among people under the age of 45. Illnesses like diabetes, obesity, respiratory problems, heart disease, all of which are prevalent among the older generation, are now rampant in younger people too. Some contributing factors that lead to these diseases include</p>
                      
                        </div>
                    </div>
                </div>
                <div className="lg:mt-20 lg:mb-20 md:mt-20 md:mb-20">
                    <div className=" bg-white">
                    <img src={family} alt="find" className=" h-40 md:h-48 lg:h-48  w-3/4 mx-auto pt-5" />
                        <div className="card-body">
                            <h2 className="text-center text-2xl font-semibold ">
                            To safeguard your family 
                            </h2>
                            <p className=" text-start text-sm font-semibold leading-8 text-gray-600">When scouting for an ideal health insurance plan, you can choose to secure your entire family under the same policy rather than buying separate policies. Consider your ageing parents, who are likely to be vulnerable to illnesses, as well as dependent children. Ensuring they get the best  </p>
                          
                         
                        </div>
                    </div>
                </div>
                <div className="lg:mt-20 lg:mb-20 md:mt-20 md:mb-20">
                    <div className=" bg-white">
                    <img src={savings} alt="find" className=" h-40 md:h-48 lg:h-48  w-3/4 mx-auto pt-5" />
                        <div className="card-body">
                            <h2 className="text-center text-2xl font-semibold">
                            To protect your savings
                            </h2>
                            <p className=" text-start text-sm font-semibold leading-8 text-gray-600">As medical technology improves and diseases increase, the cost for treatment rises as well. And it is important to understand that medical expenses are not limited to only hospitals. The costs for doctor's consultation, diagnosis tests, ambulance charges, operation theatre costs, medicines</p>
                
                          
                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insurances;