/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="site-footer">
        <div className="site-footer-nav">
          <svg className="logo" viewBox="0 0 144 145">
            <path d="M144 75.1895C144.11 75.1895 109.181 55.3393 109.078 54.7555C108.288 50.5363 107.293 43.5693 102.474 39.9651C98.3274 36.8903 70.3332 24.2017 70.2779 24.0694C65.1235 16.3912 60.5558 8.34592 56.6125 0C52.8678 2.7776 49.822 6.36738 47.7112 10.4913C45.6004 14.6152 44.4811 19.1626 44.4401 23.7813C30.6883 25.7236 17.7814 31.4827 7.22763 40.3855C34.5979 34.2047 42.4811 39.9028 42.4811 39.9028C33.5202 41.476 24.8855 44.5009 16.9277 48.8549C5.26076 55.1758 0 62.7656 0 62.7656C0 62.7656 26.4934 55.3004 46.8256 62.5632C37.3441 63.8814 28.5306 68.1274 21.6513 74.6913C63.7928 79.8368 84.5752 115.879 93.3194 145C96.5343 93.2026 70.3648 73.5314 70.3648 73.5314C77.9637 74.0686 87.5215 79.8913 93.6354 88.5553C112.277 86.4847 122.657 92.1128 122.57 92.1128C122.364 92.1128 132.649 88.999 139.9 85.7062C139.276 84.7799 136.654 81.565 135.161 79.7668C135.366 79.7823 141.101 79.4476 144 75.1895ZM85.7916 52.2645C86.2024 52.1633 95.3337 49.6333 97.9404 50.6064C100.31 51.486 100.357 58.1339 100.357 58.1339C100.357 58.1339 94.9466 58.8812 85.7916 52.2645Z" fill="currentcolor"/>
          </svg>
          <nav>
            <ul>
              <li>
                <h5>Legal</h5>
                <ul>
                  <li><a href="/docs/topics/legal-overview">Terms overview</a></li>
                  <li><a href="/docs/topics/legal-developers-terms">Developer's terms</a></li>
                  <li><a href="/docs/topics/legal-app-terms">App terms</a></li>
                  <li><a href="http://www.overwolf.com/legal/"  target="_blank">Overwolf terms</a></li>
                  <li><a href="http://www.overwolf.com/legal/#Privacy-policy" target="_blank">Overwolf Privacy policy</a></li>
                </ul>
              </li>
              <li>
                <h5>Support</h5>
                <ul>
                  <li><a href="https://discuss.overwolf.com/" target="_blank">Questions and Answers</a></li>
                  <li><a href="https://discord.gg/overwolf-developers" target="_blank">Discord</a></li>
                  <li><a href="/docs/support/contact-us#join-our-slack">Slack</a></li>
                  <li><a href="https://www.facebook.com/OverwolfDevs" target="_blank">Facebook</a></li>
                  <li><a href="https://twitter.com/OverwolfDevs" target="_blank">Twitter</a></li>
                </ul>
              </li>
              <li>
                <h5>Documentation</h5>
                <ul>
                  <li><a href="/docs/api/changelog">Changelog</a></li>
                  <li><a href="/docs/api/overwolf-api-overview">API</a></li>
                  <li><a href="/docs/start/app-creation-process">App Creation Process</a></li>
                  <li><a href="/docs/topics/best-practices-overview">Best Practices</a></li>
                  <li><a href="/docs/status/all">Game Events status</a></li>
                </ul>
              </li>
              <li>
                <h5>Information</h5>
                <ul>
                  <li><a href="http://www.overwolf.com/careers/">Careers</a></li>
                  <li><a href="https://overwolf.com/fund" target="_blank">Fund</a></li>
                  <li><a href="https://medium.com/overwolf" target="_blank">Developers Blog</a></li>
                  <li><a href="https://www.overwolf.com/appstore" target="_blank">Overwolf Appstore</a></li>        
                  <li><a href="https://brands.overwolf.com/" target="_blank">Advertise on Overwolf</a></li>        
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="site-footer-social">
        <div className="site-footer-social-inner">
          <div className="copyright">
            <span>Overwolf 2022</span>
            <ul className="social-links">
            <li><a href="https://discord.gg/overwolf-developers" title="Discord" target="_blank">
              <svg viewBox="0 0 24 24">
                  <path d="M19.9986 15.9081C19.8859 16.0133 19.7958 16.1185 19.6831 16.2027C18.7367 16.8341 17.7227 17.3182 16.6411 17.6971C16.3933 17.7812 16.1229 17.8654 15.8525 17.9286C15.537 17.4866 15.199 17.0867 14.9962 16.5816C15.1314 16.5184 15.2215 16.4763 15.3342 16.4342C15.6271 16.2869 15.9426 16.1606 16.2355 16.0133C16.2581 16.0133 16.3031 15.9712 16.3031 15.9712C16.213 15.9081 16.1003 15.8239 16.0102 15.7818C13.3062 16.9183 10.6248 16.8762 7.92078 15.7818C7.83065 15.8449 7.76305 15.9081 7.65038 16.0133C8.10105 16.2238 8.52918 16.4132 8.97984 16.6237C8.70944 17.1077 8.43905 17.5287 8.12358 17.9075C8.07851 17.9075 8.05598 17.9075 8.05598 17.9075C6.68145 17.5287 5.41959 16.9183 4.24787 16.1606C4.15773 16.0764 4.09013 15.9922 4 15.9081C4 15.0872 4.02253 13.6771 4.15773 12.5616C4.36053 10.7936 5.21679 9.19403 6.25332 7.69968C6.36599 7.53131 6.50119 7.42607 6.70399 7.34188C7.44758 7.04722 8.19118 6.81571 8.97984 6.64733C9.22771 6.58419 9.49811 6.54209 9.76851 6.5C9.85864 6.64733 10.1516 7.15246 10.2192 7.27874C11.436 7.15246 12.6302 7.15246 13.802 7.27874L14.2977 6.52105C15.3567 6.68942 16.3933 6.98408 17.3847 7.38398C17.5425 7.44712 17.6551 7.55235 17.7453 7.67864C18.8494 9.23612 19.6831 10.8988 19.8859 12.772C20.0211 14.1401 19.9986 15.1083 19.9986 15.9081ZM10.76 12.7931C10.76 12.4984 10.7149 12.33 10.6022 12.0775C10.1741 11.2356 9.00238 11.0041 8.32638 11.8039C7.74052 12.4774 7.83065 13.4245 8.50665 13.9717C8.97984 14.3506 9.52064 14.3927 10.0614 14.077C10.5572 13.7612 10.7374 13.3193 10.76 12.7931ZM16.0778 12.8352C16.0778 12.4984 15.9877 12.2248 15.8525 11.9722C15.5821 11.5303 15.1539 11.2777 14.6131 11.2987C14.0949 11.3198 13.6893 11.5724 13.4414 12.0143C13.171 12.5195 13.1485 13.0246 13.4414 13.5297C13.847 14.2664 14.8385 14.561 15.6046 13.8875C15.9426 13.5929 16.0553 13.193 16.0778 12.8352Z" fill="currentcolor"/>
              </svg></a></li>
          <li><a href="https://www.reddit.com/r/Overwolf/" title="Reddit" target="_blank">
              <svg viewBox="0 0 24 24">
                  <path d="M12.3338 8.57431C14.1735 8.63508 15.8736 9.08438 17.375 10.111C17.5562 9.98515 17.7133 9.84624 17.8944 9.75291C19.0642 9.13647 20.5089 9.86577 20.7075 11.1681C20.8275 11.9603 20.4522 12.733 19.7472 13.1281C19.6883 13.1606 19.6665 13.1889 19.6818 13.2605C19.9589 14.5585 19.6338 15.7154 18.8416 16.7572C18.1803 17.6276 17.3161 18.2484 16.334 18.7129C15.3978 19.1557 14.4114 19.4313 13.3835 19.5572C12.5411 19.6592 11.6943 19.6657 10.8476 19.5767C9.75202 19.4617 8.70012 19.1817 7.70496 18.7085C6.58759 18.1767 5.63826 17.4474 4.95955 16.4012C4.45324 15.622 4.22191 14.769 4.27865 13.8444C4.28956 13.6577 4.32666 13.4732 4.3594 13.2887C4.37249 13.2171 4.35722 13.1802 4.29175 13.1454C3.59994 12.7743 3.22675 12.0189 3.27695 11.3113C3.34023 10.4345 4.01895 9.74856 4.73913 9.59012C5.42876 9.43818 6.04418 9.59446 6.55922 10.0893C6.60942 10.1393 6.63997 10.1371 6.69453 10.1002C7.70278 9.4143 8.81142 8.96934 10.0095 8.7588C10.5158 8.66981 11.0331 8.63508 11.5459 8.58299C11.6223 8.57431 11.6529 8.5526 11.6681 8.48097C11.8427 7.69524 12.0173 6.90951 12.1941 6.12378C12.384 5.26641 12.576 4.41123 12.7659 3.55604C12.8117 3.35201 12.9841 3.24565 13.1936 3.29123C14.3524 3.54301 15.5135 3.79479 16.6723 4.05092C16.7421 4.06611 16.7749 4.05526 16.8098 3.99231C17.1262 3.44534 17.7438 3.17836 18.3767 3.30642C18.9529 3.42363 19.4199 3.9272 19.5028 4.51975C19.6294 5.41401 18.883 6.21277 17.9773 6.15633C17.2463 6.11075 16.6898 5.58114 16.6221 4.85618C16.6112 4.74983 16.5785 4.70859 16.4672 4.68471C15.4393 4.46115 14.4114 4.23107 13.3857 4.00317C13.3791 4.00099 13.3726 4.00534 13.3464 4.00751C13.0103 5.52037 12.6742 7.03974 12.3338 8.57431ZM10.2583 13.3777C10.2583 12.5746 9.61671 11.9343 8.80487 11.9278C8.00395 11.9213 7.33396 12.5833 7.33396 13.3799C7.33396 14.1916 7.98212 14.8385 8.79178 14.8363C9.61671 14.8363 10.2605 14.1982 10.2583 13.3777ZM15.2014 14.8385C16.0132 14.8428 16.657 14.2047 16.6657 13.3885C16.6745 12.5963 16.0176 11.9343 15.2057 11.9299C14.3634 11.9256 13.7261 12.6267 13.737 13.3755C13.7479 14.1938 14.3786 14.8341 15.2014 14.8385ZM11.9693 17.8034C12.6677 17.8251 13.3245 17.734 13.9662 17.5212C14.4223 17.3693 14.8544 17.1826 15.2101 16.8505C15.376 16.6943 15.3912 16.4685 15.2472 16.3209C15.1032 16.1733 14.8849 16.1907 14.7082 16.3318C14.5358 16.4685 14.3568 16.6074 14.1604 16.6964C13.4577 17.0155 12.7026 17.1002 11.9387 17.1045C11.4434 17.1067 10.9545 17.0394 10.4722 16.9178C10.0335 16.8071 9.62108 16.6509 9.28499 16.334C9.11477 16.1733 8.8878 16.1733 8.74159 16.3296C8.60628 16.475 8.62374 16.6943 8.78742 16.8505C9.01656 17.0676 9.28063 17.2304 9.57307 17.3498C10.3478 17.671 11.1531 17.836 11.9693 17.8034Z" fill="currentcolor" />
              </svg></a></li>
          <li><a href="https://www.facebook.com/OverwolfDevs" title="Facebook" target="_blank">
              <svg viewBox="0 0 24 24">
                  <path d="M10.933 18.9545L10.933 12.2045H8.72729V9.95453H10.933V8.74628C10.933 6.45859 12.0254 5.45453 13.8892 5.45453C14.7819 5.45453 15.254 5.52203 15.4773 5.55297V7.70453H14.2063C13.415 7.70453 13.1387 8.13034 13.1387 8.99322V9.95453H15.4574L15.1426 12.2045H13.1387L13.1387 18.9545H10.933Z" fill="currentcolor" />
              </svg></a></li>
          <li><a href="https://www.linkedin.com/company/overwolf.com/" title="LinkedIn" target="_blank">
              <svg viewBox="0 0 24 24">
                  <path d="M9.19565 16.5002H6.75L6.75 9.34115H9.19565L9.19565 16.5002ZM7.97332 8.38661C7.29685 8.38661 6.75 7.85159 6.75 7.19295C6.75 6.53431 7.29783 6.00024 7.97332 6.00024C8.64734 6.00024 9.19565 6.53527 9.19565 7.19295C9.19565 7.85159 8.64734 8.38661 7.97332 8.38661ZM18 16.5002H15.6488L15.6488 13.0162C15.6488 12.1852 15.6326 11.1166 14.4264 11.1166C13.2021 11.1166 13.0138 12.0215 13.0138 12.956V16.5002H10.663L10.663 9.3359H12.9199V10.3148H12.9517C13.2657 9.75161 14.0332 9.15788 15.1777 9.15788C17.5598 9.15788 18 10.6417 18 12.5709V16.5002Z" fill="currentcolor" />
              </svg></a></li>
          <li><a href="https://twitter.com/OverwolfDevs" title="Twitter" target="_blank">
              <svg viewBox="0 0 24 24">
                  <path d="M18 8.65409C17.5583 8.85021 17.0839 8.98218 16.5859 9.04171C17.0945 8.73715 17.4845 8.25493 17.6682 7.67997C17.1928 7.96191 16.6657 8.1668 16.1045 8.27754C15.6555 7.79902 15.0158 7.5 14.3078 7.5C12.9482 7.5 11.8461 8.60241 11.8461 9.96138C11.8461 10.1543 11.8682 10.3425 11.9098 10.522C9.86385 10.4196 8.05008 9.43948 6.83535 7.94991C6.62398 8.31354 6.5026 8.73623 6.5026 9.18799C6.5026 10.0417 6.93689 10.7952 7.59732 11.2364C7.19395 11.2234 6.81412 11.1127 6.48229 10.9286C6.48229 10.9392 6.48229 10.9489 6.48229 10.9595C6.48229 12.1523 7.33056 13.1472 8.45714 13.3729C8.25084 13.4292 8.033 13.4592 7.80824 13.4592C7.64994 13.4592 7.49533 13.4435 7.34533 13.4153C7.65871 14.3932 8.5679 15.1052 9.64509 15.125C8.80282 15.7854 7.74132 16.179 6.58752 16.179C6.38906 16.179 6.19292 16.1674 6 16.1444C7.08965 16.8425 8.38329 17.25 9.77385 17.25C14.3023 17.25 16.7779 13.4993 16.7779 10.2466C16.7779 10.14 16.7756 10.0338 16.771 9.92816C17.2523 9.58068 17.67 9.14738 18 8.65409Z" fill="currentcolor" />
              </svg></a></li>
            </ul>
          </div>
            </div>
        </div>
    </footer>
    );
  }
}

module.exports = Footer;
