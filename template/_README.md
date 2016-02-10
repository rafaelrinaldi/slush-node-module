# <%= moduleName %>

> <%= moduleDescription %>

## Install

```sh
$ npm install <%= moduleName %> <% if (hasCli) { %>-g<% } else { %>--save<% } %>
```

## Usage

<% if (hasCli) { %>```sh
Usage: <%= moduleName %> [OPTIONS]

  <%= moduleDescription %>

Example:
  $ <%= moduleName %> .

Options:
  -v --version              Display current software version
  -h --help                 Display help and usage details
```<% } else { %>```js
var <%= moduleVariable %> = require('<%= moduleName %>');

<%= moduleVariable %>('ping', {}); // pong
```

## API

## `<%= moduleVariable %>(input, [options])`

### `input`

*Required*  
Type: `string`  

Lorem ipsum.

### `options`

Type: `object`  

Available options.

##### `options.option`

Type: `boolean`  
Default: `false`  

Dolor Sit.<% } %>

## License

MIT © [<%= authorName %>](<%= authorUrl %>)
