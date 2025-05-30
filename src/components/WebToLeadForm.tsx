// 'use client';

// import { useState } from 'react';

// export default function WebToLeadForm() {
//   const [isDisabled, setIsDisabled] = useState(false);

//   const validateEmail = (email: string): boolean => {
//     const trimmed = email.trim();
//     const atpos = trimmed.indexOf('@');
//     const dotpos = trimmed.lastIndexOf('.');
//     return !(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= trimmed.length);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     const form = e.currentTarget;
//     const company = form.Company.value.trim();
//     const lastName = form['Last Name'].value.trim();
//     const email = form.Email.value.trim();

//     if (!company || !lastName) {
//       alert(`${!company ? 'Company' : 'Last Name'} cannot be empty.`);
//       e.preventDefault();
//       return;
//     }

//     if (email && !validateEmail(email)) {
//       alert('Please enter a valid email address.');
//       e.preventDefault();
//       return;
//     }

//     setIsDisabled(true);
//   };

//   return (
//     <div className="bg-black text-white max-w-md mx-auto p-4 rounded-md shadow-lg py-10">
//       <form
//         id="webform6276014000000970005"
//         action="https://crm.zoho.com/crm/WebToLeadForm"
//         method="POST"
//         onSubmit={handleSubmit}
//         acceptCharset="UTF-8"
//         name="WebToLeads6276014000000970005"
//       >
//         {/* Hidden Inputs */}
//         <input type="hidden" name="xnQsjsdp" value="1d69b2ef734a52b0ba3b3def420c02645243a742fe017979432af074846600c8" />
//         <input type="hidden" name="zc_gad" id="zc_gad" value="" />
//         <input type="hidden" name="xmIwtLD" value="85e7bd15ca7c4a9069a590ba0d1724830d0745322fa63d2952623ba0d1c271ed0f1a791868a0974b7953e9c8157e3217" />
//         <input type="hidden" name="actionType" value="TGVhZHM=" />
//         <input type="hidden" name="returnURL" value="null" />

//         <div className="text-lg font-light text-center mb-4 text-lightGreen">
//           BOOK A FREE CONSULTATION
//         </div>

//         {[ 
//           { label: 'Company', name: 'Company', required: true },
//           { label: 'First Name', name: 'First_Name' , required: true},
//           { label: 'Last Name', name: 'Last_Name', required: true },
//           { label: 'Email', name: 'Email',required: true },
//           { label: 'Mobile', name: 'Mobile',required: true },
          
//         ].map(({ label, name, required }) => (
//           <div key={name} className="flex flex-col mb-4">
//             <label htmlFor={name} className="text-xs font-medium text-lightGreen mb-1">
//               {label} {required && <span className="text-red-500">*</span>}
//             </label>
//             <input
//               type="text"
//               id={name}
//               name={label === 'Email' ? 'Email' : name.replace('_', ' ')}
//               className="w-full px-3 py-2 bg-black border border-lightGreen rounded-md text-lightGreen placeholder-lightGreen text-sm focus:outline-none focus:ring-1 focus:ring-lightGreen transition-all duration-300"
//               maxLength={label === 'Email' ? 100 : 200}
//               placeholder={label}
//             />
//           </div>
//         ))}

//         <div className="flex flex-col mb-4">
//           <label htmlFor="Description" className="text-xs font-medium text-lightGreen mb-1">
//             Description
//           </label>
//           <textarea
//             id="Description"
//             name="Description"
//             className="w-full px-3 py-2 bg-black border border-lightGreen rounded-md text-lightGreen placeholder-lightGreen text-sm focus:outline-none focus:ring-1 focus:ring-lightGreen transition-all duration-300"
//             rows={3}
//             placeholder="Tell us more about your needs"
//           ></textarea>
//         </div>

//         <div className="flex space-x-4 mt-4 justify-center">
//           <input
//             type="submit"
//             className="bg-green text-black py-2 px-6 rounded-md text-sm shadow-md hover:scale-105 focus:outline-none focus:ring-1 focus:ring-lightGreen transition duration-300"
//             value="Submit"
//             disabled={isDisabled}
//           />
//           <input
//             type="reset"
//             className="bg-slate-200 text-blue py-2 px-6 rounded-md text-sm shadow-md hover:scale-105 focus:outline-none focus:ring-1 focus:ring-lightGreen transition duration-300"
//             value="Reset"
//           />
//         </div>
//       </form>
//     </div>
//   );
// }






