import PropTypes from "prop-types";
import css from './StatisticCard.module.css'

export const StatisticCard = ({label, percentage}) => {   
    return (   
    <li className={css.item}>
            <span className={css.label}>{label} </span>
        <span className={css.percentage}>{percentage}%</span>
    </li>
    )
};

StatisticCard.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
};