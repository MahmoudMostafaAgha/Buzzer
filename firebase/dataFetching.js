
import { collection, getDocs } from "firebase/firestore";

const fetchData = async () => {
  try {

      // User is authenticated, proceed with fetching data
      const querySnapshot = await getDocs(collection("Restaurants")); // Use firestore instead of db
      const restaurants = [];
      querySnapshot.forEach(doc => {
        restaurants.push({
          id: doc.id,
          data: doc.data()
        });
      });
      return restaurants;
  
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchData;
