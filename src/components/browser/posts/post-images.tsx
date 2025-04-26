import { useState } from 'react';

import { FlatList, Image, TouchableOpacity } from '@/components/ui';
import { HEIGHT, WIDTH } from '@/lib/hooks/use-responsive-dimensions';

import PostImageViewer from './post-image-viewer';

const PostImages = ({ images }: { images: string[] | [] }) => {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setVisible(true);
  };

  if (images.length === 1) {
    return (
      <>
        <TouchableOpacity onPress={() => openViewer(0)}>
          <Image
            source={{ uri: images[0] }}
            style={{
              width: '100%',
              height: HEIGHT(120),
              borderRadius: 12,
              marginBottom: 8,
            }}
            contentFit="fill"
          />
        </TouchableOpacity>
        <PostImageViewer
          images={images}
          visible={visible}
          setVisible={setVisible}
          currentIndex={currentIndex}
        />
      </>
    );
  }

  return (
    <>
      <FlatList
        data={images}
        horizontal
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => openViewer(index)}>
            <Image
              source={{ uri: item }}
              style={{
                width: WIDTH(100),
                height: HEIGHT(100),
                borderRadius: 10,
                marginRight: 8,
              }}
              contentFit="cover"
            />
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 8 }}
      />
      <PostImageViewer
        images={images}
        visible={visible}
        setVisible={setVisible}
        currentIndex={currentIndex}
      />
    </>
  );
};

export default PostImages;
