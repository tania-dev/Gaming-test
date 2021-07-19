import { memo } from 'react';
import './Loader.css';

const Loader = ({ width, height, margin }) => {
  return (
    <div className="loading">
      <div className="loader" style={{ width, height, margin }}></div>
    </div>
  );
};

export default memo(Loader);