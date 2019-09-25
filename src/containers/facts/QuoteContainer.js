import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Quote from '../../components/quote/Quote';
import { getQuoteLoading, getQuote, getName, getImageUrl } from '../../selectors/quoteSelectors';
import { fetchQuote } from '../../actions/simpsonsAction';

class SimpsonsQuote extends Component{
  static propTypes = {
    character: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { quote, character, image } = this.props;
    return (
      <section>
        <Quote quote={quote} character={character} image={image}/>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  quote: getQuote(state),
  character: getName(state),
  image: getImageUrl(state),
  loading: getQuoteLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuote());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpsonsQuote);
