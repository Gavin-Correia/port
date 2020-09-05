import React from 'react'
import Head from 'next/head'
import Header from './../components/Header'
import About from './../components/About'
import Experiences from './../components/Experiences'
import Education from './../components/Education'
import Skills from './../components/Skills'
import { useMatomo } from '@datapunt/matomo-tracker-react'

// const { trackPageView, trackEvent } = useMatomo()
export default class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            mounted: false
        }
    }

    componentDidMount() {
        // trackPageView()
        this.setState({mounted:true})
    }

    render() {
        if (this.state.mounted) {
            return (
                <main>
                   <Header />
                   <About />
                   
                   <Experiences />
                   <Education />
                   <Skills />
                   
                   <style jsx global>{`
                        body {
                            font-family: 'Questrial', sans-serif;
                        }
                    `}</style>
                </main>
            )
        } else {
            return (
                <section className="hero is-light is-fullheight has-text-centered">
                <div className="hero-body">
                  <div className="container">
                    <h1 className="title">Hey, I am Gavin and here is my Resume,Coming Up !!! </h1>
                  </div>
                </div>
              </section>
            )
        }
    } 
}