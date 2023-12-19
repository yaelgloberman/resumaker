// import React, { useEffect, useState } from 'react';
// import { useCollection } from '../hooks/useCollection';
// import Firebase from '../firebase/firebase';

// export default function FireLiveToys() {
//   // const { docs: resumes, loading } = useCollection("resumes");
//   const [dataLoaded, setDataLoaded] = useState(false);
//   let loading=null;
//   let resumes=[];
//   let firebase = new Firebase();
//   firebase.getAllResumes().then((resume) => {
//       console.log("resume");
//       console.log(resume);
//       resumes.push(...resume)
//     });

//   useEffect(() => {
//     // Check if the data is loaded
//     if (!loading && resumes) {
//       console.log("resumes:", resumes);
//       setDataLoaded(true);
//     }
//   }, [loading, resumes]);

//   return (
//     <div className='container'>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {dataLoaded &&
//             resumes.map((item) => (
//               <li key={item.id}>
//                 <strong>Resume ID:</strong> {item.id}
//                 <br />
//                 <strong>Education:</strong>
//                 <ul>
//                   {Array.isArray(item.educationArr) && item.educationArr.length > 0 ? (
//                     item.educationArr.map((education, index) => (
//                       <li key={index}>
//                         {Institution: ${education.institution}, Degree: ${education.degree}, Start Date: ${education.startDate}, End Date: ${education.endDate}}
//                       </li>
//                     ))
//                   ) : (
//                     <li>No education data</li>
//                   )}
//                 </ul>
//                 <strong>Work Experience:</strong>
//                 <ul>
//                   {Array.isArray(item.workExperienceArr) && item.workExperienceArr.length > 0 ? (
//                     item.workExperienceArr.map((workExperience, index) => (
//                       <li key={index}>
//                         {Job Title: ${workExperience.jobTitle}, Start Date: ${workExperience.startDate}, End Date: ${workExperience.endDate}}
//                       </li>
//                     ))
//                   ) : (
//                     <li>No work experience data</li>
//                   )}
//                 </ul>
//               </li>
//             ))}
//         </ul>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import Firebase from '../firebase/firebase';

export default function FireLiveToys() {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const firebase = new Firebase();

  useEffect(() => {
    // Fetch resumes when the component mounts
    const fetchResumes = async () => {
      try {
        const resumesData = await firebase.getAllResumes();
        setResumes(resumesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching resumes:', error);
        setLoading(false);
      }
    };

    fetchResumes();
  }, [firebase]);

  return (
    <div className='container'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {resumes.map((item) => (
            <li key={item.id}>
              <strong>Resume ID:</strong> {item.id}
              <br />
              <strong>Education:</strong>
              <ul>
                {Array.isArray(item.educationArr) && item.educationArr.length > 0 ? (
                  item.educationArr.map((education, index) => (
                    <li key={index}>
                      {`Institution: ${education.institution}, Degree: ${education.degree}, Start Date: ${education.startDate}, End Date: ${education.endDate}`}
                    </li>
                  ))
                ) : (
                  <li>No education data</li>
                )}
              </ul>
              <strong>Work Experience:</strong>
              <ul>
                {Array.isArray(item.workExperienceArr) && item.workExperienceArr.length > 0 ? (
                  item.workExperienceArr.map((workExperience, index) => (
                    <li key={index}>
                      {`Job Title: ${workExperience.jobTitle}, Start Date: ${workExperience.startDate}, End Date: ${workExperience.endDate}`}
                    </li>
                  ))
                ) : (
                  <li>No work experience data</li>
                )}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}