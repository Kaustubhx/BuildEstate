export const fetchProperties = async() => {
    const res = await fetch(`http://localhost:3000/api/getProperties`);

    const data = await res.json();
    const properties = data.properties;

    return properties;
}