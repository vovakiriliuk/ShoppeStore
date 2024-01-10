import { clearOrderCart } from './ClearOrderCart';
import { saveOrder } from './SaveOrder';

export const placeOrder = (paymentMethod, elem) => {
  console.log(elem);

  const checkoutNameInfo = document.querySelector('.checkout__container');
  console.log('checkoutNameInfo:', checkoutNameInfo);

  const inputFirstName = document.querySelector('.input__first-name').value;
  const inputLastName = document.querySelector('.input__last-name').value;
  const inputCountry = document.querySelector('.input__country').value;
  const inputStreet = document.querySelector('.input__street-address').value;
  const inputPostcode = document.querySelector('.input__postcode').value;
  const inputCity = document.querySelector('.input__city').value;
  const inputPhone = document.querySelector('.input__phone').value;
  const inputEmail = document.querySelector('.input__email').value;
  const inputOrderNotes = document.querySelector('.input__order-notes').value;

  const orderFieldName = document.querySelector('.order__error-name');
  const orderFieldLastName = document.querySelector('.order__error-lastName');
  const orderFieldCountry = document.querySelector('.order__error-country');
  const orderFieldCity = document.querySelector('.order__error-city');
  const orderFieldAddress = document.querySelector('.order__error-address');
  const orderFieldZip = document.querySelector('.order__error-zip');
  const orderFieldPhone = document.querySelector('.order__error-phone');
  const orderFieldEmail = document.querySelector('.order__error-email');

  const blockData = {
    name: inputFirstName,
    lastName: inputLastName,
    country: inputCountry,
    city: inputCity,
    street: inputStreet,
    postcode: inputPostcode,
    phone: inputPhone,
    email: inputEmail,
    orderNotes: inputOrderNotes,
    paymentMethod: paymentMethod,
  };

  // console.log('blockData', blockData);
  let isTrue = 0;

  if (!inputFirstName) {
    // console.log(elem);
    orderFieldName.style.opacity = '1';
  } else {
    orderFieldName.style.opacity = '0';
    isTrue += 1;
  }

  if (!inputLastName) {
    // console.log('2');
    orderFieldLastName.style.opacity = '1';
  } else {
    orderFieldLastName.style.opacity = '0';
    isTrue += 1;
  }

  if (!inputCountry) {
    // console.log('3');
    orderFieldCountry.style.opacity = '1';
  } else {
    orderFieldCountry.style.opacity = '0';
    isTrue += 1;
  }

  if (!inputCity) {
    // console.log('6');
    orderFieldCity.style.opacity = '1';
  } else {
    orderFieldCity.style.opacity = '0';
    isTrue += 1;
  }

  if (!inputStreet) {
    // console.log('4');
    orderFieldAddress.style.opacity = '1';
  } else {
    orderFieldAddress.style.opacity = '0';
    isTrue += 1;
  }

  if (!inputPostcode) {
    // console.log('5');
    orderFieldZip.style.opacity = '1';
  } else {
    orderFieldZip.style.opacity = '0';
    isTrue += 1;
  }

  if (!inputPhone) {
    // console.log('7');
    orderFieldPhone.style.opacity = '1';
  } else {
    orderFieldPhone.style.opacity = '0';
    isTrue += 1;
  }

  if (!inputEmail) {
    // console.log('8');
    orderFieldEmail.style.opacity = '1';
  } else {
    orderFieldEmail.style.opacity = '0';
    isTrue += 1;
  }

  if (elem) {
    console.log('isTrue', isTrue);
    if (isTrue < 8) {
      elem.preventDefault();
      checkoutNameInfo.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('isTrue', isTrue);
      localStorage.setItem('userOrderInfo', JSON.stringify(blockData));
      saveOrder();
      clearOrderCart();
      window.location.href = 'http://localhost:3000/order-confirmation.html';
    }
  }
};

// Чернетка на потім, НЕ ВИДАЛЯТИ !.
// Leasstret - це мій не дороблений код, хочу пізніше до нього повернутися !
// const form = document.forms['checkout__container'];
//   const inputArr = Array.from(form);
//   const validInputArr = [];
//   const isAllValid = [];

//   const inputHandler = ({ target }) => {
//     if (target.hasAttribute('data-reg')) {
//       inputCheck(target);
//       console.log('target:', target);
//     }
//   };

//   form.addEventListener('input', inputHandler);

//   inputArr.forEach((element) => {
//     if (element.hasAttribute('data-reg')) {
//       element.setAttribute('is-valid', 0);
//       validInputArr.push(element);
//     }
//   });

//   const inputCheck = (element) => {
//     console.log('element', element);
//     const inputValue = element.value;
//     const inputReg = element.getAttribute('data-reg');
//     const reg = new RegExp(inputReg);

//     if (reg.test(inputValue)) {
//       element.style.border = '2px solid rgb(0,196,0)';
//       element.setAttribute('is-valid', 1);
//     } else {
//       element.style.border = '2px solid rgb(255,0,0)';
//       console.log(element);
//       element.setAttribute('is-valid', 0);
//     }
//   };

//   validInputArr.forEach((element) => {
//     isAllValid.push(element.getAttribute('is-valid'));
//   });

//   const isValid = isAllValid.reduce((acc, current) => {
//     return acc && current;
//   });

//   if (elem) {
//     if (!Boolean(Number(isValid))) {
//       elem.preventDefault();
//     }
//   }
