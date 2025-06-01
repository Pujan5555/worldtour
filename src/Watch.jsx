import { useEffect, useState } from "react";

function Watch() {
    const [watch, setWatch] = useState([]);
    useEffect(() => {
        const fetchWatch = async () => {
            try{
                const response = await fetch('watches.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setWatch(data);
                // Assuming the API returns an array of watches
            }
            catch (error) {
                console.error("Error fetching watch data:", error);
            }
        }
        fetchWatch();
    }, []);
    // This is where you would typically fetch data or set up any side effects
    return (
        <div className="watch">
            <h1>Watch: {watch.map(watch => watch.brand)}</h1>
            <p>This is the watch page.</p>
        </div>
    );
}
export default Watch;