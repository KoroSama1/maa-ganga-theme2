import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
export default function Program() {
  const { id } = useParams();
  const p = programs[id] || programs["bsc-nursing"];
  return (
    <>
      <PageHero eyebrow="PROGRAMS" title={p.title} text={p.short} />
      <section className="section">
        <div className="container programLayout">
          <div>
            <div className="programLead">
              <span className="eyebrow">PROGRAM OVERVIEW</span>
              <h2>{p.short}</h2>
              <p className="leadText">
                {p.duration} programme listed by the institution.
              </p>
            </div>
            <div className="contentBlock">
              <span className="eyebrow">ELIGIBILITY</span>
              <h2>Who can apply</h2>
              <ul>
                {p.eligibility.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="contentBlock">
              <span className="eyebrow">DOCUMENTS REQUIRED</span>
              <h2>Admission checklist</h2>
              <div className="checkGrid">
                {p.docs.map((x, i) => (
                  <div key={i}>
                    <CheckCircle2 size={16} />
                    <span>{x}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <aside className="programAside">
            <div className="durationBox">
              <span>COURSE DURATION</span>
              <strong>{p.duration}</strong>
            </div>
            <div className="asideImage">
              <img
                src={
                  IMG +
                  (id === "bsc-nursing"
                    ? "clinical-1.jpg"
                    : id === "gnm"
                      ? "activity-1.jpg"
                      : "lecture.jpg")
                }
              />
            </div>
            <h3>Need admission information?</h3>
            <p>
              Use the Contact page or the admission enquiry button for current
              information.
            </p>
            <a className="btn btnDark" href="tel:9022409461">
              Call for enquiry <Phone size={16} />
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
