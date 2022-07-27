const http = require('http')

const server = http.createServer((req,res) => {

    if(req.url === '/')
    {
        res.end("Welcome to Our Home Page")
    }
    if(req.url === '/about')
    {
        for(let i=1; i<1000; i++)
        {
            for(let j=1; j<1000; j++)
            {
                console.log(`${i}${j}`)
            }
        }
        res.end("About page")
    }
    res.end("error page")

})

server.listen(5000, () => {
    console.log("server listening on port 5000...")
}) 