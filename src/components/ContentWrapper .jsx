import PropTypes from 'prop-types';

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  full: 'max-w-full',
};

const ContentWrapper = ({ children, maxWidth = '3xl', width, className = '', topMargin = '80px' }) => {
  const widthStyle = width ? { width } : {};
  const widthClass = width ? '' : maxWidthClasses[maxWidth] || 'max-w-3xl';

  return (
    <div className="w-full flex justify-center">
      <div
        className={`space-y-2.5 px-2.5 py-1 mb-[20px] ${widthClass} ${className}`} // space-y-2.5 để cách 10px, px-2.5 để chừa 10px hai bên
        style={{ ...widthStyle, marginTop: topMargin }}
      >
        {children}
      </div>
    </div>
  );
};

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', 'full']),
  width: PropTypes.string,
  className: PropTypes.string,
  topMargin: PropTypes.string,
};

export default ContentWrapper;