import { query, collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useFetch = (collectionName: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // ----- FIRESTORE REALTIME UPDATES -----
    // goes brrr
    const q = query(collection(db, collectionName));
    const unsub = onSnapshot(q, (querySnapshot) => {
      const dataArray = [];
      querySnapshot.forEach((doc) => {
        const docData = doc.data();
        const d = {
          ...docData,
        };
        dataArray.push(d);
      });
      setData(dataArray);
    });
    return () => unsub();
  }, [collectionName]);

  return { data };
};

export default useFetch;
