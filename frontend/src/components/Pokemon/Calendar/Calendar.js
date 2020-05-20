import React from 'react'
import ReactTooltip from 'react-tooltip'
import CalendarHeatmap from 'react-calendar-heatmap'
import './styles.css'

export default function Calendar({ data, today, past }) {
    return (
        <div>
            <CalendarHeatmap
                startDate={past}
                endDate={today}
                values={data}
                classForValue={value => {
                    if (!value) {
                        return 'color-empty';
                    }
                    return `color-github-${value.count}`
                }}
                tooltipDataAttrs={value => {
                    if (value.date === null)
                        return {
                            'data-tip': 'Nada foi adicionado'
                        }
                    return {
                        'data-tip': `Em ${value.date} foi adicionado ${value.count} pokémon(s)`
                    }
                }}
                onClick={value => alert(`Você adicionou ${value.count} pokémon(s)`)}
            />
            <ReactTooltip />
        </div>
    )
}