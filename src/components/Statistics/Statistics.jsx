import { object } from 'prop-types';
import { StatisticCard } from '../StatisticCard/StatisticCard';
import PropTypes from "prop-types";
import css from './Statistics.module.css'


export const Statistics = ({title, stats}) => {  
    return (
        title ?
            <section className="statistics">
                <h2 className="title">{title}</h2>

                <ul className={css.statList}>
                    {stats.map(stat => (
                        <StatisticCard key={stat.id} label={stat.label} percentage={stat.percentage} />
                    ))}
                </ul>
            </section>:
            <section className="statistics">                
                <ul className={css.statList}>
                    {stats.map(stat => (
                        <StatisticCard key={stat.id} label={stat.label} percentage={stat.percentage} />
                    ))}
                </ul>
            </section>)
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(object).isRequired
};