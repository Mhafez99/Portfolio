import React from 'react';

const NavigationDots = ({active}) => {
    console.log(active);
    return (
        <div className='app__navigation'>
            {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
                <a href={`#${item}`}
                    key={item + index}
                    className='app__navigation-dot'
                    style={active == item ? {backgroundColor: '#017a72'} : {}}
                />
            )
            )}
        </div>
    );
};

export default NavigationDots;