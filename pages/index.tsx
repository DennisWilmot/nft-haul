//import components from thirdweb and chakra ui to use
import { Container, Flex, Box, SimpleGrid, Text, Skeleton, Heading, Stack} from "@chakra-ui/react";
import { ConnectWallet, useContract, useMetadata, MediaRenderer, useContractRead, Web3Button, useAddress } from "@thirdweb-dev/react";
import type { NextPage } from "next";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const address = useAddress();
  const contractAddress = "0x5447153f93B43400D8F9dd77dF3a602F619f1771";
  const {contract} = useContract(contractAddress);
  const { data: metadata, isLoading: isLoadingMetadata} = useMetadata(contract);
  const {data: totalMinted, isLoading: isLoadingTotalMinted} = useContractRead(contract, "totalMinted"); 
  
  return (
    <Container maxWidth={"1200px"}>
      <Flex p={"20px"} justifyContent={"space-between"}>
      <Box></Box>
      <ConnectWallet></ConnectWallet>
      </Flex>
      <Flex h={"90vh"} alignItems={"center"} justifyContent={"center"}>
        <SimpleGrid columns={2} spacing={10} justifyItems={"center"}>
          <Box> 
            <Skeleton isLoaded={!isLoadingMetadata}>
              <MediaRenderer 
              src={(metadata as {image: string})?.image}/>
            </Skeleton>
          </Box>
          <Flex direction={"column"} justifyContent={"center"}>
            <Stack direction={"column"} spacing={4}>
            <Skeleton isLoaded={!isLoadingMetadata}>
            <Heading>{(metadata as {name?: string})?.name}</Heading>
            </Skeleton>
            <Skeleton isLoaded={!isLoadingMetadata}>
            <Text>{(metadata as {description?: string})?.description}</Text>
            </Skeleton>
              <Skeleton isLoaded={!isLoadingMetadata}>
                <p>Total Minted : {(totalMinted?.toNumber())}/10</p>
              </Skeleton>
              {address ? (<Web3Button
              contractAddress={contractAddress} 
              action={(contract) => contract.erc721.claim(1)} >
            Claim
          </Web3Button>) : <Text>Please connect your Wallet</Text>}
          </Stack> 
          </Flex>
          

        </SimpleGrid> 
      </Flex>
      
    </Container>
  
  );
};

export default Home;
