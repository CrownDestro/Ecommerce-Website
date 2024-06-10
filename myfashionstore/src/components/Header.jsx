import React from 'react';
import { Helmet } from 'react-helmet';

function Header({ title, css }) {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compactible" content="IE-edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login Page</title>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <title>{title}</title>
        <link rel="stylesheet" href={`/css/${css}`} />
      </Helmet>
    </>
  );
}

export default Header;
