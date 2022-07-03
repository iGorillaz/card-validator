import valid from "card-validator";

export default function validateInfo(values) {
  let errors = {};
  let creditCard = valid.number(values.number);

  creditCard.expirationDate = valid.expirationDate(values.expiration);
  creditCard.cardholderName = valid.cardholderName(values.name);
  creditCard.cvv = valid.cvv(values.cvc);

  errors.show = true;
  errors.variant = "danger";
  errors.message = "Unknown error. Please try again.";
  errors.cname = false;
  errors.cnumber = false;
  errors.cexp = false;
  errors.ccvc = false;

  // Valid card name
  if (values.name === null || !values.name.trim()) {
	  errors.message = "Credit card name is not complete";
	} else if (creditCard.cardholderName.isValid) {
		errors.cname = true;
	} else {
		errors.message = "Credit card name is invalid";
	}
	
	// Valid card number
	if (values.number === null || !values.number.trim()) {
	  errors.message = "Credit card number is not complete";
	} else if (creditCard.isValid) {
	  errors.cnumber = true;
	} else {
	  errors.message = "Credit card number is invalid";
	}

	// Valid card expiration
	if (values.expiration === null || !values.expiration.trim()) {
	  errors.message = "Credit card expiration is not complete";
	} else if (creditCard.expirationDate.isValid) {
	  errors.cexp = true;
	} else {
	  errors.message = "Credit card expiration date is invalid";
	}

  // Valid cvc code
  if (values.cvc === null || !values.cvc.trim()) {
    errors.message = "Credit card cvc code is not complete";
  } else if (creditCard.cvv.isValid) {
    errors.ccvc = true;
  } else {
    errors.message = "Credit card cvc is invalid";
  }


  if (errors.cname && errors.cnumber && errors.ccvc && errors.cexp) {
	errors.variant = "success";
	errors.message = "Credit Card is valid";
  }

  return errors;
}
