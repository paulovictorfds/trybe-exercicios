import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');

  return (
    <>
      <Head>
        <title>Form</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <label htmlFor="name">
        Nome completo:
        <input
          type="text"
          id="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </label>
      <label htmlFor="age">
        Idade:
        <input
          type="number"
          id="age"
          value={age}
          onChange={({ target }) => setAge(target.value)}
        />
      </label>
      <label htmlFor="city">
        Cidade:
        <input
          type="text"
          id="city"
          value={city}
          onChange={({ target }) => setCity(target.value)}
        />
      </label>
      <label htmlFor="fundamentos">
        Fundamentos:
        <input
          type="radio"
          id="fundamentos"
          name="modulo"
          checked={module === 'Fundamentos'}
          value="Fundamentos"
          onChange={({ target }) => setModule(target.value)}
        />
      </label>
      <label htmlFor="frontend">
        Front-end:
        <input
          type="radio"
          id="frontend"
          name="modulo"
          value="Front-end"
          checked={module === 'Front-end'}
          onChange={({ target }) => setModule(target.value)}
        />
      </label>
      <label htmlFor="backend">
        Back-end:
        <input
          type="radio"
          id="backend"
          name="modulo"
          checked={module === 'Back-end'}
          value="Back-end"
          onChange={({ target }) => setModule(target.value)}
        />
      </label>
      <label htmlFor="cs">
        Ciência da Computação:
        <input
          type="radio"
          id="cs"
          name="modulo"
          checked={module === 'Ciência da Computação'}
          value="Ciência da Computação"
          onChange={({ target }) => setModule(target.value)}
        />
      </label>
      <button type="submit">Enviar</button>
    </>
  );
}
