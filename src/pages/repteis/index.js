import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { Modal, ScrollView } from 'react-native-web';
import { Button,Image } from 'react-native-web';
import { useState } from 'react';
import styles from './style';

export default function Repteis() {
  
const [animal,setAnimal] = useState([
  {
  imagem:'https://static.biologianet.com/conteudo/images/a-jiboia-uma-serpente-pertencente-familia-boidae-essa-especie-apresenta-habitos-terrestres-arboricolas-5ca608821c6e3.jpg',
  nome:'Nome: Jiboia (Boa constrictor)',
  descrição:'Serpente de grande porte, que pode atingir até 4 metros de comprimento. Possui coloração que varia entre o marrom, verde-oliva e cinza, com padrões geométricos pelo corpo.',
  habitos:'Hábitos: Vive em florestas tropicais, savanas e áreas semidesérticas. Alimenta-se de pequenos mamíferos, aves e répteis, matando suas presas por constrição (aperto).',
  reproducao:'Reprodução:  É ovovivípara, ou seja, os ovos se desenvolvem dentro do corpo da fêmea, que dá à luz filhotes vivos. O período de gestação dura cerca de 6 a 8 meses, e a ninhada pode ter de 10 a 65 filhotes.',
  conservacao:'Conservação: Pouco preocupante (LC), mas sofre com a destruição de habitat e o comércio ilegal de animais exóticos.'
  },
  {
  imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZNf5iwHTy3qTuHTVZOIoN8BA4HNp3GTMjA&s',
  nome:'Nome: Crocodilo-de-água-salgada (Crocodylus porosus)',
  descrição:' O maior réptil do mundo, pode alcançar até 7 metros de comprimento e pesar mais de 1 tonelada. Possui pele grossa e escamosa, de cor acinzentada ou marrom.',
  habitos:'Hábitos: Vive em estuários, manguezais e zonas costeiras tropicais. É um predador oportunista que se alimenta de peixes, aves, mamíferos e até outros répteis.',
  reproducao:'Reprodução: A fêmea constrói um ninho em margens de rios ou áreas pantanosas, onde deposita entre 40 e 60 ovos. O período de incubação é de cerca de 90 dias, e a mãe protege o ninho até a eclosão.',
  conservacao:'Conservação: Pouco preocupante (LC), mas algumas populações são ameaçadas pela perda de habitat e caça ilegal para obtenção de couro.'
  },
  {
  imagem:'https://static.vecteezy.com/ti/fotos-gratis/t1/9552605-close-up-olhar-para-uma-iguana-verde-brilhante-foto.JPG',
  nome:'Nome: Iguana-verde (Iguana iguana)',
  descrição:'Iguana grande, com comprimento de até 2 metros, incluindo a cauda. Sua coloração varia do verde brilhante ao cinza-esverdeado. Tem uma crista dorsal que vai da cabeça até a cauda.',
  habitos:'Hábitos: Vive em florestas tropicais e áreas próximas a rios e lagos. É herbívora, alimentando-se principalmente de folhas, flores e frutos.',
  reproducao:'Reprodução: A fêmea deposita de 20 a 70 ovos em buracos no solo. Os ovos eclodem após um período de incubação de cerca de 90 dias, e os filhotes são independentes desde o nascimento.',
  conservacao:'Conservação: Pouco preocupante (LC), mas em algumas áreas é capturada para o comércio de animais de estimação e enfrentam pressões devido à destruição de habitat.'
  },
  {
  imagem:'https://super.abril.com.br/wp-content/uploads/2019/04/dragao-komodo-indonesia.png?crop=1&resize=1080,565z',
  nome:'Nome: Dragão-de-komodo (Varanus komodoensis)',
  descrição:'O maior lagarto do mundo, pode chegar a 3 metros de comprimento e pesar até 90 kg. Tem pele escamosa e áspera, de coloração cinza ou marrom.',
  habitos:'Hábitos: Vive em ilhas da Indonésia. É um predador e necrófago, alimentando-se de grandes presas, como cervos, búfalos e até outros dragões. Sua saliva contém bactérias que ajudam a imobilizar suas presas.',
  reproducao:'Reprodução: A fêmea põe entre 15 e 30 ovos em ninhos subterrâneos, que eclodem após cerca de 8 meses de incubação. Os filhotes começam a vida nas árvores, para evitar predadores, incluindo adultos da própria espécie.',
  conservacao:'Conservação: Vulnerável (VU), devido à caça, perda de habitat e redução das populações de suas presas.'
  },
  {
  imagem:'https://faunanews.com.br/wp-content/uploads/2023/05/Imagem-3.jpg',
  nome:'Nome: Tartaruga-de-couro (Dermochelys coriacea)',
  descrição:'A maior tartaruga marinha, pode atingir até 2 metros de comprimento e pesar mais de 700 kg. Sua carapaça é macia, composta por pele e tecido fibroso ao invés de placas ósseas.',
  habitos:'Hábitos: Vive em todos os oceanos, migrando grandes distâncias entre áreas de alimentação e reprodução. Alimenta-se principalmente de águas-vivas, e é uma excelente nadadora.',
  reproducao:'Reprodução: A fêmea põe entre 50 e 100 ovos em ninhos escavados em praias de areia. O período de incubação varia de 60 a 70 dias, e o sexo dos filhotes é determinado pela temperatura da areia.',
  conservacao:'Conservação: Vulnerável (VU), devido à captura acidental em redes de pesca, poluição (especialmente plástico) e destruição de locais de desova.'
  },
  {
  imagem:'https://mega.ibxk.com.br/2018/10/01/01112936645105.jpg',
  nome:'Nome: Cobra-rei (Ophiophagus hannah)',
  descrição:'A cobra-rei é a maior serpente venenosa do mundo, podendo atingir até 5,5 metros de comprimento. Tem coloração marrom, preta ou verde, com faixas claras e escuras ao longo do corpo.',
  habitos:'Hábitos:  Vive em florestas tropicais do Sudeste Asiático. É predominantemente ofiófaga, ou seja, alimenta-se principalmente de outras serpentes, incluindo espécies venenosas.',
  reproducao:'Reprodução: A fêmea constrói um ninho com folhas e detritos, onde deposita entre 20 e 40 ovos. Ela permanece próxima ao ninho até a eclosão, que ocorre após cerca de 60 a 90 dias.',
  conservacao:'Conservação: Vulnerável (VU), devido à perda de habitat, caça e captura para uso em remédios tradicionais.'
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