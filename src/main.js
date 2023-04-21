import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/featured.css';
import '../styles/components/work.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/components/mobile-nav.css';
import '../styles/utils.css'; // utility classes needs to have the highest priority else it wont work
 import mobileNav from './utils/mobile-nav'; /* 11 */
 import darkMode from './utils/dark-mode';

 import lazyLoading from './utils/lazy-loading';
 
 mobileNav();
 darkMode();
 lazyLoading();