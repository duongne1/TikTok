import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/04f0d024d93a761067ebe578283a79c8.jpeg?lk3s=a5d48078&x-expires=1707116400&x-signature=PgcnqHL5ZAOxrV32xH60JpnQJ8A%3D"
                alt=" "
            />
            <div className={cx('info-item')}>
                <p className={cx('nick-name')}>
                    <strong>quocphunguyen</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Quốc Phú Nguyễn</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
