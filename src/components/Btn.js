import { Button } from "react-bootstrap"
const Btn = ({text}) => {
    return (
        <div className='d-flex justify-content-end'>
            <Button type='submit' className='m-50' style={{width: "10rem", paddingBlock: "10px", }} variant="primary">
                {text}
            </Button>
        </div>
    )
} 

export default Btn