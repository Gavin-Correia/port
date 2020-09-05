import React from 'react'
import Title from './Title'
import Timeline from './ExperiencesTimelineItem'

export default class Experiences extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Experiences" color='#2c3e50'/>
                <div className="container">
                    <Timeline side="left" time="April 2020 - Present" color="#e67e22">
                        <h4 style={{'color': '#e67e22'}}>Skinzy</h4>
                        <p>
                            <i className="position">Website Developer Intern</i><br/>
                            • Working on the front-end interface of <b>Skinzy</b> Official Website<br/>
                            • Using <b>ReactJS</b> to Build <b>Website</b> <br/>
                            
                        </p>
                    </Timeline> 
                    <Timeline side="right" time="January 2020 – April 2020" color="#3498db">
                        <h4 style={{'color': '#3498db'}}>Skinzy</h4>
                        <p>
                            <i className="position">ReactJS Intern</i><br/>
                            • Worked on the front-end interface of <b>DermaLens App</b><br/>
                            • Tested frontend and used <b>Firebase</b> as back-end<br/>
                            • Worked on <b>Machine Learning</b> to Detect Skin Disease from photo Taken by DermaLens App.<br/>
                            • Used tools like <b>Npm,Git.</b>
                        </p>
                    </Timeline> 
                    <Timeline side="left" time="August 2018 – March 2020" color="#9b59b6">
                        <h4 style={{'color': '#9b59b6'}}>NSS CRCE</h4>
                        <p>
                            <i className="position">President</i><br/>
                         Was Head of <b>National Service Scheme </b>for a Year<br/> <b>Organised Many Social Service Events Like :-</b><br/>
                        • Beach Cleanup<br/>
                        • Blood Donation <br/>
                        • Tree Plantation <br/>
                        • Women Safety Campaign <br/>
                        • Anti-Plac=stic Rally <br/>

                        </p>
                    </Timeline> 
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #bdc3c7;
                        color: #333333;
                        font-size: 1.3em;
                    }
                    h4 {
                        font-size: 1.2em;
                        font-weight: bold;
                    }
                    p {
                        font-size: 0.8em;
                    }
                    i.position {
                        color: #c0392b;
                    }
                `}</style>
            </section>
        )
    }
}