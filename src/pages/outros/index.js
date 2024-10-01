import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { Modal, ScrollView } from 'react-native-web';
import { Button,Image } from 'react-native-web';
import { useState } from 'react';
import styles from './style.js'

export default function Mamiferos() {
  
const [animal,setAnimal] = useState([
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome: Polvo-comum (Octopus vulgaris)',
  descrição:' Um dos cefalópodes mais conhecidos, o polvo-comum possui um corpo mole, oito tentáculos com ventosas, e uma alta capacidade de camuflagem. Pode medir até 1 metro de comprimento.',
  habitos:'Hábitos: Vive em águas temperadas e tropicais, geralmente em fundos rochosos ou recifes. É solitário, alimentando-se de crustáceos, peixes e moluscos. É conhecido por sua inteligência e habilidades de resolver problemas.',
  reproducao:'Reprodução: A fêmea põe milhares de ovos e os protege até que eclodam, o que pode levar até dois meses. Após a eclosão, a fêmea normalmente morre, e os filhotes são deixados para se defenderem sozinhos.',
  conservacao:'Conservação: Pouco preocupante (LC), mas algumas populações estão ameaçadas pela pesca excessiva.'
  },
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome: Caranguejo-ferradura (Limulus polyphemus)',
  descrição:'Um dos animais mais antigos da Terra, com uma carapaça rígida em forma de ferradura. Pode atingir até 60 cm de comprimento (incluindo a cauda). Possui olhos compostos e uma longa cauda usada para se endireitar.',
  habitos:'Hábitos: Vive em águas rasas e estuários ao longo da costa atlântica da América do Norte. Alimenta-se de pequenos invertebrados marinhos e detritos.',
  reproducao:'Reprodução: A reprodução ocorre nas praias, onde a fêmea deposita milhares de ovos na areia, que são fertilizados pelo macho. Os ovos eclodem após cerca de 2 semanas, e as larvas passam algum tempo no ambiente aquático antes de crescerem.',
  conservacao:'Conservação: Vulnerável (VU), devido à coleta para a indústria farmacêutica e à destruição de habitat.'
  },
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome: Medusa-água-viva (Aurelia aurita)',
  descrição:'Uma água-viva comumente encontrada, tem um corpo translúcido com quatro estruturas circulares características no centro. Pode chegar a 40 cm de diâmetro.',
  habitos:'Hábitos: Vive em águas costeiras temperadas e tropicais ao redor do mundo. Alimenta-se de plâncton, pequenos peixes e crustáceos, usando seus tentáculos para capturar presas.',
  reproducao:'Reprodução: Tem um ciclo de vida complexo, incluindo uma fase de pólipo e uma fase de medusa. A reprodução sexuada ocorre na fase de medusa, e as larvas se fixam no fundo do mar para formar pólipos que eventualmente se transformam em medusas adultas.',
  conservacao:'Conservação:  Pouco preocupante (LC), amplamente distribuída e não enfrentando grandes ameaças.'
  },
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome: Formiga-cortadeira (Atta spp.)',
  descrição:'Uma formiga de tamanho médio, com operárias que variam entre 2 a 12 mm de comprimento. São conhecidas por suas mandíbulas fortes que cortam folhas para cultivar fungos em seus ninhos subterrâneos.',
  habitos:'Hábitos: Vivem em florestas tropicais e subtropicais. Alimentam-se do fungo que cultivam, utilizando folhas cortadas como substrato. Formam colônias grandes, organizadas em castas.',
  reproducao:'Reprodução: A rainha pode viver por vários anos, produzindo milhões de operárias durante sua vida. Após o voo nupcial, a rainha estabelece uma nova colônia, e a reprodução continua com ovos fertilizados, dando origem a diferentes castas.',
  conservacao:'Conservação: Pouco preocupante (LC), amplamente distribuída e altamente adaptável.'

  },
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome: Estrela-do-mar (Asterias rubens)',
  descrição:' Uma estrela-do-mar com cinco braços robustos, podendo atingir até 30 cm de diâmetro. Tem uma coloração que varia do laranja ao vermelho.',
  habitos:'Hábitos: Vive em águas costeiras rasas e fundas, geralmente em ambientes rochosos e arenosos. Alimenta-se de moluscos, como mexilhões, e pode regenerar seus braços se forem danificados.',
  reproducao:'Reprodução: A reprodução ocorre tanto por fissão (divisão do corpo) quanto sexualmente. No modo sexual, machos e fêmeas liberam gametas na água, onde a fertilização ocorre. As larvas são planctônicas antes de se fixarem no fundo do mar e se transformarem em adultos.',
  conservacao:'Conservação: Pouco preocupante (LC), sem grandes ameaças identificadas.'
  },
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome: Borboleta-monarca (Danaus plexippus)',
  descrição:'Famosa por suas asas laranja e pretas, a borboleta-monarca tem uma envergadura de até 10 cm. É conhecida por suas longas migrações anuais, que podem cobrir milhares de quilômetros.',
  habitos:'Hábitos: Vive em florestas, campos e áreas abertas na América do Norte, migrando até o México para passar o inverno. Alimenta-se de néctar de flores e, na fase de lagarta, se alimenta de folhas de plantas da família Asclepiadaceae (algodoeiros).',
  reproducao:'Reprodução: A reprodução ocorre ao longo da primavera e verão. Cada fêmea põe cerca de 300 a 400 ovos, que eclodem em lagartas. O ciclo de vida completo, do ovo até o adulto, dura cerca de 30 dias.',
  conservacao:'Conservação: Quase ameaçada (NT), devido à destruição de habitat, especialmente nas áreas de reprodução e hibernação, e ao uso de pesticidas.'
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
          <Image source={require} style={{width:50, height:50}}/>
          </ScrollView>
        </View>
      </Modal>
</View>
  );
}