class Floor{

	constructor(number,priority){
		
		this.number =number;
		this.priority = priority;
	}
}

class Elevator {

	constructor(){

		this.state = "idle";
		this.upQueue = [];
		this.downQueue = [];

	}

	enqueue(direction,floor){
		this.state = direction;
		if (direction === "up" && upQueue.length === 0 ){
			upQueue.push(floor);
		}else if (direction === "up" && upQueue.length > 0){
			//push then sort
			upQueue.push(floor);

			
		}
		

	}

	

}