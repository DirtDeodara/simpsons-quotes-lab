export const getQuote = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      if(!res.ok) throw 'Cannot deliver the wit you so desire';
      return res.json();
    });
};
