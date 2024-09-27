import { usePersistence } from '../../customHooks/Persistence';
import { useEffect, useRef } from 'react';

const SetAndRetrieveAuth = () => {
  const usernameInput = useRef<HTMLInputElement>(null);
  const authcookieInput = useRef<HTMLInputElement>(null);
  const twofactorInput = useRef<HTMLInputElement>(null);
  //eslint-disable-next-line
  let { ready, getValues, setValue } = usePersistence();
  const getValuesForName = () => {
    console.log(getValues(usernameInput.current.value, 'auth'));
  };
  const setValuesForName = () => {
    setValue(
      {
        username: usernameInput.current.value,
        authcookie: authcookieInput.current.value,
        twofactor: twofactorInput.current.value,
      },
      'auth'
    );
  };

  return (
    <div>
      <label>
        name: <input type="text" name="username" ref={usernameInput} />
      </label>
      <label>
        auth cookie:{' '}
        <input type="text" name="authcookie" ref={authcookieInput} />
      </label>
      <label>
        two factor auth:{' '}
        <input type="text" name="twofactor" ref={twofactorInput} />
      </label>
      <button onClick={getValuesForName}>Retrieve values</button>
      <button onClick={setValuesForName}>Set values</button>
    </div>
  );
};

export default SetAndRetrieveAuth;
