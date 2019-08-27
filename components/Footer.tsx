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
        <img
          style={{ width: 150 }}
          src={getRelativePath('/static/logo-biilabs.svg')}
        />
      </Col>
      <Col>
        <Row>
          <MediaLink
            uri="https://biilabs.io/"
            img={getRelativePath('/static/link-earth.svg')}
          />
          <MediaLink
            uri="https://www.facebook.com/biilabsrocks"
            img={getRelativePath('/static/linke-fb.svg')}
          />
          <MediaLink
            uri="https://twitter.com/BiiLabs"
            img={getRelativePath('/static/link-twitter.svg')}
          />
          <MediaLink
            uri="https://medium.com/biilabs"
            img={getRelativePath('/static/link-medium.svg')}
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
