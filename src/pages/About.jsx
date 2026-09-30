import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Landmark,
  GraduationCap,
  Building2,
  HeartPulse,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT"
        title="A purpose-led nursing institution"
        text="An institution shaped by education, healthcare and service to communities."
      />

      {/* ABOUT ORGANIZATION */}
      <section className="section">
        <div className="container aboutGrid">
          <div className="prose">
            <span className="eyebrow">ABOUT ORGANIZATION</span>

            <h2>Vasundhara Technical Institute</h2>

            <p>
              Vasundhara Technical Institute has been committed to “EDUCATION IS
              LIFE”. The Society was established in the year 1998 in Maharashtra
              State, under the visionary leadership of Dr. Hatish S. Baheti and
              Mrs. Dr. Saroj H. Baheti with an intention to deliver social
              service through literacy programs, health care programs and
              education including technical, paramedical and professional
              courses, at the lowest cost affordable by students and people of
              the socio-economically and financially backward region of
              Maharashtra.
            </p>

            <p>
              Vasundhara Technical Institute is a Registered Trust under the
              Societies Registration Act 1860 and under Bombay Public Trust Act
              1950.
            </p>

            <p>
              The society grew from a modest beginning to institutions pursuing
              multidisciplinary programmes including Maa Ganga College of
              Nursing (B.Sc. Nursing), Post Basic B.Sc. Nursing, Maa Ganga
              Nursing School (G.N.M.), A.N.M., and other programmes under YCMOU
              Nashik and IGNOU.
            </p>

            <p>
              Its objective has been toward providing professional and technical
              education in rural and remote areas, supported by qualified and
              committed people.
            </p>
          </div>

          {/* INSTITUTIONAL MESSAGE + STATUE */}
          <aside className="aboutAside">
            <div className="quoteMark">“</div>

            <h3>Education is life.</h3>

            <p>
              Providing professional and technical education with a focus on the
              development of students and the communities they serve.
            </p>

            {/* STATUE IMAGE */}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "24px",
                marginBottom: "18px",
              }}
            >
              <img
                src="/assets/images/about-1.JPG"
                alt="Maa Ganga College of Nursing memorial statue"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  height: "300px",
                  objectFit: "contain",
                  objectPosition: "center",
                  display: "block",
                  borderRadius: "4px",
                }}
              />
            </div>

            <Link to="/about/vision" className="underLink">
              Vision & Mission <ArrowRight size={16} />
            </Link>
          </aside>
        </div>
      </section>

      {/* OUR LEADERSHIP */}
      <section className="section softSection">
        <div className="container">
          <SectionTitle
            eyebrow="OUR LEADERSHIP"
            title="Leadership with a commitment to education and service"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "24px",
              maxWidth: "820px",
              margin: "28px auto 0",
            }}
          >
            {/* DIRECTOR */}
            <div
              style={{
                background: "#fff",
                borderRadius: "6px",
                overflow: "hidden",
                textAlign: "center",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.06)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4 / 4.5",
                  overflow: "hidden",
                  background: "#f4f4f4",
                }}
              >
                <img
                  src="/assets/images/director-saraj-baheti.JPG"
                  alt="Dr. Saraj Baheti"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
              </div>

              <div style={{ padding: "14px 20px 16px" }}>
                <h3
                  style={{
                    margin: "0 0 7px",
                    fontSize: "1.25rem",
                  }}
                >
                  Dr. Saraj Baheti
                </h3>

                <span
                  className="eyebrow"
                  style={{
                    display: "block",
                  }}
                >
                  DIRECTOR
                </span>
              </div>
            </div>

            {/* PRESIDENT */}
            <div
              style={{
                background: "#fff",
                borderRadius: "6px",
                overflow: "hidden",
                textAlign: "center",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.06)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4 / 4.5",
                  overflow: "hidden",
                  background: "#f4f4f4",
                }}
              >
                <img
                  src="/assets/images/president-harish-baheti.JPG"
                  alt="Dr. Harish Baheti"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
              </div>

              <div style={{ padding: "14px 20px 16px" }}>
                <h3
                  style={{
                    margin: "0 0 7px",
                    fontSize: "1.25rem",
                  }}
                >
                  Dr. Harish Baheti
                </h3>

                <span
                  className="eyebrow"
                  style={{
                    display: "block",
                  }}
                >
                  PRESIDENT
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLEGE BUILDING */}
      <section className="section softSection">
        <div className="container">
          <SectionTitle
            eyebrow="OUR CAMPUS"
            title="A dedicated environment for nursing education"
          />

          {/* FULL BUILDING IMAGE */}
          <div
            style={{
              width: "100%",
              maxWidth: "1000px",
              margin: "32px auto 0",
              overflow: "hidden",
              borderRadius: "6px",
            }}
          >
            <img
              src="/assets/images/about-2.JPG"
              alt="Maa Ganga College of Nursing building"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "3 / 2",
                objectFit: "contain",
                objectPosition: "center",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="AT A GLANCE"
            title="An institution with a wider social purpose"
          />

          <div className="statCards">
            <div>
              <Landmark />
              <strong>1998</strong>
              <span>Society established</span>
            </div>

            <div>
              <GraduationCap />
              <strong>4</strong>
              <span>Nursing programmes</span>
            </div>

            <div>
              <Building2 />
              <strong>20+</strong>
              <span>Listed facilities</span>
            </div>

            <div>
              <HeartPulse />
              <strong>1</strong>
              <span>Clear focus: nursing education</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
