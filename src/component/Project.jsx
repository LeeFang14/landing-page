import React, { useEffect, useState } from 'react';
import { Container, Box, Grid, Text } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

export default function Project() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/name/China'
        );
        const jsonData = await response.json();
        setFetchedData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box bg="#F8F9FF">
      <Container
        as="section"
        p={{ base: '60px 30px 60px 30px', lg: '120px 55px 120px 55px' }}
      >
        <Box
          display="flex"
          flexDirection="column"
          textAlign="center"
          gap={{ base: '30px', lg: '60px' }}
        >
          <Box>
            <Text
              as="h2"
              fontSize="38px"
              lineHeight="1.3"
              fontWeight={{ base: '600', lg: '700' }}
              letterSpacing="-0.02em"
              marginBottom="20px"
            >
              Selected Works
            </Text>
            <Text as="p" fontSize="16px" lineHeight="1.5" fontWeight="400">
              Explore our portfolio and see the latest projects that we've
              brought to life.
            </Text>
          </Box>
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
            gap="30px"
          >
            {fetchedData.map(data => (
              <ProjectCard key={data.name.common} data={data} />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
