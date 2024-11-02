import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Password Generator</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#388E3C',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Header;
