import React from 'react';

const Footer = () => {
  return (
    <mid class="footer">
    <div class="footer-content">
        <div class="footer-section">
            <h4>Let's Get Expose Skills</h4>
            <p>Be Planned, Get Success in Your Fav Domain</p>
            {/* <!-- Social media buttons can be added here --> */}
        </div>
        <div class="footer-section">
            <h4>Useful Links</h4>
            <ul class="footer-links">
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="#">Github</a></li>
                <li><a href="#">Free Products</a></li>
            </ul>
        </div>

    </div>
    <div class="copyright">
        &copy; <span id="get-current-year">2024</span> React JS by <a href="https://www.creative-tim.com">Ganesh and Team</a>
    </div>
</mid>
  );
};

export default Footer;
