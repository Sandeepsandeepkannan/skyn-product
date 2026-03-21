"use client";

import React from 'react';
import TransformSkinHero from './transformskinhero';


import Productdescripton from './productdesc';
import SkynManifestoPage from './skynman';
import Formpage from './formpage';
import GlowEffectResult from './glowppage';


export default function SkynReality() {
  return (
     <div>
     <TransformSkinHero/>
     <Productdescripton/>
    
     <SkynManifestoPage/>
      <GlowEffectResult/>
      <Formpage/>
      </div>
  
  );
}