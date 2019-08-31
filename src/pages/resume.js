import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components";
import Layout from "../components/layout"

const ResumeBox = styled.div`
  display: flex;
  justify-content: center;
  // align-item: center;
  margin: 0 auto;
  padding: 10px;
`;

const Resume = styled.iframe`
  margin: 0 auto;
  width: 830px;
  height: 500px;
`;

const DownloadsPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout />
        <ResumeBox>
          <Resume src="https://docs.google.com/document/d/e/2PACX-1vTsFRy-UHZZolHQIO27Q0gkN94lvg7rGiCnxh6VBOwm99Ukv04JJjSxfcHvz3uFAVLccza8QeOffTdK/pub?embedded=true">Resume</Resume>
        </ResumeBox>
      <div style={{ margin: `5px auto`, maxWidth: 650, padding: `0 1rem`, textShadow: `none`, }}>
        <h3>Download</h3>
        <ul>
          {data.allFile.edges.map((file, index) => {
            return (
              <li key={`pdf-${index}`}>
                <a href={file.node.publicURL} download>
                  {file.node.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default DownloadsPage