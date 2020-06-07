import React from 'react';

const Loading = ({ fill = '#FFF', width = '50px' }) => (
  <svg style={{ background: 'rgba(255, 255, 255, 0)', display: 'block', shapeRendering: 'auto' }}
    width={width} height={width} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <circle cx="50" cy="50" fill="none" stroke={fill} strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(143.897 50 50)">
      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
    </circle>
  </svg>
)

export const LoadingPage = () => (
  <div style={{ width: '100%', height: '100%', background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <svg style={{ background: 'rgba(255, 255, 255, 0)', display: 'block', shapeRendering: 'auto' }}
      width={45} height={45} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" fill="none" stroke={'#7E57C2'} strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(143.897 50 50)">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
      </circle>
    </svg>
  </div>
)

export default Loading