import React from 'react';
import Link from 'next/link';

const Logo = ({ url = '/', light }) => {
  if (light) {
    return (
      <Link href={url}>
        <a className="ps-logo">PILES</a>
      </Link>
    );
  } else {
    return (
      <Link href={url}>
        <a className="ps-logo">PILES</a>
      </Link>
    );
  }
};

export default Logo;
