# structured-log-formatter
A simple util to add some structure to your console logs to make them a little easier to read and search through.

## Installation
```bash
npm install --save structured-log-formatter
```

## Usage
Parameters:
- `action` - The action that was taken
- `status` - The status of the action
- `pairs` - An object containing key value pairs to be logged in a structured way

```ts
import { format } from 'structured-log-formatter';

console.log(format("action", "status", { message: "This thing happened", foo: "bar" }));
```

This will log the following to the console:
```bash
action='action' status='status'  message='This thing happened' foo='bar'
```


## Contributions
If you want to improve the library, please create a pull request.