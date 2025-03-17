import toast from 'react-hot-toast';
import s from './SearchBar.module.css';
import { ChangeEvent, FormEvent, KeyboardEvent, useState } from 'react';

interface SearchBarProps {
  onSubmit: (query: string) => void;
  query?: string;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleEnterKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit(query);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query.trim() === '') {
      toast('Please enter a search query!', {
        icon: '❗️❗️❗️',
      });
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <header>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          onKeyDown={handleEnterKeyDown}
          value={query}
          type='text'
          placeholder='Search images and photos'
          autoComplete='off'
          autoFocus
          className={s.input}
        />
        <button type='submit' className={s.btn}>
          Search
        </button>
      </form>
    </header>
  );
}
