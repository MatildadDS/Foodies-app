import React, { useState } from 'react';
import "./styles/SearchBar.scss";


function Search() {
  const dataList = [

  ];

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);

  // exclude column list from filter
  const excludeColumns = ["id"];

  // handle change event of search input
  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(dataList);
    else {
      const filteredData = dataList.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  }



  return (
    <div className="searchbar">
      <input
        style={{ marginLeft: 5, paddingLeft: 80, paddingRight: 60 }}
        type="text"
        placeholder="🔍 Type to search..."
        value={searchText}
        onChange={e => handleChange(e.target.value)}
      />
      <div className="searchbox-container">
        {data.map((d, i) => {
          return <div key={i} className="searchbox" style={{ backgroundColor: d.color }}>
            <b>Categorie: </b>{d.categorie}<br />
            <b>Name: </b>{d.name}<br />
            <b>Country: </b>{d.country}<br />
            <b>Ingredient: </b>{d.ingredient}
          </div>
        })}
        <div className="clearboth"></div>
      </div>
    </div>
  );
}

// export default Search;