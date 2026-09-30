import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Vision from "../pages/Vision";
import Messages from "../pages/Messages";
import Approvals from "../pages/Approvals";
import Committees from "../pages/Committees";
import Conduct from "../pages/Conduct";
import Documents from "../pages/Documents";
import Program from "../pages/Program";
import Facilities from "../pages/Facilities";
import Activities from "../pages/Activities";
import Faculty from "../pages/Faculty";
import News from "../pages/News";
import Feedback from "../pages/Feedback";
import Contact from "../pages/Contact";
import Events from "../pages/events/Events";
import EventGallery from "../pages/events/EventGallery";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/vision" element={<Vision />} />
      <Route path="/about/messages" element={<Messages />} />
      <Route path="/about/approvals" element={<Approvals />} />
      <Route path="/about/committees" element={<Committees />} />
      <Route path="/about/conduct" element={<Conduct />} />
      <Route path="/about/documents" element={<Documents />} />
      <Route path="/programs/:id" element={<Program />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventGallery />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/news" element={<News />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
