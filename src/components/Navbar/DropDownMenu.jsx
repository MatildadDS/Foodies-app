import React from 'react';

class DropDownMenu extends React.Component {
    constructor() {
        super();


        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.showMenu);
        });
    }

    closeMenu(event) {

        if (!this.dropdownMenu.contains(event.target)) {

            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });

        }
    }

    render() {
        return (
            <nav className="navBar">
                <button onClick={this.showMenu}>
                    Recettes ▾
                </button>
                {
                    this.state.showMenu
                        ? (
                            <div
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <button className="button"> Catégories </button>
                                <button className="button"> Pays </button>
                                <button className="button"> Ingrédients </button>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </nav>
        );
    }
}

export default DropDownMenu;