import React from 'react'
import ReactTooltip from 'react-tooltip'
import CalendarHeatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css'
import './styles.css'

const today = new Date()

function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
}

function getRange(count) {
    return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Calendar({ data }) {
    const randomValues = getRange(200).map(index => {
        return {
            date: shiftDate(today, -index),
            count: getRandomInt(1, 3)
        }
    })
    return (
        <div>
            <CalendarHeatmap
                startDate={shiftDate(today, -150)}
                endDate={today}
                values={randomValues}
                classForValue={value => {
                    if (!value) {
                        return 'color-empty';
                    }
                    return `color-github-${value.count}`
                }}
                tooltipDataAttrs={value => {
                    return {
                        'data-tip': `Em ${value.date.toISOString().slice(0, 10)} foi adicionado ${value.count} pokémon(s)`
                    }
                }}
                onClick={value => alert(`Você adicionou ${value.count} pokémon(s)`)}
            />
            <ReactTooltip />
        </div>
    )
}