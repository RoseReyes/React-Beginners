// PASS PROPS FROM PARENT TO CHILDREN COMPONENTS

class FirstName extends React.Component {
  render() {
    return(
      <h1>{this.props.firstname}</h1>
    );
  }
}

class Profile extends React.Component {
  render() {
    return(
      <img src={this.props.img}/>
    );
  }
}

class LastName extends React.Component {
  render() {
    return(
      <h1>{this.props.lastname}</h1>
      );
    }
 }

class FullName extends React.Component {
  render() {
    return(
      <div>
        <FirstName firstname={this.props.user.firstname}/>
        <LastName lastname={this.props.user.lastname}/>
        <Profile img={this.props.user.img}/>
      </div>
    );
  }
}

// PERSON IS BEING EVALUATED AS user SO CALLING IT AS A PERSON WON'T WORK. 

var person = {
  firstname: "Rob",
  lastname: "Merrill",
  img: "https://pbs.twimg.com/profile_images/699422966556168193/zUm4vhAo_400x400.jpg"
}

ReactDOM.render(
  <FullName user={person}/>,
  document.getElementById("app")
);
