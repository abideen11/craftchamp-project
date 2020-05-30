import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Footer from './Footer';
import Error from './Error';
import Temporary from './Temporary';
import LogIn from './LogIn';
import Register from './Register';
import CategoryComponent from './CategoryComponent';
import CategoryComponentGuide from './CategoryComponentGuide';
import Search from './Search';

class App extends React.Component {
  state = {
    guides: [],
    guideCategory: [],
    searchArray: [],
    addGuide: {
      title: null,
      category: null,
      imgUrl: null,
      materials: null,
      instructions: null 
    }
  }
  componentDidMount() {
    fetch("http://localhost:3000/guides")
    .then(r => r.json())
    .then(data => {
      this.setState({
        guides: data
      })
    })
  }
  onGuideCategory = (category) => {
    this.setState({
      guideCategory: this.state.guides.filter(i => i.category === category)
    })
  }
  onAddGuide = (guide) => {
    switch (guide.title) {
      case "How to Cut Your Own Hair":
        return this.setState({
          addGuide: {
            title: guide.title,
            category: guide.category,
            imgUrl: guide.img_url,
            materials: ["Hair Clipper","Hair Clipper Guards","Brush","Comb","Hair Pick"],
            instructions: [{order: "1.", text: "Before turning on the clippers, it's important to remove tangles. For longer hair, use a pick or otherwise use a brush or comb for shorter hair."},
          {order: "2.", text: "Clippers are equipped with multiple guards of various lengths. Adjust clipper blades to the amount that will be cut off."},
        {order: "3.", text: "Divide the hair into quadrant. Finish one quadrant completely before moving on to the next. Jumping around at random will result in an uneven cut."},
      {order: "4.", text: "Level out any uneven or rough patches."},
    {order: "5.", text: "Remove all guards from the clippers and set the blades to their lowest setting. Beginning on one side of the hairline, trim all the way around to the other. Give the hairline a rounded edge by following the curvature of the client's head."},
  {order: "6.", text: "Trim the temple hairline at a right angle to the top of the hairline. Create a smooth arc as you move back to the sideburns."},
{order: "7.", text: "Cut the sides of the back vertically and make them as even as possible. Gently edge the back hairline and make it even from side to side, parallel to the floor."},
{order: "8.", text: "As a final step, put a small amount of aftershave on the hands and pat down the edges of your hair. This will help to prevent any skin irritation that might result from the close cutting in this area. Have a look in the mirror so that you can decide if this is acceptable or if more needs to be cut off."}
]
          } 
        })
      case "How to Build a Step Stool":
        return this.setState({
          addGuide: {
            title: guide.title,
            category: guide.category,
            imgUrl: guide.img_url,
            materials: ["Saw","1/4-in. Plywood","3/4-in. Baltic Birch Plywood","3/8-in. Walnut Dowel","Wood Glue"],
            instructions: [{order: "1.", text: "Based on the cutting list, mill the parts to rough size"},
          {order: "2.", text: "Set up your dado to cut a 3/4-in. wide and 3/8-in. deep groove. Cut a dado 10-in. from the bottom of each side for the bottom step. To cut the top rabbets, clamp a sacrificial plywood fence to your saw's fence, so you can slide it right up against the blade. Cut the top rabbets."},
        {order: "3.", text: "Draw the side's shape onto a piece of 1/4-in. or 1/2-in. plywood. Clamp the board to the workbench and cut the shape with a jigsaw. Sand the template up to the line. Take your time, making the templates as perfect as possible. Any imperfections in the template will show up on the finished sides."},
      {order: "4.", text: "Trace the template onto the inside face of each side. Be sure to flip the template over when tracing the second side to create left and right pieces. Rough-cut each side staying about 1/4-in. outside the line."},
    {order: "5.", text: "Pin the template to one of the sides with 3/4-in. 18-gauge brad nails. Keep the nails close to the edge of the template to prevent it from lifting while you're routing. With the side clamped to your bench, trim the edges, flush with the template using a top-bearing flush-trim bit with a 1/2-in. shank. Remove the template and brad nails and repeat on the other side board."},
  {order: "6.", text: "Clamp the stool together without glue, with the bottom step overhanging the front and back of the sides. Set the top step flush with the back of the stool, letting the front edge overhang. Transfer the angle from the sides onto the ends of the steps."},
{order: "7.", text: "Tilt your table saw's blade to match the scribed angles on the steps and then rip them to final width."},
{order: "8.", text: "Glue the dadoes and rabbets and then clamp the stool together, checking for square. Clean off any excess glue with a damp rag."},
{order: "9.", text: "When the glue has dried, remove the clamps and mark for drilling the dowel holes. Space the dowel holes evenly, centered on the steps thickness. Drill the holes 2-in. deep using 3/8-in. bit. Can also use a Forstner bit to prevent tearing out the plywood's veneer"},
{order: "10.", text: "Glue and insert a dowel into each hole. The dowels should be just proud of the surface, so you can trim them, flush after the glue dries. Trim the dowels using a handsaw. To protect the surface from the saw's teeth, cut a hole in a piece of cardboard or plastic and slip it over the dowel. Finish up by sanding."}
]
          }
        })
      case "How to Make Body Soap":
        return this.setState({
          addGuide: {
            title: guide.title,
            category: guide.category,
            imgUrl: guide.img_url,
            materials: ["Coconut Oil","Olive Oil","Lye (sodium hydroxide)","Coffee","Coffee Grounds","Oat Bran","Kitchen Scale","Stainless Steel Thermometer","Gloves","Goggles","Face Mask","Hand Blender","Stainless Steel Pot","Mixing Bowls","Measuring Cups & Spoons","Stainless Steel Spoon","Silicone Spatula","Soap Mold","Parchment Paper","Towel"],
            instructions: [{order: "1.", text: "Measure & Mix: Using a kitchen scale, weigh out 8.48 oz coconut oil in a stainless steel pot. In a bowl, measure 12.48 oz olive oil. In a second bowl, measure 7.9 oz coffee. Measure 3.22 oz lye in a third bowl. Measure out 1 tablespoon coffee grounds and 1/3 cup oat bran in a fourth bowl; set aside. Put on protective gear, and make sure you are in a well-ventilated area. Add the lye to the coffee, and stir to dissolve. (Always add lye to liquid, not the other way around) This will start a chemical reaction, and the mixture will get quite hot. Set aside. You may remove eyewear and face mask at this point but gloves should remain on."},
          {order: "2.", text: "Emulsify: Melt coconut oil over low heat until no solids remain. Add olive oil. Using a stainless steel thermometer, check the temperature of the oils. Compare against the temperature of the lye solution, and adjust until they're within a degree or two, between 100 110 degrees. Pour the lye solution into the oils, and use a hand or stick blender to emulsify until the mixture begins to thicken and the texture resembles pudding. This process will take 5-10 minutes with a stick blender. Once the soap has thickened, stir in the coffee grounds and oat bran with the stainless steel spoon or spatula."},
        {order: "3.", text: "Pour & Rest: Slowly pour the mixture into a soap mould. Lift and tap the mold against the counter a few times to release air bubbles. Cover with parchment paper, and then wrap the entire mold with a towel to insulate it."},
      {order: "4.", text: "Remove From Mould: After 24-48 hours, remove the towel, and take the soap out of the mold. If you used a large single mold rather than individual molds, let the soap loaf sit for another day to harden further before cutting into bars. Any sharp knife will work here. A vegetable peeler can be used to smooth sides, if desired."},
    {order: "5.", text: "Cure: After the soap is cut into bars, you'll need to let them cure in a cool and well-ventilated area for four weeks. This allows the soap to finish saponification and for all the excess water to evaporate. Before you know it you will be able to enjoy your soap"}
  ]
          }
        })
      case "How to Make Dishwashing Liquid":
        return this.setState({
          addGuide: {
            title: guide.title,
            category: guide.category,
            imgUrl: guide.img_url,
            materials: ["2/3 cup Sal Suds","1 & 1/3 cup Distilled Water","40 Drops Lemon or Grapefruit Essential Oil","1 Tablespoon Washing Soda","1 Tablespoon Table or Kosher Salt & 3 Tablespoons Hot Water","Large Pot","Dish Soap Dispenser"],
            instructions: [{order: "1.", text: "In a small pot, heat the water and salt, stirring frequently until everything is completely dissolved. Remove the pot from the heat and pour the contents into a small bowl. Set the salt mixture aside. If you use kosher salt, it wouldn't completely dissolve, so just strained the residual salt pieces out."},
          {order: "2.", text: "Add the washing soda and 1 and 1/3 distilled water to the pot and heat just until dissolved."},
        {order: "3.", text: "Add the sal suds, washing soda and water, and essential oils to a dish soap dispenser. If your container has a small opening, then it works best to mix this in a glass mason jar."},
      {order: "4.", text: "Add 1 tablespoons of the salt water to the soap and stir. It will turn cloudy and thicken. Add another tablespoon of salt water mixture if you want it thicker. Keep in mind that it may thicken more over time."},
    {order: "5.", text: "Pour the mixture into a soap dispenser."}
  ]
          }
        })
      case "How to Apply Makeup":
        return this.setState({
          addGuide: {
            title: guide.title,
            category: guide.category,
            imgUrl: guide.img_url,
            materials: ["Primer Makeup","Makeup Crayons","Concealer","Foundation Makeup","Makeup Blender","Blush","Highlighter","Bronzer","Makeup Palettes"],
            instructions: [{order: "1.", text: "Primer: Using a primer is one of the best things you can do when it comes to applying makeup. A primer can help to give you an even canvas to work on, as it can help smooth lines. Primer can also help your makeup wear more evenly throughout the day. Choose a primer with a glowing finish if you have dry skin or a primer with a matte finish if you have oily skin. Regardless of which primer you pick, apply it all over your face or to targeted areas, depending on your skin's specific concerns."},
          {order: "2.", text: "Color Correct: Have dark circles under eyes or redness you want to hide? Now's the time to use a color corretcing concealer, like one of the makeup crayons to cover these up. Peach, bisque, or orange can disguise dark circles, green can neutralize the look of redness, purple can hide discoloration, and yellow can mask discoloration. Simply bend a small amount of color-correcting concealer onto targeted areas using your finger."},
        {order: "3.", text: "Once you're done color correcting, finish the cover up process by applying a flesh-toned concealer, like concealer (which comes in 14 true-to-you shades to match every skin tone and undertone) on top. Use the included applicator to blend and buff the concealer into your skin."},
      {order: "4.", text: "Foundation: Your face wouldn't be complete without a little foundation! There are so many different kinds of foundation out there, so choose one that suits your needs. For example, if you have oily skin, you may want to consider using a matte (aka non-shiny) finish foundation, like the foundation. On the other hand, if you have dry skin, a radiant finish foundation, like the foundation might be a better option for you. Whichever foundation you choose, one of the best ways to apply it is with a makeup blender, like the blender."},
    {order: "5.", text: "Bronzer, Blush and/or Highlighter: Get your glow on or fake a rosy tone by applying a little bronzer, blush and/or highlighter. As far as bronzer and highlighter go, put them on areas where the sun would naturally hit your face (your forehead, nose, cheeks, and chin). When it comes to blush apply some to the apples of your cheeks-and remember to smile while doing so! Try the bronzer, blush and palette."}
  ]
          }
        })
      case "How to Trim Your Beard":
        return this.setState({
          addGuide: {
            title: guide.title,
            category: guide.category,
            imgUrl: guide.img_url,
            materials: ["Beard Trimmer"],
            instructions: [{order: "1.", text: "Look straight in the mirror, holding your head upright. Any hair you can see below your chin from this angle definitely has to go."},
          {order: "2.", text: "Tilt your head back a bit and place a finger just at the top of your Adam's apple. This spot marks a natural dividing line between your beard and your neck."},
        {order: "3.", text: "Place your trimmer at this spot and move downwards. Continue on one side, working outwards from the middle, ensuring you stay under the jawline. Return to the middle, and work outwards on the other side. Don't make your beard neckline too round. A slight upward curve is best."},
      {order: "4.", text: "Define the corners of your beard by trimming a vertical line below your earlobes to connect with the horizontal line below your chin. You can leave this as a chiseled, angular corner, or gently round it off to make less of a macho statement."},
    {order: "5.", text: "Like it? If you're happy with your trim, follow up with a clean neck shave to make your beard neckline something your colar will feel proud to be seen with."}
  ]
          }
        })
      case "How to Apply Mascara":
        return this.setState({
          addGuide: {
            title: guide.title,
            category: guide.category,
            imgUrl: guide.img_url,
            materials: ["Eyelash Curler","Eyelash Primer","Mascara","Makeup Remover","Facial Moisturizer"],
            instructions: [{order: "1.", text: "Curl Your Lashes: Before applying mascara, use an eyelash curler to lift and lenghten lashes. This will allow your mascara to adhere better to your eyelashes. Choose one with a rounded upper pad that enables you to get as close to the lash line as possible without pinching."},
          {order: "2.", text: "Use Eyelash Primer: Just like you would use primer on your skin before foundation, an eyelash primer will give your mascara better staying power. It will also help thicken and separate lashes, prepping them perfectly for mascara. Swipe one or two coats of primer on top lashes and bottom lashes and wait at least 30 seconds before moving onto mascara."},
        {order: "3.", text: "Apply Mascara on Your Upper and Lower Lashes: To apply your mascara, look up, place the wand at the base of your upper lashes, and wiggle it back and forth, coating the base of your lashes. Then pull the wand upward towards the tip of your eyelashes, making sure you're coating every part of your lashes as you pull through and moving slowly to avoid clumping. Apply additional coats of mascara until you get the thickness and look you want, taking care not to let the product dry in between coats (this can make your eyelashes brittle and weak). When it comes to your bottom lashes, you'll want to be extra careful not to use too much product and create clumps. Since your bottom lashes are generally more delicate than your upper lashes, any clumpy sections will be especially apparent. To avoid this, use the tip of the wand and apply your mascara just at the roots of the lashes, wiggling the bristles back and forth for an even coat."},
      {order: "4.", text: "Cover and Separate All Your Eyelashes: To make sure you're covering every individual eyelash, when you reach the outer and inner corners of your eyes and those hard-to-reach corner eyelashes, angle your wand vertically and gently brush up against them. This will help ensure a more even application. Next, switch the brush to a diagonal downward angle and gently move across your eye, so the bristles on your wand hit the tips of your upper lashes. Thia will separate them and remove any clumps."},
    {order: "5.", text: "Clean Up Any Smudges: Mascara can be messy and sometimes smudges onto the eyelids and the skin around the eye. It happens to the best of us, even professional makeup artists. Luckily, it's super simple to fix. Remove any leftover product with a gentle eye makeup remover that won't harm your skin or eyes. Or, cover a cotton swab with a face moisturizer, and gently press it onto the smudge to remove."}
  ]
          }
        })
      case "How to Install a Muffler":
        return this.setState({
          addGuide: {
            title: guide.title,
            category: guide.category,
            imgUrl: guide.img_url,
            materials: ["Car Muffler","Metric Socket","Flathead Screwdriver","Ratchet","Penetrating Oil","Grinder","Gloves","Floor Jack"],
            instructions: [{order: "1.", text: "Jack Up Your Car: Use your floor jack to raise up your car. Ensure the car is in park, and you have set the emergency brakes."},
          {order: "2.", text: "Locate Old Muffler Flange: Spray penetrating fluid on the bolts and let them soak for at least one hour."},
        {order: "3.", text: "Remove the Muffler Bolts and Clamps: This is the most tricky part of this job. Due to high heat, the exhaust bolts can be very hard to remove. Always use the correct size of the socket wrench. Do not use an adjustable wrench on the exhaust bolts, you will most likely strip the bolts. It may be wise to have a spare exhaust clamp and bolts in case your old clamp gets damaged. Remove the muffler exhaust hangers. These are easy to remove as they typically slide right out. Often some force is required. Once you remove the exhaust clamps and bolts you should be able to slide out the old exhaust. Typically you can pull the old muffler towards the rear of the car. In some cases, you may be able to simply drop the muffler down. If the old pipes are limiting you from removing the old exhaust you can cut the pipes as long as you have new replacement pipe ready. Some stock mufflers are welded where your new muffler may have clamps and joints, in such case you will have to cut the old pipe in order to remove the muffler. Always use eye protection and gloves if you have to cut out the old exhaust pipe. Be careful so that you don't get injured. Also, pay attention to any wires or other parts that are near the exhaust. You don't want to accidentally cut anything else."},
      {order: "4.", text: "Install New Exhaust: Line up the old muffler next to the new one. Make sure you have the orientation of the pipes correctly. Some joints can be tightened before you install the muffler into the car. If you are not sure, don't make any connections yet. Start installing the new muffler on the car. You may also consider upgrading the muffler at this point. Some car owners choose to delete the muffler and go with a straight pipe instead but that may be illegal in some states. Use the rubber hangers to secure the muffler in place. Next, you need to make the pipe connections from the new muffler to the flange on the exhaust system. Continue by putting together the exhaust pipes. Make sure to install the gaskets when applicable. Some exhaust pipes use an o-ring to at the joints. Connect the new pipe to the old pipe. Make sure to install the gaskets that came with the muffler. It is common for aftermarket exhaust systems to come with a sleeve. You will use the sleeve to join the two new pipes together, typically at the middle. You should make this connection last if at all possible. The sleeve is four to five inches long and can be used to make any adjustments when the pipe is too short or the angle didn't match perfectly. It is recommended that you use muffler and tailpipe sealer at joints and connections. The exhaust sealant can help create tight connections. You don't want to have exhaust leaks at joints right after you install a new muffler."}
    ]
          }
        })
    }
  }
  onSearch = (e) => {
    this.state.guides.map(
      i => {
        if(i.title.toLowerCase().includes(e.toLowerCase()) || i.category.toLowerCase().includes(e.toLowerCase())) {
          this.setState({
            searchArray: this.state.guides.filter(i => i.title.toLowerCase().includes(e.toLowerCase()) || i.category.toLowerCase().includes(e.toLowerCase()))
          })
        }
      }
    )
  }
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route render={() => <Header onGuideCategory={this.onGuideCategory} onSearch={this.onSearch} />} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/artscrafts" render={() => <CategoryComponent guideCategory={this.state.guideCategory} />} />
            <Route path="/automotive" render={() => <CategoryComponent guideCategory={this.state.guideCategory} onAddGuide={this.onAddGuide} />} />
            <Route path="/beauty" render={() => <CategoryComponent guideCategory={this.state.guideCategory} onAddGuide={this.onAddGuide} />} />
            <Route path="/carpentry" render={() => <CategoryComponent guideCategory={this.state.guideCategory} onAddGuide={this.onAddGuide} />} />
            <Route path="/cleaningproducts" render={() => <CategoryComponent guideCategory={this.state.guideCategory} onAddGuide={this.onAddGuide} />} />
            <Route path="/electronics" render={() => <CategoryComponent guideCategory={this.state.guideCategory} />} />
            <Route path="/grooming" render={() => <CategoryComponent guideCategory={this.state.guideCategory} onAddGuide={this.onAddGuide} />} />
            <Route path="/hygieneproducts" render={() => <CategoryComponent guideCategory={this.state.guideCategory} onAddGuide={this.onAddGuide} />} />
            <Route path="/guide" render={() => <CategoryComponentGuide addGuide={this.state.addGuide} />} />
            <Route path="/login" component={LogIn} />
            <Route path="/register" component={Register} />
            <Route path="/search" render={() => <Search searchArray={this.state.searchArray} onAddGuide={this.onAddGuide} />} />
            <Route path="/temporary" component={Temporary} />
            <Route path="*" component={Error} />
          </Switch>
          <Route component={Footer} />
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
