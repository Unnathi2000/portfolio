import React, { Component } from "react";
class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = "PROFESSIONAL EXPERIENCE";

      var work = this.props.resumeExperience.map(function (work, i) {
        
        let descriptionPoints;
        if (work.description) {
          descriptionPoints = work.description.split('. ').map((point, k) => {
            if (point) {
              return <li key={k}>{point.endsWith('.') ? point : point + '.'}</li>;
            }
            return null;
          });
        }

        const companyLogo = work.logo ? (
          <div className="experience-logo-container">
            <img src={work.logo} alt={`${work.company} logo`} className="experience-company-logo" />
          </div>
        ) : null;

        return (
          <div className="experience-item" key={i}>
            {companyLogo}
            <div className="experience-content-right">
              <div className="experience-header-group">
                <h3 className="experience-title">{work.title}</h3>
                <span className="experience-years">{work.years}</span>
              </div>
              <h4 className="experience-company">{work.company}</h4>

              <ul className="experience-description-list">
                {descriptionPoints}
              </ul>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h2 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h2>
            <div className="divider-custom"></div>
          </div>
        </div>
        <div className="col-md-8 mx-auto experience-list-container">
          {work}
        </div>
      </section>
    );
  }
}

export default Experience;