import React from "react"
import styled from "styled-components"
import Section from "../components/Section"

const Highlight = styled.div`
  vertical-align: top;

  @media (min-width: 900px) {
    display: inline-block;
    margin-right: 10px;
    width: calc(33.33% - 10px);
  }

  @media print {
    display: inline-block;
    margin-right: 10px;
    width: calc(33.33% - 10px);
  }
`

const Tech = styled.div`
  padding: 10px 0;
`

const SkillList = styled.ul`
  list-style: none;
  padding: 10px 0 0;
  @media (min-width: 900px) {
    display: inline-block;
    width: 25%;
  }
  @media print {
    display: inline-block;
    width: 25%;
  }
`

const Skill = styled.li`
  margin: 0;
  border-bottom: 1px solid #ddd;
  padding: 8px 0;
`

export default function Skills() {
  return (
    <Section grey title="Skills & Knowledge" description="What I'm best at">
      <Highlight>
        <h3>People Management</h3>
        <p>
          People first mentality towards management. I ensure teams feel
          empowered and challenged through a culture of trust, transparency and
          clearly defined expectations, encouraging all to bring ideas to the
          table to ensure the best outcomes. A happy and empowered team will
          never dissapoint!
        </p>
      </Highlight>
      <Highlight>
        <h3>Project Direction</h3>
        <p>
          Proven ability to lead product focused teams using agile methodologies
          and continuous integration principles, fostering a culture of
          understanding user problems through discovery, feedback and metrics,
          while embracing iterative/incremental delivery.
        </p>
      </Highlight>
      <Highlight>
        <h3>Software Development & Delivery</h3>
        <p>
          Always happy to get hands on! Passion for maintainable, extensible,
          reusable and readable code. Highly focused on amazing user
          experiences, continuous delivery and automated testing.
        </p>
      </Highlight>

      {/* <Highlight>
        <h3>Software Development & Delivery</h3>
        <p>
          Highly focused on continuous delivery and automated testing. Passion
          for maintainable, extensible, reusable and readable code.
        </p>
      </Highlight>
      <Highlight>
        <h3>Frontend Engineering</h3>
        <p>
          Pasionate about building great user experiences that are highly
          performant, accessible and backed up by automated visual regression
          tests.
        </p>
      </Highlight>
      <Highlight>
        <h3>Project Direction</h3>
        <p>
          Proven ability to lead development teams using agile methodologies and
          continuous integration principles.
        </p>
      </Highlight> */}
      <Tech>
        <h3>Technical Expertise</h3>
        <SkillList>
          <Skill>Typescript</Skill>
          <Skill>Javascript</Skill>
        </SkillList>
        <SkillList>
          <Skill>React</Skill>
          <Skill>NextJS</Skill>
        </SkillList>
        <SkillList>
          <Skill>Micro Frontends</Skill>
          <Skill>Serverless</Skill>
        </SkillList>
        <SkillList>
          <Skill>GraphQL / REST APIs</Skill>
          <Skill>SQL / Mongo</Skill>
        </SkillList>
      </Tech>
    </Section>
  )
}
