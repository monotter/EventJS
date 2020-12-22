# EventJS
just simple events for javascript
## Example
```js
var playerJoined = new Event()
var connection = playerJoined.connect(function(playerName){
    console.log(`${playerName} has joined to Game!`)
})
```



```js
playerJoined.fire("Monotter")
playerJoined.fire("asdfasd")
connection.disconnect()
playerJoined.fire("fgdssdfg")
```
> Monotter

> asdfasd
