import React from "react";

const Header = (props) => {

    return (
        <header className="app-header">
            <h1>Digimon</h1>
            <form onSubmit={props.handleSubmit}>
                <input 
                    className="search"
                    type="text"
                    placeholder="Enter Digimon name"
                    onChange={props.updateName}
                    value={props.name}
                    />
                    <input 
                        type="submit" 
                        value="Add new Digimon"
                        className="add-new"

                        />
            </form>
        </header>
    )
}

export default Header;