import getDishes from "./firebase/firebase";

export const fetchData = {
    fetch: async () => {
        const response = await getDishes();
        return response;
      }
};


