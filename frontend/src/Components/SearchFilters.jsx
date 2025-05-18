interface SearchFiltersProps {
    activeFilter: 'all' | 'for-sale' | 'for-rent';
    onFilterChange: (filter: 'all' | 'for-sale' | 'for-rent') => void;
}

const SearchFilters = ({activeFilter, onFilterChange}: SearchFiltersProps) => {
    return (
        <div className="flex space-x-2 mt-4 md:mt-0">
            <button
                onClick={() => onFilterChange('all')}
                className={`px-4 py-2 rounded border ${
                    activeFilter === 'all'
                        ? 'bg-black text-white'
                        : 'text-black hover:text-white hover:bg-black'
                }`}
            >
                All
            </button>
            <button
                onClick={() => onFilterChange('for-sale')}
                className={`px-4 py-2 rounded border ${
                    activeFilter === 'for-sale'
                        ? 'bg-indigo-500 text-white'
                        : 'text-black hover:text-white hover:bg-indigo-500'
                }`}
            >
                For Sale
            </button>
            <button
                onClick={() => onFilterChange('for-rent')}
                className={`px-4 py-2 rounded border ${
                    activeFilter === 'for-rent'
                        ? 'bg-green-400 text-white'
                        : 'text-black hover:text-white hover:bg-green-400'
                }`}
            >
                For Rent
            </button>
        </div>
    );
};

export default SearchFilters;