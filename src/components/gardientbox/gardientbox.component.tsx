import React from 'react';
import PropTypes from 'prop-types';

import './gardientbox.css';

export interface GardientBoxProps {
  title: string;
  content: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default class GardientBox extends React.Component<GardientBoxProps> {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  render() {
    const { title, content, onClick } = this.props;

    return (
      <div className="gardient-box">
        <span></span>
        <div className="content">
          <h2>{title}</h2>
          <p>{content}</p>
          <button onClick={onClick}>Read More</button>
        </div>
      </div>
    );
  }
}
