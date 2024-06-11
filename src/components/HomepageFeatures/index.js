import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy Use',
    image: require('@site/static/img/image.png').default,
  },
  {
    title: 'Easy Launch',
    image: require('@site/static/img/image-1.png').default,
  },
  {
    title: 'Easy Insights',
    image: require('@site/static/img/image-2.png').default,
  },
];



function Feature({ image, title }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <>
      <section >
        <div className="container">
          <div className="row" style={{ justifyContent: 'center', marginTop: '60px' }}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section >
        <div className="container">
          <div className="row" style={{ justifyContent: 'center', marginTop: '60px' }}>

            <a href="https://docs-bua.botlhale.xyz" rel="noopener noreferrer" className={clsx('col col--3', styles.border, styles.textv, styles.feature)} style={{borderColor: '#2892C0'}}>
              <div className="text--center padding-horiz--md">
                <Heading as="h3" style={{ color: '#2892C0' }}>Bua</Heading>
                <p className={styles.textcolor}>Our multilingual bot-building platform.</p>
              </div>
            </a>

            <a href="https://docs-vela.botlhale.xyz" rel="noopener noreferrer" className={clsx('col col--3', styles.border, styles.textv, styles.feature)} style={{borderColor: '#E96733'}}>
              <div className="text--center padding-horiz--md">
                <Heading as="h3" style={{ color: '#E96733' }}>Vela</Heading>
                <p className={styles.textcolor}>Our multilingual  call centre analytics platform.</p>
              </div>
            </a>

            <a href="https://docs-apis.botlhale.xyz" rel="noopener noreferrer" className={clsx('col col--3', styles.border, styles.textv, styles.feature)} style={{borderColor: '#999998'}}>
              <div className="text--center padding-horiz--md">
                <Heading as="h3" style={{ color: '#999998' }}>APIs</Heading>
                <p className={styles.textcolor}>Our chatbot, speech , and text APIs.</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
