
const filters = ['Relevant', 'Low to High', 'High to Low'];

function DropDownMenu({sortBy,handleChange}) {

    const change = (e) => {
        handleChange(e.target.value);
    }

    return (
        <select onChange={change} value={sortBy} className="border border-gray-400 px-4 py-3">
            {filters.map((filter, i) => (
                <option key={i} value={filter.toLowerCase().replace(/\s/g, '-')}>
                    {filter}
                </option>
            ))}
        </select>
    );
}

export default DropDownMenu;