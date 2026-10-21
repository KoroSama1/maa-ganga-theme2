
import React, { useState } from "react";
import { FileText, Download, ChevronDown, ChevronUp } from "lucide-react";
import PageHero from "../components/PageHero";


const mandates = [
  {
    year: "2026-27",
    files: [
      "ANNEXURE- I.pdf",
      "ANNEXURE- II.pdf",
      "ANNEXURE- III.pdf",
      "ANNEXURE-IV.PDF",
      "ANNEXURE-V.pdf",
      "ANNEXURE-VI.pdf",
      "ANNEXURE-VII.pdf",
      "ANNEXURE-VIII.pdf",
      "ANNEXURE-IX.pdf",
      "ANNEXURE-X.pdf",
      "ANNEXURE-XI.pdf",
      "ANNEXURE-XII.pdf",
      "ANNEXURE-XIII.pdf",
      "ANNEXURE-XIII(A).pdf",
      "ANNEXURE-XIV.pdf",
      "ANNEXURE-XV.pdf",
      "ANNEXURE-XVI.pdf",
    ],
  },
  {
    year: "2025-26",
    files: [
      "Annexure- I.pdf",
      "Annexure- II.pdf",
      "Annexure - III.pdf",
      "Annexure - IV.pdf",
      "Annexure - V.pdf",
      "Annexure - VI.pdf",
      "Annexure - VII.pdf",
      "Annexure - VIII.pdf",
      "Annexure - IX.pdf",
      "Annexure - X.pdf",
      "Annexure - XI.pdf",
      "Annexure - XII.pdf",
      "Annexure-XIII.pdf",
      "Annexure-XIII-A.pdf",
      "Annexure - XIV.pdf",
      "Annexure - XV.pdf",
      "Annexure - XVI.pdf",
    ],
  },
  {
    year: "2024-25",
    files: [
      "Annexure I - Seat Matrix.pdf",
      "Annexure II - Infrastructure.pdf",
      "Annexure III - (Trust Deed).pdf",
      "Annexure IV - Library.pdf",
      "Annexure V - Clinical.pdf",
      "Annexure-VI - Teaching Chart Exist and Deficit.pdf",
      "Annexure VII - Subject Wise Approved and Not Approved Teaching Staff.pdf",
      "Annexure VIII - Part Time External Teacher.pdf",
      "Annexure IX - Non-Teaching Staff.pdf",
      "Annexure X - Workshop.pdf",
      "ANNEXURE-13-A.pdf",
      "ANNEXURE-13-B-1.pdf",
    ],
  },
];


export default function MUHSMandate() {
  const [expandedYear, setExpandedYear] = useState("2026-27");

  return (
    <>
      <PageHero
        eyebrow="APPROVALS & COMPLIANCE"
        title="MUHS Mandate"
        text="View and download mandate documents and annexures by academic year."
      />

      <section className="section">
        <div className="container">
          {mandates.map(({ year, files }) => {
            const isExpanded = expandedYear === year;

            return (
              <div
                key={year}
                style={{
                  marginBottom: "18px",
                  border: "1px solid #dce8eb",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() =>
                    setExpandedYear(isExpanded ? null : year)
                  }
                  style={{
                    width: "100%",
                    padding: "22px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "#fff",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span>
                    <strong>MUHS Mandate {year}</strong>
                    <br />
                    <small>{files.length} documents</small>
                  </span>

                  {isExpanded ? <ChevronUp /> : <ChevronDown />}
                </button>

                {isExpanded && (
                  <div
                    style={{
                        padding: "0 22px 20px",
                        maxHeight: "340px",
                        overflowY: "auto",
                    }}
                  >
                    {files.map((file) => {
                      const url =
                        `/assets/docs/muhs/${year}/${encodeURIComponent(file)}`;

                      return (
                        <div
                          key={file}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "12px",
                            padding: "14px 0",
                            borderTop: "1px solid #e8eff1",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              overflowWrap: "anywhere",
                            }}
                          >
                            <FileText size={20} color="#008b98" />
                            {file}
                          </span>

                          <a
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              whiteSpace: "nowrap",
                            }}
                          >
                            <Download size={16} />
                            View PDF
                          </a>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
