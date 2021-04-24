import React from 'react';



class AddFavoritesButton extends React.Component{
    
    addToFavorite (id,name,img) {
        
        const storage = localStorage.getItem("RecipieId","RecipieName","RecipImg");
        if (!storage) {
            localStorage.setItem("RecipieId", id)
            localStorage.setItem("RecipieName", name)
            localStorage.setItem("RecipImg", img)
            document.location.reload()
        }
        else {
            storage.split(',')
           
            localStorage.setItem("RecipieId", id)
            localStorage.setItem("RecipieName",name)
            localStorage.setItem("RecipImg",img)
           
            document.location.reload()
        }
    }

    render() {
        console.log(this.props.onClick)
        return (          
            <button onClick={() => this.addToFavorite(this.props.RecipieId,this.props.RecipieName,this.props.RecipImg)} className="addButton">
                Add to favorit
                 </button> 
        )
    }
}

export default AddFavoritesButton;