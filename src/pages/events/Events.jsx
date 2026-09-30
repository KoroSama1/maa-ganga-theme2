import React from "react";
import { ArrowRight, Images } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import { events } from "../../data/siteData";

function EventCover({ event }) {
  return (
    <div className="eventCardImage">
      <img src={event.thumbnail} alt={event.title} />

      <div className="eventImageLabel">
        <Images size={15} /> Event Gallery
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <>
      <PageHero
        eyebrow="CAMPUS LIFE"
        title="Events & Gallery"
        text="Explore photographs from college events, celebrations, awareness programmes and student activities."
        image="activity-3.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="sectionTitle">
            <span>College Events</span>
            <h2>Moments from Our Campus</h2>
            <p>
              Explore highlights from college events, celebrations, awareness
              programmes and student activities.
            </p>
          </div>

          <div className="eventGrid">
            {events.map((event) => (
              <article className="eventCard" key={event.id}>
                <EventCover event={event} />

                <div className="eventCardBody">
                  <div className="eventMeta">
                    <Images size={14} /> Event Gallery
                  </div>

                  <h3>{event.title}</h3>

                  <p>{event.description}</p>

                  <Link className="textLink" to={`/events/${event.id}`}>
                    View Gallery <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
