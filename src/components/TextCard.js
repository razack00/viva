import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {SafetyIcon, ComfortIcon, SatisfiedIcon, GuideIcon, ArrowRightIcon} from "../components/SVG.js"
import { Container } from 'react-bootstrap';

function TextCard() {
  return (
    <div className='border-bottom' style={{marginBlock: "60px"}}>
      <Container className='border-top py-5'>
        <CardGroup className='b'>
          <Card className='border-0 px-3'>
            <Card.Body className='text-center'>
              <SafetyIcon />
              <Card.Title className='fs-2'>Health and Safety</Card.Title>
              <Card.Text className='pt-2'>
                Keep yourself and others safe while traveling with us.
              </Card.Text>
              <Card.Link href="#" className='text-dark'>Learn more <ArrowRightIcon /> </Card.Link>
            </Card.Body>
          </Card>
          <Card className='border-0 px-3'>
            <Card.Body className='text-center'>
              <ComfortIcon />
              <Card.Title className='fs-2'>Comfort on board</Card.Title>
              <Card.Text className='pt-2'>
                Our buses are equipped with large and comfortable seats, a toilet, Wi-Fi and power outlets. 
              </Card.Text>
              <Card.Link href="#" className='text-dark'>Learn more <ArrowRightIcon /> </Card.Link>
            </Card.Body>
          </Card>
          <Card className='border-0 px-3'>
            <Card.Body className='text-center'>
              <GuideIcon />
              <Card.Title className='fs-2'>Reliability </Card.Title>
              <Card.Text className='pt-2'>
                We understand the need for reliability and punctuality to all organisers. We ensure that our buses arrive at your destinations on time
              </Card.Text>
              <Card.Link href="#" className='text-dark'>Learn more <ArrowRightIcon /> </Card.Link>
            </Card.Body>
          </Card>
          <Card className='border-0 px-3'>
            <Card.Body className='text-center'>
              <SatisfiedIcon />
              <Card.Title className='fs-2'>Satisfied Customers </Card.Title>
              <Card.Text className='pt-2'>
                We've transported 100+ million happy customers nation wide. customers give us an amazing 4.5 stars. 
              </Card.Text>
              <Card.Link href="#" className='text-dark'>Learn more <ArrowRightIcon /> </Card.Link>
            </Card.Body>
          </Card>
          
        </CardGroup>
      </Container>
    </div>
  );
}

export default TextCard;