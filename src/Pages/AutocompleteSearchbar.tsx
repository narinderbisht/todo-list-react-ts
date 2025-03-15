import {useState, useEffect, ChangeEvent} from 'react'

const AutocompleteSearchbar = () => {
  interface searchResultsData {
    recipes: any[];
    skip: number;
    limit: number;
    total: number;
  };
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<searchResultsData>({ recipes: [], skip: 0, limit: 0, total: 0 });
  const [loading, setLoading] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }
  useEffect(() => {
    if (!searchTerm) return;
    
    setLoading(true);
    console.log(searchTerm);
    const fetchResults = async () => { 
      
      const response = await fetch(`https://dummyjson.com/recipes/search?q=${searchTerm}`).then(response => response.json());
      console.log(response);
      setSearchResults(response);
      setLoading(false);
    };

    const results = setTimeout(fetchResults, 1000);
    return () => clearTimeout(results);

  }, [searchTerm]);
  return (
    
    <div className="w-full max-w-xl mx-auto border-1 border-gray-300 rounded-lg shadow-lg text-center p-4">
        <h1 className="text-2xl font-semibold text-center">Autocomplete Search App</h1>
        <form className="w-full max-w-xl mx-auto p-4">
          <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Search..." value={searchTerm} onChange={handleChange} />
      </form>
      <div className="w-full max-w-xl mx-auto p-4 max-h-50 overflow-y-auto">
        {loading && <p className="text-2xl"><i className="fa-solid fa-spinner fa-spin"></i></p>}
        {searchResults?.recipes && searchResults.recipes.map((recipe: { name: string }, index: number) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 my-2">
            <h2 className="text-lg font-semibold">{recipe.name}</h2>
          </div>
        ))}
      </div>
    </div>    
  )
}

export default AutocompleteSearchbar