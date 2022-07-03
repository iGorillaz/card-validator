import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import useForm from "../hooks/useForm";
import s from "./CreditCard.module.css";

const CreditCard = () => {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
  return (
    <div className={s.container}>
      <div className="box justify-content-center align-items-center">
        <div className={s.formDiv}>
          <div className={s.creditCard}>
            <Cards
              name={values.name}
              number={values.number}
              expiry={values.expiration}
              cvc={values.cvc}
              focused={values.focus}
            />
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                id="name"
                name="name"
                placeholder="Cardowner"
                value={values.name}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cname}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                id="number"
                name="number"
					 className={s.numInput}
                placeholder="Card Number"
                value={values.number}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cnumber}
              />
            </Form.Group>
            <Row className={s.row}>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="number"
                    id="expiration"
                    name="expiration"
                    placeholder="Expiration"
                    value={values.expiration}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.cexp}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="number"
                    id="cvc"
                    name="cvc"
                    placeholder="CVC"
                    value={values.cvc}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.ccvc}
                  />
                </Form.Group>
              </Col>
            </Row>
				<div className={s.butDiv}>
            <Button size={"block"} id="validateButton" type="submit">
              Validate
            </Button>
				</div>
          </Form>
        </div>
        <Alert
          id="alertMessage"
			 className={s.alert}
          variant={errors.variant}
          show={errors.show}>
          {errors.message}
        </Alert>
      </div>
    </div>
  );
};

export default CreditCard;
