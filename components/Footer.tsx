import { Row, Col } from 'antd';
import { colors } from '@/layouts/globalStyles';
import { getRelativePath, media } from '@/utils';
import styled from 'styled-components';

interface IMedia {
  uri: string;
  img: string;
}

const MediaIcon = styled.img`
  width: 32px;
  ${media('md')} {
    width: 48px;
  }
`;

const MediaLink: React.FC<IMedia> = ({ uri, img }) => (
  <a style={{ marginRight: 16 }} href={uri}>
    <MediaIcon src={img} />
  </a>
);

const MediaLinkWrapper = styled(Row)`
  display: flex;
  justify-content: flex-end;
  ${media('md')} {
    justify-content: center;
  }
`;

const Logo = styled.img`
  width: 150px;
  ${media('md')} {
    width: 80px;
    margin-bottom: 20px;
  }
`;

const Container = styled.div`
  padding: 32px 20px 14px;
  ${media('md')} {
    padding: 16px 0 0 0;
  }
`;

const CopyRight = styled.p`
  text-align: center;
  margin-top: 100px;
  color: #fff;
  font-family: 'HelveticaNeue-Light';
  ${media('md')} {
    margin-top: 32px;
    font-size: 16px;
  }
`;

const Footer: React.FC = () => (
  <Container
    style={{
      backgroundColor: colors.primary,
    }}
  >
    <Row type="flex" justify="space-between">
      <Col xs={24} sm={24} md={2} style={{ textAlign: 'center' }}>
        <Logo src={getRelativePath('/static/logo-biilabs.svg')} />
      </Col>
      <Col xs={24} sm={24} md={22}>
        <MediaLinkWrapper>
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
        </MediaLinkWrapper>
      </Col>
    </Row>
    <CopyRight>2019 © BiiLabs</CopyRight>
  </Container>
);

export default Footer;
