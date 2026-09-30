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
export default function News() {
  const news = seedNews;
  const [q, setQ] = useState("");
  const filtered = useMemo(
    () =>
      news.filter((n) =>
        (n.title + " " + n.category + " " + n.body)
          .toLowerCase()
          .includes(q.toLowerCase()),
      ),
    [news, q],
  );
  return (
    <>
      <PageHero
        eyebrow="NEWS & NOTICES"
        title="College News & Notices"
        text="A dedicated notice-board style page for admissions, announcements, activities and important college updates."
        image="activity-4.jpg"
      />
      <section className="section newsPage">
        <div className="container newsLayout">
          <aside className="newsSide">
            <div className="sideBox">
              <span className="eyebrow">CATEGORIES</span>
              <h3>News board</h3>
              <div className="sidePill active">All Notices</div>
              <div className="sidePill">Admissions</div>
              <div className="sidePill">Campus</div>
              <div className="sidePill">General Notice</div>
            </div>
            <div className="sideBox small">
              <span className="eyebrow">COLLEGE INFORMATION</span>
              <p>Find admissions, academic programmes, campus activities and important institutional information through the sections of this website.</p>
            </div>
          </aside>
          <div className="newsMain">
            <div className="newsToolbar">
              <div>
                <span className="eyebrow">ALL NOTICES</span>
                <h2>{filtered.length} notices</h2>
              </div>
              <label>
                <Search size={17} />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search notices"
                />
              </label>
            </div>
            {filtered.map((n) => (
              <article className="newsRow" key={n.id}>
                <div className="newsDate">
                  <CalendarDays size={18} />
                  <span>{n.date}</span>
                </div>
                <div className="newsBody">
                  <div className="tag">{n.category}</div>
                  <h3>{n.title}</h3>
                  <p>{n.body}</p>
                  <span className="newsRead">
                    Notice / information <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
