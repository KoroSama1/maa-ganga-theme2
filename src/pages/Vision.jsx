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
export default function Vision() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT"
        title="Vision, Mission & Philosophy"
        text="Our vision, mission, philosophy, aims and objectives."
      />
      <section className="section">
        <div className="container">
          <div className="statementGrid">
            <article>
              <span className="statementIcon">
                <Sparkles />
              </span>
              <span className="eyebrow">VISION</span>
              <h2>Centre of excellence</h2>
              <p>
                To establish a center of excellence for imparting hospital
                relevant education to produce professionals fully equipped with
                skill to accomplish the objective entrusted upon them.
              </p>
            </article>
            <article>
              <span className="statementIcon">
                <Activity />
              </span>
              <span className="eyebrow">MISSION</span>
              <h2>Quality education under one roof</h2>
              <p>
                Imparting quality education and training under one roof and
                creating prospective competitive and dedicated team members &
                ambassadors for health-status of the nations.
              </p>
            </article>
          </div>
          <div className="philosophy">
            <span className="eyebrow">PHILOSOPHY</span>
            <h2>Education for complete development</h2>
            <p>
              We realize that education is fundamental for the complete
              development of individuals. As a premier teaching institute we
              endeavor to harness this inherent potential through meeting the
              growing needs of higher education.
            </p>
            <p>
              As we grow we will expand into new technologies, methodologies,
              discipline, resources and ever attitudes. Society believes in all
              round development of the students health care managements.
            </p>
            <p>
              We believe that Nursing graduates of this institute will achieve
              highest professional growth and development and contribute in
              upgrading the profession.
            </p>
          </div>
          <div className="aimObjective">
            <div>
              <span className="eyebrow">AIMS</span>
              <h2>Prepare nurse graduates</h2>
              <ul>
                <li>
                  Assume responsibilities as professional competent nurse and
                  midwife in providing holistic care.
                </li>
                <li>
                  Assume role of care provider, manager, supervisor, teacher and
                  researcher in different health care set ups.
                </li>
              </ul>
            </div>
            <div>
              <span className="eyebrow">OBJECTIVES</span>
              <h2>Professional competence</h2>
              <p>
                On completion of the four years degree course, graduates are
                expected to provide comprehensive nursing care, contribute as
                members of health teams, use nursing processes, utilize latest
                trends and technology, practice within ethical and legal
                boundaries, participate in research and contribute to the
                advancement of health care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
