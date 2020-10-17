import React from 'react';
import { SafeAreaView, View, Text, ScrollView, Image, FlatList, Dimensions, ImageBackground } from 'react-native';

import { NewsCard } from './components'

const news_data = [
    {
        id: 0,
        author: 'Omkar Godbole',
        title: 'Kiz Kulesi',
        description:
            'Geçmişi 2500 yıl öncesine dayanan bu eşsiz yapı, İstanbulun tarihine eş bir tarih yaşamış ve bu kentin yaşadıklarına görgü şahitliği yapmıştır. Antik çağda başlayan geçmişiyle, Eski Yunandan Bizans İmparatorluğuna,  Bizansdan Osmanlıya, tüm tarihi dönemlerde var olarak günümüze kadar gelmiştir.',


        imageUrl:
            // 'https://static.coindesk.com/wp-content/uploads/2020/10/BitMEX-1180x628.png',
            'https://previews.123rf.com/images/sweettigra/sweettigra1904/sweettigra190400002/123656166.jpg'
    },
    {
        id: 1,
        author: 'Benjamin Pirus',
        title: 'YeniCami/Eminonu',
        description:
            'Eminönü’nde liman ve ticaret bölgelerinin önünde yer almakta ve cami, hünkâr kasrı, arasta (Mısır Çarşısı), türbe, dârülkurrâ, sebil, çeşme ile sıbyan mektebinden oluşmaktadır. Daha sonra külliyeye kütüphane, muvakkithâne ve bir türbe ile çeşmeler ilâve edilmiştir.',
        imageUrl:
            // 'https://static.coindesk.com/wp-content/uploads/2020/10/GettyImages-alex-wong-1-1024x628.jpg',
            'https://previews.123rf.com/images/sweettigra/sweettigra1801/sweettigra180100012/94351203.jpg'
    },
    {
        id: 2,
        author: 'Malwarebytes Labs',
        title: 'Ayasofya ',
        description:
            "Ayasofya Fatih Sultan Mehmet tarafından İstanbul’un 1453 yılında fethi ile birlikte camiye çevrilmiş, çeşitli tarihi belgelerde harap durumda olduğu belirtilen yapı İstanbul’un fethinden sonra hiçbir tahribata uğratılmadığı gibi, yapılan güçlendirme ve onarımlarla günümüze kadar en iyi şekilde korunmuştur.",
        imageUrl:
            // 'https://blog.malwarebytes.com/wp-content/uploads/2020/09/shutterstock_640824457-600x410.jpg',
            'https://previews.123rf.com/images/artta/artta1910/artta191000100/132530685.jpg'
    },
    {
        id: 3,
        author: 'Daniel Sparks',
        title: 'Beyoglu',
        description:
            'Adı Beyoğlu ile özdeş hale gelen tramvaylar, ilk seferini 11 Şubat 1914 tarihinde yaptı. İstiklal Caddesinin vazgeçilmezleri arasına giren tramvay, gelişen teknolojilere ve şehirleşmeye yenik düşerek 1961 yılında Avrupa Yakasında, 1966da ise Anadolu Yakasında son seferine çıkarak yolcularına veda etti.',
        imageUrl:
            //  'https://g.foolcdn.com/editorial/images/593799/stock-down.jpg',
            'https://previews.123rf.com/images/popcar/popcar1912/popcar191200003/137318392-vintage.jpg'
    },
    {
        id: 4,
        author: 'Jessica Bursztynsky',
        title: 'Galata kulesi',
        description:
            'Galata Kulesi, tahminlere göre ilk olarak 507 yılında Romalılar tarafından yapılmışsa da bugünkü şeklini 1348 yılında Cenevizler vermiştir. Yüksekliği yaklaşık 70 metre, çapı ise aşağı yukarı 10 metredir. Ağırlığının ise 10 bin ton olduğu tahmin edilmektedir.',


        imageUrl:
            // 'https://image.cnbcfm.com/api/v1/image/105737636-1550147305726gettyimages-1034802076rr.jpg?v=1601647142',
            'https://previews.123rf.com/images/popcar/popcar1601/popcar160100024/50985120-istanbul-retro-poster-.jpg'
    },
];
const banner_data = [
    {
        id: 0,
        text: "EMINONU",
        imageUrl:
            // 'https://cnet4.cbsistatic.com/img/7bnQrNgv4FtUTWdPZYO29fufx-A=/1200x630/2019/11/20/0aff1d1e-92fc-4b88-aee5-850c550e09a6/cnet-black-friday-best-buy-echo-show-5.jpg',
            'https://www.dunyabizim.com/images/haberler/2018/12/abdullah_biraderler_den_pascal_sebah_a_eski_istanbul_fotografcilari_h28314_a169f.png'
    },
    {
        id: 1,
        text: "HALIC",
        imageUrl:
            // 'https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg',
            'https://www.artfulliving.com.tr/image_data/content_pane_image/415e808ddd1d963401890ed65ab1f851.jpg'
    },
    {
        id: 2,
        text: "GALATA",
        imageUrl:
            // 'https://s.yimg.com/os/creatr-uploaded-images/2020-10/e9b733b0-09cf-11eb-bfce-a2a6e6d17fa5',
            'https://i.pinimg.com/originals/fa/7c/46/fa7c460359542437a13679635c4f9485.png'
    },
    {
        id: 3,
        text: "HALIC",
        imageUrl:
            // 'https://s.marketwatch.com/public/resources/images/MW-IQ535_ss_pay_ZG_20201009111853.jpg',
            'https://i.pinimg.com/originals/23/dc/e5/23dce5e09123e15c4133a9e995582c5d.png'
    },
    {
        id: 4,
        text: "DOLMABAHCE PLACE",
        imageUrl:
            // 'https://images.mktw.net/im-242755/social',
            'https://i.pinimg.com/originals/2b/ca/d6/2bcad65cc5e278c400e798f3cbefc5e0.png'
    },
];

const News = () => {

    const renderNewsData = ({ item }) => <NewsCard news={item} />

    const listHeader = () => {
        return (
            <>
                <Text style={{ fontWeight: 'bold', fontSize: 50, margin: 10 }}>ISTANBUL</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        banner_data.map(banner_item => {
                            return (

                                <ImageBackground
                                    source={{ uri: banner_item.imageUrl }}
                                    style={{
                                        width: Dimensions.get('window').width * 0.90,
                                        height: Dimensions.get('window').height / 4,
                                        margin: 5,
                                        borderRadius: 10
                                    }}>

                                    < View style={{
                                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'flex-start',
                                    }}>
                                        <Text style={{
                                            textAlignVertical: 'center',
                                            borderBottomLeftRadius: 10,
                                            borderBottomRightRadius: 10,
                                            fontWeight: 'bold',
                                            fontSize: 20,
                                            color: 'white',
                                            paddingLeft: 30,
                                            paddingTop: 10,
                                            backgroundColor: 'rgba(120,120,120, 0.7)',
                                            width: Dimensions.get('window').width * 0.9,
                                            height: Dimensions.get('window').height * 0.05,
                                        }}>{banner_item.text}
                                        </Text>
                                    </View>
                                </ImageBackground>
                            );
                        })
                    }

                </ScrollView >
            </>
        );
    };

    return (
        <SafeAreaView>

            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={news_data}
                renderItem={renderNewsData}
                numColumns={2}
                contentContainerStyle={{
                    justifyContent: 'space-between'
                }}
                ListHeaderComponent={listHeader}
            />

        </SafeAreaView>
    )
}

export default News