// import { Feature } from "@/types/feature";

// const SingleFeature = ({ feature }: { feature: Feature }) => {
//   const { icon, title, paragraph } = feature;
//   return (
//     <div className="w-full">
//       <div className="wow fadeInUp" data-wow-delay=".15s">
//         <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
//           {icon}
//         </div>
//         <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//           {title}
//         </h3>
//         <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
//           {paragraph}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SingleFeature;

import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
        data-wow-delay=".15s"
      >
        <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary mx-auto">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl text-center">
          {title}
        </h3>
        <p className="text-base font-medium text-gray-600 dark:text-gray-300 leading-relaxed text-center">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
