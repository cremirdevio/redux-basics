# State Management with Redux

### Other topics addressed; to note for future use
1. **Normalization**: Making reference from one object to another object instead of having the other object directly embedded in the former object. (DRY principle)
```js
const person = {
  "id": 1,
  "username": "Joe",
  "address" : {
    "street" : "asherifa",
    "city": "Ife"
  }
}
```
**Instead of the above, with normalization we have,**

```js
const person = {
  "id": 1,
  "username": "Joe",
  "address" : 2
}
```
__A sample library to be used to achieve this function if the data you fetch from the db is not normalized__: normalizr

2. **Selector** - This is just like scopes on models in laravel. You add the required function in the reducer for the specified entity