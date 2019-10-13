import React from 'react';
import PropTypes from 'prop-types';

const IconLogo = props => {
  const { className, ...rest } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="25" viewBox="0 0 100 25">
  <path id="teamful_copy" data-name="teamful copy" d="M11.957,9.315H8.13V5.069H3.783V9.315H1v3.539H3.783v6.812a4.654,4.654,0,0,0,.391,2.005,3.506,3.506,0,0,0,1.087,1.342,4.583,4.583,0,0,0,1.623.752A8.227,8.227,0,0,0,8.913,24a13.693,13.693,0,0,0,1.536-.088,6.488,6.488,0,0,0,1.507-.354V19.872a1.531,1.531,0,0,1-.855.339,7.361,7.361,0,0,1-.913.074,2.717,2.717,0,0,1-1.116-.192,1.323,1.323,0,0,1-.623-0.546,2.19,2.19,0,0,1-.261-0.84,9.076,9.076,0,0,1-.058-1.076V12.854h3.826V9.315ZM23.725,18.9a4.9,4.9,0,0,1-1.29,1.253,3.224,3.224,0,0,1-1.812.487,3.164,3.164,0,0,1-2.145-.752,3.514,3.514,0,0,1-1.13-2.02H27.435V16.481a9.731,9.731,0,0,0-.464-3.1,6.96,6.96,0,0,0-1.319-2.374,5.711,5.711,0,0,0-2.087-1.519,6.855,6.855,0,0,0-2.739-.531,8.742,8.742,0,0,0-3.058.531,7.338,7.338,0,0,0-2.493,1.519,7.127,7.127,0,0,0-1.667,2.374,7.623,7.623,0,0,0-.609,3.1,7.619,7.619,0,0,0,.609,3.1,7.117,7.117,0,0,0,1.667,2.374,7.329,7.329,0,0,0,2.493,1.519A8.741,8.741,0,0,0,20.826,24a7.793,7.793,0,0,0,3.3-.737,6.954,6.954,0,0,0,2.638-2.094Zm-6.377-4.04a2.847,2.847,0,0,1,.246-1.017,2.651,2.651,0,0,1,.609-0.855,3.137,3.137,0,0,1,2.217-.84,2.555,2.555,0,0,1,1.942.8,2.588,2.588,0,0,1,.725,1.917H17.348Zm20.841,8.788h4V16.363a15.471,15.471,0,0,0-.29-3.17,5.561,5.561,0,0,0-1.029-2.315A4.579,4.579,0,0,0,38.9,9.448a8.656,8.656,0,0,0-3.145-.487,10,10,0,0,0-3.362.575,7.95,7.95,0,0,0-2.841,1.725L31.87,13.68a5.36,5.36,0,0,1,1.58-1.253,4.2,4.2,0,0,1,1.957-.457,2.949,2.949,0,0,1,1.956.693,2.317,2.317,0,0,1,.826,1.873q-0.9,0-1.957.029a19.243,19.243,0,0,0-2.116.177,12.634,12.634,0,0,0-2.044.457,6.008,6.008,0,0,0-1.754.87A4.07,4.07,0,0,0,29.1,17.484a4.455,4.455,0,0,0-.449,2.094,4.289,4.289,0,0,0,.406,1.917,4.04,4.04,0,0,0,1.1,1.386,4.758,4.758,0,0,0,1.609.84,6.441,6.441,0,0,0,1.9.28,6.531,6.531,0,0,0,2.536-.5,4.108,4.108,0,0,0,1.928-1.651h0.058v1.8Zm0-6.281v0.944a2.34,2.34,0,0,1-1.015,2.005,3.641,3.641,0,0,1-1.058.5,4.3,4.3,0,0,1-1.232.177,2.75,2.75,0,0,1-1.391-.383,1.269,1.269,0,0,1-.667-1.18,1.439,1.439,0,0,1,.478-1.15,3.149,3.149,0,0,1,1.159-.619,6.162,6.162,0,0,1,1.42-.251q0.739-.044,1.232-0.044h1.072Zm6,6.281h4.348V16.51a10.207,10.207,0,0,1,.087-1.357,3.412,3.412,0,0,1,.362-1.165,2.1,2.1,0,0,1,.8-0.826,2.646,2.646,0,0,1,1.362-.31,1.654,1.654,0,0,1,1.145.354,2.033,2.033,0,0,1,.565.855,3.83,3.83,0,0,1,.2,1.061q0.029,0.561.029,0.944v7.578h4.348V16.068a5.723,5.723,0,0,1,.13-1.239A2.907,2.907,0,0,1,58,13.8a2.086,2.086,0,0,1,.812-0.693,2.835,2.835,0,0,1,1.261-.251,1.581,1.581,0,0,1,1.493.723,3.377,3.377,0,0,1,.42,1.725v8.345h4.348V15.183a11.477,11.477,0,0,0-.246-2.433,5.653,5.653,0,0,0-.812-1.976A3.932,3.932,0,0,0,63.74,9.448a5.305,5.305,0,0,0-2.391-.487,5.412,5.412,0,0,0-2.638.59,4.75,4.75,0,0,0-1.826,1.976A3.9,3.9,0,0,0,55.16,9.581a5.427,5.427,0,0,0-2.623-.619,4.888,4.888,0,0,0-1.449.206A5.1,5.1,0,0,0,49.9,9.7a4.239,4.239,0,0,0-.9.737,3.578,3.578,0,0,0-.58.826H48.362V9.315H44.188V23.647Zm26,0h4.348V12.854h3.217V9.315H74.537V7.045a2.489,2.489,0,0,1,.522-1.873,2.319,2.319,0,0,1,1.565-.457,3.252,3.252,0,0,1,.725.074,5.107,5.107,0,0,1,.7.221l0.2-3.745A8.756,8.756,0,0,0,77,1.059Q76.363,1,75.7,1a7.471,7.471,0,0,0-2.855.457A3.84,3.84,0,0,0,71.174,2.71a4.554,4.554,0,0,0-.783,1.843,11.683,11.683,0,0,0-.2,2.226V9.315h-2.87v3.539h2.87V23.647ZM92.247,9.315H87.9v7.136a10.2,10.2,0,0,1-.087,1.356,3.418,3.418,0,0,1-.362,1.165,2.1,2.1,0,0,1-.8.826,2.648,2.648,0,0,1-1.362.31A2.045,2.045,0,0,1,84,19.754a2.106,2.106,0,0,1-.667-0.914,4.1,4.1,0,0,1-.261-1.224q-0.044-.664-0.044-1.283V9.315H78.682v7.9A17.838,17.838,0,0,0,78.87,19.9a5.665,5.665,0,0,0,.754,2.153,3.855,3.855,0,0,0,1.594,1.43A6,6,0,0,0,83.9,24a4.891,4.891,0,0,0,1.449-.206,5.089,5.089,0,0,0,1.188-.531,3.91,3.91,0,0,0,.884-0.737,4.9,4.9,0,0,0,.594-0.826h0.058v1.946h4.174V9.315Zm2.406,14.331H99V1.354H94.653V23.647Z" fillRule="evenodd" fill="#f78e00"/>
</svg>

  );
};

const { string } = PropTypes;

IconLogo.defaultProps = {
  className: null,
};

IconLogo.propTypes = {
  className: string,
};

export default IconLogo;
