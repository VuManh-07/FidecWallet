import React, { useState } from 'react';
import { Dimensions, FlatList, View } from 'react-native';

const { width } = Dimensions.get('window');

interface CustomSliderProps<T> {
  data: T[];
  itemsPerPage: number;
  renderPage: (props: { pageData: T[]; pageIndex: number }) => JSX.Element;
}

const CustomSlider = <T,>({
  data,
  itemsPerPage,
  renderPage,
}: CustomSliderProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleScroll = (event: any) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(newIndex);
  };

  return (
    <View className="flex-1">
      <FlatList
        data={Array.from({ length: totalPages }, (_, i) =>
          data.slice(i * itemsPerPage, (i + 1) * itemsPerPage)
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) =>
          renderPage({ pageData: item, pageIndex: index })
        }
      />

      {/* Indicator Dots */}
      <View className="mt-2 flex-row items-center justify-center">
        {Array.from({ length: totalPages }).map((_, index) => (
          <View
            key={index}
            className={`mx-1 size-2 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-600'
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default CustomSlider;
