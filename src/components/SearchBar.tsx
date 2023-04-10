import React, { FC, useState } from "react"
import { Link } from 'react-router-dom';
import '../styles/SearchBar.css';

interface Props {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export const SearchBar: FC<Props> = ({ onSearch, isLoading }) => {
  const [prevSearchValue, setPrevSearchValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const search = () => {
    if(searchValue.trim() !== prevSearchValue.trim()) {
      onSearch(searchValue);
    };
    setPrevSearchValue(searchValue);
  }

  return (
    <div className="search-box">
      <input
        className="search-field"
        onKeyDown={({key}) => key === 'Enter' ? search() : null }
        value={searchValue}
        onChange={(e) => setSearchValue( e.target.value)}
        placeholder="Enter your search query"
      />
      <button
        className="search-button"
        onClick={() => search()}
        disabled={!searchValue || isLoading}
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
      <Link className="manage-button" to='/favorites'>Manage Favorites</Link>
    </div>
  )
}