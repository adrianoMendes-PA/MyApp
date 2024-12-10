import React from 'react';
import Header from '../../../../components/Header';
import {
  Container,
  AlignComponents,
  CardPropriedade,
  CardValor,
  Card,
  ContainerCard,
  TextInformation,
  Wrapper,
  BoldText,
} from './style';
import Footer from '../../../../components/Footer';

interface TankDetailProps {
  route: any;
}

const TankDetailScreen: React.FC<TankDetailProps> = ({route}) => {
  const {tanque} = route.params;

  return (
    <>
      <Header title={tanque.nomeTanque} />
      <Container>
        <ContainerCard>
          <Card>
            <AlignComponents>
              <CardPropriedade>Área do tanque:</CardPropriedade>
              <CardValor>{tanque.area}m²</CardValor>
            </AlignComponents>
            <AlignComponents>
              <CardPropriedade>Volume estimado de água:</CardPropriedade>
              <CardValor>{tanque.volume}.000 L</CardValor>
            </AlignComponents>
          </Card>/
          <Wrapper>
            <TextInformation>
              Com base nos dados cadastrados, estimamos o crescimento dos peixes
              no tanque. Em aproximadamente{' '}
              <BoldText>
                {new Date(tanque.dataPrevistaRetirada).toLocaleDateString(
                  'pt-BR',
                  {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  },
                )}
              </BoldText>
              , os peixes poderão atingir o peso ideal de comercialização,
              estimado entre 1,5 e 2 kg. Monitore regularmente o tanque para
              garantir o máximo aproveitamento e saúde dos peixes.
            </TextInformation>
          </Wrapper>
        </ContainerCard>
      </Container>
      <Footer />
    </>
  );
};

export default TankDetailScreen;
