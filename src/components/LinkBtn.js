import { Link } from 'react-router-dom';
const Btn = ({text}) => {
    return (
        <div className='d-flex justify-content-end'>
            <Link to='/reservation' className='m-50' style={{width: "10rem", paddingBlock: "10px", }} variant="primary">
                {text}
            </Link>
        </div>
    )
} 

export default Btn 