const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)

    res.write('<h1>Hello from node js</h1>')
    res.write('<h2>Hello from node js</h2>')
    res.write('<h3>Hello from node js</h3>')
    res.end(`
    <div style="background: red; width: 700px; height: 700px;">
        <h1>Test</h1>
    </div>
    `)
}
)

server.listen(3006, () => {
    console.log('Server is ranning...');
})
