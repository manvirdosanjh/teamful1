import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Teamful',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Teamful makes the dream full.</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p></p>
            </div>

            <div className={css.contentMain}>
              <h2>
              From cooking classes to escape rooms, paint nights, and evenings in the city, we help you create opportunities to come together and learn about one another outside of the office.
              </h2>

              <p>
               
              </p>

              <h3 className={css.subtitle}></h3>

              <p>
            
              </p>

              <h3 id="contact" className={css.subtitle}>
            
              </h3>
              <p>
                Inspire employees, challenge comfort zones, and build team trust with unique activities and experiences on{' '}
                <ExternalLink href="https://www.teamful.co/s">Teamful</ExternalLink>.
              </p>
                <p>
                  Book an activity by date, size, and cost per person. Message providers directly. Book instantly.
                </p>
              <p>
                You can also checkout our{' '}
                <ExternalLink href="https://instagram.com/teamful">Instagram</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>
              <br></br>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
