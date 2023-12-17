import {createSlice} from "@reduxjs/toolkit";

// הגדרים לסלייס את הסטייט/סטור ההתחלתי שלו
const initValue = {
  counter:88,
  user:"koko 22"
}

const counterSlice = createSlice({
  // name -> שם בזכרון של הסלייס והדיבאגר
  name:"counter",
  // מאפיין שמכיל את הסטייט ההתחלתי של הסלייס
  initialState: initValue,
  // יכיל את הפונקציות/אקשנים שישפיעו על הסטייט של הסלייס
  reducers:{
    add1:(state,actions) => {
      state.counter++;
    },
    resetCounter:(state,actions) => {
      state.counter = 0;
    },
    // actions -> משמש כדי לאסוף פרמטרים מהאקשן
    // ששיגרנו , ותמיד המאפיין של האובייקט יהיה בתוך מאפיין
    // PAYLOAD - מטען
    addCustom:(state,actions) => {
      state.counter += actions.payload.val;
    }
  }
})

// .actions -> מכיל את כל המיטודות/פונצקיות של הסלייס
export const {add1,resetCounter,addCustom} = counterSlice.actions;
// .reducer -> מאפיין בתוך הסלייס שאותו מייצאים לסטור של הפרוביידר
export default counterSlice.reducer;