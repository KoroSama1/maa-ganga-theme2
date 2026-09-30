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
  Upload,
  Users,
  Building2,
  Trash2,
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
import { useMedia, useFaculty, useNews } from "../components/storage";
export default function Admin() {
  const [tab, setTab] = useState("media");
  const [media, setMedia] = useMedia();
  const [faculty, setFaculty] = useFaculty();
  const [news, setNews] = useNews();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("gallery");
  const [facultyName, setFacultyName] = useState("");
  const [facultyRole, setFacultyRole] = useState("");
  const [newsTitle, setNewsTitle] = useState("");
  const [newsCategory, setNewsCategory] = useState("Admissions");
  const [newsBody, setNewsBody] = useState("");
  const addFiles = (files) => {
    [...files].forEach((file) => {
      const reader = new FileReader();
      reader.onload = () =>
        setMedia((m) => [
          {
            id: crypto.randomUUID(),
            title: title || file.name,
            name: file.name,
            data: reader.result,
            type,
          },
          ...m,
        ]);
      reader.readAsDataURL(file);
    });
    setTitle("");
  };
  const addFaculty = (e) => {
    e.preventDefault();
    const file = e.currentTarget.photo.files[0];
    if (!facultyName || !facultyRole || !file) return;
    const r = new FileReader();
    r.onload = () =>
      setFaculty((f) => [
        {
          id: crypto.randomUUID(),
          name: facultyName,
          role: facultyRole,
          image: r.result,
        },
        ...f,
      ]);
    r.readAsDataURL(file);
    e.currentTarget.reset();
    setFacultyName("");
    setFacultyRole("");
  };
  const addNews = (e) => {
    e.preventDefault();
    if (!newsTitle || !newsBody) return;
    setNews((n) => [
      {
        id: crypto.randomUUID(),
        title: newsTitle,
        category: newsCategory,
        date: new Date().toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        body: newsBody,
      },
      ...n,
    ]);
    setNewsTitle("");
    setNewsBody("");
  };
  return (
    <div className="adminPage">
      <div className="container adminShellNew">
        <aside className="adminSidebar">
          <div className="adminBrand">
            <img
              className="adminCollegeLogo"
              src="/assets/images/maa-ganga-college-logo.jpeg"
              alt="Maa Ganga College of Nursing logo"
            />
            <div>
              <strong>Admin Portal</strong>
              <small>Demo CMS</small>
            </div>
          </div>
          {[
            ["media", ImageIcon, "Media Library"],
            ["faculty", Users, "Faculty Images"],
            ["news", Bell, "News & Notices"],
            ["pages", FileText, "Page Content"],
          ].map(([id, Icon, label]) => (
            <button
              key={id}
              className={tab === id ? "active" : ""}
              onClick={() => setTab(id)}
            >
              <Icon size={17} />
              {label}
            </button>
          ))}
          <Link to="/">← Back to website</Link>
        </aside>
        <section className="adminContent">
          <div className="adminTop">
            <div>
              <span className="eyebrow">DEMO CONTENT MANAGEMENT</span>
              <h1>
                {tab === "media"
                  ? "Media Library"
                  : tab === "faculty"
                    ? "Faculty Images"
                    : tab === "news"
                      ? "News & Notices"
                      : "Page Content"}
              </h1>
              <p>Prototype only — data is stored in this browser.</p>
            </div>
            <span className="demoBadge">DEMO</span>
          </div>
          {tab === "media" && (
            <>
              <div className="adminUpload">
                <div className="uploadSymbol">
                  <Upload />
                </div>
                <div>
                  <h3>Add images to the website</h3>
                  <p>
                    Use this to demonstrate how the client could replace or add
                    photos later. Production will connect this UI to .NET +
                    storage.
                  </p>
                </div>
                <div className="uploadActions">
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Image title (optional)"
                  />
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="gallery">Gallery / page</option>
                    <option value="facility">Facility</option>
                    <option value="faculty">Faculty</option>
                  </select>
                  <label className="btn btnDark">
                    Choose images
                    <input
                      hidden
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => addFiles(e.target.files)}
                    />
                  </label>
                </div>
              </div>
              <div className="adminCards">
                {media.map((m) => (
                  <article key={m.id}>
                    <img src={m.data} />
                    <div>
                      <strong>{m.title || m.name}</strong>
                      <small>{m.type}</small>
                      <button
                        onClick={() =>
                          setMedia((x) => x.filter((y) => y.id !== m.id))
                        }
                      >
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </article>
                ))}
              </div>
              {media.length === 0 && (
                <div className="adminEmpty">
                  <ImageIcon size={30} />
                  <p>No demo uploads yet.</p>
                </div>
              )}
            </>
          )}
          {tab === "faculty" && (
            <>
              <form className="facultyAddForm" onSubmit={addFaculty}>
                <div>
                  <span className="eyebrow">ADD FACULTY</span>
                  <h3>Add a staff photo</h3>
                  <p>
                    This is the client-requested editable faculty image concept.
                  </p>
                </div>
                <input
                  required
                  value={facultyName}
                  onChange={(e) => setFacultyName(e.target.value)}
                  placeholder="Faculty name"
                />
                <input
                  required
                  value={facultyRole}
                  onChange={(e) => setFacultyRole(e.target.value)}
                  placeholder="Designation"
                />
                <input required name="photo" type="file" accept="image/*" />
                <button className="btn btnDark">
                  Add faculty <span className="plusText">+</span>
                </button>
              </form>
              <div className="adminFacultyList">
                {faculty.map((f) => (
                  <article key={f.id}>
                    <div className="miniFaculty">
                      {f.image ? <img src={f.image} /> : <Users />}
                    </div>
                    <div>
                      <strong>{f.name}</strong>
                      <span>{f.role}</span>
                    </div>
                    <button
                      onClick={() =>
                        setFaculty((x) => x.filter((y) => y.id !== f.id))
                      }
                    >
                      <Trash2 size={15} />
                    </button>
                  </article>
                ))}
              </div>
            </>
          )}
          {tab === "news" && (
            <>
              <form className="newsAddForm" onSubmit={addNews}>
                <div>
                  <span className="eyebrow">ADD NOTICE</span>
                  <h3>Create a news / notice item</h3>
                </div>
                <input
                  required
                  value={newsTitle}
                  onChange={(e) => setNewsTitle(e.target.value)}
                  placeholder="Notice title"
                />
                <select
                  value={newsCategory}
                  onChange={(e) => setNewsCategory(e.target.value)}
                >
                  <option>Admissions</option>
                  <option>Campus</option>
                  <option>General Notice</option>
                  <option>Activities</option>
                </select>
                <textarea
                  required
                  value={newsBody}
                  onChange={(e) => setNewsBody(e.target.value)}
                  placeholder="Notice content"
                  rows="4"
                />
                <button className="btn btnDark">
                  Publish demo notice <Bell size={16} />
                </button>
              </form>
              <div className="adminNewsList">
                {news.map((n) => (
                  <article key={n.id}>
                    <div>
                      <span>{n.category}</span>
                      <small>{n.date}</small>
                      <h3>{n.title}</h3>
                      <p>{n.body}</p>
                    </div>
                    <button
                      onClick={() =>
                        setNews((x) => x.filter((y) => y.id !== n.id))
                      }
                    >
                      <Trash2 size={15} /> Remove
                    </button>
                  </article>
                ))}
              </div>
            </>
          )}
          {tab === "pages" && (
            <div className="adminFuture">
              <FileText size={40} />
              <h2>Page content management</h2>
              <p>
                For the client demo, the major page content is supplied in the
                project. In production, this section can manage page headings,
                banners, paragraphs, documents and navigation through the .NET
                backend.
              </p>
              <div className="architecture">
                <span>React Admin</span>
                <ArrowRight />
                <span>.NET API</span>
                <ArrowRight />
                <span>EF Core</span>
                <ArrowRight />
                <span>SQL Server</span>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
