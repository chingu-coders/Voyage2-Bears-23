/**
 * Voyage-2 Team-Bears-23
 * @date 10/10/2017
 *
 * @ticket SLNKR-017
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/issues/14
 *
 * @flow
 */
import React from 'react'

type Props = {
  searchValue: string,
  handleSearch: Function,
};

const HeaderSearchField = ({ searchValue, handleSearch }: Props) => (
  <div className="o-slinker-headersearch">
    <input 
      className={searchValue.length > 0 ? "o-search-input searching": "o-search-input"}
      placeholder="Search"
      value={searchValue}
      onChange={(event) => handleSearch(event.target.value)}/>
    <button className={searchValue.length > 0 ? "o-search-cancel visible": "o-search-cancel"}></button>
  </div>
);

export default HeaderSearchField;