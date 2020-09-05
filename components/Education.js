import React from 'react'
import Title from './Title'
import Item from './EducationItem'

export default class Education extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Projects" color='#ffffff'/>
                <div className="container">
                <Item 
                        time="January 2020 – April 2020"
                        name="Speech to Emotion Detection System"
                    
                        color="#28FFEB"
                    />


                    <Item 
                        time="December 2019 – January 2020"
                        name="Employee Management App (Java)"
                        
                        color="#2ecc71"
                    />
                    <Item 
                        time="July 2019 – October 2019"
                        name="Smart Attendance"
                        color="#3498db"
                    />
                    <Item 
                        time="July 2019 – October 2019"
                        name="Malaria Detection App"
                        color="#FF5733"
                    />
                   
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #c0392b url('/static/images/bg-edu.jpg');
                        background-size: cover;
                        color: #333333;
                        font-size: 1.3em;
                    }
                `}</style>
            </section>
        )
    }
}