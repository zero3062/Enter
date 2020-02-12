import React, {Component} from 'react';
import styles from './MenuWindow.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class MenuWindow extends Component {
    render() {
        return (
            <div className={cx('menu-window')}>
                Comming Soon...
            </div>
        )
    }
}

export default MenuWindow;