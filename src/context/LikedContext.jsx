import React, { createContext, useState } from 'react';

export const LikedContext = createContext();

export const LikedProvider = ({ children }) => {
    const [liked, setLiked] = useState([]);

    const toggleLiked = (item) => {
        setLiked(prevLiked => {
            if (prevLiked.some(e => e.id === item.id)) {
                return prevLiked.filter(e => e.id !== item.id);
            } else {
                return [...prevLiked, item];
            }
        });
    };

    return (
        <LikedContext.Provider value={{ liked, toggleLiked }}>
            {children}
        </LikedContext.Provider>
    );
};
