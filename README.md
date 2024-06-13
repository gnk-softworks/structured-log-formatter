# structured-log-formatter
A simple util to add some structure to your console logs to make them a little easier to read and search through.

## Installation
```bash
npm install --save structured-log-formatter
```

## Usage

### Standalone String Formatter
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

### Console Extension
You can also extend the console object to include a structured log function that takes the same parameters as the format function. This will allow you to log structured messages in a more concise way.

```ts
import { setupStructuredLog } from 'structured-log-formatter';

//First call this function to extend the console object
setupStructuredLog();

//Now you can use the structuredLog function on the console object
console.structuredLog("test", "info", {message: "Hello, World!"});
```

This will log the following to the console:
```bash
action='action' status='status'  message='This thing happened' foo='bar'
```

## Contributions
If you want to improve the library, please create a pull request.