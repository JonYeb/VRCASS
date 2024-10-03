import { useRef } from 'react';

const SetAndRetrieveAuth = () => {
  const usernameInput = useRef<HTMLInputElement>(null);
  const authcookieInput = useRef<HTMLInputElement>(null);
  const twofactorInput = useRef<HTMLInputElement>(null);
  //eslint-disable-next-line
  const getValuesForName = async () => {
    console.log(window.electronAPI.getValues('auth'));
    window.electronAPI.getValues('auth').then((value) => {
      console.log(value);
    });
  };
  const setValuesForName = () => {
    window.electronAPI.setValues(
      {
        username: usernameInput.current.value,
        authcookie: authcookieInput.current.value,
        twofactor: twofactorInput.current.value,
      },
      'auth',
      usernameInput.current.value
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
