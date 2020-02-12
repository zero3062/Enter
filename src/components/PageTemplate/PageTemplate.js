import React, {Component} from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import menu from '../../images/menu.png';
import MenuWindow from '../MenuWindow';

const cx = classNames.bind(styles);

class PageTemplate extends Component {  
  state = {
    done: 0
  }

  handleChangeDone = () => {
    const { done } = this.state;
    this.setState({
      done: done + 1
    })
  }

  render() {
    const {done} = this.state;
    const {handleChangeDone} = this;

    return (
      <div className={cx('page-template')}>
        <img src={menu} alt="menu_bar" onClick={handleChangeDone}/>
        <h1>Enter</h1>
        <input
          className={cx('main-input')}
          placeholder="Search"/>
        <button className={cx('login-button')}>Login</button>
        <button className={cx('signup-button')}>Sign Up</button>
        {done%2 === 1 && (<MenuWindow></MenuWindow>)}
      </div>
    );
  }
}

export default PageTemplate;
