import {View, Text, FlatList} from 'react-native';
import React, {useState, useLayoutEffect, useEffect} from 'react';
import axios from 'axios';
import DetailItem from '../../components/DetailItem';
import styles from './detail.style';
import DetailHeader from '../../components/DetailHeader';

export default function Detail({route, navigation}) {
  const {name} = route.params;
  const [data, setData] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation]);
  useEffect(()=>{
    getData();
  },[])
  console.log(data)
  async function getData() {
    try {
      await axios
        .get(`https://api4.bitlo.com/market/orderbook?market=${name}&depth=50`)
        .then(function (response) {
          setData(response.data);
          
        })
        .catch(function (error) {
          alert(error);
        });
    } catch (e) {
      console.log(e);
    }
  }

  function renderItem ({item}){
    return <DetailItem item={item} />
  }

  return (
    <View style={styles.container} >
      <DetailHeader right="Fiyat" name={name} />
      <FlatList renderItem={renderItem} data={data.bids} />
    </View>
  );
}
