import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { News } from '../types/news';
import moment from "moment";

const ArticleCard = ({ urlToImage, source, title, publishedAt }: News.Article) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={{ backgroundColor: isDarkMode ? '#000' : '#fff', ...largeStyles.articleCard }}>
            <Image
                fadeDuration={250}
                source={urlToImage == null ? require('../assets/placeholder.png') : { uri: urlToImage }}
                defaultSource={require('../assets/placeholder.png')}
                resizeMode='cover'
                style={largeStyles.articleMedia} />
            <View style={largeStyles.textWrapper}>
                <Text style={{ color: isDarkMode ? '#fff' : '#000', ...largeStyles.articleTitle }}>{title}</Text>
                <View style={largeStyles.metadata}>
                    <Text style={{ color: isDarkMode ? '#fff' : '#999', ...largeStyles.sourceName }}>{source.name.toUpperCase()}</Text>
                    <Text style={{ color: isDarkMode ? '#fff' : '#999', ...largeStyles.timeAgo }}>{moment(publishedAt).fromNow().toUpperCase()}</Text>
                </View>
            </View>
        </View >
    );
};

const largeStyles = StyleSheet.create({
    articleCard: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    articleMedia: {
        flex: 4,
        width: '100%',
        height: undefined,
        aspectRatio: 1.5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    metadata: {
        justifyContent: 'center',
        flexDirection: 'row',
        opacity: .75,
        width: '100%',
    },
    textWrapper: {
        marginTop: 5,
        paddingHorizontal: 8,
        paddingVertical: 4,
        flex: 1,
        marginRight: 'auto',
    },
    sourceName: {
        fontWeight: '600',
        fontSize: 10,
        marginVertical: 5,
    },
    timeAgo: {
        fontWeight: '600',
        fontSize: 10,
        marginVertical: 5,
        marginLeft: 'auto'
    },
    articleTitle: {
        fontWeight: '600',
        fontSize: 18,
        marginVertical: 5,
    }
})

export default ArticleCard;