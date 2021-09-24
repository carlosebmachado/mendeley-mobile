import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
      <WebView
        style={styles.container}
        source={{ uri: 'https://www.mendeley.com/library/' }}>
        
        <StatusBar
          backgroundColor="#f8f8f8"
          barStyle="dark-content"/>

      </WebView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
