export const Messages = {
  validation: {
    notEmpty: 'This field cannot be empty',
    invalidEmail: 'Invalid E-mail',
    passwordRequired: 'Password is required',

    user: {
      createFail: 'An error occurred with you tried create user',
      notFound: 'User not found',
    },

    auth: {
      invalidCredentials: 'Incorrect credentials',
      unauthorized: 'Unauthorized',
    },
  },
} as const;
