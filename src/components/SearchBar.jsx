// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { IconButton, Paper } from '@mui/material';
// import { Search } from '@mui/icons-material';


// const SearchBar = () => {
//   return (
//     <Paper
//       component="form"
//       onSubmit={() => {}} 
//       sx={{ 
//          borderRadius: 10,
//          border: '1px solid #e3e3e3',
//          p1: 2,
//          boxShadow: 'none',
//          mr: { sm: 5}
//       }}
//       >
//         <input 
//             className="search-bar"
//             placeholder='Search'
    
//             value=""
//             onChange={() => {}}
//         />
//             <IconButton type="button" sx={{ p: '10px', color: 'black'}}>
//             <Search />
//             </IconButton>
//     </Paper>
//   )
// }

// export default SearchBar;


// import React, { useState } from 'react';
// import axios from 'axios';

// const SearchBar = () => {
//   const [searchInput, setSearchInput] = useState('');

//   const handleInputChange = (event) => {
//     setSearchInput(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(searchInput);
//   };

//   return (
//     <form 
//     color=''
//     onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="what are you looking for???"
//         value={searchInput}
//         onChange={handleInputChange}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };



import {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Foo extends Component {
state = {
    input: '',
};

render() {
    return (
        <div class="wrap">
            <div class="search">
                <input
                    placeholder="What are you looking for?"
                    value={this.state.input}
                    onChange={(event) => this.setState({ input: event.target.value })}
                    type="text"
                    className="searchTerm"
                    id="input_text"
                ></input>
                <button type="submit" className="searchButton">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    );
  }
}


 export default Foo;

