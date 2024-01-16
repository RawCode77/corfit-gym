import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
// import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  // if (!exerciseVideos.length) return <Loader />;
  if (!exerciseVideos.length) return 'Loading...';

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{' '}
        <span style={{ color: '#FF2625', textTransdorm: 'capitalize' }}>
          { name }
        </span>{' '}
        exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0' } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography
                fontWeight={600}
                color="#000"
                variant="h5"
              >
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
