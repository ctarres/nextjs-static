import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'

export default ({ children, settings = {} }) => (
  <div>
    <Head />
    <Nav settings={settings} />
    <div className="util__container">
      {children}
    </div>

    <style jsx global>{`
      article, aside, footer, header, hgroup, main, nav, section {
        display: block;
      }

      body {
        font-family: 'Roboto', sans-serif;
        line-height: 1;
        font-size: 18px;
        color: #fff;
        background-color: #113f67;
        margin: 0;
        padding: 0;
      }

      .util__flex {
        display: flex;
      }

      .util__flex-col {
        flex: 0 0 auto;
      }

      .util__flex-eq {
        flex: 1;
      }

      .util__container {
        max-width: 75rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
      }

      #nprogress .bar {
        background: #29d;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      .know-more {
        margin-top: 1em;
        color: #fff;
        text-decoration: none;
        font-size: 2em;
        text-transform: lowercase;
        letter-spacing: 2px;
      }

      h1 {
        margin: .25em 0;
        font-size: 10em;
      }

      h2 {
        font-size: 1.5em;
        font-weight: 200;
      }
      @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
      @-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
      @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

      .fade-in {
        opacity:0;  /* make things invisible upon start */
        -webkit-animation:fadeIn ease-in 1;  /* call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */
        -moz-animation:fadeIn ease-in 1;
        animation:fadeIn ease-in 1;

        -webkit-animation-fill-mode:forwards;  /* this makes sure that after animation is done we remain at the last keyframe value (opacity: 1)*/
        -moz-animation-fill-mode:forwards;
        animation-fill-mode:forwards;

        -webkit-animation-duration:1s;
        -moz-animation-duration:1s;
        animation-duration:1s;
      }

      .fade-in.one {
        -webkit-animation-delay: 0.3s;
        -moz-animation-delay: 0.3s;
        animation-delay: 0.3s;
      }
      .fade-in.two {
        -webkit-animation-delay: 0.7s;
        -moz-animation-delay: 0.7s;
        animation-delay: 0.7s;
      }
      .fade-in.three {
        -webkit-animation-delay: 1.6s;
        -moz-animation-delay: 1.6s;
        animation-delay: 1.6s;
      }
    `}</style>
  </div>
)