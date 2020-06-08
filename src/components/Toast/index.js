import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Container } from './styles';

const ComponentToast = ({ type = 'info', text = '', div }) => {

  const [showToast, setShowToast] = useState(true);
  setTimeout(() => {
    setShowToast(false);
    div.remove();
  }, 2800);

  const colors = {
    'error': () => '#f44336',
    'info': () => '#2196f3',
    'warn': () => '#fdd835',
    'success': () => '#4caf50',
    'default': () => '#CCC'
  }

  return (
    <Fragment>
      {(showToast) && <Container color={colors[type] ? colors[type]() : colors['default']}>{text}</Container>}
    </Fragment >
  )
}

const Toast = (text, type) => {
  const div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.top = 0;
  div.style.width = '100%';
  div.style.display = 'flex';
  div.style.justifyContent = 'center';
  ReactDOM.render(<ComponentToast text={text} type={type || 'info'} div={div} />, document.body.appendChild(div));
}

export default Toast;