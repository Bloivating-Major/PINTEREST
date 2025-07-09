import { Image as IKImage } from '@imagekit/react';

const CustomImage = ({ path, alt, className, w , h }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
      src={path}
      transformation={[
        {
          height: h,
          width: w,
        },
      ]}
      alt={alt}
      loading="lazy"
      className={className}
    />
  );
};

export default CustomImage;
