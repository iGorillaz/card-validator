import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import useForm from '../hooks/useForm'


const CreditCard = () => {
	const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
	return ( 
		<div className="container">
			<div className="box justify-content-center align-items-center">
				<div className="form-div">
					<div className="credit-card">
						<Cards
							name={values.name}
							number={values.number}
							expiry={values.expiration}
							cvc={values.cvc}
							focused={values.focus}
							/>
					</div>
				</div>
			</div>
		</div>
	 );
}
 
export default CreditCard;