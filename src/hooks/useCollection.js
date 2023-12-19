import { useState, useEffect } from "react";
import { database } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = (c) => {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ref = collection(database, c);

    // Set loading to true when starting to fetch data
    setLoading(true);

    const unSub = onSnapshot(ref, (snapshot) => {
      let fire_ar = [];
      snapshot.docs.forEach(item => {
        fire_ar.push({ id: item.id, ...item.data() });
      });

      // Set loading to false when data is fetched
      setLoading(false);

      setDocs(fire_ar);
    });

    return () => unSub();
  }, [c]);

  return { docs, loading };
};
