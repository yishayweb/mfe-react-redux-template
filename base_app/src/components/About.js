import React, { Fragment, useEffect } from 'react';
const FirstApp = React.lazy(
  () => import('FirstApp/FirstAppPage')
);

const About = () => {

  return (
    <Fragment>
      <React.Suspense fallback='Loading Button'>
        <FirstApp />
      </React.Suspense>
    </Fragment>
  );
}

export default About;