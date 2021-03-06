import React, { Component } from 'react';
import s from './App.module.css';
import { fetchInPixabay } from '../services/api';
import SearchForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';
import Modal from './Modal/Modal';

const INITIAL_STATE = {
  items: [],
  search: '',
  page: 1,
  err: null,
  showModal: {},
  isOpenModal: false,
};

const mapper = datas => {
  return datas.map(
    ({ webformatURL: smallImg, largeImageURL: largeImg, ...props }) => ({
      smallImg,
      largeImg,
      ...props,
    }),
  );
};

export default class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    this.fetching();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.reset();
    await this.fetching();
  };

  handleLoadMore = () => {
    this.fetching();
  };

  handleOpenModal = id => {
    this.setState(ps => ({
      showModal: ps.items.find(item => item.id === id),
      isOpenModal: true,
    }));
    document.querySelector('body').style.overflow = 'hidden';
  };

  handleCloseModal = e => {
    if (e.target !== e.currentTarget) return;
    this.setState({
      isOpenModal: false,
    });
    document.querySelector('body').style.overflow = 'auto';
  };

  handlePressKey = ({ code }) => {
    if (code !== 'Escape') return;
    this.setState({
      isOpenModal: false,
    });
    document.querySelector('body').style.overflow = 'auto';
  };

  fetching = async () => {
    const { search, page } = this.state;
    try {
      await fetchInPixabay(search, page).then(({ data }) =>
        this.setState(ps => ({
          items: [...ps.items, ...mapper(data.hits)],
          page: ps.page + 1,
        })),
      );
      await window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    } catch (err) {
      throw this.setState({ err });
    }
  };

  reset = () => {
    this.setState({
      items: [],
      page: 1,
    });
  };

  render() {
    const { items, search, err, showModal, isOpenModal } = this.state;
    return (
      <div className={s.app}>
        <SearchForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          valueInput={search}
        />
        {err ? (
          <p>Шось пошло не так як треба</p>
        ) : (
          <Gallery
            items={items}
            onBtnLoadMoreClick={this.handleLoadMore}
            onBtnOpenModalClick={this.handleOpenModal}
            isOpenModal={isOpenModal}
          />
        )}
        {isOpenModal && (
          <Modal
            onCloseModalClick={isOpenModal && this.handleCloseModal}
            onCloseModalPressKey={this.handlePressKey}
            largeImg={showModal.largeImg}
            type={showModal.type}
          />
        )}
      </div>
    );
  }
}
