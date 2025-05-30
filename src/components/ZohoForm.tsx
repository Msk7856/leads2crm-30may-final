'use client';

import { useEffect } from 'react';

const ZohoForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      function validateEmail6276014000000970005 (){
        var form = document.forms['WebToLeads6276014000000970005'];
        var emailFld = form.querySelectorAll('[ftype=email]');
        for (let i = 0; i < emailFld.length; i++) {
          const emailVal = emailFld[i].value;
          if (emailVal.trim().length !== 0) {
            const atpos = emailVal.indexOf('@');
            const dotpos = emailVal.lastIndexOf('.');
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
              alert('Please enter a valid email address.');
              emailFld[i].focus();
              return false;
            }
          }
        }
        return true;
      }

      function checkMandatory6276014000000970005() {
        const mndFileds = ['Company', 'Last Name'];
        const fldLangVal = ['Company', 'Last Name'];
        for (let i = 0; i < mndFileds.length; i++) {
          const fieldObj = document.forms['WebToLeads6276014000000970005'][mndFileds[i]];
          if (fieldObj) {
            if (fieldObj.value.trim().length === 0) {
              alert(fldLangVal[i] + ' cannot be empty.');
              fieldObj.focus();
              return false;
            }
          }
        }
        if (!validateEmail6276014000000970005()) return false;
        return true;
      }
    `;
    document.body.appendChild(script);
  }, []);

  return (
    <form className='bg-white text-black max-w-[600px] p-6 mx-auto'
      id="webform6276014000000970005"
      action="https://crm.zoho.com/crm/WebToLeadForm"
      name="WebToLeads6276014000000970005"
      method="POST"
      acceptCharset="UTF-8"
      onSubmit={() => {
        // Charset is already set via the acceptCharset attribute in the form
        return (window as any).checkMandatory6276014000000970005?.();
      }}
    >
      <input type="hidden" name="xnQsjsdp" value="1d69b2ef734a52b0ba3b3def420c02645243a742fe017979432af074846600c8" />
      <input type="hidden" name="xmIwtLD" value="85e7bd15ca7c4a9069a590ba0d1724830d0745322fa63d2952623ba0d1c271ed0f1a791868a0974b7953e9c8157e3217" />
      <input type="hidden" name="actionType" value="TGVhZHM=" />
      <input type="hidden" name="returnURL" value="null" />

      <div className="flex flex-col gap-4">
        <input type="text" name="Company" placeholder="Company *" required className="border p-2 rounded" />
        <input type="text" name="First Name" placeholder="First Name" className="border p-2 rounded" />
        <input type="text" name="Last Name" placeholder="Last Name *" required className="border p-2 rounded" />
        <input type="email" name="Email" placeholder="Email" className="border p-2 rounded" />
        <input type="text" name="Mobile" placeholder="Mobile" className="border p-2 rounded" />
        <textarea name="Description" placeholder="Description" className="border p-2 rounded" />

        <div className="flex gap-4">
          <input type="submit" value="Submit" className="bg-blue-600 text-white bg-blue  px-4 py-2 rounded cursor-pointer" /> 
          <input type="reset" value="Reset" className="bg-gray-300 px-4 py-2 rounded cursor-pointer" />
        </div>
      </div>
    </form>
  );
};

export default ZohoForm;
