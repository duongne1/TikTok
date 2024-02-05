import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const menuItemStyle = {
        marginLeft: 0,
        width: ' 100%',
        justifyContent: 'flex-start',
        fontWeight: '420',
        lineHeight: '18px',
    };

    const classes = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <Button style={menuItemStyle} className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItem;
