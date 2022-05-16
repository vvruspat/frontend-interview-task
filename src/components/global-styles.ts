import { createGlobalStyle } from 'styled-components';

import EuclidCircularBSemiBoldEot from '../assets/font/EuclidCircularB-SemiBold.eot';
import EuclidCircularBSemiBoldWoff from '../assets/font/EuclidCircularB-SemiBold.woff';
import EuclidCircularBSemiBoldWoff2 from '../assets/font/EuclidCircularB-SemiBold.woff2';
import EuclidCircularBSemiBoldTtf from '../assets/font/EuclidCircularB-SemiBold.ttf';

import EuclidCircularBRegularEot from '../assets/font/EuclidCircularB-Regular.eot';
import EuclidCircularBRegularWoff from '../assets/font/EuclidCircularB-Regular.woff';
import EuclidCircularBRegularWoff2 from '../assets/font/EuclidCircularB-Regular.woff2';
import EuclidCircularBRegularTtf from '../assets/font/EuclidCircularB-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Euclid Circular B';
    src: url('${EuclidCircularBSemiBoldEot}');
    src: local('Euclid Circular B SemiBold'), local('EuclidCircularB-SemiBold'),
    url('${EuclidCircularBSemiBoldEot}?#iefix') format('embedded-opentype'),
    url('${EuclidCircularBSemiBoldWoff2}') format('woff2'),
    url('${EuclidCircularBSemiBoldWoff}') format('woff'),
    url('${EuclidCircularBSemiBoldTtf}') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Euclid Circular B';
    src: url(${EuclidCircularBRegularEot});
    src: local('Euclid Circular B Regular'), local('EuclidCircularB-Regular'),
    url('${EuclidCircularBRegularEot}?#iefix') format('embedded-opentype'),
    url('${EuclidCircularBRegularWoff2}') format('woff2'),
    url('${EuclidCircularBRegularWoff}') format('woff'),
    url('${EuclidCircularBRegularTtf}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  :root {
    /**
     * Colors
     */

    /* Primary accent */

    --primary-accent-basic-color: #0F3A7D;
    --primary-accent-basic-1-color: #184A98;
    --primary-accent-basic-2-color: #215CB8;
    --primary-accent-basic-3-color: #2A65C3;
    --primary-accent-basic-4-color: #1E63CE;
    --primary-accent-basic-5-color: #2A6EDA;
    --primary-accent-basic-6-color: #0973DE;
    --primary-accent-basic-7-color: #1287FC;

    --primary-accent-fail-color: #C41E19;
    --primary-accent-success-color: #189525;

    /* Secondary accent */

    --secondary-accent-basic-color: #210C40;
    --secondary-accent-basic-1-color: #4E3D67;
    --secondary-accent-basic-2-color: #908FB9;
    --secondary-accent-basic-3-color: #A6A5C7;
    --secondary-accent-basic-4-color: #A7BAD8;
    --secondary-accent-basic-5-color: rgba(139, 162, 197, 0.64);
    --secondary-accent-basic-6-color: #89D3DB;

    /* Tertiary accent */

    --tertiary-accent-basic-color: rgba(204, 211, 228, 0.8);
    --tertiary-accent-basic-1-color: #DDE1EB;
    --tertiary-accent-basic-2-color: #E4E8F1;
    --tertiary-accent-basic-3-color: #EFEEF3;
    --tertiary-accent-basic-4-color: #B7F8F8;
    --tertiary-accent-basic-5-color: rgba(242, 247, 248, 0.8);
    --tertiary-accent-basic-6-color: rgba(20, 116, 130, 0.04);
    --tertiary-accent-basic-7-color: #F9F9F9;
    --tertiary-accent-basic-8-color: rgba(251, 251, 251, 0.5);


    /* Primary content */

    --primary-content-basic-color: #1C0A36;
    --primary-content-basic-1-color: #696A7D;
    --primary-content-basic-2-color: #8A849C;
    --primary-content-basic-3-color: #8E899D;
    --primary-content-basic-4-color: #828994;
    --primary-content-basic-5-color: #B3AFC0;
    --primary-content-basic-6-color: #C6E2E9;
    --primary-content-basic-7-color: #F2F7F8;

    /* Secondary content */

    --secondary-content-basic-color: #222A41;
    --secondary-content-basic-1-color: #38415C;
    --secondary-content-basic-2-color: #737390;
    --secondary-content-basic-3-color: #21AABA;
    --secondary-content-basic-4-color: #82C8D5;
    --secondary-content-basic-5-color: #CCD3E4;

    /* Tertiary content */

    --tertiary-content-basic-color: #D4D8E0;
    --tertiary-content-basic-1-color: #E1DEE5;
    --tertiary-content-basic-2-color: #E5E5EB;
    --tertiary-content-basic-3-color: #EDEDF0;
    --tertiary-content-basic-4-color: #F0EFF3;
    --tertiary-content-basic-5-color: #F1F2F4;
    --tertiary-content-basic-6-color: #EDF6F6;
    --tertiary-content-basic-7-color: #EFF5F6;
    --tertiary-content-basic-8-color: #FBFBFB;
    --tertiary-content-basic-9-color: rgba(247, 247, 247, 0.4);


    /* Gradients */

    /* Primary accent */
    --primary-accent-basic-gradient: linear-gradient(180deg, #21519C 0%, #184A98 100%);
    --primary-accent-basic-1-gradient: linear-gradient(180deg, #326BC5 0%, #2A65C3 100%);
    --primary-accent-basic-2-gradient: linear-gradient(180deg, rgba(42, 101, 195, 0.9) 0%, #2A65C3 100%);
    --primary-accent-basic-3-gradient: linear-gradient(180deg, #3273DB 0%, #2A6EDA 100%);

    --primary-accent-fail-gradient: linear-gradient(180deg, rgba(196, 30, 25, 0.9) 0%, #C41E19 100%);
    --primary-accent-success-gradient: linear-gradient(180deg, rgba(24, 149, 37, 0.9) 0%, #189525 100%);
    --primary-accent-disabled-gradient: linear-gradient(180deg, rgba(33, 170, 186, 0.9) 0%, #21AABA 100%);

    /* Light */
    --light-accent-basic-gradient: linear-gradient(180deg, rgba(105, 106, 125, 0.1) 0%, rgba(105, 106, 125, 0.12) 100%);
    --light-accent-basic-1-gradient: linear-gradient(180deg, rgba(105, 106, 125, 0.07) 0%, rgba(105, 106, 125, 0.08) 100%);
    --light-accent-basic-2-gradient: linear-gradient(180deg, rgba(234, 245, 246, 0.72) 0%, rgba(234, 245, 246, 0.84) 100%);
    --light-accent-basic-3-gradient: inear-gradient(270deg, rgba(240, 246, 248, 0.72) 0%, rgba(242, 247, 249, 0.72) 24.99%, rgba(243, 248, 250, 0.72) 49.11%, rgba(245, 250, 251, 0.72) 74.97%, rgba(247, 251, 252, 0.72) 100%);
    --light-accent-basic-4-gradient: linear-gradient(180deg, rgba(234, 245, 246, 0.288) 0%, rgba(234, 245, 246, 0.3456) 100%);
    --light-accent-basic-5-gradient: linear-gradient(180deg, rgba(206, 233, 239, 0.12) 0%, rgba(206, 233, 239, 0.16) 98.47%);
    --light-accent-basic-6-gradient: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.9) 69.2%, rgba(255, 255, 255, 0.0001) 100%);

    --light-accent-tag-gradient: linear-gradient(180deg, rgba(18, 135, 252, 0.08) 0%, rgba(18, 135, 252, 0.1) 96.69%);
    --light-accent-success-gradient: linear-gradient(180deg, rgba(24, 149, 37, 0.12) 0%, rgba(24, 149, 37, 0.16) 96.69%);

    /* Dark */
    --dark-accent-basic-gradient: linear-gradient(180deg, rgba(29, 39, 68, 0.9) 0%, #1D2744 100%);
    --dark-accent-basic-1-gradient: linear-gradient(180deg, rgba(33, 12, 64, 0.6) 0%, rgba(33, 12, 64, 0.68) 100%);

    /* Background */
    --background: white;


    /**
     * Typography
     */
    --basic-font-size: 16px;

    --font-size-l: 1.38rem;
    --font-size-m: 0.88rem;
    --font-size-s: 0.75rem;

    --line-height-l: 1.88rem;
    --line-height-m: 1.19rem;
    --line-height-s: 1.06rem;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: "Euclid Circular B", "Open Sans", Arial, sans-serif;
    font-size: var(--basic-font-size);
  }

  body {
    font-size: var(--font-size-m);
  }


`;
