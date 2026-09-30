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
export default function Conduct() {
  return (
    <>
      <PageHero
        eyebrow="GOVERNANCE"
        title="Code of Conduct"
        text="Guidelines and standards of conduct for students and staff."
      />
      <section className="section">
        <div className="container docGrid two">
          <a
            className="docCardNew"
            href={DOC + "Code of conduct For-Students.pdf"}
            target="_blank"
            rel="noreferrer"
          >
            <span className="docIcon">
              <ShieldCheck />
            </span>
            <div>
              <span className="docTag">STUDENTS</span>
              <h3>Code of Conduct for Students</h3>
              <span>
                Open PDF <ExternalLink size={14} />
              </span>
            </div>
          </a>
          <a
            className="docCardNew"
            href={DOC + "Code of conduct For Staff.pdf"}
            target="_blank"
            rel="noreferrer"
          >
            <span className="docIcon">
              <ShieldCheck />
            </span>
            <div>
              <span className="docTag">STAFF</span>
              <h3>Code of Conduct for Staff</h3>
              <span>
                Open PDF <ExternalLink size={14} />
              </span>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
