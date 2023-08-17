import React, { useState } from 'react'

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Spinner,
  useToast,
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { registerUser } from '../Redux/action'
import { useNavigate } from 'react-router-dom'
// import { Spinner } from '@chakra-ui/react'

const Register = () => {
    const toast = useToast()
    const [user,setUser]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleSubmit=()=>{
        let obj={
            url:"https://bit.ly/sage-adebayo",
            user,
            email,
            password
        }
        // console.log("obj:",obj)
        if(obj.user!=='' || obj.email!=='' || obj.password!==""){
            axios.post('https://friends-chicken-adda.onrender.com/data',obj).then(res=>{
            console.log("userdata:",res.data)
            toast({
                title: 'Success',
                position: 'top',
                isClosable: true,
              })
            setTimeout(()=>{
                dispatch(registerUser(res.data))
                navigate("/log")
            },1000)
            setEmail('')
            setPassword('')
            setUser('')
            // <Spinner/>
        }).catch(err=>{
            console.log(err)
        })
        }else{
            toast({
                title: 'Please fill the details',
                position: 'bottom',
                isClosable: true,
              })
        }
    }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          Register Here
        </Heading>
        <FormControl id="userName">
          <FormLabel>User Icon</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                {/* <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                /> */}
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full">Change Icon</Button>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="userName" isRequired>
          <FormLabel>User name</FormLabel>
          <Input
          required
            placeholder="UserName"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={user}
            onChange={(e)=>setUser(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
          required
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
          required
            placeholder="password"
            _placeholder={{ color: 'gray.500' }}
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}>
            Cancel
          </Button>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
            onClick={handleSubmit}
            >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}
export default Register