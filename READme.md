# gulab jaamun food ordering app
- this is my first project based learning project, created along side akshay saini (namaste react)


* header 
    - logo
    - nav list - home ,cart ,about
* body 
    - search 
    - card container
        - restaurant card
* footer
    - copyright
    - address
    - contacts 
    - links



# here are 2 types of export/import

- default export /import
export default Component
import Component from "Path"

- Named export/import
export const Component
import { Component } from "Path"


# REACT HOOKS
(normal js utility functions)
- 2 v imp hooks
- useState() - superpowerfull state variable
- useEffect()



- conditional rendering
- optional chaining
- useState ~ whenever state variable updates, react triggers a reconciliation cycle(re-renders the component)
- useEffect


---- installed react-router-dom ---------------
- createbrowserrouter
- routerprovider
- useRouteError  - give more info about err, it a part of react-router-dom
- children and outlet
- never use an anchor tag in react app because it refresh the whole page
- use { link } from react-router-dom (replacement of a tag)

-difference between anchor tag and Link
<a href="/about">about us</a> - anchor tag `refreshes the whole page`
<Link to="/about">about us</Link> - Link tag `it refreshes the components`

- single page application

there are two types of routing in web apps-
1 client side routing
2 server side routing


- there are 2 types of components
1. function component - just a simple function returning JSX code
2. Classbased component - class name extends React.component{
render(){
}
}

way to use props and state in classbased components

constructor(props) {
    super(props); // very imp
    console.log(this.props);

    this.state = {
      count: 0,
      // count2 : 2 ,
   };
}


way to update state variable in class based component

<button
   className="abt-btn"
     onClick= { () => {
	this.setState({
        // NEVER UPDATE STATE VARIABLE DIRECTLY 
        	count: this.state.count + 1,
          });
       }} ;
   >
    Increase counter
</button>


if we talk about life cycle of a component
1st the constructor is mounted
then the render() is mounted
then componentDidMount()


- in classbased component componentDidMount() is used to make API calls
- in function based component we make api calls inside useEffect having an empty dependency array which means it will make API call only once 


- Lazy loading → Loads something only when it’s needed. also know as on Demand loading

- Code splitting / chunking → Breaks code into smaller files (chunks).

- Dynamic loading (dynamic import) → A method used to implement lazy loading.

<h1>we can use reactContext by two ways</h1>
1. by help of hooks useContext (for functional components) eg- in header file
2. .consumer method  (for class based component) eg - in userClass file

- to edit context all over the project we use .provider method in main file. eg- index.tsx file