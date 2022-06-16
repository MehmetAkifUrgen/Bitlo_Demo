import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState,useLayoutEffect} from 'react';
import axios from 'axios';
import Item from '../../components/Item';
import styles from './main.style';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function Main({navigation}) {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  function ItemSeparatorComponent() {
    return <View style={styles.separator}></View>;
  }

  function onRefresh() {
    setRefresh(true), getData();
  }
  async function getUser(){
    console.log(await firestore().collection('users').doc(await auth().currentUser.uid).get())
  }
  

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

  function onPress(item){
    navigation.navigate('Detail', {
      name:item.marketCode
    });
  }

  function renderItem({item}) {
    return <Item onPress={()=> onPress(item)} item={item} />;
  }

  useEffect(() => {
    getData();
    getUser();
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
