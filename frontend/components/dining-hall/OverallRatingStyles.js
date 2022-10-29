import { StyleSheet } from 'react-native';

import { THEME_STYLES } from '../../constants';

const overallRatingStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10,
        paddingHorizontal: 15,
        width: 300,
        height: 70,
        borderRadius: 10,
        backgroundColor: '#333',
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
    },
    starsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    starContainer: {
        width: 48,
        height: 48,
        flexDirection: 'row',
        position: 'relative',
    },
    star: {
        height: '100%',
        width: '100%',
    },
    starMask: {
        position: 'absolute',
        right: 0,
        height: '100%',
        backgroundColor: '#333',
    },
    starOutline: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    ratingContainer: {
        marginVertical: 15,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.25,
    },
    rating: {
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonFont,
        fontSize: 24,
    },
    starsText: {
        ...THEME_STYLES.whiteText,
        ...THEME_STYLES.libreCaslonFont,
        fontSize: 11,
    },
});

export default overallRatingStyles;