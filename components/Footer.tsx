import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>© 2024 Password Generator App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#4CAF50', // Customize the background color
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 2,
        borderTopColor: '#388E3C',
    },
    text: {
        color: '#FFFFFF', // Text color
        fontSize: 14,
    },
});

export default Footer;
