## EventJS
just simple events for javascript
# Example
```js
var playerJoined = new Event()
var conn = playerJoined.connect((playerName)=>{
    console.log(`${playerName} has joined to Game!`)
})
playerJoined.fire("Monotter")
playerJoined.fire("Monotter")
conn.disconnect()
playerJoined.fire("Monotter")
```
