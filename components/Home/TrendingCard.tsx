import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image, useImage } from 'expo-image';
import { Product } from '@/constants/Types';
import { Colors } from '@/constants/Theme';
export default function TrendingCard(item: Product) {
    const blurhash = 'LKN]Rv%2Tw=w]~RBVZRi};RPxuwH';
    const image = useImage(item.imageUrl,{
        maxWidth: 800,
        onError(error, retry) {
          console.error('Loading failed:', error.message);
        },
      });
      if (!image) {
        return <Text>Image is loading...</Text>;
      }

  return (
    <View style={styles.container}>
    <Text>{item.name}</Text>
    <Image 
    source={image} 
    style={{ width: image.width / 2, height: image.height }}
    placeholder={{blurhash}}
 />
</View>
  )
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding: 3,
    height: 300
 },
    image: {
        flex: 1,
        width: 100,
        height: 100,
      },
})