import React, { useContext } from 'react';
import { HousingContext } from '../../utils/context';

export const App = () => {
    const appContext = useContext(HousingContext);
    console.log("Children", appContext)

    return (
      <div>
        {appContext}
      </div>
    );
  };
  