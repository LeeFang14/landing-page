import React from 'react';
import { Container, Box, Grid, Text } from '@chakra-ui/react';
import TestimonialsCard from './TestimonialsCard';
import Photo1 from '../assets/images/Photo1.svg';
import Photo2 from '../assets/images/Photo2.svg';

export default function Testimonials() {
  const fackData = [
    {
      id: 0,
      imageUrl: Photo1,
      title: 'Lauren M.',
      job: 'UI Designer @Boo',
      comment:
        'Anima’s Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently.',
      rating: 5,
    },
    {
      id: 1,
      imageUrl: Photo2,
      title: 'David B.',
      job: 'Lead Designer @Creative',
      imageAlt: 'Rear view of modern home with pool',
      comment:
        'The Landing Page UI Kit has been a game changer. The pre-designed components and templates have helped us deliver projects faster!',
      rating: 5,
    },
  ];

  return (
    <Box bg="#F8D57E">
      <Container
        as="section"
        p={{ base: '100px 32px 100px 32px', lg: '120px 55px 120px 55px' }}
      >
        <Box
          display="flex"
          flexDirection="column"
          textAlign="center"
          gap="60px"
        >
          <Box>
            <Text
              as="h2"
              fontSize="38px"
              lineHeight="1.3"
              fontWeight="700"
              letterSpacing="-0.02em"
              marginBottom="20px"
            >
              Real Stories from Satisfied Customers
            </Text>
            <Text as="p" fontSize="16px" lineHeight="1.5" fontWeight="400">
              See how our landing page ui kit is making an impact.
            </Text>
          </Box>
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
            gap={{ base: '60px', lg: '30px' }}
          >
            {fackData.map(data => (
              <TestimonialsCard key={data.id} data={data} />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
