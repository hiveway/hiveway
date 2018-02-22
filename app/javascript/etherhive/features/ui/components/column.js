import React from 'react';
import ColumnHeader from './column_header';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { scrollTop } from '../../../scroll';
import { isMobile } from '../../../is_mobile';
import classNames from "classnames";

export default class Column extends React.PureComponent {

  static propTypes = {
    heading: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.node,
    active: PropTypes.bool,
    hideHeadingOnMobile: PropTypes.bool,
    classNames: PropTypes.array
  };

  handleHeaderClick = () => {
    const scrollable = this.node.querySelector('.scrollable');

    if (!scrollable) {
      return;
    }

    this._interruptScrollAnimation = scrollTop(scrollable);
  }

  scrollTop () {
    const scrollable = this.node.querySelector('.scrollable');

    if (!scrollable) {
      return;
    }

    this._interruptScrollAnimation = scrollTop(scrollable);
  }


  handleScroll = debounce(() => {
    if (typeof this._interruptScrollAnimation !== 'undefined') {
      this._interruptScrollAnimation();
    }
  }, 200)

  setRef = (c) => {
    this.node = c;
  }

  render () {
    const { heading, icon, children, active, hideHeadingOnMobile } = this.props;

    const showHeading = heading && (!hideHeadingOnMobile || (hideHeadingOnMobile && !isMobile(window.innerWidth)));

    const columnHeaderId = showHeading && heading.replace(/ /g, '-');
    const header = showHeading && (
      <ColumnHeader icon={icon} active={active} type={heading} onClick={this.handleHeaderClick} columnHeaderId={columnHeaderId} />
    );

    const columnClasses = classNames('column', ...this.props.classNames);

    return (
      <div
        ref={this.setRef}
        role='region'
        aria-labelledby={columnHeaderId}
        className={columnClasses}
        onScroll={this.handleScroll}
      >
        {header}
        {children}
      </div>
    );
  }

}
