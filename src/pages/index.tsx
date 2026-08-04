import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader(): ReactNode {
  return (
    <header className={styles.hero}>
      <div className="container">
        <p className={styles.eyebrow}>TECHNICAL WRITING PORTFOLIO</p>

        <Heading as="h1" className={styles.heroTitle}>
          Documentation that helps people get things done.
        </Heading>

        <p className={styles.heroSubtitle}>
          Projects, playbooks, and practical insights focused on API
          documentation, release communication, content design, and
          documentation systems.
        </p>

        <div className={styles.heroButtons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/projects">
            View projects
          </Link>

          <Link
            className="button button--secondary button--lg"
            to="/docs/playbooks">
            Explore playbooks
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Technical Writing Portfolio"
      description="Technical writing portfolio focused on API documentation, release notes, content design, and documentation systems.">
      <HomepageHeader />

      <main>
        <section className={styles.introSection}>
          <div className="container">
            <Heading as="h2">What you’ll find here</Heading>

            <p className={styles.introText}>
              Practical examples of how I approach documentation problems,
              design repeatable systems, and turn complex technical information
              into useful content.
            </p>

            <div className={styles.cards}>
              <Link className={styles.card} to="/docs/projects">
                <span className={styles.cardLabel}>CASE STUDIES</span>
                <Heading as="h3">Projects</Heading>
                <p>
                  Documentation redesigns, release systems, and structured
                  solutions to real content problems.
                </p>
                <span className={styles.cardLink}>View projects →</span>
              </Link>

              <Link className={styles.card} to="/docs/playbooks">
                <span className={styles.cardLabel}>PRACTICAL GUIDES</span>
                <Heading as="h3">Playbooks</Heading>
                <p>
                  Reusable workflows, quality criteria, interviewing methods,
                  and writing standards.
                </p>
                <span className={styles.cardLink}>Explore playbooks →</span>
              </Link>

              <Link className={styles.card} to="/docs/insights">
                <span className={styles.cardLabel}>ARTICLES</span>
                <Heading as="h3">Insights</Heading>
                <p>
                  Observations about API documentation, developer experience,
                  and documentation strategy.
                </p>
                <span className={styles.cardLink}>Read insights →</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}