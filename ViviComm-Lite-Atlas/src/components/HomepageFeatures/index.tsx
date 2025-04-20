import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Atlas",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
    <>
      <div className="atlas-description-box">
        <h2>Welcome to ViviComm Lite Atlas</h2>
        <p>
          ViviComm Lite Atlas is the comprehensive documentation system for the ViviComm Lite platform, designed to offer accessible and up-to-date information about our medical AI chatbot for children. Whether you're a developer, researcher, or just a curious user, the Atlas provides detailed guidance, tutorials, and versioned releases to help you better understand and use the platform.
        </p>
        <p>
          Explore key components, system architecture, and other essential documentation to enhance your experience with ViviComm Lite.
        </p>
      </div>
    </>
    ),
  },
{
  title: "ViviComm Lite",
  Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
  description: (
    <>
      <div className="viviCommLite-description-box">
        <h2>Welcome to ViviComm Lite</h2>
        <p>
          **ViviComm Lite** is an innovative medical AI chatbot designed for children, providing a safe and interactive environment where young users can easily access health-related information and guidance. It's a simplified version of the full **ViviComm** platform, offering a user-friendly interface tailored to younger audiences and their families.
        </p>
        <p>
          ViviComm Lite empowers children and parents with knowledge, offering support for various health conditions. Through engaging content and interactive tools, it aims to foster health literacy and help families make informed decisions about well-being and healing.
        </p>
      </div>
    </>
  ),
},
  {
    title: "Open Source",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Docusaurus is an open-source project that allows you to create beautiful
        websites easily. It is built using React and is designed to be easy to
        use and customize. You can find the source code on.
      </>
    ),
  },
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
