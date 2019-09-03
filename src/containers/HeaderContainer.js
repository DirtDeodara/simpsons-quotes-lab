import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getQuoteLoading } from '../selectors/quoteSelectors';
import { fetchQuote } from '../actions/simpsonsAction';
import Load from '../components/quote/Load';
import styles from '../containers/HeaderContainer.css';
import logo from '../assets/homer-head.png';

class Header extends Component{
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  }

  render() {
    const loadingText = 'Loading...';
    const { loading, fetch } = this.props;
    if(loading) return (
      <section className={styles.center}>
        <section className={styles.container}>
          <img className={styles.img} src={logo}></img>
          <h3 className={styles.h3} >{loadingText}</h3>
        </section>
      </section>
    );
    return (
      <section >
        <Load handleClick={fetch}/>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loading: getQuoteLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuote());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
