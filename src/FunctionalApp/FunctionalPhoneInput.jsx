import { createRef } from "react";

export const FunctionalPhoneInput = ({
  labelText,
  phoneNumberInput,
  setPhoneNumberInput,
}) => {
  const refs = [
    createRef(null),
    createRef(null),
    createRef(null),
    createRef(null),
  ];
  const ref0 = refs[0];
  const ref1 = refs[1];
  const ref2 = refs[2];
  const ref3 = refs[3];

  const createOnChangehandler = (index) => (e) => {
    const lengths = [2, 2, 2, 1];
    const currentMaxLength = lengths[index];
    const nextRef = refs[index + 1];
    const prevRef = refs[index - 1];
    const value = e.target.value;
    const shouldGoToNextRef =
      currentMaxLength === value.length && nextRef?.current;
    const shouldGoToPrevRef = value.length === 0 && prevRef?.current;

    const newState = phoneNumberInput.map((phoneInput, phoneInputIndex) => {
      return index === phoneInputIndex ? e.target.value : phoneInput;
    });

    if (shouldGoToNextRef) {
      nextRef?.current.focus();
    }
    if (shouldGoToPrevRef) {
      prevRef?.current.focus();
    }

    if (index === 3 && value.length > 1) {
      return;
    }

    setPhoneNumberInput(newState);
  };

  return (
    <div className="input-wrap">
      <label htmlFor="phone">{labelText}</label>
      <div id="phone-input-wrap">
        <input
          type="number"
          id="phone-input-1"
          placeholder="55"
          value={phoneNumberInput[0]}
          onChange={createOnChangehandler(0)}
          ref={ref0}
        />
        -
        <input
          type="number"
          id="phone-input-2"
          placeholder="55"
          value={phoneNumberInput[1]}
          onChange={createOnChangehandler(1)}
          ref={ref1}
        />
        -
        <input
          type="number"
          id="phone-input-3"
          placeholder="55"
          value={phoneNumberInput[2]}
          onChange={createOnChangehandler(2)}
          ref={ref2}
        />
        -
        <input
          type="number"
          id="phone-input-4"
          placeholder="5"
          value={phoneNumberInput[3]}
          onChange={createOnChangehandler(3)}
          ref={ref3}
        />
      </div>
    </div>
  );
};
