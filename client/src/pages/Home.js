// client/src/pages/Home.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const carouselImages = [
    "https://images.unsplash.com/photo-1551836022-4c4c79ecde51", // business meeting
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d", // working professionals
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", // remote work setup
    "https://images.unsplash.com/photo-1557804506-669a67965ba0" // handshake networking
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div>
      {/* Carousel Banner */}
      <Slider {...settings} className="mb-8">
        {carouselImages.map((img, idx) => (
          <div key={idx}>
            <div
              className="h-[500px] bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="bg-black bg-opacity-50 text-white p-6 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-2">Job & Networking Portal</h2>
                <p className="text-lg">
                  Connecting talent with opportunities worldwide.
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">About Us</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Welcome to the Job & Networking Portal — your one-stop destination to
          find top career opportunities, connect with professionals, and
          showcase your skills to the world. Our platform bridges the gap
          between employers and job seekers, ensuring a smooth and transparent
          hiring process.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With advanced search features, blockchain-powered verification, and
          a vibrant professional community, we empower you to take control of
          your career journey. Whether you’re a recruiter or a candidate, our
          tools are built to help you succeed.
        </p>
      </section>
    </div>
  );
}

export default Home;
