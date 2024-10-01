import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { Modal, ScrollView } from 'react-native-web';
import { Button,Image } from 'react-native-web';
import { useState } from 'react';
import styles from './style.js';

export default function Anfibios() {
  
const [animal,setAnimal] = useState([
  {
  imagem:'https://aun.webhostusp.sti.usp.br/wp-content/uploads/ratouro.jpg',
  nome:'Nome: Rã-touro-americana (Lithobates catesbeianus)',
  descrição:'Uma das maiores espécies de rã, pode atingir até 20 cm de comprimento. Tem pele verde ou marrom, com uma barriga mais clara.',
  habitos:'Hábitos: Vive em habitats aquáticos, como lagos e pântanos. Alimenta-se de insetos, pequenos peixes, e até de pequenos vertebrados.',
  reproducao:'Reprodução:  A reprodução ocorre na primavera. A fêmea deposita até 20.000 ovos na água, que eclodem em girinos. O estágio de girino pode durar até dois anos. ',
  conservacao:'Conservação: Pouco preocupante (LC), mas é considerada uma espécie invasora em alguns lugares, causando impacto em ecossistemas nativos.'
  },
  {
  imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GgTuHs5PCeMhGkntiXeup3dMXY-TrEHJwA&s',
  nome:'Nome: Sapo-comum (Bufo bufo)',
  descrição:'De coloração marrom ou verde-acinzentada, este sapo pode atingir até 15 cm. Sua pele é rugosa e coberta de verrugas.',
  habitos:'Hábitos: Vive em áreas úmidas e florestas, mas pode ser encontrado em jardins. Alimenta-se de insetos e invertebrados. Tem hábitos principalmente noturnos.',
  reproducao:'Reprodução:  Na primavera, os sapos migram para a água para se reproduzir. A fêmea pode depositar até 5.000 ovos. Os girinos se desenvolvem em cerca de 10 semanas.',
  conservacao:'Conservação: Pouco preocupante (LC), mas algumas populações estão em declínio devido à perda de habitat e doenças.'
  },
  {
  imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpLlb27z1dzKYAffUokbIy4Z-MPXb5514LQ&s',
  nome:'Nome: Salamandra-comum (Salamandra salamandra)',
  descrição:'Salamandra com corpo preto brilhante e manchas amarelas, que pode chegar a 20 cm de comprimento. Sua pele é úmida e lisa.',
  habitos:'Hábitos:  Vive em florestas úmidas e se esconde durante o dia, saindo à noite para se alimentar de invertebrados como vermes e insetos.',
  reproducao:'Reprodução: A reprodução ocorre no início da primavera. As fêmeas dão à luz larvas já desenvolvidas que vivem na água até se metamorfosearem.',
  conservacao:'Conservação:  Pouco preocupante (LC), mas algumas populações estão ameaçadas por poluição e perda de habitat.'
  },
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome: Rã-arborícola-europeia (Hyla arborea)',
  descrição:' Pequena rã de até 5 cm, com pele lisa e coloração verde brilhante. Tem discos adesivos nas pontas dos dedos, permitindo que se mova em árvores.',
  habitos:'Hábitos: Vive em áreas pantanosas e vegetação rasteira, sendo mais ativa à noite. Alimenta-se de insetos. Apesar de ser arborícola, também é encontrada em áreas aquáticas.',
  reproducao:'Reprodução: A reprodução ocorre na primavera, com a fêmea depositando entre 800 e 1.000 ovos em vegetação aquática. Os girinos se desenvolvem em até 3 meses.',
  conservacao:'Conservação:  Pouco preocupante (LC), mas em declínio devido à destruição de habitats úmidos.'
  },
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome:Axolote (Ambystoma mexicanum)',
  descrição:'Espécie de salamandra aquática que mantém características larvais, como guelras externas. Pode atingir até 30 cm e tem cores que variam do preto ao branco albino.',
  habitos:'Hábitos: Vive exclusivamente em corpos de água no México. Alimenta-se de pequenos peixes e invertebrados. Curiosamente, o axolote não passa pela metamorfose completa e permanece aquático durante toda a vida.',
  reproducao:'Reprodução: A fêmea põe entre 300 e 1.000 ovos na vegetação aquática. O desenvolvimento dos ovos leva de 2 a 3 semanas.',
  conservacao:'Conservação: Criticamente em perigo (CR) devido à poluição, destruição de habitat e captura para comércio.'
  },
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome: Sapo-parteiro (Alytes obstetricans)',
  descrição:' Sapo pequeno, de até 5 cm, com pele rugosa e coloração cinza ou marrom. Seu nome vem do comportamento dos machos de carregar os ovos nas patas traseiras.',
  habitos:'Hábitos:  Vive em áreas secas, perto de fontes de água, e é noturno. Alimenta-se de insetos e pequenos invertebrados. ',
  reproducao:'Reprodução: A fêmea põe ovos, e o macho os enrola em suas patas, carregando-os até que os girinos estejam prontos para eclodir na água, após cerca de 20 dias.',
  conservacao:'Conservação:  Vulnerável (VU) em algumas áreas, devido à poluição e à degradação de habitats.'
  }
  ])

  const[visivel, setVisivel] = useState(false);
  const[indiceSelecionado, setIndiceSelecionado] = useState(0)
  const carregar = (indice) => {
    setIndiceSelecionado(indice);
    setVisivel(true)
  };
  const voltar = () =>{
    setVisivel(false);
  };
  return (
    <View style={(styles.container)} >
      <StatusBar style="auto" />
      <View style={styles.botaoArea}>
        <Pressable style={styles.botao} onPress={() => carregar (0)}>
          <Text style={styles.nome}>Animal 1</Text>
        </Pressable>
      </View>
      <View style={styles.botaoArea}>
      <Pressable style={styles.botao} onPress={() => carregar (1)}>
          <Text style={styles.nome}>Animal 2</Text>
        </Pressable>
      </View>
      <View style={styles.botaoArea}>
      <Pressable style={styles.botao} onPress={() => carregar (2)}>
          <Text style={styles.nome}>Animal 3</Text>
        </Pressable>
      </View>
      <View style={styles.botaoArea}>
      <Pressable style={styles.botao} onPress={() => carregar (3)}>
          <Text style={styles.nome}>Animal 4</Text>
        </Pressable>
      </View>
      <View style={styles.botaoArea}>
      <Pressable style={styles.botao} onPress={() => carregar (4)}>
          <Text style={styles.nome}>Animal 5</Text>
        </Pressable>
      </View>
      <View style={styles.botaoArea}>
      <Pressable style={styles.botao} onPress={() => carregar (5)}>
          <Text style={styles.nome}>Animal 6</Text>
        </Pressable>
      </View>
      
      <Modal visible={visivel} animationType="fade">
        <View style={styles.modal}>
          <ScrollView>
          <Image style={styles.image} 
          source={{uri:animal[indiceSelecionado].imagem}}/>
          <Text style={styles.animal}>{animal[indiceSelecionado].nome}</Text>
          <Text style={styles.animal}>{animal[indiceSelecionado].descrição}</Text>
          <Text style={styles.animal}>{animal[indiceSelecionado].habitos}</Text>
          <Text style={styles.animal}>{animal[indiceSelecionado].reproducao}</Text>
          <Text style={styles.animal}>{animal[indiceSelecionado].conservacao}</Text>
          <Button title="Voltar" onPress={() => voltar()}/>
          <Image source={require} style={{width:600, height:400}}/>
          </ScrollView>
        </View>
      </Modal>
</View>
  );
}