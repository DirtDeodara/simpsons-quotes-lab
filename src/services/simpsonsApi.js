export const getSimpsonsQuote = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=1')
    .then(res => {
      if(!res.ok) throw 'Sadly, I cannot deliver the wit and beauty you so desire.';
      return res.json();
    })
    .then(json => {
      return (json[0]);
    });
};
