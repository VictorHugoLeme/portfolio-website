import React from 'react'

const Flag = ({ image, isSelected, onClick }) => (
    <img alt="flag" src={image}
        className={
            isSelected
                ? 'flag selected'
                : 'flag'
        } onClick={onClick} />
)

export default Flag