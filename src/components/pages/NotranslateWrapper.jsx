import React from 'react';

const NotranslateWrapper = ({ children, excludeServices }) => {
  React.useEffect(() => {
   
    if (!excludeServices) {
      document.body.classList.add('notranslate');
    }

    
    return () => {
      document.body.classList.remove('notranslate');
    };
  }, [excludeServices]); 

  return <>{children}</>;
};

export default NotranslateWrapper;