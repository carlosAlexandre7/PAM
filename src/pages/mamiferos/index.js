import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { Modal, ScrollView } from 'react-native-web';
import { Button,Image } from 'react-native-web';
import { useState } from 'react';
import styles from './style.js'

export default function Mamiferos() {
  
const [animal,setAnimal] = useState([
  {
  imagem:'https://images.unsplash.com/reserve/wrev1ljvQ6KlfyljCQG0_lion.jpg?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
  nome:'Nome: Leão (Panthera leo)',
  descrição:'O leão é um dos maiores felinos, com uma juba característica nos machos. Pode atingir até 250 kg e medir até 3 metros de comprimento (incluindo a cauda).',
  habitos:'Hábitos:  Os leões vivem em grupos sociais chamados de alcateias ou bandos. São carnívoros e predadores no topo da cadeia alimentar, caçando principalmente antílopes, zebras e outros grandes herbívoros.',
  reproducao:'Reprodução: O período de gestação é de cerca de 110 dias, com ninhadas que variam de 1 a 4 filhotes.',
  conservacao:'Conservação: Vulnerável (VU) devido à perda de habitat, conflitos com humanos e caça.'
  },
  {
  imagem:'https://s2.glbimg.com/iuNf8WWE2CcFiTSRloPjgc1lyIw=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/11/25/elephant-114543_1280.jpg',
  nome:'Nome: Elefantes africanos (Loxodonta)',
  descrição:'Eles vivem em grupos familiares matriarcais e são herbívoros. Podem se deslocar grandes distâncias em busca de água e alimento.',
  habitos:'Hábitos: A gestação dura cerca de 22 meses, sendo o maior período de gestação entre os mamíferos. As fêmeas normalmente têm apenas um filhote por vez.',
  reproducao:'Reprodução:  A gestação dura cerca de 22 meses, sendo o maior período de gestação entre os mamíferos. As fêmeas normalmente têm apenas um filhote por vez.',
  conservacao:'Conservação: Em perigo (EN) devido à caça furtiva por suas presas de marfim e perda de habitat.'
  },
  {
  imagem:'https://pm1.aminoapps.com/7525/8030a8afb5f0648f39a87aa4d105c7788a8219bdr1-500-340v2_uhq.jpg',
  nome:'Nome: Lobo-cinzento (Canis lupus)',
  descrição:'O lobo-cinzento tem uma pelagem espessa e varia em tamanho dependendo da subespécie, pesando entre 30 e 80 kg.',
  habitos:'Hábitos: São animais sociais que vivem em matilhas hierarquizadas. São predadores oportunistas, alimentando-se de alces, cervos e, ocasionalmente, pequenos mamíferos.',
  reproducao:'Reprodução:  O período de gestação é de cerca de 63 dias, com ninhadas de 4 a 6 filhotes.',
  conservacao:'Conservação: Pouco preocupante (LC), mas algumas subespécies estão em risco devido à caça e perda de habitat.'
  },
  {
  imagem:'https://revistapesquisa.fapesp.br/wp-content/thumbs/3904704de3c7901ade4bdb01022795dd13a9284c_1200-630.jpg',
  nome:'Nome: Baleia-azul (Balaenoptera musculus)',
  descrição:'A baleia-azul é o maior animal existente, chegando a 30 metros de comprimento e pesando até 180 toneladas.',
  habitos:'Hábitos: É um mamífero marinho que se alimenta de krill e pequenos peixes por meio de filtração. Elas migram longas distâncias entre áreas de alimentação e reprodução.',
  reproducao:'Reprodução: A gestação dura cerca de 11 a 12 meses, e a fêmea normalmente dá à luz um único filhote.',
  conservacao:'Conservação: Em perigo (EN) devido à caça no passado e impactos atuais, como poluição e mudanças climáticas.'
  },
  {
  imagem:'https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo/canguru-no-marsupio.jpg',
  nome:'Nome: Canguru-vermelho (Macropus rufus)',
  descrição:'É o maior marsupial do mundo, com machos que podem atingir 2 metros de altura e pesar até 90 kg.',
  habitos:'Hábitos: São herbívoros e vivem em áreas abertas na Austrália. Costumam se mover em grupos e são conhecidos por sua capacidade de saltar longas distâncias.',
  reproducao:'Reprodução: A gestação dura cerca de 33 dias, após o qual o filhote se move para a bolsa da mãe, onde permanece por cerca de 8 meses.',
  conservacao:'Conservação: A gestação dura cerca de 33 dias, após o qual o filhote se move para a bolsa da mãe, onde permanece por cerca de 8 meses.'
  },
  {
  imagem:'https://static.biologianet.com/2020/09/ornitorrinco-se-alimentando-de-um-verme.jpg',
  nome:'Nome: Ornitorrinco (Ornithorhynchus anatinus)',
  descrição:'O ornitorrinco é um mamífero semiaquático único da Austrália, com bico de pato, cauda achatada e patas palmadas. É um dos poucos mamíferos que põe ovos.',
  habitos:'Hábitos: São noturnos e solitários, vivendo em rios e lagos, e se alimentam de insetos, crustáceos e vermes.',
  reproducao:'Reprodução: O ornitorrinco põe ovos, e a incubação dura cerca de 10 dias. Após a eclosão, os filhotes permanecem em tocas por cerca de 4 meses.',
  conservacao:'Conservação: Quase ameaçado (NT), enfrentando riscos devido à poluição e perda de habitat.'
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