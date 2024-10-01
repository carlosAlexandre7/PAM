import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { Modal, ScrollView } from 'react-native-web';
import { Button,Image } from 'react-native-web';
import { useState } from 'react';
import styles from './style.js';

export default function Aves() {
  
const [animal,setAnimal] = useState([
  {
  imagem:'https://i.pinimg.com/236x/6d/4f/83/6d4f83d02f754c2af1268f3ce15014d6.jpg',
  nome:'Nome: Águia-careca (Haliaeetus leucocephalus)',
  descrição:'A águia-careca é uma grande ave de rapina, símbolo dos Estados Unidos, com plumagem marrom e uma cabeça branca distinta. Pode ter uma envergadura de até 2,3 metros.',
  habitos:'Hábitos: Vive perto de corpos de água, como lagos, rios e costas. É carnívora, alimentando-se principalmente de peixes, mas também de pequenos mamíferos e aves.',
  reproducao:'Reprodução:  A nidificação ocorre em grandes ninhos, que podem ser usados por vários anos. O período de incubação dura cerca de 35 dias, e os filhotes permanecem no ninho por 10 a 12 semanas.',
  conservacao:'Conservação:  Pouco preocupante (LC), após uma grande recuperação graças a esforços de conservação, principalmente no controle de pesticidas como o DDT.'
  },
  {
  imagem:'https://s3.amazonaws.com/media.wikiaves.com.br/images/511/115562_0ea7667859a10dffdd37650a56edeff3.jpg',
  nome:'Nome: Pinguim-imperador (Aptenodytes forsteri)',
  descrição:'O maior pinguim do mundo, com até 1,2 metros de altura e peso de até 40 kg. Tem penas pretas nas costas, peito branco e marcas amarelas ao redor do pescoço.',
  habitos:'Hábitos: Vive na Antártica e é altamente adaptado ao frio extremo. Alimenta-se de peixes, krill e lulas. Forma grandes colônias para se reproduzir.',
  reproducao:'Reprodução: A fêmea põe um único ovo no inverno antártico, e o macho incuba o ovo por cerca de 65 dias, enquanto a fêmea vai ao mar para se alimentar.',
  conservacao:'Conservação: Quase ameaçado (NT), devido às mudanças climáticas que afetam o habitat gelado onde vivem e se reproduzem.'
  },
  {
  imagem:'https://img.odcdn.com.br/wp-content/uploads/2024/05/Destaque-Beija-flor.jpg',
  nome:'Nome: Beija-flor (Trochilidae)',
  descrição:'Os beija-flores são aves pequenas e rápidas, com asas que batem extremamente rápido, permitindo que flutuem no ar. Eles têm bicos longos e finos para sugar néctar das flores.',
  habitos:'Hábitos: Vivem em diversas regiões, principalmente nas Américas. São ativos durante o dia e se alimentam de néctar, além de insetos para complementar sua dieta.',
  reproducao:'Reprodução: A fêmea constrói um pequeno ninho, onde põe 1 a 3 ovos. O período de incubação dura cerca de 14 a 23 dias, e os filhotes deixam o ninho após 18 a 22 dias.',
  conservacao:'Conservação: A fêmea constrói um pequeno ninho, onde põe 1 a 3 ovos. O período de incubação dura cerca de 14 a 23 dias, e os filhotes deixam o ninho após 18 a 22 dias.'
  },
  {
  imagem:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/AndeanCondorMale.jpg/1200px-AndeanCondorMale.jpg',
  nome:'Nome: Condor-dos-Andes (Vultur gryphus)',
  descrição:'Uma das maiores aves voadoras, com envergadura que pode ultrapassar 3 metros. Tem plumagem preta e branca, com uma coloração vermelha distinta na cabeça, que é desprovida de penas.',
  habitos:'Hábitos:  É um necrófago, alimentando-se de carcaças de animais mortos, como guanacos e cervos. Vive nas regiões montanhosas dos Andes. ',
  reproducao:'Reprodução: A nidificação ocorre em penhascos elevados, e a fêmea põe apenas um ovo a cada dois anos. A incubação dura cerca de 58 dias.',
  conservacao:'Conservação: Vulnerável (VU), devido à caça e à destruição de habitats.'
  },
  {
  imagem:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Arara_Azul_no_Pantanal.jpg/1200px-Arara_Azul_no_Pantanal.jpg',
  nome:'Nome: Arara-azul-grande (Anodorhynchus hyacinthinus)',
  descrição:'A maior espécie de arara, pode atingir até 1 metro de comprimento. Possui plumagem azul brilhante, com manchas amarelas ao redor dos olhos e do bico.',
  habitos:'Hábitos: A maior espécie de arara, pode atingir até 1 metro de comprimento. Possui plumagem azul brilhante, com manchas amarelas ao redor dos olhos e do bico.',
  reproducao:'Reprodução:  A fêmea põe de 1 a 3 ovos, e o período de incubação dura cerca de 28 a 30 dias. Os filhotes permanecem no ninho por cerca de 3 meses.',
  conservacao:'Conservação: Vulnerável (VU), devido à captura ilegal para o comércio de animais e à destruição de habitat.'
  },
  {
  imagem:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/20181203_-_22.11_Kerkuil_%28Tyto_alba%29_22.jpg/280px-20181203_-_22.11_Kerkuil_%28Tyto_alba%29_22.jpg',
  nome:'Nome: Coruja-das-torres (Tyto alba)',
  descrição:'De médio porte, com até 35 cm de comprimento e uma envergadura de até 95 cm. Tem plumagem branca na face e no ventre, e asas e dorso marrons.',
  habitos:'Hábitos: É uma ave noturna e caçadora eficiente, alimentando-se principalmente de roedores. Vive em uma variedade de habitats, incluindo áreas urbanas, florestas e fazendas.',
  reproducao:'Reprodução: A coruja-das-torres põe de 4 a 7 ovos, que são incubados por cerca de 30 a 34 dias. Os filhotes saem do ninho após 50 a 55 dias.',
  conservacao:'Conservação: Pouco preocupante (LC), apesar de algumas populações estarem em declínio devido à destruição de habitat.'
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