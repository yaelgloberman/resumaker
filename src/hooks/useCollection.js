// useCollection.js
import { useState, useEffect } from "react";
import { useAuth } from './authContext'

export const useCollection = (c) => {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getCollectionData } = useAuth();

  useEffect(() => {
    const fetchCollectionData = async () => {
      try {
        setLoading(true);
        const data = await getCollectionData(c);
        setDocs(data);
        setLoading(false);
      } catch (err) {
        console.error("Fetch collection data error:", err.message);
        setLoading(false);
      }
    };

    fetchCollectionData();
  }, [c, getCollectionData]);

  return { docs, loading };
};