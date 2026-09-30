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

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="Contact the college"
        text="Reach Maa Ganga College of Nursing, Washim."
        image="campus-1.jpg"
      />

      <section className="section">
        <div className="container contactGridNew">
          <div className="contactInfo">
            <div className="contactItem">
              <span>
                <MapPin />
              </span>
              <div>
                <span className="eyebrow">ADDRESS</span>
                <p>
                  Maa Ganga Memorial Baheti Hospital Campus, Akola Naka, Tq. &
                  Dist. Washim – 444505
                </p>
              </div>
            </div>

            <div className="contactItem">
              <span>
                <Phone />
              </span>
              <div>
                <span className="eyebrow">PHONE</span>
                <p>
                  (07252) 232371
                  <br />
                  9022409461 · 9158550742
                </p>
              </div>
            </div>

            <div className="contactItem">
              <span>
                <Mail />
              </span>
              <div>
                <span className="eyebrow">EMAIL</span>
                <p>maaganganursing@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mapPanel">
            <iframe
              title="Maa Ganga College of Nursing Location"
              src="https://www.google.com/maps?q=Maa+Ganga+College+of+Nursing,+Akola+Naka,+Washim,+Maharashtra+444505&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                display: "block",
                minHeight: "360px",
              }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
