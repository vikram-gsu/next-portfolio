import React from 'react';
import moment from 'moment';
import MediumItemStyles from './styles/MediumItemStyles';
import Box from './styles/Box';

export interface MediumItemProps {
  title: string;
  createdAt: string;
  subtitle: string;
  image: string | null;
  url: string;
}

const MediumItem = ({
  title,
  createdAt,
  subtitle,
  image,
  url
}: MediumItemProps) => (
  <MediumItemStyles>
    <Box target="_blank" href={url}>
      <div className={'cardContent'}>
        <div className={'mediaContent'} style={{ overflow: 'inherit' }}>
          <h3 className={title}>{title}</h3>
        </div>
        <div className={'content'}>{subtitle}</div>
        <nav className={'level'}>
          <div className={'levelLeft'}>
            <span>{moment(createdAt).format('MMM Do')} </span>
            <span>{moment(createdAt).format('YYYY')}</span>
          </div>
        </nav>
      </div>
    </Box>
  </MediumItemStyles>
);

export default MediumItem;
