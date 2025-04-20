import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.logoContainer}>
        <img
          className={styles.viviqdLogo}
          src="/ViviComm-Lite-Atlas/img/fulllogo_transparent_nobuffer.png"
          alt="ViviQD Logo"
          width="350"
        />
      </div>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__subtitle">
          ViviQD - The adventure for life, knowledge and healing.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
      <div className={styles.overviewContainer}>
      <h1 className={styles.overviewTitle}>Overview</h1>
      <p>
        <span style={{ fontWeight: "bold" }}>ViviComm Lite Atlas</span> is the documentation 
        of <span style={{ fontWeight: "bold" }}>ViviComm Lite</span>, 
        a medical AI chatbot for children, designed to
        provide information and support for various health conditions. It is a
        simplified version of the full <span style={{ fontWeight: "bold" }}>ViviComm </span>
        platform, tailored for younger users and their families. 
        The <span style={{ fontWeight: "bold" }}>ViviComm Lite</span> chatbot offers a
        user-friendly interface, engaging content, and interactive features to
        help children understand their health needs and make informed decisions.
        It is a valuable tool for parents and caregivers to provide guidance and
        support with healing. With a focus on education and empowerment,
        <span style={{ fontWeight: "bold" }}> ViviComm Lite</span> aims to improve health literacy and promote well-being
        among children and their caregivers.
      </p>
      
      {/* for the linebreak */}
      <p>
        <span style={{ fontWeight: "bold" }}>ViviQD - The adventure for life, knowledge and healing.</span>
      </p>
    </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
