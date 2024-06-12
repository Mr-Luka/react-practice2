import React from "react";

const Header = (props) => {

    return (
        <header className="app-header">
            <h1>Digimon</h1>
            <form onSubmit={props.handleSubmit}>
                <button className="add-new" onClick={props.addNote}>Add new Digimon</button>
                <input 
                    className="search"
                    type="text"
                    placeholder="Enter Digimon name"
                    onChange={props.updateName}
                    />
            </form>
        </header>
    )
}

export default Header;