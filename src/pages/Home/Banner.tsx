import { TranslationFunction } from 'i18next';
import * as React from 'react';
import { Container } from 'reactstrap';
import { InverseHeader } from '../../components';
import { withText } from '../../i18next';
import { ImageBanner } from './styles';

const Banner: React.SFC<{ title: string }> = (props) => (
  <ImageBanner>
    <Container>
      <InverseHeader>{props.title}</InverseHeader>
    </Container>
  </ImageBanner>
);

const mapText = (t: TranslationFunction) => ({
  title: t('common:siteTitle')
});

export default withText(mapText)(Banner) as React.SFC<{}>;
