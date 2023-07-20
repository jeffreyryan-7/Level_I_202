import {useState} from 'react';
import splitFiles from './splitFiles';
import levelLeaf from './Level_1_Leaf.png';

function App() {
  // All content for year 2
  const [everything,setEverything]=useState(true);
  function everythingToggle(){
    setEverything(!everything);
    if (!everything){
      setInstruments(true);
      setSnare(true);
      setXylo(true);
      setSessions(true);
      setSession1(true);
      setSession2(true);
      setSession3(true);
      setSession4(true);
      setSession5(true);
      setSession6(true);
      setComposers(true);
      setBreuer(true);
      setPayson(true);
      setWooten(true);
      setTompkins(true);
      setGerman(true);
      setDorn(true);
      setBailey(true);
      setDelecluse(true);
      setAnderson(true);
      setMacarez(true);
      setTechniques(true);
      setFlams(true);
      setRuffs(true);
      setFourStrokes(true);
    } else {
      setInstruments(false);
      setSnare(false);
      setXylo(false);
      setSessions(false);
      setSession1(false);
      setSession2(false);
      setSession3(false);
      setSession4(false);
      setSession5(false);
      setSession6(false);
      setComposers(false);
      setBreuer(false);
      setPayson(false);
      setWooten(false);
      setTompkins(false);
      setGerman(false);
      setDorn(false);
      setBailey(false);
      setDelecluse(false);
      setAnderson(false);
      setMacarez(false);
      setTechniques(false);
      setFlams(false);
      setRuffs(false);
      setFourStrokes(false);
    }
  }


  // Year two split by instruments  
  const [instruments,setInstruments]=useState(true);
  function instrumentsToggle(){
    if (!instruments){
      setSnare(true);
      setXylo(true);
      setInstruments(!instruments);
    } else {
    setEverything(false);
    setSnare(false);
    setXylo(false);
    setInstruments(!instruments);}
  }

  const [snare,setSnare]=useState(true);
  function snareToggle(){
    setEverything(false);
    setSnare(!snare);
    if (!snare && xylo) {
      setInstruments(true);
    } else {
      setInstruments(false);
    }
  }

  const [xylo,setXylo]=useState(true);
  function xyloToggle(){
    setEverything(false);
    setXylo(!xylo);
    if (snare && !xylo) {
      setInstruments(true);
    } else {
      setInstruments(false);
    }
  }


  // Year two split into sessions
  const [sessions, setSessions]=useState(true);
  function sessionsToggle(){
    if (!sessions){
    setSession1(true);
    setSession2(true);
    setSession3(true);
    setSession4(true);
    setSession5(true);
    setSession6(true);
    setSessions(!sessions);
    } else {
    setEverything(false);
    setSession1(false);
    setSession2(false);
    setSession3(false);
    setSession4(false);
    setSession5(false);
    setSession6(false);
    setSessions(!sessions);}
  }
  
  const [session1,setSession1]=useState(true);
  function session1Toggle(){
    setEverything(false);
    setSession1(!session1);
    if (!session1 && session2 && session3 && session4 && session5 && session6 ) {
      setSessions(true);
    } else {
      setSessions(false);
    }
  }

  const [session2,setSession2]=useState(true);
  function session2Toggle(){
    setEverything(false);
    setSession2(!session2);
    if (session1 && !session2 && session3 && session4 && session5 && session6 ) {
      setSessions(true);
    } else {
      setSessions(false);
    }
  }

  const [session3,setSession3]=useState(true);
  function session3Toggle(){
    setEverything(false);
    setSession3(!session3);
    if (session1 && session2 && !session3 && session4 && session5 && session6 ) {
      setSessions(true);
    } else {
      setSessions(false);
    }
  }

  const [session4,setSession4]=useState(true);
  function session4Toggle(){
    setEverything(false);
    setSession4(!session4);
    if (session1 && session2 && session3 && !session4 && session5 && session6 ) {
      setSessions(true);
    } else {
      setSessions(false);
    }
  }

  const [session5,setSession5]=useState(true);
  function session5Toggle(){
    setEverything(false);
    setSession5(!session5);
    if (session1 && session2 && session3 && session4 && !session5 && session6 ) {
      setSessions(true);
    } else {
      setSessions(false);
    }
  }

  const [session6,setSession6]=useState(true);
  function session6Toggle(){
    setEverything(false);
    setSession6(!session6);
    if (session1 && session2 && session3 && session4 && session5 && !session6 ) {
      setSessions(true);
    } else {
      setSessions(false);
    }
  }


  // Year two split by composers 
  const [composers, setComposers]=useState(true);
  function composersToggle(){
    if (!composers){
    setBreuer(true);
    setPayson(true);
    setWooten(true);
    setTompkins(true);
    setGerman(true);
    setDorn(true);
    setBailey(true);
    setDelecluse(true);
    setAnderson(true);
    setMacarez(true);
    setComposers(!composers);
    } else {
      setBreuer(false);
      setPayson(false);
      setWooten(false);
      setTompkins(false);
      setGerman(false);
      setDorn(false);
      setBailey(false);
      setDelecluse(false);
      setAnderson(false);
      setMacarez(false);
      setComposers(!composers);}
  }
  
  const [Breuer,setBreuer]=useState(true);
  function BreuerToggle(){
    setEverything(false);
    setBreuer(!Breuer);
    if (!Breuer && Payson && Wooten && Tompkins && German && Dorn && Bailey && Delecluse && Anderson && Macarez) {
      setComposers(true);
    } else {
      setComposers(false);
    }
  }

  const [Payson,setPayson]=useState(true);
  function PaysonToggle(){
    setEverything(false);
    setPayson(!Payson);
    if (Breuer && !Payson && Wooten && Tompkins && German && Dorn && Bailey && Delecluse && Anderson && Macarez) {
      setComposers(true);
    } else {
      setComposers(false);
    }
  }

  const [Wooten,setWooten]=useState(true);
  function WootenToggle(){
    setEverything(false);
    setWooten(!Wooten);
    if (Breuer && Payson && !Wooten && Tompkins && German && Dorn && Bailey && Delecluse && Anderson && Macarez) {
      setComposers(true);
    } else {
      setComposers(false);
    }
  }

  const [Tompkins,setTompkins]=useState(true);
  function TompkinsToggle(){
    setEverything(false);
    setTompkins(!Tompkins);
    if (Breuer && Payson && Wooten && !Tompkins && German && Dorn && Bailey && Delecluse && Anderson && Macarez) {
      setComposers(true);
    } else {
      setComposers(false);
    }
  }

  const [German,setGerman]=useState(true);
  function GermanToggle(){
    setEverything(false);
    setGerman(!German);
    if (Breuer && Payson && Wooten && Tompkins && !German && Dorn && Bailey && Delecluse && Anderson && Macarez) {
      setComposers(true);
    } else {
      setComposers(false);
    }
  }

  const [Dorn,setDorn]=useState(true);
  function DornToggle(){
    setEverything(false);
    setDorn(!Dorn);
    if (Breuer && Payson && Wooten && Tompkins && German && !Dorn && Bailey && Delecluse && Anderson && Macarez) {
      setComposers(true);
    } else {
      setComposers(false);
    }
  }  

  const [Bailey,setBailey]=useState(true);
  function BaileyToggle(){
    setEverything(false);
    setBailey(!Bailey);
    if (Breuer && Payson && Wooten && Tompkins && German && Dorn && !Bailey && Delecluse && Anderson && Macarez) {
      setComposers(true);
    } else {
      setComposers(false);
    }
  }

  const [Delecluse,setDelecluse]=useState(true);
  function DelecluseToggle(){
    setEverything(false);
    setDelecluse(!Delecluse);
    if (Breuer && Payson && Wooten && Tompkins && German && Dorn && Bailey && !Delecluse && Anderson && Macarez) {
      setComposers(true);
    } else {
      setComposers(false);
    }
  }

  const [Anderson,setAnderson]=useState(true);
  function AndersonToggle(){
    setEverything(false);
    setAnderson(!Anderson);
    if (Breuer && Payson && Wooten && Tompkins && German && Dorn && Bailey && Delecluse && !Anderson && Macarez) {
      setComposers(true);
    } else {
      setComposers(false);
    }
  }

  const [Macarez,setMacarez]=useState(true);
  function MacarezToggle(){
    setEverything(false);
    setMacarez(!Macarez);
    if (Breuer && Payson && Wooten && Tompkins && German && Dorn && Bailey && Delecluse && Anderson && !Macarez) {
      setComposers(true);
    } else {
      setComposers(false);
    }
  }


  // Year two split by techniques
  const [techniques, setTechniques]=useState(true);
  function techniquesToggle(){
    if (!techniques){
      setFlams(true);
      setRuffs(true);
      setFourStrokes(true);
      setTechniques(!techniques);
    } else {
      setFlams(false);
      setRuffs(false);
      setFourStrokes(false);
      setTechniques(!techniques);}
  }
  
  const [flams,setFlams]=useState(true);
  function flamsToggle(){
    setEverything(false);
    setFlams(!flams);
    if (!flams && ruffs && fourStrokes) {
      setTechniques(true);
    } else {
      setTechniques(false);
    }
  }

  const [ruffs,setRuffs]=useState(true);
  function ruffsToggle(){
    setEverything(false);
    setRuffs(!ruffs);
    if (flams && !ruffs && fourStrokes) {
      setTechniques(true);
    } else {
      setTechniques(false);
    }
  }

  const [fourStrokes,setFourStrokes]=useState(true);
  function fourStrokesToggle(){
    setEverything(false);
    setFourStrokes(!fourStrokes);
    if (!flams && ruffs && !fourStrokes) {
      setTechniques(true);
    } else {
      setTechniques(false);
    }
  }

  

  return (
    <div className="App">
        <h1 id="TITLE"><img src={levelLeaf} />evel I 202</h1>
        <p id="chris">Curriculum by Chris Lamb</p>
        <p id="chris2">Site by Jeffrey Ryan</p>

      <div id='content-buttons'>
        <h3>Toggle all content:</h3>
          <button onClick={everythingToggle} className={'toggle-off ' + (everything ? '':'toggle-on')}>
            Everything
          </button>

        <h3>Instruments:</h3>
          <button onClick={instrumentsToggle} className={'toggle-off ' + (instruments ? '':'toggle-on')}>
            All
          </button>

          <button onClick={snareToggle} className={'toggle-off ' + (snare ? '':'toggle-on')}>
            Snare
          </button>

          <button onClick={xyloToggle} className={'toggle-off ' + (xylo ? '':'toggle-on')}>
            Xylo
          </button>

        <h3>Sessions:</h3>
          <button onClick={sessionsToggle} className={'toggle-off ' + (sessions ? '':'toggle-on')}>
            All
          </button>

          <button onClick={session1Toggle} className={'toggle-off ' + (session1 ? '':'toggle-on')}>
            Session 1
          </button>

          <button onClick={session2Toggle} className={'toggle-off ' + (session2 ? '':'toggle-on')}>
            Session 2
          </button>

          <button onClick={session3Toggle} className={'toggle-off ' + (session3 ? '':'toggle-on')}>
            Session 3
          </button>

          <button onClick={session4Toggle} className={'toggle-off ' + (session4 ? '':'toggle-on')}>
            Session 4
          </button>

          <button onClick={session5Toggle} className={'toggle-off ' + (session5 ? '':'toggle-on')}>
            Session 5
          </button>

          <button onClick={session6Toggle} className={'toggle-off ' + (session6 ? '':'toggle-on')}>
            Session 6
          </button>


        <h3>Composers:</h3>
          <button onClick={composersToggle} className={'toggle-off ' + (composers ? '':'toggle-on')}>
            All
          </button>

          <button onClick={BreuerToggle} className={'toggle-off ' + (Breuer ? '':'toggle-on')}>
            Breuer
          </button>

          <button onClick={PaysonToggle} className={'toggle-off ' + (Payson ? '':'toggle-on')}>
            Payson  
          </button>

          <button onClick={WootenToggle} className={'toggle-off ' + (Wooten ? '':'toggle-on')}>
            Wooten  
          </button>

          <button onClick={TompkinsToggle} className={'toggle-off ' + (Tompkins ? '':'toggle-on')}>
            Tompkins  
          </button>

          <button id='germanEtudes' onClick={GermanToggle} className={'toggle-off ' + (German ? '':'toggle-on')}>
            German Etudes
          </button>

          <button onClick={DornToggle} className={'toggle-off ' + (Dorn ? '':'toggle-on')}>
            Dorn
          </button>

          <button onClick={BaileyToggle} className={'toggle-off ' + (Bailey ? '':'toggle-on')}>
            Bailey
          </button>

          <button onClick={DelecluseToggle} className={'toggle-off ' + (Delecluse ? '':'toggle-on')}>
            Delecluse
          </button>

          <button onClick={AndersonToggle} className={'toggle-off ' + (Anderson ? '':'toggle-on')}>
            Anderson
          </button>

          <button onClick={MacarezToggle} className={'toggle-off ' + (Macarez ? '':'toggle-on')}>
            Macarez
          </button>

          <h3>Techniques:</h3>
          <button onClick={techniquesToggle} className={'toggle-off ' + (techniques ? '':'toggle-on')}>
            All
          </button>

          <button onClick={flamsToggle} className={'toggle-off ' + (flams ? '':'toggle-on')}>
            Flams
          </button>

          <button onClick={ruffsToggle} className={'toggle-off ' + (ruffs ? '':'toggle-on')}>
            Ruffs
          </button>

          <button id='fourStrokes' onClick={fourStrokesToggle} className={'toggle-off ' + (fourStrokes ? '':'toggle-on')}>
            Four Strokes
          </button>
        </div>

      
      
      {(splitFiles.filter(file => {
            // Filter for instruments
            if (everything){
              return true
            } else {
              if (instruments) {
                return true
              }
              if (file.snare){
                return snare
              }
              if (file.xylo){
                return xylo
              }}})
          .filter(file => {
              // Filter for sessions
              if (everything){
                return true
              } else {
              if (sessions) {
                return true
              }
              if (file.session == 1){
                return session1
              }
              if (file.session == 2){
                return session2
              }
              if (file.session == 3){
                return session3
              }
              if (file.session == 4){
                return session4
              }
              if (file.session == 5){
                return session5
              }
              if (file.session == 6){
                return session6
              }}})
            .filter(file => {
              // Filter for composers
              if (everything){
                return true
              } else {
                if (composers) {
                  return true
                }
                if (file.breuer){
                  return Breuer
                }
                if (file.payson){
                  return Payson
                }
                if (file.wooten){
                  return Wooten
                }
                if (file.tompkins){
                  return Tompkins
                }
                if (file.german){
                  return German
                }
                if (file.dorn){
                  return Dorn
                }
                if (file.bailey){
                  return Bailey
                }
                if (file.delecluse){
                  return Delecluse
                }
                if (file.anderson){
                  return Anderson
                }
                if (file.macarez){
                  return Macarez
                }}})
              .filter(file => {
              // Filter for techniques
              if (everything){
                return true
              } else {
                if (techniques) {
                  return true
                }
                const n = file.flams*2 + file.ruffs*3 + file.ruffs*5
                if (file.flams*flams || file.ruffs*ruffs || file.fourStrokes*fourStrokes){
                  return true
                }}})
            .filter(file => {
              // Filter for techniques
              if (everything){
                return true
              } else {
                if (techniques) {
                  return true
                }
                const n = file.flams*2 + file.ruffs*3 + file.ruffs*5
                if (file.flams*flams || file.ruffs*ruffs || file.fourStrokes*fourStrokes){
                  return true
                }}})
          .map((file) => (
                        <div className="file-preview" key={file.id}>
                            <h4 className="file-preview-name">{file.title}</h4>
                            <a className="file-preview-link" href={file.pdf}>Link</a>
                            <p>{file.notes}</p>
                        </div>
                    )))
                }
    </div>
  );
}

export default App;


