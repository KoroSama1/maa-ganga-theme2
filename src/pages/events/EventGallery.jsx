import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Image as ImageIcon } from "lucide-react";
import { events } from "../../data/siteData";

export default function EventGallery() {
  const { id } = useParams();

  const event = events.find((item) => item.id === id);

  if (!event) {
    return (
      <section className="section">
        <div className="container">
          <h1>Event Not Found</h1>
          <Link to="/events">← All Events</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section eventGalleryPage">
      <div className="container">
        <div className="eventGalleryHeader">
          <div>
            <span className="eyebrow">EVENT GALLERY</span>

            <h1>{event.title}</h1>

            <p>{event.description}</p>
          </div>

          <Link to="/events" className="eventBackButton">
            <ArrowLeft size={15} />
            All Events
          </Link>
        </div>

        <div className="eventGalleryGrid">
          {event.images.map((image, index) => (
            <div className="eventGalleryImage" key={image}>
              <img src={image} alt={`${event.title} - Photo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
