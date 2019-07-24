import React from 'react';
import PropTypes from 'prop-types';

const Image = ({shouldShowImage}) => {
    return shouldShowImage ? <div className='image-holder col-xs-24 col-sm-8 col-lg-6'>
        <div className='pic-wrapper'>
            <a
                href='command-center.html'
                target='_self'
            >
                <picture>
                    <source
                        media='(min-width: 992px)'
                        srcSet='https://dlrdoc.deere.com/sales/salesmanual/images/NA/combines_headers/combines/gen4_commandcenter_4600.jpg'
                    />
                    <source
                        media='(min-width: 768px)'
                        srcSet='https://dlrdoc.deere.com/sales/salesmanual/images/NA/combines_headers/combines/gen4_commandcenter_4600.jpg'
                    />
                    <source
                        media='(min-width: 320px)'
                        srcSet='https://dlrdoc.deere.com/sales/salesmanual/images/NA/combines_headers/combines/gen4_commandcenter_4600.jpg'
                    />
                    <img src='https://dlrdoc.deere.com/sales/salesmanual/images/NA/combines_headers/combines/gen4_commandcenter_4600.jpg'/>
                </picture>
            </a>
        </div>
    </div>
        : null;
};

Image.propTypes = {
    shouldShowImage: PropTypes.bool
};

export default Image;

