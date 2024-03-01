import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

export default function ProjectCard({ data }) {
  return (
    <Box className="project_card">
      <Box>
        <Image src={data.flags.svg} alt="ImagePlaceholder" w="100%" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap="12px"
        p="20px 30px 20px 30px"
        h="100%"
        justifyContent="space-between"
      >
        <Text
          as="h3"
          fontSize="28px"
          lineHeight="1.3"
          fontWeight="600"
          letterSpacing="-0.02em"
        >
          {data.name.common}
        </Text>
        <Text as="span" fontSize="16px" lineHeight="1.5" fontWeight="400">
          {data.name.official}
        </Text>
        <Text as="span" fontSize="16px" lineHeight="1.5" fontWeight="400">
          {data.continents}
        </Text>
      </Box>
    </Box>
  );
}
