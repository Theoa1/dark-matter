import { useCallback, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { BottomRight } from "../components/bottom-right"
import { Background } from "../components/background"
import { TutorialHeader } from "../components/tutorial-header"
import { BottomCenter } from "../components/bottom-center"
import { NextButton } from "../components/buttons/next-button"
import { Magnify } from "../components/magnify"
import { AnimatedStack } from "../components/stack/animated-stack"
import { Stack } from "../components/stack/stack"
import { MagnifyViewer } from "../components/magnify-viewer"
import { MagnifyClip } from "../components/magnify-clip"
import { TopLeft } from "../components/top-left"
import { Label } from "../components/label"
import { labelSize, labelFontSize, stackLayers } from "../config"
import { BottomLeft } from "../components/bottom-left"
import { TutorialSlider } from "../components/tutorial-slider"
import { TutorialText } from "../components/tutorial-text"
import { ClickSound } from "../components/audio/sound"
import { ObstacleMass } from "../components/audio/sound"
import { StackedGalaxies } from "../components/audio/sound"
import { TutorialAmbience } from  "../components/audio/sound"
import { useAmbientFn } from "../components/audio/ambient-context"


import amplitude from 'amplitude-js'
import { StackButton } from "../components/buttons/stackrestartbutton"

const initialMassValue = 0.05
const massValueMultiplier = 0.05

export const StackedGalaxiesPage3 = () => {
  const history = useHistory()

  const [lensMass, setLensMass] = useState(initialMassValue)

  const [isPlaying, setIsPlaying] = useState(false)

  if(isPlaying === false)
  {
    StackedGalaxies.play()
    setIsPlaying(true)
  }

  const handleNext = useCallback(() => {
    amplitude.getInstance().logEvent('Click on Next Button',{'CurrentPage':'Stacked Galaxies 3'})
    history.push('/tutorial/ending')
    ClickSound.play()
  }, [history])


  const [firstChange, setFirstChange] = useState(false)
  const handleMassAdjust = useCallback((val: number) => {
    setLensMass((val + 0.5) * massValueMultiplier)
    setFirstChange(true)
  }, [setLensMass])

  const setAmbient = useAmbientFn()

  useEffect(() => {
    setAmbient(TutorialAmbience, 3000)
  }, [setAmbient])



  return (


    <Background imgSrc='/assets/img/gl-bg-1.jpg'>
    <div className="styledcomponent" style={{width: "100%", height: "100vh", position: "fixed", top: "0", left: 0,}}>
      <video  src="../../assets/video/thirdstackingbgvid3.mp4" style={{height: "100%",width: "100%", objectFit: "cover"}} autoPlay/>

      
    
      <TutorialHeader currentChapter={3} />
      

      <BottomCenter width='70%'>
        {/* <TutStyledText>
          The easiest way to see the weak
            <br />effect is to "stack" the galaxies.
        </TutStyledText> */}
      </BottomCenter>
      <BottomRight>
        <NextButton onClick={handleNext} />
        
      </BottomRight>
      <BottomLeft>
        <TutorialText heading={'It can be measured by combining (“stacking”) images of many galaxies.'}/>
        {/* <TutStyledText>
          The easiest way to see the weak
            <br />effect is to "stack" the galaxies.
        </TutStyledText> */}
      </BottomLeft>
      
      </div>
    </Background>
    
  )
}
