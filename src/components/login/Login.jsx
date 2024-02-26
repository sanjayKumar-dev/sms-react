import { Button, TextField } from "@mui/material";
import React from "react";

export default function Login() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <TextField id="outlined-one" label="Username" placeholder="Enter User Name" variant="outlined" fullWidth />
            </div>

            <div>
              <TextField id="outlined-two" label="Password" placeholder="********" type='password' variant="outlined" fullWidth />
            </div>

            <div>
              <Button color="primary" variant="contained" fullWidth>Sign in</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
