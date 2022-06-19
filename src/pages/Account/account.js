import { View, Text, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './account.style'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Button from '../../components/Button';
import colors from '../../colors';

export default function Account({ navigation }) {
    let [data, setData] = useState([])
    let [loading, setLoading] = useState(true)



    useEffect(() => {
        getUser();
    }, [])
    async function getUser() {
        setData(await firestore().collection('users').doc(await auth().currentUser.uid).get())
        setLoading(false)
    }
    async function logOut() {
        await auth().signOut().then(() => navigation.navigate('Login'))
    }

    if (loading) {
        return (
            <ActivityIndicator size={'large'} />
        )
    }
    else {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/unnamed.png')}
                    />
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyItem}>
                        <Text style={styles.field} >Ad:</Text>
                        <Text style={styles.fieldText} >{data._data.name}</Text>
                    </View>
                    <View style={styles.bodyItem}>
                        <Text style={styles.field} >Soyad:</Text>
                        <Text style={styles.fieldText} >{data._data.surname}</Text>
                    </View>
                    <View style={styles.bodyItem}>
                        <Text style={styles.field} >Email:</Text>
                        <Text style={styles.fieldText} >{data._data.email}</Text>
                    </View>
                </View>
                <Button onPress={logOut} value="Çıkış Yap" color={colors.red} />
            </View>
        )
    }
}