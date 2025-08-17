'use client';

import React, { useState } from 'react';
import { db } from '@/lib/firebase';
import {
    setDoc,
    doc,
    collection,
    query,
    where,
    getDocs,
} from 'firebase/firestore';

function getFormattedDate() {
    const now = new Date();
    return now.toISOString().slice(0, 10).replace(/-/g, ''); // e.g., 20250726
}

export default function RegisterCertificate() {
    const [form, setForm] = useState({
        fullName: '',
        dob: '',
        courseId: '',
        courseTitle: '',
        pdfUrl: '',
    });
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const generateCertificateId = async () => {
        const date = getFormattedDate(); // "20250726"
        const prefix = `CERT-ZCRM-${date}`;
        const certsRef = collection(db, 'certificates');

        // Get all certificates issued on this date
        const q = query(certsRef, where('issuedDate', '==', date));
        const snapshot = await getDocs(q);
        const count = snapshot.size;

        const nextNumber = (count + 1).toString().padStart(4, '0'); // e.g., 0001
        return { certId: `${prefix}-${nextNumber}`, issuedDate: date };
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');
        try {
            const { certId, issuedDate } = await generateCertificateId();

            await setDoc(doc(db, 'certificates', certId), {
                id: certId,
                fullName: form.fullName,
                dob: form.dob,
                courseId: form.courseId,
                courseTitle: form.courseTitle,
                issuedAt: new Date().toISOString(),
                issuedDate: issuedDate, // Store for reference
                pdfUrl: form.pdfUrl || '',
            });

            setMessage(`Certificate registered successfully. Reference ID: ${certId}`);
            setForm({ fullName: '', dob: '', courseId: '', courseTitle: '', pdfUrl: '' });
        } catch (error) {
            console.error('Error saving certificate:', error);
            setMessage('Failed to register certificate.');
        }
        finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-20 mb-10 p-2">
            <h1 className="text-2xl text-gray-800 font-bold mb-4">Register Certificate</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                <input
                    type="date"
                    name="dob"
                    value={form.dob}
                    onChange={handleChange}
                    required
                    placeholder='Date of Birth'
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    name="courseId"
                    placeholder="Course ID"
                    value={form.courseId}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    name="courseTitle"
                    placeholder="Course Title"
                    value={form.courseTitle}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    name="pdfUrl"
                    placeholder="Certificate PDF URL (optional)"
                    value={form.pdfUrl}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full px-4 py-2 rounded text-white ${isLoading ? 'bg-blue' : 'bg-blue hover:bg-blue-700'}`}
                >
                    {isLoading ? 'Registering...' : 'Register'}
                </button>
            </form>
            {message && <p className="mt-4 text-green-600">{message}</p>}
        </div>
    );
}
