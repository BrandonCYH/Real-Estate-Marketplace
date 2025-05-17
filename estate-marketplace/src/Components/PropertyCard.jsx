const PropertyCard = ({property}) => {
    const formatPrice = (price: number)
        :
        string => {
        return property.type === 'For Sale'
            ? price >= 1000000
                ? `$${(price / 1000000).toFixed(1)}M`
                : `$${(price / 1000).toFixed(0)}K`
            : `$${price.toLocaleString()} /mo`;
    };

    return (
        <div className="card overflow-hidden border border-gray-200">
            <div className="relative">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="h-48 w-full object-cover"
                />
                <div
                    className={`absolute top-2 right-2 text-white ${
                        property.type === 'For Sale' ? 'badge badge-primary' : 'badge badge-success'
                    }`}
                >
                    {property.type}
                </div>
            </div>
            <div className="card-body pt-4">
                <h3 className="card-title text-xl font-semibold line-clamp-1 text-black">{property.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                    <p className="line-clamp-1">{property.address}</p>
                </div>
                <div className="mt-4">
                    <p className="text-xl font-bold text-black">{formatPrice(property.price)}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-500 pt-3">
                    <div className="flex items-center">
                        <span>{property.bedrooms} beds</span>
                    </div>
                    <div>
                        <span>{property.bathrooms} baths</span>
                    </div>
                    <div>
                        <span>{property.sqft.toLocaleString()} sq ft</span>
                    </div>
                </div>
                <div className={"border border-gray-50"}></div>
            </div>

        </div>
    );
};

export default PropertyCard;