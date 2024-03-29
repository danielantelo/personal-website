import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  border-bottom: ${props => (props.showDivider ? "0.1em solid #ddd" : "none")};
  margin-bottom: ${props => (props.showDivider ? "1em" : "0")};
  padding-bottom: ${props => (props.showDivider ? "1em" : "0")};
  clear: both;
  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
    border: none;
  }
`

const Title = styled.h3`
  margin: 0;
  font-size: 1.3rem;
`

const Location = styled.div`
  font-size: 1.1rem;
`

const Dates = styled.div`
  font-size: 1rem;
  @media (min-width: 900px) {
    margin-top: 5px;
    float: right;
  }

  @media print {
    margin-top: 5px;
    float: right;
  }
`

export default function HistoricalListItem({
  title,
  location,
  dates,
  children,
  additionalRole,
}) {
  return (
    <Wrapper showDivider={!additionalRole}>
      <Dates>{dates}</Dates>
      <Title>{title}</Title>
      <Location>{location}</Location>
      {children}
    </Wrapper>
  )
}
