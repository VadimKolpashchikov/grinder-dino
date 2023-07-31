import React from "react";
import Image from "../components/Image.jsx";

function Reviews() {
  function scrollInto() {
    document.getElementById("models").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section id="reviews" className="reviews">
      <div className="content-container">
        <div className="reviews__wrapper">
          <div className="title-box">
            <h3 className="title">
              Обзор
              <br /> гриндеров DINO{" "}
              <span className="background">
                <span className="name">LITE</span>
                <span className="border">/</span>
                <span className="name">STANDART</span>
                <span className="border">/</span>
                <span className="name premium">PREMIUM</span>
              </span>
            </h3>
          </div>
          <div className="reviews__box">
            <div className="reviews__block-video">
              <a
                href="https://youtu.be/o42QdUDxjf4"
                data-fancybox="video-reviews"
                className="reviews__video-img"
              >
                <Image
                  mobil={true}
                  media={575}
                  srcImgMob={`build/images/reviews/video-poster.jpg`}
                  srcSourceMob={`build/images/reviews/video-poster.webp`}
                  srcImg={`build/images/reviews/video-poster-mob.jpg`}
                  srcSource={`build/images/reviews/video-poster-mob.webp`}
                  altImg={"#"}
                />
                <div className="reviews__play">
                  <img src="build/images/reviews/play-video.svg" alt="" />
                </div>
              </a>
            </div>
            <div className="reviews__block-more">
              <p className="reviews__desc">Узнайте подробнее о каждой модели</p>
              <div className="reviews__icon" onClick={scrollInto}>
                <img src="build/images/reviews/icon-reviews.svg" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
