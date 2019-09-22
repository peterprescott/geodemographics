// script.js

console.log('connected!')


const backdrop = document.getElementById('backdrop')
let total_agents = 0
let agents = []
let num_of_agents = 3
let step_size = 1
let neighbourhood = 5


class Agent {
  constructor(x, y) {
    // set initial values
    this.id = total_agents;
    total_agents ++;
    this.x = x;
    this.y = y;
    this.step_size = step_size;
    this.store = 0
    agents.push(this)
    }

    move(){
        if (Math.random() < 0.5) {this.x = (((this.x + this.step_size) % 500) + 500) % 500} else {this.x = (((this.x - this.step_size) % 500) + 500) % 500}
        if (Math.random() < 0.5) {this.y = (((this.y + this.step_size) % 500) + 500) % 500} else {this.y = (((this.y - this.step_size) % 500) + 500) % 500}    
        this.interact()
    }

	eat(){
		if (env.matrix[Math.round(this.x/100)][Math.round(this.y/100)] > 0){
			console.log('eating');
			env.matrix[Math.round(this.x/100)][Math.round(this.y/100)] = env.matrix[Math.round(this.x/100)][Math.round(this.y/100)] - .1
		}
		
	}

    interact(){
        for (let j=0 ; j < agents.length ; j++){ 
        if (distance_between(this.id, j) < neighbourhood ){
            if(this.id==j){}
            else{console.log('do something interactive')}
        }
    }
    }

}

class Environment {
    constructor(width, height) {
        // randomly generate environment rectangle
        this.matrix = []
        this.width = width
        this.height = height

		for (let x = 0; x < this.width; x++){
			let row = []
			for (let y = 0; y < this.height; y++){
				row.push(Math.round(Math.random()*155+100))
			}
		this.matrix.push(row)
		}


    }


}


function distance_between(m,n){
    let distance_squared = (agents[m].x-agents[n].x)**2 + (agents[m].y-agents[n].y)**2
    let distance = distance_squared**(1/2)
    return distance
}

function draw(agents){
    // erase Agents
    var circle = d3.selectAll('circle').remove()
    
    // draw newly-positioned Agents
    for (let i=0; i < agents.length; i++){
        let agent = agents[i];
        backdrop.innerHTML += '<circle fill="white" cx="' 
                                + agent.x 
                                + '" cy="' 
                                + agent.y 
                                + '" r="10" id="circle' 
                                + agent.id 
                                + '"></circle>';
        }
    }

var env = new Environment(6,6)
function paint(backdrop, env = Environment){
	// erase pixels
	var pixels = backdrop.innerHTML = ''
	
	// draw newly positioned pixels
	for (let x = 0; x < env.width; x++){
			for (let y = 0; y < env.height; y++){
					//draw env.matrix[x][y] pixel
					let posX = x*100-50
					let posY = y*100-50
					backdrop.innerHTML += '<rect fill="rgb(0,' + env.matrix[x][y] + ',0)" x="' + posX + '" y="' + posY + '" width="100" height="100" />'
			}

		}



}


// generate agents
function generate(num_of_agents){
	    agents = []
    for (i = 0; i < num_of_agents; i++){
	    new Agent(Math.random()*500, Math.random()*500);
    }
    paint(backdrop, env)
    draw(agents)
}

function iterate(){
        for (i = 0; i < agents.length; i++){
            agents[i].move()
            agents[i].eat()
        }
		paint(backdrop, env)
        draw(agents)

 }

function more(){
	agents.push(new Agent(Math.random()*500, Math.random()*500))
}

function less(){if(agents.length>1){agents.pop()}}

generate(num_of_agents)

var refreshIntervalId =  setInterval(iterate, 10)

