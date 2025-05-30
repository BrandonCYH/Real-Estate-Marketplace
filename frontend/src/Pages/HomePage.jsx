import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import PropertyGrid from "../Components/PropertyGrid";
import axios from "axios";
import {useEffect, useState} from "react";

function HomePage() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/properties")
            .then(response => {
                setProperties(response.data);      // ✅ Update state
            })
            .catch(error => {
                console.error("Error fetching properties:", error); // Better to use console.error
            });


    }, []);

    return (<>
        <Navbar/>
        <Hero/>
        <PropertyGrid propertyData={properties}/>
        <section className="container mx-auto py-16 md:px-20 px-6 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-black mb-4">Why Choose Dwell?</h2>
                    <p className="text-gray-600 mb-6">
                        At Dwell, we're committed to helping you find the perfect property that matches your lifestyle
                        and budget.
                        Our platform offers a seamless experience for buyers, sellers, and renters alike.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="bg-green-700 p-2 rounded-full mr-4">
                                <svg className="h-6 w-6 text-real-blue" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-black">Extensive Property Listings</h3>
                                <p className="text-gray-600">Access thousands of up-to-date property listings across the
                                    country.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-green-700 p-2 rounded-full mr-4">
                                <svg className="h-6 w-6 text-real-blue" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-black">Expert Real Estate Agents</h3>
                                <p className="text-gray-600">Our licensed agents provide guidance throughout your
                                    property journey.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-green-700 p-2 rounded-full mr-4">
                                <svg className="h-6 w-6 text-real-blue" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-black">Personalized Experience</h3>
                                <p className="text-gray-600">Tailored property recommendations based on your preferences
                                    and needs.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
                        alt="Modern home interior"
                        className="rounded-lg shadow-lg w-full h-auto"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-lg rounded-lg hidden md:block">
                        <p className="font-bold text-black">100,000+</p>
                        <p className="text-gray-600">Happy Customers</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-black mb-4">Ready to Find Your Dream Property?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Whether you're looking to buy, rent, or sell, we're here to help you every step of the way.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="#"
                       className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                        Browse Properties
                    </a>
                    <a href="#"
                       className="bg-white border border-gray-300 hover:bg-gray-100 text-black font-bold py-3 px-6 rounded-lg transition-colors">
                        Contact an Agent
                    </a>
                </div>
            </div>
        </section>
        <Footer/>
    </>);
}

export default HomePage;