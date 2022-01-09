import React, { Component } from 'react';
import './Style.css'

class FoodBox extends Component {
    constructor()
    {
        super();
        this.state =
    {
        Food:[
            {id:"a",Name:"Pizza",Calorie:266,img: "https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg"},
            {id:"b",Name:"Burger",Calorie:500,img:"https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg"},
            {id:"c",Name:"Samosa",Calorie:900,img:"https://milkandcardamom.com/wp-content/uploads/2020/05/Samosa.jpg"},
            {id:"d",Name:"Idli",Calorie:800  ,img:"https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/idli-recipe-4-500x500.jpg"},
            {id:"e",Name:"Fish BBQ",Calorie:109,img:"https://kfoods.com/images1/newrecipeicon/barbecue-fish_5173.jpg"},
            {id:"f",Name:"Omlette",Calorie:188,img:"https://i2.wp.com/mygorgeousrecipes.com/wp-content/uploads/2018/02/Worlds-Best-Vegetarian-Omelette-Quick-and-Easy.jpg"},
            {id:"g",Name:"Spinach",Calorie:100,img:"https://kfoods.com/images1/newrecipeicon/barbecue-fish_5173.jpg"},
            {id:"h",Name:"Apple",Calorie:52,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3yN4MudiMN6L2urIHJ3CLrK7CndNqbN98J7S_1ab3Px42SWzYJ-KEL_8ktMw9UMWHTUE&usqp=CAU"},
            {id:"i",Name:"Puttu",Calorie:305,img:"https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/puttu-recipe-1a-500x500.jpg"},
            {id:"i",Name:"Cheesecake",Calorie:205,img:"https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg"},
            {id:"j",Name:"Rice",Calorie:130,img:"https://www.simplyrecipes.com/thmb/j_IZxLEP2tJjonCl3s7RiGnMuxo=/2000x1331/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__02__HTC-White-Rice-Lead-4-e5743ee4c63a40a0aec2f3abd9f1c097.jpg"},


        ],
        searchTxt:"",
        fc:0

        


    }
    

    }  
    
    
   
    buttonclick = (event) =>
    {
        var count = document.getElementById('count').value;
        var calcount=document.getElementById('calcount').textContent;
        var name = document.getElementById('fn').textContent        
        var add = document.createElement("h3");       
        add.innerHTML = count+"* "+name+" "+calcount+" cal";
        this.state.fc = (parseFloat(count) * parseFloat(this.state.fc))+parseFloat(calcount)
        
        
        

        

        var final = document.getElementById("tot").innerHTML=" Total Calorie : " + this.state.fc

        document.getElementById('Result-div').appendChild(add);
        

    }

    searchf = (event) =>
    {
        this.setState(
        {
            searchTxt:event.target.value
        })
    }

    
    
    

render() {
        return (
            <div>
                <div id='grid-div'>
                    <div id='Food-div'>
                        <h1>Food Items</h1>  

                    <input type="text" placeholder="Find a food" onChange={this.searchf} id="search" />
             
                        
                                                
                        <div id='Food-list'>
                            {
                            this.state.Food.filter((item)=>
                            {
                                return item.Name.toLowerCase().includes(this.state.searchTxt)
                            }
                            
                            )
                            
                            
                            .map((item)=>
                            {
                                return <div id='food-list-final'>

                                    <h1 id='fn'>{item.Name}</h1>
                                    <img src={item.img} alt="" className='food-img'/>
                                    <br />
                                    <input type="text" defaultValue={1} className='number' id='count'/>
                                    <button onClick={this.buttonclick}>+</button>
                                    <p>
                                        <span id='calcount'>{item.Calorie}</span>
                                        <span> cal</span>
                                    </p>
                                </div>

                            })}

                        </div>
                        
                        
                        



                    </div>

                    <div id='Result-div'>   
                    <br />
                    <h1>Total Calorie Count</h1>

                    <h3 id='tot'>Total Calorie : 0 </h3>
                    

                    </div>
                </div>
                
                
            </div>
        );
    }
}



export default FoodBox;