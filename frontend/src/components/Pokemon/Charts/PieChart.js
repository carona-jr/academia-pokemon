import React from 'react'

import { ResponsivePie } from '@nivo/pie'

export default function PieChart({ data }) {
    return (
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ scheme: 'set3' }}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={16}
            radialLabelsLinkHorizontalLength={24}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor={{ from: 'color' }}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#333333"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'Água'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'Dragão'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'Elétrico'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'Fantasma'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'Fada'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'Fogo'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'Gelo'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'Inseto'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'Lutador'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'Metálico'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'Normal'
                    },
                    id: 'lines'
                }
            ]}
        />
    )
}