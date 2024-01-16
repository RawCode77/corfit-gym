import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
    <Typography variant="h3" mb={5}>
      Exercises that target the same muscle groups
    </Typography>
    <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
      {targetMuscleExercises.length ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
    <Typography
      variant="h3"
      mb={5}
      mt={3}
    >
      Exercises that use the same equipment
    </Typography>
    <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
      {equipmentExercises.length && (
        <HorizontalScrollbar data={equipmentExercises} />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;
