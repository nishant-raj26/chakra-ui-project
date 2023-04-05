import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineSend,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={'center', 'left'} >
            Subscribe to get more updates
          </Heading>
          <HStack borderBottom={'2px solid white'}>
            <Input
              placeholder={'Your Email here....'}
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
            />

            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            Video Hub
          </Heading>
          <Text>All right reserved</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
        </VStack>
        <Button variant={'link'} colorScheme={'purple'} >
          <a target={'_blank'} href="https://www.youtube.com">
            <AiFillYoutube size={'40px'} />
          </a>
        </Button>

        <Button variant={'link'} colorScheme={'purple'}>
          <a target={'_blank'} href="https://www.twitter.com">
            <AiFillTwitterCircle size={'40px'} />
          </a>
        </Button>

        <Button variant={'link'} colorScheme={'purple'}>
          <a target={'_blank'} href="https://www.github.com">
            <AiFillGithub size={'40px'} />
          </a>
        </Button>
      </Stack>
    </Box>
  );
};

export default Footer;
