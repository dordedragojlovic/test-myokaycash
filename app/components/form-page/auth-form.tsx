import React from "react";
import { FormAuthStateHandler } from 'types';

function UserForm({form} : {form: FormAuthStateHandler}) {
  return (
        <div>
            <h3>Secret Code</h3>
            <input
                value={form.code}
                onChange={form.onSecretCodeChange}
            />
        </div>
  );
}

export default UserForm;
