const SearchBar = ({ searchTerm, setSearchTerm }) => {
return (
<input
placeholder="Search tasks..."
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}

/>
);
};

export default SearchBar;