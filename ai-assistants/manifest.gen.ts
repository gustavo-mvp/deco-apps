// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $$$0 from "./loaders/messages.ts";
import * as $$$$$$$$$0 from "./actions/describeImage.ts";
import * as $$$$$$$$$1 from "./actions/transcribeAudio.ts";
import * as $$$$$$$$$2 from "./actions/awsUploadImage.ts";
import * as $$$$$$$$$3 from "./actions/chat.ts";

const manifest = {
  "loaders": {
    "ai-assistants/loaders/messages.ts": $$$0,
  },
  "actions": {
    "ai-assistants/actions/awsUploadImage.ts": $$$$$$$$$2,
    "ai-assistants/actions/chat.ts": $$$$$$$$$3,
    "ai-assistants/actions/describeImage.ts": $$$$$$$$$0,
    "ai-assistants/actions/transcribeAudio.ts": $$$$$$$$$1,
  },
  "name": "ai-assistants",
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest;
