import React from "react";
import { Link } from "react-router-dom";
import { IMG } from "../data/siteData";
export default function PageHero({ eyebrow, title, text, image = "hero.jpg" }) {
  return (
    <section
      className="pageHero"
      style={{
        backgroundImage: `linear-gradient(90deg,rgba(2,35,49,.92),rgba(3,54,68,.64),rgba(3,54,68,.18)),url(${IMG + image})`,
      }}
    >
      <div className="container pageHeroInner">
        <span className="eyebrow light">{eyebrow}</span>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
        <div className="crumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{title}</span>
        </div>
      </div>
    </section>
  );
}
