import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  FileText,
  HeartPulse,
  Image as ImageIcon,
  Landmark,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  Building2,
  GraduationCap,
  Activity,
  Mail,
} from "lucide-react";
import {
  IMG,
  DOC,
  programs,
  facilities,
  activities,
  committees,
  docs,
  seedFaculty,
  seedNews,
} from "../data/siteData";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
export default function Home() {
  const news = seedNews;
  const gallery = [
    IMG + "campus-1.jpg",
    IMG + "lecture.jpg",
    IMG + "activity-3.jpg",
    IMG + "campus-2.jpg",
    IMG + "library.jpg",
    IMG + "activity-1.jpg",
  ];
  const [heroSlide, setHeroSlide] = useState(0);
  const heroImages = ["hero.jpg", "campus-1.jpg"];

  useEffect(() => {
    const timer = setInterval(
      () => setHeroSlide((current) => (current + 1) % heroImages.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="homeHero">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={"heroSlide " + (index === heroSlide ? "active" : "")}
            style={{ backgroundImage: `url(${IMG + image})` }}
          />
        ))}
        <div className="heroOverlay" />

        <div className="container heroContent">
          <img
            className="heroLogo"
            src="/assets/images/maa-ganga-college-logo.jpeg"
            alt="Maa Ganga College of Nursing"
          />
          <span className="heroTag">WELCOME TO</span>
          <h2>
            MAA GANGA<br />
            <span>COLLEGE OF NURSING</span>
          </h2>
          <p>WASHIM, MAHARASHTRA</p>
          <div className="heroButtons">
            <Link className="btn btnGold" to="/programs/bsc-nursing">
              Apply / Explore Programs <ArrowRight size={18} />
            </Link>
            <Link className="btn btnOutline" to="/about">
              Explore College
            </Link>
          </div>
        </div>

        <div className="heroDots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={"heroDot " + (index === heroSlide ? "active" : "")}
              onClick={() => setHeroSlide(index)}
              aria-label={`Show hero slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      <div className="noticeBar">
        <div className="container noticeInner">
          <span className="noticeLabel">
            <Bell size={16} /> News & Notices
          </span>
          <div className="noticeText">
            <strong>{news[0]?.title}</strong>
            <span>Explore the latest college information</span>
          </div>
          <Link to="/news">
            View all <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      <section className="section introSection">
        <div className="container introGrid">
          <div className="introVisual">
            <img src={IMG + "campus-1.jpg"} />
            <div className="yearBadge">
              <span>Since</span>
              <strong>1998</strong>
            </div>
          </div>
          <div>
            <span className="eyebrow">ABOUT THE ORGANIZATION</span>
            <h2>Education that serves the community.</h2>
            <p>
              Vasundhara Technical Institute has been committed to “EDUCATION IS
              LIFE”. The Society was established in 1998 in Maharashtra under
              the visionary leadership of Dr. Hatish S. Baheti and Mrs. Dr.
              Saroj H. Baheti, with an intention to deliver social service
              through literacy, health care and education.
            </p>
            <p>
              The organization works toward professional and technical education
              in rural and remote areas while supporting the intellectual,
              physical and professional development of students.
            </p>
            <Link className="underLink" to="/about">
              Read about the organization <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section softSection">
        <div className="container">
          <SectionTitle
            eyebrow="ACADEMIC PROGRAMS"
            title="Choose your nursing pathway"
            text="Four programmes are listed by the institution, each with its own eligibility and admission requirements."
          />
          <div className="programCards">
            {Object.entries(programs).map(([id, p], i) => (
              <Link className="programCardNew" to={"/programs/" + id} key={id}>
                <span className="cardNumber">0{i + 1}</span>
                <div className="programIcon">
                  <Stethoscope size={22} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.short}</p>
                <span className="duration">{p.duration}</span>
                <ArrowUpRight className="cardArrow" size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="sectionRow">
            <SectionTitle
              eyebrow="CAMPUS LIFE"
              title="Learning beyond the classroom"
              text="Explore the campus, learning spaces and student activities."
            />
            <Link className="underLink" to="/facilities">
              View all facilities <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mosaic">
            {gallery.map((src, i) => (
              <div className={"mosaicItem m" + i} key={src}>
                <img src={src} />
                {i === 0 && (
                  <div className="mosaicCaption">
                    <span>Campus</span>
                    <strong>Learning spaces built for students</strong>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section valuesSection">
        <div className="container valuesGrid">
          <div>
            <span className="eyebrow">OUR APPROACH</span>
            <h2>Professional learning with a human focus.</h2>
            <p>
              The college's philosophy emphasizes complete development,
              professional growth, critical thinking, research and the ability
              to contribute to health-care delivery.
            </p>
          </div>
          <div className="valueList">
            <div>
              <CheckCircle2 />
              <div>
                <strong>Quality education</strong>
                <span>
                  Learning grounded in professional values and core
                  competencies.
                </span>
              </div>
            </div>
            <div>
              <CheckCircle2 />
              <div>
                <strong>Clinical readiness</strong>
                <span>
                  Skills and knowledge connected to hospital and community
                  settings.
                </span>
              </div>
            </div>
            <div>
              <CheckCircle2 />
              <div>
                <strong>Service mindset</strong>
                <span>
                  Preparing graduates to contribute to health and society.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section newsPreview">
        <div className="container">
          <div className="sectionRow">
            <SectionTitle
              eyebrow="NEWS & NOTICES"
              title="What belongs on the notice board"
              text="A structured space for admissions, announcements, activities and downloadable notices."
            />
            <Link className="btn btnDark" to="/news">
              Open News & Notices <ArrowRight size={17} />
            </Link>
          </div>
          <div className="newsCards">
            {news.slice(0, 3).map((n) => (
              <article key={n.id} className="newsCard">
                <div className="newsMeta">
                  <span>{n.category}</span>
                  <small>{n.date}</small>
                </div>
                <h3>{n.title}</h3>
                <p>{n.body}</p>
                <Link to="/news">
                  Read notice <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="admissionStrip">
        <div className="container admissionInner">
          <div>
            <span className="eyebrow light">ADMISSIONS</span>
            <h2>Find the right programme for your next step.</h2>
            <p>
              Eligibility and document requirements are organized programme-wise
              for easy reference.
            </p>
          </div>
          <Link className="btn btnGold" to="/programs/bsc-nursing">
            View admission details <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
