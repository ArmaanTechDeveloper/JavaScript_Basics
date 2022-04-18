const http = require('http');
const app = require('./app')
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
const { loadHabitablePlanets } = require('./models/planets.model')

async function loadDataOnStartUp(){
    await loadHabitablePlanets();
    server.listen(PORT,()=>{
        console.log(`Listeining on the port ${PORT}`);
    });
}
loadDataOnStartUp();