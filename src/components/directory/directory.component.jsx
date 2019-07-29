import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

const Directory = ({ sections }) => {
    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...otherSectionProps }) => (
                // this will pass all the props to the MenuItem with the same key-value pairs
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
