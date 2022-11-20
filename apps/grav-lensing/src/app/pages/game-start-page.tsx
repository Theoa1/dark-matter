import { useCallback } from "react"
import { useHistory } from "react-router-dom"
import { BottomRight } from "../components/bottom-right"
import { Background } from "../components/background"
import { TopLeft } from "../components/top-left"
import { HeaderLogo } from "../components/header-logo"
import { BottomCenter } from "../components/bottom-center"
import { EasyButton } from "../components/buttons/easy-button"
import { MediumButton } from "../components/buttons/medium-button"
import { HardButton } from "../components/buttons/hard-button"
import styled from "@emotion/styled"
import { Routes } from "../routes"
import { ClickSound } from "../components/audio/sound"
import amplitude from 'amplitude-js'
import { HelpButton } from "../components/buttons/help-button"

const StyledText = styled.div`
  position:relative;
  color: white;
  margin: auto;
  padding-top:min(20vh,200px);
  justify-content: center;
  display: flex;
  text-align: center;
  font-size: 2em;
  font-weight: 600;
  line-height:1.4em;
`

const Text = styled.div`
  position:relative;
  justify-content: center;
  display: flex;
  color: white;
  font-size: 1.5em;
  padding-top: min(5%,1.5em);
  text-align: center;
  line-height:1.5em;
`

const ButtonPosition = styled.div`
  position: relative;
  padding-top: min(5%,100px);
  width: 100%;
  display: flex;
  justify-content: center;
`

const ContainerDiv = styled.div`
  top:0;
  left:0;
  width:100%;
  height:100%;
`

export const GameStartPage = () => {
  const history = useHistory()

  const handleEasy = useCallback(() => {
    ClickSound.play()
    amplitude.getInstance().logEvent('Click to play',{'gameLevel':'Easy'})
    history.push(`${Routes.Game}/easy`)
  }, [history])

  const handleMedium = useCallback(() => {
    ClickSound.play()
    amplitude.getInstance().logEvent('Click to play',{'gameLevel':'Medium'})
    history.push(`${Routes.Game}/medium`)
  }, [history])

  const handleHard = useCallback(() => {
    ClickSound.play()
    amplitude.getInstance().logEvent('Click to play',{'gameLevel':'Hard'})
    history.push(`${Routes.Game}/hard`)
  }, [history])

  return (
    <Background imgSrc='/assets/img/gl-bg-1.jpg'>
      <TopLeft>
          <HeaderLogo/>
      </TopLeft>
      <ContainerDiv>
        <StyledText>

            We've hidden some clumps of dark matter in this
            <br />virtual universe. Click on the squares in the sky to
            <br />conduct a scan of the square's galaxies.

        </StyledText>

        <Text>You start with $50,000 of funding. Each scan costs you some funding and each
            <br/> time you find a clump of dark matter you win some funding back. </Text>

        <Text>Find all the clumps before funding runs out to win!</Text>

        <ButtonPosition>
            <EasyButton onClick={handleEasy} />
            <MediumButton onClick={handleMedium} />
            <HardButton onClick={handleHard} />
        </ButtonPosition>
      </ContainerDiv>
      <BottomCenter width='70%'>

      </BottomCenter>
      <BottomRight>
        <HelpButton />
      </BottomRight>
    </Background>
  )
}
