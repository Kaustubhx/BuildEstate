export const fetchFilteredProperties = async() => {
    const res = await fetch(`http://localhost:3000/api/getFilteredProperties`);

    const data = await res.json()
    const filteredProperties = data.filteredProperties;

    return filteredProperties;
}