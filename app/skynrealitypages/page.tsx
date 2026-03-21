"use client";

import React from 'react';
import TransformSkinHero from './transformskinhero';

import GlowEffect from './theglowppage';
import Productdescripton from './productdesc';
import SkynManifestoPage from './skynman';
import Formpage from './formpage';


export default function SkynReality() {
  return (
     <div>
     <TransformSkinHero/>
     <Productdescripton/>
    
     <SkynManifestoPage/>
      <GlowEffect/>
      <Formpage/>
      </div>
  
  );
}