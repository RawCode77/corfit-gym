import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, setBodyPart, bodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
          exerciseOptions,
        );

        // Ensure bodyPartsData is an array before spreading
        if (Array.isArray(bodyPartsData)) {
          setBodyParts(['all', ...bodyPartsData]);
        } else {
          console.error('bodyPartsData is not an array:', bodyPartsData);
        }
      } catch (error) {
        console.error('Error fetching body parts data:', error);
      }
    };

    fetchExercisesData(); // Add this line to invoke the fetchExercisesData function
  }, []); // Closing parenthesis for useEffect

  const handleSearch = async () => {
    if (search) {
      try {
        const exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions,
        );

        // Ensure exercisesData is an array before filtering
        if (Array.isArray(exercisesData)) {
          const searchedExercises = exercisesData.filter(
            (exercise) => exercise.name.toLowerCase().includes(search)
              || exercise.target.toLowerCase().includes(search)
              || exercise.equipment.toLowerCase().includes(search)
              || exercise.bodyPart.toLowerCase().includes(search),
          );

          setSearch('');
          setExercises(searchedExercises);
        } else {
          console.error('exercisesData is not an array:', exercisesData);
        }
      } catch (error) {
        console.error('Error fetching exercises data:', error);
      }
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '173px', xs: '80px' },
            height: '56px',
            position: 'absolute',
            right: '0px',
            fontSize: { lg: '20px', xs: '14px' },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar
          data={bodyParts}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
