import {  RefreshControl, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { GetTrending } from '@/helpers/GetTrending';
import { Product } from '@/constants/Types';
import { FlashList } from "@shopify/flash-list";
import { Colors } from '@/constants/Theme';
import TrendingCard from './TrendingCard';

export default function Trending() {
    const [data, setData] = useState<Product[] | null>([]);
    const [refreshing, setRefreshing] = useState(false);
    const latestRef = useRef<FlashList<Product>>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        GetData();
    }, []);
    useEffect(()=>{
        const interval = setInterval(() => {
            ScrollToNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex])

    const GetData = async () => {
        setRefreshing(true);
        try {
            const res = await GetTrending();
            setData(res);
        } catch (err) {
            console.log(err);
        } finally {
            setRefreshing(false);
        }
    };

    const ScrollToNext = () => {
        if (!data || data.length === 0) return;
        const nextIndex = (currentIndex + 1) % data.length; 
        latestRef.current?.scrollToIndex({
            index: nextIndex,
            animated: true,
        });
        setCurrentIndex(nextIndex);
    };

    return (
      <View>
          <FlashList
            ref={latestRef}
            data={data}
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{
                padding: 20,
            }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={GetData}
                    tintColor={Colors.secondary}
                />
            }
            estimatedItemSize={5}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TrendingCard {...item} />}
        />
        <View style={styles.dotcontainer}>
        {
            data?.map((item, index) => (
                
                <View
                key={index}
                style={[
                    styles.dot,
                    currentIndex === index && styles.activeDot,
                ]}
            />
                
            ))
        }
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dot: {
        height:5,
        width:5,
        borderRadius: 5,
        backgroundColor: Colors.secondary
    },
    dotcontainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        marginTop: 20
    },
    activeDot: {
        width: 12,
        opacity: 1, 
    },
});
