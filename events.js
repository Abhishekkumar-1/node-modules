const EventEmitter=require('events')

const customEmitter=new EventEmitter()

// customEmitter.emit('response','john',69)

customEmitter.on('response',(name,id)=>{
    console.log(`data recieved from user ${name} and id: ${id}`)
})

// customEmitter.emit('response','john',69)

customEmitter.on('response',()=>{
    console.log('data received again')
})

customEmitter.emit('response','john',69)
