import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import axios from 'axios';
import Item from '../../components/Item';
import styles from './main.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../colors';

export default function Main({ navigation }) {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  function ItemSeparatorComponent() {
    return <View style={styles.separator}></View>;
  }
  function goAccount() {
    navigation.navigate('Account');
  }

  function onRefresh() {
    setRefresh(true), getData();
  }


  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Icon onPress={goAccount} name='account' size={30}
            color={colors.white} />
        );
      },
    });
  }, [navigation]);


  async function getData() {
    try {
      await axios
        .get('https://api4.bitlo.com/market/ticker/all')
        .then(function (response) {
          setData(response.data);
          setRefresh(false);
        })
        .catch(function (error) {
          alert(error);
        });
    } catch (e) {
      console.log(e);
    }
  }

  function onPress(item) {
    navigation.navigate('Detail', {
      name: item.marketCode
    });
  }

  function renderItem({ item }) {
    return <Item onPress={() => onPress(item)} item={item} />;
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        refreshing={refresh}
        onRefresh={() => onRefresh()}
        ItemSeparatorComponent={ItemSeparatorComponent}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
}
