import React from 'react';
import PropTypes from 'prop-types';
import s from './PhotoCard.module.css';

const PhotoCard = ({
  smallImg,
  type,
  likes,
  views,
  comments,
  downloads,
  onBtnOpenModalClick,
}) => {
  return (
    <>
      <li className={s.photo_card}>
        <img src={smallImg} alt={type} />

        <div className={s.stats}>
          <p className={s.stats_item}>
            <i className="material-icons">thumb_up</i>
            {likes}
          </p>
          <p className={s.stats_item}>
            <i className="material-icons">visibility</i>
            {views}
          </p>
          <p className={s.stats_item}>
            <i className="material-icons">comment</i>
            {comments}
          </p>
          <p className={s.stats_item}>
            <i className="material-icons">cloud_download</i>
            {downloads}
          </p>
        </div>
        <button
          type="button"
          onClick={onBtnOpenModalClick}
          className={s.fullscreen_button}
        >
          <i className="material-icons">zoom_out_map</i>
        </button>
      </li>
    </>
  );
};

PhotoCard.propTypes = {
  smallImg: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  onBtnOpenModalClick: PropTypes.func.isRequired,
};

export default PhotoCard;
