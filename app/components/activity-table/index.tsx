import React from 'react';

import { ActivityArrayProps } from './types'

import {
    Title,
    RecentActivity,
    ActivityDetails,
    Date,
    Price,
    Month,
    ActivityType,
    PriceTimeContainer
} from './styles';

function ActivityTable(activityArrayProps: ActivityArrayProps) {

  return (
    <RecentActivity>
        <Title>Recent Activity</Title>
        <Month>MARCH</Month>
        {
            activityArrayProps.data.map((activity) => (
                <ActivityDetails key={activity.id}>
                    <Date>{activity.date}</Date>
                    <ActivityType>
                        <h3>{activity.item}</h3>
                        <h5>{activity.type}</h5>
                    </ActivityType>
                    <PriceTimeContainer>
                        <Price theme={{positive:activity.positive}}>{activity.price}</Price>
                        <h5>{activity.time}</h5>
                    </PriceTimeContainer>
                </ActivityDetails>
            ))}
    </RecentActivity>
  );
}

export default ActivityTable;
