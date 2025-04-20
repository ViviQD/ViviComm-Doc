import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

/* const FeatureItem = {
  title: 'ViviQD Overview',
  Svg: 'Svg',
  description: (
    <>
    ViviComm Lite Atlas is a medical AI chatbot for children, designed to
    provide information and support for various health conditions. It is a
    simplified version of the full ViviComm platform, tailored for younger
    users and their families. The ViviComm Lite chatbot offers a
    user-friendly interface, engaging content, and interactive features to
    help children understand their health needs and make informed decisions.
    It is a valuable tool for parents and caregivers to provide guidance and
    support with healing. With a focus on education and empowerment,
    ViviComm Lite aims to improve health literacy and promote well-being
    among children and their caregivers. ViviQD - The adventure for life,
    knowledge and healing.
    </>
  ),
};  */

const FeatureList: FeatureItem[] = [
  {
    title: "Atlas",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: "ViviComm Lite",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        
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
