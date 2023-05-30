export const fetchSuitableProperties = async() => {
    const res = await fetch(`http://localhost:3000/api/getSuitableProperties`);

    const data = await res.json()
    const suitableProperties = data.suitableProperties;

    return suitableProperties;
}