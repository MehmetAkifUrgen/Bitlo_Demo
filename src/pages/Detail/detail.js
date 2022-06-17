import { View, Text, FlatList, ScrollView, VirtualizedList, ActivityIndicator } from 'react-native';
import React, { useState, useLayoutEffect, useEffect } from 'react';
import axios from 'axios';
import DetailItem from '../../components/DetailItem';
import styles from './detail.style';
import DetailHeader from '../../components/DetailHeader';
import AskItem from '../../components/AskItem';

export default function Detail({ route, navigation }) {
  const { name } = route.params;
  const [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation]);
  useEffect(() => {
    setLoading(true);
    getData();
  }, [])
  console.log(data)
  async function getData() {
    try {
      await axios
        .get(`https://api4.bitlo.com/market/orderbook?market=${name}&depth=50`)
        .then(function (response) {
          setData(response.data);
          setLoading(false);
        })
        .catch(function (error) {
          alert(error);
        });
    } catch (e) {
      console.log(e);
    }
  }

  // function renderItemBids({ item }) {
  //   return <DetailItem item={item} />
  // }
  // function renderItemAsks({ item }) {
  //   return <AskItem item={item} />
  // }
  // function ItemSeparatorComponent() {
  //   return <View style={styles.separator}></View>;
  // }

  if (loading) {
    return <ActivityIndicator size={"large"} />
  }
  else {
    return (
      <ScrollView style={styles.container} >
        <DetailHeader left="Toplam(TRY)" right="Fiyat" name={name} />
        <>
          <ScrollView>
            {data.bids.map((item) => (
              <DetailItem item={item} />))}
          </ScrollView>
        </>
        <DetailHeader right="Toplam(TRY)" left="Fiyat" name={name} />
        <>
          <ScrollView contentContainerStyle={{ marginBottom: 25 }} >
            {data.asks.map((item) => (
              <AskItem item={item} />))}
          </ScrollView>
        </>
      </ScrollView>
    );
  }
}
