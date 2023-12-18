import React, { useEffect, useState } from 'react';
import { useCollection } from '../hooks/useCollection';

export default function FireLiveToys() {
  const { docs: users, loading } = useCollection("users");
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // Check if the data is loaded
    if (!loading && users) {
      console.log("Users:", users);
      setDataLoaded(true);
    }
  }, [loading, users]);

  return (
    <div className='container'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {dataLoaded &&
            users.map(item => (
              <li key={item.id}>name:{item.firstName} lastName:{item.lastName}- resume ar-{item.resumeArr}- image- {item.imgUrl}-id- {item.id}</li>
            ))}
        </ul>
      )}
    </div>
  );
}
