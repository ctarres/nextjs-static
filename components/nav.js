import React from 'react'
import Link from 'next/link'
import '../styles.scss'

const links = [
  { href: '/', label: 'Home'},
  { href: '/about', label: 'About me' },
  { href: '/projects', label: 'My projects' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: 'Roboto', sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: .5em 1.25em;
      }
      a {
        padding: 0 .75em;
        color: #fff;
        text-decoration: none;
        font-size: .9em;
        letter-spacing: 3px;
        text-transform: lowercase;
        background:
            linear-gradient(
              to bottom, #65c6c4 0%,
              #65c6c4 100%
            );
          background-position: 0 100%;
          background-repeat: repeat-x;
          background-size: 4px 4px;
        transition: background-size .2s;
        line-height: 38px;
      }
      a:hover,
      a:active {
        background-size: 4px 50px;
      }
      a:active {
        background: #65c6c4;
      }
    `}</style>
  </nav>
)

export default Nav
