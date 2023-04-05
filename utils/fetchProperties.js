
export const fetchProperties = async() => {
    const res = await fetch(`http://localhost:3000/api/getProperties`);

    const data = await res.json()
    console.log(data);
    const fakeProperties = data.properties;

    return fakeProperties;
}