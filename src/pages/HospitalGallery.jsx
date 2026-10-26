import React from "react";
import { Images } from "lucide-react";
import PageHero from "../components/PageHero";

const hospitalImages = [
  "SKH_7009.JPG",
  "SKH_7012.JPG",
  "SKH_7007.JPG",
  "SKH_7001.JPG",
  "SKH_6998.JPG",
  "SKH_7000.JPG",
  "SKH_6993.JPG",
  "IMG_3396.JPG",
  "IMG_3394.JPG",
  "IMG_3390.JPG",
  "IMG_3387.JPG",
  "IMG_3378.JPG",
  "IMG_3377.JPG",
];

export default function HospitalGallery() {
  return (
    <>
      <PageHero
        eyebrow="OUR HOSPITAL"
        title="Hospital Gallery"
        text="Explore our hospital facilities, clinical spaces and healthcare infrastructure."
      />

      <section className="section">
        <div className="container">
          <div className="sectionTitle">
            {/* <span>
              <Images size={16} /> Hospital Facilities
            </span> */}
            <h2>A closer look at our facilities</h2>
          </div>

          <div className="hospitalGalleryGrid">
            {hospitalImages.map((image, index) => {
              const imageUrl = `/assets/images/hospital-gallery/${image}`;

              return (
                <a
                  key={image}
                  href={imageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hospitalGalleryCard"
                >
                  <img
                    src={imageUrl}
                    alt={`Hospital facility ${index + 1}`}
                    loading="lazy"
                    className="hospitalGalleryImage"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}