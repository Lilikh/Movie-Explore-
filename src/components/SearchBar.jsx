import React from 'react';


const SearchBar = ({ query, onQueryChange, onSearch}) => {
  return (
   
   
    <div className="m-4 md:m-10 text-center">
    
    <h2 className="text-2xl mt-28 sm:text-3xl md:text-4xl font-bold text-center text-slate-100 mb-4 md:mb-8">
      Unlimited films, TV programmes and more
    </h2>
    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-slate-100 mb-4 md:mb-8">
      Ready to watch? Enter your movie and find exactly what you are looking for.
    </h4>
    
    <div className="flex flex-col sm:flex-row justify-center items-center">
      <input
        className="p-2 w-full sm:w-8/12 md:w-6/12 lg:w-4/12 rounded-md mb-4 sm:mb-0 sm:mr-2"
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <button 
        onClick={onSearch} 
        className="w-full sm:w-auto rounded-md bg-red-600 p-2 text-slate-100"
      >
        Search
      </button>
    </div>
  </div>
  
  );
};

export default SearchBar;
