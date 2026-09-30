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
export default function Approvals() {
  return (
    <>
      <PageHero
        eyebrow="DOCUMENTS"
        title="Approvals & Affiliations"
        text="View approvals and affiliation documents for the nursing programmes."
      />
      <section className="section">
        <div className="container docGrid">
          {docs
            .filter(
              (d) =>
                !d[0].startsWith("Code") &&
                !d[0].startsWith("Governing") &&
                !d[0].startsWith("Organization") &&
                !d[0].startsWith("Prospectus"),
            )
            .map(([label, file]) => (
              <a
                className="docCardNew"
                href={DOC + file}
                target="_blank"
                rel="noreferrer"
                key={file}
              >
                <span className="docIcon">
                  <FileText />
                </span>
                <div>
                  <span className="docTag">OFFICIAL DOCUMENT</span>
                  <h3>{label}</h3>
                  <span>
                    Open PDF <ExternalLink size={14} />
                  </span>
                </div>
              </a>
            ))}
        </div>
      </section>
    </>
  );
}
