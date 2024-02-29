import React from 'react';
import { Container, Box, Image, Text } from '@chakra-ui/react';
import ImagePlaceholder from '../assets/images/ImagePlaceholder.svg';

export default function Project() {
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
          <Box
            display="flex"
            flexDirection={{ base: 'column', lg: 'row' }}
            gap="30px"
            justifyContent="center"
          >
            {/* 這裡要打API傳資料進來，有幾比資料放幾張卡片 */}
            <Box className="project_card">
              <Box>
                <Image src={ImagePlaceholder} alt="ImagePlaceholder" w="100%" />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap="12px"
                p="20px 30px 20px 30px"
              >
                <Text
                  as="h3"
                  fontSize="28px"
                  lineHeight="1.3"
                  fontWeight="600"
                  letterSpacing="-0.02em"
                >
                  Project Title
                </Text>
                <Text
                  as="span"
                  fontSize="16px"
                  lineHeight="1.5"
                  fontWeight="400"
                >
                  Short Description
                </Text>
                <Text
                  as="span"
                  fontSize="16px"
                  lineHeight="1.5"
                  fontWeight="400"
                >
                  Category
                </Text>
              </Box>
            </Box>
            <Box className="project_card">
              <Box>
                <Image src={ImagePlaceholder} alt="ImagePlaceholder" w="100%" />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap="12px"
                p="20px 30px 20px 30px"
              >
                <Text
                  as="h3"
                  fontSize="28px"
                  lineHeight="1.3"
                  fontWeight="600"
                  letterSpacing="-0.02em"
                >
                  Project Title
                </Text>
                <Text
                  as="span"
                  fontSize="16px"
                  lineHeight="1.5"
                  fontWeight="400"
                >
                  Short Description
                </Text>
                <Text
                  as="span"
                  fontSize="16px"
                  lineHeight="1.5"
                  fontWeight="400"
                >
                  Category
                </Text>
              </Box>
            </Box>
            <Box className="project_card">
              <Box>
                <Image src={ImagePlaceholder} alt="ImagePlaceholder" w="100%" />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap="12px"
                p="20px 30px 20px 30px"
              >
                <Text
                  as="h3"
                  fontSize="28px"
                  lineHeight="1.3"
                  fontWeight="600"
                  letterSpacing="-0.02em"
                >
                  Project Title
                </Text>
                <Text
                  as="span"
                  fontSize="16px"
                  lineHeight="1.5"
                  fontWeight="400"
                >
                  Short Description
                </Text>
                <Text
                  as="span"
                  fontSize="16px"
                  lineHeight="1.5"
                  fontWeight="400"
                >
                  Category
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
