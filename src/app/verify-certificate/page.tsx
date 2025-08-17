'use client';

import React, { useState } from 'react';
import { db } from '@/lib/firebase'; // ensure this is configured
import { getDoc, doc } from 'firebase/firestore';

export default function VerifyCertificate() {
    const [ref, setRef] = useState('');
    const [dob, setDob] = useState('');
    const [result, setResult] = useState<any>(null);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');
        setResult(null);

        try {
            const certRef = await getDoc(doc(db, 'certificates', ref));
            if (certRef.exists()) {
                const data = certRef.data();
                if (data.dob === dob) {
                    setResult(data);
                } else {
                    setMessage('DOB does not match.');
                }
            } else {
                setMessage('Certificate not found.');
            }
        } catch (err) {
            console.error('Verification error:', err);
            setMessage('Error verifying certificate.');
        }
        finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-20 mb-10 p-2">
            <h1 className="text-2xl text-gray-800 font-bold mb-4">Verify Certificate</h1>
            <form onSubmit={handleVerify} className="space-y-4">
                <input type="text" placeholder="Reference ID" value={ref} onChange={(e) => setRef(e.target.value)} required className="w-full p-2 border rounded" />
                <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required placeholder='DOB' className="w-full p-2 border rounded" />
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full px-4 py-2 rounded text-white ${isLoading ? 'bg-green' : 'bg-green hover:bg-lime-600'}`}
                >
                    {isLoading ? 'Verifying...' : 'Verify'}
                </button>
            </form>

            {message && <p className="mt-4 text-red-500">{message}</p>}

            {result && (
                <div className="mt-6 border p-4 rounded shadow text-black bg-white">
                    <h2 className="text-xl font-bold mb-2">Certificate Details</h2>
                    <p className='text-black'><strong>Name:</strong> {result.fullName}</p>
                    <p className='text-black'><strong>DOB:</strong> {result.dob}</p>
                    <p className='text-black'><strong>Course:</strong> {result.courseTitle} ({result.courseId})</p>
                    <p className='text-black'><strong>Issued At:</strong> {new Date(result.issuedAt).toLocaleDateString()}</p>
                    {result.pdfUrl && <a href={result.pdfUrl} target="_blank" className="text-blue underline mt-2 inline-block">View Certificate</a>}
                </div>
            )}
        </div>
    );
}
