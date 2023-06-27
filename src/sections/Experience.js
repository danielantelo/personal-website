import React from "react"
import styled from "styled-components"
import Section from "../components/Section"
import HistoricalListItem from "../components/HistoricalListItem"

const MostRecent = styled.div`
  border-bottom: 0.1em solid #ddd;
  padding-bottom: 1em;

  @media print {
    break-after: auto;
    border-bottom: none;
    padding-bottom: 0;
  }
`

const Rest = styled.div`
  padding-top: 30px;
`

export default function Experience() {
  return (
    <Section title="Work Experience" description="Where I've worked">
      <MostRecent>
        <HistoricalListItem
          title="Engineering Manager & Lead Frontend Engineer"
          location="OakNorth, London"
          dates="September 2019 - Present"
        >
          <p>
            I was the first Frontend engineer to join this SaaS FinTech startup.
            Helped hire and grow the frontend engineering team; personally
            designed the frontend architecture and technical ecosystem, built
            initial working prototypes and then coordinated the production ready
            implementation and delivery through the frontend guild. I took
            initiative to make change and lead teams through multiple iterations
            of the product, always performing above expectation, which saw me
            take on a lot of additional managerial responsibilities, and finally
            settle into a hybrid Engineering Manager/Principal Frontend Engineer
            role.
          </p>

          <ul>
            <li>
              As the Frontend Lead I:
              <ul>
                <li>
                  coordinate the frontend guild providing architectural
                  direction and execution of frontend projects and improvements
                </li>
                <li>
                  ensure high code confidence for continuous deployment of the
                  web app via adequate testing such as workflow driven e2e
                  testing and visual regression with Cypress, schema contract
                  testing and unit testing
                </li>
                <li>
                  manage the frontend engineering interview process (including
                  bespoke exercises)
                </li>
              </ul>
            </li>
            <li>
              As an Engineering Manager I:
              <ul>
                <li>
                  managed multiple cross-functional product focused squads
                  tackling a variety of projects, including loan data
                  normalisation & visualisation, monitoring and annual review
                  workflows, and more recently climate impact analysis
                </li>
                <li>
                  managed the career progression and well-being of 35 engineers
                  that have been a part of our teams (up to 20 at once)
                </li>
                <li>
                  optimised team processes for incremental delivery and high
                  code confidence following lean/agile methodologies
                </li>
              </ul>
            </li>
          </ul>
        </HistoricalListItem>
        <HistoricalListItem
          title="Senior Software Developer"
          location="NET-A-PORTER, London"
          dates="May 2017 - September 2019"
        >
          <p>
            Team lead and javascript/node full stack engineer. Highlights
            include:
          </p>
          <ul>
            <li>
              led the development of the greenfield project Porter Digital (team
              of 6 engineers)
            </li>
            <li>
              helped change the ways of working and improve productivity for the
              whole content department (4 teams): move to a monolith lerna repo,
              improved CI and more testing focus
            </li>
            <li>
              ran a cross team steering group to up our coding and testing
              standards and ensure we were all in sync and sharing
            </li>
            <li>ran a code club to help upskill engineers with focus on TDD</li>
          </ul>
        </HistoricalListItem>
      </MostRecent>
      <Rest>
        <HistoricalListItem
          title="Lead Web Developer"
          location="Student.com, London"
          dates="December 2014 - January 2017"
        >
          <p>
            I was the second developer to join this incredibly fast paced
            startup and witnessed it grow from a small room of people to over
            150 employees. I was a key contributor to the stack and evolution of
            the product. As we grew I earnt the role of Lead Developer of the
            web team (up to 13 developers) focused on the student experience.
            Content and mobile first full stack fun, ensuring test driven
            reusable code in both PHP (Symfony2) and Javascript
            (ES6/Redux/React) technologies, as well as accessible HTML, living
            style guides (Sass/Sussy) and performance optimisation.
          </p>
        </HistoricalListItem>
        <HistoricalListItem
          title="Software Engineer II"
          location="Indra Software Labs, A Coruña (Spain)"
          dates="June 2011 - October 2014"
        >
          <p>
            Responsible for various stages of the software life cycle of
            corporate desktop application and web portal development. Worked on
            the desktop application for Gas Natural operations management and
            then became a core member of the Vodafone Spain online store
            project, helping to lead the front-end development. Full stack
            development with Java, Spring MVC, Oracle SQL, JSP, HTML, CSS and
            Javascript.
          </p>
        </HistoricalListItem>
        <HistoricalListItem
          title="Lead Developer"
          location="Cambur, A Coruña (Spain)"
          dates="July 2010 - November 2011"
        >
          <p>
            Hired as project lead of a newly formed web development company with
            a queue of clientele expecting websites. I was responsible for
            establishing an organised method of work for the team, setting up a
            library of reusable code, and developing an in-house content and
            commerce management system. Full stack LAMP development with PHP,
            MySQL, HTML, CSS and Javascript.
          </p>
        </HistoricalListItem>
        <HistoricalListItem
          title="Web Developer"
          location="Wide Area Communications, London"
          dates="February 2008 - February 2010"
        >
          <p>
            Providing content, community and commerce solutions. Hired as part
            of a team designing and developing a one stop generic and secure
            basket/checkout and subscription module, for the existing wide area
            management system, meeting the requirements of several clients
            wanting e-commerce solutions
          </p>
        </HistoricalListItem>
        <HistoricalListItem
          title="Web Developer"
          location="MoneySavingExpert.com, London"
          dates="June 2006 - February 2008"
        >
          <p>
            Part of a four man team responsible for the development, maintenance
            and optimisation of the moneysavingexpert.com website, forums and
            tools, ensuring the best user experience possible for the circa 4.5
            million unique monthly visitors
          </p>
        </HistoricalListItem>
      </Rest>
    </Section>
  )
}
