import React, { Component } from "react";

class Education extends Component {
  render() {
    if (!this.props.resumeEducation || !this.props.resumeBasicInfo) {
      return null;
    }

    const sectionName = "Education"; 

    var educationList = this.props.resumeEducation.map(function (education, i) {
      var educationLogo = education.logo; 

      return (
        <div className="education-item" key={i}> 
          <div className="education-logo-container"> 
            <img 
                src={educationLogo} 
                alt={education.university + " logo"} 
                className="education-university-logo" 
            />
          </div>
          <div className="education-content-stacked"> 
            <div className="education-header-group">
              <h3 className="education-university">{education.university}</h3>
            </div>
            <h4 className="education-degree">{education.degree}</h4>
            <span className="education-years">{education.years}</span>
            <p className="education-gpa">
              GPA: {education.gpa}
            </p>
          </div>
        </div>
      );
    });

    return (
      <section id="education" className="pb-5">
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
        <div className="col-md-8 mx-auto education-list-container">
          {educationList}
        </div>
      </section>
    );
  }
}

export default Education;