import React from 'react'
import Title from './Title'
import Group from './SkillItemGroup'
import circle from './../static/css/circle.css'

export default class Skills extends React.Component {
    render() {
        const skillImgs = [
            {
                name: 'Languages',
                list: [
                    { name: 'Python', color: '#78E0EA', value: '100' },
                    { name: 'javascript', color: '#f0db4f', value: '100' },
                    { name: 'Java', color: '#1e77b7', value: '100' },
                    { name: 'C', color: '#AFAAB4', value: '100' },
                    { name: 'html5', color: '#f16529', value: '100' }              
                   
                ]
            },
            {
                name: 'Frameworks',
                list: [
                    { name: 'nodejs', color: '#81ca2a', value: '100' },  
                    { name: 'reactjs', color: '#61DBFB', value: '100' },         
                    { name: 'bootstrap', color: '#473080', value: '100' },
                    { name: 'flask', color: '#646464', value: '100' },
                    { name: 'reactnative', color: '#61DBFB', value: '100'}
                   
                ]
            },
            {
                name: 'Databases',
                list: [
                    { name: 'postgres', color: '#0784af', value: '100' },
                    { name: 'mongodb', color: '#ffcb2c', value: '100' },
                    { name: 'mysql', color: '#2c8ebb', value: '100' },
                    { name: 'firebase', color: '#f0db4f', value: '100' },
                ]
            },
            {
                name: 'Tools',
                list: [
                    { name: 'docker', color: '#0db7ed', value: '100' },
                    { name: 'yarn', color: '#2c8ebb', value: '100' },
                    { name: 'npm', color: '#cb3736', value: '100' },
                    { name: 'git', color: '#F1502F', value: '100' },
                    
                ]
            } 
        ]

        return (
            <section className="hero wrapper has-text-centered">
                <style dangerouslySetInnerHTML={{ __html: circle }} />
                <Title title="Skills" color='#ffffff'/>
                <div className="container">
                    {
                        skillImgs.map((item, key) => (
                            <Group key={key} name={item.name} items={item.list} />    
                        ))
                    }
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #2f353f;
                        background-size: cover;
                        color: #333333;
                        font-size: 1.3em;
                    }
                `}</style>
            </section>
        )
    }
}