import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import StarIcon from '../assets/images/StarIcon.svg';

export default function TestimonialsCard({ data }) {
  return (
    <Box
      className="testimonials_card"
      display="flex"
      flexDirection={{ base: 'column', lg: 'row' }}
      gap="30px"
      p={{ base: '40px 30px 40px 30px', lg: '40px' }}
      alignItems="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="16px"
        alignItems="center"
        flex={{ lg: '1 1 180px' }}
      >
        <Box maxWidth="120px">
          <Image src={data.imageUrl} alt="Photo" borderRadius="50%" />
        </Box>
        <Text as="h4" fontSize="21px" lineHeight="1.3" fontWeight="600">
          {data.title}
        </Text>
        <Text as="p" fontSize="14px" lineHeight="1.6" fontWeight="400">
          {data.job}
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap="24px"
        flex={{ lg: '1 1 280px' }}
      >
        <Text as="p" order={{ lg: '1' }} textAlign={{ lg: 'initial' }}>
          {data.comment}
        </Text>
        <Box>
          <Box
            display="flex"
            gap="5px"
            justifyContent={{ base: 'center', lg: 'initial' }}
          >
            {Array.from({ length: data.rating }, (_, index) => (
              <Image
                key={index}
                src={StarIcon}
                alt={`StarIcon-${index}`}
                width="24px"
                height="23.08px"
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
