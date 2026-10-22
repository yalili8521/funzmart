import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='footer-brand'>
          <h2>FunzyMart</h2>
        </div>
        <nav className='footer-nav'>
          <Link to='/'>Home</Link>
          <Link to='/catalog'>Catalog</Link>
          <Link to='/delivery'>Delivery</Link>
          <Link to='/about'>About</Link>
          <Link to='/contacts'>Contacts</Link>
        </nav>
        <div className="footer-social">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg" alt="Twitter" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg" alt="Instagram" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg" alt="Pinterest" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg" alt="YouTube" />
          </a>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2025 FunzyMart</p>
        <p>Bringing Joy to Your Kids.</p>
      </div>
    </footer>
  )
}
