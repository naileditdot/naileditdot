import React from "react";

const caseStudies = [
  {
    id: 1,
    subtitle: "aesthetic",
    title: "define your own look",
    img: "aesthetic"
  },
  {
    id: 2,
    subtitle: "opulent",
    title: "opulence is a second nature",
    img: "goldFoil"
  },
  {
    id: 3,
    subtitle: "mood",
    title: "let your colors flow on your nails",
    img: "colorMood"
  }
];

const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='cases-navigation'>
        </div>
        <div className='row'>
          {caseStudies.map(caseItem => (
            <div className='case' key={caseItem.id}>
              <div className='case-details'>
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className='case-image'>
                <img
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
