import { Image as IKImage } from '@imagekit/react';

const Image = ({ path, src, alt, className, w, h }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
      path={path}
      src={src}
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

export default Image;
