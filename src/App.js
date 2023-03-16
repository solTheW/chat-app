import logoo from './logoo.png'
import './App.css';

function App() {
  return (
  <div class="App">
     <img src= {logoo} class='logo1' alt='logo'width={500} height={500}/>
      <span class="App-text" width={306} height={40}>
        W celu rozpoczęcia pracy z aplikacją prosimy <br>
       </br> o zarejestrowanie się lub zalogowanie.
       </span>
       <button type= "button" class='button' width={345} height={50}> Zarejestruj się
       </button>
        <span id="row">
        <span class="linia"> </span>
        <span class="lub">  lub </span>
        <span class="linia"> </span>
        </span>
        <form action="#'" method="post">
          <input type="text" name='login' id="login" width={345} height={41} placeholder="Login..."/>
          <input type="password" name="password" id="haslo" width={345} height={41} placeholder="Hasło..."/>
          <button type= "button" class='button_2' width={345} height={50}> Zaloguj się
          </button>
          </form>
      </div>
  );
  };

export default App;
