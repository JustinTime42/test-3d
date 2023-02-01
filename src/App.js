import { useContract, useNFTs } from "@thirdweb-dev/react";
import { ThirdwebNftMedia } from "@thirdweb-dev/react";
import {Modal, Card, Button, Carousel} from 'react-bootstrap'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const { contract } = useContract("0x27B7B636e3EF78631a3808cD97bDEE2Cf2144804");
  const { data: nfts, isLoading: isReadingNfts } = useNFTs(contract);
  const [ showModal, setShowModal ] = useState(false)

  if (isReadingNfts) {
      return <div>Loading...</div>
  } else {
    return (
      <div>        
        <Carousel style={{ width: '500px', height: '300px',  marginRight: 'auto', marginLeft: 'auto' }}>
          {nfts?.map((nft, i) => (
              <Carousel.Item key={i}>
                <ThirdwebNftMedia 
                  metadata={nft.metadata} 
                />
                <Carousel.Caption>{nft.metadata.description}</Carousel.Caption>
              </Carousel.Item>
          ))}
        </Carousel>
        <Button style={{ margin:'2em' }} variant="primary" onClick={() => setShowModal(true)}>Show NFT in Modal</Button>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
              <Modal.Title>NFT in Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ThirdwebNftMedia metadata={nfts[1].metadata} />
          </Modal.Body>
        </Modal>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>                            
          {nfts.map((nft, i) => (
            <Card>
              <Card.Title>NFT in Bootstrap card</Card.Title>
              <Card.Body>
              <ThirdwebNftMedia
                key={i}
                metadata={nft.metadata}
                width= "80px"
                 height= "30px"
                style={{ marginRight: 'auto', marginLeft: 'auto' }}
              />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>      
    )
  }
}




