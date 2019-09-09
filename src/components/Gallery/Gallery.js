import React from 'react';
import PropTypes from 'prop-types';
import s from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';

const Gallery = ({ items, onBtnLoadMoreClick, onBtnOpenModalClick }) => {
  return (
    <>
      <ul className={s.gallery}>
        {items.map(item => (
          <PhotoCard
            key={item.id}
            id={item.id}
            smallImg={item.smallImg}
            type={item.type}
            likes={item.likes}
            views={item.views}
            comments={item.comments}
            downloads={item.downloads}
            onBtnOpenModalClick={() => onBtnOpenModalClick(item.id)}
          />
        ))}
      </ul>
      <button type="button" onClick={onBtnLoadMoreClick} className={s.button}>
        Load more
      </button>
    </>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onBtnLoadMoreClick: PropTypes.func.isRequired,
  onBtnOpenModalClick: PropTypes.func.isRequired,
};

export default Gallery;
