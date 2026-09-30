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
export default function Feedback() {
  return (
    <>
      <PageHero
        eyebrow="FEEDBACK"
        title="Share your feedback"
        text="We welcome feedback from students, parents, faculty and visitors."
      />
      <section className="section">
        <div className="container formWrap">
          <form
            className="formCard"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for your feedback.");
            }}
          >
            <div className="formGrid">
              <input required placeholder="Full name" />
              <input required type="email" placeholder="Email address" />
              <select defaultValue="Student">
                <option>Student</option>
                <option>Faculty</option>
                <option>Parent / Guardian</option>
                <option>Visitor</option>
              </select>
              <input placeholder="Phone number" />
              <textarea required rows="6" placeholder="Your feedback" />
            </div>
            <button className="btn btnDark">
              Submit feedback <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
