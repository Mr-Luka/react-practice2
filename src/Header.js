import React from "react";

const Header = (props) => {
    
    return (
        <header className="app-header">
            <h1>Digimon</h1>
            <aside>
                <button className="add-new" onClick={props.addNote}>Add new Digimon</button>
                <input 
                    className="search"
                    type="text"
                    placeholder="Enter Digimon name"
                    />
            </aside>
        </header>
    )
}

export default Header;