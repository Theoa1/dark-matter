import { StackProps } from "../stack/stack"
import {Stack} from "../stack/stack"
import styled from "@emotion/styled"
import { useCallback, useEffect, useState } from "react"
import { DotDiv } from "../game/grid-button"

export type StackButtonProps = {
  onClick: () => boolean,
  columns?:number,
  rows?:number
}

type ButtonProps = {
  border: string
}

const StyledStackButton = styled.button<ButtonProps>`
  border: ${props => props.border};
  cursor: default;
  overflow: hidden;
  outline: none;
  position: relative;
  &:hover {
    border: solid yellow;
  }
  justify-content:center;
  padding:0px;
  background:black;
`

const defaultBorder = '1px solid rgba(108, 122, 137, 0.7)'
export const StackButton = ({
  onClick,
  ...stackProps
}:StackButtonProps&StackProps) =>{
  const [border, setBorder] = useState(defaultBorder)
  const [scanResult, setScanResult] = useState<boolean>(false)

  const handleScanClick = useCallback(() => {
    const newResult = onClick()
    setScanResult(newResult)
  }, [onClick])

  useEffect(()=>{
    if(scanResult){
      setBorder('solid yellow')
    }
    else{
      setBorder('1px solid rgba(108, 122, 137, 0.7)')
    }
  }, [scanResult])

  return(
    <StyledStackButton border = {border} onClick = {handleScanClick}>
      {scanResult === true ?
        <DotDiv />
        :
        <Stack {...stackProps} layerOpacity={1} />
      }
    </StyledStackButton>
  )
}
