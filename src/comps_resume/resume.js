
// import { db } from '../firebase/config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import React from 'react'
const Resume = () => {

    // const getFireData = async () => {
    //     const ref = collection(db, 'toys');
    //     const snapshot = await getDocs(ref)
    //     let fire_ar = [];
    //     snapshot.docs.forEach(item => {
    //         fire_ar.push({ id: item.id, ...item.data() })
    //         // console.log(item.id, item.data());
    //     })
    //     //setAr(fire_ar);
    //     console.log(fire_ar);
    // }

    // const addNewDoc = async () => {
    //     const ref = collection(db, 'toys')
    //     await addDoc(ref, {
    //         educationArr: "eagle.jpg",
    //         workExperienceArr: "new eagle toy"
    //     })



    // }
    // const onDelClick = async (id) => {
    //     const ref = doc(db, "resumes", id);
    //     await deleteDoc(ref);
    // }
    // const onEditDoc = async (id, updateTitle) => {
    //     const ref = doc(db, "toys", id)
    //     await updateDoc(ref, {
    //         title: updateTitle
    //     })}

        return (
            <div>Resume</div>
        )
        }
        export default Resume