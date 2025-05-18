import {useEffect, useState} from "react";
import PropertyCard from './PropertyCard';
import SearchFilters from './SearchFilters';

const PropertyGrid = ({propertyData}) => {
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        if (activeFilter === 'all') {
            setFilteredProperties(propertyData);
        } else if (activeFilter === 'for-sale') {
            setFilteredProperties(propertyData.filter(property => property.type === 'For Sale'));
        } else if (activeFilter === 'for-rent') {
            setFilteredProperties(propertyData.filter(property => property.type === 'For Rent'));
        }
    }, [propertyData, activeFilter]);

    const handleFilterChange = (filter: 'all' | 'for-sale' | 'for-rent') => {
        setActiveFilter(filter);
    };

    return (
        <div className="container mx-auto py-12 md:px-20 px-6 bg-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-real-navy mb-2 text-black">Discover Properties</h2>
                    <p className="text-gray-500">Browse our handpicked properties</p>
                </div>
                <SearchFilters activeFilter={activeFilter} onFilterChange={handleFilterChange}/>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property}/>
                ))}
            </div>
        </div>
    );
};

export default PropertyGrid;