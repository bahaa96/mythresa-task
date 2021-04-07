import React, { createRef, useEffect } from 'react';
import { Image, ImageStyle, Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';

interface IProps {
  imageUrl: string;
  style: ImageStyle;
}

const ImageRenderer: React.FC<IProps> = React.memo(
  ({ imageUrl, style }) => {
    const imageRef = createRef<Image>();

    const handleOnLoad = () => {
      if (isIOS && imageRef.current) {
        imageRef.current.setNativeProps({
          opacity: 1,
        });
      }
    };

    useEffect(() => {
      /*
        On iOS while recycling till the new image is loaded the old one remains visible.
        This forcefully hides the old image.
         It is then made visible onLoad
      */
      if (isIOS && imageRef.current) {
        imageRef.current.setNativeProps({
          opacity: 0,
        });
      }
    }, [imageRef]);

    return (
      <Image
        ref={imageRef}
        style={style}
        onLoad={handleOnLoad}
        source={{ uri: imageUrl }}
      />
    );
  },
  (prevProps, nextProps) => prevProps.imageUrl === nextProps.imageUrl,
);

export default ImageRenderer;
