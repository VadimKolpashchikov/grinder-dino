import React from "react";
function Image({ srcImg, srcImgMob, srcSource, srcSourceMob, altImg, media = 0, mobil = false, classImg = "" }) {
  return (
    <React.Fragment>
      {mobil ? (
        <picture>
          <source srcSet={srcSourceMob} media={`(min-width: ${media}px)`} type="image/webp"/>
          <source srcSet={srcImgMob}  media={`(min-width: ${media}px)`}/>
          <source srcSet={srcSource} type="image/webp" />
          <img className={classImg} src={srcImg} alt={altImg} />
        </picture>
      ) : (
        <picture>
          <source srcSet={srcSource} type="image/webp" />
          <img className={classImg} src={srcImg} alt={altImg} />
        </picture>
      )}
    </React.Fragment>
  );
}

export default Image;
