import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'attachments',
  access: (allow) => ({
    'attachments/*': [
      allow.authenticated.to(['read', 'write'])
    ]
  })
});