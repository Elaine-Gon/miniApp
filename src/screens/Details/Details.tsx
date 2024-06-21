import { Container, Content, Text, Title } from "./styled";


function Details() {
    return (
        <Container>
            <img className="img" src="https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788535932966/1984-edicao-especial.jpg" alt=""/>
            <div>
            <Content>
                <Title>Sobre a obra:</Title>
            
                <Title>1984</Title>
                <Text>George Orwell, 1903 - 1950</Text>
                <Title>Sinopse</Title>
                <Text>
                Winston, herói de 1984 , último romance de George Orwell, vive aprisionado na engrenagem totalitária de uma sociedade 
                completamente dominada pelo Estado, onde tudo é feito coletivamente, mas cada qual vive sozinho. Ninguém escapa à vigilância 
                do Grande Irmão, a mais famosa personificação literária de um poder cínico e cruel ao infinito, além de vazio de sentido histórico. 
                De fato, a ideologia do Partido dominante em Oceânia não visa nada de coisa alguma para ninguém, no presente ou no futuro. O'Brien,
                 hierarca do Partido, é quem explica a Winston que "só nos interessa o poder em si. Nem riqueza, nem luxo, nem vida longa, nem felicidade: 
                 só o poder pelo poder, poder puro".
                Quando foi publicada em 1949, essa assustadora distopia datada de forma arbitrária num futuro perigosamente próximo logo experimentaria
                um imenso sucesso de público. Seus principais ingredientes - um homem sozinho desafiando uma tremenda ditadura; sexo furtivo e libertador;
                horrores letais - atraíram leitores de todas as idades, à esquerda e à direita do espectro político, com maior ou menor grau de instrução.
                 À parte isso, a escrita translúcida de George Orwell, os personagens fortes, traçados a carvão por um vigoroso desenhista de personalidades,
                 a trama seca e crua e o tom de sátira sombria garantiram a entrada precoce de 1984 no restrito panteão dos grandes clássicos modernos.
                </Text>

                <Text>
                    <Title>Outras obras: </Title> A Revolução dos Bichos, A flor da Inglaterra.
                </Text>
            </Content>
            </div>
        </Container>
        
    )

}

export default Details;