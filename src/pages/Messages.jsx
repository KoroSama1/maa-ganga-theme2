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
export default function Messages() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT"
        title="Messages"
        text="Messages from the President and Principal."
      />
      <section className="section">
        <div className="container messageGrid">
          <article className="messageCardNew">
            <div className="messageHead">
              <div className="initial">P</div>
              <div>
                <span className="eyebrow">PRESIDENT DESK</span>
                <h2>Dear Readers & Learner</h2>
              </div>
            </div>
            <p>
              Consistency in improvement, adherence quality and establishment of
              quality standard has been a benchmark for our institutions since
              inspection. We intended to care for quality infrastructure,
              quality facilities and quality teaching. Each year comes with a
              new hope with new batch of student having zeal for significant
              achievement in the year to come.
            </p>
            <p>
              We extend a hearty welcome at our campus to all the aspiring
              students. It is assurance from us to you, that your study at POOJA
              NURSING COLLEGE will be memorable one. We assure you of providing
              a perfect learning atmosphere at our campus.
            </p>
          </article>
          <article className="messageCardNew">
            <div className="messageHead">
              <div className="initial">P</div>
              <div>
                <span className="eyebrow">PRINCIPAL DESK</span>
                <h2>Dear Readers & Learner</h2>
              </div>
            </div>
            <p>
              This college has been establishment to provide platform for the
              candidates interested in nursing as a career. We aim to provide a
              high quality, skilled & oriented education to meet the needs of
              society as a whole.
            </p>
            <p>
              The institution seeks to prepare nurses to promote, maintain and
              restore an optimal level of wellness. Nursing education focuses on
              critical thinking, decision-making, analysis, enquiry and
              research.
            </p>
            <p>
              Our faculty believe that learning is independent, life long
              process; learning is an opportunity for teacher-student
              interaction in setting apprising progress.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
