import React from "react";
import { FormStateHandler } from 'types';

function UserForm({form} : {form: FormStateHandler}) {
  return (
    <>
    <div>
        <h3>Name</h3>
            <input
                value={form.username}
                onChange={form.onUsernameChange}
            />
    </div>
    <div>
        <h3>Password</h3>
        <input
            type="password"
            value={form.password}
            onChange={form.onPasswordChange}
        />
    </div>
  </>
  );
}

export default UserForm;
