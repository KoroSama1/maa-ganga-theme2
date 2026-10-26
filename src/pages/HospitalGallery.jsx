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
            <span>
              <Images size={16} /> Hospital Facilities
            </span>
            <h2>A closer look at our facilities</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
              marginTop: "28px",
            }}
          >
            {hospitalImages.map((image, index) => {
              const imageUrl = `/assets/images/hospital-gallery/${image}`;

              return (
                <a
                  key={image}
                  href={imageUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "block",
                    overflow: "hidden",
                    borderRadius: "8px",
                    background: "#fff",
                    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={imageUrl}
                    alt={`Hospital facility ${index + 1}`}
                    loading="lazy"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "230px",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <div
                    style={{
                      padding: "12px 14px",
                      color: "#17465b",
                      fontWeight: 600,
                    }}
                  >
                    Hospital Facility {String(index + 1).padStart(2, "0")}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}