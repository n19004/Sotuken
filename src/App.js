import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from '../src/components/Header';
import Header2 from '../src/components/Header2';
import Header3 from '../src/components/Header3';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import '../src/App.css';
import tikin from '../src/images/tikin.png';
import corokke from '../src/images/corokke.png';
import karaage from '../src/images/karaage.png';



const images = [
  {
    url: '../static/images/button/green.jpg',
    title: 'ホットスナック',
    width: '100%',
    link: '/shouhinsentaku',
  },
  {
    url: '../static/images/button/green.jpg',
    title: 'たばこ',
    width: '100%',
    link: '/shouhinsentaku2',
  }
 
];


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  margin: {
    margin: theme.spacing(1),
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0158f5',
    background: '#f7b704',

  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    fontWeight: '700',
    fontSize: '30px',
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));


const PageOne = () => {
  const classes = useStyles();

  return (
    <>
    <Header />
      <div className='container'>
        <div className='selectButton'>
        {images.map((image) => (
        <Link to={image.link}>
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
        </Link>
      ))}

        </div>
      </div>
    </>
  );
  
};


class Kakuningamen extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0, counter2: 0, counter3: 0}
    this.handleClick = this.handleClick.bind(this)
  };

  handleClick(){
    this.props.history.push({
      pathname: '/kessaigamen',
      state: { counter: this.props.location.state.counter, counter2:this.props.location.state.counter2, counter3:this.props.location.state.counter3}
    })
  };

  render() {
    console.log(this.props.location.state.counter)
    console.log(this.props.location.state.counter2)
    return (
      <>
      <Header2 />
      <div className='container'>
        {
          (this.props.location.state.counter <= 0)
          ? <div></div>
          : <div className='kakuningazou'><img src={tikin} className='imageSize' /><p className='suujisize'>チキン</p>
            <p className='suujisize'>{this.props.location.state.counter}個</p></div>
        }
      
       {
         (this.props.location.state.counter2 <= 0)
         ? <div></div>
         : <div className='kakuningazou'><img src={corokke} className='imageSize' /><p className='suujisize'>コロッケ</p>
           <p className='suujisize'>{this.props.location.state.counter2}個</p></div>
       }

       {
         (this.props.location.state.counter3 <= 0)
         ? <div></div>
         : <div className='kakuningazou'><img src={karaage} className='imageSize' /><p className='suujisize'>唐揚げ</p>
           <p className='suujisize'>{this.props.location.state.counter3}個</p></div>
       }

      </div>
      <div className='modoruketteibutton'>
      <button className='modorudezain'>
        <Link to="/shouhinsentaku">
            戻る
        </Link>
        </button>
        <button className='ketteidezain' onClick={this.handleClick}>
        <Link to='/kakuningamen'>決定</Link>
        </button>
      </div>
     
      </>
    );
  }
};


class Kessaigamen extends Component {  

  render() {
    console.log(this.props.location.state.counter)
    console.log(this.props.location.state.counter2)
    return (
      <>
      <Header3 />
      <h1 className='midasi'>お買い上げありがとうございます。</h1>
      <div className='container'>
        {
          (this.props.location.state.counter <= 0)
          ? <div></div>
          : <div className='kakuningazou'><img src={tikin} className='imageSize' /><p className='suujisize'>チキン</p>
            <p className='suujisize'>{this.props.location.state.counter}個</p></div>
        }
      
       {
         (this.props.location.state.counter2 <= 0)
         ? <div></div>
         : <div className='kakuningazou'><img src={corokke} className='imageSize' /><p className='suujisize'>コロッケ</p>
           <p className='suujisize'>{this.props.location.state.counter2}個</p></div>
       }

       {
         (this.props.location.state.counter3 <= 0)
         ? <div></div>
         : <div className='kakuningazou'><img src={karaage} className='imageSize' /><p className='suujisize'>唐揚げ</p>
           <p className='suujisize'>{this.props.location.state.counter3}個</p></div>
       }


      </div>
      <div className='modoruketteibutton'>
      <button className='modorudezain'>
        <Link to="/shouhinsentaku">
            戻る
        </Link>
        </button>
        <button className='ketteidezain' onClick={this.handleClick}>
        <Link to='/'>OK</Link>
        </button>
        
      </div>
     
      </>
    );
  }
};


class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = { counter: 0, counter2: 0, counter3: 0}
    this.handleClick = this.handleClick.bind(this)
  };

  handleClick(){
    this.props.history.push({
      pathname: '/kakuningamen',
      state: { counter: this.state.counter, counter2:this.state.counter2, counter3:this.state.counter3}
    })
  };

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 })
  };

  decrementCounter() {
    this.state.counter <= 0 
      ? this.setState({counter: 0})
      : this.setState({ counter: this.state.counter - 1 })
  };

  incrementCounter2() {
    this.setState({ counter2: this.state.counter2 + 1 })
  };

  decrementCounter2() {
    this.state.counter2 <= 0 
      ? this.setState({counter2: 0})
      : this.setState({ counter2: this.state.counter2 - 1 })
  };

  incrementCounter3() {
    this.setState({ counter3: this.state.counter3 + 1 })
  };

  decrementCounter3() {
    this.state.counter3 <= 0 
      ? this.setState({counter3: 0})
      : this.setState({ counter3: this.state.counter3 - 1 })
  };




  render() {
    return (
      <>
      <Header />
      <h2 className='midasi3'>ホットスナック</h2>
      
      <div className='container'>
      <button className='buttonSize'>
      <div>
        <img src={tikin} className='imageSize' />
        <p className='namae'>チキン</p>
        <div><p className='suujisize'>{this.state.counter}</p></div>
        <button
          className='buttonpurasu' onClick={() => this.incrementCounter()}>+</button>
        <button
          className='buttonmainasu' onClick={() => this.decrementCounter()}>-</button>
      </div>
      </button>

      <button className='buttonSize'>
      <div>
        <img src={corokke} className='imageSize' />
        <p className='namae'>コロッケ</p>
        <div><p className='suujisize'>{this.state.counter2}</p></div>
        <button
          className='buttonpurasu' onClick={() => this.incrementCounter2()}>+</button>
        <button
          className='buttonmainasu' onClick={() => this.decrementCounter2()}>-</button>
      </div>
      </button>

      <button className='buttonSize'>
      <div>
        <img src={karaage} className='imageSize' />
        <p className='namae'>唐揚げ</p>
        <div><p className='suujisize'>{this.state.counter3}</p></div>
        <button
          className='buttonpurasu' onClick={() => this.incrementCounter3()}>+</button>
        <button
          className='buttonmainasu' onClick={() => this.decrementCounter3()}>-</button>
      </div>
      </button>


      </div>
      <div className='modoruketteibutton'>
      <button className='modorudezain'>
        <Link to="/">
            戻る
        </Link>
        </button>
        <button className='ketteidezain' onClick={this.handleClick}>
        <Link to='/kakuningamen'>決定</Link>
        </button>
      
      </div>
      </>
    )
  }
};

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/shouhinsentaku"  component={App} />
          <Route path="/kakuningamen"  component={Kakuningamen} />
          <Route path="/kessaigamen"  component={Kessaigamen} />
        </div>
      </BrowserRouter>
    </div>
  );
};


export default Router;
