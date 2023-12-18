import { database } from '../firebase/config'
import { doc,collection, getDocs, addDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react';
const Users = () => {
    const [fireAr, setFireAr] = useState([]);
    const getFireData = async () => {
        const ref = collection(database, 'users');
        const snapshot = await getDocs(ref)
        let fire_ar = [];
        snapshot.docs.forEach(item => {
            fire_ar.push({ id: item.id, ...item.data() })
            // console.log(item.id, item.data());
        })
        //setAr(fire_ar);
        console.log(fire_ar);
    };
    const addNewDoc = async () => {
        const ref = collection(database, 'users')
        await addDoc(ref, {
            firstName: "Adina1",
            lastName: "Shculman",
            imageUrl: "adina.png",
            resumeArr: "smalleagletoy"
        })
    };
    const onEditDoc = async (id, updateName) => {
        const ref = doc(database, "users", id)
        await updateDoc(ref, {
            firstName: updateName
        })
    };


    const onDelClick = async (id) => {
        const ref = doc(database, "users", id);
        await deleteDoc(ref);
    }


    return <div>users</div>;
};

export default Users;
