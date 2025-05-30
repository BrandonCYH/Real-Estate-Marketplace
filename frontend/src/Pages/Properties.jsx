import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import PropertyCard from "../Components/PropertyCard";

function PropertiesPage() {
    const minPrice = 0;
    const maxPrice = 300000;
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [selectedBedrooms, setSelectedBedrooms] = useState([]);
    const [selectedBathrooms, setSelectedBathrooms] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [price, setPrice] = useState(minPrice);

    useEffect(() => {
        axios.get("http://localhost:8080/api/properties")
            .then(response => {
                setProperties(response.data);      // ✅ Update state
                setFilteredProperties(response.data);
            })
            .catch(error => {
                console.error("Error fetching properties:", error); // Better to use console.error
            });
    }, []);

    // Deduplicate based on 'bedrooms'
    const uniqueBedrooms = properties.filter(
        (item, index, self) =>
            index === self.findIndex((t) => t.bedrooms === item.bedrooms)
    ).sort((a, b) => a.bedrooms - b.bedrooms);

    const uniqueBathrooms = properties.filter(
        (item, index, self) =>
            index === self.findIndex((t) => t.bathrooms === item.bathrooms)
    ).sort((a, b) => a.bathrooms - b.bathrooms);

    function filterProperties_price(filter) {
        if (filter <= 0) {
            setFilteredProperties(properties);
        } else {
            setFilteredProperties(properties.filter(property => property.price <= filter));
        }
    }

    function filterProperties_type(filter) {
        setActiveFilter(filter); // Track active filter

        if (filter === 'All') {
            setFilteredProperties(properties);
        } else {
            setFilteredProperties(properties.filter(property => property.type === filter));
        }
    }

    function filterProperties_bed(checkbox_bedroom, bedAmount) {
        const checked = checkbox_bedroom.target.checked;
        let updatedBedrooms;
        if (checked) {
            updatedBedrooms = [...selectedBedrooms, bedAmount];
        } else {
            updatedBedrooms = selectedBedrooms.filter(b => b !== bedAmount);
        }

        setSelectedBedrooms(updatedBedrooms);

        if (updatedBedrooms.length === 0) {
            setFilteredProperties(properties);
        } else {
            setFilteredProperties(properties.filter(property => updatedBedrooms.includes(property.bedrooms)));
        }

        // Apply combined filters using current bathrooms state
        applyCombinedFilters(updatedBedrooms, selectedBathrooms);
    }

    function filterProperties_bathrooms(checkbox_bathroom, bathroomAmount) {
        const checked = checkbox_bathroom.target.checked;
        let updatedBathrooms;
        if (checked) {
            updatedBathrooms = [...selectedBathrooms, bathroomAmount];
        } else {
            updatedBathrooms = selectedBathrooms.filter(b => b !== bathroomAmount);
        }

        setSelectedBathrooms(updatedBathrooms);

        if (updatedBathrooms.length === 0) {
            setFilteredProperties(properties);
        } else {
            setFilteredProperties(properties.filter(property => updatedBathrooms.includes(property.bathrooms)));
        }

        // Apply combined filters using current bedrooms state
        applyCombinedFilters(selectedBedrooms, updatedBathrooms);
    }

    function applyCombinedFilters(updatedBedrooms, updatedBathrooms) {
        let filtered = properties;

        if (updatedBedrooms.length > 0) {
            filtered = filtered.filter(property =>
                updatedBedrooms.includes(property.bedrooms)
            );
        }

        if (updatedBathrooms.length > 0) {
            filtered = filtered.filter(property =>
                updatedBathrooms.includes(property.bathrooms)
            );
        }

        setFilteredProperties(filtered);
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>

            <main className="flex-1 container mx-auto py-12 md:px-20 px-6 bg-white">
                <div className="flex flex-col mb-8">
                    <h1 className="text-3xl font-bold text-real-navy mb-2 text-black">Browse Properties</h1>
                    <p className="text-gray-500">Find your dream property among our extensive listings</p>
                </div>

                {/* Search and filter row */}
                <div className="flex flex-col lg:flex-row gap-4 mb-8 bg-white">
                    <div className="relative flex-1 w-full">
                        <label
                            className="input w-full bg-white text-white border border-gray-300 flex items-center gap-2 px-3 py-2 rounded">
                            <svg
                                className="h-5 w-5 text-black"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"/>
                                    <path d="m21 21-4.3-4.3"/>
                                </g>
                            </svg>
                            <input
                                type="search"
                                className="w-full bg-transparent text-black placeholder-gray-500 focus:outline-none"
                                placeholder="Search by location, property name"
                            />
                        </label>
                    </div>

                    <div className="flex gap-2">
                        <button
                            className={`px-4 py-2 rounded ${activeFilter === 'All' ? 'bg-black text-white' : 'bg-gray-300 text-gray-600'}`}
                            onClick={() => filterProperties_type('All')}
                        >
                            All
                        </button>

                        <button
                            className={`px-4 py-2 rounded ${activeFilter === 'For Sale' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}
                            onClick={() => filterProperties_type('For Sale')}
                        >
                            For Sale
                        </button>

                        <button
                            className={`px-4 py-2 rounded ${activeFilter === 'For Rent' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}`}
                            onClick={() => filterProperties_type('For Rent')}
                        >
                            For Rent
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters sidebar - hidden on mobile unless toggled */}
                    <aside className={`w-full lg:w-64 lg:block`}>
                        <div className="p-4 border rounded-lg bg-white">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-black">Filters</h3>
                                <button
                                    variant="ghost"
                                    className="h-auto p-0 text-blue-700 hover:text-blue-900 text-sm"
                                >
                                    Reset
                                </button>
                            </div>

                            <div className="space-y-6">
                                {/* Price Range */}
                                <div className="space-y-2">
                                    <label className="text-black">Price Range (Selected: RM {price})</label>
                                    <div className="pt-2">
                                        <input
                                            type="range"
                                            min={minPrice}
                                            max={maxPrice}
                                            value={price}
                                            onChange={(e) => {
                                                const newValue = Number(e.target.value);
                                                setPrice(newValue);
                                                filterProperties_price(e.target.value)
                                            }
                                            }
                                            className="range range-neutral"
                                        />
                                    </div>
                                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                                        <span>$ {minPrice}</span>
                                        <span>$ {maxPrice}</span>
                                    </div>
                                </div>

                                {/* Bedrooms */}
                                <div className="space-y-2">
                                    <label className="text-black">Bedrooms</label>
                                    <div className="space-y-1.5">
                                        {uniqueBedrooms.map((count) => (
                                            <div key={`bed-${count.bedrooms}`} className="flex items-center space-x-2">
                                                <fieldset
                                                    className="fieldset rounded-box w-64">
                                                    <label className="label text-black">
                                                        <input type="checkbox"
                                                               className="checkbox text-black"
                                                               onChange={(event) => filterProperties_bed(event, count.bedrooms)}/>
                                                        {`${count.bedrooms} beds`}
                                                    </label>
                                                </fieldset>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/*<Separator />*/}

                                {/* Bathrooms */}
                                <div className="space-y-2">
                                    <label className="text-black">Bathrooms</label>
                                    <div className="space-y-1.5">
                                        {uniqueBathrooms.map((count) => (
                                            <div key={`bathrooms-${count.bathrooms}`}
                                                 className="flex items-center space-x-2">
                                                <fieldset
                                                    className="fieldset rounded-box w-64">
                                                    <label className="label text-black">
                                                        <input type="checkbox"
                                                               className="checkbox text-black"
                                                               onChange={(event) => filterProperties_bathrooms(event, count.bathrooms)}/>
                                                        {`${count.bathrooms} bathrooms`}
                                                    </label>
                                                </fieldset>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Property listings */}
                    <div className="flex-1">
                        <div className="mb-4 flex justify-between items-center">
                            <p className="text-gray-500">{filteredProperties.length} properties found</p>
                        </div>

                        {filteredProperties.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProperties.map((property) => (
                                    <PropertyCard key={property.id} property={property}/>
                                ))}
                            </div>
                        ) : (
                            <div className="p-12 text-center border rounded-lg">
                                <h3 className="font-medium text-lg mb-2 text-black">No properties found</h3>
                                <p className="text-gray-500">Try adjusting your search filters</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    );
}

export default PropertiesPage;