import React from "react";

//include images into your bundle
import green from "../../img/Green-circle.png";
import red from "../../img/Red_Circle.png";
import yellow from "../../img/Yellow_circle.png";

//create your first component
const Home = () => {
	return (
		<>
		<div className="containers py-5">
			<div className="row justify-content-center">
				    <div className="col-1">
						<div className="row justify-content-center">
							<div className="col-1 bg-dark text-dark">
									
									<h3>1</h3>
									<h3>1</h3>
							</div>
							<div className="bg-dark text-light text-center" >
							<img src={green} width="100" height="100" />
							<img className="mb-1"src={red} width="90" height="90" />
							<img className="mt-1 mb-2" src={yellow} width="90" height="90" />
							
						
							</div>
							</div>
					</div>
			</div>
		</div>
		</>
	);
};

export default Home;
