import './search-box.scss';

const SearchBox = (props) => {    

    return (
        <input 
            type='search' 
            className={props.className}
            placeholder={props.placeholder}
            onChange={props.onChangeHandler} 
        />
    )
}

export default SearchBox;