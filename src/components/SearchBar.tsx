import React, { FC, useEffect, useState } from "react"

interface Props {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export const SearchBar: FC<Props> = ({ onSearch, isLoading }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="search-box">
      <input
        className="search-field"
        onKeyDown={({key}) => key === 'Enter' ? onSearch(searchValue) : null }
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Enter your search query"
      />
      <button
        className="search-button"
        onClick={() => onSearch(searchValue)}
        disabled={!searchValue || isLoading}
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </div>
  )
}