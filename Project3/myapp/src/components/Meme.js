import React from 'react';

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    async function getMeme() {
      await fetch('https://api.imgflip.com/get_memes')
        .then((res) => res.json())
        .then((data) => setAllMemes(data.data.memes));
    }
    getMeme();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function getMemeImage() {
    const index = Math.floor(Math.random() * allMemes.length);
    setMeme((prevMemeImage) => ({
      ...prevMemeImage,
      randomImage: allMemes[index].url,
    }));
  }
  return (
    <main>
      <div className='form'>
        <input
          className='input-text'
          type='text'
          placeholder='Enter a top line'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className='input-text'
          type='text'
          placeholder='Enter a bottom line'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <div className='meme'>
        {meme.randomImage && (
          <img src={meme.randomImage} className='meme-image' alt='' />
        )}
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  );
}
