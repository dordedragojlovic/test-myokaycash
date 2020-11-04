import React from "react";
import { FormAuthStateHandler } from 'types';

function UserForm({form} : {form: FormAuthStateHandler}) {
  return (
        <div>
            <h3>Secret Code</h3>
            <input
                type="password"
                value={form.code}
                onChange={form.onSecretCodeChange}
            />
        </div>
  );
}

export default UserForm;
