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
                        url="https://github.com/thehardwareguy2000/Speech-to-emotion-detection"
                        color="#28FFEB"
                    />


                    <Item 
                        time="December 2019 – January 2020"
                        name="Employee Management App (Java)"
                        url="https://github.com/thehardwareguy2000/Java-Class/tree/master/Project"
                        color="#2ecc71"
                    />
                    <Item 
                        time="August 2019 – september 2019"
                        name="Machine Learning Algorithm Traning"
                        url="https://thehardwareguy2000.github.io/Dwm-project/"
                        color="#FF5733"
                    />
                    <Item 
                        time="July 2019 – October 2019"
                        name="Smart Attendance"
                        url="https://github.com/thehardwareguy2000/Smart-Attendance"
                        color="#3498db"
                    />
                     
                    <Item 
                        time="July 2019 – October 2019"
                        name="Malaria Detection App"
                        url="https://github.com/thehardwareguy2000/Malaria_Detection_app"
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