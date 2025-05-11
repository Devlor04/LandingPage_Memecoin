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
        className={` space-y-8 py-1 mb-[20px] ${widthClass} ${className}`}
        style={{ ...widthStyle, marginTop: topMargin }} // Áp dụng topMargin qua style
      >
        {children}
      </div>
    </div>
  );
};

export default ContentWrapper;