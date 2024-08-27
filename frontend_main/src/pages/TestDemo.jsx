import React, { useState } from 'react';
import { HeaderMenu } from '../components/HeaderMenu';
import { FooterArea } from '../components/FooterArea';
//import { HomeFeatureBoard } from '../components/HomeFeatureBoard';
//import { HomeCustomerReviews } from '../components/HomeCustomerReviews';
import { CardAvatar } from '../components/CardAvatar';

export function TestDemo() {
  return (
    <>
      <HeaderMenu />
      <CardAvatar />
      <FooterArea />
    </>
  );
}

