import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  FlatList,
} from 'react-native';
import ItemCard from './src/components/itemCard/ItemCard';
import datas from './src/data/data.json';

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState({});
  useEffect(() => {
    if (search !== '') {
      setData(
        datas.filter(item =>
          item.title.toLowerCase().includes(search.toLowerCase()),
        ),
      );
      console.log(data);
    } else {
      setData(datas);
      console.log(data);
    }
  }, [search]);

  const renderItem = ({item}) => {
    return (
      <ItemCard
        title={item.title}
        imgURL={item.imgURL}
        inStock={item.inStock}
      />
    );
  };

  return (
    <SafeAreaView style={style.app}>
      <View style={style.container}>
        <Text style={style.header}>PATİSTORE</Text>
        <TextInput
          style={style.searchBar}
          placeholder={'Search'}
          value={search}
          onChangeText={e => {
            setSearch(e);
          }}
        />
        {data.length > 0 ? (
          <FlatList
            style={style.list}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        ) : (
          <Text style={style.warn}> Product Does Not Exist </Text>
        )}
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  app: {
    backgroundColor: '#f0ffff',
    height: Dimensions.get('window').height,
    flex: 1,
  },
  header: {
    color: 'purple',
    fontSize: 40,
    fontWeight: 'bold',
  },
  container: {
    margin: 10,

    marginHorizontal: 10,
  },
  searchBar: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#fffafa',
  },
  list: {
    marginBottom: 100,
  },
  warn:{
    color:"red",
    fontWeight:"bold",
    fontSize:25,
    textAlign:"center"
  }
});
export default App;
