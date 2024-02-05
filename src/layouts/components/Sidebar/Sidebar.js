import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserGroup, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import SuggestedAccounts from '../SuggestedAccounts';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For Your" to={config.routes.home} icon={<FontAwesomeIcon icon={faHouse} />} />
                <MenuItem
                    title="Following"
                    className={cx('icon')}
                    to={config.routes.following}
                    icon={<FontAwesomeIcon icon={faUserGroup} />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<FontAwesomeIcon icon={faVideoCamera} />} />
            </Menu>

            <SuggestedAccounts lable="Suggested accounts" />
        </aside>
    );
}

export default Sidebar;
