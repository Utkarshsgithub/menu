import React from 'react'

export default function Categories({filterItems, categories}) {
    return (
        <div className="buttons-container">
            <ul className="buttons">
                {
                categories.map(category => {
                return (<li onClick={()=>filterItems(category)}>{category.toUpperCase()}</li>)
                })
            }
            </ul>
        </div>
    )
}
