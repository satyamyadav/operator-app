import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleSettings } from '../../store/UI';

import OperatorClientMenu from '../OperatorClientMenu/OperatorClientMenu.jsx';
import OperatorSettingsMenu from '../OperatorSettingsMenu/OperatorSettingsMenu.jsx';

import './OperatorPanel.css';

const OperatorPanel = props => (
  <div className="OperatorPanel panel">
    <header className="OperatorPanel__header">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1026 1026" className="OperatorPanel__logo" preserveAspectRatio="xMaxYMin meet">
        <title>Minimal Chat</title>
        <g>
          <path d="M234.53,1H791.47A233.53,233.53,0,0,1,1025,234.53V791.47A233.53,233.53,0,0,1,791.47,1025H1a0,0,0,0,1,0,0V234.53A233.53,233.53,0,0,1,234.53,1Z" />
          <g>
            <circle cx="294.46" cy="733.78" r="36.41" style={{ fill: 'rgba(52, 73, 94, 1.0)' }} />
            <circle cx="513" cy="733.78" r="36.41" style={{ fill: 'rgba(52, 73, 94, 1.0)' }} />
            <circle cx="731.54" cy="733.78" r="36.41" style={{ fill: 'rgba(52, 73, 94, 1.0)' }} />
          </g>
        </g>
      </svg>
      <span className="OperatorPanel__appname">Operator</span>
    </header>
    <OperatorSettingsMenu />
    <OperatorClientMenu />
    <footer className="OperatorPanel__footer">
      <button
        className="OperatorPanel__settings"
        onClick={() => props.toggleSettings()}
      >
        <span className="ss-icon ss-settings" />
        <span>Settings</span>
      </button>
      <span className="OperatorPanel__madewith">Made with lurv by hoomans</span>
    </footer>
  </div>
);

OperatorPanel.propTypes = {
  toggleSettings: PropTypes.func,
};


const mapDispatchToProps = dispatch => ({
  toggleSettings: () => dispatch(toggleSettings()),
});


export default connect(null, mapDispatchToProps)(OperatorPanel);
