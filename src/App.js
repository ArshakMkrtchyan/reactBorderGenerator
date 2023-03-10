import { useState } from 'react';
import './App.css';
import BorderRadius from './Components/BorderRadius';
import BorderStyle from './Components/BorderStyle';
import Color from './Components/Color';
import Width from './Components/Width';

function App() {
  const [defaultborder, setdefaultborder] = useState('solid')
  const [defaultwidth, setdefaultwidth] = useState('1px')
  const [defaultcolor, setdefaultdefaultcolor] = useState('black')
  const [defaulborderTopLeftRadius, setdefaulborderTopLeftRadius] = useState('0%')
  const [defaulborderTopRightRadius, setdefaulborderTopRightRadius] = useState('0%')
  const [defaulborderBottomLeftRadius, setdefaulborderBottomLeftRadius] = useState('0%')
  const [defaulborderBottomRightRadius, setdefaulborderBottomRightRadius] = useState('0%')


  const border = [
    'solid',
    'dotted',
    'dashed',
    'double',
    'groove',
    'ridge',
    'inset',
    'outset',
    'hidden',
    'none',
  ]

  return (
    <div className="App">
      <div className='box' style={{ width: '150px', height: '150px', backgroundColor: 'red', borderStyle: defaultborder, borderWidth: defaultwidth, color: defaultcolor, borderTopLeftRadius: defaulborderTopLeftRadius, borderTopRightRadius: defaulborderTopRightRadius, borderBottomLeftRadius: defaulborderBottomLeftRadius, borderBottomRightRadius: defaulborderBottomRightRadius }}></div>

      <h3>Style Change</h3>
      <BorderStyle border={border} setdefaultborder={setdefaultborder} />

      <h3>Width Change</h3>
      <Width setdefaultwidth={setdefaultwidth} />

      <h3>Color change</h3>
      <Color setdefaultdefaultcolor={setdefaultdefaultcolor} />

      <h3>Boder radius change</h3>
      <BorderRadius setdefaulborderTopLeftRadius={setdefaulborderTopLeftRadius} setdefaulborderTopRightRadius={setdefaulborderTopRightRadius} setdefaulborderBottomLeftRadius={setdefaulborderBottomLeftRadius} setdefaulborderBottomRightRadius={setdefaulborderBottomRightRadius} />
    </div>
  );
}

export default App;
