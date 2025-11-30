import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Features from '@site/src/components/Features';
import Heading from '@theme/Heading';
import Translate, { translate } from '@docusaurus/Translate';

import styles from './about.module.css';

function Header() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle"><Translate id="about.tagline">Polish language most important rules</Translate></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/">
            <Translate id="about.cta">Check it out</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function About(): ReactNode {
  return (
    <Layout
      title={translate({id: 'about.pageTitle', message: 'About'})}
      description="Description will go into a meta tag in <head />">
      <Header />
      <main>
        <Features />
      </main>
    </Layout>
  );
}
