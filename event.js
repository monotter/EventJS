class Connection{
    constructor(func,set) {
        this.func = func
        this.set = set
    }
    disconnect(){
        this.set.delete(this.func)
    }
}

class Event{
    constructor() {
        this.connections = new Set()
    }
    connect(func){
        var c = new Connection(func,this.connections)
        this.connections.add(func)
        return c
    }
    fire(...a){
        this.connections.forEach(_=>
            _(...a)
        )
    }
}
