import BookDemoIntro from "@/components/BookDemo/intro";
import BookDemoForm from "@/components/BookDemo/index";
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Book a Demo - Maiprosoft",
  description: "Book a demo for our services tailored for the German government",
};

const BookDemoPage = () => {
  return (

    <>
    
      <Breadcrumb
        pageName="Book a Demo"
        description="Schedule a personalized demo with us to explore solutions ."
      />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Introduction */}
          <BookDemoIntro/>

          {/* Right Column - Form */}
          <BookDemoForm/>
        </div>
      </div>
    </>
  );
};

export default BookDemoPage;
