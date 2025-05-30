import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        firstName: Yup.string().required('First name is required'),
        companyName: Yup.string().required('Company name is required'),
        inquiry: Yup.string().required('Inquiry is required'),
        comments: Yup.string(),
        privacyAgreement: Yup.boolean().oneOf([true], 'You must accept the privacy agreement'),
    });

    const handleSubmit = (values) => {
        console.log('Form submitted:', values);
        onClose(); // Close modal after submission
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          {/* <div className='p-10 bg-mai w-full max-w-xl relative border-md'> */}
          <div className='p-8 bg-mai border border-gray-50 rounded w-full max-w-xl relative'>

            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl relative"> {/* Added 'relative' class */}
                <button
                    type="button"
                    className="absolute top-3 right-3 text-black hover:text-gray-900" // Positioned in relation to the modal
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    {/* <i className="fal fa-times text-xl"></i> Font Awesome X icon */}
                    X
                </button>
                <div className="text-center mb-4">
                    <h4 className="text-xl font-semibold text-black">HAVE A QUESTION?</h4>
                    <span className="text-lg font-semibold text-black">Contact Our Global Locations</span>
                    <p className='text-black'>Give us a call or fill out the form below and we will get back to you as soon as possible.</p>
                </div>

                <Formik
                    initialValues={{
                        email: '',
                        firstName: '',
                        companyName: '',
                        inquiry: '',
                        comments: '',
                        privacyAgreement: false,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-4">
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-black" htmlFor="email">Email Address<span className="text-red-500">*</span></label>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"

                                    // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-black" htmlFor="firstName">First Name<span className="text-red-500">*</span></label>
                                <Field
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs" />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-black" htmlFor="companyName">Company Name<span className="text-red-500">*</span></label>
                                <Field
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <ErrorMessage name="companyName" component="div" className="text-red-500 text-xs" />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-black" htmlFor="inquiry">What are you looking for? *<span className="text-red-500">*</span></label>
                                <Field
                                    as="select"
                                    id="inquiry"
                                    name="inquiry"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="" label="Select option" />
                                    <option value="ERP" label="ERP" />
                                    <option value="CRM" label="CRM" />
                                </Field>
                                <ErrorMessage name="inquiry" component="div" className="text-red-500 text-xs" />
                            </div>

                            <div className="mb-4 col-span-2">
                                <label className="block text-sm font-medium text-black" htmlFor="comments">Comments</label>
                                <Field
                                    as="textarea"
                                    id="comments"
                                    name="comments"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
                                    rows="2"
                                />
                            </div>

                            <div className="mb-4 col-span-2">
                                <Field type="checkbox" name="privacyAgreement" className="mr-2 bg-white" />
                                <label className="text-sm font-medium text-black" htmlFor="privacyAgreement">I accept the privacy agreement<span className="text-red-500">*</span></label>
                                <ErrorMessage name="privacyAgreement" component="div" className="text-red-500 text-xs" />
                            </div>

                            <div className="col-span-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-mai hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                >
                                    Submit
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            </div>
        </div>
    );
};

export default Modal;
