import { Row, Col } from 'antd';
import { colors } from '@/layouts/globalStyles';
import { getRelativePath } from '@/utils';

interface IMedia {
  uri: string;
  img: string;
}

const MediaLink: React.FC<IMedia> = ({ uri, img }) => (
  <a style={{ marginRight: 16 }} href={uri}>
    <img style={{ width: 32 }} src={img} />
  </a>
);

const Footer: React.FC = () => (
  <div
    style={{
      padding: '32px 20px 14px',
      backgroundColor: colors.primary,
    }}
  >
    <Row type="flex" justify="space-between">
      <Col push={2}>
        <img src={getRelativePath('/static/logoBiilabs@2x.png')} />
      </Col>
      <Col>
        <Row>
          <MediaLink
            uri="https://biilabs.io/"
            img={getRelativePath('/static/linkEarth@2x.png')}
          />
          <MediaLink
            uri="https://www.facebook.com/biilabsrocks"
            img={getRelativePath('/static/linkeFb@2x.png')}
          />
          <MediaLink
            uri="https://twitter.com/BiiLabs"
            img={getRelativePath('/static/linkTwitter@2x.png')}
          />
          <MediaLink
            uri="https://medium.com/biilabs"
            img={getRelativePath('/static/linkMedium@2x.png')}
          />
        </Row>
      </Col>
    </Row>
    <Row style={{ marginTop: 100 }} type="flex" justify="center">
      <p style={{ color: '#fff', fontFamily: 'HelveticaNeue-Light' }}>
        2019 © BiiLabs
      </p>
    </Row>
  </div>
);

export default Footer;
