import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
const Logo = () => (
  <Link to="/" className="logo">
    <img
      className="collegeLogo"
      src="/assets/images/maa-ganga-college-logo.jpeg"
      alt="Maa Ganga College of Nursing logo"
    />
    <span>
      <strong>Maa Ganga</strong>
      <small>College of Nursing</small>
    </span>
  </Link>
);
function Dropdown({ title, items }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="navDrop"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button onClick={() => setOpen(!open)}>
        {title}
        <ChevronDown size={14} />
      </button>
      {open && (
        <div className="dropdownMenu">
          {items.map(([to, label]) => (
            <NavLink key={to} to={to}>
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
export default function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => setOpen(false), [loc.pathname]);
  return (
    <>
      <div className="topbar">
        <div className="container topbarInner">
          <span>Vasundhara Technical Institute</span>
          <span className="toplinks">
            <a href="tel:07252232371">(07252) 232371</a>
            <a href="mailto:info@maagangacollege.edu">Email</a>
            <Link to="/news">News & Notices</Link>
            <Link to="/contact">Contact</Link>
          </span>
        </div>
      </div>
      <header className="siteHeader">
        <div className="container masthead">
          <Logo />
          <div className="mastheadTitle">
            <span>Vasundhara Technical Institute</span>
            <h1>Maa Ganga College of Nursing</h1>
            <p>Washim, Maharashtra</p>
          </div>
          <div className="headerBadge">
            <div>MG</div>
            <span>
              Professional
              <br />
              Nursing Education
            </span>
          </div>
        </div>
        <div className="navShell">
          <div className="container">
            <button className="mobileMenu" onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
              <span>Menu</span>
            </button>
            <nav className={open ? "mainNav open" : "mainNav"}>
              <NavLink to="/" end>
                Home
              </NavLink>
              <Dropdown
                title="About"
                items={[
                  ["/about", "About Organization"],
                  ["/about/vision", "Vision & Mission"],
                  ["/about/messages", "Messages"],
                  ["/about/approvals", "Approvals & Affiliations"],
                  ["/about/committees", "Committees"],
                  ["/about/conduct", "Code of Conduct"],
                  ["/about/documents", "Documents"],
                ]}
              />
              <Dropdown
                title="Programs"
                items={[
                  ["/programs/bsc-nursing", "B.Sc. Nursing"],
                  ["/programs/post-basic-bsc", "Post Basic B.Sc. Nursing"],
                  ["/programs/gnm", "General Nursing & Midwifery"],
                  ["/programs/anm", "Auxiliary Nursing & Midwifery"],
                ]}
              />
              <Dropdown
                title="Campus"
                items={[
                  ["/facilities", "Facilities"],
                  ["/activities", "Activities"],
                  ["/events", "Events & Gallery"],
                  ["/faculty", "Teaching Staff"],
                ]}
              />
              <NavLink to="/news">News & Notices</NavLink>
              <NavLink to="/feedback">Feedback</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
          </div>
        </div>
      </header>
      <a className="enquiry" href="tel:9022409461">
        <Phone size={16} /> Admission Enquiry
      </a>
    </>
  );
}
export { Logo };
