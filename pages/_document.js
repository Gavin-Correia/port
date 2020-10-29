import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <head>
                <link rel="shortcut icon" href="/static/images/icons8-cv-64.png" type="image/x-icon"></link>
                    <title>Gavin's Resume</title>
                    
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href="https://fonts.googleapis.com/css?family=Questrial" rel="stylesheet" />
                    <link rel="stylesheet" href="/static/css/bulma.css" />
                </head>
                <body>
                    {this.props.customValue}
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}