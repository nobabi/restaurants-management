import { useEffect, useState } from "react";

const useMenu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch('http://localhost:5000/menu')  // Fetch data from the backend server
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to load menu.json");
                }

                return response.json();
            })
            .then((data) => {
                setMenuItems(data);   // Take all data
            })
            .catch((error) => {
                console.error("Error fetching menu:", error);
                setError("Failed to load menu.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return {
        menuItems,
        loading,
        error
    };
};

export default useMenu;