import React from 'react';
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const PostImageViewer = ({
  images,
  visible,
  setVisible,
  currentIndex,
}: {
  images: string[];
  visible: boolean;
  setVisible: (v: boolean) => void;
  currentIndex: number;
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={() => setVisible(false)}
    >
      <ImageViewer
        imageUrls={images.map((uri) => ({ url: uri }))}
        index={currentIndex}
        onSwipeDown={() => setVisible(false)}
        enableSwipeDown
        onCancel={() => setVisible(false)}
        backgroundColor="#000"
        saveToLocalByLongPress={false}
      />
    </Modal>
  );
};

export default PostImageViewer;
