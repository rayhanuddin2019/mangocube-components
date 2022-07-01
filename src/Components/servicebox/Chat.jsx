import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';

/**
 * Primary UI component for user interaction
 */
export const Chat = ({ primary, backgroundColor, message, label, layouts, ...props }) => {
  var mode = primary ? 'flex' : 'grid';
  mode = layouts != undefined ? mode + ' ' + layouts: mode;
  
  return (
   
    <>
   
        <div
           className={[ 'p-6','max-w-sm','hover:bg-brand-gradient','bg-brand-gradient' ,'mx-auto' , 'bg-white', 'rounded-xl' ,'shadow-lg' ,'items-center' ,'space-x-4', mode].join(' ')}
         >
        <div className="shrink-0">
          <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
        </div>
        <div>
        <h2 className="text-xl font-medium text-black">{ label }</h2>
        <p className="text-slate-500">{message}</p>
        </div>
        </div>
     
    </>
  
  );
};

Chat.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Chat.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};



