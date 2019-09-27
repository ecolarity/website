import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer>
            <a class="f2 link dim washed-green dib h2 w2 br-100 mr3 " href="https://www.twitter.com/ecolarity" title="Twitter">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a class="f2 link dim washed-green dib h2 w2 br-100 mr3 " href="https://www.facebook.com/ecolarity" title="Facebook">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>
            <a class="f2 link dim washed-green dib h2 w2 br-100 mr3 " href="https://www.instagram.com/ecolarity" title="Instagram">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
        </footer>
    )
};

export default Footer;