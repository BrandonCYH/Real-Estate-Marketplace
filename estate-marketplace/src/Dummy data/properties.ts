export interface Property {
    id: string;
    title: string;
    address: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    imageUrl: string;
    type: 'For Sale' | 'For Rent';
    featured: boolean;
}

export const properties: Property[] = [
    {
        id: '1',
        title: 'Modern Luxury Villa',
        address: '123 Oceanview Dr, Malibu, CA 90210',
        price: 2750000,
        bedrooms: 5,
        bathrooms: 4.5,
        sqft: 4200,
        imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
        type: 'For Sale',
        featured: true
    },
    {
        id: '2',
        title: 'Downtown Penthouse',
        address: '456 Skyline Ave, Los Angeles, CA 90001',
        price: 1850000,
        bedrooms: 3,
        bathrooms: 2.5,
        sqft: 2100,
        imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
        type: 'For Sale',
        featured: true
    },
    {
        id: '3',
        title: 'Charming Suburban Home',
        address: '789 Maple St, Pasadena, CA 91101',
        price: 975000,
        bedrooms: 4,
        bathrooms: 3,
        sqft: 2800,
        imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop',
        type: 'For Sale',
        featured: false
    },
    {
        id: '4',
        title: 'Beachside Cottage',
        address: '321 Shoreline Dr, Santa Monica, CA 90402',
        price: 5000,
        bedrooms: 2,
        bathrooms: 1.5,
        sqft: 1200,
        imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop',
        type: 'For Rent',
        featured: true
    },
    {
        id: '5',
        title: 'Urban Loft Apartment',
        address: '555 Downtown Blvd, Los Angeles, CA 90017',
        price: 3800,
        bedrooms: 1,
        bathrooms: 1,
        sqft: 950,
        imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop',
        type: 'For Rent',
        featured: false
    },
    {
        id: '6',
        title: 'Mountain View Estate',
        address: '888 Highland Rd, Beverly Hills, CA 90210',
        price: 4200000,
        bedrooms: 6,
        bathrooms: 5.5,
        sqft: 5500,
        imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
        type: 'For Sale',
        featured: true
    },
    {
        id: '7',
        title: 'Garden Apartment',
        address: '222 Rose Ave, Venice, CA 90291',
        price: 2800,
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1100,
        imageUrl: 'https://images.unsplash.com/photo-1600047509807-f8261a1f6966?q=80&w=2484&auto=format&fit=crop',
        type: 'For Rent',
        featured: true
    },
    {
        id: '8',
        title: 'Historic Brownstone',
        address: '444 Heritage St, Pasadena, CA 91103',
        price: 1450000,
        bedrooms: 4,
        bathrooms: 3.5,
        sqft: 3200,
        imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop',
        type: 'For Sale',
        featured: false
    },
];