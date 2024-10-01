import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { Modal, ScrollView } from 'react-native-web';
import { Button,Image } from 'react-native-web';
import { useState } from 'react';
import styles from './style';

export default function Peixes() {
  
const [animal,setAnimal] = useState([
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome: Tubarão-branco (Carcharodon carcharias)',
  descrição:'Um dos maiores predadores marinhos, o tubarão-branco pode atingir até 6 metros de comprimento e pesar mais de 2 toneladas. Tem corpo robusto e fusiforme, com coloração cinza na parte dorsal e branca na parte ventral.',
  habitos:'Hábitos:  Vive em águas temperadas e costeiras, mas pode ser encontrado em águas oceânicas mais profundas. Alimenta-se de peixes, focas, leões-marinhos e, ocasionalmente, carcaças de baleias.',
  reproducao:'Reprodução: A fêmea tem uma gestação que pode durar até 18 meses, dando à luz entre 2 e 10 filhotes que nascem completamente formados, prontos para caçar.',
  conservacao:'Conservação: Vulnerável (VU), devido à pesca excessiva, captura acidental em redes de pesca e demanda por barbatanas de tubarão.'
  },
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome: Peixe-palhaço (Amphiprioninae)',
  descrição:' Este peixe é conhecido pela sua coloração laranja brilhante com faixas brancas. Vive em simbiose com anêmonas, que oferecem proteção contra predadores.',
  habitos:'Hábitos: Vive em recifes de coral e está associado a anêmonas marinhas, sendo imune ao veneno delas. Alimenta-se de pequenos invertebrados e algas.',
  reproducao:'Reprodução: O peixe-palhaço é hermafrodita sequencial, o que significa que pode mudar de sexo. Os ovos são postos em superfícies planas próximas à anêmona e eclodem em 6 a 10 dias.',
  conservacao:'Conservação: Pouco preocupante (LC), mas as populações sofrem com a destruição de recifes de coral e a captura para aquários.'
  },
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome: Salmão-do-atlântico (Salmo salar)',
  descrição:'Um peixe migratório que pode atingir até 1,5 metros e pesar 30 kg. Possui corpo prateado com pequenas manchas pretas nas laterais.',
  habitos:'Hábitos: O salmão passa a maior parte de sua vida no mar, mas retorna aos rios de água doce para se reproduzir, muitas vezes voltando exatamente ao local onde nasceu. Alimenta-se de peixes menores e invertebrados.',
  reproducao:'Reprodução: A reprodução ocorre em rios de água doce, onde a fêmea deposita milhares de ovos em leitos de cascalho. Após a desova, muitos adultos morrem, embora alguns retornem ao oceano.',
  conservacao:'Conservação: Vulnerável (VU), devido à pesca excessiva, poluição e barragens que bloqueiam suas rotas migratórias.'
  },
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome: Cavalo-marinho (Hippocampus)',
  descrição:'Peixe de corpo pequeno e cabeça que lembra um cavalo. Possui uma cauda preênsil que usa para se segurar em corais e vegetação marinha. Mede de 10 a 30 cm, dependendo da espécie.',
  habitos:'Hábitos: Vive em áreas costeiras rasas, entre corais e algas marinhas. Alimenta-se de pequenos crustáceos e plâncton, que suga com sua boca em formato de tubo.',
  reproducao:'Reprodução: O cavalo-marinho é uma das poucas espécies em que o macho carrega os ovos. A fêmea deposita os ovos em uma bolsa no macho, e ele os carrega por cerca de 20 a 25 dias até a eclosão.',
  conservacao:'Conservação: Vulnerável (VU), devido à captura para uso medicinal, comércio de aquários e destruição de habitat.'
  },
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome: Peixe-dourado (Carassius auratus)',
  descrição:'Um dos peixes de aquário mais populares, o peixe-dourado pode crescer até 30 cm na natureza. Possui corpo ovalado, com coloração variando entre dourado, laranja e vermelho.',
  habitos:'Hábitos: Vive em lagos, rios e águas estagnadas. É onívoro, alimentando-se de pequenos invertebrados, plantas aquáticas e detritos.',
  reproducao:'Reprodução: Na primavera, a fêmea deposita até milhares de ovos em vegetação aquática. Os ovos eclodem em cerca de 48 a 72 horas, e os filhotes atingem a maturidade em 1 ano.',
  conservacao:'Conservação: Pouco preocupante (LC), mas em alguns locais tornou-se uma espécie invasora, competindo com espécies nativas.'
  },
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome: Pirarucu (Arapaima gigas)',
  descrição:'Um dos maiores peixes de água doce do mundo, o pirarucu pode atingir até 3 metros de comprimento e pesar mais de 200 kg. Tem corpo alongado com escamas grandes e uma coloração verde-acinzentada com reflexos vermelhos.',
  habitos:'Hábitos: Vive em rios e lagos da Amazônia e é um predador que se alimenta de outros peixes e pequenos animais aquáticos. Pode respirar fora da água, graças à presença de uma bexiga natatória que funciona como pulmão.',
  reproducao:'Reprodução: A reprodução ocorre durante a estação chuvosa. A fêmea põe os ovos em ninhos construídos no leito do rio. Os pais cuidam dos filhotes até que possam se alimentar sozinhos.',
  conservacao:'Conservação:  Vulnerável (VU), devido à pesca excessiva e destruição de habitat na região amazônica.'
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