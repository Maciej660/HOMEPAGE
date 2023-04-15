import React from "react";

const Section = ({ title, body, extraHeaderContent }) => (
  <section className="section">
    <h3 className="section__header">{title}</h3>
    {extraHeaderContent}
    <div className="section_body">
      {body}
    </div>
  </section>
);

export default Section;