'use client';

import { useState } from 'react';

export default function WebToLeadForm() {
  const [isDisabled, setIsDisabled] = useState(false);

  const validateEmail = (email: string): boolean => {
    const trimmed = email.trim();
    const atpos = trimmed.indexOf('@');
    const dotpos = trimmed.lastIndexOf('.');
    return !(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= trimmed.length);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const company = form.Company.value.trim();
    const lastName = form.Last_Name.value.trim();
    const email = form.Email.value.trim();

    if (!company || !lastName) {
      alert(`${!company ? 'Company' : 'Last Name'} cannot be empty.`);
      e.preventDefault();
      return;
    }

    if (email && !validateEmail(email)) {
      alert('Please enter a valid email address.');
      e.preventDefault();
      return;
    }

    setIsDisabled(true);
  };

  return (
    <div className="bg-black text-white max-w-md mx-auto p-4 rounded-md shadow-lg py-10">
      <form
        id="webform6276014000000970005"
        action="https://crm.zoho.com/crm/WebToLeadForm"
        method="POST"
        onSubmit={handleSubmit}
        acceptCharset="UTF-8"
        name="WebToLeads6276014000000970005"
      >
        {/* Hidden Inputs */}
        <input type="hidden" name="xnQsjsdp" value="1d69b2ef734a52b0ba3b3def420c02645243a742fe017979432af074846600c8" />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input type="hidden" name="xmIwtLD" value="85e7bd15ca7c4a9069a590ba0d1724830d0745322fa63d2952623ba0d1c271ed0f1a791868a0974b7953e9c8157e3217" />
        <input type="hidden" name="actionType" value="TGVhZHM=" />
        <input type="hidden" name="returnURL" value="null" />

        <div className="text-lg font-light text-center mb-4 text-lightGreen">
          BOOK A FREE CONSULTATION
        </div>

        {/* Input Fields */}
        {[
          { label: 'Company', name: 'Company', required: true },
          { label: 'First Name', name: 'First_Name', required: true },
          { label: 'Last Name', name: 'Last_Name', required: true },
          { label: 'Email', name: 'Email', required: true },
          { label: 'Mobile', name: 'Mobile', required: true },
        ].map(({ label, name, required }) => (
          <div key={name} className="flex flex-col mb-4">
            <label htmlFor={name} className="text-xs font-medium text-lightGreen mb-1">
              {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              id={name}
              name={name}
              className="w-full px-3 py-2 bg-black border border-lightGreen rounded-md text-lightGreen placeholder-lightGreen text-sm focus:outline-none focus:ring-1 focus:ring-lightGreen transition-all duration-300"
              maxLength={name === 'Email' ? 100 : 200}
              placeholder={label}
              required={required}
            />
          </div>
        ))}

        {/* Description Field */}
        <div className="flex flex-col mb-4">
          <label htmlFor="Description" className="text-xs font-medium text-lightGreen mb-1">
            Description
          </label>
          <textarea
            id="Description"
            name="Description"
            className="w-full px-3 py-2 bg-black border border-lightGreen rounded-md text-lightGreen placeholder-lightGreen text-sm focus:outline-none focus:ring-1 focus:ring-lightGreen transition-all duration-300"
            rows={3}
            placeholder="Tell us more about your needs"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-4 justify-center">
          <input
            type="submit"
            className="bg-green text-black py-2 px-6 rounded-md text-sm shadow-md hover:scale-105 focus:outline-none focus:ring-1 focus:ring-lightGreen transition duration-300"
            value="Submit"
            disabled={isDisabled}
          />
          <input
            type="reset"
            className="bg-slate-200 text-blue py-2 px-6 rounded-md text-sm shadow-md hover:scale-105 focus:outline-none focus:ring-1 focus:ring-lightGreen transition duration-300"
            value="Reset"
          />
        </div>
      </form>
    </div>
  );
}
