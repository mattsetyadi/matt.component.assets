import { MaskedInput } from '../Components/CMaskedInput';
import { useState } from 'react';

const DMaskedInput = () => {
  const [NPWP, setNPWP] = useState<string>('');
  // const [phoneNumber, setPhoneNumber] = useState<string>("");
  const npwpChanged = (num: string) => {
    setNPWP(num);
  };
  // const phoneNumberChanged = (num: string) => {
  //   setPhoneNumber(num);
  // };
  // console.log("LOG VALUE : ", NPWP, phoneNumber);
  return (
    <>
      <h3>For NPWP format</h3>
      <MaskedInput
        mask="##.###.###.#-###.###"
        value={NPWP}
        onChange={npwpChanged}
      />
      <br />
      {/* <h3>For Phone Number format</h3>
      <MaskedInput
        mask="(###) ### ####"
        value={phoneNumber}
        onChange={phoneNumberChanged}
      /> */}
    </>
  );
};

export default DMaskedInput;
