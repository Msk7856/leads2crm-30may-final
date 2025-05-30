// import Image from 'next/image';

// const testimonials = [
//   {
//     id: 1,
//     name: 'Abdul',
//     position: 'Director, SA Technology',
//     text: '“This solution has transformed the way we manage public services. Highly recommended!”',
//     imageUrl: '/images/msk.jpg', // Path to the profile image
//   },
//   {
//     id: 2,
//     name: 'Arin Smith',
//     position: 'Head of Innovation, Department of Defense',
//     text: '“The professionalism and expertise shown by the team is unmatched. A true asset to our operations.”',
//     imageUrl: '/images/msk.jpg',
//   },
//   {
//     id: 3,
//     name: 'Ismail ',
//     position: 'Manager, Boeing',
//     text: '“An exceptional partnership that has driven results and efficiency across our initiatives.”',
//     imageUrl: '/images/msk.jpg',
//   },
// ];

// export default function TestimonialSection() {
//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="container mx-auto text-center px-6">
//         {/* Section Title */}
//         <h2 className="text-3xl font-extrabold text-gray-800 mb-4">What Our Partners & Clients Are Saying</h2>
//         <p className="text-lg text-gray-600 mb-12">Endorsed by Government Agencies and Organizations Across the Globe</p>

//         {/* Testimonial Cards */}
//         <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className="bg-white shadow-lg rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl"
//             >
//               <div className="flex justify-center mb-6">
//                 <Image
//                   src={testimonial.imageUrl}
//                   alt={testimonial.name}
//                   width={80}
//                   height={80}
//                   className="rounded-full border-4 border-gray-200"
//                 />
//               </div>
//               <p className="text-lg italic text-gray-700 mb-4">"{testimonial.text}"</p>
//               <div className="mt-4">
//                 <p className="font-semibold text-gray-800">{testimonial.name}</p>
//                 <p className="text-sm text-gray-600">{testimonial.position}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
//2

import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Abdul',
    position: 'Director, SA Technology',
    text: '";This solution has transformed the way we manage public services. Highly recommended! ";',
    imageUrl: '/images/msk.jpg', // Path to the profile image
  },
  {
    id: 2,
    name: 'Arin Smith',
    position: 'Head of Innovation, Department of Defense',
    text: '"The professionalism and expertise shown by the team is unmatched. A true asset to our operations. "',
    imageUrl: '/images/msk.jpg',
  },
  {
    id: 3,
    name: 'Ismail ',
    position: 'Manager, Boeing',
    text: '"An exceptional partnership that has driven results and efficiency across our initiatives."',
    imageUrl: '/images/msk.jpg',
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-extrabold text-black mb-4">What Our Partners & Clients Are Saying</h2>
        <p className="text-lg text-black mb-12">Endorsed by Government Agencies and Organizations Across the Globe</p>

        {/* Testimonial Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="flex justify-center mb-6">
                <Image
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-gray-200"
                />
              </div>
              <p className="text-lg italic text-gray-700 mb-4">{testimonial.text}</p>
              <div className="mt-4">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
