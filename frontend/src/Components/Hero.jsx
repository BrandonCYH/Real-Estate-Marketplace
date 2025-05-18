import {useState} from 'react';

const Hero = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('buy');

    return (
        <div className="relative h-[600px] bg-cover bg-center" style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop')"
        }}>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center animate-fade-in">
                    Find Your Dream Home
                </h1>
                <p className="text-lg md:text-xl mb-8 text-center max-w-2xl text-white">
                    Discover thousands of properties for sale and rent across the country
                </p>

                <div className="w-full max-w-4xl rounded-lg p-4 bg-white bg-opacity-90 text-black">
                    {/* Tab Buttons */}
                    <div className="grid w-full grid-cols-3 gap-2 mb-4">
                        <button
                            className={`py-2 px-4 rounded ${activeTab === 'buy' ? 'bg-blue-400 text-white' : 'bg-gray-200'}`}
                            onClick={() => setActiveTab('buy')}
                        >
                            Buy
                        </button>
                        <button
                            className={`py-2 px-4 rounded ${activeTab === 'rent' ? 'bg-blue-400 text-white' : 'bg-gray-200'}`}
                            onClick={() => setActiveTab('rent')}
                        >
                            Rent
                        </button>
                        <button
                            className={`py-2 px-4 rounded ${activeTab === 'sell' ? 'bg-blue-400 text-white' : 'bg-gray-200'}`}
                            onClick={() => setActiveTab('sell')}
                        >
                            Sell
                        </button>
                    </div>

                    {/* Tab Contents */}
                    {activeTab === 'buy' && (
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Enter location, zip code, or address"
                                className="flex-grow p-2 border rounded bg-white"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                                Search
                            </button>
                        </div>
                    )}

                    {activeTab === 'rent' && (
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Enter location, zip code, or address"
                                className="flex-grow p-2 border rounded bg-white"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                                Find Rentals
                            </button>
                        </div>
                    )}

                    {activeTab === 'sell' && (
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Enter your property address"
                                className="flex-grow p-2 border rounded bg-white"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                                Get Estimate
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Hero;