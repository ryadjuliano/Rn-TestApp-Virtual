import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

const Home = () => {
    const [dataImage, setdataImage] = useState(
        [
            {
                id: 0,
                image: 'https://via.placeholder.com/1024/fffff/0000/?text=Bonjour',
                counter: 0,
            },
            {
                id: 1,
                image: 'https://via.placeholder.com/1024/D98778d/0000/?text=Hi Ryad',
                counter: 0,
            },
            {
                id: 2,
                image: 'https://via.placeholder.com/1024/8b8b8b/0000/?text=Hellow',
                counter: 0,
            },
        ]
    );
  const LikeBtn = ind => {
        setdataImage(dataImage.map((obj, index) => index == ind ? { ...obj, counter: obj.counter + 1 } : obj));
    };

    const DisLikeBtn = (ind) => {
        setdataImage(dataImage.map((obj, index) => index == ind ? { ...obj, counter: obj.counter - 1 } : obj));
    };

    const LikeAll  = () => {
        setdataImage(dataImage.map((obj, index) => index == index ? { ...obj, counter: obj.counter + 1 } : obj));
    }

    const disLikeAll = () => {
        setdataImage(dataImage.map((obj, index) => index == index ? { ...obj, counter: obj.counter - 1 } : obj));
    }

    const ResetAll = () => {
        setdataImage(dataImage.map((obj, index) => index == index ? { ...obj, counter: 0 } : obj));
    }
    

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <View>
                    <View style={styles.section}>
                    <TouchableOpacity onPress={() => {
                                       LikeAll()
                                        }} style={styles.buttonLike}>
                            <Text style={styles.textLike}>Like ALL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                                            ResetAll();
                                        }} style={styles.buttonReset}>
                            <Text style={styles.textReset}>Reset ALL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                                            disLikeAll();
                                        }} style={styles.buttondisLike}>
                            <Text style={styles.textdisLike}>Dislike ALL</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: 8 }}>
                        {dataImage.map((item, index) => (
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    width: '100%',
                                    height: 230,
                                    borderRadius: 10,
                                    marginBottom: 10,
                                }}>
                                <Image
                                    style={{
                                        width: '100%',
                                        height: 170,
                                        resizeMode: 'cover',
                                    }}
                                    source={{ uri: item.image }}
                                />
                                <View style={styles.section}>
                                    <View style={styles.buttonReset}>
                                        <Text style={styles.textReset}>{item.counter} Like</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={() => {
                                            LikeBtn(index);
                                        }}
                                         style={styles.buttonLike}>
                                            <Text style={styles.textLike}>Like</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => {
                                            DisLikeBtn(index);
                                        }} style={styles.buttondisLike}>
                                            <Text style={styles.textdisLike}>Dislike</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    statusBar: {
        // height: STATUSBAR_HEIGHT,
    },
    appBar: {
        backgroundColor: '#79B45D',
        // height: APPBAR_HEIGHT,
    },
    container: {
        backgroundColor: '#f4fbfa',
        paddingBottom: 40,
        // paddingVertical:10
        marginVertical: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    section: { flexDirection: 'row', justifyContent: 'space-between', padding: 8 },
    buttonLike: {
        width: 100,
        height: 40,
        backgroundColor: '#2b72c4',
        borderRadius: 6,
        marginRight: 8,
    },
    buttondisLike: {
        width: 100,
        height: 40,
        backgroundColor: '#da2c2c',
        borderRadius: 6,
    },
    buttonReset: {
        width: 100,
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 6,
    },
    textLike: {
        textAlign: 'center',
        color: 'white',
        padding: 12,
        fontSize: 12,
        fontWeight: '600',
    },
    textReset: {
        textAlign: 'center',
        color: 'black',
        padding: 12,
        fontSize: 12,
        fontWeight: '600',
    },
    textdisLike: {
        textAlign: 'center',
        color: 'white',
        padding: 12,
        fontSize: 12,
        fontWeight: '600',
    },
});

export default Home;
