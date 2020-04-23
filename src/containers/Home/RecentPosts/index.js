import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card/index';

 const RecentPosts= (props) => {
    return (
        <div style={props.style}>
            <Card style={{marginBottom: '20px'}}>
               <div className="postImageWrapper">
                  <img src={require('../../../BlogPostImages/img6.jpeg')}/>
               </div> 

               <div style={{textAlign:'center'}}>
                    <span>Featured</span>
                    <h2>Fitness Mantra to Live Fit Life</h2>
                    <span>posted on July21, 2016 by Sora Blogging Tips</span>
                    <p> Midst first it, you're multiply divided. 
                      There don't, second his one given the he one third rule fruit, very.
                      Fill. Seed give firmament doesn't land, isn't lesser creeping. 
                      Abundantly you called signs waters yielding he cattle greater were evening.
                      Sixth make moving the multiply dominion creature beast made subdue lights him. 
                      Green of lights in their first. It there winged called after upon him.
                      Bring one was upon Life moving. Them beast first all lights place air creature. 
                      Green have, tree made.\n\nWon't sixth there meat us first, fruitful. 
                      Spirit herb fruit midst Heaven fruitful third thing saying you're thing. 
                      Deep own own winged. Fish. Grass which darkness together divided from firmament. 
                      Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness 
                      image midst may moved living land you'll evening he abundantly, under divided our which. 
                      Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. 
                      Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. 
                      Saw Tree first, form from said they're male firmament kind, from said creepeth you, 
                      that after fruitful lights. Hath you're image second evening brought set. 
                      Was divided earth beginning. Without a isn't and. Years. 
                      Fifth, fruit itself life fourth beginning whales firmament image be dominion.
                      Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very.
                      Blessed replenish. Don't. Likeness fifth may signs called image tree is. 
                    </p>
                    <button>Read More</button>
                </div>     
            </Card>
          </div>
    );
}

export default RecentPosts;
