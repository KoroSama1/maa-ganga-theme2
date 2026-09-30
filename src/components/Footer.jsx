import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Header";
export default function Footer() {
  return (
    <footer>
      <div className="container footerGrid">
        <div>
          <Logo />
          <p className="footerIntro">
            Education is life. The institution works toward quality nursing
            education and professional development in rural and remote areas.
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <Link to="/about">About Organization</Link>
          <Link to="/programs/bsc-nursing">Programs</Link>
          <Link to="/facilities">Facilities</Link>
          <Link to="/faculty">Teaching Staff</Link>
          <Link to="/news">News & Notices</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            <MapPin size={16} /> Maa Ganga Memorial Baheti Hospital Campus,
            Akola Naka, Tq. & Dist. Washim – 444505
          </p>
          <p>
            <Phone size={16} /> (07252) 232371
          </p>
          <p>
            <Phone size={16} /> 9022409461 · 9158550742
          </p>
          <p>
            <Mail size={16} /> maaganganursing@gmail.com
          </p>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          © {new Date().getFullYear()} Maa Ganga College of Nursing
        </div>
      </div>
    </footer>
  );
}
