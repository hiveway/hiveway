import React from 'react';
import PropTypes from 'prop-types';
import detectPassiveEvents from 'detect-passive-events';
import { scrollTop } from '../scroll';
import classNames from 'classnames';

export default class Column extends React.PureComponent {

  static propTypes = {
    children: PropTypes.node,
    classNames: PropTypes.array
  };

  scrollTop () {
    const scrollable = this.node.querySelector('.scrollable');

    if (!scrollable) {
      return;
    }

    this._interruptScrollAnimation = scrollTop(scrollable);
  }

  handleWheel = () => {
    if (typeof this._interruptScrollAnimation !== 'function') {
      return;
    }

    this._interruptScrollAnimation();
  }

  setRef = c => {
    this.node = c;
  }

  componentDidMount () {
    this.node.addEventListener('wheel', this.handleWheel,  detectPassiveEvents.hasSupport ? { passive: true } : false);
  }

  componentWillUnmount () {
    this.node.removeEventListener('wheel', this.handleWheel);
  }

  render () {
    const { children } = this.props;
    const columnClasses = classNames('column', ...this.props.classNames);

    return (
      <div role='region' className={columnClasses} ref={this.setRef}>
        {children}
      </div>
    );
  }

}
