import { app } from "./firebaseInitialize";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const db = getFirestore(app);

// Get a list of platos from the database
async function getDishes() {
  const dishes = collection(db, 'platos');
  const dishesSnapshot = await getDocs(dishes);
  const dishesList = dishesSnapshot.docs.map(doc => doc.data());
  return dishesList;
}

export default getDishes