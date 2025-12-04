import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;

      var skillSections = this.props.sharedSkills.sections.map(function (section, sectionIndex) {
        var skills = section.icons.map(function (skill, i) {
          return (
            <li className="list-inline-item custom-skill-item" key={sectionIndex + '-' + i}> 
              <span>
                <div className="text-center skills-tile">
                  <i className={skill.class} style={{ fontSize: "300%" }}>
                    <p
                      className="text-center"
                      style={{ fontSize: "40%", marginTop: "4px" }}
                    >
                      {skill.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        });

        return (
          <div key={sectionIndex}>
            <h3 style={{ marginTop: "20px", paddingLeft: "15px" }}> 
              <span className="text-dark">{section.name}</span>
            </h3>
            <div className="skill-list-container"> 
              <ul className="list-inline skill-icon">{skills}</ul>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="heading">{sectionName}</span>
            </h1>
          </div>
          {skillSections}
        </div>
      </section>
    );
  }
}

export default Skills;